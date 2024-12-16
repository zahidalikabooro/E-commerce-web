import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

export default function Page() {
  return (
<div className="w-full">
      {/* Header Section */}
      <div
        className="relative w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[77px] h-[77px] mb-4"
        />

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center mb-10">My Account</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-600 mb-10">
          <span className="text-sm">Home</span>
          <FaGreaterThan className="text-xs" />
          <span className="text-sm font-medium">Shop</span>
        </div>
      </div>

    <div>
      <div className="flex justify-between w-full bg-white px-20 py-12">
        {/* Login Section */}
        <div className="w-1/2 h-auto relative border border-gray-300 bg-white p-8">
          <h1 className="text-2xl font-poppins mb-6">Log In</h1>
          <p className="mb-2 font-poppins">Username or email address</p>
          <input
            type="text"
            className="w-[300px] h-12 border border-gray-300 bg-white mb-4 p-2"
          />
          <p className="mb-2 font-poppins">Password</p>
          <input
            type="password"
            className="w-[300px] h-12 border border-gray-300 bg-white mb-4 p-2"
          />
          <div className="flex items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <p className="font-poppins">Remember me</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-[215px] h-12 bg-white hover:bg-gray-400 text-black border border-gray-400 font-poppins">
              Log In
            </button>
            <p className="text-sm font-poppins text-gray-600 cursor-pointer hover:text-gray-800">
              Lost Your Password?
            </p>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-1/2 h-auto relative border border-gray-300 bg-white p-8">
          <h1 className="text-2xl font-poppins mb-6">Register</h1>
          <p className="mb-2 font-poppins">Email address</p>
          <input
            type="text"
            className="w-[300px] h-12 border border-gray-300 bg-white mb-4 p-2"
          />
          <p className="text-sm mb-4 font-poppins text-gray-600">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-xs mb-6 font-poppins text-gray-500">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our privacy policy.
          </p>
          <button className="w-[215px] h-12 bg-white hover:bg-gray-400 text-black border border-gray-400 font-poppins rounded-sm">
            Register
          </button>
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
    </div>
  );
}
