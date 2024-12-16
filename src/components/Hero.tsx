import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-custom-yellow w-full h-screen relative flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
      {/* Content Section */}
      <div className="w-full md:w-[440px] h-full flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left">
        <h5 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
          Rocket Single <br /> Seater
        </h5>
        <a href="./Single-Product">
  <button className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
    <b>Shop Now</b>
  </button>
</a>

      </div>

      {/* Image Section */}
      <div className="w-full h-full flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="./sofa.png"
          alt="single-seat"
          className="object-cover w-full max-w-[400px] md:max-w-[500px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
