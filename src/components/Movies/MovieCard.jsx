import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

const MovieCard = ({movieUrl, title, date, genre, id, handleMovieId}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const movieRef = useRef(id);

  const mouseClick = () => {
    setIsOpen(!isOpen)
  }

  const mouseIdClick = () => {
    if (movieRef.current) {
      handleMovieId(id);
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='max-w-md ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={mouseIdClick} ref={movieRef}>
      <div className='w-full h-full'>
        <div className='relative'>
          <Link to={`/movie/${id}`}>
            <img className='w-full h-full' alt='' src={movieUrl} />
          </Link>
          {isHovered && (
            isOpen ? (
              <div className='absolute top-5 right-5'>
                  <ul id="dropdown" className='w-48 bg-bgGray outline-none border-none pb-2 rounded-lg'>
                      <li value="close" onClick={mouseClick} className='flex justify-end pt-1 pr-1' ><CloseIcon sx={{ fontSize: 20, color: grey[50] }}/></li>
                      <Link to={`/movie/${id}/edit`}>
                        <li value="edit" className='text-white hover:bg-red-400 text-lg pl-6 py-2'>Edit</li>
                      </Link>
                      <Link to={`/movie/${id}/delete`}>
                      <li value="delete" className='text-white hover:bg-red-400 text-lg pl-6 py-2'>Delete</li>
                      </Link>
                  </ul>
              </div>
            ) : (
              <Link>
                <MoreVertIcon
                  className='absolute top-5 right-5 rounded-full p-1 bg-bgGray'
                  sx={{ fontSize: 40, color: grey[50] }}
                  onClick={mouseClick}
                />
              </Link>
              )
            )}
        </div>
      </div>
      <div className='pt-4'>
        <div className='flex justify-between'>
          <p className='text-xl text-slate-200 font-light'><b>{title}</b></p>
          <p className='text-base px-3 text-slate-200 border border-slate-400 rounded-lg'>{date}</p>
        </div>
        <div>
          <p className='pt-1 text-lg text-slate-400 font-light'>{genre}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard