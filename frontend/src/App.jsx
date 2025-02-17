import React, { useContext, useEffect, Suspense, lazy, useCallback } from 'react'
// import Header from './Components/header/Header'
// import Home from './Components/home/Home'
import axios from 'axios'
import { UserDataContext } from './context/UserContext'
// import About from './Components/about/About'
// import Skills from './Components/skills/Skills'
// import Services from './Components/services/Services'

const Header = React.lazy(() => import('./Components/header/Header'));
const Home = React.lazy(() => import('./Components/home/Home'));
const About = React.lazy(() => import('./Components/about/About'));
const Skills = React.lazy(() => import('./Components/skills/Skills'));
const Services = React.lazy(() => import('./Components/services/Services'));



const App = () => {
  const { user, setUser } = useContext(UserDataContext)

  // console.log(user)

  useEffect(() => {
    const GetUserData = () => {
      // console.log(import.meta.env.VITE_API_BASE_URL + '/user')
      axios.get(import.meta.env.VITE_API_BASE_URL + '/user')
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.user)
            // console.log('User data fetched successfully:', res.data.user)
          } else {
            console.log('Error fetching user data:', res.status)
          }
        }).catch(err => {
          console.log('Error fetching user :', err)
        })
    }
    GetUserData()
  }, [])

  return (
    <div className='bg-d-primary text-l-primary dark:bg-l-primary dark:text-d-primary '>
      {/* <Suspense fallback={<div className="bg-d-primary w-full h-screen flex justify-center items-center text-l-primary dark:bg-black dark:text-d-primary">Loading App...</div>}> */}
      <Header />

      <main className='max-w-[65rem] mx-auto '>

        <Home />
        <About />
        <Skills />
        <Services />

      </main>
      {/* </Suspense> */}
    </div>
  )
}

export default App