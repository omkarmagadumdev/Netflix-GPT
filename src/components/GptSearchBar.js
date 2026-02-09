import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { lang } from "utils/languageConstants";
import { requestGptCompletion } from "utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultText, setResultText] = useState("");
  const [apiKey, setApiKey] = useState(
    () => sessionStorage.getItem("OPENAI_API_KEY") || ""
  );

  const handleApiKeyChange = (event) => {
    const nextValue = event.target.value;
    setApiKey(nextValue);
    const trimmedValue = nextValue.trim();
    if (trimmedValue) {
      sessionStorage.setItem("OPENAI_API_KEY", trimmedValue);
      return;
    }
    sessionStorage.removeItem("OPENAI_API_KEY");
  };

  const handleClearKey = () => {
    setApiKey("");
    sessionStorage.removeItem("OPENAI_API_KEY");
  };

  const handleSubmit = useCallback(
    async (event) => {
      event?.preventDefault();
      if (isLoading) {
        return;
      }

      const trimmedQuery = query.trim();

      if (!trimmedQuery) {
        setErrorMessage("Please enter a search query.");
        return;
      }

      try {
        setErrorMessage("");
        setResultText("");
        setIsLoading(true);

        const result = await requestGptCompletion({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "developer",
              content:
                "You are a movie recommendation assistant. Based on the user's query, return 5 movie recommendations as a comma-separated list of titles only. No extra text.",
            },
            { role: "user", content: trimmedQuery },
          ],
        });

        const output =
          result?.output_text ||
          result?.output?.[0]?.content?.[0]?.text ||
          "";

        if (!output) {
          setErrorMessage("No response. Please try a different prompt.");
          return;
        }

        setResultText(output);
      } catch (error) {
        console.error(error);
        setErrorMessage(
          error?.message ||
            "Request failed. If you see 'Failed to fetch', the browser may be blocking the request."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, query]
  );

  return (
    <>
      {/* Search Header Section */}
      <div className="relative flex flex-col justify-center items-center py-12 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,60,0.18),rgba(0,0,0,0))]" />
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-200">
            AI Curated Picks
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            {lang[langKey].GptSearchHeading}
          </h1>
        </div>
        <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl mt-3 mb-8">
          {lang[langKey].GptSearchh2}
        </p>

        {/* Search Bar */}
        <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="mb-3 flex flex-col sm:flex-row gap-3">
            <input
              type="password"
              value={apiKey}
              onChange={handleApiKeyChange}
              placeholder="OpenAI API key (optional)"
              aria-label="OpenAI API key"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl bg-gray-900/70 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:border-red-500/80 text-sm shadow-lg shadow-black/30"
            />
            <button
              type="button"
              onClick={handleClearKey}
              disabled={!apiKey}
              className={`px-4 py-3 text-white font-semibold rounded-xl transition-all duration-200 text-sm whitespace-nowrap shadow-lg shadow-black/30 ${
                apiKey
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-800 cursor-not-allowed"
              }`}
            >
              Clear Key
            </button>
          </div>
          <p className="mb-4 text-xs text-gray-500">
            Stored only in this browser session. Leave blank to use the proxy
            server or local Ollama.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={lang[langKey].GptSearchLang}
              aria-label={lang[langKey].GptSearchLang}
              className="w-full px-4 py-3 md:py-4 rounded-xl bg-gray-900/70 text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:border-red-500/80 text-sm md:text-base shadow-lg shadow-black/30"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className={`px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-xl transition-all duration-200 text-sm md:text-base whitespace-nowrap shadow-lg shadow-black/30 ${
                isLoading || !query.trim()
                  ? "bg-red-800 cursor-not-allowed"
                  : "bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600"
              }`}
            >
              {isLoading ? "Searching..." : lang[langKey].search}
            </button>
          </div>
          {errorMessage ? (
            <p className="mt-3 text-sm text-red-400">{errorMessage}</p>
          ) : null}
          {resultText ? (
            <div className="mt-4 rounded-xl border border-white/10 bg-gray-900/70 p-4 text-sm text-green-300">
              {resultText}
            </div>
          ) : null}
        </form>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <div className="bg-gray-900/80 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl shadow-black/30">
          <h2 className="text-white text-lg font-semibold mb-4">
            {lang[langKey].filters}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Genre Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {lang[langKey].genre}
              </label>
              <select className="w-full px-3 py-2 bg-gray-800/80 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 text-sm">
                <option>{lang[langKey].allGenres}</option>
                <option>{lang[langKey].action}</option>
                <option>{lang[langKey].comedy}</option>
                <option>{lang[langKey].drama}</option>
                <option>{lang[langKey].horror}</option>
                <option>{lang[langKey].romance}</option>
                <option>{lang[langKey].sciFi}</option>
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {lang[langKey].year}
              </label>
              <select className="w-full px-3 py-2 bg-gray-800/80 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 text-sm">
                <option>{lang[langKey].allYears}</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {lang[langKey].rating}
              </label>
              <select className="w-full px-3 py-2 bg-gray-800/80 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 text-sm">
                <option>{lang[langKey].allRatings}</option>
                <option>8.0+</option>
                <option>7.0+</option>
                <option>6.0+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {lang[langKey].sortBy}
              </label>
              <select className="w-full px-3 py-2 bg-gray-800/80 text-white rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-red-500/80 text-sm">
                <option>{lang[langKey].relevance}</option>
                <option>{lang[langKey].popularity}</option>
                <option>{lang[langKey].rating}</option>
                <option>{lang[langKey].latest}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
