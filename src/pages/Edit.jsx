import React from 'react'
import movies from '../components/Movies/storage/movies'
import EditMovieForm from '../components/Forms/EditMovieForm'

const Edit = ({movieSelect}) => {
  console.log(movies[movieSelect])
    
  return (
    <div>
      <EditMovieForm movieSelect={movieSelect}/>
    </div>
  )
}

export default Edit