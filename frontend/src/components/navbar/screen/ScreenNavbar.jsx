import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaCartPlus,
  FaInstagram,
  FaSearch,
  FaTelegram,
  FaTwitch
} from "react-icons/fa";
import logo from "../../../assets/logo1.png";
import { navbarLinks } from "../navbarData";
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
        navState
          ? " bg-[#422680] text-white bg-opacity-60  items-center px-20"
          : "flex-col mt-10 px-40"
      } w-full h-[15vh]  flex fixed z-40 `}
    >
      {/**icon */}
      <div className="flex items-center">
        <button className="bg-[#280659] ml-10 font-tanha text-white rounded-3xl px-8 py-1">
          ورود | ثبت نام
        </button>
        <FaInstagram
          className={`w-4 h-4 text-white mx-2 hover:text-[#341671] transition-colors ease-in-out delay-100`}
        />
        <FaTelegram className="w-4 h-4 text-white  mx-2 hover:text-[#341671] transition-colors ease-in-out delay-100" />
        <FaTwitch className="w-4 h-4 text-white  mx-2 hover:text-[#341671] transition-colors ease-in-out delay-100" />
        <FaCartPlus className="w-4 h-4 text-white  mx-2 hover:text-[#341671] transition-colors ease-in-out delay-100" />
        <FaSearch className="w-4 h-4 text-white mx-2 hover:text-[#341671] transition-colors ease-in-out delay-100" />
      </div>
      {/* icon-end */}

      {/**second */}
      <div
        className={`flex  ${navState ? " items-center" : "items-end w-full"}`}
      >
        {/**menu */}
        <div className="flex items-center relative">
          {navbarLinks.map((item) => (
            <>
              <button
                onMouseEnter={() => {
                  item.submenuO ? setOpencn(true) : null;
                }}
                onMouseLeave={() => {
                  item.submenuO ? setOpencn(false) : null;
                }}
                className={`font-vazir 
                 hover:border-b-2 border-red-600 py-2 text-base text-white mx-5 flex items-center  `}
                key={item.id}
              >
                {item.title}
                {item.submenu && <FaArrowDown className="mr-2" />}
              </button>
              <div
                onMouseEnter={() => setOpencn(true)}
                onMouseLeave={() => setOpencn(false)}
                className="bg-white absolute w-[20vw] items-start right-[5vw] top-11 flex flex-col"
              >
                {item.submenu &&
                  Opencn &&
                  item.submenu.map((subitem, index) => (
                    <>
                      <button
                        className={`font-vazir 
                   hover:border-b-2 border-red-600 py-2 text-base
                   mx-5 text-black`}
                        key={index}
                      >
                        {subitem.title}
                      </button>
                      <div className="">
                        {subitem.submenu_2.map((sub2, index) => (
                          <button
                            className={`font-vazir 
                     hover:border-b-2 border-red-600 py-2 text-base
                     mx-5 text-black`}
                            key={index}
                          >
                            {sub2.title}
                          </button>
                        ))}
                      </div>
                    </>
                  ))}
              </div>
            </>
          ))}
        </div>
        {/* menu-end */}

        {/**logo */}
        <div className={`${navState ? "mr-40" : "mr-auto"}`}>
          <img src={logo} className={` w-40 h-15`} alt="" />
        </div>
        {/* logo-end */}
      </div>
      {/**second-end */}
    </div>
  );
};

export default ScreenNavbar;
