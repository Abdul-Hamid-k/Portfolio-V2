import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import SideMenu from './SideMenu'

const AdminPanel = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false)
  // console.log(isSidemenuOpen)

  return (
    <div className='bg-d-primary text-l-primary dark:bg-black dark:text-d-primary min-h-screen'>
      <Header
        isSidemenuOpen={isSidemenuOpen}
        setIsSidemenuOpen={setIsSidemenuOpen} />

      <div className="flex pt-[4.35rem] max-w-[75rem] mx-auto" >
        <SideMenu
          isSidemenuOpen={isSidemenuOpen}
          setIsSidemenuOpen={setIsSidemenuOpen} />
        <div className="sm:ml-[10rem] md:ml-[14rem] w-full m-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel