import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className="relative -mt-40 z-20 pb-16">
      <MovieLists title={"Now playing"} movies={movies.nowPlayingMovies}  />
      <MovieLists title={"Popular Today"} movies={movies.addPopularMovies}  />
      <MovieLists title={"Top Rated"} movies={movies.addTopRatedMovies}  />
      <MovieLists title={"Upcoming"} movies={movies.addUpcomingMovies}  />
      
      {/* Movie lists will go here */}
    </div>
  )
}

export default SecondaryContainer