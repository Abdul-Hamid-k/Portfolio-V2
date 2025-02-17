import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserDataContext } from '../../context/UserContext'
import axios from 'axios'

const AuthWrapper = ({ children }) => {

  const token = localStorage.getItem('token')


  const [isLoading, setIsLoading] = useState(true)

  const { user, setUser } = useContext(UserDataContext)

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    // console.log(!token)

    if (!token) {
      // console.log('/admin-login')
      navigate('/admin-panel-login')
      setIsLoading(false)
      return
    }

    const res = axios.get(import.meta.env.VITE_API_BASE_URL + '/user/token-checker', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        // console.log(res.data)

        if (res.data.expired) {
          // console.log(res.data.expired)
          localStorage.removeItem('token')
          navigate('/admin-panel-login')
        }
      })
      .catch((err) => {
        localStorage.removeItem('token')
        navigate('/admin-panel-login')
        console.error("Error Checking Token: ", err)
      })


    axios.get(`${import.meta.env.VITE_API_BASE_URL}/user`).then(res => {
      // console.log(res)
      if (res.status === 200) {
        setUser(res.data.user)
        setIsLoading(false)
      }
    }).catch(err => {
      localStorage.removeItem('token')
      navigate('/admin-panel-login')
      console.error('Error fetching user data:', err)
      setUser(null)
      setIsLoading(false)
      throw new Error('Invalid token')
    })
    return

  }, [])





  return (
    <>
      {/* {isLoading ? (
        <div className="h-screen bg-d-primary text-l-primary dark:bg-black dark:text-d-primary flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : ( */}
      <>
        {children}
      </>
      {/* )} */}
    </>
  )

}

export default AuthWrapper