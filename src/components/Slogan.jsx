import React from 'react'
import Cards from '../assets/desktop/isocard.svg'

const Slogan = () => {
  return (
    <section className='relative text-36 my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48 '>
      <div className='text-center md:col-span-1 md:col-start-2'>
        <p className=''>
          Earn <span className='text-purple-300'>More</span>
        </p>
        <p className=''>Pay Less</p>
        <button className=' btn btn-secondary text-16 font-bold hover:bg-pink-500 md:text-25 md:px-8'>
          Start
        </button>
      </div>
      <div className='mt-16 md:absolute md:right-[-5rem]'>
        <img src={Cards} alt='card' />
      </div>
    </section>
  )
}

export default Slogan
