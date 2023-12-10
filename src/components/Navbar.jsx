function Navbar() {
  return (
    <nav className="flex h-8 justify-between pb-1 pt-1">
      <img src="./svg/hamMenu.svg" className="cursor-pointer " alt="" />
      <div className="flex items-center">
        <img src="./svg/logo.svg" alt="" />
        <span className="text-offWhite text-lg">Techno News</span>
      </div>
      <img src="./svg/User.svg" className="cursor-pointer" alt="" />
      {/* <NavItemsMobile /> */}
    </nav>
  );
}

function NavItems() {
  return (
    <>
      <ul>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <ul>
        <li>
          <a href=""></a>
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
