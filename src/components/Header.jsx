import React, { useState } from "react";

const Header = ({ theme }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {/* Header Div with height 85vh and full width */}
      <header
        className={`relative py-20 lg:py-24 h-fit-content overflow-hidden w-full rounded-b-[50px] flex flex-col items-center justify-center text-center ${
          theme === "light"
            ? "bg-gradient-to-b from-white via-purple-100 to-purple-200 text-gray-800 border-b-4 border-white"
            : "bg-gradient-to-b from-gray-800 via-gray-600 to-gray-700 text-white border-b-4 border-gray-600"
        }`}
      >
        {/* Subtle SVG Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
            backgroundRepeat: "repeat",
          }}
        ></div>

        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-56 h-56 object-cover rounded-full text-black bg-white mb-4 z-10"
        />
        <h1
          className={`text-3xl sm:text-5xl font-bold ${
            theme === "light" ? "text-gray-700" : "text-white"
          } z-10`}
        >
          Building Creative and <br />
          Scalable Web Applications
        </h1>
        <button
          onClick={() => setIsPopupOpen(true)}
          className={`mt-6 px-6 py-3 bg-green-500 font-semibold rounded-full shadow-sm ${
            theme === "light"
              ? "border-2 border-gray-700 text-black"
              : "border-2 border-white text-gray-700"
          } z-10`}
        >
          Contact Me
        </button>
      </header>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-8 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
