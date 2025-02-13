import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserContext'

const Services = () => {
  const { user } = useContext(UserDataContext)
  const skillCategories = Array.from(new Set(user?.skills?.map(skill => skill.category)))

  const [visiblePanel, setVisiblePanel] = useState(null)

  console.log(user?.skills, skillCategories)

  return (
    <section id="services" className='min-h-[42rem] py-[5rem] px-3 text-gray-dd'>
      {/* TODO: Connect to DB */}
      <h2 className='text-4xl font-medium text-center text-l-primary dark:text-d-primary'>Services</h2>
      <h3 className='text-sm text-center text-l-secondary dark:text-d-secondary mt-1'>What I offer</h3>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:w-fit mx-auto mt-[4rem]">

        <div className="border-[0.025rem] p-10 flex flex-col h-[18rem] w-full sm:w-[17rem] justify-end">

          <div className="">
            <i class="ri-code-s-slash-line block text-4xl"></i>
            <h2 className='text-xl font-medium mt-4'>Web </h2>
            <h2 className='text-xl font-medium mt-1'>Developer </h2>
            <h3 onClick={() => setVisiblePanel("web-developer")} className='text-sm font-light text-l-secondary dark:text-d-secondary mt-1 cursor-pointer'>View More <i class="ri-arrow-right-line"></i></h3>
          </div>
        </div>

        <div className="border-[0.025rem] p-10 flex flex-col h-[18rem] w-full sm:w-[17rem] justify-end">
          <div className="">
            <i class="ri-layout-2-line block text-4xl"></i>
            <h2 className='text-xl font-medium mt-4'>UI/UX </h2>
            <h2 className='text-xl font-medium mt-1'>Designer </h2>
            <h3 onClick={() => setVisiblePanel("ui/ux-designer")} className='text-sm font-light text-l-secondary dark:text-d-secondary mt-1 cursor-pointer'>View More <i class="ri-arrow-right-line"></i></h3>
          </div>
        </div>
      </div>

      {/* popups */}

      {/* Web-developer */}
      {visiblePanel === "web-developer" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex justify-center items-center">
          <div className="absolute w-[90%] mx-4 sm:w-[30rem] min-h-[10rem] bg-d-primary dark:bg-l-primary rounded-3xl px-8 py-8">
            <div className="absolute right-5 top-3 flex justify-end cursor-pointer" onClick={() => setVisiblePanel(null)}>
              <i class="ri-close-fill text-2xl"></i>
            </div>
            <h4 className='text-center font-medium text-xl text-l-primary dark:text-d-primary'>Web Developer</h4>
            <h5 className='text-l-secondary dark:text-d-secondary px-4 sm:px-12 mt-4 text-center text-sm'>Services with high responsiblity. Providing quality work to the client.</h5>

            <div className="flex flex-col mt-7 gap-4">
              <div className="flex gap-1  text-sm">
                <i class="ri-checkbox-circle-line"></i>
                <h5>I develop single page web applications.</h5>
              </div>
              <div className="flex gap-1 text-sm">
                <i class="ri-checkbox-circle-line"></i>
                <h5>
                  I develop APIs for the application.</h5>
              </div>
            </div>
          </div>
        </div>)}

      {/* ui/ux-designer */}
      {visiblePanel === "ui/ux-designer" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex justify-center items-center">
          <div className="absolute w-[90%] mx-4 sm:w-[30rem] min-h-[10rem] bg-d-primary dark:bg-l-primary rounded-3xl px-8 py-8">
            <div className="absolute right-5 top-3 flex justify-end cursor-pointer" onClick={() => setVisiblePanel(null)}>
              <i class="ri-close-fill text-2xl"></i>
            </div>
            <h4 className='text-center font-medium text-xl text-l-primary dark:text-d-primary'>UI/UX Designer</h4>
            <h5 className='text-l-secondary dark:text-d-secondary px-4 sm:px-12 mt-4 text-center text-sm'>Services with high responsiblity. Providing quality work to the client.</h5>
            <div className="flex flex-col gap-4 mt-7">

              <div className="flex gap-1  text-sm">
                <i class="ri-checkbox-circle-line"></i>
                <h5>
                  I develop the User Interface.</h5>
              </div>
              <div className="flex gap-1 text-sm">
                <i class="ri-checkbox-circle-line"></i>
                <h5>
                  I create mockups.</h5>
              </div>
              <div className="flex gap-1 text-sm">
                <i class="ri-checkbox-circle-line"></i>
                <h5>

                  I create ux element interactions.</h5>
              </div>
            </div>

          </div>
        </div>)}

    </section>
  )
}

export default Services