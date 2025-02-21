import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserContext'

const Services = () => {
  const { user } = useContext(UserDataContext)
  const skillCategories = Array.from(new Set(user?.skills?.map(skill => skill.category)))

  const [visiblePanel, setVisiblePanel] = useState(null)


  return (
    <section id="services" className='min-h-[42rem] py-[5rem] px-3 text-gray-dd'>
      {/* TODO: Connect to DB */}
      <h2 className='text-4xl font-medium text-center text-l-primary dark:text-d-primary'>Services</h2>
      <h3 className='text-sm text-center text-l-secondary dark:text-d-secondary mt-1'>What I offer</h3>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:w-fit mx-auto mt-[4rem]">


        {user?.services?.map(service => (
          <div key={service.serviceName} className="border-[0.025rem] p-10 flex flex-col h-[18rem] w-full sm:w-[17rem] justify-end">
            <div className="">
              <i className={`${service.serviceIcon} block text-4xl`}></i>
              <div className="mt-4">
                {service.serviceName.split(' ').map(name => (
                  <h2 className='text-xl font-medium mt-1'>{name} </h2>
                ))}
              </div>
              <h3 onClick={() => setVisiblePanel(service.serviceName)} className='text-sm font-light text-l-secondary dark:text-d-secondary mt-1 cursor-pointer'>View More <i className="ri-arrow-right-line"></i></h3>
            </div>
          </div>
        ))}
      </div>


      {/* popups */}

      {
        user?.services?.map(service => (
          <>
            {
              visiblePanel === service?.serviceName && (
                <div key={service.serviceName} className="fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex justify-center items-center">
                  <div className="absolute w-[90%] mx-4 sm:w-[30rem] min-h-[10rem] bg-d-primary dark:bg-l-primary rounded-3xl px-8 py-8">
                    <div className="absolute right-5 top-3 flex justify-end cursor-pointer" onClick={() => setVisiblePanel(null)}>
                      <i className="ri-close-fill text-2xl"></i>
                    </div>
                    <h4 className='text-center font-medium text-xl text-l-primary dark:text-d-primary'>{service.serviceName}</h4>
                    <h5 className='text-l-secondary dark:text-d-secondary px-4 sm:px-12 mt-4 text-center text-sm'>{service.serviceDescription}</h5>

                    <div className="flex flex-col mt-7 gap-4">
                      {service.servicePoints.map(point => (
                        <div className="flex gap-1  text-sm">
                          <i className="ri-checkbox-circle-line"></i>
                          <h5>{point}</h5>
                        </div>

                      ))}
                    </div>
                  </div>
                </div>)
            }
          </>
        ))
      }

    </section >
  )
}

export default Services