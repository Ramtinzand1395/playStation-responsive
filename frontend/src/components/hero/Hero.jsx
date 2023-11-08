import {
  FaInstagram,
  FaTelegram,
  FaTwitch
} from "react-icons/fa";
import Boxes from "./Boxes";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <div className={`${style.bg} relative flex flex-col items-center justify-center`}>
      <div className={`absolute top-1/2 right-0 mx-5 bg-black bg-opacity-30 border-white border rounded-full items-center justify-around flex flex-col w-auto p-2 h-[20vh] md:h-[30vh] ${style.text} ${style.sociall}`}>
            <FaInstagram className="md:w-8 md:h-8 w-5 h-5 bg-white rounded-full text-red-500 p-1" />
            <FaTelegram className="md:w-8 md:h-8 w-5 h-5 bg-white rounded-full text-blue-500 p-1" />
            <FaTwitch className="md:w-8 md:h-8 w-5 h-5 bg-white rounded-full text-green-500 p-1" />
      </div>
      <h2 className={` text-white font-bold text-xl md:text-7xl ${style.wraper}`}>
        <span className="">G</span>
        <span className={` ${style.shadow}`}>G</span>
        <span className="">A</span>
        <span className={` ${style.shadow}`}>A</span>
        <span className="">M</span>
        <span className={` ${style.shadow}`}>M</span>
        <span className="">E</span>
        <span className={` ${style.shadow}`}>E</span>

        
        <span className="">S</span>
        <span className={` ${style.shadow}`}>S</span>
        <span className="">A</span>
        <span className={` ${style.shadow}`}>A</span>
        <span className="">R</span>
        <span className={` ${style.shadow}`}>R</span>
        <span className="">K</span>
        <span className={` ${style.shadow}`}>K</span>
      </h2>
      <p className={`text-white mt-10 font-tanha text-base md:text-5xl ${style.text}`}>
        آخرین و جدید ترین بازی ها را از ما بخواهید
      </p>
      <Boxes />
    </div>
  );
};

export default Hero;
