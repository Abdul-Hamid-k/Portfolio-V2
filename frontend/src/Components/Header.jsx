import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {

  const [toggeleMenu, setToggelMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('home')

  const menuRef = useRef(null)
  let navbarRef = useRef(null)
  const logoRef = useRef(null)

  useGSAP(() => {
    gsap.to(menuRef.current, {
      duration: 1,
      y: toggeleMenu ? 0 : 1000,

    })
  }, [toggeleMenu])

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(logoRef.current, {
      y: -100,
      duration: 0.72,
      opacity: 0,

    })

    tl.from(navbarRef.childNodes, {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
    })
  })

  return (
    <>
      <Router>
        <header className='hidden md:block w-full bg-white backdrop-blur-lg dark:text-white dark:bg-black select-none'>
          <nav className='flex justify-between items-center py-4 px-5 h-[4.5rem]  max-w-[65rem] mx-auto'>
            {/* TODO */}
            <li ref={logoRef} className='list-none text-lg font-medium'><HashLink to="/#home">Abdul Hamid</HashLink></li>



            {/* PC View */}
            <div className="">
              <ul ref={element => { navbarRef = element }} className='hidden md:flex justify-between items-center space-x-7'>
                <HashLink
                  to='/#home'
                  className={`text-base font-medium dark:text-gray-l ${activeNav === 'home' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('home')}>
                  Home
                </HashLink>

                <HashLink
                  to='/#about'
                  className={`text-base font-medium dark:text-gray-l ${activeNav === 'about' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('about')}>
                  About
                </HashLink>

                <HashLink
                  to='/#skills'
                  className={`text-base font-medium dark:text-gray-l ${activeNav === 'skills' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('skills')}>
                  Skills
                </HashLink>

                <HashLink
                  to='/#services'
                  className={`text-base font-medium dark:text-gray-l ${activeNav === 'services' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('services')}>
                  Services
                </HashLink>

                <HashLink
                  to='/#portfolio'
                  className={`text-base font-medium dark:text-gray-l ${activeNav === 'portfolio' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('portfolio')}>
                  Portfolio
                </HashLink>

                <HashLink
                  to='/#contact'
                  className={`text-base font-medium  dark:text-gray-l ${activeNav === 'contact' && 'text-black dark:text-white'}`}
                  onClick={() => setActiveNav('contact')}>
                  Contact
                </HashLink>

              </ul >
            </div >
          </nav >

        </header >

        {/* Mobile View */}
        < div ref={menuRef} className="fixed md:hidden z-10 w-full bottom-0 left-0 bg-white dark:bg-black pt-10 pb-2 rounded-t-xl light:inset-shadow-sm light:inset-shadow-gray-l " >
          <ul className='grid grid-cols-3 gap-y-5  justify-items-center align-items-center space-x-7 px-7 text-gray-d'>
            {/* Home */}
            <HashLink
              to='/#home'
              className={`text-base m-0 font-medium flex flex-col items-center ${activeNav === 'home' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('home')}>
              <i className="ri-home-5-line text-xl"></i> Home
            </HashLink>

            {/* About */}
            <HashLink
              to='/#about'
              className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'about' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('about')}>
              <i className="ri-user-line text-xl"></i> About
            </HashLink>

            {/* Skills */}
            <HashLink
              to='/#skills'
              className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'skills' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('skills')}>
              <i className="ri-file-chart-line text-xl"></i> Skills
            </HashLink>

            {/* Services */}
            <HashLink
              to='/#services'
              className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'services' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('services')}>
              <i className="ri-suitcase-fill text-xl"></i> Services
            </HashLink>

            {/* Portfolio */}
            <HashLink
              to='/#portfolio'
              className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'portfolio' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('portfolio')}>
              <i className="ri-image-2-line text-xl"></i> Portfolio
            </HashLink>

            {/* Contact */}
            <HashLink
              to='/#contact'
              className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'contact' && 'text-black dark:text-white'}`}
              onClick={() => setActiveNav('contact')}>
              <i className="ri-send-plane-2-line text-xl"></i> Contact
            </HashLink>


          </ul>
          <div className="flex w-full justify-end px-7 py-4" onClick={() => setToggelMenu(false)}>
            <i className="ri-close-line text-2xl"></i>
          </div>
        </ div>

        {/* Menu Button Opener */}
        < div className="" >
          <div className="fixed md:hidden bottom-0 w-full bg-white dark:bg-black flex justify-between md:hidden rounded-t-xl p-4">
            <p className='text-xl font-medium'>Abdul Hamid</p>
            <div className="" onClick={() => setToggelMenu(true)}>
              <i className="ri-dashboard-fill text-2xl"></i>
            </div>
          </div>
        </ div>
      </Router >
    </>
  )
}

export default Header