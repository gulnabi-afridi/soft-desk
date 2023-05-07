import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Data } from "../../../../Data/data";

function HeroSection() {
  return (
    <div id="home" className="w-full lg:h-[calc(100vh-90px)] md:h-[50vh] sm:h-[40vh] h-[180px]">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {Data.heroData.map((slider, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Image
                src={slider.img}
                fill
                className="cover"
                alt={slider.img}
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroSection;

