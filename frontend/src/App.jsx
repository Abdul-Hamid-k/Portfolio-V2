import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white text-gray-d'>
      <Header />

      <main className='bg-white dark:bg-gray-dd dark:text-white text-black'>
        <Home />
      </main>

    </div>
  )
}

export default App