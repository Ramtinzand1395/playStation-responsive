import { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./card.module.css";
import { btns, gameitem } from "./gameIthems";

const GameSlider = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);

  const handleBtnClick = (btnId) => {
    setSelectedBtn(btnId);
  };

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
  const filteredGameItems = selectedBtn
    ? gameitem.filter((item) => item.janra === btns[selectedBtn - 1].janra)
    : gameitem;

  return (
    <div className="mt-10 ">
      <h2 className="font-vazir text-center md:text-start text-4xl font-bold my-10 md:mx-10 mx-2">
        آخرین بازی ها
      </h2>
      <div className={`bg-[#280659] pb-2`}>
        {/**btns */}
        <div className="flex items-center py-2 justify-center gap-3">
          {btns.map((btn) => (
            <button
              className={`${btn.clasname} ${btn.focus} font-tanha  mt-5  focus:text-white font-medium border-2 rounded-md px-3 md:px-4 py-1 `}
              key={btn.id}
              onClick={() => handleBtnClick(btn.id)}
            >
              {btn.title}
            </button>
          ))}
        </div>
        {/**btns-end */}

        {/**cards */}
        <div className="grid grid-cols-1 md:hidden gap-3 mb-5 px-6">
          {filteredGameItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg bg-black h-[50vh] w-full `}
            >
              <div className="relative ">
                <img
                  src={item.img}
                  className={`w-full h-[20vh] overflow-hidden rounded-t-lg ${style.filter} `}
                  alt=""
                />
                <button className="bg-yellow-500 px-4 py-1 absolute right-2 font-vazir bottom-1">
                  مطالعه بیشتر
                </button>
              </div>
              <div className="text-white px-4 flex flex-col justify-around">
                <h3 className="font-vazir font-semibold text-2xl my-2">
                  {item.title}
                </h3>
                <p className="font-tanha text-lg my-2">{item.desc}</p>
                <span className="flex items-center">
                  {renderStars(item.star)}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/**cards-end */}

        {/**cards2 */}
        <div className="hidden grid-cols-4 md:grid gap-3 mb-5 px-6">
          {filteredGameItems.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-lg bg-black h-[40vh] pb-5 w-full mt-5 ${
                index === 0 ? "col-span-4" : "col-span-2"
              } relative`}
            >
              <div className="relative ">
                <img
                  src={item.img}
                  className={`w-full h-[40vh] overflow-hidden rounded-t-lg`}
                  alt=""
                />
              </div>
              <div
                className="text-white w-full h-full absolute top-0 px-4 flex flex-col justify-center "
                style={{
                  background:
                    "linear-gradient(to bottom right,rgba(255, 255, 255, 0.3) , rgba(0, 0, 0, 0.8))",
                }}
              >
                <button className="bg-[#f54952] px-4 py-1 w-32 font-vazir ">
                  مطالعه بیشتر
                </button>
                <h3 className="font-vazir font-semibold text-2xl my-2">
                  {item.title}
                </h3>
                <p className="font-tanha text-lg my-2">{item.desc}</p>
                <span className="flex items-center">
                  {renderStars(item.star)}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/**cards2-end */}
      </div>
    </div>
  );
};

export default GameSlider;
