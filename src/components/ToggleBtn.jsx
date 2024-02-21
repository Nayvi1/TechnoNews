import { useState } from "react";

function ToggleBtn() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-14 h-6 rounded-3xl ${
        isActive
          ? "before:left-7 before:bg-offWhite bg-kongFoPanda"
          : "before:left-1  before:bg-lighter bg-grayFr"
      } before:transition-all transition-colors  before:w-6 before:h-6 before:rounded-3xl  before:absolute before:top-0`}
    ></button>
  );
}
export default ToggleBtn;
