import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options, TMDB_API_KEY } from 'utils/constants';
import {  addPopularMovies } from 'utils/movieSlice';


const usePopular = () => {
    const dispatch = useDispatch()  
    const getPopularMovies =async ()=>{
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
        const data = await fetch(url, API_options);
        const json = await data.json();
        
        dispatch(addPopularMovies(json.results))
  
    }
    
    useEffect(()=>{
        getPopularMovies();
    }, [])
} 

export default usePopular