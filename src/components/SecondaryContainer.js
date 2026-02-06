import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies) || {};
  const { nowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } =
    movies;

  return (
    <div className="relative -mt-40 z-20 pb-16">
      <MovieLists title="Now playing" movies={nowPlayingMovies} />
      <MovieLists title="Popular Today" movies={addPopularMovies} />
      <MovieLists title="Top Rated" movies={addTopRatedMovies} />
      <MovieLists title="Upcoming" movies={addUpcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
