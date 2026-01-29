import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options, TMDB_API_KEY } from 'utils/constants';
import {  addTopRatedMovies } from 'utils/movieSlice';


const useTopRated = () => {
    const dispatch = useDispatch()
    const getTopRated =async ()=>{
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`;
        const data = await fetch(url, API_options);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
  
    }
    
    useEffect(()=>{
        getTopRated();
    }, [])
    
    return null;
} 

export default useTopRated