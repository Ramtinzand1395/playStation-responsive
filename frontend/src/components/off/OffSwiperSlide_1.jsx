import React from "react";

const OffSwiperSlide_1 = ({ item }) => {
  return (
    <div className="p-3 font-tanha">
      <img src={item.image} className="rounded-lg h-[15vh] w-full" alt="" />
      <h3 className="text-base mt-2 text-center">{item.title}</h3>
      <span className="text-red-500 text-xs">{item.store}</span>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs text-white font-semibold bg-red-500 rounded-lg py-1 px-2 ">
          {item.percent} %
        </span>
        <p className="text-start font-bold text-black text-xs">
          {Math.ceil(item.price / item.percent)}تومان
        </p>
      </div>

      <div className="flex items-center justify-end">
        <p className="text-start line-through font-bold text-gray-500 text-xs">
          {item.price}
        </p>
      </div>
    </div>
  );
};

export default OffSwiperSlide_1;
