import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../../context/UserContext'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const Skills = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [renderResult, setRenderResult] = useState([])
  const [selectedSkills, setSelectedSkills] = useState('all')

  const { user, setUser } = useContext(UserDataContext)


  useEffect(() => {
    setSearchFilter('')
    console.log(user)
    setRenderResult(user?.skills)
    console.log('setRenderResult')
  }, [user])

  const AddSkillHandler = (e) => {
    e.preventDefault()

    // axios.post(import.meta.env.VITE_API_BASE_URL + '/user/update-about', {
    //   userId: user._id,
    //   experienceYears: experienceYear,
    //   experienceMonths: experienceMonths,
    //   aboutSummary: aboutSummary,
    //   resume: resumeFile
    // }, {
    //   headers: {
    //     'authorization': 'Bearer ' + localStorage.getItem('token')
    //   }
    // }).then(res => {
    //   toast.success('About updated successfully!')
    //   console.log(res)
    // }).catch(err => {
    //   console.error('Error updating about:', err)
    //   toast.danger('Error updating dashboard')

    // });
  }

  console.log(import.meta.env.VITE_API_BASE_URL + '/user/delete-skill')

  const DeleteSkillHandler = (skillName) => {
    axios.delete(import.meta.env.VITE_API_BASE_URL + '/user/delete-skill', {
      data: { skillName: skillName },
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      if (res.status === 200) {
        setUser(res?.data?.user)
        toast.success('Skill deleted successfully!')
      }
    }).catch(err => {
      console.error('Error deleting skill:', err)
      toast.error('Error deleting skill')
    })
  }

  const handleCategories = (e) => {
    setSelectedSkills(e.target.value)
    if (e.target.value === 'all') {
      setRenderResult(user?.skills)
      setSearchFilter('')
      return
    }
    setSearchFilter('')
    setRenderResult(user?.skills.filter(skill => skill.category === e.target.value))
  }

  const handleSearch = () => {
    if (searchFilter.length < 2) {
      toast.error('Minimum 2 characters required')
      return
    }

    if (searchFilter === '') {
      setRenderResult(user?.skills)
      return
    }
    if (selectedSkills === 'all') {
      console.log(user?.skills?.filter(skill => skill.skillName.toLowerCase().includes(searchFilter.toLowerCase())))
      setRenderResult(user?.skills?.filter(skill => skill.skillName.toLowerCase().includes(searchFilter.toLowerCase())))
      return
    }
    setRenderResult(user?.skills?.filter(skill => skill.category === selectedSkills).filter(skill => skill.skillName.toLowerCase().includes(searchFilter.toLowerCase())))
    // console.log(renderResult?.filter(skill => skill.skillName.toLowerCase().includes(searchFilter.toLowerCase())))
  }

  const categories = Array.from(new Set(user?.skills?.map(skill => skill.category)))

  console.log(renderResult)

  return (
    <>
      <h3 className='font-medium'>Skills</h3>
      <ToastContainer />
      <div className="px-5 py-6 dark:bg-l-secondary bg-d-secondary/12 rounded-2xl mt-5">
        {/* Filters */}
        <>
          <h4 className='text-sm'>Filters</h4>

          <div className="flex border-[0.025rem] gap-1 overflow-hidden text-sm outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary">
            {/* categories */}
            <select onChange={handleCategories} className='hidden outline-none sm:block bg-l-secondary px-3 py-2 dark:bg-d-secondary text-white text-sm '>
              <option className='bg-l-secondary px-3 py-2 dark:bg-d-secondary outline-none text-sm' value='all'>All</option>
              {categories?.map(category => (
                <option key={category} className='bg-l-secondary px-3 py-2 dark:bg-d-secondary outline-none text-sm' value={category}>{category}</option>
              ))}
            </select>
            {/* search */}
            <input
              required
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              id='searchFilter'
              className='grow px-3 py-2 outline-none w-auto bg-transparent'
              type="text" />
            <span className='h-full my-auto text-xs cursor-pointer' onClick={() => {
              setSearchFilter('')
              setRenderResult(user?.skills)
            }}>Clear</span>
            <div
              onClick={handleSearch}
              className="bg-l-secondary dark:bg-d-secondary px-3 py-2 cursor-pointer flex justify-center items-center">
              <i className="ri-search-line text-white"></i>
            </div>
          </div>

          {/* categories */}
          <select onChange={handleCategories}
            className='sm:hidden bg-l-secondary w-full px-3 py-2 mt-4 rounded-lg dark:bg-d-secondary text-white text-sm outline-none'>
            <option className='bg-d-secondary dark:bg-l-secondary text-l-secondary dark:text-d-secondary text-sm' value='all'>All</option>
            {categories?.map(category => (
              <option key={category} className='bg-d-secondary dark:bg-l-secondary text-l-secondary dark:text-d-secondary text-sm' value={category}>{category}</option>
            ))}
          </select>

        </>

        {/* Add Skill */}
        <h4 className='text-sm mt-5 capitalize mb-4'>Add Skill</h4>
        <form onSubmit={AddSkillHandler} className=''>
          <div className="flex flex-col md:flex-row gap-3">
            {/* skillName */}
            <input
              required
              value={name}
              placeholder='Skill Name'
              onChange={(e) => setName(e.target.value)}
              id='skillName'
              className='flex-1 border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1/2 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />

            {/* category */}
            <select className='flex-1  bg-l-secondary w-full px-3 py-2 rounded-lg dark:bg-d-secondary text-white text-sm outline-none'>
              <option
                disabled
                selected
                className='  bg-l-secondary w-full px-3 py-2 dark:bg-d-secondary text-white text-sm outline-none'
              >
                Select Category
              </option>
              {categories?.map(category => (
                <option key={category}
                  className=' bg-l-secondary w-full px-3 py-2 mt-4 rounded-lg dark:bg-d-secondary text-white text-sm outline-none'
                  value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* SkillLevel */}
            <select className='flex-1  bg-l-secondary w-full px-3 py-2 rounded-lg dark:bg-d-secondary text-white text-sm outline-none'>
              <option
                disabled
                selected
                className='  bg-l-secondary w-full px-3 py-2 dark:bg-d-secondary text-white text-sm outline-none'
              >
                Select Level
              </option>
              {['basics', 'intermediate', 'advance']?.map(level => (
                <option key={level}
                  className='capitalize bg-l-secondary w-full px-3 py-2 mt-4 rounded-lg dark:bg-d-secondary text-white text-sm outline-none'
                  value={level}>
                  {level}
                </option>
              ))}
            </select>

          </div>
          <button
            className='mt-4 bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary px-5 py-2 rounded-md font-medium cursor-pointer'>
            Add Skill
          </button>

        </form>


        {/* Skills */}
        <h4 className='text-sm mt-5 capitalize mb-4'>Skills: {selectedSkills}</h4>

        <div className="flex flex-col gap-3">
          {renderResult?.map(skill => (
            <div key={skill?.skillName} className='flex border-[0.025rem] text-sm py-2 px-3 rounded-md items-center'>
              <div key={skill._id} className="grid grow grid-cols-2 sm:grid-cols-3 gap-1 ">
                <h5 className='capitalize'>{skill.skillName}</h5>
                <h5 className='capitalize'>{skill.category}</h5>
                <h5 className='capitalize'>{skill.skillLevel}</h5>

              </div>
              <div className="justify-self-end">
                <i onClick={() => DeleteSkillHandler(skill.skillName)} className="ri-delete-bin-fill cursor-pointer text-red-500 text-base"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Skills