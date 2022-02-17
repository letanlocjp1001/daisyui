import React from 'react'
import Cards from '../assets/desktop/isocard.svg'

const Slogan = () => {
  return (
    <section className='text-36 my-14 font-extrabold'>
      <div className='text-center'>
        <p className=''>
          Earn <span className='text-purple-300'>More</span>
        </p>
        <p className=''>Pay Less</p>
        <button className=' btn btn-secondary text-16 font-bold hover:bg-pink-500'>
          Start
        </button>
      </div>
      <div className='mt-16'>
        <img src={Cards} alt='card' />
      </div>
    </section>
  )
}

export default Slogan
