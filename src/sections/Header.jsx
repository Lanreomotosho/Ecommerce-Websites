import React, { useEffect, useState } from 'react'
import sitelogo from '../assets/clients/sitelogo.svg'
import { IoSearch, IoPersonAddOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { useDarkMode } from '../Components/DarkmodeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(()=> {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode} = useDarkMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  
  //this  one is optional
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: 'Home', path:'home'
    },
    {
      link: 'Collections', path:'collections'
    },
    {
      link: 'Products', path:'products'
    },
  {
    link: 'Blogs', path:'blogs'
  },
  {
    link: 'Contact', path:'contact'
  },
]


  return (
 <nav className={`${darkMode ? 'dark bg-black' : 'light bg-white'} w-full flex 
 lg:flex-col flex-row justify-between items-center gap-4 lg:px-20 px-6 lg:py-1 
 lg:static sticky top-0 z-[999]`}>
  <div id='top' className='relative w-full flex justify-center items-center'>
    <img src='{sitelogo}' alt="" />
  </div>
 </nav>
  )
}

export default Header