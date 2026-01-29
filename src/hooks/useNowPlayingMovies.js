import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options, TMDB_API_KEY } from 'utils/constants';
import { addNowPlayingMovies } from 'utils/movieSlice';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies =async ()=>{
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`;
        const data = await fetch(url, API_options);
        const json = await data.json();
        
        dispatch(addNowPlayingMovies(json.results))
  
    }
    
    useEffect(()=>{
        getNowPlayingMovies();
    }, [])
} 

export default useNowPlayingMovies