import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { lang } from "utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const handleSubmit = () => {
    console.log(search.current.value);
  };

  return (
    <>
      {/* Search Header Section */}
      <div className="flex flex-col justify-center items-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {lang[langKey].GptSearchHeading}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-8">
          {lang[langKey].GptSearchh2}
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl">
          <div className="flex gap-3">
            <input
              ref={search}
              type="text"
              placeholder={lang[langKey].GptSearchLang}
              className="w-full px-4 py-3 md:py-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
            />
            <button
              onClick={handleSubmit}
              className="px-6 md:px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base whitespace-nowrap"
            >
              {lang[langKey].search}
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <div className="bg-gray-900 rounded-lg p-5 md:p-6">
          <h2 className="text-white text-lg font-semibold mb-4">
            {lang[langKey].filters}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Genre Filter */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                {lang[langKey].genre}
              </label>
              <select className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm">
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
              <select className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm">
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
              <select className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm">
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
              <select className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm">
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
