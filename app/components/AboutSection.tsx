// components/sections/AboutUs.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaGraduationCap, FaGlobeAmericas, FaHandsHelping, FaAward } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id='about' className="scroll-mt-28 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Creative Image Section */}
          <div className="relative">
            {/* Creative Background Shape */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full opacity-70 blur-xl"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Image Container with Proper Size */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square md:aspect-[4/5] relative max-w-md mx-auto">
                  <Image
                    src="/hero.jpg" // Your image in public folder
                    alt="Study Abroad Consultants"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <FaAward className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-6 -left-6 w-40 h-40 border-4 border-red-200 rounded-3xl rotate-12"></div>
              <div className="absolute -z-10 bottom-6 -right-6 w-28 h-28 border-4 border-blue-200 rounded-2xl -rotate-12"></div>
            </div>
            
            {/* Stats Bar - Moved Closer */}
            <div className="mt-12 bg-white rounded-2xl p-5 shadow-xl relative z-10 max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-5">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">10K+</div>
                  <div className="text-gray-600 text-xs md:text-sm">Students Placed</div>
                </div>
                <div className="text-center border-x border-gray-100">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">98%</div>
                  <div className="text-gray-600 text-xs md:text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600">50+</div>
                  <div className="text-gray-600 text-xs md:text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-8">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                ABOUT OUR COMPANY
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Shape Your <span className="text-red-600">Global</span> Future
            </h2>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We are dedicated education consultants with over 15 years of experience 
              helping students achieve their dreams of studying abroad.
            </p>
            
            {/* Key Features */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Our experienced counselors provide personalized guidance for university selection, 
                    applications, and visa processes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaGlobeAmericas className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Global Network</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Partnerships with 500+ universities across 50+ countries ensuring 
                    the best options for every student.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaHandsHelping className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">End-to-End Support</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    From initial consultation to post-arrival assistance, we support 
                    you at every step of your journey.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Free Career Assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Visa Application Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Scholarship Assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Accommodation Help</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-sm md:text-base">
                <span>Book Free Consultation</span>
                <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-red-600 hover:text-red-600 transition-all duration-300 text-sm md:text-base">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;