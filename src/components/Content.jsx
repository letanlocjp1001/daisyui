import React from 'react'
import { useSpring, animated } from 'react-spring'
import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkIconMobile from '../assets/mobile/checkpoint.svg'

const Content = () => {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } })
  const card = useSpring({ cards: 12045, from: { cards: 0 } })
  return (
    <section className='md:flex md:items-center md:justify-center'>
      <div className='ml-[70px] mr-[54px] md:mx-20 text-bold bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px] md:px-[50px]'>
        <div className='flex items-center justify-center py-4'>
          <FaUser size={22} className='mr-8' />
          <div>
            <p className='text-26'>
              <animated.div>
                {customer.customers.to((val) => Math.floor(val))}
              </animated.div>
            </p>
            <p className='text-13 font-semibold'>Customers</p>
          </div>
        </div>
        <div className=' flex items-center justify-center pb-4'>
          <BsFillCreditCardFill size={22} className='mr-8' />
          <div className='w-full'>
            <p className='text-26'>
              <animated.div>
                {card.cards.to((val) => Math.floor(val))}
              </animated.div>
            </p>
            <p className='text-13 font-semibold'>Cards Issued</p>
          </div>
        </div>
      </div>
      <div className='text-13 flex flex-col items-center justify-center w-full mt-20 md:mt-0 font-semibold gap-4'>
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
