import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../../context/UserContext'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import ConfirmPopUp from '../ConfirmPopUp'

const About = () => {
  const [experienceYear, setExperienceYear] = useState(0)
  const [experienceMonths, setExperienceMonths] = useState(0)
  const [aboutSummary, setAboutSummary] = useState('')
  const [resumeFile, setResumeFile] = useState('')
  const [isConfirmPanleOpen, setIsConfirmPanelOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const { user, setUser } = useContext(UserDataContext)

  const resumePreviewHandler = (e) => {
    // console.log(e.target.files)
    setResumeFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    setExperienceMonths(user.experienceMonths)
    setExperienceYear(user.experienceYears)
    setAboutSummary(user.aboutSummary)
    setResumeFile(user.resumeFile)
    setConfirmed(false)
    setIsConfirmPanelOpen(false)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsConfirmPanelOpen(true)
  }

  const updateAbout = () => {

    axios.post(import.meta.env.VITE_API_BASE_URL + '/user/update-about', {
      // userId: user._id,
      experienceYears: experienceYear,
      experienceMonths: experienceMonths,
      aboutSummary: aboutSummary,
      resume: resumeFile
    }, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      toast.success('About updated successfully!')
      console.log(res)
    }).catch(err => {
      console.error('Error updating about:', err)
      toast.danger('Error updating dashboard')

    });
  }

  const message = ` You want to update About Me, with following details 
  
  Experience Years: ${experienceYear} \n 
  Experience Months: ${experienceMonths} \n
  About Summary: ${aboutSummary} `



  return (
    <>
      <h3 className='font-medium'>About Me</h3>
      <ToastContainer />
      {isConfirmPanleOpen && <ConfirmPopUp
        setConfirmed={setConfirmed}
        confirmed={confirmed}
        setIsConfirmPanelOpen={setIsConfirmPanelOpen}
        updateFunction={updateAbout}
        message={message} />}

      <form onSubmit={(e) => handleSubmit(e)} className='px-5 py-6 dark:bg-l-secondary bg-d-secondary/12 rounded-2xl mt-5 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

          {/* experienceYear */}
          <div className="flex flex-col gap-1">
            <label htmlFor="experienceYears" className='text-sm'>Experience Years</label>
            <input
              required
              value={experienceYear}
              onChange={(e) => setExperienceYear(e.target.value)}
              id='experienceYears'
              className='border-[0.025rem] focus:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="number"
              min={0} />
          </div>

          {/* aboutSummary */}
          <div className="flex order-1 sm:order-0 row-span-2 flex-col gap-1">
            <label htmlFor="aboutSummary" className='text-sm'>About Summary</label>
            <textarea
              required
              value={aboutSummary}
              onChange={(e) => setAboutSummary(e.target.value)}
              rows={5}
              id='aboutSummary'
              className='border-[0.025rem] resize-none focus:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />
          </div>


          {/* experienceMonths */}
          <div className="flex flex-col gap-1">
            <label htmlFor="experienceMonths" className='text-sm'>Experience Months</label>
            <input
              required
              value={experienceMonths}
              onChange={(e) => setExperienceMonths(e.target.value)}
              id='experienceMonths'
              className='border-[0.025rem] focus:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="number"
              min={0}
              max={12} />
          </div>

          {/* resumeFile */}
          <div className="flex flex-col gap-1 h-full">
            <label htmlFor="resumeFile" className='text-sm'>Resume</label>
            {/* TODO */}
            <div className="flex flex-col gap-5 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary p-3">

              {/* TODO: File Handling */}
              <input
                // required
                type='file'
                id='resumeFile'
                onChange={resumePreviewHandler}
                className='text-xs'
              />


            </div>
          </div>

        </div>

        <button
          type='submit'
          className='mt-5 bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary w-full sm:w-1/2 px-5 py-3 rounded-md font-medium cursor-pointer'>
          Update
        </button>
      </form>
    </>
  )
}

export default About