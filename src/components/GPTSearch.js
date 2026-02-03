import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { SUPPORTED_LANGUAGES } from "utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "utils/configSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleDropdownClick = () => {
    const selectElement = document.getElementById("gpt-lang-select");
    if (selectElement) {
      selectElement.focus();
      selectElement.click();
    }
  };

  return (
    <div className="relative bg-black min-h-screen pt-[10%] px-4 md:px-0">
      {/* Language Dropdown - Between GPT Search and Profile */}
      <div
        onClick={handleDropdownClick}
        className="absolute top-5 right-[360px] z-50 flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2.5 hover:bg-black/80 hover:border-white/40 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group"
      >
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        {showGptSearch && (
          <select
            onChange={handleLanguageChange}
            id="gpt-lang-select"
            className="bg-transparent text-white text-sm font-medium focus:outline-none appearance-none pr-2 cursor-pointer tracking-wide"
            defaultValue="en"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                className="bg-zinc-900 text-white py-2 px-4 font-medium"
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <svg
          className="w-4 h-4 text-white/70 group-hover:text-white transition-all pointer-events-none group-hover:translate-y-0.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
