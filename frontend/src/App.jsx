import React from 'react'
import Header from './Components/header/Header'
import Home from './Components/home/Home'

const App = () => {
  return (
    <div className='bg-d-primary text-l-primary dark:bg-l-primary dark:text-d-primary '>
      <Header />

      <main className='max-w-[65rem] mx-auto '>
        <Home />

      </main>

    </div>
  )
}

export default App