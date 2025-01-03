import React, { useState } from "react";

const Header = ({ theme }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLightTheme = theme === "light";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Use EmailJS or another service to send the email
      // Example with EmailJS (make sure to replace the template ID, service ID, and user ID)
      // await emailjs.sendForm('service_id', 'template_id', e.target, 'user_id');

      // Simulate successful submission
      setTimeout(() => {
        alert("Message sent successfully!");
        setIsSubmitting(false);
        setName("");
        setEmail("");
        setMessage("");
        setIsFormOpen(false);
      }, 1500);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <header
        className={`relative py-16 lg:py-22 w-full rounded-b-[50px] flex flex-col items-center justify-center text-center shadow-lg overflow-hidden ${
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

        <h1
          className={`text-3xl sm:text-5xl font-bold z-10 ${isLightTheme ? "text-gray-700" : "text-white"}`}
        >
          Building Creative and <br /> Scalable Web Applications
        </h1>

        <button
          onClick={() => setIsFormOpen(true)}
          className={`mt-6 px-6 py-3 font-semibold rounded-full shadow-sm z-10 border-2 ${
            isLightTheme
              ? "bg-green-500 text-black border-gray-700 hover:bg-green-600"
              : "bg-green-500 text-gray-700 border-white hover:bg-green-600"
          }`}
        >
          Contact Me
        </button>
      </header>

      {/* CONTACT ME  */}

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white border w-80 p-6 rounded-lg shadow-inner relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-center mb-2">Contact Me</h2>

            <form onSubmit={handleSubmit} className="text-gray-600 shadow-lg space-y-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 outline-none rounded"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 outline-none rounded"
              />
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 outline-none rounded"
                rows="4"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
