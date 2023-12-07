import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { red, grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const SuccessSubmit = () => {
  return (
    <div className='h-screen flex justify-center pt-14'>
      <div className='w-1/2 h-2/5 bg-bgGray items-center justify-center text-center pt-4 '>
        <div className='relative'>
          <Link to='/'>
            <CloseIcon className='absolute top-2 right-4' sx={{ fontSize: 40, color: grey[50] }}/>
          </Link>
        </div>
        <div className='py-5 pt-10'>
          <CheckCircleIcon className='bg-white rounded-full' sx={{ fontSize: 80, color: red[400] }}/>
        </div>
        <div className='py-5'>
          <p className='text-5xl text-white font-light tracking-wider'>CONGRATULATIONS!</p>
        </div>
        <div className='py-5'>
          <p className='text-xl text-white'>The movie has been added to database successfully</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessSubmit