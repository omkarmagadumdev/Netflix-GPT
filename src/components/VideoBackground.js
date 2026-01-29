import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux"


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      {trailerVideo && (
        <>
          <iframe 
            className="w-full h-full object-cover scale-150"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
        </>
      )}
    </div>
  )
}

export default VideoBackground  