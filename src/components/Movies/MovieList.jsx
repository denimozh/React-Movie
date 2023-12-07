import React from 'react';
import MovieCard from './MovieCard'
import movies from './storage/movies.js'

const MovieList = ({handleMovieId}) => {
  return (
    <div>
        <div>
          <p className='py-6 text-2xl text-white font-normal'><b>{movies.length}</b> movies found</p>
        </div>
        <div className='grid grid-cols-3 gap-16' >
          {movies.map((movie) => (
            <div key={movie.id} className=''>
              <MovieCard id={movie.id} movieUrl={movie.movieUrl} title={movie.title} date={movie.date} genre={movie.genre} handleMovieId={handleMovieId}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MovieList