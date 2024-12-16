import React from "react";
import HeroSection from "@/components/Hero";

export default function Page() {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Product 1 */}
            <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
              <img
                src="./tablee1.png"
                alt="Table"
                className="w-full max-w-[400px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-4 text-lg font-semibold">Elegant Table</h3>
              <p className="text-gray-700 font-bold mt-2">Rs. 12,500</p>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
              <img
                src="./sofa2.png"
                alt="Sofa"
                className="w-full max-w-[400px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-4 text-lg font-semibold">Comfortable Sofa</h3>
              <p className="text-gray-700 font-bold mt-2">Rs. 45,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Top Picks For You</h1>
          <p className="text-gray-500 mb-8">
            Find a bright idea to suit your taste with our great selection of lights and furniture.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`./product${index + 1}.png`}
                  alt={`product${index + 1}`}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-4">Trenton Modular Sofa</h2>
                <p className="text-xl font-bold text-gray-800 mt-2">Rs. 25,000.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="bg-yellow-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <img
              src="./threesofa.png"
              alt="Asgaard Sofa"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-gray-500 text-lg">New Arrivals</h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Asgaard Sofa</h2>
            <p className="text-gray-600 mb-6">
              Experience the ultimate comfort and style with our premium Asgaard Sofa.
            </p>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Our Blogs</h1>
          <p className="text-gray-500 mb-8">
            Explore insights, ideas, and inspiration with our handpicked blogs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={`./product${item + 4}.png`}
                  alt={`blog-${item}`}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">
                    Going all-in with millennial design
                  </h2>
                  <div className="flex justify-between text-gray-500 text-sm mt-2">
                    <span>5 min read</span>
                    <span>12th Oct 2022</span>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <a href="./Blog">
  <button className="text-black font-medium text-lg mt-8 cursor-pointer hover:underline">
    View More Posts
  </button>
</a>

          
        </div>

        {/* Instagram Section */}
        <div
          className="bg-cover bg-center w-full h-56 flex items-center justify-center mt-8"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black">Our Instagram</h1>
            <p className="text-gray-600 mt-2">Follow our store on Instagram</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
