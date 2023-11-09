import Boxes from "./Boxes";
import style from "./hero.module.css";
const Hero = () => {
  return (
    <div
      className={`${style.bg} relative flex flex-col items-center justify-center mb-10 md:mb-32 `}
    >
      <h2
        className={` text-white font-bold text-xl md:text-7xl ${style.wraper}`}
      >
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
      <p
        className={`text-white mt-10 font-tanha text-base md:text-5xl ${style.text}`}
      >
        آخرین و جدید ترین بازی ها را از ما بخواهید
      </p>
      <Boxes />
    </div>
  );
};

export default Hero;
