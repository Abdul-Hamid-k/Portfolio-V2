import React, { useState } from 'react'

const About = () => {
  const [experienceYear, setExperienceYear] = useState(0)
  const [experienceMonths, setExperienceMonths] = useState(0)
  const [aboutSummary, setAboutSummary] = useState('')
  const [resumeFile, setResumeFile] = useState('')

  const resumePreviewHandler = (e) => {
    // console.log(e.target.files)
    setResumeFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <>
      <h3 className='font-medium'>About Me</h3>
      <form className='px-5 py-6 dark:bg-l-secondary bg-d-secondary/12 rounded-2xl mt-5 '>
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
            <label htmlFor="experienceYears" className='text-sm'>Experience Months</label>
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
            <label htmlFor="image" className='text-sm'>Resume</label>
            {/* TODO */}
            <div className="flex flex-col gap-5 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary p-3">

              <input
                required
                type='file'
                id='resumeFile'
                onChange={resumePreviewHandler}
                className='text-xs'
              />


            </div>
          </div>

        </div>

        <button className='mt-5 bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary w-full sm:w-1/2 px-5 py-3 rounded-md font-medium cursor-pointer'>
          Update
        </button>
      </form>
    </>
  )
}

export default About