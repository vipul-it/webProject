import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import wallmob1 from "../assets/img/wallmob1.png";
import wallmob2 from "../assets/img/wallmob2.png";
import wallmob3 from "../assets/img/wallmob3.png";
import wallmob4 from "../assets/img/wallmob4.png";
import wallmob5 from "../assets/img/wallmob5.png";
import wallmob6 from "../assets/img/wallmob6.png";

export default function Wall4allSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="" src={wallmob1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="" src={wallmob2} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="" src={wallmob3} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="" src={wallmob4} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img className="" src={wallmob5} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center mb-6">
            <img className="" src={wallmob6} alt="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
