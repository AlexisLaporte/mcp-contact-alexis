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
      max-width: 640px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      color: #888;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: #fff;
    }
    p {
      line-height: 1.6;
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
    .badge-soon {
      background: #6e40c9;
    }
    a { color: #58a6ff; }
    .footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 1px solid #333;
      color: #666;
      font-size: 0.875rem;
    }
    .coming-soon {
      margin-top: 3rem;
      padding: 24px;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border: 1px solid #333;
      border-radius: 12px;
    }
    .coming-soon h2 {
      margin-top: 0;
    }
    .feature {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin: 16px 0;
    }
    .feature-icon {
      font-size: 1.2rem;
    }
    .waitlist-btn {
      display: inline-block;
      background: #6e40c9;
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      margin-top: 16px;
      transition: background 0.2s;
    }
    .waitlist-btn:hover {
      background: #8b5cf6;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Contact Alexis <span class="badge">MCP</span></h1>
    <p class="subtitle">The most direct way to reach me.</p>

    <h2>MCP Endpoint</h2>
    <div class="endpoint">https://mcp.tuls.me/api/mcp</div>

    <h2>Setup</h2>
    <p>Add this MCP server to your AI assistant:</p>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Claude Desktop</h3>
    <p>Edit <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> (macOS) or <code>%APPDATA%\\Claude\\claude_desktop_config.json</code> (Windows):</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp.tuls.me/api/mcp"
    }
  }
}</code></pre>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Claude Code (CLI)</h3>
    <p><strong>Option 1:</strong> Add via command line:</p>
    <pre><code>claude mcp add contact-alexis --transport http https://mcp.tuls.me/api/mcp</code></pre>
    <p><strong>Option 2:</strong> Edit <code>~/.claude.json</code> manually:</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp.tuls.me/api/mcp"
    }
  }
}</code></pre>
    <p><strong>Option 3:</strong> Project-level config in <code>.mcp.json</code>:</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp.tuls.me/api/mcp"
    }
  }
}</code></pre>

    <div class="chatgpt-section">
      <h3>
        <svg class="chatgpt-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.2 8.7c.3-1.2.2-2.5-.4-3.6-.9-1.7-2.7-2.8-4.7-2.8-.4 0-.8 0-1.2.1-1-1.5-2.7-2.4-4.5-2.4-1.8 0-3.5.9-4.5 2.4-.4-.1-.8-.1-1.2-.1-2 0-3.8 1.1-4.7 2.8-.6 1.1-.7 2.4-.4 3.6C-.1 9.9-.1 11.2.5 12.4c-.4 1.3-.3 2.7.4 3.9.9 1.6 2.6 2.6 4.5 2.7h.2c1 1.5 2.7 2.4 4.5 2.4 1.8 0 3.5-.9 4.5-2.4h.2c1.9 0 3.6-1 4.5-2.7.7-1.2.8-2.6.4-3.9.6-1.2.7-2.5.4-3.7zm-10.1 11c-1.4 0-2.7-.7-3.4-1.9l.1-.1 4-2.3c.2-.1.3-.3.3-.5V9.5l1.7 1c0 .1.1.1.1.1v4.7c0 2.4-2 4.4-4.8 4.4zM4 15.9c-.7-1.2-.9-2.6-.5-3.9l.1.1 4 2.3c.2.1.4.1.6 0l4.9-2.8v2c0 .1 0 .1-.1.2l-4.1 2.4c-2.1 1.2-4.8.5-5.9-1.3zm-1.5-9c.7-1.2 1.9-2 3.2-2.2v4.8c0 .2.1.4.3.5l4.9 2.8-1.7 1c-.1 0-.1 0-.2 0l-4.1-2.4c-2.1-1.2-2.8-3.9-1.4-5.5zm15.7 3.6l-4.9-2.8 1.7-1 .2.1 4.1 2.4c2.1 1.2 2.8 3.9 1.4 5.5-.7 1.2-1.9 2-3.2 2.2V12c0-.2-.1-.4-.3-.5zM20 8.4l-.1-.1-4-2.3c-.2-.1-.4-.1-.6 0l-4.9 2.8v-2c0-.1 0-.1.1-.2l4.1-2.4c2.1-1.2 4.8-.5 5.9 1.3.7 1.2.9 2.6.5 3.9zm-10.6 3.4l-1.7-1c0-.1-.1-.1-.1-.2V5.9c0-2.4 2-4.4 4.8-4.4 1.4 0 2.7.7 3.4 1.9l-.1.1-4 2.3c-.2.1-.3.3-.3.5v5.5zm.9-1.9l2.2-1.3 2.2 1.3v2.5l-2.2 1.3-2.2-1.3v-2.5z" fill="#10a37f"/>
        </svg>
        ChatGPT
      </h3>
      <p style="color: #888; font-size: 0.875rem; margin-bottom: 1rem;">Requires Pro, Plus, Business, Enterprise or Education account with Developer Mode.</p>

      <ol class="steps-list">
        <li>
          <span class="step-num">1</span>
          <span class="step-content"><strong>Settings</strong> → <strong>Connectors</strong> → Advanced → Enable <strong>Developer Mode</strong></span>
        </li>
        <li>
          <span class="step-num">2</span>
          <span class="step-content"><strong>Settings</strong> → <strong>Connectors</strong> → <strong>Create</strong></span>
        </li>
        <li>
          <span class="step-num">3</span>
          <span class="step-content">Fill in the fields below (click to copy):</span>
        </li>
      </ol>

      <div class="copy-field">
        <span class="copy-field-label">Name</span>
        <span class="copy-field-value" id="chatgpt-name">Contact Alexis</span>
        <button class="copy-btn" onclick="copyField('chatgpt-name', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Description</span>
        <span class="copy-field-value" id="chatgpt-desc">Send a direct message to Alexis. He'll receive it instantly and can reply by email.</span>
        <button class="copy-btn" onclick="copyField('chatgpt-desc', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Server URL</span>
        <span class="copy-field-value" id="chatgpt-url">https://mcp.tuls.me/api/mcp</span>
        <button class="copy-btn" onclick="copyField('chatgpt-url', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Icon</span>
        <span class="copy-field-value" id="chatgpt-icon">https://mcp.tuls.me/api/icon.png</span>
        <button class="copy-btn" onclick="copyField('chatgpt-icon', this)">Copy</button>
      </div>
      <div class="copy-field">
        <span class="copy-field-label">Auth</span>
        <span class="copy-field-value" id="chatgpt-auth">None</span>
        <button class="copy-btn" onclick="copyField('chatgpt-auth', this)">Copy</button>
      </div>
    </div>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Other MCP Clients</h3>
    <p>Any MCP-compatible client can connect using the HTTP transport:</p>
    <pre><code>Endpoint: https://mcp.tuls.me/api/mcp
Transport: HTTP (Streamable)
Protocol: JSON-RPC 2.0</code></pre>

    <h2>Usage</h2>
    <p>Once configured, just ask your AI:</p>
    <pre><code>"Send a message to Alexis to tell him that..."</code></pre>
    <p>The AI will use the <code>contact_alexis</code> tool to send your message along with your email.</p>

    <h2>Tool Reference</h2>
    <pre><code><span class="highlight">contact_alexis</span>(message, email)

Parameters:
  - message: string (required) — Your message
  - email: string (required) — Your email for reply</code></pre>

    <div class="coming-soon">
      <h2>Coming Soon <span class="badge badge-soon">Roadmap</span></h2>

      <div class="feature">
        <span class="feature-icon">⚡</span>
        <div>
          <strong style="color: #fff;">Direct AI-powered replies</strong>
          <p style="margin: 4px 0 0 0;">Get instant responses using Claude SDK — no waiting for me to check Slack.</p>
        </div>
      </div>

      <div class="feature">
        <span class="feature-icon">🌐</span>
        <div>
          <strong style="color: #fff;">Your own contact MCP</strong>
          <p style="margin: 4px 0 0 0;">Deploy your personal MCP endpoint in one click. Let AI agents reach you directly.</p>
        </div>
      </div>

      <form id="waitlist-form" style="margin-top: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
        <input type="email" name="email" placeholder="your@email.com" required style="flex: 1; min-width: 200px; padding: 12px 16px; border-radius: 8px; border: 1px solid #333; background: #1a1a1a; color: #fff;">
        <button type="submit" class="waitlist-btn" style="margin-top: 0;">Join waitlist</button>
      </form>
      <p id="waitlist-msg" style="font-size: 0.875rem; margin-top: 8px; display: none;"></p>
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
        document.getElementById('waitlist-form').addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const msg = document.getElementById('waitlist-msg');
          try {
            const res = await fetch('/api/waitlist', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, product: 'mcp-contact' })
            });
            if (res.ok) {
              msg.style.color = '#238636';
              msg.textContent = "You're on the list!";
            } else {
              msg.style.color = '#e00';
              msg.textContent = 'Something went wrong.';
            }
          } catch {
            msg.style.color = '#e00';
            msg.textContent = 'Network error.';
          }
          msg.style.display = 'block';
        });
      </script>
    </div>

    <div class="footer">
      <p>Protocol: <a href="https://modelcontextprotocol.io" target="_blank">Model Context Protocol</a></p>
    </div>
  </div>
</body>
</html>`;

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(HTML);
}
