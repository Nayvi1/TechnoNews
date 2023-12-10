/* eslint-disable react/prop-types */
function Button({ children }) {
  return (
    <button className="pl-3 pr-3 pt-[2px] pb-[2px] rounded-full text-[10px] font-p-extraLight border-[#544D4D] border-[1px] bg-grayFr w-24 ">
      {children}
    </button>
  );
}

export default Button;