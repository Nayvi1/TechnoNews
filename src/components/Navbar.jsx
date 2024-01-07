import useMobile from "../hooks/useMobile";

function Navbar() {
  const isMobile = useMobile();
  return (
    <nav className="flex justify-between pb-3 pt-3 sm:pb-5 sm:pt-5 ">
      {isMobile ? (
        <>
          <img src="./svg/hamMenu.svg" className="cursor-pointer " alt="" />
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

      <img src="./svg/User.svg" className="cursor-pointer" alt="" />
      {/* <NavItemsMobile /> */}
    </nav>
  );
}

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

function NavItemsMobile() {
  return (
    <>
      <div className="opacity-70 bg-"></div>
    </>
  );
}

export default Navbar;
