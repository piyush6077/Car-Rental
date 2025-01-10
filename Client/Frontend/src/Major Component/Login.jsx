import React from 'react'
import car1 from "../assets/car-1img.avif"

const Login = () => {
  return (
    <div className="main w-[100vw] h-[100vh] bg-black flex justify-center items-center">
        <div className="flex w-[80%] h-[80%] rounded-lg bg-white">
            <div className="w-[50%] h-full rounded-lg">
                <img src={car1}  className="w-full rounded-lg h-full" alt=""/>
            </div>
            <div className="w-[50%] h-[80%] flex justify-center items-center ">

                <form action="register" method="post" className="text-black max-w-md mx-auto w-[80%] h-[90%]">
                       <h1 className="text-center font-bold text-2xl my-8 ">Login</h1>
                       <div className='flex flex-col gap-4'>
                          <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-lg font-medium">Email / Username</label>
                            <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                          </div>
                          <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 font-medium text-gray-900 text-lg ">Your password</label>
                            <input type="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                          </div>
                          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                       </div>
               </form>
  
  
            </div>
        </div>
    </div>
  )
}

export default Login
