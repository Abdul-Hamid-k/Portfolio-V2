import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserDataContext } from '../../context/UserContext'
import { useNavigate } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email, password)

    axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`,
      { email: email.toLowerCase(), password: password }).then(res => {
        if (res.status === 200) {
          console.log(res.data.user)
          setUser(res.data.user)
          localStorage.setItem('token', res.data.token)
          navigate('/admin-panel/')

        } else {
          setErrorMessage(res.data.message)
          setEmail('')
          setPassword('')
        }
      }).catch(err => {
        setErrorMessage("Invalid Credantials")
        console.log(err)
        setEmail('')
        setPassword('')
      })

  }

  return (
    // TODO: AUTH WRAPPER
    <div className='min-h-screen w-full bg-d-primary dark:bg-black text-l-primary dark:text-d-primary flex justify-center items-center '>

      <form onSubmit={handleLogin} className="bg-d-primary dark:bg-l-secondary w-[90%] sm:w-[30rem] px-5 py-8 rounded-xl shadow-xl">
        <h5 className='text-2xl text-center'>Admin Panel</h5>

        <div className="flex flex-col gap-1 mt-8">
          <label
            className='text-sm text-l-secondary dark:text-d-secondary'
            htmlFor="UsernameOrEmail">Username or Email</label>
          <input
            id="UsernameOrEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
            required
            type="Email" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label className='text-sm text-l-secondary dark:text-d-secondary' htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary'
            required
            type="password" />
        </div>

        <p className="text-red-600 text-xs mt-2">{errorMessage}</p>
        <button
          type='submit'
          className='bg-l-primary dark:bg-d-secondary dark:hover:bg-d-primary duration-500 transition-all text-d-primary dark:text-l-primary w-full px-5 py-3 mt-10 rounded-lg font-medium text-xl cursor-pointer'>LOGIN</button>
      </form>

    </div>
  )
}

export default Login