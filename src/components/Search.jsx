import React from 'react'

const Search = () => {
  return (
    <div className='pt-12 pl-16'>
        <div>
            <p className='text-5xl font-light tracking-widest text-white'>FIND YOUR MOVIE</p>
        </div>
        <div className='flex pt-16 gap-x-8'>
            <input className='pl-4 w-3/5 h-16 bg-slate-300 text-white outline-none rounded-lg placeholder:text-lg placeholder:text-white placeholder:tracking-wide' placeholder="What do you want to watch?"/>
            <button className='text-white text-xl rounded-lg font-normal w-64 h-16 bg-red-400 tracking-wide hover:bg-white hover:text-red-400'>SEARCH</button>
        </div>
    </div>
  )
}

export default Search