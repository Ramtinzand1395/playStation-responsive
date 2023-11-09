import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
const OffSwiperSlide_1 = ({ item }) => {
  return (
    <>
      <div className=" bg-gray-100 h-[50vh] w-full rounded-lg font-tanha">
        {/**top */}
        <div className="flex items-center justify-around mt-2">
          <FaHeart />
          <span className="text-xs text-white font-semibold bg-red-500 rounded-lg py-1 px-4 ">
            {item.percent}
          </span>
        </div>
        {/**top-end */}

        {/**img */}
        <div className="mt-2 px-4">
          <img src={item.image} className="rounded-lg" alt="" />
        </div>
        {/**img-end */}

        {/**cardIthem */}
        <div className="mt-2 px-2">
          <p className="text-center font-bold text-black text-xl">
            {item.title}
          </p>
          <div className="flex items-center justify-around mt-2">
            <p className="text-start text-black text-base">{item.price}</p>
            <p className="text-start text-red-500 text-base">{item.store}</p>
          </div>
          <button type="button" className="py-1 px-4 rounded-lg bg-green-500 mt-2 text-white">
            مشاهده
          </button>
        </div>
        {/**cardIthem-end */}
      </div>
    </>
  );
};
OffSwiperSlide_1.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    store: PropTypes.string,
    percent: PropTypes.string,
    image: PropTypes.string,
  }),
};
export default OffSwiperSlide_1;
