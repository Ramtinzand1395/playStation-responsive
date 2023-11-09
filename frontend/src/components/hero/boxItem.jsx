import {
  PiBooksDuotone,
  PiAirplane,
  PiAirplayFill,
  PiFactoryThin,
} from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
export const boxitem = [
  {
    id: "1",
    title: "بازی ها",
    number: 1024,
    icon: (
      <PiBooksDuotone className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
  {
    id: "2",
    title: "پلی استیشن 5",
    number: 25420,
    icon: (
      <PiAirplane className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
  {
    id: "3",
    title: "پلی استیشن 4",
    number: 124,
    icon: (
      <PiAirplayFill className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
  {
    id: "4",
    title: "ایکس باکس",
    number: 54123,
    icon: (
      <PiFactoryThin className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
  {
    id: "5",
    title: "مقالات",
    number: 1234432,
    icon: (
      <FiLogIn className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
  {
    id: "6",
    title: "لوازم جانبی",
    number: 74956,
    icon: (
      <FaInfoCircle className="md:w-10 md:h-10 w-5 h-5  text-teal-500 group-hover:text-white" />
    ),
  },
];
