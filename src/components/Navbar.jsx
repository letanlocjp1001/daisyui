import React, { useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import useDarkMode from '../useDarkMode'

const Navbar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isDarkMode, toggleDarkMode] = useDarkMode()

  return (
    <nav className='flex items-center'>
      <div className='flex items-center'>
        <div className='text-20 font-bold mr-2'>NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={24}
            color='#e9c46a'
            className='cursor-pointer'
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={24}
            color='#e9c46a'
            className='cursor-pointer'
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className='ml-auto text-16 font-semibold md:flex md:gap-10'>
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={24}
            className='cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={24}
            className='cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <>
            <li className='btn dark:glass btn-primary'>Features</li>
            <li className='btn dark:glass btn-primary'>Menu</li>
            <li className='btn dark:glass btn-primary'>Our Story</li>
            <button className='btn dark:glass btn-primary'>Contact</button>
          </>
        )}
        {openMenu && (
          <div className='absolute right-8 z-10 bg-white p-8 text-center text-13 text-black'>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Menu</li>
            <li className='cursor-pointer'>Our Story</li>
            <li className='cursor-pointer'>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
