import React, { useRef } from "react";
import MovieCards from "./MovieCards";

const MovieLists = ({ title, movies }) => {

    
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if(scrollRef.current) {
            const scrollAmount = 500;
            if(direction === 'left') {
                scrollRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollRef.current.scrollLeft += scrollAmount;
            }
        }
    }
    
  return (
    <div className="px-8 py-6 relative">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 pl-2 tracking-tight">
          {title}
        </h1>
        <div className="relative group">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={`Scroll ${title} left`}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 z-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {movies && (
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-scroll scrollbar-hide pb-4 scroll-smooth"
            >
              {movies?.map((movie) => (
                <MovieCards
                  key={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title || movie.original_title || "Movie poster"}
                />
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={`Scroll ${title} right`}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 z-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieLists;
