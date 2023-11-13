import "@splidejs/splide/css";
import { FaHeart, FaStar } from "react-icons/fa";
import { boxitem } from "./SliderItems";
const Recommand = () => {
  
  const renderStars = (starCount) => {
    const blackStars = 5 - starCount;
    const stars = [];

    for (let i = 0; i < blackStars; i++) {
      stars.push(<FaStar key={i} className="text-white" />);
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(<FaStar key={i + blackStars} className="text-yellow-300 " />);
    }

    return stars;
  };
  return (
    <>
      <div className="mt-10 font-vazir text-white">
        <h2 className="font-vazir text-black text-center md:text-start text-4xl font-bold m-2">
          پیشنهاد ما برای تو
        </h2>
        <div className="mt-7 grid md:grid-cols-4 grid-cols-1 gap-6">
          {boxitem.map((item) => (
            <div
              key={item.id}
              dir="rtl"
              className="border-2 bg-[#280659] object-cover overflow-hidden text-start flex flex-col cursor-pointer border-black rounded-lg gap-4 h-auto hover:scale-x-105"
            >
              <img
                className="w-full h-40 overflow-hidden"
                src={item.img}
                alt=""
              />
              <h2 className="px-2 text-xl text-center font-semibold">
                {item.title}
              </h2>
              <p className="px-2 font-vazir text-lg text-justify">{item.desc}</p>
              <span className="px-2 flex justify-between">
                {item.price} تومان
                <span className="flex items-center">
                  {renderStars(item.star)}
                </span>
              </span>
              <div className="flex items-center justify-between m-2">
                <button className="px-4 py-1 text-center  rounded-lg text-white bg-[#f54952]">
                  خرید
                </button>
                <FaHeart
                  className={` text-center  rounded-lg  w-5 h-5 ${
                    item.heart ? "text-red-500" : "text-صاهفث"
                  } `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommand;
