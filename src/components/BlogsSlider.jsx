import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import Button from "./Button";

import "swiper/css";
import "swiper/css/free-mode";

function BlogsSlider() {
  return (
    <div>
      <h2 className="text-sm border-l-[3px] border-l-kongFoPanda pl-1">
        Editor&apos;s suggestion
      </h2>
      <div className="flex items-center gap-6">
        <Button>Blogs</Button>
        <Button>Videos</Button>
      </div>
      <SwiperContainer />
    </div>
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
      className="mySwiper [&_.swiper-slide]:w-[270px] [&_img]:w-full [&_img]:h-[180px] mt-4 [&_p]:mt-8 [&_p]:text-[10px] [&_p]:font-p-extraLight [&_.swiper-slide]:bg-grayFr"
    >
      <SwiperSlide>
        <img src="./img/headset.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/keyboard.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/monitor.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/motherboard.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/phone.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/headset.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/keyboard.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/monitor.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/motherboard.png" alt="" />
        <p>computer</p>
      </SwiperSlide>
    </Swiper>
  );
}

export default BlogsSlider;
