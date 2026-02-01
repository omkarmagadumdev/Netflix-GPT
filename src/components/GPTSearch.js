import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GPTSearch = () => {
  return (
    <div className='bg-black min-h-screen pt-[10%] px-4 md:px-0'>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch