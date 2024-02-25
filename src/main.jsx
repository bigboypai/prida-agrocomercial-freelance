import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import FirstView from './views/firstView'
import SecondView from './views/secondView'
import ThirdView from './views/thirdView'
import FourthView from './views/fourthView'

const App = () => {
  const viewRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToView = (index) => {
    if (viewRefs[index] && viewRefs[index].current) {
      viewRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFirstView = () => {
    scrollToView(0, 'smooth');
  };

  return (
    <div>
      <FirstView scrollIntoView={scrollToView} />
      {/* <SecondView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs} />
      <ThirdView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs}/>
      <FourthView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs}/>  */}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
)
