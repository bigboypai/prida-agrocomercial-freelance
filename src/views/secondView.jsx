import '../styles/secondview.css'

const secondView = ({ viewRefs }) => {
  return (
    <div className='secondview-container' ref={viewRefs[1]}>
      Quienes somos
    </div>
  )
}

export default secondView