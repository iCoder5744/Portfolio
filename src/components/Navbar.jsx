import React from "react";
import { IoMdCloudyNight } from "react-icons/io";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div className={`flex w-full justify-between items-center px-4 sm:px-10 py-3 ${theme === "light" ? "bg-white text-black border-b border-gray-300" : "bg-gray-700 text-white border-b border-gray-600"} shadow-2xl `}>
      {/* Mode Toggle */}
      <div
        className={` px-2 py-1 flex text-2xl rounded-full shadow-inner ${theme === "light" ? "text-black border-2 border-gray-800" : "text-white border-2 border-gray-200"
          }`}
      >
        <button onClick={toggleTheme}>
          <IoMdCloudyNight />
        </button>
      </div>


      {/* Navigation Links */}
      <ul className=" w-40 ml-6">
        <li className="list-none  flex justify-end">
          <a
            href="https://www.linkedin.com/in/shivam-yadav-b97159320/"
            download="Shivam_Yadav_Resume.pdf"
            className={` font-light tracking-wider  ${theme === "light"
                ? "text-black hover:text-gray-500 "
                : "text-gray-200 hover:text-white "
              }`}
          >
            Linkedin
          </a>

          <a
            href="https://github.com/iCoder5744"
            download="Shivam_Yadav_Resume.pdf"
            className={`px-2 font-light tracking-widest ${theme === "light"
                ? "text-black hover:text-gray-500 "
                : "text-gray-200 hover:text-white "
              }`}
          >
            GitHub
          </a>

        </li>
      </ul>

        {/* Resume Button  */}

          <button className="list-none font-medium">
          <a
            href="/Resume.pdf"
            download="Shivam_Yadav_Resume.pdf"
            className={`px-4 py-2 rounded-full shadow-inner font-medium  ${theme === "light"
                ? "text-black hover:text-gray-500 border-2 border-gray-800  hover:border-gray-500"
                : "text-gray-200 hover:text-white border-2 border-gray-200  hover:border-white"
              }`}
          >
            Resume
          </a>
          </button>
    </div>
  );
};

export default Navbar;
