const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/gpt", async (req, res) => {
  try {
    const { messages, model } = req.body || {};
    const headerKey = req.get("x-openai-key") || "";
    const authHeader = req.get("authorization") || "";
    const bearerKey = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length)
      : "";
    const apiKey = headerKey || bearerKey || process.env.OPENAI_API_KEY || "";

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing messages" });
    }

    if (!apiKey) {
      return res.status(401).json({ error: "Missing OpenAI API key" });
    }

    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: model || "gpt-4o-mini",
      messages,
    });

    const content = completion?.choices?.[0]?.message?.content || "";

    return res.json({ content });
  } catch (error) {
    const message = error?.message || "Unexpected server error";
    return res.status(500).json({ error: message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`GPT proxy server listening on port ${port}`);
});
