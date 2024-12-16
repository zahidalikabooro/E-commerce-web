"use client";
"useState"
import React, { useState } from "react";
import Link from "next/link";
import { IoMdContact } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-custom-yellow">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left Section: Logo or Menu */}
        <div className="relative w-full flex items-center justify-between">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 text-gray-800 font-medium w-full justify-start">
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="./#">Home</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="./Shop">Shop</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              <Link href="./Contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center space-x-2"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Right Section: Icons */}
        <div className="flex space-x-4 md:space-x-6 text-gray-600 text-xl">
          <Link href="./My-Account">
            <IoMdContact className="hover:text-red-500 cursor-pointer" />
          </Link>
          <IoSearchOutline className="hover:text-red-500 cursor-pointer" />
          <CiHeart className="hover:text-red-500 cursor-pointer" />
          <Link href="./Cart">
            <CiShoppingCart className="hover:text-red-500 cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-custom-yellow px-4 py-2 space-y-2`}
      >
        <ul className="text-gray-800 font-medium space-y-2">
           <li className="hover:text-red-500 cursor-pointer">
            <Link href="./#">Home</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link href="./Shop">Shop</Link>
          </li>
           <li className="hover:text-red-500 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
          <li className="hover:text-red-500 cursor-pointer">
            <Link href="./Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}