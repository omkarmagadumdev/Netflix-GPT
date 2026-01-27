import React from 'react'

const VideoBackground = () => {
  return (
    <div className="w-full aspect-video">
      <iframe 
        className="w-full h-full"
        src="https://www.youtube.com/embed/yeR5bcbRPak?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=yeR5bcbRPak" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground