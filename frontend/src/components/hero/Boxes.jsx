
import { boxitem } from "./boxItem";

const Boxes = () => {
  return (
    <div className="absolute top-[90vh] w-[90vw] h-auto bg-white rounded-lg z-10 border hidden md:block">
      <div className="grid grid-cols-6 gap-5">
        {boxitem.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col  items-center p-5 hover:bg-[#280659] group transition-all ease-in-out  cursor-pointer hover:scale-110 rounded-lg"
          >
            {item.icon}
            <p className="font-tanha text-sm md:text-base whitespace-nowrap mt-5 group-hover:text-white">
              {item.title}
            </p>
            <span className="rounded-lg py-1 px-1 text-sm md:text-base md:px-4 bg-gray-300 group-hover:bg-[#ae2d68] text-black group-hover:text-white mt-2">
              {item.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
