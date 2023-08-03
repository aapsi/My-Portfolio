import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants/constants'
import {  menu, close } from '../assets'
import logo from '/ak-logo.png'

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5
    top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            // points to where we are on the page
            window.scrollTo(0, 0)
            // this will scroll to the top of the page
          }}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer'>Adrian
              <span className='sm:block hidden'>
                Khaira
              </span>
            </p>
          </Link>
      </div>
    </nav>
  )
}

export default Navbar