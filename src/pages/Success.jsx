import React from 'react'
import SuccessSubmit from '../components/Forms/SuccessSubmit'
import Footer from '../components/Footer'

const Success = () => {
  return (
    <div>
        <div className='px-40 pb-96 bg-hero-pattern bg-blur-sm bg-no-repeat bg-cover'>
            <div className='flex flex-row items-center pt-6 justify-between'>
                <div className='self-start'>
                    <p className='text-xl text-red-400'><b>netflix</b>roulette</p>
                </div>
            </div>
            <div>
                <SuccessSubmit />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default Success