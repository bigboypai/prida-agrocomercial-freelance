import '../styles/secondview.css'

const secondView = ({ viewRefs }) => {
  return (
    <div className='secondview-container' ref={viewRefs[1]}>
      <div>
        <h1> ¿Quienes somos? </h1>
      </div>
      <div>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum amet voluptatem nam ut, reiciendis quia obcaecati cum dolorum corrupti repellendus doloribus, culpa esse reprehenderit placeat! Id nulla, provident eaque vero explicabo delectus et officiis labore, ad nihil necessitatibus pariatur commodi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum.</p>
      </div>
      <div>
        <h2> PRIDA </h2>
      </div>
    </div>
  )
}

export default secondView