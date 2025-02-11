import React from 'react'
import HeroUserImg from '../HeroUserImg'
import ScrollDown from './ScrollDown'
import Social from './Social'
import UserData from './UserData'


const Home = () => {
  return (
    <div id='home' className="py-[3rem] px-3 md:py-[5rem] min-h-screen">

      <div className='grid grid-cols-12 grid-rows-2 md:grid-rows-1 gap-2 md:gap-5 items-center '>
        <Social />

        <UserData />

        <div className="col-span-11 md:col-span-5">
          <HeroUserImg />
        </div>

      </div>

      <ScrollDown />

    </div>
  )
}

export default Home