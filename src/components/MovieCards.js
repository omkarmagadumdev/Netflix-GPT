import React from 'react'
import { IMG_CDN_URL } from 'utils/constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className="w-44 h-64 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:z-10 group">
        <img 
          src={IMG_CDN_URL + posterPath } 
          alt="Movie Cards" 
          className="w-full h-full object-cover rounded-md shadow-lg group-hover:shadow-2xl group-hover:shadow-red-900/30 group-hover:ring-2 group-hover:ring-white/20 transition-all duration-300" 
        />
    </div>
  )
}

export default MovieCards