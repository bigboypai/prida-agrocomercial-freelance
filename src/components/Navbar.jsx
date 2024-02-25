import '../styles/navbar.css'
import menu from '../assets/open-menu.png'

const Navbar = ({ isOpen, openNavBar, scrollIntoView }) => {

    return (
        <div className="navbar-container">
            <div className="navbar-logo"> PRIDA </div>
            <div className='fake-div-for-grid'></div>
            <div className="navbar-links">
                <li><a onClick={() => scrollIntoView(1)}>Quienes somos</a></li>
                <li><a onClick={() => scrollIntoView(2)}>Misión/visión</a></li>
                <li><a onClick={() => scrollIntoView(3)}>Contactanos</a></li>
            </div>
            <img onClick={() => openNavBar()} className='navbar-menu' src={menu}/>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-items">
                    <a onClick={() => scrollIntoView(1)}>Quienes somos</a>
                    <a onClick={() => scrollIntoView(2)}>Misión y visión</a>
                    <a onClick={() => scrollIntoView(3)}>Contactanos</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
