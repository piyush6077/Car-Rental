import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import car44 from '../assets/car44.jpg';
import sportcar from '../assets/sportcar.jpg';
// import carimg3 from "../assets/car-img3.jpg"
import car33 from '../assets/car33.jpg';
// import car1img from '../assets/car1img.jpg';





const CarSwiper = () => {
  const cars = [
    { id: 1, img: car33, name: 'Aston Martin', price: 4500 },
    { id: 2, img: sportcar, name: 'Dodge Challenger', price: 4500 },
    { id: 3, img: car33, name: 'Luxury Car', price: 4500 },
    { id: 4, img: car33, name: 'Aston Martin', price: 4500 },
    { id: 5, img: car44, name: 'Aston Martin', price: 4500 },
  ];

  return (
    <div className="swiper-container w-full absolute top-0 h-full">
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id} className="relative h-full  flex justify-center">
            <div className="overflow-hidden w-full h-[94%] bg-red-800 rounded-2xl ">
              <img src={car.img} className="w-full h-full object-cover" alt={car.name} />
            </div>
            <div className="w-[95%] flex justify-center items-center rounded-xl h-[100px] bg-gray-200 absolute bottom-0 right-8 z-20">
              <div className="flex justify-between w-[90%] h-[70%]">
                <div>
                  <p className="text-2xl font-bold">{car.name}</p>
                  <div className="flex text-md gap-4">
                    <p><i className="ri-armchair-line"></i> 2 seats</p>
                    <p><i className="ri-arrow-up-down-line"></i> Auto</p>
                    <p><i className="ri-tent-fill"></i> 2 Bags</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-black h-[60px] text-white text-sm rounded-2xl p-2 px-5">
                    Rent Now
                  </button>
                  <div className="flex flex-col">
                    <p className="font-bold text-xl">Rs {car.price}</p>
                    <p className="text-lg text-right">/ day</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarSwiper;
