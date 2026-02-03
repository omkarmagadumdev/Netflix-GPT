const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/gpt", async (req, res) => {
  try {
    const { messages, model } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Missing messages" });
    }

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
