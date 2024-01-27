/* eslint-disable react/prop-types */

function ImgLink({
  className = "",
  img = "./img/woman-laughing.png",
  title = "Untitled",
  small = false,
}) {
  return (
    <div
      className={`relative ${className} ${
        small ? "[&>div]:px-2 [&_h1]:px-2" : "[&>div]:px-4 [&_h1]:px-4"
      }`}
    >
      <img src={img} className="w-full" alt="" />
      <h1
        className={`${
          small ? "text-xl" : "text-5xl"
        }  absolute top-1/2 -translate-y-1/2 `}
      >
        {title}
      </h1>
      <div className="[&_img]:w-3 mb-7 flex w-full items-center mt-6 absolute bottom-0">
        <div className="[&_span]:text-[10px] w-full flex items-center justify-between [&_div]:flex [&_div]:gap-1">
          <div>
            <img src="./svg/calendar.svg" alt="" />
            <span>a day ago</span>
          </div>
          <div>
            <img src="./svg/clock.svg" alt="" />
            <span>14 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImgLink;
