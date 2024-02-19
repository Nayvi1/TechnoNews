import { forwardRef, useEffect, useRef, useState } from "react";
import useMobile from "../hooks/useMobile";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navDiv = useRef();
  function handleClick() {
    setIsNavbarOpen(true);
    navDiv.current.style.top = "12px";
  }
  const isMobile = useMobile();
  return (
    <nav className="flex justify-between pb-3 pt-3 sm:pb-5 sm:pt-5 ">
      {isMobile ? (
        <>
          <NavItemsMobile
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
            ref={navDiv}
          />
          <img
            onClick={handleClick}
            src="./svg/hamMenu.svg"
            className="cursor-pointer "
            alt=""
          />
          <div className="flex items-center">
            <img src="./svg/logo.svg" alt="" />
            <span className="text-offWhite text-lg">Techno News</span>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <img src="./svg/logo.svg" alt="" />
            <span className="text-offWhite text-lg">Techno News</span>
          </div>
          <NavItems />
        </>
      )}
      <Link to={"manageAccount"}>
        <img src="./svg/User.svg" className="cursor-pointer" alt="" />
      </Link>
      {/* <NavItemsMobile /> */}
    </nav>
  );
}
const NavItemsMobile = forwardRef(function NavItemsMobile(
  { isNavbarOpen, setIsNavbarOpen },
  ref
) {
  const y = useRef(0);

  const handler = useRef();

  useEffect(() => {
    if (!ref.current) return;
    let mousedown = false;

    function handleMouseDown(e) {
      mousedown = true;
      y.current = e.clientY;
    }
    function handleMouseUp() {
      if (!ref.current) return;

      mousedown = false;
      if (ref.current.getBoundingClientRect().top >= -220) {
        ref.current.style.transition = "top 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        ref.current.style.top = 12 + "px";
        mousedown = false;
        setTimeout(() => {
          ref.current.style.transition =
            "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        }, 100);
      } else {
        setIsNavbarOpen(false);
      }
    }
    function handleMouseMove(e) {
      if (!ref.current) return;

      if (mousedown && ref.current.getBoundingClientRect().top >= 2) {
        ref.current.style.transition = "top 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        ref.current.style.top = 12 + "px";
        mousedown = false;
        setTimeout(() => {
          ref.current.style.transition =
            "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        }, 100);
      }
      if (mousedown) {
        const pos = y.current - e.clientY;
        y.current = e.clientY;
        ref.current.style.top = ref.current.offsetTop - pos + "px";
      }
    }

    function handleMouseOut() {
      if (!ref.current) return;

      mousedown = false;
      if (ref.current.getBoundingClientRect().top >= -50) {
        ref.current.style.transition = "top 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        ref.current.style.top = 12 + "px";
        mousedown = false;
        setTimeout(() => {
          ref.current.style.transition =
            "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)";
        }, 100);
      }
    }

    handler.current.addEventListener("mousedown", handleMouseDown);
    handler.current.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseOut);
    window.addEventListener("mousemove", handleMouseMove);
    // handler.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (!handler.current) return;
      handler.current.removeEventListener("mousedown", handleMouseDown);
      handler.current.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseOut);
      window.removeEventListener("mousemove", handleMouseMove);
      // handler.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref, setIsNavbarOpen]);

  function handleClick() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      {isNavbarOpen ? (
        <div
          onClick={handleClick}
          className="opacity-70 w-[100vw] h-full absolute z-[99] bg-black left-0 top-0"
        ></div>
      ) : null}
      <div
        ref={ref}
        className={`bg-semiGray absolute flex transition-transform duration-200 flex-col gap-4 [&_p]:text-sm ${
          isNavbarOpen ? "-translate-y-3" : "-translate-y-[430px]"
        } left-0 w-full z-[100] px-6 pt-6`}
      >
        <div className="flex">
          <input
            placeholder="Search Here..."
            type="text"
            className="w-full h-6 placeholder:text-[#7e7e83] text-[#cdcdd4] bg-[#2e3233] text-sm rounded-l-2xl outline-none pl-6"
          />
          <div className="bg-[#2e3233] w-10 cursor-pointer flex items-center justify-center rounded-r-2xl">
            <img src="./svg/search.svg" alt="" className="" />
          </div>
        </div>
        <div className="border-y border-grayFr flex gap-2 py-3">
          <p>All Blogs</p>
          <img src="./svg/Lines.svg" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Tech</p>
            <img src="./svg/left.svg" alt="" className="rotate-180" />
          </div>
          <p>News</p>
          <p>Videos</p>
          <div className="flex justify-between">
            <p>Techo News</p>
            <img src="./svg/left.svg" alt="" className="rotate-180" />
          </div>
        </div>
        <hr className="border-grayFr" />
        <div>
          <div className="flex justify-between">
            <p>Theme</p>
            <img src="./svg/left.svg" alt="" className="rotate-180" />
          </div>
          <div className="[&_p]:!text-xs flex justify-end gap-3 mt-2">
            <div className="w-24 h-8 border-grayFr border rounded-2xl flex justify-evenly items-center">
              <p>Dark</p>
              <img src="./svg/moon.svg" alt="" />
            </div>
            <div className="w-24 h-8 border-grayFr border rounded-2xl flex justify-evenly items-center">
              <p>Default</p>
              <img src="./svg/halfCircle.svg" alt="" />
            </div>
            <div className="w-24 h-8 border-grayFr border rounded-2xl flex justify-evenly items-center">
              <p>Light</p>
              <img src="./svg/sun.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          // onMouseUp={handleMouseUp}
          // onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          ref={handler}
          className="flex items-center justify-center mt-2 h-9"
        >
          <div className="w-20 h-1 bg-offWhite rounded-sm"></div>
        </div>
      </div>
    </>
  );
});

function NavItems() {
  return (
    <>
      <ul className="flex [&_a]:font-p-extraLight gap-3 [&>li]:pr-2 [&>li]:border-r-[1px] [&>li]:border-r-grayFr">
        <li>
          <a href="#">Contact</a>
        </li>
        <li className="group relative">
          <a href="#" className="flex items-center gap-2 ">
            Blog
            <span>
              <img src="./svg/polygon.svg" className="w-3" alt="" />
            </span>
          </a>
          <ul className="absolute group-hover:visible flex opacity-0 group-hover:opacity-100 group-hover:top-full transition-[top_opacity] top-10 invisible -left-[50%] flex-col gap-5 border-[1px] border-lighter px-9 py-5 rounded-2xl">
            <li>
              <a href="#">Hadi</a>
            </li>
            <li>
              <a href="#">Hadi</a>
            </li>
            <li>
              <a href="#">Hadi</a>
            </li>
            <li>
              <a href="#">Hadi</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="!border-r-0">
          <a href="#">Home</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
