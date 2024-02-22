import { useState } from 'react'
import '../styles/navbar.css'
import menu from '../assets/open-menu.png'

const Navbar = ({ isOpen, openNavBar }) => {

    return (
        <div className="navbar-container">
            <div className="navbar-logo"> PRIDA </div>
            <div className="navbar-links">
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Visión</a></li>
                <li><a href="#">Contactanos</a></li>
                <li><a href="#">Misión</a></li>
            </div>
            <div className='fake-div-for-grid'></div>
            <img onClick={() => openNavBar()} className='navbar-menu' src={menu}/>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <a onClick={openNavBar} href="#">Quienes somos</a>
                    <a onClick={openNavBar} href="#">Visión</a>
                    <a onClick={openNavBar} href="#">Contactanos</a>
                    <a onClick={openNavBar} href="#">Misión</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
