import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            Grama<span className="text-white font-light">Portal</span>
          </h2>
          <p className="text-md text-gray-100">
            Empowering communities through digital governance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-md">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Requests</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-md mb-2">Email: info@gramaportal.gov.lk</p>
          <div className="flex space-x-5 mt-4 text-white">
            <a href="#"><Facebook className="hover:text-yellow-300 cursor-pointer" /></a>
            <a href="#"><Twitter className="hover:text-yellow-300 cursor-pointer" /></a>
            <a href="#"><Instagram className="hover:text-yellow-300 cursor-pointer" /></a>
            <a href="#"><Mail className="hover:text-yellow-300 cursor-pointer" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-200 mt-10 border-t border-green-500 pt-4">
        © {new Date().getFullYear()} Grama Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

