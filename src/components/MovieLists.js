import React, { useRef } from 'react'
import MovieCards from './MovieCards'

const MovieLists = ({title, movies}) => {

    console.log(movies);
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
    <div className="px-6 py-8 relative">
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 pl-2">{title}</h1>
            <div className="relative group">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 z-10 rounded-full hidden group-hover:block transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                {movies && (
                <div ref={scrollRef} className="flex gap-5 overflow-x-scroll scrollbar-hide pb-2">
                    {movies?.map(movies=> <MovieCards key={movies.id} posterPath={movies.poster_path}/>)}
                </div>
                )}
                <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 z-10 rounded-full hidden group-hover:block transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
  )
}

export default MovieLists