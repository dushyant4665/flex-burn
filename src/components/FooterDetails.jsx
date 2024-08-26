// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterDetails = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">Flex Burn</h1>
          </div>
          
          {/* Links */}
          <div className="flex flex-col pb-4 justify-items-center md:flex-row space-y-4 md:space-y-0 md:space-x-8">
 
          <button
  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-base font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
>
  <a href="mailto:dushyantkhandelwal4665@gmail.com" className="flex items-center gap-2">
    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2L12 5L10 2M14 22L12 19L10 22M4 12H20M4 12L7 9M4 12L7 15M20 12L17 9M20 12L17 15"/>
    </svg>
    <span className="font-semibold">Connect</span>
  </a>
</button>

          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://x.com/dushyant4665" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dushyant-khandelwal-516319221/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/dushyant4665" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dushyant Khandelwal. All rights reserved.</p>
        </div>
       </div>
    </footer>
  );
};

export default FooterDetails;
