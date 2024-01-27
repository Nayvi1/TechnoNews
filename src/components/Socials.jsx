/* eslint-disable react/prop-types */
function Socials({
  bg = "bg-red-600",
  src = "./svg/youtubeBig.svg",
  text1 = "Technonews YouTube",
  text2 = "Subscribe us on YouTube now !",
  btn = [],
}) {
  return (
    <div className={`w-full ${bg} h-24 flex items-center justify-between px-6`}>
      <div className="flex">
        <img
          className="w-[72px] border-r pr-2 border-r-[#544D4D] h-16"
          src={src}
          alt=""
        />
        <div className="flex flex-col ml-4 [&>p]:text-lg [&>p]:font-p-extraLight">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
      {btn.length ? (
        <button className="px-3 py-1 bg-white text-red-600 font-i-medium font-black rounded-3xl">
          {btn[0]}
        </button>
      ) : null}
    </div>
  );
}
export default Socials;
