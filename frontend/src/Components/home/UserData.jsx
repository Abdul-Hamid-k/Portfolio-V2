import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserContext'

const UserData = () => {
  const { user } = useContext(UserDataContext)
  return (
    <>
      <div className="order-2 md:order-0 col-start-2 col-span-11 md:col-span-6">
        <h2 className='text-2xl md:text-4xl mb-2 font-medium'>{user.name} 👋</h2>

        <div className="flex">
          <div className="h-[0.125rem] mt-3 mr-2 bg-l-primary dark:bg-d-primary w-20 "></div>
          <h3 className='text-lg'>{user.summaryHeading}</h3>
        </div>

        <h3 className='mt-3 text-sm text-l-secondary dark:text-d-secondary'>{user.summaryContent}</h3>

        {/* TODO - link button */}
        <button
          className='bg-l-primary dark:bg-d-primary text-d-primary dark:text-l-primary font-medium px-4 py-3 rounded-xl text-lg mt-7 items-center'>Say Hello
          <div className="inline-block ml-2">
            <i className="ri-send-plane-fill text-xl"></i>
          </div>
        </button>
      </div>
    </>
  )
}

export default UserData