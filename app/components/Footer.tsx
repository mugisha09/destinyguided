// components/sections/Footer.tsx
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-10 relative overflow-hidden border-t border-gray-100">
      {/* Creative Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right decorative shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-red-100 rounded-full"></div>
        <div className="absolute top-20 right-32 w-8 h-8 bg-gradient-to-br from-red-50 to-transparent rounded-full"></div>
        
        {/* Left center shapes */}
        <div className="absolute left-0 top-1/3 w-20 h-20 border-t border-l border-red-100 rounded-tl-2xl"></div>
        
        {/* Bottom left shapes */}
        <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-red-50 rounded-full"></div>
        
        {/* Dot pattern */}
        <div className="absolute top-1/2 right-1/4">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-red-200' : 'bg-blue-200'}`}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-red-600">Destiny</span>
                <span className="text-gray-900">Guided</span>
              </h2>
              <p className="text-gray-500 text-sm">Education Counsellors</p>
            </div>
            <p className="text-gray-600 mb-8 max-w-sm">
              Your trusted partner for international education. We help students achieve their dreams of studying abroad.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebookF />, color: 'hover:bg-blue-100 text-blue-600', label: 'Facebook' },
                { icon: <FaTwitter />, color: 'hover:bg-sky-100 text-sky-500', label: 'Twitter' },
                { icon: <FaInstagram />, color: 'hover:bg-pink-100 text-pink-600', label: 'Instagram' },
                { icon: <FaLinkedinIn />, color: 'hover:bg-blue-100 text-blue-700', label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center ${social.color} transition-all transform hover:scale-110 border border-gray-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 pb-3 border-b border-red-100 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', ].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-600 hover:text-red-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative">
            {/* Creative corner accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-red-200 rounded-tr-xl"></div>
            
            <h3 className="text-lg font-bold mb-6 pb-3 border-b border-red-100 inline-block">
              Contact Info
            </h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <FaPhone className="w-6 h-6 text-red-600" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute -inset-1 border-2 border-red-200 rounded-xl opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us</p>
                  <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-xs mt-1">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Us</p>
                  <p className="text-gray-900 font-semibold">info@destinyguided.com</p>
                  <p className="text-gray-400 text-xs mt-1">24/7 Support</p>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="text-gray-900 font-semibold">123 Education Street</p>
                  <p className="text-gray-400 text-xs mt-1">Kigali,Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Destiny Guided Education Counsellors. All rights reserved.
            </p>
          </div>
          
          
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-6" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 8C120 16 240 32 360 36C480 40 600 32 720 24C840 16 960 8 1080 4C1200 0 1320 0 1380 0H1440V40H0V0Z" 
                fill="currentColor" className="text-gray-50"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;