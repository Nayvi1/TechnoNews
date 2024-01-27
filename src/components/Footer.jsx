import useMobile from "../hooks/useMobile";
import IsMobile from "./IsMobile";

/* eslint-disable react/prop-types */
function Footer() {
  const isMobile = useMobile();
  return (
    <footer className="pt-14 pb-14 bg-semiBlack flex flex-col gap-16">
      <div
        className="flex sm:flex-wrap gap-4 [&_a]:text-xs [&_p]:text-xs [&_a]:font-p-extraLight [&_p]:font-p-extraLight 
[&>div]:w-[47%] lg:[&>div]:!w-1/3 lg:flex-nowrap [&>div]:gap-5 [&>div]:flex [&>div]:flex-col"
      >
        <div>
          <h4 className="sm:text-4xl sm:font-semibold">More</h4>
          <div className="flex flex-col gap-2">
            <a href="">Our App</a>
            <a href="">Our Website</a>
            <a href="">Our support</a>
          </div>
        </div>
        <div>
          <h4 className="sm:text-4xl sm:font-semibold">About</h4>
          <p>
            Stay ahead with Techno News - your source for the latest in
            technology.
          </p>
        </div>

        <IsMobile
          nonMobile={
            <div className="sm:!w-full">
              <h4 className="text-4xl font-semibold">Join Us</h4>
              <form className="flex gap-2">
                <input
                  type="text"
                  className="w-full py-3 pl-8 text-xs rounded-full outline-none bg-transparent border-lighter border-[1px] text-offWhite placeholder:text-offWhite font-p-extraLight"
                  placeholder="Your Email Address"
                />
                <button className="px-5 py-[10px] bg-black rounded-3xl">
                  Submit
                </button>
              </form>
            </div>
          }
        />
      </div>
      <div
        className={`flex items-center justify-center gap-3 ${
          isMobile ? "" : "border-t border-t-[#544D4D] pt-12 flex-col"
        }`}
      >
        <IsMobile
          mobile={
            <>
              <SocialMedia text="Instagram" logo="instagram" />
              <SocialMedia text="X (twitter)" logo="x" />
              <SocialMedia text="Youtube" logo="youtube" />
            </>
          }
          nonMobile={
            <div className="flex gap-2">
              <SocialMedia mini logo="facebookmini" />
              <SocialMedia mini logo="instagramMini" />
              <SocialMedia mini logo="telegramMini" />
              <SocialMedia mini logo="twiterMini" />
              <SocialMedia mini logo="youtubeMini" />
            </div>
          }
        />

        <IsMobile
          nonMobile={
            <h5 className="text-center">©Copyright, All rights reserved.</h5>
          }
        />
      </div>
      <IsMobile
        mobile={
          <h5 className="text-center">©Copyright, All rights reserved.</h5>
        }
      />
    </footer>
  );
}

function SocialMedia({ text = "", logo = "", mini = false }) {
  return (
    <div
      className={`${
        mini
          ? "rounded-full border border-offWhite p-1 bg-transparent"
          : "rounded-[50px] flex gap-1 p-[10px] bg-semiGray"
      } `}
    >
      <span className="text-xs font-p-extraLight">{text}</span>
      <img src={`./svg/${logo}.svg`} alt="" />
    </div>
  );
}

export default Footer;
