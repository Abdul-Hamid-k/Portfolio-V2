import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserContext'

const Social = () => {
  const { user } = useContext(UserDataContext)
  return (
    <div className="flex flex-col gap-4 row-span-1">
      <a
        href=""
        target='_blank'>
        <i className="cursor-pointer ri-instagram-line text-xl"></i>
      </a>

      <a
        href={user.linkedInURL}
        target='_blank'>
        <i className="cursor-pointer ri-linkedin-box-fill text-xl"></i>
      </a>

      <a href={user.githubURL}
        target='_blank'>
        <i className="cursor-pointer ri-github-fill text-xl"></i>
      </a>
    </div>
  )
}

export default Social