import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaSearch,
  FaShoppingBag,
  FaTelegram,
  FaTwitch,
  FaUser,
} from "react-icons/fa";
import logo from "../../../assets/logo1.png";
import style from "./menuStyle.module.css";
import { megabtn, navbarLinks, secondmegabtn } from "../navbarData";

const ScreenNavbar = () => {
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
        navState ? " bg-black text-white bg-opacity-70 " : ""
      } w-full h-[15vh] items-center  fixed z-10 grid grid-cols-12 gap-5 `}
    >
      {/**btn */}
      <div className="justify-end flex col-span-2">
        <button className="bg-orange-500 text-white rounded-lg px-4 py-1">
          ورود \ ثبت نام
        </button>
      </div>
      {/**end-btn */}
      {/**menu */}
      <div className={` col-span-7`}>
        <div
          className={`${
            navState ? " flex-row items-center" : " flex-col gap-2 mt-14"
          } flex `}
        >
          {/**icon */}
          <div className="flex items-center col-span-2">
            <FaInstagram className="w-8 h-8 mx-2 hover:bg-white rounded-full text-red-500 p-1" />
            <FaTelegram className="w-8 h-8 mx-2 hover:bg-white rounded-full text-blue-500 p-1" />
            <FaTwitch className="w-8 h-8 mx-2 hover:bg-white rounded-full text-green-500 p-1" />
            <FaShoppingBag className="w-8 h-8 mx-2 hover:bg-white rounded-full text-white p-1" />
            <FaSearch className="w-8 h-8 mx-2 hover:bg-white rounded-full text-white p-1" />
          </div>
          {/* searchbox */}
          <div className="">
            <div className="col-span-2">
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
                className={`grid grid-cols-3 bg-opacity-80 py-2 pr-5 bg-black  ${
                  navState ? style.megaitemScroll : style.megaitem
                }`}
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
        </div>
      </div>
      {/**end-menu */}

      {/**logo */}
      <div className="ml-10 col-span-3 flex justify-end items-center">
        <img
          src={logo}
          className={`${navState ? " w-40 h-20" : "w-full h-full"}`}
          alt=""
        />
      </div>
      {/**logo-end */}
    </div>
  );
};

export default ScreenNavbar;
