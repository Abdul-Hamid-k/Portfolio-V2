import React from 'react'
import HeroUserImg from './HeroUserImg'
import { Router, useNavigate } from 'react-router'


const Home = () => {
  return (
    <div id='home' className='max-w-[65rem] mx-auto py-[3rem] md:py-[8rem] min-h-screen px-5 grid grid-cols-12 grid-rows-2 md:grid-rows-1 gap-2 md:gap-5 items-center '>
      <div className="flex flex-col gap-4 row-span-1">
        <a href="" target='_blank'><i className="cursor-pointer ri-instagram-line text-xl"></i></a>
        <a href="https://www.linkedin.com/in/abdul-hamid-khatri/" target='_blank'><i className="cursor-pointer ri-linkedin-box-fill text-xl"></i></a>
        <a href="https://github.com/Abdul-Hamid-k" target='_blank'><i className="cursor-pointer ri-github-fill text-xl"></i></a>
      </div>

      <div className="order-2 md:order-0 col-start-2 col-span-11 md:col-span-6">
        <h2 className='text-2xl md:text-4xl mb-2 font-medium'>Abdul Hamid 👋</h2>
        <div className="flex">
          <div className="h-[0.125rem] mt-3 mr-2 bg-gray-dd dark:bg-white w-20 "></div>
          <h3 className='text-lg'> Frontend Developer (React) and UI/UX Designer</h3>


        </div>
        <h3 className='mt-3 text-sm text-gray-l'>I'm Full Stack Developer with 1.5+ years of experience, specializing in frontend development. Proficient in React.js, Node.js, Express.js, and MongoDB, with expertise in building scalable, high-performance web applications.</h3>

        {/* TODO - link button */}
        <button

          className='bg-gray-dd dark:bg-white text-white dark:text-gray-dd font-medium px-4 py-3 rounded-xl text-lg mt-7 items-center'>Say Hello
          <div className="inline-block ml-2">
            <i className="ri-send-plane-fill text-xl"></i>
          </div>
        </button>
      </div>

      <div className="col-span-11 md:col-span-5">
        <HeroUserImg />
      </div>
    </div>
  )
}

export default Home