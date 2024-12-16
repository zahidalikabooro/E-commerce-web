import React from 'react';
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-[220px] md:h-[300px] lg:h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[77px] lg:h-[77px] mb-2 md:mb-3 lg:mb-4"
        />

        {/* Page Title */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-3 md:mb-6 lg:mb-8">Cart</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-1 md:space-x-2 text-gray-600 mb-3 md:mb-6 lg:mb-10">
          <span className="text-xs md:text-sm">Home</span>
          <FaGreaterThan className="text-[8px] md:text-xs" />
          <span className="text-xs md:text-sm font-medium">Cart</span>
        </div>
      </div>

       <div className="flex flex-col items-center mt-4 md:mt-8 lg:mt-10 font-poppins px-4 md:px-6">
      {/* Cart Table */}
      <div className="flex flex-col w-full max-w-[1200px]">
        {/* Table Header */}
        <div className="flex flex-row justify-between items-center bg-[#FFF9E5] py-3 px-4 md:px-6 rounded-md shadow-md">
           <p className="font-semibold text-sm md:text-base lg:text-lg w-1/4 text-left">Product</p>
             <p className="font-semibold text-sm md:text-base lg:text-lg w-1/4 text-center">Price</p>
           <p className="font-semibold text-sm md:text-base lg:text-lg w-1/4 text-center">Quantity</p>
           <p className="font-semibold text-sm md:text-base lg:text-lg w-1/4 text-right">Subtotal</p>
          </div>

        {/* Cart Item */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-3 md:mt-4 lg:mt-6 gap-4 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-1/4">
            <img
              src="./threesofaa.png"
              alt="Asgaard sofa"
              className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-md bg-[#FFF9E5] p-1 md:p-2"
            />
             <p className="text-sm md:text-base font-medium text-left">Asgaard sofa</p>
          </div>
          <p className="text-sm md:text-base font-medium text-center w-1/4">Rs. 250,000.00</p>
           <div className="flex justify-center items-center w-1/4">
            <div className="border border-gray-300 w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] flex justify-center items-center rounded-md">
             <button className="font-normal text-sm md:text-base lg:text-base">1</button>
           </div>
         </div>
          <p className="text-sm md:text-base font-medium text-right w-1/4">Rs. 250,000.00</p>
          <button className="text-gray-500 hover:text-red-500 transition">
              <MdOutlineDeleteOutline className="w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" />
            </button>
        </div>
      </div>

      {/* Cart Totals Section */}
      <div className="bg-[#FFF9E5] w-full max-w-[400px] mt-4 md:mt-6 lg:mt-8 p-4 md:p-5 lg:p-6 rounded-md shadow-md">
        <h1 className="font-bold text-xl md:text-2xl mb-3 md:mb-5 lg:mb-6 text-center">Cart Totals</h1>
          <div className="flex flex-row justify-between items-center mb-2 md:mb-3 lg:mb-4">
            <h1 className="font-medium text-base md:text-lg">Subtotal</h1>
            <p className="text-sm md:text-base font-medium">Rs. 250,000.00</p>
        </div>
         <div className="flex flex-row justify-between items-center mb-3 md:mb-5 lg:mb-6">
          <h1 className="font-medium text-base md:text-lg">Total</h1>
            <p className="text-sm md:text-base font-medium text-[#FF5722]">Rs. 250,000.00</p>
         </div>
            <button className="bg-black text-white rounded-md px-4 py-2 w-full font-medium hover:bg-gray-800 transition text-sm md:text-base">
              <Link href="./Checkout">
                  Check Out
              </Link>
           </button>
      </div>
    </div>


      {/* Return Section */}
      <div className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-[#FAF4F4] flex justify-center items-center">
        <div className="flex justify-between w-full md:w-[1000px] lg:w-[1200px] px-4 md:px-0">
          <div className="w-full md:w-[300px] lg:w-[376px] text-center p-4">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">Free Delivery</h1>
            <p className="text-gray-600 text-sm md:text-base">For all orders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full md:w-[300px] lg:w-[376px] text-center p-4">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">90 Days Return</h1>
            <p className="text-gray-600 text-sm md:text-base">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="w-full md:w-[300px] lg:w-[376px] text-center p-4">
            <h1 className="text-base md:text-lg lg:text-xl font-bold">Secure Payment</h1>
            <p className="text-gray-600 text-sm md:text-base">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}