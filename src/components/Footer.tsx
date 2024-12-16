import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <p className="text-gray-500 text-sm md:text-base">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-black font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-black font-semibold mb-3">Help</h3>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base">
              <li><a href="#" className="hover:text-black">Payment Options</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-black font-semibold mb-3">Newsletter</h3>
            <div className="flex flex-wrap max-w-full space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              /> 
              <button className="px-4 py-2 bg-black text-white font-medium text-sm rounded-r-md hover:bg-gray-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6 text-center sm:text-left text-gray-500 text-sm">
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
