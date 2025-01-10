import React from 'react'

const SIgnUp = () => {
  return (
    <div className="main w-[100vw] h-[100vh] bg-black flex justify-center items-center">
            <div className="flex w-[80%] h-[80%] rounded-lg bg-white">
                <div className="w-[50%] h-full rounded-lg">
                    <img src={car1}  className="w-full rounded-lg h-full" alt=""/>
                </div>
                <div className="w-[50%] h-full flex justify-center">
    
                    <form action="register" method="post" className="text-black max-w-md mx-auto w-[80%]">
                        {/* {%  csrf_token %} */}
                           <h1 className="text-center font-bold text-xl my-5">SignUp</h1>
                           <div className="mb-5">
                             <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                             <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                           </div>
                           <div className="mb-5">
                             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                             <input type="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                           </div>
                           <div className="mb-5">
                             <label htmlFor="cp" className="block mb-2 text-sm font-medium text-gray-900">Repeat password</label>
                             <input type="password" id="cp" name="cp" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                           </div>
                           <div className="mb-5 flex gap-8">
                                <div>
                                    <label htmlFor="fn" className="block mb-2 text-sm font-medium text-gray-900" >First name</label>
                                    <input type="text" id="FirstName" name="ln" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                                </div>
                                <div>
                                    <label htmlFor="ln" className="block mb-2 text-sm font-medium text-gray-900 ">Last name </label>
                                    <input type="password" name="ln" id="LastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                                </div>
                           </div>
                           <br/>
                           
                           {/* <!-- <div className="flex items-start mb-5">
                             <div className="flex items-center h-5">
                               <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                             </div>
                             <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                           </div> --> */}
                           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                   </form>
      
      
                </div>
            </div>
        </div>
  )
}

export default SIgnUp
