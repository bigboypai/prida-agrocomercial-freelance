import '../styles/herosection.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <h1> TE DAMOS LA BIENVENIDA </h1>
            <p> Somos apasionados productores y distribuidores de hortalizas y verduras al por mayor. Nos comprometemos a ofrecerte la más alta calidad y frescura en cada uno de nuestros productos, garantizando su inocuidad para un consumo seguro. </p>
            <button> <Link to="/quienessomos"> Quienes somos </Link> </button>
        </div>
        <div className='hero-fake-div'></div>
    </div>
  )
}

export default Hero