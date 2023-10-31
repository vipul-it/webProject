import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import fslide1 from "../assets/img/mobfslide1.png";
import fslide2 from "../assets/img/mobfslide2.png";
import fslide3 from "../assets/img/mobfslide3.png";

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
          <div className="w-[300px] h-[383px] ">
            <img className="" src={fslide1} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[383px]">
            <img className="" src={fslide2} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[397px]">
            <img className="" src={fslide3} alt="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
