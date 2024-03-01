import '../styles/thirdView.css'
const thirdView = ({ viewRefs }) => {
  return (
    <div className='thirdview-container' ref={viewRefs[2]}>
        <div>
          <h2> Nuestra misión </h2>
          <p> En nuestra empresa, nos comprometemos a ofrecer solidez y confianza a cada uno de nuestros clientes mediante la provisión constante de productos de alta calidad y seguridad alimentaria a lo largo de todo el año. </p>
        </div>

        <hr />

        <div>
          <h2> Nuestra visión </h2>
          <p>
          Nuestra visión es ser una empresa agrícola productiva e innovadora que expande su línea de productos más allá de las fronteras, con el objetivo de ofrecer calidad y frescura inigualables a nuestros clientes.
          </p>
        </div>
    </div>
  )
}

export default thirdView