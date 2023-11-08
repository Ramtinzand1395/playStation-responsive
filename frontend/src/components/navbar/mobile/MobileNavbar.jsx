import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../../assets/logo.jpeg";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import MobileMenuIthem from "./MobileMenuIthem";

const MobileNav = () => {
  const [navState, setNavState] = useState(false);
  const [OpenMobileMenu, setOpenMobileMenu] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <div
      className={`${
        navState
          ? " bg-black text-white bg-opacity-70 fixed "
          : " text-white absolute z-10 ]"
      }
       items-center z-30 w-full h-[10vh] flex justify-between container top-0 left-0 `}
    >
      {/**menu */}
      <div className="">
        <FiMenu
          onClick={() => setOpenMobileMenu(!OpenMobileMenu)}
          className="w-6 h-6 rounded-full"
        />
      </div>
         <MobileMenuIthem setOpenMobileMenu={setOpenMobileMenu} OpenMobileMenu={OpenMobileMenu}/>
      {/**menu-end */}

      {/**logo */}
      <div className="flex items-center">
        <h2 className={`text-white font-tanha  mx-5`}>گیم شارک</h2>
        <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />
      </div>
      {/**logo-end */}
    </div>
  );
};

export default MobileNav;
