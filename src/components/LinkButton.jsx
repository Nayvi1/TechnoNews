import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function LinkButton({
  width = "w-full",
  img = "arrow",
  text = "open the hardware tab",
  to = "",
}) {
  return (
    <NavLink className="[&.active>button]:bg-kongFoPanda" to={to}>
      <button
        className={`${width} hover:bg-kongFoPanda gap-2  duration-200 p-[10px] bg-semiGray rounded-full font-p-semiBold text-sm flex justify-center`}
      >
        <span>{text}</span>
        <img src={`/svg/${img}.svg`} alt="" />
      </button>
    </NavLink>
  );
}
export default LinkButton;
