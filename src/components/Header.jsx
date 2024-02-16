import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/free-mode";
import useMobile from "../hooks/useMobile";
import LinkButton from "./LinkButton";
import IsMobile from "./IsMobile";
import { useEffect, useState } from "react";

function Header() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  async function fetchItems() {
    try {
      const res = await fetch("http://localhost:3000/items");

      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();

      setItems(data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);
  const isMobile = useMobile();

  return (
    <header className="sm:!px-0">
      <div className="sm:bg-[#202425] grid grid-cols-2 grid-rows-1 sm:px-12">
        <div className="flex flex-col gap-10 py-5 sm:gap-5">
          <h1 className="sm:text-2xl sm:font-semibold md:text-4xl">
            What is our job?
          </h1>
          <p className="text-xs font-p-extraLight sm:text-xl md:text-2xl">
            Compare the price and specifications of tens of thousands of
            products and find the cheapest seller
          </p>
          <IsMobile
            nonMobile={
              <div className="flex bg-[#2B2D2E] [&>img]:px-2 [&>img]:cursor-pointer h-8 rounded-md">
                <img src="./svg/search.svg" alt="" />
                <input
                  type="text"
                  placeholder="search something"
                  className="border-none bg-transparent w-full outline-none text-gray-300 text-xs"
                />
                <img src="./svg/close.svg" alt="" />
              </div>
            }
          />
        </div>
        <img
          className="row-span-2 col-start-2 row-start-1 self-center justify-self-center"
          src={isMobile ? "./img/headerImg.png" : "./img/headerImgBig.png"}
          alt=""
        />
      </div>
      <div className="sm:px-12 sm:flex items-center">
        <div className="flex flex-col gap-2 mt-8 sm:w-1/2">
          <h2 className="text-sm sm:text-base border-l-[3px] border-l-kongFoPanda pl-1">
            Shop with your eyes open
          </h2>
          <p className="text-xs sm:text-base font-p-extraLight">
            techno tech guides you to make a better choice and buy cheaper
          </p>
          <IsMobile nonMobile={<LinkButton width="w-max" to="hardware" />} />
        </div>
        <IsMobile
          nonMobile={
            <>
              <img src="./svg/arrow left.svg" alt="" />
              <SwiperContainer
                width="w-1/2"
                spaceBetween={30}
                imgWidth={"w-14"}
                items={items}
                error={error}
              />
              <img src="./svg/arrow left.svg" alt="" className="rotate-180" />
            </>
          }
        />
        <IsMobile
          mobile={
            <>
              <SwiperContainer items={items} error={error} />
              <SwiperContainer items={items} error={error} />
              <LinkButton to="hardware" />
            </>
          }
        />
      </div>
    </header>
  );
}

function SwiperContainer({
  imgWidth = "w-8",
  spaceBetween = 10,
  width = "auto",
  items = [],
  error = "",
}) {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={spaceBetween}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className={`mySwiper ${width} [&_img]:${imgWidth} mt-4 [&_span]:text-[10px] [&_span]:font-p-extraLight [&_.swiper-slide]:w-16 [&_.swiper-slide]:flex [&_.swiper-slide]:flex-col [&_.swiper-slide]:items-center`}
    >
      {error
        ? error
        : items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}

export default Header;
