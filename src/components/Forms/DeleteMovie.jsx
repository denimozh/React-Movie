import React, {useState} from 'react'
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import movies from '../Movies/storage/movies';

const DeleteMovie = ({remove, movieSelect}) => {
  return (
    <div className='h-screen flex justify-center pt-16'>
      <div className='w-1/2 h-2/5 bg-bgGray items-center justify-center text-left pl-20 pt-4 '>
        <div className='relative'>
          <Link to='/'>
            <CloseIcon className='absolute top-2 right-4' sx={{ fontSize: 40, color: grey[50] }}/>
          </Link>
        </div>
        <div className='py-5 pt-10'>
          <p className='text-5xl text-white font-light tracking-wider'>DELETE MOVIE</p>
        </div>
        <div className='py-5'>
          <p className='text-xl text-white'>Are you sure you want to delete this movie?</p>
        </div>
        <div className='py-5 flex justify-end pr-24'>
          <button onClick={() => remove(movies[movieSelect])} className='hover:text-red-400 text-xl rounded-lg font-medium w-40 h-14 hover:bg-slate-200 bg-red-400 text-slate-200'>CONFIRM</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteMovie