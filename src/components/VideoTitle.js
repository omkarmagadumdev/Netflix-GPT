import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-full h-screen flex flex-col justify-center px-12 md:px-20 lg:px-24 text-white z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-5 max-w-4xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-tight">{title}</h1>
        <p className="text-base md:text-xl mb-8 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-3 font-medium">{overview}</p>
        <div className="flex gap-4 items-center">
            <button className="bg-white text-black py-4 px-10 md:px-12 text-lg md:text-xl font-bold rounded-md hover:bg-white/90 flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
                Play
            </button>
            <button className="bg-gray-500/50 backdrop-blur-sm text-white py-4 px-8 md:px-10 text-lg md:text-xl font-bold rounded-md hover:bg-gray-500/70 flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle