const getClientApiKey = () =>
  sessionStorage.getItem("OPENAI_API_KEY") ||
  localStorage.getItem("OPENAI_API_KEY") ||
  "";

const buildError = (message, status) => {
  const error = new Error(message || "Request failed");
  error.status = status;
  return error;
};

const buildOllamaBody = (messages, model) => ({
  model: model || "llama3.2",
  messages: (messages || []).map((message) => ({
    role: message.role === "developer" ? "system" : message.role,
    content: message.content,
  })),
  stream: false,
});

const requestLocalOllama = async (messages, model) => {
  const ollamaResponse = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildOllamaBody(messages, model)),
  });

  if (!ollamaResponse.ok) {
    const details = await ollamaResponse.text();
    throw new Error(details || "Local model request failed.");
  }

  const data = await ollamaResponse.json();
  return { output_text: data?.message?.content || "" };
};

const requestProxyCompletion = async (messages, model, apiKey) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (apiKey) {
    headers["x-openai-key"] = apiKey;
  }

  const response = await fetch("/api/gpt", {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: model || "gpt-4o-mini",
      messages,
    }),
  });

  if (!response.ok) {
    let errorMessage = "Proxy request failed";
    try {
      const errorData = await response.json();
      errorMessage = errorData?.error || errorMessage;
    } catch (error) {
      // Ignore JSON parse errors
    }
    throw buildError(errorMessage, response.status);
  }

  const data = await response.json();
  return { output_text: data?.content || "" };
};

export const requestGptCompletion = async ({ messages, model }) => {
  const apiKey = getClientApiKey();

  if (apiKey) {
    try {
      return await requestProxyCompletion(messages, model, apiKey);
    } catch (error) {
      try {
        return await requestLocalOllama(messages, model);
      } catch (localError) {
        throw error;
      }
    }
  }

  try {
    return await requestProxyCompletion(messages, model, "");
  } catch (error) {
    try {
      return await requestLocalOllama(messages, model);
    } catch (localError) {
      const proxyHint =
        error?.status === 401
          ? "Add your OpenAI API key"
          : "Start the proxy server (npm run server)";
      throw new Error(
        `No OpenAI API key found and local Ollama is not running. ${proxyHint} or start Ollama (http://localhost:11434).`
      );
    }
  }
};
