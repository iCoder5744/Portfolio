import React, { useState } from "react";

const Header = ({ theme }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Declare state for popup

  return (
    <div>
      {/* Header Div with height 85vh and full width */}
      <header className={`h-[85vh] w-full  rounded-b-[50px] flex flex-col items-center justify-center text-center ${theme === "light" ? "bg-white text-gray-800 border-b-4 border-white" : "bg-gray-700 text-white border-b-4 border-white"}`}>
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-56 h-56 object-cover rounded-full text-black bg-white mb-4"
        />
        <h1 className={`text-3xl sm:text-5xl font-bold ${theme === "light" ? "text-gray-700" : "text-white"}`}>
          Building Creative and <br />
          Scalable Web Applications
        </h1>
        <button
          onClick={() => setIsPopupOpen(true)} // Open popup on button click
          className={`mt-6 px-6 py-3 bg-green-500 font-semibold rounded-full shadow-sm ${theme === "light" ? "border-2 border-gray-700 text-black" : "border-4 border-white text-gray-700"}`}>
          Contact Me
        </button>
      </header>


      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-8 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsPopupOpen(false)} // Close popup on button click
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
