import React from 'react';
import { FaGreaterThan } from "react-icons/fa";

export default function Page() {
  return (
    <div>
      {/* Parent container */}
      <div className='bg-white w-full h-[60px] md:h-[100px] border-b-[2px] flex justify-between items-center'>
        {/* Breadcrumb section */}
        <div className='pl-4 text-gray-500 flex items-center space-x-1 md:space-x-2 text-sm md:text-base'>
          <span>Home</span>
          <FaGreaterThan />
          <span>Shop</span>
          <FaGreaterThan />
          <span className='text-black'>Asgaard sofa</span>
        </div>
      </div>
      {/* Single Product Detail */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 p-4 md:p-6">
        {/* Left Side: Image Thumbnails */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-y-4 mb-4 md:mb-0">
            <img
            src="./image1.png"
            alt="Image1"
            className="w-14 h-14 md:w-16 md:h-16 border hover:border-black cursor-pointer"
            />
            <img
            src="./image2.png"
            alt="Image2"
            className="w-14 h-14 md:w-16 md:h-16 border hover:border-black cursor-pointer"
             />
             <img
             src="./image3.png"
              alt="Image3"
              className="w-14 h-14 md:w-16 md:h-16 border hover:border-black cursor-pointer"
                />
            <img
                src="./image4.png"
                alt="Image4"
                className="w-14 h-14 md:w-16 md:h-16 border hover:border-black cursor-pointer"
            />
       </div>

        {/* Center: Main Product Image */}
        <div className="bg-[#FFF9E5] border p-2 mb-4 md:mb-0">
          <img src="./Asgaardsofa.png" alt="Asgaard sofa" className="w-full h-auto max-h-[400px] md:max-h-full" />
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[606.01px] h-auto md:h-[730.87px]">
          {/* Product Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Asgaard Sofa</h1>

          {/* Product Price */}
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Rs. 250,000.00</p>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-2 md:mb-4">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-500 ml-2 text-sm md:text-base">5 Customer Reviews</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Setting the bar as one of the loudest speakers in its class, the Asgaard
            sofa is well-balanced...
          </p>

          {/* Size Options with Background */}
          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-base md:text-lg">Size</h3>
            <div className="flex space-x-2 mt-2">
              <button className="px-4 py-1 md:px-6 md:py-2 border bg-blue-500 text-white rounded-md text-sm md:text-base">L</button>
              <button className="px-4 py-1 md:px-6 md:py-2 border bg-green-500 text-white rounded-md text-sm md:text-base">XL</button>
              <button className="px-4 py-1 md:px-6 md:py-2 border bg-red-500 text-white rounded-md text-sm md:text-base">XS</button>
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-4 md:mb-6">
            <h3 className="font-semibold text-base md:text-lg">Color</h3>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-purple-500 border"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-500 border"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-500 border"></div>
            </div>
          </div>

          {/* Quantity and Add to Cart Button */}
          <div className="flex items-center space-x-4 mb-4 md:mb-6">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-10 md:w-12 border text-center"
            />
            <button className="bg-black text-white px-4 py-1 md:px-6 md:py-2 text-sm md:text-base">Add to Cart</button>
          </div>

          {/* SKU, Category, and Tags */}
          <div className="mt-2 md:mt-4">
            <p className="text-gray-500 text-sm md:text-base">SKU: S5001</p>
            <p className="text-gray-500 text-sm md:text-base">Category: Sofas</p>
            <p className="text-gray-500 text-sm md:text-base">Tags: Sofa, Chair, Home, Shop</p>
          </div>

          {/* Social Media Share Section */}
          <div className="flex items-center space-x-4 mt-4 md:mt-8">
            <span className="font-semibold text-base md:text-lg">Share:</span>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-square text-xl md:text-2xl"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <i className="fab fa-twitter-square text-xl md:text-2xl"></i>
              </a>
              <a href="#" className="text-red-500 hover:text-red-700">
                <i className="fab fa-instagram-square text-xl md:text-2xl"></i>
              </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-pinterest-square text-xl md:text-2xl"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className='h-auto flex flex-col items-center gap-4 md:gap-6 text-center font-poppins px-4 md:px-0'>
          <div className='flex justify-center gap-6 md:gap-10 text-sm md:text-base'>
              <span>Description</span>
                <span>Additional Information</span>
                <span>Reviews [5]</span>
            </div>

           <p className='mt-2 md:mt-4 max-w-3xl text-sm md:text-base'>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
    
            <p className='mt-2 md:mt-4 max-w-3xl text-sm md:text-base'>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-4 mt-4 md:mt-6 bg-[#f0f0f0] p-4 px-4 md:px-6'>
          <img src="sofaa1.png" alt="sofaa1" className='w-full md:w-1/2' />
          <img src="sofaa2.png" alt="sofaa2" className='w-full md:w-1/2' />
        </div>
        
      <div className="bg-white py-6 md:py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Related Products</h1>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Product 1 */}
            <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="./product1.png"
                    alt="product1"
                    className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
                    />
                  <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
                <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
                </div>
                {/* Product 2 */}
                <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
                    <img
                    src="./product2.png"
                    alt="product2"
                    className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
                    />
                    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
                    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
                </div>
                {/* Product 3 */}
               <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
                    <img
                    src="./product3.png"
                    alt="product3"
                    className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
                    />
                    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
                    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
                </div>
                {/* Product 4 */}
                <div className="bg-white shadow-md rounded-lg p-2 md:p-4 hover:shadow-lg transition-shadow duration-300">
                    <img
                    src="./product4.png"
                    alt="product4"
                    className="w-full h-[150px] md:h-[200px] object-cover rounded-md"
                    />
                    <h2 className="text-base md:text-lg font-semibold mt-2 md:mt-4">Trenton Modular Sofa</h2>
                    <p className="text-lg md:text-xl font-bold text-gray-800 mt-1 md:mt-2">Rs. 25,000.00</p>
                
            </div>
            
        </div>
        
        </div>
        
      </div>
    <button className="text-black font-medium rounded hover flex justify-center items-center w-full py-2 md:py-3 underline text-sm md:text-base">
      View More
    </button>

    </div>   
  );
}