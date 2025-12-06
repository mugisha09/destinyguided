// components/sections/HeroSection.tsx
import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleLine1 = "WE SHAPE",
  titleLine2 = "YOUR FUTURE!",
  ctaText = "FIND OUT MORE",
  backgroundImage = "/hero.jpg", // Default background image path
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Container - Matching your reference */}
      <div className="absolute inset-0">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background Image with specific settings */}
        <div className="relative w-full h-full">
          {/* Using next/image for optimized loading */}
          <Image
            src={backgroundImage}
            alt="Students studying abroad"
            fill
            priority
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
          
          {/* Optional: Add a subtle gradient overlay if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-0" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
        {/* Main Title - Matching your reference style */}
        <div className="text-center mb-8">
          {/* First Line */}
          <h1 className="text-3xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
            {titleLine1}
          </h1>
          
          {/* Second Line with different styling for emphasis */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            {titleLine2}
          </h2>
        </div>

        {/* Call to Action Button */}
        <button className="group relative px-12 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent">
          {/* Button Text */}
          <span className="relative z-10">{ctaText}</span>
          
          {/* Button Hover Effect */}
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          
          {/* Optional: Arrow icon */}
          <svg 
            className="inline-block ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Optional: Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white/80" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;