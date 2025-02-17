import React, { useState, Suspense } from 'react'
import { Outlet } from 'react-router'
// import Header from './Header'
// import SideMenu from './SideMenu'

const Header = React.lazy(() => import('./Header.jsx'));
const SideMenu = React.lazy(() => import('./SideMenu.jsx'));

const AdminPanel = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false)
  // console.log(isSidemenuOpen)

  return (
    <div className='bg-d-primary text-l-primary dark:bg-black dark:text-d-primary min-h-screen'>
      <Suspense fallback={<div className="bg-d-primary w-full h-full text-l-primary dark:bg-black dark:text-d-primary">Loading...</div>}>
        <Header
          isSidemenuOpen={isSidemenuOpen}
          setIsSidemenuOpen={setIsSidemenuOpen} />
      </Suspense>

      <div className="flex pt-[4.35rem] max-w-[75rem] mx-auto" >
        <Suspense fallback={<div className="w-fit bg-d-primary text-l-primary dark:bg-black dark:text-d-primary ">Loading...</div>}>
          <SideMenu
            isSidemenuOpen={isSidemenuOpen}
            setIsSidemenuOpen={setIsSidemenuOpen} />
        </Suspense>
        <div className="sm:ml-[10rem] md:ml-[14rem] w-full m-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel