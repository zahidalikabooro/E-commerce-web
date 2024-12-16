import React from 'react'
import { FaGreaterThan } from "react-icons/fa";
import Link from 'next/link';


export default function page() {
  return (
    <div>
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
        <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-600 mb-10">
          <span className="text-sm">Home</span>
          <FaGreaterThan className="text-xs" />
          <span className="text-sm font-medium">Checkout</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row w-full p-6 bg-gray-100 min-h-screen">
      {/* Left Section - Billing Details */}
      <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Billing details</h1>
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex-1">
            <label htmlFor="first-name" className="block text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-[200px] h-[50px] border border-gray-300 rounded-[10px] p-2"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="last-name" className="block text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-[200px] h-[50px] border border-gray-300 rounded-[10px] p-2"
            />
          </div>
        </div>

        {/* Remaining Input Fields */}
        <div className="mb-4">
          <label htmlFor="company-name" className="block text-sm font-medium mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="company-name"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium mb-2">
            Country / Region
          </label>
          <select
            id="country"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          >
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="street-address" className="block text-sm font-medium mb-2">
            Street Address
          </label>
          <input
            type="text"
            id="street-address"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="town" className="block text-sm font-medium mb-2">
            Town / City
          </label>
          <input
            type="text"
            id="town"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        {/* Additional Fields */}
        <div className="mb-4">
          <label htmlFor="province" className="block text-sm font-medium mb-2">
            Province
          </label>
          <input
            type="text"
            id="province"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="zip-code" className="block text-sm font-medium mb-2">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip-code"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="additional-info" className="block text-sm font-medium mb-2">
            
          </label>
          <textarea
            id="additional-info"
            className="w-[453px] h-[75px] border border-gray-300 rounded-[10px] p-2"
            placeholder="Additional Information"
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Right Section - Product Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className="flex justify-between mb-4">
          <span>Asgaard sofa x 1</span>
          <span>Rs. 250,000.00</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-4 font-medium">
          <span>Subtotal</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mb-4 text-lg font-bold">
          <span>Total</span>
          <span>Rs. 250,000.00</span>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Direct Bank Transformer</h3>
          <p className="text-xs text-gray-500 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name="payment-method"
                className="mr-2"
                defaultChecked
              />
              Direct Bank Transfer
            </label>
            <label>
              <input type="radio" name="payment-method" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
        </div>

        <Link href="./Cart-Sidebar">
      <button className="w-full bg-purple-600 text-white py-2 rounded-md text-lg">
        Place order
      </button>
    </Link>
      </div>
    </div>
  
{/* Return Section */}
<div>
<div className="w-full h-[300px] bg-[#FAF4F4] flex justify-center items-center">
  <div className="flex justify-between w-[1200px]">
    <div className="w-[376px] text-center">
      <h1 className="text-xl font-bold">Free Delivery</h1>
      <p className="text-gray-600">For all orders over $50, consectetur adipim scing elit.</p>
    </div>
    <div className="w-[376px] text-center">
      <h1 className="text-xl font-bold">90 Days Return</h1>
      <p className="text-gray-600">If goods have problems, consectetur adipim scing elit.</p>
    </div>
    <div className="w-[376px] text-center">
      <h1 className="text-xl font-bold">Secure Payment</h1>
      <p className="text-gray-600">100% secure payment, consectetur adipim scing elit.</p>
    </div>
  </div>
</div>
</div>
    </div>


  )}
