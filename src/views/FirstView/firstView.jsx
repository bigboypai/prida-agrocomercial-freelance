/* eslint-disable react/prop-types */
import { useState } from 'react'

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

import './firstview.css'

const FirstView = () => {
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

export default FirstView