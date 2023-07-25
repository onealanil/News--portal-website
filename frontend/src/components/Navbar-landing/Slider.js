import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import HeroData from "./HeroData";
import HeroSubs from "./HeroSubs";

const Slider = () => {
  return (
    <div className="flex justify-center items-center mb-4 mt-1">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-[100%] text-sm"
      >
        {HeroData.map((val) => (
          <SwiperSlide key={val.id} >
            <HeroSubs
              imgSrc={val.src}
              altImg={val.alt}
              articleTitle={val.title}
              articleWriter={val.writer}
              snippet={val.snippet}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
