import '../styles/navbar.css'
import menu from '../../public/menu.svg'
// import Logo from '../assets/logo.jpeg'

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isOpen, openNavBar }) => {

    return (
        <div className="navbar-container">
            <div className="navbar-logo"> PRIDA </div>
            <div className='fake-div-for-grid'></div>
            <div className="navbar-links">
                <li><Link to="quienessomos">Quienes somos</Link></li>
                <li><Link to="misionyvision">Misión/visión</Link></li>
                <li><Link to="contacto">Contactanos</Link></li>
            </div>
            <img onClick={() => openNavBar()} className='navbar-menu' src={menu}/>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <a>Quienes somos</a>
                    <a>Misión y visión</a>
                    <a>Contactanos</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
