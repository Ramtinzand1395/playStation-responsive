import {
  PiBooksDuotone,
  PiAirplane,
  PiAirplayFill,
  PiFactoryThin,
} from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

const Boxes = () => {
  return (
    <div className="absolute  top-[90vh] w-[90vw] h-auto bg-white rounded-lg z-10 border ">
      <div className="grid grid-cols-6">
        <div className=" flex flex-col  items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <PiBooksDuotone className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <PiAirplane className="md:w-10 md:h-10 w-5 h-5 text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1  px-1 text-sm md:text-base md:px-4ray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <PiAirplayFill className="md:w-10 md:h-10 w-5 h-5 text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <PiFactoryThin className="md:w-10 md:h-10 w-5 h-5 text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <FiLogIn className="md:w-10 md:h-10 w-5 h-5 text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
        <div className=" flex flex-col items-center p-5 hover:bg-teal-500 group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg">
          <FaInfoCircle className="md:w-10 md:h-10 w-5 h-5 text-teal-500 group-hover:text-white" />
          <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">بازی ها</p>
          <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-teal-700 text-black group-hover:text-white mt-2">
            1245
          </span>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
