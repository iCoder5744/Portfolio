import React from "react";
import { IoMdCloudyNight } from "react-icons/io";

const Navbar = ({ theme, toggleTheme }) => {
  const isLightTheme = theme === "light";

  return (
    <nav
      className={`navbar w-full flex flex-wrap justify-between items-center px-4 sm:px-10 py-3 shadow-2xl border-b ${
        isLightTheme ? "bg-white text-black border-gray-300" : "bg-gray-700 text-white border-gray-600"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`theme-toggle px-1 sm:px-2 sm:py-1 text-2xl rounded-full shadow-inner border-2 ${
          isLightTheme ? "text-gray-600 border-gray-600" : "text-white border-gray-200"
        }`}
        aria-label="Toggle Theme"
      >
        <IoMdCloudyNight />
      </button>

      {/* Navigation Links */}
      <ul className="nav-links  flex-auto flex justify-center space-x-2 md:space-x-4 pl-10 ">
        <li>
          <a
            href="https://www.linkedin.com/in/shivam-yadav-b97159320/"
            className={`nav-lin text-[14px] sm:text-[16px]  font-light md:tracking-wider ${
              isLightTheme ? "text-black hover:text-gray-500" : "text-gray-200 hover:text-white"
            }`}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/iCoder5744"
            className={`nav-link text-[14px] sm:text-[16px] font-light md:tracking-widest ${
              isLightTheme ? "text-black hover:text-gray-500" : "text-gray-200 hover:text-white"
            }`}
          >
            GitHub
          </a>
        </li>
      </ul>

      {/* Resume Button */}
      <a
        href="/Resume.pdf"
        download="Shivam_Yadav_Resume.pdf"
        className={`resume-btn px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full shadow-inner font-medium border-2 ${
          isLightTheme
            ? "text-gray-600 hover:text-gray-500 border-gray-600 hover:border-gray-500"
            : "text-gray-200 hover:text-white border-gray-200 hover:border-white"
        }`}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
