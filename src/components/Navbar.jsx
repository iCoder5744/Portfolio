import React from "react";
import { IoMdCloudyNight } from "react-icons/io";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className={`flex w-full justify-between items-center px-4 sm:px-10 py-3 ${theme === "light" ? "bg-white text-black border-b border-gray-300" : "bg-gray-700 text-white border-b border-gray-600"} shadow-2xl `}>
      {/* Mode Toggle */}
      <div
        className={`px-2 py-1 flex text-2xl rounded-full border shadow-inner ${theme === "light" ? "text-black border-gray-800" : "text-white border-gray-200"
          }`}
      >
        <button onClick={toggleTheme}>
          <IoMdCloudyNight />
        </button>
      </div>


      {/* Navigation Links */}
      <ul className="list-none font-medium">
        <li>
          <a
            href="/Resume.pdf"
            download="Shivam_Yadav_Resume.pdf"
            className={`px-4 py-2 rounded-full shadow-inner font-medium border-2 ${theme === "light"
                ? "text-black hover:text-gray-500 border-gray-800  hover:border-gray-500"
                : "text-gray-200 hover:text-white border-gray-200  hover:border-white"
              }`}
          >
            Resume
          </a>

        </li>
      </ul>
    </div>
  );
};

export default Navbar;
