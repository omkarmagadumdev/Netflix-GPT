import React from 'react'

const GPTSearch = () => {
  return (
    <div className='bg-black min-h-screen pt-[10%] px-4 md:px-0'>
      {/* Search Header Section */}
      <div className='flex flex-col justify-center items-center py-12 md:py-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4 text-center'>
          Discover Movies with AI
        </h1>
        <p className='text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-8'>
          Search and filter movies using natural language powered by GPT
        </p>

        {/* Search Bar */}
        <div className='w-full max-w-2xl'>
          <div className='flex gap-3'>
            <input
              type='text'
              placeholder='Search movies, genres, or describe what you want to watch...'
              className='w-full px-4 py-3 md:py-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base'
            />
            <button className='px-6 md:px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-sm md:text-base whitespace-nowrap'>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className='max-w-7xl mx-auto mt-10 mb-10'>
        <div className='bg-gray-900 rounded-lg p-5 md:p-6'>
          <h2 className='text-white text-lg font-semibold mb-4'>Filters</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Genre Filter */}
            <div>
              <label className='block text-gray-400 text-sm mb-2'>Genre</label>
              <select className='w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm'>
                <option>All Genres</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Horror</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className='block text-gray-400 text-sm mb-2'>Year</label>
              <select className='w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm'>
                <option>All Years</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className='block text-gray-400 text-sm mb-2'>Rating</label>
              <select className='w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm'>
                <option>All Ratings</option>
                <option>8.0+</option>
                <option>7.0+</option>
                <option>6.0+</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className='block text-gray-400 text-sm mb-2'>Sort By</label>
              <select className='w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm'>
                <option>Relevance</option>
                <option>Popularity</option>
                <option>Rating</option>
                <option>Latest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-white text-2xl font-bold mb-6'>Search Results</h2>

        {/* Results Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10'>
          {/* Result Card Skeleton */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className='bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group'
            >
              {/* Movie Poster */}
              <div className='w-full h-48 md:h-56 bg-gray-700 flex items-center justify-center relative overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-b from-gray-700 to-gray-900'></div>
                <button className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200'>
                  <svg
                    className='w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' />
                  </svg>
                </button>
              </div>

              {/* Movie Info */}
              <div className='p-4'>
                <h3 className='text-white font-semibold text-sm mb-2 truncate'>
                  Movie Title
                </h3>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-yellow-400 text-sm font-semibold'>★ 8.5</span>
                  <span className='text-gray-400 text-xs'>2023</span>
                </div>
                <p className='text-gray-400 text-xs line-clamp-2 mb-3'>
                  Brief description of the movie goes here...
                </p>
                <div className='flex gap-2 flex-wrap'>
                  <span className='bg-red-600 bg-opacity-30 text-red-400 text-xs px-2 py-1 rounded'>
                    Action
                  </span>
                  <span className='bg-blue-600 bg-opacity-30 text-blue-400 text-xs px-2 py-1 rounded'>
                    Thriller
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className='flex justify-center pb-10'>
          <button className='px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200'>
            Load More Results
          </button>
        </div>
      </div>
    </div>
  )
}

export default GPTSearch