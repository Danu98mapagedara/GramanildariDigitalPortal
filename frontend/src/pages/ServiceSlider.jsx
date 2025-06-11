import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import  serviceData from '../constants/service'

const ServiceSlider = () => {
  return (
   <div className="max-w-7xl mx-auto px-4 py-10 mb-20">
      <h2 className="text-3xl font-bold text-center mb-20 pb-4">Our Services</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="custom-swiper"
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition cursor-pointer" onClick={()=> window.location.href = `/${service.title.toLowerCase().replace(/\s+/g, '')}`}>
                  Request
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  


  )
}

export default ServiceSlider