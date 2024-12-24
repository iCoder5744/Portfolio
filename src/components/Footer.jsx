import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  
    <footer className="p-10 flex flex-col items-center justify-center text-center bg-white rounded-b-[50px]">
      {/* Handshake Icon */}
      <div className="mb-4">
        <img
          src="/images/HandSake.jpg" // Replace with the correct path to the handshake icon
          alt="Handshake Icon"
          className="w-24 h-24 rounded-full bg-gray-200"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
        Stay Connected for Updates and <br className="hidden sm:block" /> Exciting Opportunities!
      </h2>

      {/* Email Form */}
      <form className="bg-gray-800 rounded-full flex items-center mt-4 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 text-white placeholder-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-r-full hover:bg-green-600 transition duration-300"
        >
          &#10140;
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-10 text-sm text-gray-500 w-full">
        <p className="text-base">© 2024 Shivam Yadav</p>
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a
            href="#"
            className="hover:text-black text-gray-500 flex items-center"
            aria-label="Instagram"
          >
            <FaInstagram size="20" className="mr-2" />
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-black text-gray-500 flex items-center"
            aria-label="Telegram"
          >
            <FaTelegram size="20" className="mr-2" />
            Telegram
          </a>
          <a
            href="#"
            className="hover:text-black text-gray-500 flex items-center"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size="20" className="mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
);

export default Footer;
