import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../../context/UserContext'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const Services = () => {
  const [serviceName, setServiceName] = useState('')
  const [serviceDescription, setServiceDescription] = useState('')
  const [servicePoints, setServicePoints] = useState('')
  const [serviceIcon, setServiceIcon] = useState('')

  const { user, setUser } = useContext(UserDataContext)


  useEffect(() => {
    // setExperienceMonths(user.experienceMonths)
    // setExperienceYear(user.experienceYears)
    // setAboutSummary(user.aboutSummary)
    // setResumeFile(user.resumeFile)
  }, [user])

  const AddService = (e) => {
    e.preventDefault()
    // console.log(import.meta.env.VITE_API_BASE_URL + '/user/add-service')

    axios.post(import.meta.env.VITE_API_BASE_URL + '/user/add-service', {
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      servicePoints: servicePoints,
      serviceIcon: serviceIcon,
    }, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      if (res.status === 201) {
        toast.success('Service added successfully!')
        console.log(res)
        setUser(res.data.user)
        setServiceName('')
        setServiceDescription('')
        setServicePoints('')
        setServiceIcon('')
      }
    }).catch(err => {
      if (err.status === 406) {
        toast.error('Service already exist!')
      } else {
        console.error('Error adding service:', err)
        toast.error('Error adding service')
      }
    })
  }

  const DeleteService = (serviceName, serviceDescription, servicePoints, serviceIcon) => {
    axios.post(import.meta.env.VITE_API_BASE_URL + '/user/delete-service', {
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      servicePoints: servicePoints,
      serviceIcon: serviceIcon,
    }, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      if (res.status === 200) {
        toast.success('Service deleted successfully!')
        // console.log(res)
        setUser(res.data.user)
      }
    }).catch(err => {
      console.error('Error deleting service:', err)
      toast.error('Error deleting service')
    })
  }



  // console.log(user?.services)

  return (
    <>
      <h3 className='font-medium'>Services</h3>
      <ToastContainer />
      <div className='px-5 py-6 dark:bg-l-secondary bg-d-secondary/12 rounded-2xl mt-5 '>

        {/* Add Services */}
        <h4 className='text-sm '>Add Service</h4>
        <form onSubmit={(e) => AddService(e)} className=''>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
            {/* serviceName */}
            <input
              required
              value={serviceName}
              placeholder='Service Name'
              onChange={(e) => setServiceName(e.target.value)}
              id='serviceName'
              className='flex-1 border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1/2 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />

            {/* serviceTitle */}
            <input
              required
              value={serviceDescription}
              placeholder='Service Description'
              onChange={(e) => setServiceDescription(e.target.value)}
              id='serviceDescription'
              className='flex-1 border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1/2 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />


            {/* servicePoints */}
            <textarea
              required
              value={servicePoints}
              placeholder='Skill Points'
              onChange={(e) => setServicePoints(e.target.value)}
              id='servicePoints'
              className='flex-1 resize-none border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1/2 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text"
              rows={5} />

            {/* serviceIcon */}
            <input
              required
              value={serviceIcon}
              placeholder='Service Icon (Remix icon)'
              onChange={(e) => setServiceIcon(e.target.value)}
              id='serviceIcon'
              className='flex-1 h-fit border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1/2 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />

          </div>
          <p className='text-xs text-red-500 mt-2'>** Please provide service points seperated by //</p>

          <button
            className='mt-4 bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary px-5 py-2 rounded-md font-medium cursor-pointer'>
            Add Service
          </button>

        </form>

        {/* Services */}
        <h4 className='text-sm mt-5 capitalize'>Services</h4>

        <div className="mt-1 flex flex-col gap-2">
          {user?.services?.map(service =>
            <div key={service.serviceName} className='flex justify-between border-[0.025rem] text-sm py-2 px-3 rounded-md '>
              <div className="flex flex-col">
                <h5 className='capitalize text-xl font-medium'>
                  {console.log()}
                  <i className={` ${service.serviceIcon} mr-2`}></i>
                  {service.serviceName}</h5>
                <h5 className='capitalize text-l-secondary dark:text-d-secondary mt-1'>{service.serviceDescription}</h5>

                {service?.servicePoints.map((point) => (
                  <h5 key={point} className='title'>
                    <i className="ri-checkbox-circle-line mr-1"></i>
                    {point}
                  </h5>
                ))}


              </div>

              <div className="justify-self-end">
                <i onClick={() => DeleteService(service.serviceName, service.serviceDescription, service.servicePoints, service.serviceIcon)} className="ri-delete-bin-fill cursor-pointer text-red-500 text-base"></i>
              </div>
            </div>
          )}
        </div>




      </div>
    </>
  )
}

export default Services