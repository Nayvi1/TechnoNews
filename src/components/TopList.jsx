import BlogsSlider from "./BlogsSlider";
import ImgLink from "./ImgLink";
import Socials from "./Socials";

function TopList() {
  return (
    <div className="w-[70%]">
      <div className="grid grid-cols-2  w-full gap-9 ">
        <ImgLink className="col-span-2 row-span-1" />
        <ImgLink className="row-start-2" small />
        <ImgLink className="row-start-2" small />
      </div>

      <BlogsSlider title="Purchase guide" />
      <div className="flex flex-col gap-9 mt-9">
        <Socials btn={["Subscribe!"]} bg="bg-[#F00]" />
        <div className="flex gap-9">
          <Socials src="./svg/twitterBig.svg" bg="bg-[#06F]" />
          <Socials
            src="./svg/instagramBig.svg"
            bg="bg-[radial-gradient(61.46%_59.09%_at_36.25%_96.55%,_#FFD600_0%,_#FF6930_48.42%,_#FE3B36_73.44%,_rgba(254,_59,_54,_0.00)_100%),_radial-gradient(202.83%_136.37%_at_84.5%_113.5%,_#FF1B90_24.39%,_#F80261_43.67%,_#ED00C0_68.85%,_#C500E9_77.68%,_#7017FF_89.32%,_#7017FF_100%)]"
          />
        </div>
      </div>
    </div>
  );
}

export default TopList;
