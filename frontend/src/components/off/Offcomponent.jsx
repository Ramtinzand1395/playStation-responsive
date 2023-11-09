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
    <div className="flex items-center gap-2">
      {/**slider-img */}
      <div className="flex items-center justify-center flex-col h-[60vh] bg-red-500 w-40 p-5 border-2 border-black">
        <img src={takhfif} className="" alt="" />
        <button className="bg-green-200 rounded-lg py-1 px-4 text-sm whitespace-nowrap">
          مشاهده همه
        </button>
      </div>
      {/**slider-img-end */}

      {/**slider */}
     <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "30px",
          }}
          modules={[Navigation]}
          freeMode={true}
          slidesPerView={4}
          dir="rtl"
          navigation={true}
          loop={true}
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
                            <OffSwiperSlide_1 item={item} />

            </SwiperSlide>
          ))}
        </Swiper>
      {/**slider-end */}
    </div>
  );
};

export default Offcomponent;
