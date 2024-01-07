/* eslint-disable react/prop-types */
function LinkButton({ width = "w-full" }) {
  return (
    <button
      className={`${width} hover:bg-kongFoPanda transition-colors duration-500 p-[10px] bg-semiGray rounded-full mt-4 font-p-semiBold text-sm flex justify-center`}
    >
      <span>open the hardware tab</span>
      <img src="./svg/arrow.svg" alt="" className="ml-12 " />
    </button>
  );
}
export default LinkButton;
