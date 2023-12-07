import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { red } from '@mui/material/colors';

const ResultsFilter = () => {
  return (
    <div className='flex pt-4 pb-4 border-b-2 drop-shadow-xl border-borderGray justify-between'>
      <nav className='flex items-center text-white text-xl space-x-8'>
        <a className='' href='/all'>ALL</a>
        <a className='' href='/doc'>DOCUMENTARY</a>
        <a className='' href='/com'>COMEDY</a>
        <a className='' href='/horror'>HORROR</a>
        <a className='' href='/crime'>CRIME</a>
      </nav>
      <div className='flex justify-items-center'>
        <p className='text-slate-300 text-xl pr-12'>SORT BY</p>
        <p className='text-white text-xl font-normal pr-2'>RELEASE DATE</p>
        <b><ArrowDropDownIcon sx={{ fontSize: 30, color: red[400] }} /></b>
      </div>
    </div>
  )
}

export default ResultsFilter