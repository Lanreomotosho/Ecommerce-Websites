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

  const navItems = {
    {
      link: 'Home', path:'home'
    },
    {
      link: 'Home', path:'home'
    },
    {
      link: 'Home', path:'home'
    },
  }
  {
    link: 'Home', path:'home'
  },
}
  }
  return (
    <div>Header Lanre</div>
  )
}

export default Header