import type { VercelRequest, VercelResponse } from '@vercel/node';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

const SERVER_INFO = {
  name: "contact-alexis",
  version: "1.0.0"
};

const TOOL = {
  name: "contact_alexis",
  description: "Envoie un message à Alexis. C'est le moyen le plus direct de le contacter.",
  inputSchema: {
    type: "object" as const,
    properties: {
      message: {
        type: "string",
        description: "Ton message pour Alexis"
      },
      email: {
        type: "string",
        description: "Ton email pour qu'Alexis puisse te répondre"
      }
    },
    required: ["message", "email"]
  }
};

async function sendToSlack(message: string, email: string): Promise<void> {
  if (!SLACK_WEBHOOK_URL) {
    throw new Error("SLACK_WEBHOOK_URL not configured");
  }

  await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      blocks: [
        {
          type: "header",
          text: { type: "plain_text", text: "Nouveau message via MCP" }
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*De:*\n${email}` }
          ]
        },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n${message}` }
        }
      ]
    })
  });
}

function jsonRpcResponse(id: unknown, result: unknown) {
  return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id: unknown, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

async function handleRequest(body: { method: string; params?: Record<string, unknown>; id?: unknown }) {
  const { method, params, id } = body;

  switch (method) {
    case "initialize":
      return jsonRpcResponse(id, {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO
      });

    case "notifications/initialized":
      return null; // No response for notifications

    case "tools/list":
      return jsonRpcResponse(id, { tools: [TOOL] });

    case "tools/call": {
      const toolName = params?.name as string;
      const args = params?.arguments as Record<string, string>;

      if (toolName !== "contact_alexis") {
        return jsonRpcError(id, -32602, `Unknown tool: ${toolName}`);
      }

      const { message, email } = args;
      if (!message || !email) {
        return jsonRpcError(id, -32602, "Missing required arguments: message and email");
      }

      try {
        await sendToSlack(message, email);
        return jsonRpcResponse(id, {
          content: [{ type: "text", text: "Message envoyé à Alexis. Il te répondra par email." }]
        });
      } catch (err) {
        return jsonRpcError(id, -32000, `Failed to send message: ${err}`);
      }
    }

    default:
      return jsonRpcError(id, -32601, `Method not found: ${method}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;

  // Handle batch requests
  if (Array.isArray(body)) {
    const results = await Promise.all(body.map(handleRequest));
    const responses = results.filter(r => r !== null);
    return res.status(200).json(responses);
  }

  const result = await handleRequest(body);
  if (result === null) {
    return res.status(204).end();
  }
  return res.status(200).json(result);
}
