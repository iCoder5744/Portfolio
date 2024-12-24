// React Icons
import { WiDayCloudy } from "react-icons/wi";
import { IoMdCloudyNight } from "react-icons/io";

const Navbar = () => {
  return (
    // Navbar
    <div className="flex w-full justify-between items-center px-4 sm:px-10 py-3 bg-gray-100 shadow-lg">
      {/* Mode Toggle */}
      <div className="flex space-x-4 px-3 py-1 bg-gray-200 rounded-3xl shadow-inner">
        <button className="px-2 py-2 bg-gray-100 rounded-full text-black">
          <WiDayCloudy />
        </button>
        <button className="px-2 py-2 bg-gray-100 rounded-full text-black">
          <IoMdCloudyNight />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex list-none text-gray-900 font-bold space-x-5">
        <li className="border border-gray-500 hover:text-gray-300 shadow-inner px-4 py-1 rounded-full">
          <a href="#home" className="text-gray-500 hover:text-gray-700">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
