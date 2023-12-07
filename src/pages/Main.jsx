import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import MovieSection from '../components/MovieSection'
import Footer from '../components/Footer'

const Main = ({handleMovieId}) => {
  return (
    <div>
        <div className="bg-hero-pattern bg-blur-sm bg-no-repeat bg-cover">
            <div className='px-40 pb-52'>
                <Navbar/>
                <Search />
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

export default Main