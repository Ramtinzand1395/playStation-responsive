import takhfif from "../../assets/discountpng.parspng.com-6 (1).png";

import OffSwiperSlide_1 from "./OffSwiperSlide_1";
import { data } from "./index";
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const Offcomponent = () => {
  return (
    <div className='w-full flex items-center h-[40vh] bg-[#280659] p-5 rounded-2xl' >
      <div className="flex items-center justify-center flex-col bg-[#280659] w-40 h-auto p-5">
        <img src={takhfif} className="" alt="" />
        <button className="bg-[#f54952] font-tanha text-white rounded-lg py-1 px-4 text-sm whitespace-nowrap">
          مشاهده همه
        </button>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#f54952",
          "--swiper-navigation-size": "30px",
        }}
        className="rounded-2xl"
        modules={[Navigation]}
        freeMode={true}
        slidesPerView={4}
        dir="rtl"
        navigation={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: "true",
          waitForTransition: "false",
          disableOnInteraction: "false",
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 8,
            spaceBetween: 2,
          },
        }}
      >
        
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <OffSwiperSlide_1 item={item} />
          </SwiperSlide>
      
        ))}
      </Swiper>
    </div>
  )
}

export default Offcomponent