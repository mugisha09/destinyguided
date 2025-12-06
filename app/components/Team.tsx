// components/sections/Team.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialization: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Uwanjye Blaise",
      position: "Lead Education Consultant",
      specialization: "North America & Europe",
      image: "/hero.jpg",
      linkedin: "#",
      email: "mailto:sarah@studyabroad.com",
    },
    {
      id: 2,
      name: "Mugisha Brian",
      position: "Chairman",
      specialization: "Operations & Marketing",
      image: "/us.jpg",
      linkedin: "#",
      email: "mailto:michael@studyabroad.com",
    },
    {
      id: 3,
      name: "Team member 3",
      position: "Visa & Documentation Specialist",
      specialization: "Global Visa Processes",
      image: "/uk.jpg",
      linkedin: "#",
      email: "mailto:emma@studyabroad.com",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Experts dedicated to guiding your international education journey
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center border border-gray-100"
            >
              {/* Round Image */}
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name/Position */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium">{member.position}</p>

              {/* Specialization */}
              <div className="mt-3">
                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">
                  {member.specialization}
                </span>
              </div>

              {/* Contact Icons */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}

                {member.email && (
                  <a
                    href={member.email}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

   
      </div>
    </section>
  );
};

export default Team;
