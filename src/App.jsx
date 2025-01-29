// import React from 'react'
import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen bg-zinc-700 overflow-x-hidden '>
      <Navbar/>
  <Hero/>
    <About/>
    <Features/>
    </main>
  )
}

export default App