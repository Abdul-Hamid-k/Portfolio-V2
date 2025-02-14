import React, { useRef, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = (props) => {

  let headerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(headerRef.ChildNodes, {
      y: -100,
      duration: 0.72,
      opacity: 0,

    })
  })

  console.log('props ', props)

  return (
    <>
      <header className='fixed w-full z-10 backdrop-blur-lg text-l-primary dark:text-d-primary dark:bg-black/50 select-none '>
        <nav ref={elem => headerRef = elem} className='flex gap-3 items-center py-4 px-5 h-[4.5rem]  max-w-[75rem] mx-auto'>
          {/* TODO */}
          <div onClick={(prev) => props.setIsSidemenuOpen(!props.isSidemenuOpen)}>
            <i className="block cursor-pointer sm:hidden ri-menu-4-line text-lg" ></i>
          </div>
          <li className='list-none text-lg font-medium'>Admin Panel</li>
        </nav >

      </header >
    </>
  )
}

export default Header