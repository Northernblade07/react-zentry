// import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Story from './components/Story'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <main className='relative min-h-screen w-screen bg-zinc-100 overflow-x-hidden '>
      <Navbar/>
  <Hero/>
    <About/>
    <Features/>
    <Story/>
    <Contact/>
    <Footer/>
    <Analytics />
    </main>
  )
}

export default App