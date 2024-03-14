/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstView from './views/FirstView/firstView'
import SecondView from './views/SecondView/SecondView'
import ThirdView from './views/ThirdView/ThirdView'
import FourthView from './views/FourthView/FourthView'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstView />,
  },
  {
    path: "/quienessomos",
    element: <SecondView />,
  },
  {
    path: "/misionyvision",
    element: <ThirdView />,
  },
  {
    path: "/contacto",
    element: <FourthView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
