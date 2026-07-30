# 🔧 Custom API & Model Configuration Guide

## Overview

The AI settings panel now supports custom API endpoints and model names, giving you flexibility to use:

- **Proxy servers** for Anthropic API
- **Self-hosted Claude** instances
- **Alternative AI services** compatible with Anthropic's API format
- **Custom model names** not in the preset list

## New Configuration Options

### 1. API Endpoint

**Default:** `https://api.anthropic.com`

**Custom Examples:**
```
https://your-proxy-server.com
https://api.your-domain.com
http://localhost:8080
https://your-company.internal/anthropic-proxy
```

**Use Cases:**
- Corporate proxy servers
- Self-hosted API gateways
- Rate limiting proxies
- Geographic routing
- Custom authentication layers

### 2. Model Configuration Modes

#### **Preset Mode** (預設模式)
Choose from predefined Claude models:
- Claude Sonnet (推薦)
- Claude Haiku (經濟實惠)
- Claude Opus (最強性能)

#### **Custom Mode** (自定義模式)
Enter any model name you want:
```
claude-3-5-sonnet-20241022
claude-3-opus-20240229
your-custom-model-name
experimental-model-v1
```

## Use Cases

### 1. **Using a Proxy Server**

**Scenario:** Your company uses a proxy server for API calls

**Setup:**
```
API Endpoint: https://api-proxy.company.com
API Key: [Your proxy API key]
Model Mode: Preset
Model: Claude Sonnet
```

### 2. **Self-Hosted Claude**

**Scenario:** You have Claude running on your own servers

**Setup:**
```
API Endpoint: http://your-internal-server:8000
API Key: [Your internal API key]
Model Mode: Custom
Model Name: claude-3-5-sonnet-20241022
```

### 3. **Custom Model**

**Scenario:** You want to use a model not in the preset list

**Setup:**
```
API Endpoint: https://api.anthropic.com
API Key: [Your Anthropic API key]
Model Mode: Custom
Model Name: claude-3-experimental-model
```

### 4. **Development/Testing**

**Scenario:** Testing with a local mock server

**Setup:**
```
API Endpoint: http://localhost:3000
API Key: test-key-123
Model Mode: Custom
Model Name: mock-model
```

## Configuration Examples

### **Example 1: Corporate Proxy**
```javascript
{
  apiKey: "sk-ant-company-key",
  apiEndpoint: "https://api-proxy.corporate.com",
  modelMode: "preset",
  model: "claude-3-5-sonnet-20241022",
  maxTokens: 1000,
  temperature: 0.7,
  enabled: true
}
```

### **Example 2: Custom Model**
```javascript
{
  apiKey: "sk-ant-xxxxx",
  apiEndpoint: "https://api.anthropic.com",
  modelMode: "custom",
  model: "claude-3-opus-20240229",
  maxTokens: 2000,
  temperature: 0.5,
  enabled: true
}
```

### **Example 3: Self-Hosted**
```javascript
{
  apiKey: "internal-key",
  apiEndpoint: "http://internal-server:8080",
  modelMode: "custom",
  model: "claude-3-5-sonnet-20241022",
  maxTokens: 1500,
  temperature: 0.8,
  enabled: true
}
```

## Setup Instructions

### Via Settings Panel

1. **Open Settings Panel**
   - Click ⚙️ button in chatroom

2. **Configure API Endpoint**
   - Enter your custom endpoint
   - Leave default for official Anthropic API

3. **Choose Model Mode**
   - Select "預設模型" for preset models
   - Select "自定義模型" for custom names

4. **Enter Model Details**
   - **Preset mode:** Choose from dropdown
   - **Custom mode:** Type model name

5. **Test Connection**
   - Click 🔍 測試連接 button
   - Verify connection works

6. **Save Settings**
   - Click 💾 儲存設置
   - Start using AI features

## API Compatibility

Your custom endpoint should be compatible with Anthropic's API format:

### **Required Endpoints**
```
POST [endpoint]/v1/messages
```

### **Request Format**
```json
{
  "model": "model-name",
  "max_tokens": 1000,
  "temperature": 0.7,
  "system": "System prompt",
  "messages": [
    {
      "role": "user",
      "content": "User message"
    }
  ]
}
```

### **Response Format**
```json
{
  "content": [
    {
      "text": "AI response text"
    }
  ]
}
```

### **Headers Required**
```
x-api-key: [your-api-key]
anthropic-version: 2023-06-01
content-type: application/json
```

## Troubleshooting

### **Issue: Connection Failed**

**Possible Causes:**
1. Endpoint URL is incorrect
2. API key is invalid for custom endpoint
3. Network connectivity issues
4. CORS restrictions

**Solutions:**
1. Verify endpoint URL format
2. Check API key permissions
3. Test endpoint with curl/Postman
4. Ensure endpoint allows browser requests

### **Issue: Model Not Found**

**Possible Causes:**
1. Model name spelling error
2. Model not available on custom endpoint
3. Case sensitivity issues

**Solutions:**
1. Double-check model name spelling
2. Verify model availability
3. Use exact case as required by endpoint

### **Issue: Authentication Failed**

**Possible Causes:**
1. API key format mismatch
2. Custom endpoint uses different auth
3. Key expired or invalid

**Solutions:**
1. Check API key format
2. Verify auth requirements
3. Generate new API key

## Advanced Usage

### **Programmatic Configuration**

```javascript
// Load custom settings
chrome.storage.local.set({
  aiSettings: {
    apiKey: "your-api-key",
    apiEndpoint: "https://your-endpoint.com",
    modelMode: "custom",
    model: "your-model-name",
    maxTokens: 1000,
    temperature: 0.7,
    enabled: true
  }
});
```

### **Environment-Specific Settings**

```javascript
// Development
const devSettings = {
  apiEndpoint: "http://localhost:3000",
  apiKey: "dev-key"
};

// Production
const prodSettings = {
  apiEndpoint: "https://api.anthropic.com",
  apiKey: "prod-key"
};
```

### **Multiple Endpoints**

You can create different configurations for different endpoints:

```javascript
// Endpoint 1: Official API
{
  apiEndpoint: "https://api.anthropic.com",
  apiKey: "anthropic-key"
}

// Endpoint 2: Corporate Proxy
{
  apiEndpoint: "https://proxy.company.com",
  apiKey: "proxy-key"
}
```

## Security Considerations

### **Custom Endpoints**
- ✅ Verify SSL certificates for HTTPS
- ✅ Check endpoint reputation
- ✅ Ensure endpoint doesn't log sensitive data
- ❌ Don't use HTTP in production

### **API Keys**
- 🔒 Keep keys secure
- 🔄 Rotate keys regularly
- 👤 Use separate keys for different endpoints
- 🚫 Never commit keys to version control

### **Network Security**
- 🛡️ Use corporate VPNs when needed
- 🔒 Ensure proper firewall rules
- 📊 Monitor API usage and costs
- ⚠️ Set up rate limiting

## Migration Guide

### **From Default to Custom**

**Before:**
```
API Endpoint: [Default - not shown]
Model: Sonnet (preset)
```

**After:**
```
API Endpoint: https://your-proxy.com
Model Mode: Custom
Model Name: claude-3-5-sonnet-20241022
```

### **Testing Migration**

1. **Configure custom endpoint**
2. **Test connection**
3. **Try a sample question**
4. **Verify response quality**
5. **Monitor costs and usage**

## Examples & Templates

### **Corporate Setup**
```javascript
{
  apiKey: "sk-ant-corp-xxxxx",
  apiEndpoint: "https://api.corporate-proxy.com",
  modelMode: "preset",
  model: "claude-3-5-sonnet-20241022",
  maxTokens: 1000,
  temperature: 0.7,
  enabled: true
}
```

### **Development Setup**
```javascript
{
  apiKey: "dev-key-123",
  apiEndpoint: "http://localhost:3000",
  modelMode: "custom",
  model: "mock-model-v1",
  maxTokens: 500,
  temperature: 0.5,
  enabled: true
}
```

### **High-Performance Setup**
```javascript
{
  apiKey: "sk-ant-xxxxx",
  apiEndpoint: "https://api.anthropic.com",
  modelMode: "custom",
  model: "claude-3-opus-20240229",
  maxTokens: 2000,
  temperature: 0.8,
  enabled: true
}
```

## Testing & Validation

### **Test Checklist**

- [ ] Endpoint URL is accessible
- [ ] API key is valid
- [ ] Model name is correct
- [ ] Connection test succeeds
- [ ] Sample question works
- [ ] Response quality is good
- [ ] Cost tracking is working

### **Validation Steps**

1. **Endpoint Test**
   ```bash
   curl -X POST [your-endpoint]/v1/messages \
     -H "x-api-key: [your-key]" \
     -H "anthropic-version: 2023-06-01" \
     -H "content-type: application/json" \
     -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":50,"messages":[{"role":"user","content":"Hello"}]}'
   ```

2. **Browser Console Test**
   ```javascript
   // Open DevTools Console in chatroom
   fetch('[your-endpoint]/v1/messages', {
     method: 'POST',
     headers: {
       'x-api-key': '[your-key]',
       'anthropic-version': '2023-06-01',
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       model: 'your-model',
       max_tokens: 50,
       messages: [{role: 'user', content: 'Test'}]
     })
   }).then(r => r.json()).then(console.log)
   ```

## Support & Resources

### **Documentation**
- Anthropic API Docs: https://docs.anthropic.com/
- Claude API Reference: https://docs.anthropic.com/claude/reference/
- Migration Guide: See `AI_SETUP_GUIDE.md`

### **Tools**
- Test Configuration: `test-ai-config.html`
- Settings Panel: Built into chatroom (⚙️ button)
- Debug Mode: Open browser console

### **Common Issues**
- Connection problems: Check network and endpoint
- Authentication: Verify API key format and permissions
- Model errors: Confirm model name and availability
- Rate limits: Monitor usage and implement caching

## Changelog

### **v1.4.0**
- ✅ Added custom API endpoint support
- ✅ Added custom model name input
- ✅ Added preset/custom mode toggle
- ✅ Enhanced validation for custom endpoints
- ✅ Updated test connection for custom endpoints
- ✅ Improved error messages for troubleshooting

## Future Enhancements

Planned features for future versions:
- Multiple endpoint profiles
- Endpoint health monitoring
- Automatic failover between endpoints
- Custom authentication methods
- Advanced retry logic
- Usage analytics per endpoint
