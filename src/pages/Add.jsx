import React from 'react'
import AddMovieForm from '../components/Forms/AddMovieForm'
import Footer from '../components/Footer'
import { useState } from 'react'
import movies from '../components/Movies/storage/movies'

const Add = () => {
  const [addMovies, setAddMovies] = useState([movies])

  const createMovie = (newMovie) => {
    setAddMovies([...addMovies, newMovie])
    console.log(newMovie)
    movies.push(newMovie)
  }


  return (
    <div>
        <div>
            <AddMovieForm create={createMovie}/>
        </div>
        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default Add