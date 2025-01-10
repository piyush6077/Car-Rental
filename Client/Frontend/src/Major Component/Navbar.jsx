import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-[100%] h-[5rem] flex justify-center fixed z-50 bg-black overflow-x-hidden">
        <div className="flex h-[100%] w-[92%] items-center justify-between">
          <Link to="/" className="text-2xl text-white font-bold">RENCR-AT</Link>
          <ul className="flex gap-6 text-white items-center">
            <Link to="/">Home</Link>
            <Link to="">Book car</Link>
            <Link to="">About</Link>
            <Link to="">Our Policy </Link>

            <Link to="/login"><button className="w-[120px] py-2 border rounded-3xl">Login</button></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
