// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const FooterDeatils = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Brand */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">YourBrand</h1>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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

export default FooterDeatils;
