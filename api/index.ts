import type { VercelRequest, VercelResponse } from '@vercel/node';

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Alexis via MCP</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><radialGradient id='g' cx='30%25' cy='30%25'><stop offset='0%25' stop-color='%23ffffff'/><stop offset='100%25' stop-color='%23e0e0e0'/></radialGradient></defs><circle cx='50' cy='50' r='45' fill='url(%23g)'/></svg>">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0a;
      color: #ededed;
      margin: 0;
      padding: 40px 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 720px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      color: #888;
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }
    h2 {
      font-size: 1.4rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    h2 .num {
      background: #333;
      color: #888;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
    }
    h3 {
      font-size: 1rem;
      color: #888;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
    }
    p {
      line-height: 1.7;
      color: #aaa;
    }
    pre {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 16px;
      overflow-x: auto;
      font-size: 0.875rem;
    }
    code {
      font-family: 'SF Mono', Monaco, 'Courier New', monospace;
    }
    .inline-code {
      background: #1a1a1a;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.875rem;
    }
    .highlight {
      color: #58a6ff;
    }
    .endpoint {
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 12px 16px;
      font-family: monospace;
      margin: 1rem 0;
      word-break: break-all;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .copy-field {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 8px 0;
    }
    .copy-field-label {
      color: #888;
      font-size: 0.75rem;
      min-width: 80px;
      flex-shrink: 0;
    }
    .copy-field-value {
      flex: 1;
      font-family: monospace;
      font-size: 0.875rem;
      word-break: break-all;
    }
    .copy-btn {
      background: #333;
      border: none;
      border-radius: 4px;
      padding: 6px 10px;
      color: #888;
      cursor: pointer;
      font-size: 0.75rem;
      transition: all 0.2s;
      flex-shrink: 0;
    }
    .copy-btn:hover {
      background: #444;
      color: #fff;
    }
    .copy-btn.copied {
      background: #238636;
      color: #fff;
    }
    .section-box {
      background: #111;
      border: 1px solid #222;
      border-radius: 12px;
      padding: 24px;
      margin-top: 1rem;
    }
    .chatgpt-section {
      background: linear-gradient(135deg, #10a37f10 0%, #10a37f05 100%);
      border: 1px solid #10a37f40;
      border-radius: 12px;
      padding: 20px;
      margin-top: 1.5rem;
    }
    .chatgpt-section h3 {
      color: #10a37f;
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .chatgpt-logo {
      width: 20px;
      height: 20px;
    }
    .steps-list {
      list-style: none;
      padding: 0;
      margin: 1rem 0;
    }
    .steps-list li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin: 12px 0;
    }
    .step-num {
      background: #10a37f;
      color: #fff;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      flex-shrink: 0;
    }
    .step-content {
      color: #aaa;
      line-height: 1.5;
    }
    .step-content strong {
      color: #fff;
    }
    .badge {
      display: inline-block;
      background: #238636;
      color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      margin-left: 8px;
    }
    a { color: #58a6ff; }
    .footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #222;
      color: #666;
      font-size: 0.875rem;
    }
    .diagram {
      background: #0d0d0d;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 24px;
      margin: 1.5rem 0;
      font-family: monospace;
      font-size: 0.875rem;
      color: #888;
      text-align: center;
      line-height: 2;
    }
    .diagram .arrow {
      color: #58a6ff;
    }
    .diagram .node {
      color: #fff;
      background: #1a1a1a;
      padding: 4px 12px;
      border-radius: 4px;
      display: inline-block;
    }
    .vision-box {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border: 1px solid #333;
      border-radius: 12px;
      padding: 24px;
      margin-top: 1rem;
    }
    .vision-box p {
      color: #bbb;
    }
    .vision-box strong {
      color: #fff;
    }
    details {
      margin-top: 1rem;
    }
    summary {
      cursor: pointer;
      color: #58a6ff;
      font-size: 0.875rem;
    }
    summary:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Contact Alexis <span class="badge">MCP</span></h1>
    <p class="subtitle">Reach me through your AI assistant.</p>

    <!-- SECTION 1: HOW TO -->
    <h2><span class="num">1</span> How to</h2>

    <div class="endpoint">
      <span id="endpoint-url">https://mcp.tuls.me/api/mcp</span>
      <button class="copy-btn" onclick="copyField('endpoint-url', this)">Copy</button>
    </div>

    <details>
      <summary>Claude Desktop / Claude Code</summary>
      <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp.tuls.me/api/mcp"
    }
  }
}</code></pre>
      <p style="font-size: 0.875rem;">Or via CLI: <code class="inline-code">claude mcp add contact-alexis --transport http https://mcp.tuls.me/api/mcp</code></p>
    </details>

    <div class="chatgpt-section">
      <h3>
        <svg class="chatgpt-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2 8.7c.3-1.2.2-2.5-.4-3.6-.9-1.7-2.7-2.8-4.7-2.8-.4 0-.8 0-1.2.1-1-1.5-2.7-2.4-4.5-2.4-1.8 0-3.5.9-4.5 2.4-.4-.1-.8-.1-1.2-.1-2 0-3.8 1.1-4.7 2.8-.6 1.1-.7 2.4-.4 3.6C-.1 9.9-.1 11.2.5 12.4c-.4 1.3-.3 2.7.4 3.9.9 1.6 2.6 2.6 4.5 2.7h.2c1 1.5 2.7 2.4 4.5 2.4 1.8 0 3.5-.9 4.5-2.4h.2c1.9 0 3.6-1 4.5-2.7.7-1.2.8-2.6.4-3.9.6-1.2.7-2.5.4-3.7zm-10.1 11c-1.4 0-2.7-.7-3.4-1.9l.1-.1 4-2.3c.2-.1.3-.3.3-.5V9.5l1.7 1c0 .1.1.1.1.1v4.7c0 2.4-2 4.4-4.8 4.4zM4 15.9c-.7-1.2-.9-2.6-.5-3.9l.1.1 4 2.3c.2.1.4.1.6 0l4.9-2.8v2c0 .1 0 .1-.1.2l-4.1 2.4c-2.1 1.2-4.8.5-5.9-1.3zm-1.5-9c.7-1.2 1.9-2 3.2-2.2v4.8c0 .2.1.4.3.5l4.9 2.8-1.7 1c-.1 0-.1 0-.2 0l-4.1-2.4c-2.1-1.2-2.8-3.9-1.4-5.5zm15.7 3.6l-4.9-2.8 1.7-1 .2.1 4.1 2.4c2.1 1.2 2.8 3.9 1.4 5.5-.7 1.2-1.9 2-3.2 2.2V12c0-.2-.1-.4-.3-.5zM20 8.4l-.1-.1-4-2.3c-.2-.1-.4-.1-.6 0l-4.9 2.8v-2c0-.1 0-.1.1-.2l4.1-2.4c2.1-1.2 4.8-.5 5.9 1.3.7 1.2.9 2.6.5 3.9zm-10.6 3.4l-1.7-1c0-.1-.1-.1-.1-.2V5.9c0-2.4 2-4.4 4.8-4.4 1.4 0 2.7.7 3.4 1.9l-.1.1-4 2.3c-.2.1-.3.3-.3.5v5.5zm.9-1.9l2.2-1.3 2.2 1.3v2.5l-2.2 1.3-2.2-1.3v-2.5z" fill="#10a37f"/>
        </svg>
        ChatGPT
      </h3>
      <p style="color: #888; font-size: 0.875rem; margin-bottom: 1rem;">Settings → Connectors → Create (requires Developer Mode)</p>

      <div class="copy-field">
        <span class="copy-field-label">Name</span>
        <span class="copy-field-value" id="chatgpt-name">Contact Alexis</span>
        <button class="copy-btn" onclick="copyField('chatgpt-name', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Description</span>
        <span class="copy-field-value" id="chatgpt-desc">Send a direct message to Alexis</span>
        <button class="copy-btn" onclick="copyField('chatgpt-desc', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Server URL</span>
        <span class="copy-field-value" id="chatgpt-url">https://mcp.tuls.me/api/mcp</span>
        <button class="copy-btn" onclick="copyField('chatgpt-url', this)">Copy</button>
      </div>
    </div>

    <!-- SECTION 2: WHAT -->
    <h2><span class="num">2</span> What is this?</h2>

    <div class="section-box">
      <p style="margin-top: 0;"><strong>MCP</strong> (Model Context Protocol) is a standard that lets AI assistants use external tools. Think of it as USB-C for AI: a universal way to plug capabilities into any LLM.</p>

      <p>This server exposes one tool: <code class="inline-code">contact_alexis</code>. When called, it sends your message to my Slack.</p>

      <div class="diagram">
        <span class="node">Your AI</span>
        <span class="arrow"> → JSON-RPC → </span>
        <span class="node">MCP Server</span>
        <span class="arrow"> → Webhook → </span>
        <span class="node">Slack</span>
      </div>

      <p style="margin-bottom: 0;">The AI handles the conversation naturally. It asks for your message, how I can reply, then calls the tool. No forms, no friction.</p>
    </div>

    <!-- SECTION 3: WHY -->
    <h2><span class="num">3</span> Why it matters</h2>

    <div class="vision-box">
      <p style="margin-top: 0;"><strong>Tools transform LLMs from knowledge bases into actors.</strong></p>

      <p>Without tools, an AI can only generate text. With tools, it can query databases, send emails, deploy code, book meetings. The gap between "knowing how" and "doing" disappears.</p>

      <p>MCP standardizes this. Instead of building custom integrations for each AI platform, you build once and it works everywhere: Claude, ChatGPT, local models, future systems we haven't seen yet.</p>

      <p style="margin-bottom: 0;"><strong>We're moving from chatbots to agents.</strong> This simple contact form is a minimal example, but the pattern scales: AI systems that can actually interact with the world, not just describe it.</p>
    </div>

    <div class="footer">
      <p>Built by <a href="https://alexis.tuls.me" target="_blank">Alexis</a> · Protocol: <a href="https://modelcontextprotocol.io" target="_blank">MCP</a> · <a href="https://github.com/AlexisLaporte/mcp-contact-alexis" target="_blank">Source</a></p>
    </div>
  </div>

  <script>
    function copyField(id, btn) {
      const text = document.getElementById(id).textContent;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    }
  </script>
</body>
</html>`;

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(HTML);
}
