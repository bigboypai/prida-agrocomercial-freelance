import { useState } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import '../styles/firstview.css'

const firstView = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openNavBar = () => {
    setIsOpen(!isOpen)
  }

  const closeNavBar = () => {
    if (isOpen) {
      openNavBar()
    } else return
  }

  return (
    <div onClick={closeNavBar} className='firstview-container'>
        <Navbar isOpen={isOpen} openNavBar={openNavBar}/>
        <div className='hero-center'>
            <Hero />
        </div>
    </div>
  )
}

export default firstView