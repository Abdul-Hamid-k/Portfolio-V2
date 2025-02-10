import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AbdulImage from "../assets/AbdulimgSm.jpg"

const HeroUserImg = () => {
  const reactIconRef = useRef(null)
  const nodeIconRef = useRef(null)
  const figmaIconRef = useRef(null)
  const gitIconRef = useRef(null)

  useGSAP(() => {
    gsap.from(reactIconRef.current, {
      duration: 1,
      y: 250,
      x: 250,
      opacity: 0,
      delay: 1
    })

    gsap.from(nodeIconRef.current, {
      duration: 1,
      y: 250,
      x: 250,
      opacity: 0,
      delay: 1
    })

    gsap.from(figmaIconRef.current, {
      duration: 1,
      y: -250,
      x: 50,
      opacity: 0,
      delay: 1
    })

    gsap.from(gitIconRef.current, {
      duration: 1,
      y: -250,
      x: -250,
      opacity: 0,
      delay: 1
    })
  }, [])


  return (
    <div className='relative w-fit md:w-auto h-fit p-3 overflow-hidden'>
      {/* react Icon */}
      <div ref={reactIconRef} className="absolute rounded-full backdrop-blur p-2 bg-white/80 bottom-4 left-11 h-12 w-12">
        <img
          className='object-cover object-fit'
          src="https://imgs.search.brave.com/FihthY8hMrxn60mcDaOWs6cpLeU5olROkI4hra30AuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn" alt="" />
      </div>

      {/* node icon */}
      <div ref={nodeIconRef} className="absolute rounded-full backdrop-blur p-2 bg-white/70 top-2 md:top-3 right-12 md:right-14 h-12 w-12">
        <img
          className='object-cover object-fit'
          src="https://imgs.search.brave.com/DZqhRgeja0LEjMFzA0X2-Qs5Ak3QhrSO28PvuhFRmvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tNDU0eDUx/Mi1uenRvZngxNy5w/bmc" alt="" />
      </div>

      {/* figma icon */}
      <div ref={figmaIconRef} className="absolute rounded-full backdrop-blur p-2 bg-white/70 bottom-12 right-10 h-12 w-12 flex justify-center items-center">
        <img
          className='h-7 object-cover object-fit'
          src="https://imgs.search.brave.com/gNwShVHwW-NISMTyiJRTVYuQgBb5IEBXQSQ4nqHcsVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9maWdtYS1p/Y29uLTY4NHgxMDI0/LWJmbzdkb2ZtLnBu/Zw" alt="" />
      </div>

      {/* github icon */}
      <div ref={gitIconRef} className="absolute rounded-full backdrop-blur p-2 bg-white/70 top-26 left-5 h-12 w-12 flex justify-center items-center">
        <img
          className='h-7 object-cover object-fit'
          src="https://imgs.search.brave.com/0cgtPbRhAyOerzoF87WD0G4bo4LWCk7P0o9_vytL-Ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkxL09jdGljb25z/LW1hcmstZ2l0aHVi/LnN2Zw" alt="" />
      </div>

      <div className="home__img overflow-hidden">
        <img className='h-full object-fit object-cover' src={AbdulImage} alt="" />
      </div>
    </div>
  )
}

export default HeroUserImg