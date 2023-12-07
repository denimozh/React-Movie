import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center pt-6 justify-between'>
        <div className='self-start'>
            <p className='text-xl text-red-400'><b>netflix</b>roulette</p>
        </div>
        <div>
          <Link to="/addMovie">
            <button className='text-red-400 text-xl rounded-lg font-medium w-40 h-14 bg-slate-200 hover:bg-red-400 hover:text-slate-200'>+ADD MOVIE</button>
          </Link>
        </div>
    </div>
  )
}

export default Navbar