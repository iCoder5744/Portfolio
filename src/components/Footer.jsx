import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = ({ theme }) => {
  const isLightTheme = theme === "light";

  return (
    <footer
      className={`footer-section p-10 flex flex-col items-center justify-center text-center rounded-b-[50px] ${isLightTheme ? "bg-white text-gray-800" : "bg-gray-700 text-white"}`}
    >
      {/* Handshake Icon */}
      <div className="footer-icon mb-4">
        <img
          src="/images/HandSake.jpg"
          alt="Handshake Icon"
          className="icon-image w-24 h-24 rounded-full bg-gray-200"
        />
      </div>

      {/* Title */}
      <h2 className="footer-title text-3xl sm:text-4xl font-bold mb-4">
        Stay Connected for Updates and <br className="hidden sm:block" /> Exciting Opportunities!
      </h2>

      

      {/* Social Media Links */}
      <div className="social-links mt-10 text-sm w-full">
        <p className="copyright text-base">© 2024 Shivam Yadav</p>
        <div className="social-icons flex justify-center items-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com/_c_vam/"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link flex items-center ${isLightTheme ? "text-gray-800 hover:text-black" : "text-gray-400 hover:text-white"}`}
            aria-label="Instagram"
          >
            <FaInstagram size="20" className="icon mr-2" />
            Instagram
          </a>
          <a
            href="https://t.me/ShivamIcoder"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link flex items-center ${isLightTheme ? "text-gray-800 hover:text-black" : "text-gray-400 hover:text-white"}`}
            aria-label="Telegram"
          >
            <FaTelegram size="20" className="icon mr-2" />
            Telegram
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link flex items-center ${isLightTheme ? "text-gray-800 hover:text-black" : "text-gray-400 hover:text-white"}`}
            aria-label="WhatsApp"
          >
            <FaWhatsapp size="20" className="icon mr-2" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
