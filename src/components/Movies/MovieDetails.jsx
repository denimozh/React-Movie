import React from 'react'

const MovieDetails = ({movieUrl, title, date, genre, overview, rating, runtime}) => {
  return (
    <div className='flex flex-row pt-10'>
        <div className='flex flex-row'>
            <div className='basis-1/3'>
                <img className='w-[420px] ' alt='' src={movieUrl}/>
            </div>
            <div className='basis-2/3'>
                <div className='flex pt-10 gap-8'>
                    <p className='text-7xl text-white font-light'>{title}</p>
                    <p className='text-lime-400 border rounded-full text-3xl text-center p-4'>{rating}</p>
                </div>
                <p className='pt-4 pl-1 text-lg text-slate-400 font-normal'>{genre}</p>
                <div className='flex gap-8 pl-1 py-8'>
                    <p className='text-3xl text-red-400'>{date}</p>
                    <p className='text-3xl text-red-400'>{runtime}</p>
                </div>
                <p className='text-slate-200 text-xl pl-2'>{overview}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails