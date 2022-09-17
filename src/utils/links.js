import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
// {
//   id: 1,
//   text: "stats",
//   path: "/",
//   icon: <IoBarChartSharp />,
// },
const links = [
  {
    id: 2,
    text: "all jobs",
    path: "/",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "add_job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    id: 1,
    text: "stats",
    path: "/stats",
    icon: <IoBarChartSharp />,
  },
];

export default links;
