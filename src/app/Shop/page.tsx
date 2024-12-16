import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa";

export default function Page() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div
        className="relative w-full h-[250px] md:h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/shop.png')" }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[60px] h-[60px] md:w-[77px] md:h-[77px] mb-2 md:mb-4"
        />

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-10">Shop</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-1 md:space-x-2 text-gray-600 mb-4 md:mb-10">
          <span className="text-xs md:text-sm">Home</span>
          <FaGreaterThan className="text-[8px] md:text-xs" />
          <span className="text-xs md:text-sm font-medium">Shop</span>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-[#FAF4F4] w-full h-[80px] md:h-[100px] flex items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <MdOutlineFilterList className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          <span className="text-sm md:text-base">Filter</span>
          <HiViewGrid className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" />
          <BsViewList className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          <FaGripLinesVertical className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
          <span className="ml-1 md:ml-2 text-xs md:text-sm">Showing 1–16 of 32 results</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
           
          <select className="border border-gray-300 rounded-md px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm">
            <option>Show 16</option>
          </select>
          <select className="border border-gray-300 rounded-md px-1 py-0.5 md:px-2 md:py-1 text-xs md:text-sm">
            <option>Sort by Default</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
  {/* Product Card */}
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productc.png"
      alt="product1"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productd.png"
      alt="product2"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productc.png"
      alt="product3"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productd.png"
      alt="product4"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
  {/* Product Card */}
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./producte.png"
      alt="product1"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productf.png"
      alt="product2"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productg.png"
      alt="product3"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./producth.png"
      alt="product4"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
  {/* Product Card */}
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./producti.png"
      alt="product1"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productj.png"
      alt="product2"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productk.png"
      alt="product3"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productl.png"
      alt="product4"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6">
  {/* Product Card */}
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./product1.png"
      alt="productm"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./productn.png"
      alt="product2"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./producto.png"
      alt="product3"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
  </div>
  <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
    <img
      src="./producto.png"
      alt="product4"
      className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
    />
    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
    
  </div>
  <div className="flex justify-center items-center w-full h-[60px] text-center mt-4 md:mt-6">
  <div className="flex space-x-2 md:space-x-4">
    <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base">1</button>
    <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base">2</button>
    <button className="bg-[#FBEBB5] px-3 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base">3</button>
    <button className="bg-[#FBEBB5] px-4 py-1 rounded-lg text-black font-medium shadow text-sm md:text-base">Next</button>
  </div>
</div>

</div>
{/* Return Section */}
<div className="w-full h-[250px] md:h-[300px] bg-[#FAF4F4] flex justify-center items-center">
  <div className="flex justify-between w-full md:w-[1200px] px-4 md:px-0">
    <div className="w-full md:w-[376px] text-center p-4">
      <h1 className="text-base md:text-xl font-bold">Free Delivery</h1>
      <p className="text-gray-600 text-sm md:text-base">For all orders over $50, consectetur adipim scing elit.</p>
    </div>
    <div className="w-full md:w-[376px] text-center p-4">
      <h1 className="text-base md:text-xl font-bold">90 Days Return</h1>
      <p className="text-gray-600 text-sm md:text-base">If goods have problems, consectetur adipim scing elit.</p>
    </div>
    <div className="w-full md:w-[376px] text-center p-4">
      <h1 className="text-base md:text-xl font-bold">Secure Payment</h1>
      <p className="text-gray-600 text-sm md:text-base">100% secure payment, consectetur adipim scing elit.</p>
    </div>
  </div>
</div>

</div>
    
  );
}