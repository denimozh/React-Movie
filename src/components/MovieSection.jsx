import React from 'react'
import ResultsFilter from './Movies/ResultsFilter'
import MovieList from './Movies/MovieList'

const MovieSection = ({handleMovieId}) => {
  return (
    <div className='pb-20'>
      <ResultsFilter />
      <MovieList handleMovieId={handleMovieId}/>
    </div>
  )
}

export default MovieSection