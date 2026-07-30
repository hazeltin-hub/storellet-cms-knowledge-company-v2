(function registerKnowledgeSearch(globalScope) {
  "use strict";

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[’'`]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function tokenize(value) {
    const normalized = normalizeText(value);
    if (!normalized) return [];

    const latinAndNumbers = normalized.match(/[a-z0-9]+/g) || [];
    const cjkRuns = normalized.match(/[\p{Script=Han}]+/gu) || [];
    const cjkTokens = [];

    cjkRuns.forEach((run) => {
      if (run.length === 1) {
        cjkTokens.push(run);
        return;
      }

      for (let index = 0; index < run.length - 1; index += 1) {
        cjkTokens.push(run.slice(index, index + 2));
      }
    });

    return unique([...latinAndNumbers, ...cjkTokens]);
  }

  function parseScalar(rawValue) {
    const trimmed = rawValue.trim();
    if (!trimmed) return "";

    if (
      (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))
    ) {
      return trimmed.slice(1, -1);
    }

    if (trimmed === "true") return true;
    if (trimmed === "false") return false;

    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      return trimmed
        .slice(1, -1)
        .split(",")
        .map((item) => parseScalar(item))
        .filter((item) => item !== "");
    }

    return trimmed;
  }

  function parseFrontMatter(markdown) {
    const normalized = String(markdown || "").replace(/\r\n/g, "\n");
    if (!normalized.startsWith("---\n")) {
      return { attributes: {}, body: normalized.trim() };
    }

    const closingIndex = normalized.indexOf("\n---\n", 4);
    if (closingIndex === -1) {
      return { attributes: {}, body: normalized.trim() };
    }

    const frontMatter = normalized.slice(4, closingIndex);
    const body = normalized.slice(closingIndex + 5).trim();
    const attributes = {};
    let activeArrayKey = null;

    frontMatter.split("\n").forEach((line) => {
      const arrayItem = line.match(/^\s*-\s+(.+)$/);
      if (arrayItem && activeArrayKey) {
        attributes[activeArrayKey].push(parseScalar(arrayItem[1]));
        return;
      }

      const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (!keyValue) return;

      const [, key, rawValue] = keyValue;
      if (rawValue.trim() === "") {
        attributes[key] = [];
        activeArrayKey = key;
      } else {
        attributes[key] = parseScalar(rawValue);
        activeArrayKey = null;
      }
    });

    return { attributes, body };
  }

  function extractModelAnswer(body) {
    const content = String(body || "").trim();
    const answerHeading = /^##\s+Model Answer\s*$/im;
    const headingMatch = answerHeading.exec(content);
    if (!headingMatch) return content;

    const answerStart = headingMatch.index + headingMatch[0].length;
    const remaining = content.slice(answerStart);
    const nextHeading = remaining.search(/^##\s+/m);
    return (nextHeading === -1 ? remaining : remaining.slice(0, nextHeading)).trim();
  }

  function toArray(value) {
    if (Array.isArray(value)) return value.map(String);
    if (value === undefined || value === null || value === "") return [];
    return [String(value)];
  }

  function buildEntry(markdown, path) {
    const parsed = parseFrontMatter(markdown);
    const attributes = parsed.attributes;

    return {
      id: String(attributes.id || path),
      path,
      category: String(attributes.category || "未分類"),
      module: String(attributes.module || ""),
      intent: String(attributes.intent || ""),
      status: String(attributes.status || "draft").toLowerCase(),
      question: String(attributes.question || ""),
      alternatives: toArray(attributes.alternatives),
      keywords: toArray(attributes.keywords),
      sourceTitle: String(attributes.source_title || path),
      sourceUrl: String(attributes.source_url || ""),
      lastReviewed: String(attributes.last_reviewed || ""),
      answer: extractModelAnswer(parsed.body),
      searchableText: [
        attributes.question,
        ...toArray(attributes.alternatives),
        ...toArray(attributes.keywords),
        attributes.category,
        attributes.module,
        parsed.body
      ]
        .filter(Boolean)
        .join(" ")
    };
  }

  function phraseScore(query, candidate, exactPoints, containsPoints) {
    const normalizedQuery = normalizeText(query);
    const normalizedCandidate = normalizeText(candidate);
    if (!normalizedQuery || !normalizedCandidate) return 0;
    if (normalizedQuery === normalizedCandidate) return exactPoints;
    if (
      normalizedCandidate.includes(normalizedQuery) ||
      normalizedQuery.includes(normalizedCandidate)
    ) {
      return containsPoints;
    }
    return 0;
  }

  function scoreEntry(query, entry) {
    let score = phraseScore(query, entry.question, 120, 58);

    entry.alternatives.forEach((alternative) => {
      score += phraseScore(query, alternative, 95, 42);
    });

    entry.keywords.forEach((keyword) => {
      score += phraseScore(query, keyword, 28, 14);
    });

    const queryTokens = tokenize(query);
    const entryTokens = new Set(tokenize(entry.searchableText));
    const matchedTokens = queryTokens.filter((token) => entryTokens.has(token));

    score += matchedTokens.length * 7;
    if (queryTokens.length > 0) {
      score += Math.round((matchedTokens.length / queryTokens.length) * 20);
    }

    if (entry.status === "confirmed") score += 5;
    return score;
  }

  function search(query, entries, minimumScore) {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) return { type: "empty", matches: [] };

    const ranked = entries
      .filter((entry) => entry.status !== "disabled")
      .map((entry) => ({ entry, score: scoreEntry(query, entry) }))
      .filter((result) => result.score >= minimumScore)
      .sort((left, right) => right.score - left.score);

    if (ranked.length === 0) {
      return { type: "none", matches: [] };
    }

    const topScore = ranked[0].score;

    // Improved conflict detection:
    // 1. Check for concept vs feature conflicts
    // 2. Only flag conflict if top entry is NOT a concept definition
    // 3. Concept entries usually have "係咩" or "是什么" in the question
    const isConceptEntry = (entry) => {
      const questionText = entry.question.toLowerCase();
      return questionText.includes('係咩') ||
             questionText.includes('係做咩') ||
             questionText.includes('是什么') ||
             questionText.includes('是什麼') ||
             questionText.includes('是咩') ||
             entry.alternatives.some(alt =>
               alt.toLowerCase().includes('what is') ||
               alt.toLowerCase().includes('係咩') ||
               alt.toLowerCase().includes('係做咩')
             );
    };

    // If top entry is a concept definition, prefer it over feature entries
    if (isConceptEntry(ranked[0].entry)) {
      console.log("📖 Concept entry detected, prioritizing over features");
      return { type: "answer", matches: ranked.slice(0, 1) };
    }

    // Original conflict logic for non-concept conflicts
    const conflictingMatches = ranked.filter(
      (result) =>
        result.score >= topScore * 0.92 &&
        result.entry.status === "confirmed" &&
        result.entry.answer !== ranked[0].entry.answer
    );

    if (
      ranked[0].entry.status === "confirmed" &&
      conflictingMatches.length > 0
    ) {
      return {
        type: "conflict",
        matches: [ranked[0], ...conflictingMatches]
      };
    }

    return { type: "answer", matches: ranked.slice(0, 3) };
  }

  const api = {
    normalizeText,
    tokenize,
    parseFrontMatter,
    extractModelAnswer,
    buildEntry,
    scoreEntry,
    search
  };

  globalScope.KnowledgeSearch = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
