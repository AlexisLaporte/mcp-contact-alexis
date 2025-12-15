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
    <div class="endpoint">https://mcp-contact-alexis.vercel.app/api/mcp</div>

    <h2>Setup</h2>
    <p>Add this MCP server to your AI assistant:</p>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Claude Desktop</h3>
    <p>Edit <code>~/Library/Application Support/Claude/claude_desktop_config.json</code> (macOS) or <code>%APPDATA%\\Claude\\claude_desktop_config.json</code> (Windows):</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp-contact-alexis.vercel.app/api/mcp"
    }
  }
}</code></pre>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Claude Code (CLI)</h3>
    <p><strong>Option 1:</strong> Add via command line:</p>
    <pre><code>claude mcp add contact-alexis --transport http https://mcp-contact-alexis.vercel.app/api/mcp</code></pre>
    <p><strong>Option 2:</strong> Edit <code>~/.claude.json</code> manually:</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp-contact-alexis.vercel.app/api/mcp"
    }
  }
}</code></pre>
    <p><strong>Option 3:</strong> Project-level config in <code>.mcp.json</code>:</p>
    <pre><code>{
  "mcpServers": {
    <span class="highlight">"contact-alexis"</span>: {
      "type": "url",
      "url": "https://mcp-contact-alexis.vercel.app/api/mcp"
    }
  }
}</code></pre>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">ChatGPT</h3>
    <p><strong>Prerequisites:</strong> Pro, Plus, Business, Enterprise or Education account.</p>
    <p><strong>Step 1:</strong> Enable Developer Mode</p>
    <pre><code>Settings → Connectors → Advanced → Developer Mode</code></pre>
    <p><strong>Step 2:</strong> Create MCP Connector</p>
    <pre><code>Settings → Connectors → Create

Name: Contact Alexis
Description: Send a message to Alexis directly
MCP Server URL: https://mcp-contact-alexis.vercel.app/api/mcp
Authentication: None</code></pre>

    <h3 style="font-size: 1rem; color: #888; margin-top: 1.5rem;">Other MCP Clients</h3>
    <p>Any MCP-compatible client can connect using the HTTP transport:</p>
    <pre><code>Endpoint: https://mcp-contact-alexis.vercel.app/api/mcp
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
