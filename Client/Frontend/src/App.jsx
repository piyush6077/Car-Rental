import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from "./assets/logo-1.svg"
import logo2 from "./assets/logo-2.svg"
import logo3 from "./assets/logo-3.svg"
import logo4 from "./assets/logo-4.svg"
import logo5 from "./assets/logo-5.svg"
import logo6 from "./assets/logo-6.svg"
import search from "./assets/search.svg"
import Bookcar from "./assets/Bookcar.svg"
// import smileface from "./assets/smileface/svg"
import car44 from "./assets/car44.jpg"
import sportcar from "./assets/sportcar.jpg"
import carimg3 from "./assets/car-img3.jpg"
import car33 from "./assets/car33.jpg"
import car1img from "./assets/car-1img.avif"
import carimg6 from "./assets/car-img6.jpeg"
import CarSwiper from './Major Component/CarSwiper'
// import sportcar from "./assets/sportcar.jpg"

import "./index.css"
import Navbar from './Major Component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main">
      <div className="flex justify-center h-[680px] backgroundImg ">
        <div className="w-[92%] flex justify-center text-center relative">
          <div className="flex w-[80%] h-[90%] flex-col items-center mt-5 textdiv justify-center color-Black">
            <h1 className="text-5xl font-bold textco">Get Best offers on Rentaing <br/> Our cars</h1>
            <p className="my-4 text-lg text-gray-200">Make your journey comfortable , memorable and enjoyable with us </p>
            <a href=""><button className="w-[180px] flex justify-center bg-white rounded-lg text-xl py-2">Get Started</button></a>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[690px] absolute bg-gradient-to-b from-black to-[rgb(1,1,1)] opacity-[20%] top-0"></div>

      <div className="flex justify-center py-11">
        <div className="w-[92%] flex flex-col items-center">
          <hr className="h-[30px] w-[2px] bg-black"/>
          <div className="py-4 text-start text-xl">Rent by Brands</div>
          <hr className="h-[30px] w-[2px] bg-black mb-11"/>
          <div className="w-[92%] flex justify-between my-11 ">
            <div className="w-[4rem] h-[4rem]"><img src={logo1} className="w-[100%] h-[100%]" alt=""/></div>
            <div className="w-[4rem] h-[4rem]"><img src={logo2} className="w-[100%] h-[100%]" alt=""/></div>
            <div className="w-[4rem] h-[4rem]"><img src={logo3} className="w-[100%] h-[100%]" alt=""/></div>
            <div className="w-[4rem] h-[4rem]"><img src={logo4} className="w-[100%] h-[100%]" alt=""/></div>
            <div className="w-[4rem] h-[4rem]"><img src={logo5} className="w-[100%] h-[100%]" alt=""/></div>
            <div className="w-[4rem] h-[4rem]"><img src={logo6} className="w-[100%] h-[100%]" alt=""/></div>
          </div>
        </div>
      </div>
    
    {/* <!-- <div className="flex w-full h-[250px] items-center justify-center my-10">
        <div className="w-[92%] flex flex-col items-center">
          <div className="w-[95%] rounded-lg h-[150px] bg-red-400"></div>
        </div>
      </div> --> */}

<div className="flex h-[600px] justify-center bg-gray-100 py-11 mt-11">
        <div className="w-[92%] flex flex-col items-center ">
          <hr className="h-[30px] w-[2px] bg-black mb-5"/>
          <div className="w-full text-xl text-center mb-3">How it work</div>
          <hr className="h-[30px] w-[2px] bg-black mb-5"/>
          <div className="w-full justify-evenly flex mt-11">
            <div className="w-[280px] h-[280px] bg-gray-200 rounded-lg">
              <div className="p-4 flex flex-col items-center">
                <div className="logo w-[80px] bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                  <img src={search}  className="w-[50%] h-[50%]"  alt=""/>
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Browse and Search</h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

            <div className="w-[280px] h-[280px] bg-gray-200 rounded-lg">
              <div className="p-4 flex flex-col items-center">
                <div className="logo w-[80px] bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                  <img src={Bookcar}  className="w-[50%] h-[50%]"  alt=""/>
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Book a car</h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

            <div className="w-[280px] h-[280px] bg-gray-200 rounded-lg">
              <div className="p-4 flex flex-col items-center">
                <div className="logo w-[80px] bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                  {/* <img src={}  className="w-[50%] h-[50%]"  alt=""/> */} 
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Enjoy your Ride </h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className="flex flex-col h-[800px] items-center mt-11">
        <div className="w-full flex flex-col items-center text-center">

          <div className="flex flex-col items-center mb-10"/>
            <hr className="h-[30px] w-[2px] bg-black"/>
            <h1 className="text-3xl font-bold mt-4">Rent from our luxary fleet </h1>
            <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ducimus.</p>
            <hr className="h-[30px] w-[2px] bg-black"/>
          </div>
          <br/>
          <br/>

          <div className="w-[90%] h-[800px] relative flex justify-center">
              {/* <!-- Carousel wrapper --> */}
              <CarSwiper/>
          </div>
      </div>  
      

      <div className="flex h-[600px] bg-gray-100 justify-center items-center">
        <div className="w-[92%] flex flex-col items-center ">
          <hr className="h-[30px] w-[2px] bg-black mt-5 mb-5"/>
          <div className="w-full text-2xl text-center font-bold">Select Car Type</div>
          <div className="text-md text-gray-600 mb-5">Select car according to your need and type of body size </div>
          <hr className="h-[30px] w-[2px] bg-black mb-5"/>

          <div className="w-full justify-evenly  flex my-11">
              <div className="w-[320px] h-[320px] bg-yellow-400 rounded-lg relative">
                <img src={carimg6} className="w-[100%] h-[100%] rounded-lg" alt=""/>
                <div className="text-3xl absolute text-white bottom-0 font-bold m-5">Luxary Car</div>
              </div>
              <div className="w-[320px] h-[320px] bg-yellow-400 rounded-lg relative">
                <img src={sportcar} className="w-full h-full rounded-lg" alt=""/>
                <div className="text-3xl absolute text-white bottom-0 font-bold m-5">Sports Car</div>
              </div>
              <div className="w-[320px] h-[320px] bg-yellow-400 rounded-lg relative">
                <img src={carimg3} className="w-full h-full rounded-lg" alt=""/>
                <div className="text-3xl absolute text-white bottom-0 font-bold m-5">Familly Car </div>
              </div>
          </div>
        </div>
      </div>

      <div className="scrollbody">
        <main>
           <div className='banner'></div>
        </main>
      </div>

      <div className="flex h-[600px] justify-center items-center">
        <div className="w-[92%] flex flex-col items-center  ">
          <hr className="h-[30px] w-[2px] bg-black mb-5"/>
          <div className="w-full text-2xl text-center mb-3 font-bold">Our Premium Services</div>
          <hr className="h-[30px] w-[2px] bg-black mb-5"/>
            <div className="w-full justify-evenly flex my-11">
              <div className="w-[280px] h-[280px] bg-gray-100 rounded-lg">
                <div className="p-4 flex flex-col items-center">
                  <div className="logo w-[80px] bg-white text-5xl mt-4 h-[80px] rounded-lg flex items-center justify-center">
                    <i className="ri-restart-line"></i>                    
                    <img src={search}  className="w-[50%] h-[50%]"  alt=""/>
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">24 Hours Support</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

              <div className="w-[280px] h-[280px] bg-gray-100 rounded-lg">
                <div className="p-4 flex flex-col items-center">
                  <div className="logo w-[80px] bg-white text-5xl mt-4 h-[80px] rounded-lg flex items-center justify-center">
                    <i className="ri-award-line"></i>
                    <img src={search}  className="w-[50%] h-[50%]"  alt=""/>
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">Quality Assurance</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

              <div className="w-[280px] h-[280px] bg-gray-100 rounded-lg">
                <div className="p-4 flex flex-col items-center">
                  <div className="logo w-[80px] text-5xl bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                    <i className="ri-gps-line"></i>                    
                    <img src={search}  className="w-[50%] h-[50%]"  alt=""/>
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">Gps on Car</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

          </div>
        </div>
      </div>

      
    </div>    
  </>
  )
}

export default App
