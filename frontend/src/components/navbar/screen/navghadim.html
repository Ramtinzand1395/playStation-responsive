import { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaUser
} from "react-icons/fa";
import logo from "../../../assets/photo1699421383 copy.png";
import style from "./menuStyle.module.css";
import { megabtn, navbarLinks, secondmegabtn } from "../navbarData";

const Navbar = () => {
  const [Opencn, setOpencn] = useState(false);
  const [navState, setNavState] = useState(false);

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
          ? " bg-black text-white bg-opacity-70  fixed "
          : " text-white absolute z-10 ]"
      } items-center z-30 w-full h-[15vh] flex justify-around top-0 left-0 `}
    >
      {/**top-nav */}

      {/**logo */}
      <div className="items-center flex justify-end ">
        <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />
        <h2 className={`text-white font-tanha  mx-5`}>گیم شارک</h2>
      </div>
      {/**logo-end */}

      {/* searchbox */}
      <div className="items-center flex justify-end mx-10">
        <div className="mx-10 col-span-2">
          {navbarLinks.map((item) => (
            <button
              className={`font-vazir 
                 hover:border-b-2 border-red-600 py-2 text-base
                 my-2 mx-5 ${navState ? "text-white " : "text-white "}  ${
                item.submenu ? style.megamenu : ""
              }`}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
          <div
            className={`grid grid-cols-3 bg-opacity-80 py-2 pr-5 bg-black ${style.megaitem}`}
          >
            {/**first */}
            <div className="border-l-2 border-white flex flex-col items-start">
              {megabtn.map((btn) => (
                <button
                  key={btn.id}
                  onMouseEnter={() => setOpencn(true)}
                  onMouseLeave={() => setOpencn(false)}
                  className={`m-2 rounded-lg text-base text-white font-vazir hover:border-b-2 py-1 border-blue-600 px-4 `}
                >
                  {btn.title}
                </button>
              ))}
            </div>
            {/**sec */}
            <div className="border-l-2 border-white flex flex-col items-start">
              {secondmegabtn.map((btn) => (
                <button
                  key={btn.id}
                  className={`m-2 rounded-lg text-base text-white font-vazir hover:border-b-2 py-1 border-blue-600 px-4 ${
                    Opencn ? "visible" : "hidden"
                  }`}
                >
                  {btn.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* searchbox-end */}

      {/**icon-btn */}
      <div className="flex items-center justify-end w-32">
        <button className="rounded-full mx-5 bg-gray-600 ">
          <FaUser className="w-8 h-8 p-2" />
        </button>
        <button className="rounded-full bg-gray-600">
          <FaShoppingBag className="w-8 h-8 p-2" />
        </button>

        {/**end-icon-btn */}
      </div>
      {/**end-top-nav */}
    </div>
  );
};

export default Navbar;
