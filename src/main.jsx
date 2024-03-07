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
      const options = {
        behavior: 'smooth',
      };
      // Check if the scroll action is triggered by a user click
      if ('scrollBehavior' in document.documentElement.style) {
        // Smooth scrolling is supported
        viewRefs[index].current.scrollIntoView(options);
      } else {
        // Smooth scrolling not supported, fallback to instant scrolling
        viewRefs[index].current.scrollIntoView();
      }
    }
  };

  const scrollToFirstView = () => {
    scrollToView(0, 'smooth');
  };

  return (
    <div>
      <FirstView scrollIntoView={scrollToView} />
      <SecondView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs} />
      <ThirdView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs}/>
      <FourthView scrollIntoViewcrollIntoView={scrollToView} viewRefs={viewRefs}/> 
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < App />
  </React.StrictMode>,
)
