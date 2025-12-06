// components/sections/Vision.tsx
"use client";

import React from 'react';
import { FaEye, FaRocket, FaLightbulb, FaGlobeAmericas, FaStar, FaUsers } from 'react-icons/fa';

const Vision = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Our Vision
            </span>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shaping <span className="text-red-600">Global</span> Futures
          </h2>
        </div>

        {/* Main Vision Content */}
        <div className="max-w-4xl mx-auto">
          {/* Vision Statement Card */}
          <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 mb-8">
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gray-200 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gray-200 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gray-200 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gray-200 rounded-br-lg"></div>
            
            {/* Vision Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-red-50 to-red-100 rounded-full flex items-center justify-center">
                  <FaEye className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute -inset-4 border-2 border-red-100 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Vision Text */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                We envision a world where every individual's potential is recognized, 
                nurtured, and transformed into global leadership and purposeful achievement.
              </p>
              
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto my-8"></div>
              
              <p className="text-gray-600 italic">
                Transforming dreams into destinies, one student at a time.
              </p>
            </div>
          </div>

          {/* Key Elements Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <FaRocket className="w-6 h-6" />,
                title: "Empowered Achievers",
                desc: "Igniting a movement of purpose-driven professionals"
              },
              {
                icon: <FaLightbulb className="w-6 h-6" />,
                title: "Purposeful Guidance",
                desc: "Turning ambition into achievable reality"
              },
              {
                icon: <FaGlobeAmericas className="w-6 h-6" />,
                title: "Global Impact",
                desc: "Leaders whose influence reaches worldwide"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-md group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center group-hover:from-red-50 group-hover:to-red-100 transition-all">
                    <div className="text-gray-600 group-hover:text-red-600 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group">
              <span>Join Our Vision</span>
              <FaStar className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;