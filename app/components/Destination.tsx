// components/sections/DestinationsMinimal.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const DestinationsMinimal = () => {
  const destinations = [
    { name: 'CYPRUS', image: 'cyprus.jpg' },
    { name: 'GERMANY', image: 'germany.jpg' },
    { name: 'UK', image: 'uk.jpg' },
    { name: 'US', image: 'us.jpg' },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section id='destination' className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-2">
            OUR STUDY DESTINATIONS
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={`/${dest.image}`}
                  alt={`Study in ${dest.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === idx ? 'bg-black/50' : 'bg-black/30'
                }`}>
                  <span className={`text-xl md:text-2xl font-bold text-white transition-transform duration-300 ${
                    hoveredIndex === idx ? 'scale-110' : 'scale-100'
                  }`}>
                    {dest.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsMinimal;