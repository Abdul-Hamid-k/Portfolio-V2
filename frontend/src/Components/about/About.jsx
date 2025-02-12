import Image from "../../assets/AbdulimgSm.jpg"
import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserContext'
import CV from '../../assets/AbdulHamidKhatri.pdf'

const About = () => {
  const { user } = useContext(UserDataContext)

  return (
    <section id="about" className='min-h-[42rem] py-[5rem] px-3 text-gray-dd'>

      <h2 className='text-4xl font-medium text-center text-l-primary dark:text-d-primary'>About Me</h2>
      <h3 className='text-sm text-center text-l-secondary dark:text-d-secondary'>My Introduction</h3>

      <div className="grid grid-cols-1 gap-14  lg:grid-cols-2 justify-items-center mt-[4rem]">
        <img
          src={Image}
          alt="user image"
          className='w-[21.87rem] rounded-4xl' />

        {/* details */}
        <div className="p-3 md:p-5 flex flex-col gap-9 items-center lg:items-start">
          {/* badges */}
          <div className="grid grid-cols-3 w-full justify-items-center gap-2 text-l-primary dark:text-d-primary">
            {/* Experience badge */}
            <div className="border-[0.015rem] w-full rounded-md px-3 py-4  md:py-4 md:px-5 lg:px-6 border-l-secondary dark:border-d-secondary flex flex-col items-center gap-1">
              <i className="ri-award-line text-2xl"></i>
              <h4 className="font-medium text-sm md:text-base ">Experience</h4>
              <h5 className="text-xs text-l-secondary dark:text-d-secondary">{`${user.experienceYear < 2 ? 'Fresher' : user.experienceYear > 2 ? 'Senior' : 'Lead'}`}</h5>
              <h5 className="hidden md:block text-center text-xs font-light text-l-secondary dark:text-d-secondary">{`(${user.experienceYear}.${user.experienceMonths} Years)`}</h5>
            </div>

            {/* Completed badge */}
            {/* TODO */}
            <div className="border-[0.015rem] w-full rounded-md px-3 py-4  md:py-4 md:px-5 lg:px-6 border-l-secondary dark:border-d-secondary flex flex-col items-center gap-1">
              <i class="ri-suitcase-fill text-2xl"></i>
              <h4 className="font-medium text-sm md:text-base">Completed</h4>
              <h5 className="text-xs text-l-secondary dark:text-d-secondary">{`4 Projects`}</h5>

            </div>

            {/* Support badge */}
            <div className="border-[0.015rem] w-full rounded-md px-3 py-4  md:py-4 md:px-5 lg:px-6 border-l-secondary dark:border-d-secondary flex flex-col items-center gap-1">
              <i className="ri-customer-service-2-line text-2xl"></i>
              <h4 className="font-medium text-sm md:text-base">Support</h4>
              <h5 className="text-center text-xs text-l-secondary dark:text-d-secondary">{`Online 24/7`}</h5>

            </div>

          </div>

          <h4 className="text-xl text-l-secondary dark:text-d-secondary text-center lg:text-start">{user.aboutSummary}</h4>

          <a
            href={CV}
            download=""
            className='w-fit bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary font-medium px-4 py-3 rounded-xl text-xl items-center'>Download CV
            <div className="inline-block ml-2">
              <i className="ri-send-plane-fill text-2xl"></i>
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}

export default About