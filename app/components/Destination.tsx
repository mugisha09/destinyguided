// components/sections/DestinationsWithCounter.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';

const DestinationsWithCounter = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const destinations = [
    { name: 'CYPRUS', image: 'cyprus.jpg' },
    { name: 'GERMANY', image: 'germany.jpg' },
    { name: 'UK', image: 'uk.jpg' },
    { name: 'US', image: 'us.jpg' },
  ];

  return (
    <section id='destination' className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-2">
            STUDY DESTINATIONS
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Grid Container */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
            {destinations.map((dest, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/${dest.image}`}
                    alt={`Study in ${dest.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  
                  {/* Country Name */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-white">
                      {dest.name}
                    </span>
                  </div>
                  
                  {/* Plus More Indicator on last card */}
                  {idx === destinations.length - 1 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white text-2xl font-bold">+</span>
                        </div>
                        <p className="text-white text-sm font-medium">
                          And 20+ more
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Hidden Count Badge */}
                {idx === destinations.length - 1 && (
                  <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    10+
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Floating Counter */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 border border-gray-200">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-gray-800">
                <span className="text-red-600">10+</span> Destinations Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Expandable Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center space-y-2 text-gray-600 group cursor-pointer">
            <span className="text-sm font-medium">Explore more destinations</span>
            <FaChevronDown className="w-4 h-4 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Europe', count: '4' },
              { label: 'North America', count: '2' },
              { label: 'Asia', count: '3' },
              { label: 'Oceania', count: '1' },
            ].map((region, idx) => (
              <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-900">{region.count}</div>
                <div className="text-xs text-gray-600">{region.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsWithCounter;