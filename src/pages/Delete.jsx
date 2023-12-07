import React, { useState } from 'react'
import DeleteMovie from '../components/Forms/DeleteMovie'
import Footer from '../components/Footer'
import movies from '../components/Movies/storage/movies'
import { useNavigate } from 'react-router-dom'

const Delete = ({movieSelect}) => {
    const [moviesDel, setMoviesDel] = useState([movieSelect])
    const navigate = useNavigate();
    console.log(moviesDel);

    const removeMovie = (movie) => {
      setMoviesDel(movies.splice(movie, 1));
      console.log(moviesDel);
      console.log(setMoviesDel);
      navigate(`/`);
    }

  return (
    <div>
        <div className='px-40 pb-96 bg-hero-pattern bg-blur-sm bg-no-repeat bg-cover'>
            <div className='flex flex-row items-center pt-6 justify-between'>
                <div className='self-start'>
                    <p className='text-xl text-red-400'><b>netflix</b>roulette</p>
                </div>
            </div>
            <div>
                <DeleteMovie movieSelect={movieSelect} remove={removeMovie}/>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default Delete