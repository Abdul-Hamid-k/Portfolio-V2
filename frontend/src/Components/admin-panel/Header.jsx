import React, { useContext, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from 'axios';
import { useNavigate } from 'react-router'
import { UserDataContext } from '../../context/UserContext'

const Header = (props) => {

  let headerRef = useRef(null)
  const { setUser } = useContext(UserDataContext)

  const navigate = useNavigate()

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headerRef.childNodes, {
      y: -100,
      duration: 0.72,
      opacity: 0,
      stagger: 0.1
    })
  })

  const logoutUser = () => {
    axios.post(import.meta.env.VITE_API_BASE_URL + '/user/logout', {})
      .then((res) => {
        if (res.status === 200) {
          setUser(null);
          localStorage.removeItem('token');
          console.log('User logged out successfully')
          navigate('/admin-panel-login')
        }
      })
      .catch((err) => {
        console.error("Error logging out: " + err)
      });
  }

  console.log(headerRef)

  return (
    <>
      <header className='fixed w-full z-10 backdrop-blur-lg text-l-primary dark:text-d-primary dark:bg-black/50 select-none '>
        <nav className='flex gap-3 items-center justify-between py-4 px-5 h-[4.5rem]  max-w-[75rem] mx-auto'>
          <div ref={element => { headerRef = element }} className='flex gap-3'>
            <i onClick={(prev) => props.setIsSidemenuOpen(!props.isSidemenuOpen)}
              className="block cursor-pointer sm:hidden ri-menu-4-line text-lg" ></i>
            <li className='list-none text-lg font-medium'>Admin Panel</li>
          </div>

          <div onClick={logoutUser} className="bg-l-secondary dark:bg-l-secondary rounded-full h-12 w-12 flex justify-center items-center">
            <i className="ri-logout-box-r-line text-xl cursor-pointer"></i>
          </div>
        </nav >

      </header >
    </>
  )
}

export default Header