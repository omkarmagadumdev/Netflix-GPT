const getClientApiKey = () =>
  sessionStorage.getItem("OPENAI_API_KEY") ||
  localStorage.getItem("OPENAI_API_KEY") ||
  "";

export const requestGptCompletion = async ({ messages, model }) => {
  const apiKey = getClientApiKey();

  if (!apiKey) {
    try {
      const ollamaResponse = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model || "llama3.2",
          messages: (messages || []).map((message) => ({
            role: message.role === "developer" ? "system" : message.role,
            content: message.content,
          })),
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        const details = await ollamaResponse.text();
        throw new Error(details || "Local model request failed.");
      }

      const data = await ollamaResponse.json();
      return { output_text: data?.message?.content || "" };
    } catch (error) {
      throw new Error(
        "No OpenAI API key found and local Ollama is not running. Start Ollama (http://localhost:11434) or add credits to your OpenAI account."
      );
    }
  }

  const requestLocalOllama = async () => {
    const ollamaResponse = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model || "llama3.2",
        messages: (messages || []).map((message) => ({
          role: message.role === "developer" ? "system" : message.role,
          content: message.content,
        })),
        stream: false,
      }),
    });

    if (!ollamaResponse.ok) {
      const details = await ollamaResponse.text();
      throw new Error(details || "Local model request failed.");
    }

    const data = await ollamaResponse.json();
    return { output_text: data?.message?.content || "" };
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model || "gpt-4o-mini",
      input: messages,
    }),
  });

  if (!response.ok) {
    if (response.status === 429) {
      try {
        return await requestLocalOllama();
      } catch (error) {
        throw new Error(
          "Rate limit exceeded on OpenAI and local Ollama is not running. Start Ollama (http://localhost:11434) or add credits to your OpenAI account."
        );
      }
    }
    let errorMessage = "Request failed";
    try {
      const errorData = await response.json();
      errorMessage =
        errorData?.error?.message || errorData?.error || errorMessage;
    } catch (error) {
      // Ignore JSON parse errors
    }
    throw new Error(errorMessage);
  }

  return response.json();
};
