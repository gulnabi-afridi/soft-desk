import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { Data } from "../../../../Data/data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

function Event() {
  const Router = useRouter();
  return (
    <div id="event" className=" w-full flex justify-center items-center py-8 sm:py-16  bg-white-main">
      <div className="w-full max-w-[1280px] h-full flex flex-col gap-8 justify-center items-center m-auto px-4 lg:px-[10px]">
        <p className="text-[46px] sm:text-[56px] leading-[50px] text-center font-poppins text-black-main font-semibold">
          Previous Events
        </p>
        {/* =======> First swiper */}
        <div className="w-full flex justify-center items-center mt-2">
          <Swiper
            slidesPerView={3}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {Data.FirstSlideData.map((item, index) => {
              const eventId = item.id;
              const router = `/event/${eventId}`;
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={router}
                      className="w-[430px] h-[250px] flex flex-col justify-center items-center rounded-[16px] relative"
                    >
                      <Image
                        src={item.img}
                        fill
                        alt={item.img}
                        className="rounded-[16px] overflow-hidden"
                      ></Image>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* =======> Sec swiper */}
        <div className="w-full flex justify-center items-center">
          <Swiper
            slidesPerView={3}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            loop={true}
          >
            {Data.SecSlideData.map((item, index) => {
              const eventId = item.id;
              const router = `/event/${eventId}`;
              return (
                <SwiperSlide key={index}>
                  <div className="w-full flex justify-center items-center">
                    <Link
                      href={router}
                      className="w-[430px] h-[250px] flex flex-col justify-center items-center rounded-[16px] relative"
                    >
                      <Image
                        src={item.img}
                        fill
                        alt={item.img}
                        className="rounded-[16px] overflow-hidden"
                      ></Image>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Event;

const FirstSlideData = [
  {
    id: "1",
    img: "/Assets/hero/1.jpg",
  },
  {
    id: "2",
    img: "/Assets/hero/2.jpg",
  },
  {
    id: "3",
    img: "/Assets/hero/3.jpg",
  },
  {
    id: "4",
    img: "/Assets/hero/4.jpg",
  },
  {
    id: "5",
    img: "/Assets/hero/5.jpg",
  },
];
const SecSlideData = [
  {
    id: "6",
    img: "/Assets/hero/1.jpg",
  },
  {
    id: "7",
    img: "/Assets/hero/2.jpg",
  },
  {
    id: "8",
    img: "/Assets/hero/3.jpg",
  },
  {
    id: "9",
    img: "/Assets/hero/4.jpg",
  },
  {
    id: "10",
    img: "/Assets/hero/5.jpg",
  },
];
