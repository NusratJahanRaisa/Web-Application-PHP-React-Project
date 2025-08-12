import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-evenly gap-12 p-8 text-white">
      {/* Left: Contact Info */}
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 tracking-wide drop-shadow-md">
          Contact Us
        </h1>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
          Have any questions about our coffee blends, shipping, or partnership
          opportunities? We’d love to hear from you. Reach out via the details
          below or send us a message.
        </p>

        <ul className="space-y-3 text-lg text-gray-200 font-medium">
          <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
            <span className="text-yellow-400 text-xl">📍</span> Online Only - Serving Worldwide
          </li>
          <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
            <span className="text-yellow-400 text-xl">📧</span> support@mochamuse.com
          </li>
          <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
            <span className="text-yellow-400 text-xl">📞</span> 24/7 Customer Support: +1-800-COFFEE-1
          </li>
          <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
            <span className="text-yellow-400 text-xl">🚚</span> Free Shipping on Orders Over $50
          </li>
          <li className="flex items-center gap-3 hover:text-yellow-400 transition-colors">
            <span className="text-yellow-400 text-xl">⏰</span> Support Hours: 24/7 Online Chat
          </li>
        </ul>
      </div>

      {/* Right: Contact Form */}
      <div className="relative w-full max-w-lg">
        {/* Soft white subtle glow behind */}
        <div className="absolute -inset-1.5 rounded-3xl bg-white opacity-20 blur-xl filter"></div>

        <div className="relative bg-gray-800 bg-opacity-90 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-5 text-yellow-400 drop-shadow-sm">
            Send us a message
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              required
            />
            <textarea
              placeholder="Your Message..."
              className="w-full p-3 bg-gray-700 rounded-lg text-gray-100 placeholder-gray-400 h-24 resize-none focus:outline-none focus:ring-3 focus:ring-yellow-400 transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 active:scale-95 transition-transform duration-150"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
