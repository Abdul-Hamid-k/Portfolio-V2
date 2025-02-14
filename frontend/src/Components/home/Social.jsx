import React from 'react'

const Social = () => {
  return (
    <div className="flex flex-col gap-4 row-span-1">
      <a
        href=""
        target='_blank'>
        <i className="cursor-pointer ri-instagram-line text-xl"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/abdul-hamid-khatri/"
        target='_blank'>
        <i className="cursor-pointer ri-linkedin-box-fill text-xl"></i>
      </a>

      <a href="https://github.com/Abdul-Hamid-k"
        target='_blank'>
        <i className="cursor-pointer ri-github-fill text-xl"></i>
      </a>
    </div>
  )
}

export default Social