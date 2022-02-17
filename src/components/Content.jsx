import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../assets/mobile/checkpoint.svg'

const Content = () => {
  return (
    <section className=''>
      <div className='ml-[70px] mr-[54px] text-bold bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px]'>
        <div className='flex items-center justify-center py-4'>
          <FaUser size={22} className='mr-8' />
          <div>
            <p className='text-26'>10245</p>
            <p className='text-13 font-semibold'>Customers</p>
          </div>
        </div>
        <div className=' flex items-center justify-center pb-4'>
          <BsFillCreditCardFill size={22} className='mr-8' />
          <div>
            <p className='text-26'>12045</p>
            <p className='text-13 font-semibold'>Cards Issued</p>
          </div>
        </div>
      </div>
      <div className='text-13 flex flex-col items-center justify-center w-full mt-20 font-semibold gap-4'>
        <div className='check-content'>
          <img src={checkIconMobile} alt='check' />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='check' />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className='check-content'>
          <img src={checkIconMobile} alt='check' />
          <p>Card reports sent to your phone every weeks</p>
        </div>
      </div>
    </section>
  )
}

export default Content
