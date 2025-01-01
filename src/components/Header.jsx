import React, { useState } from "react";
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Header = ({ theme }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isLightTheme = theme === "light";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date(),
      });
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setIsPopupOpen(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header
        className={`relative py-20 lg:py-24 w-full rounded-b-[50px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden ${
          isLightTheme
            ? "bg-gradient-to-b from-white via-purple-100 to-purple-200 text-gray-800 border-b-4 border-white"
            : "bg-gradient-to-b from-gray-800 via-gray-600 to-gray-700 text-white border-b-4 border-gray-600"
        }`}
      >
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
          alt="Profile"
          className="w-56 h-56 object-cover rounded-full bg-white mb-4 z-10"
        />

        <h1 className={`text-3xl sm:text-5xl font-bold z-10 ${isLightTheme ? "text-gray-700" : "text-white"}`}>
          Building Creative and <br /> Scalable Web Applications
        </h1>

        <button
          onClick={() => setIsPopupOpen(true)}
          className={`mt-6 px-6 py-3 font-semibold rounded-full shadow-sm z-10 border-2 ${
            isLightTheme
              ? "bg-green-500 text-black border-gray-700 hover:bg-green-600"
              : "bg-green-500 text-gray-700 border-white hover:bg-green-600"
          }`}
        >
          Contact Me
        </button>
      </header>

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

            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600 transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
