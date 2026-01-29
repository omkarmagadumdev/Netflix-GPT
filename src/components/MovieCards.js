import React from 'react'
import { IMG_CDN_URL } from 'utils/constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className="w-40 h-64 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300">
        <img src={IMG_CDN_URL + posterPath } alt="Movie Cards" className="w-full h-full object-cover rounded-lg" />

    </div>
  )
}

export default MovieCards