import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'


const Dashboard = () => {
  const [name, setName] = useState("")
  const [userImg, setUserImg] = useState(null)
  const [instaURL, setInstaURL] = useState('')
  const [linkedInURL, setLinkedInURL] = useState('')
  const [githubURL, setGithubURL] = useState('')
  const [heading, setHeading] = useState('')
  const [content, setcontent] = useState('')
  const [imgName, setimgName] = useState('')

  const { user, setUser } = useContext(UserDataContext)

  const imagePreviewHandler = (e) => {
    console.log(e.target.files)
    setUserImg(URL.createObjectURL(e.target.files[0]));
    setimgName(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userdataUpdateTo = {
      userId: user._id,
      name: name,
      image: imgName,
      instaURL: instaURL,
      linkedInURL: linkedInURL,
      githubURL: githubURL,
      homeHeading: heading,
      homeContent: content
    }

    // console.log("UserDataUpdateTo ", userdataUpdateTo)
    axios.post(import.meta.env.VITE_API_BASE_URL + '/user/update-dashboard', userdataUpdateTo, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res)
      toast.success('Dashboard updated successfully!')
    }).catch(err => {
      console.error('Error updating dashboard:', err)
      toast.danger('Error updating dashboard')
    })

  }

  // console.log(user)

  useEffect(() => {
    setName(user.name)
    setUserImg('')
    setInstaURL(user?.instaURL)
    setLinkedInURL(user?.linkedInURL)
    setGithubURL(user?.githubURL)
    setHeading(user?.homeHeading)
    setcontent(user?.homeContent)
  }, [user])


  return (
    <>
      <h3 className='font-medium'>Dashboard</h3>
      <ToastContainer />
      <form onSubmit={handleSubmit} className='px-5 py-6 dark:bg-l-secondary bg-d-secondary/12 rounded-2xl mt-5 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {/* image */}
          <div className="flex flex-col gap-1 row-span-2">
            <label htmlFor="image" className='text-sm'>User Image</label>

            <div className="flex flex-col h-full justify-end items-center sm:items-start md:items-center gap-5 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary p-3">
              {/* TODO: Img handling */}
              <img className='w-full sm:w-1/2'
                src={userImg} alt="User Image" />

              <input
                // required
                accept='image/*'
                type='file'
                id='image'
                onChange={imagePreviewHandler}
                className='text-xs w-fit text-center'
              />


            </div>
          </div>

          {/* name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className='text-sm'>Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              className='border-[0.025rem] focus:border-[0.125rem] text-sm outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />
          </div>

          {/* heading */}
          <div className="flex order-1 flex-col gap-1">
            <label htmlFor="heading" className='text-sm'>Heading</label>
            <textarea
              required
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              rows={5}
              id='heading'
              className='border-[0.025rem] text-sm resize-none focus:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />
          </div>

          {/* content */}
          <div className="flex flex-col order-1 gap-1">
            <label htmlFor="content" className='text-sm'>Content</label>
            <textarea
              required
              rows={5}
              value={content}
              onChange={(e) => setcontent(e.target.value)}
              id='content'
              className='border-[0.025rem] h-full resize-none focus:border-[0.125rem] outline-none mt-1 border-d-secondary text-sm rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
              type="text" />
          </div>

          {/* insta link */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="instaURL" className='text-sm'>Insta URL</label>
            <div className="flex items-center gap-1 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary px-3">
              <i className="ri-instagram-line text-2xl"></i>
              <input
                required
                id='instaURL'
                value={instaURL}
                onChange={(e) => setInstaURL(e.target.value)}
                className={
                  ` grow outline-none text-sm py-2`
                }
                type="text" />
            </div>
          </div>

          {/* linkedin link */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="linkedinURL" className='text-sm'>Linedin URL</label>
            <div className="flex items-center gap-1 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary px-3">
              <i className="ri-linkedin-box-fill text-2xl"></i>
              <input
                required
                id='linkedinURL'
                value={linkedInURL}
                onChange={(e) => setLinkedInURL(e.target.value)}
                className={
                  ` grow outline-none text-sm py-2  `
                }
                type="text" />
            </div>
          </div>

          {/* github link */}
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="githubURL" className='text-sm'>Github URL</label>
            <div className="flex items-center gap-1 border-[0.025rem] focus-within:border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md focus-within:border-l-primary focus-within:dark:border-d-primary px-3">
              <i className="ri-github-fill text-2xl"></i>
              <input
                required
                id='githubURL'
                value={githubURL}
                onChange={(e) => setGithubURL(e.target.value)}
                className={
                  ` grow outline-none text-sm py-2  `
                }
                type="text" />
            </div>
          </div>

        </div>

        <button
          className='mt-5 bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary w-full sm:w-1/2 px-5 py-3 rounded-md font-medium cursor-pointer'>
          Update
        </button>
      </form>
    </>
  )
}

export default Dashboard