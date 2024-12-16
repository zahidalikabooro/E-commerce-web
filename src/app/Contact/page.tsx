import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-[200px] sm:h-[250px] md:h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[77px] md:h-[77px] mb-2 sm:mb-3 md:mb-4"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 md:mb-4">Contact</h1>
        <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600">
          <span className="text-xs sm:text-sm">Home</span>
          <FaGreaterThan className="text-[8px] sm:text-[10px] md:text-xs" />
          <span className="text-xs sm:text-sm font-medium">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Get In Touch With Us</h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            For more information about our product and services, please feel free to drop us an email.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center w-full max-w-6xl space-y-6 md:space-y-0 md:space-x-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 md:space-y-8 w-full md:w-1/2">
            {/* Address */}
            <div className="flex items-start">
              <FaLocationDot className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1" />
              <div className="ml-3">
                <h2 className="text-sm sm:text-base font-semibold">Address</h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1" />
              <div className="ml-3">
                <h2 className="text-sm sm:text-base font-semibold">Phone</h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start">
              <FaClock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1" />
              <div className="ml-3">
                <h2 className="text-sm sm:text-base font-semibold">Working Time</h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4 w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded"
              ></textarea>
              <button className="w-full sm:w-[200px] md:w-[250px] bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Return Section */}
      <div className="w-full bg-[#FAF4F4] py-8 sm:py-10 md:py-12">
        <div className="flex flex-wrap justify-around gap-6 px-4 md:px-0 max-w-6xl mx-auto">
          <div className="text-center w-full sm:w-[45%] md:w-[30%]">
            <h1 className="text-sm sm:text-base font-bold">Free Delivery</h1>
            <p className="text-xs sm:text-sm text-gray-600">For all orders over $50.</p>
          </div>
          <div className="text-center w-full sm:w-[45%] md:w-[30%]">
            <h1 className="text-sm sm:text-base font-bold">90 Days Return</h1>
            <p className="text-xs sm:text-sm text-gray-600">If goods have problems.</p>
          </div>
          <div className="text-center w-full sm:w-[45%] md:w-[30%]">
            <h1 className="text-sm sm:text-base font-bold">Secure Payment</h1>
            <p className="text-xs sm:text-sm text-gray-600">100% secure payment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
