import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)

    // setEmail('')
    // setPassword('')
  }

  return (
    <div className='min-h-screen w-full bg-d-primary dark:bg-black text-l-primary dark:text-d-primary flex justify-center items-center '>

      <form onSubmit={handleLogin} className="bg-d-primary dark:bg-l-secondary w-[90%] sm:w-[30rem] px-5 py-8 rounded-xl shadow-xl">
        <h5 className='text-2xl text-center'>Admin Panel</h5>

        <div className="flex flex-col gap-1 mt-8">
          <label className='text-sm text-l-secondary dark:text-d-secondary' htmlFor="UsernameOrEmail">Username or Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary' id='UsernameOrEmail'
            required
            type="Email" />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label className='text-sm text-l-secondary dark:text-d-secondary' htmlFor="UsernameOrEmail">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-[0.125rem] outline-none mt-1 border-d-secondary rounded-md px-3 py-2  focus:border-l-primary focus:dark:border-d-primary' id='UsernameOrEmail'
            required
            type="password" />
        </div>

        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
        <button
          type='submit'
          className='bg-l-primary dark:bg-d-secondary dark:hover:bg-d-primary duration-500 transition-all text-d-primary dark:text-l-primary w-full px-5 py-3 mt-10 rounded-lg font-medium text-xl cursor-pointer'>LOGIN</button>
      </form>

    </div>
  )
}

export default Login