import React from 'react'
import MovieDetails from '../components/Movies/MovieDetails'
import MovieSection from '../components/MovieSection'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';

const Details = ({id, movieUrl, title, date, genre, overview, rating, runtime, handleMovieId} ) => {
  return (
    <div>
       <div className="bg-hero-pattern bg-blur-sm bg-no-repeat bg-cover">
            <div className='px-40 pb-52'>
                <div>
                    <div className='flex flex-row items-center pt-6 justify-between'>
                      <div className='self-start'>
                          <p className='text-xl text-red-400'><b>netflix</b>roulette</p>
                      </div>
                      <div>
                        <Link to="/">
                          <SearchIcon fontSize="large" sx={{ color: red[400] }}/>
                        </Link>
                      </div>
                  </div>
                </div>
                <MovieDetails id={id} movieUrl={movieUrl} title={title} date={date} 
                genre={genre} overview={overview} rating={rating} runtime={runtime} />
            </div>
        </div>
        <div className='bg-bgGray'>
          <div className='px-40'>
              <MovieSection handleMovieId={handleMovieId}/>
          </div>
          <div className='pt-12'>
            <Footer/>
          </div>
        </div> 
    </div>
  )
}

export default Details