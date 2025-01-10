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
                  <img src="{% static 'assets/search.svg' %}"  className="w-[50%] h-[50%]"  alt=""/>
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Browse and Search</h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

            <div className="w-[280px] h-[280px] bg-gray-200 rounded-lg">
              <div className="p-4 flex flex-col items-center">
                <div className="logo w-[80px] bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                  <img src="{% static 'assets/Bookcar.svg' %}"  className="w-[50%] h-[50%]"  alt=""/>
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Book a car</h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

            <div className="w-[280px] h-[280px] bg-gray-200 rounded-lg">
              <div className="p-4 flex flex-col items-center">
                <div className="logo w-[80px] bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                  <img src="{% static 'assets/smileface.svg' %}"  className="w-[50%] h-[50%]"  alt=""/>
                </div>
                <h1 className="text-xl py-1 font-bold pt-4">Enjoy your Ride </h1>
                <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
              </div>
            </div>

          </div>
        </div>
      </div>




      <div className="flex flex-col h-[800px] items-center mt-11"/>
        <div className="w-full flex flex-col items-center text-center">

          <div className="flex flex-col items-center mb-10"/>
            <hr className="h-[30px] w-[2px] bg-black"/>
            <h1 className="text-3xl font-bold mt-4">Rent from our luxary fleet </h1>
            <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ducimus.</p>
            <hr className="h-[30px] w-[2px] bg-black"/>
          </div>
          <br/>
          <br/>

          <div className="w-full h-[500px] relative flex justify-center">
              {/* <!-- Carousel wrapper --> */}
              <div className="swiper mySwiper w-full absolute top-[0%] h-full ">
                <div className="swiper-wrapper h-full ">
                  <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="{% static 'assets/car44.jpg' %}" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="../static/assets/sportcar.jpg" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Dodge challenger</p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>                  
                  </div> 
                  <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      {/* <img src="{% static 'assets/luxcar.jpg' %}" className="w-full h-full imghover" alt=""> */}
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div> <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src='../static/assets/car-img3.jpg' className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div> <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="../static/assets/car33.jpg" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div> <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="{% static 'assets/car-img3.jpg' %}" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div> <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="{% static 'assets/car-img3.jpg' %}" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div> <div className="swiper-slide relative h-full flex justify-center">
                    <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
                      <img src="../static/assets/car-1img.avif" className="w-full h-full imghover" alt=""/>
                    </div>
                    <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-100 absolute bottom-[0%] z-20">
                      <div className=" flex justify-between w-[90%] h-[70%]">
                          <div className="">
                              <p className="text-2xl mb-0 pl-0 flex font-bold justify-start">Auston martin </p>
                              <div className="flex text-md gap-4">
                                  <p><i className="ri-armchair-line"></i>  2 seats</p>
                                  <p><i className="ri-arrow-up-down-line"></i>  Auto</p>
                                  <p><i className="ri-tent-fill"></i>  2 Bags</p>
                              </div>
                          </div>

                          <div className="flex items-center gap-4">
                              <button className="button bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5"> Rent Now</button>
                              <div className="flex flex-col gap-0 ">
                                  <p className="font-bold text-xl">Rs 4500</p>
                                  <div className="text-lg flex justify-end">/ day</div>
                              </div>    
                          </div>
                      </div>
                    </div>
                    {/* <!-- <div className="w-[95%] rounded-lg h-[100px] bg-red-400 absolute bottom-[0%] z-50"></div> --> */}
                  </div>
                {/* <!-- <div className="swiper-pagination"></div> --> */}
              </div>

           </div>
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
                <img src="../static/assets/car-img6.jpeg" className="w-[100%] h-[100%] rounded-lg" alt=""/>
                <div className="text-3xl absolute text-white bottom-0 font-bold m-5">Luxary Car</div>
              </div>
              <div className="w-[320px] h-[320px] bg-yellow-400 rounded-lg relative">
                <img src="{% static 'assets/sportcar.jpg' %}" className="w-full h-full rounded-lg" alt=""/>
                <div className="text-3xl absolute text-white bottom-0 font-bold m-5">Sports Car</div>
              </div>
              <div className="w-[320px] h-[320px] bg-yellow-400 rounded-lg relative">
                <img src="../static/assets/car-img3.jpg" className="w-full h-full rounded-lg" alt=""/>
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
                    {/* <!-- <img src="{% static 'assets/search.svg' %}"  className="w-[50%] h-[50%]"  alt=""> --> */}
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">24 Hours Support</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

              <div className="w-[280px] h-[280px] bg-gray-100 rounded-lg">
                <div className="p-4 flex flex-col items-center">
                  <div className="logo w-[80px] bg-white text-5xl mt-4 h-[80px] rounded-lg flex items-center justify-center">
                    <i className="ri-award-line"></i>
                    {/* <!-- <img src="{% static 'assets/search.svg' %}"  className="w-[50%] h-[50%]"  alt=""> --> */}
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">Quality Assurance</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

              <div className="w-[280px] h-[280px] bg-gray-100 rounded-lg">
                <div className="p-4 flex flex-col items-center">
                  <div className="logo w-[80px] text-5xl bg-white mt-4 h-[80px] rounded-lg flex items-center justify-center">
                    <i className="ri-gps-line"></i>                    
                    {/* <!-- <img src="{% static 'assets/search.svg' %}"  className="w-[50%] h-[50%]"  alt=""> --> */}
                  </div>
                  <h1 className="text-xl py-1 font-bold pt-4">Gps on Car</h1>
                  <p className="text-md text-center">Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor  fugiat amet quod quis ea cupiditate explicabo ullam.</p>
                </div>
              </div>

          </div>
        </div>
      </div>

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