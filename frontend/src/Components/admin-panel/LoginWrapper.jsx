import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { UserDataContext } from '../../context/UserContext'
import axios from 'axios'

const LoginWrapper = ({ children }) => {

  const token = localStorage.getItem('token')
  console.log(token)

  const [isLoading, setIsLoading] = useState(true)

  const { user, setUser } = useContext(UserDataContext)

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/user`).then(res => {
      // console.log(res)
      if (res.status === 200) {
        setUser(res.data.user)
        setIsLoading(false)
        navigate('/admin-panel/')
      }
    }).catch(err => {
      localStorage.removeItem('token')
      navigate('/admin-panel-login')
      console.error('Error fetching user data:', err)
      setUser(null)
    })
  }, [])



  return (
    <>
      {isLoading ? (
        <div className="h-screen bg-d-primary text-l-primary dark:bg-black dark:text-d-primary flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {children}
        </>
      )}
    </>
  )

}

export default LoginWrapper