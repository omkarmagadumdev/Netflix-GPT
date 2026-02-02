import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_options } from "utils/constants"
import { addTrailerVideo } from "utils/movieSlice"


const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch()
  
  const getMovieVideo = async ()=>{
     if(!movieId) {
       
       return
     }
     
     try {
       const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options)
       const json = await data.json()
       
       
       // Check for API errors
       if(!data.ok) {
         console.error("API Error Status:", data.status, json)      
         return
       }
       
       // Check if results exist
       if(!json || !json.results) {
         
         return
       }
       
       if(json.results.length === 0) {
        
         return
       }
       
       const filterData = json.results.filter(video=> video && video.type === "Trailer")
       const trailer = filterData.length ? filterData[0] : json.results[0]
       if(trailer) {
         
         dispatch(addTrailerVideo(trailer))
       }
     } catch(error) {
       console.error("Fetch Error:", error.message)
     }
  }

  useEffect(()=>{
      if(movieId) {
        getMovieVideo()
      }
  },[movieId])

}

export default useMovieTrailer