import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear';
import movies from '../Movies/storage/movies';

const EditMovieForm = ({movieSelect}) => {
    const [editMovie, setEditMovie] = useState({title: movies[movieSelect].title, date: movies[movieSelect].date, movieUrl: movies[movieSelect].movieUrl, 
        genre: movies[movieSelect].genre, overview: movies[movieSelect].overview, rating: movies[movieSelect].rating, runtime: movies[movieSelect].runtime});
    
    const newData = (e) => {
            e.preventDefault()
            var newMovie = movies[movieSelect]
            (newMovie === editMovie)
            editMovie(newMovie)
        } 
    
    return (
        <div className='px-40 bg-form-bg bg-blur-sm bg-no-repeat bg-cover pb-20'>
            <div className='flex flex-row items-center pt-6 justify-between'>
                <div className='self-start'>
                    <p className='text-xl text-red-400'><b>netflix</b>roulette</p>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center pt-12'>
                <form className='bg-bgGray px-24 py-10 w-1/2'>
                    <div className='flex justify-between'>
                        <p className='text-white text-5xl font-light py-8'>ADD MOVIE</p>
                        <Link to="/">
                            <ClearIcon sx={{ fontSize: 40 }} color="primary"/>
                        </Link>
                    </div>
                    <div>
                        <p className='text-red-400 text-lg font-semibold py-4'>MOVIE ID</p>
                        <div>
                            <p className='text-white text-xl'>MOVIEID: {movieSelect}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-red-400 text-lg font-semibold py-6'>TITLE</p>
                        <div>
                            <input id="title" name="title" type="title" value={movies[movieSelect].title} onChange={e => setEditMovie({...editMovie, title: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-4 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title"'/>
                        </div>
                    </div>
                    <div>
                        <p for="date" className='text-red-400 text-lg font-semibold py-6'>RELEASE DATE</p>
                        <div>
                            <input id="date" name="date" type="text" value={movies[movieSelect].date} onChange={e => setEditMovie({...editMovie, date: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-4 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Date"'/>
                        </div>
                    </div>
                    <div>
                        <p for="movieUrl" className='text-red-400 text-lg font-semibold py-6'>POSTER URL</p>
                        <div>
                            <input id="url" name="movieUrl" type="url" value={movies[movieSelect].movieUrl} onChange={e => setEditMovie({...editMovie, movieUrl: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-2 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="Url" type="text" placeholder="Url"'/>
                        </div>
                    </div>
                    <div>
                        <p for="genre" className='text-red-400 text-lg font-semibold py-6'>GENRE</p>
                        <div>
                            <input id="genre" name="genre" type="genre" value={movies[movieSelect].genre} onChange={e => setEditMovie({...editMovie, genre: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-2 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Genre"'/>
                        </div>
                    </div>
                    <div>
                        <p for="overview" className='text-red-400 text-lg font-semibold py-6'>OVERVIEW</p>
                        <div>
                            <input id="overview" name="overview" type="overview" value={movies[movieSelect].overview} onChange={e => setEditMovie({...editMovie, overview: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-2 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Overview"'/>
                        </div>
                    </div>
                    <div>
                        <p for="rating" className='text-red-400 text-lg font-semibold py-6'>RATING</p>
                        <div>
                            <input id="rating" name="rating" type="rating" value={movies[movieSelect].rating} onChange={e => setEditMovie({...editMovie, rating: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-2 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="genre" type="text" placeholder="Overview"'/>
                        </div>
                    </div>
                    <div>
                        <p for="runtime" className='text-red-400 text-lg font-semibold py-6'>RUNTIME</p>
                        <div>
                            <input id="runtime" name="runtime" type="runtime" value={movies[movieSelect].runtime} onChange={e => setEditMovie({...editMovie, runtime: e.target.value})}
                            className='shadow appearance-none rounded w-full h-14 py-2 px-3 text-white bg-borderGray leading-tight focus:outline-none focus:shadow-outline" id="runtime" type="text" placeholder="Runtime"'/>
                        </div>
                    </div>
                    <div>
                        <div className='flex pt-24 justify-end gap-4 pb-8'>
                            <button className='text-red-400 text-xl rounded font-medium w-40 h-14 border-2 border-red-400 hover:bg-red-400 hover:text-slate-200'>RESET</button>
                            <button className='text-white text-xl rounded font-medium w-40 h-14 bg-red-400 hover:bg-white hover:text-red-400' onClick={newData}>SAVE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default EditMovieForm