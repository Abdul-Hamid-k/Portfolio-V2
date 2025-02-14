import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SideMenu = (props) => {
  const [activePanle, setActivePanle] = useState('home')

  let menuRef = useRef(null)
  const sidePanelRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(menuRef.childNodes, {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.1
    })
  }, [])

  console.log(props.isSidemenuOpen)


  useGSAP(() => {
    if (props.isSidemenuOpen) {
      gsap.to(sidePanelRef.current, {
        duration: 0.5,
        translateX: '0',
      })
    } else (
      gsap.to(sidePanelRef.current, {
        duration: 0.5,
        translateX: '-100%',
      })
    )
  }, [props.isSidemenuOpen])


  // Code for loading the sidemenu based on screen size
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 640px)", () => {
      gsap.to(sidePanelRef.current,
        {
          position: 'fixed',
          translateX: '0'
        })
    })

    mm.add("(max-width: 639px)", () => {
      gsap.to(sidePanelRef.current,
        {
          position: 'absolute',
          translateX: '-100%'
        })
    })

    return () => mm.revert()
  }, [])

  const navigate = useNavigate()
  return (
    <div ref={sidePanelRef} className='absolute -translate-x-full sm:translate-x-0 sm:fixed h-full '>

      <div ref={element => { menuRef = element }} className=' dark:bg-black backdrop-blur-2xl px-5 py-5 h-[calc(100%)] w-[13.5rem] flex flex-col gap-5'>

        <div
          className={`cursor-pointer w-fit font-medium  ${activePanle == 'home' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('home')
            navigate('')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-home-5-line mr-1"></i>
          <span>Dashboard</span>
        </div>

        <div
          className={`cursor-pointer w-fit font-medium ${activePanle == 'about' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('about')
            navigate('about')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-user-line mr-1"></i>
          <span>About Me</span>
        </div>

        <div
          className={`cursor-pointer w-fit font-medium ${activePanle == 'skills' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('skills')
            navigate('skills')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-file-chart-line mr-1"></i>
          <span>Skills</span>
        </div>

        <div
          className={`cursor-pointer w-fit font-medium ${activePanle == 'services' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('services')
            navigate('services')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-suitcase-fill mr-1"></i>
          <span>Services</span>
        </div>

        <div
          className={`cursor-pointer w-fit font-medium ${activePanle == 'portfolio' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('portfolio')
            navigate('portfolio')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-image-2-line mr-1"></i>
          <span>Portfolio</span>
        </div>

        <div
          className={`cursor-pointer w-fit font-medium ${activePanle == 'contact' ? 'text-l-primary dark:text-d-primary' : 'text-l-secondary hover:text-l-primary dark:text-d-secondary dark:hover:text-d-primary'}`}
          onClick={() => {
            setActivePanle('contact')
            navigate('contact')
            // props.setIsSidemenuOpen(false)
          }}>
          <i className="ri-send-plane-fill mr-1"></i>
          <span>Contact</span>
        </div>

      </div>

    </div>
  )
}

export default SideMenu