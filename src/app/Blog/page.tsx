import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
export default function page() {
  return (
    <div>
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
              <h1 className="text-3xl font-bold text-center mb-10">Blog</h1>
      
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-gray-600 mb-10">
                <span className="text-sm">Home</span>
                <FaGreaterThan className="text-xs" />
                <span className="text-sm font-medium">Blog</span>
              </div>
            </div>
            <div className="relative"></div>
{/* blog section */}
            <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
  {/* Image Section */}
  <div className="relative">
    <img
      src="./laptop.png"
      alt="Laptop"
      className="w-full rounded-t-lg"
    />
  </div>

  {/* Meta Section */}
  <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
    {/* Admin Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Admin</p>
    </div>
    {/* Date Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>14 Oct 2022</p>
    </div>
    {/* Category Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Wood</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="mt-4">
    <h1 className="text-xl font-semibold text-gray-800">
      Going all-in with millennial design
    </h1>
    <p className="text-gray-600 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mauris vitae
      ultricies leo integer malesuada nunc. Nulla posuere sollicitudin
      aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
      imperdiet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>

  {/* Read More Section */}
  <div className="mt-4">
    <a
      href="#"
      className="text-blue-500 hover:underline font-medium"
    >
      Read more
    </a>
  </div>
</div>
<div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
  {/* Image Section */}
  <div className="relative">
    <img
      src="./laptop.png"
      alt="Laptop"
      className="w-full rounded-t-lg"
    />
  </div>

  {/* Meta Section */}
  <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
    {/* Admin Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Admin</p>
    </div>
    {/* Date Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>14 Oct 2022</p>
    </div>
    {/* Category Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Wood</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="mt-4">
    <h1 className="text-xl font-semibold text-gray-800">
      Going all-in with millennial design
    </h1>
    <p className="text-gray-600 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mauris vitae
      ultricies leo integer malesuada nunc. Nulla posuere sollicitudin
      aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
      imperdiet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>

  {/* Read More Section */}
  <div className="mt-4">
    <a
      href="#"
      className="text-blue-500 hover:underline font-medium"
    >
      Read more
    </a>
  </div>
</div>
<div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
  {/* Image Section */}
  <div className="relative">
    <img
      src="./laptop.png"
      alt="Laptop"
      className="w-full rounded-t-lg"
    />
  </div>

  {/* Meta Section */}
  <div className="flex items-center space-x-4 mt-2 text-gray-500 text-sm">
    {/* Admin Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Admin</p>
    </div>
    {/* Date Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>14 Oct 2022</p>
    </div>
    {/* Category Icon */}
    <div className="flex items-center space-x-1">
      <RiAdminFill className="w-5 h-5 text-blue-500" />
      <p>Wood</p>
    </div>
  </div>

  {/* Content Section */}
  <div className="mt-4">
    <h1 className="text-xl font-semibold text-gray-800">
      Going all-in with millennial design
    </h1>
    <p className="text-gray-600 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Mauris vitae
      ultricies leo integer malesuada nunc. Nulla posuere sollicitudin
      aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
      imperdiet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>

  {/* Read More Section */}
  <div className="mt-4">
    <a
      href="#"
      className="text-blue-500 hover:underline font-medium"
    >
      Read more
    </a>
  </div>
</div>
<div>
    <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
    <ul className="mt-2 space-y-2 text-gray-600">
      <li className="flex justify-between">
        <span>1. Crafts</span>
        <span>2</span>
      </li>
      <li className="flex justify-between">
        <span>2. Design</span>
        <span>8</span>
      </li>
      <li className="flex justify-between">
        <span>3. Handmade</span>
        <span>7</span>
      </li>
      <li className="flex justify-between">
        <span>4. Interior</span>
        <span>1</span>
      </li>
      <li className="flex justify-between">
        <span>5. Wood</span>
        <span>6</span>
      </li>
    </ul>
  </div>
    </div>
  )
}
