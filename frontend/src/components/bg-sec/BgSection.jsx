import style from "./bg.module.css";
import { FaHeart, FaMobile, FaShopify, FaStar } from "react-icons/fa";

const BgSection = () => {
  return (
    <div className={`${style.bg}  rounded-lg`}>
      <div
        className={`${style.h3} flex flex-col items-center justify-around mt-5`}
      >
        <div className="flex flex-col items-center justify-around">
          <h3 className="text-4xl font-vazir font-bold text-white">
            چرا گیم استور
          </h3>
          <p className="text-2xl font-vazir mt-2 text-white">
            {" "}
            باید ما را انتخاب کنید.به این دلایل
          </p>
        </div>
        <div className=" flex justify-evenly w-full">
          <div className="flex flex-col items-center">
            <FaHeart className="w-20 h-20 mb-2 bg-[#660f56] mx-4 p-5 rounded-full" />
            <p className="text-xl font-tanha text-white font-semibold">
              پرداخت سریع
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaMobile className="w-20 h-20 mb-2 bg-[#ae2d68] mx-4 p-5 rounded-full" />
            <p className="text-xl font-tanha text-white font-semibold">
              پرداخت سریع
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaShopify className="w-20 h-20 mb-2 bg-[#f54952] mx-4 p-5 rounded-full" />
            <p className="text-xl font-tanha text-white font-semibold">
              پرداخت سریع
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="w-20 h-20 mb-2 bg-[#341671] mx-4 p-5 rounded-full" />
            <p className="text-xl font-tanha text-white font-semibold">
              پرداخت سریع
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgSection;
