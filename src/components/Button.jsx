/* eslint-disable react/prop-types */
function Button({ children, isActive = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-[2px] rounded-full text-[10px] font-p-extraLight border-[#544D4D] border-[1px] ${
        isActive ? "bg-kongFoPanda" : "bg-grayFr"
      }  w-24`}
    >
      {children}
    </button>
  );
}

export default Button;
