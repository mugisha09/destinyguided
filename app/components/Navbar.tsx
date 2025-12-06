// components/layout/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {  FaTimes, FaPhone, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: 'ABOUT US', 
      href: '#about',
      dropdown: [
        { name: 'Our Story', href: '#story' },
        { name: 'Our Team', href: '#team' },
        { name: 'Accreditations', href: '#accreditations' },
      ]
    },
    { 
      name: 'OUR SERVICES', 
      href: '#services',
      dropdown: [
        { name: 'School & University Application ', href: '#admissions' },
        { name: 'Visa Counseling & Processing', href: '#visa' },
        { name: 'Career Guidance', href: '#test-prep' },
      ]
    },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-gray-900 text-gray-300 text-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <FaPhone className="w-3 h-3 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <HiOutlineMail className="w-4 h-4 text-red-500" />
                <span>info@studyabroad.com</span>
              </div>
              <div className="hidden xl:flex items-center space-x-2">
                <HiOutlineLocationMarker className="w-4 h-4 text-red-500" />
                <span>123 Education St, Knowledge City</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <button className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded hover:bg-red-700 transition-colors">
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold tracking-tight">
                  <span className="text-red-600 group-hover:text-red-700 transition-colors">
                    Destiny
                  </span>
                  <span className="text-gray-900 group-hover:text-gray-800 transition-colors">
                    Guided
                  </span>
                </span>
                <span className="text-xs font-medium text-gray-600 tracking-widest uppercase">
                  Education Counsellors
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors group/nav"
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/nav:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 top-full pt-2 w-48">
                      <div className="bg-white rounded-lg shadow-xl border py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Active Indicator */}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              ))}
              
              {/* CTA Button */}
              <button className="ml-4 px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <CiMenuFries className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 top-[140px] bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6 h-[calc(100vh-140px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 font-medium border-b"
                  >
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-3 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 mt-6 border-t">
                <div className="flex justify-center space-x-4 mb-6">
                  {socialIcons.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <FaPhone className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;