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
      <header className='hidden fixed md:block w-full z-10 bg-d-primary/50 backdrop-blur-lg text-l-primary dark:text-d-primary dark:bg-black/50 select-none'>
        <nav className='flex justify-between items-center py-4 px-5 h-[4.5rem]  max-w-[65rem] mx-auto'>
          {/* TODO */}
          <li ref={logoRef} className='list-none text-lg font-medium'><HashLink to="/#home">Abdul Hamid</HashLink></li>



          {/* PC View */}
          <div className="">
            <ul ref={element => { navbarRef = element }} className='hidden md:flex justify-between items-center space-x-7 text-l-secondary dark:text-d-secondary'>
              <HashLink
                to='/#home'
                className={`text-base font-medium ${activeNav === 'home' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('home')}>
                Home
              </HashLink>

              <HashLink
                to='/#about'
                className={`text-base font-medium ${activeNav === 'about' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('about')}>
                About
              </HashLink>

              <HashLink
                to='/#skills'
                className={`text-base font-medium ${activeNav === 'skills' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('skills')}>
                Skills
              </HashLink>

              <HashLink
                to='/#services'
                className={`text-base font-medium ${activeNav === 'services' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('services')}>
                Services
              </HashLink>

              <HashLink
                to='/#portfolio'
                className={`text-base font-medium ${activeNav === 'portfolio' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('portfolio')}>
                Portfolio
              </HashLink>

              <HashLink
                to='/#contact'
                className={`text-base font-medium  ${activeNav === 'contact' && 'text-l-primary dark:text-d-primary'}`}
                onClick={() => setActiveNav('contact')}>
                Contact
              </HashLink>

            </ul >
          </div >
        </nav >

      </header >

      {/* Mobile View */}
      < div ref={menuRef} className="fixed md:hidden z-10 w-full bottom-0 left-0 bg-white/50 dark:bg-black/50 backdrop-blur-lg pt-10 pb-2 rounded-t-xl light:inset-shadow-sm light:inset-shadow-gray-l " >
        <ul className='grid grid-cols-3 gap-y-5  justify-items-center align-items-center space-x-7 px-7 text-l-primary dark:text-d-secondary'>
          {/* Home */}
          <HashLink
            to='/#home'
            className={`text-base m-0 font-medium flex flex-col items-center ${activeNav === 'home' && 'text-l-primary dark:text-d-primary'}`}
            onClick={() => setActiveNav('home')}>
            <i className="ri-home-5-line text-xl"></i> Home
          </HashLink>

          {/* About */}
          <HashLink
            to='/#about'
            className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'about' && 'text-l-primary dark:text-d-primary'}`}
            onClick={() => setActiveNav('about')}>
            <i className="ri-user-line text-xl"></i> About
          </HashLink>

          {/* Skills */}
          <HashLink
            to='/#skills'
            className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'skills' && 'text-l-primary dark:text-d-primary'}`}
            onClick={() => setActiveNav('skills')}>
            <i className="ri-file-chart-line text-xl"></i> Skills
          </HashLink>

          {/* Services */}
          <HashLink
            to='/#services'
            className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'services' && 'text-l-primary dark:text-d-primary'}`}
            onClick={() => setActiveNav('services')}>
            <i className="ri-suitcase-fill text-xl"></i> Services
          </HashLink>

          {/* Portfolio */}
          <HashLink
            to='/#portfolio'
            className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'portfolio' && 'text-l-primary dark:text-d-primary'}`}
            onClick={() => setActiveNav('portfolio')}>
            <i className="ri-image-2-line text-xl"></i> Portfolio
          </HashLink>

          {/* Contact */}
          <HashLink
            to='/#contact'
            className={`text-base m-0 font-medium flex flex-col items-center  ${activeNav === 'contact' && 'text-l-primary dark:text-d-primary'}`}
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
        <div className="fixed bottom-0 w-full bg-white dark:bg-black flex justify-between md:hidden rounded-t-xl p-4">
          <p className='text-xl font-medium'>Abdul Hamid</p>
          <div className="" onClick={() => setToggelMenu(true)}>
            <i className="ri-dashboard-fill text-2xl"></i>
          </div>
        </div>
      </ div>
    </>
  )
}

export default Header