import React, { useContext, useEffect } from 'react'
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import axios from 'axios'
import { UserDataContext } from './context/UserContext'
import About from './Components/about/About'
import Skills from './Components/skills/Skills'

const App = () => {
  const { user, setUser } = useContext(UserDataContext)

  useEffect(() => {
    const GetUserData = async () => {
      console.log(import.meta.env.VITE_API_BASE_URL + '/user')
      await axios.get(import.meta.env.VITE_API_BASE_URL + '/user')
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user[0])
            console.log('User data fetched successfully:', res.data.user[0])
          } else {
            console.log('Error fetching user data:', res.status)
          }
        })
    }
    GetUserData()
  }, [])

  return (
    <div className='bg-d-primary text-l-primary dark:bg-l-primary dark:text-d-primary '>
      <Header />

      <main className='max-w-[65rem] mx-auto '>
        <Home />
        <About />
        <Skills />

      </main>

    </div>
  )
}

export default App