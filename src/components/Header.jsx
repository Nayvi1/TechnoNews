import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 grid-rows-2">
        <h1 className="self-center ">What is our job?</h1>
        <img
          className="row-span-2 self-center"
          src="./img/headerImg.png"
          alt=""
        />
        <p className="text-xs font-p-extraLight">
          Compare the price and specifications of tens of thousands of products
          and find the cheapest seller
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <h2 className="text-sm border-l-[3px] border-l-kongFoPanda pl-1">
          Shop with your eyes open
        </h2>
        <p className="text-xs font-p-extraLight">
          techno tech guides you to make a better choice and buy cheaper
        </p>
      </div>
      <SwiperContainer />
      <SwiperContainer />
      <button className="w-full p-[10px] bg-semiGray rounded-full mt-4 font-p-semiBold text-sm flex justify-around">
        <span>open the hardware tab</span>
        <img src="./svg/arrow.svg" alt="" />
      </button>
    </header>
  );
}

function SwiperContainer() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="mySwiper [&_img]:w-8 mt-4 [&_span]:text-[10px] [&_span]:font-p-extraLight [&_.swiper-slide]:w-16 [&_.swiper-slide]:flex [&_.swiper-slide]:flex-col [&_.swiper-slide]:items-center"
    >
      <SwiperSlide>
        <img src="./svg/computer.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/hdd.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/headset.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/server.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/laptop.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/mouse.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/cable.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/computer.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./svg/server.svg" alt="" />
        <span>computer</span>
      </SwiperSlide>
    </Swiper>
  );
}

export default Header;
