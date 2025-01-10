import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Major Component/Login.jsx'
import Navbar from './Major Component/Navbar.jsx'
import Footer from './Major Component/Footer.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<>
      <Navbar/>
      <App/>
      <Footer/>
    </>
  },
  {
    path:"/login",
    element:<>
      <Navbar/>
      <Login/>
    </>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
