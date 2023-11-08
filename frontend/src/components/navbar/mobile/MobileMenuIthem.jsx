import { FaArrowDown, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { megabtn, navbarLinks } from "../navbarData";
import style from "./mobile.module.css";
import { useState } from "react";

const MobileMenuIthem = ({ OpenMobileMenu, setOpenMobileMenu }) => {
  const [OpenSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div
      className={`absolute top-0 right-0 w-screen h-screen bg-black bg-opacity-50 ${
        OpenMobileMenu ? "invisible " : "visible"
      }`}
    >
      <div
        className={` w-7/12 h-screen bg-white text-black font-tanha text-base flex flex-col items-start  p-2 ${
          OpenMobileMenu ? style.menuclose : style.menuopen
        }`}
      >
        <div className="flex items-center justify-between border-b-black border-b-2 w-full pb-2">
          {/**icons */}
          <div className="flex items-center ">
            <button className="rounded-full mx-2 bg-gray-600 ">
              <FaUser className="w-8 h-8 p-2" color="white" />
            </button>
            <button className="rounded-full bg-gray-600">
              <FaShoppingBag className="w-8 h-8 p-2" color="white" />
            </button>
          </div>
          {/**icons-end */}
          <MdClose
            className="w-5 h-5"
            onClick={() => setOpenMobileMenu(!OpenMobileMenu)}
          />
        </div>
        {/**btns */}
        <div className="">
          {navbarLinks.map((item) => (
            <div key={item.id}>
              <button
                className="mt-5 p-2 bg-red-400 rounded-lg w-full flex items-center"
                onClick={() => item.submenu && setOpenSubMenu(!OpenSubMenu)}
              >
                {item.title}
                {item.submenu && (
                  <FaArrowDown
                    className="mr-2"
                  />
                )}
              </button>
              {OpenSubMenu && item.submenu &&(
                <div className="ml-5">
                  {megabtn.map((subitem) => (
                    <button
                      className="mt-2 p-2 bg-red-400 rounded-lg w-full flex items-center"
                      key={subitem.id}
                    >
                      {subitem.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/**btns-end */}
      </div>
    </div>
  );
};

export default MobileMenuIthem;
