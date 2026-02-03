const getClientApiKey = () =>
  sessionStorage.getItem("OPENAI_API_KEY") ||
  localStorage.getItem("OPENAI_API_KEY") ||
  "";

export const requestGptCompletion = async ({ messages, model }) => {
  const apiKey = getClientApiKey();

  if (!apiKey) {
    throw new Error(
      "Missing API key. Set OPENAI_API_KEY in sessionStorage or localStorage."
    );
  }

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
      throw new Error("Rate limit exceeded. Please wait a bit and try again.");
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
