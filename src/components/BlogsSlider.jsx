import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import Button from "./Button";

import "swiper/css";
import "swiper/css/free-mode";
import { useState } from "react";
/* eslint-disable react/prop-types */
function BlogsSlider({ grayBg = false, title = "Editor's suggestion" }) {
  const [onBlogTab, setOnBlogTab] = useState(true);
  return (
    <div className={`mt-8 relative ${grayBg ? "bg-semiGray pt-5 pb-5" : ""}`}>
      <h2 className="text-sm border-l-[3px] border-l-kongFoPanda pl-1 relative">
        {title}
      </h2>
      <div className="flex items-center gap-6 mt-4">
        <Button onClick={() => setOnBlogTab(true)} isActive={onBlogTab}>
          Blogs
        </Button>
        <Button onClick={() => setOnBlogTab(false)} isActive={!onBlogTab}>
          Videos
        </Button>
      </div>
      {onBlogTab ? (
        <SwiperContainer />
      ) : (
        " شیر 4 تومنی برسه(قسطی)سلام نیسان دارین؟(سمند)کیکمو خوردن😞😩😩😩😩😩😭(کروسان)هادی یه تراپی برو.لعلی؟گوشت چرخ کنکرم کراکو "
      )}
    </div>
  );
}

function SwiperContainer() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={40}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="mySwiper [&_.swiper-slide]:w-[270px] mt-4 [&_p]:mt-7 [&_p]:pl-4 [&_p]:text-[10px] 
      [&_p]:text-lg [&_p]:font-p-regular [&_.swiper-slide]:bg-grayFr"
    >
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/headset.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/keyboard.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/monitor.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/motherboard.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/phone.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/headset.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/keyboard.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/monitor.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="[&>img]:w-full [&>img]:h-[180px] rounded-lg">
        <img
          className="cursor-pointer rounded-t-lg object-cover"
          src="./img/motherboard.png"
          alt=""
        />
        <p className="cursor-pointer">computer</p>
        <div className="[&_img]:w-3 mb-7 flex justify-between items-center pl-4 mt-6 pr-4">
          <div className="[&>span]:text-[10px] flex items-center [&>img]:mr-1">
            <img src="./svg/message.svg" alt="" />
            <span className="mr-6">28</span>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <img src="./svg/threeDots.svg" className="cursor-pointer" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default BlogsSlider;
