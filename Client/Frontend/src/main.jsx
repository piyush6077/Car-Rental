import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Major Component/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/Login",
    element:<Login/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
