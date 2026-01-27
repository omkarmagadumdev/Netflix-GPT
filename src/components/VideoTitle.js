import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute w-full aspect-video pt-[20%] px-12 text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-4">
            <button className="bg-white text-black py-3 px-10 text-xl rounded-lg hover:bg-opacity-80 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
                Play
            </button>
            <button className="bg-gray-500 bg-opacity-50 text-white py-3 px-8 text-xl rounded-lg hover:bg-opacity-40 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle