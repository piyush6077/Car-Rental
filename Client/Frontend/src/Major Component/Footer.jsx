import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col h-[400px] bg-[rgb(20,20,20)] items-center text-white ">
        <div className="w-[90%] h-[70%] flex justify-between border-b">
          <div className="w-[30%]  flex flex-col">
            <div className="text-4xl font-bold pt-11">RENCR-At</div>
            <p className="mt-2 mb-0">Offering best service from the start and always will </p>
            <p>with us make our journey safer and enjoyable </p>
          </div>
          <ul className="w-[30%] flex flex-col gap-2 text-lg px-10">
            <div className="text-3xl font-bold pt-11 mb-4">Quick Links</div>
              <li>Home</li>
              <li>About</li>
              <li>Book a Car</li>
              <li>Contact</li>
          </ul>
          <div className="w-[30%] flex flex-col pt-11">
              <h1 className="text-3xl font-bold">Social Links</h1>
              <div className="flex gap-2 mt-4 text-white text-3xl">
                <i className="ri-whatsapp-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-facebook-circle-line"></i>
              </div>
              <br/>
              <br/>
          </div>
        </div>
        <div className="w-[90%]">
          <div className="py-5 text-gray-500">
            @Scence 2004 in the service . All rights are Reserved
          </div>
        </div>
    </footer>
  )
}

export default Footer
