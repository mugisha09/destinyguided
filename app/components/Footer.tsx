// components/sections/Footer.tsx
import React from 'react';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-white text-gray-800 pt-16 pb-10 relative overflow-hidden border-t border-gray-100">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-red-100 rounded-full" />
        <div className="absolute top-20 right-32 w-8 h-8 bg-gradient-to-br from-red-50 to-transparent rounded-full" />
        <div className="absolute left-0 top-1/3 w-20 h-20 border-t border-l border-red-100 rounded-tl-2xl" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-red-50 rounded-full" />

        <div className="absolute top-1/2 right-1/4">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i % 2 === 0 ? 'bg-red-200' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6 relative w-[200px] h-[100px]">
              <Image
                src="/dest.svg"
                alt="Destiny Guided Education Counsellors"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-600 mb-8 max-w-sm">
              Your trusted partner for international education. We help students
              achieve their dreams of studying abroad.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                {
                  icon: <FaFacebookF />,
                  label: 'Facebook',
                  link: 'https://www.facebook.com',
                  color: 'hover:bg-blue-100 text-blue-600',
                },
                {
                  icon: <FaTwitter />,
                  label: 'Twitter',
                  link: 'https://twitter.com',
                  color: 'hover:bg-sky-100 text-sky-500',
                },
                {
                  icon: <FaInstagram />,
                  label: 'Instagram',
                  link: 'https://www.instagram.com/destinyguided?igsh=MXlkYTRqZHp5aGFu&utm_source=qr',
                  color: 'hover:bg-pink-100 text-pink-600',
                },
                {
                  icon: <FaLinkedinIn />,
                  label: 'LinkedIn',
                  link: 'https://www.linkedin.com',
                  color: 'hover:bg-blue-100 text-blue-700',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
              {['Home', 'About Us', 'Services'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-red-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-red-200 rounded-tr-xl" />

            <h3 className="text-lg font-bold mb-6 pb-3 border-b border-red-100 inline-block">
              Contact Info
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Call Us</p>
                  <p className="font-semibold">+250 785 096 263</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email Us</p>
                  <a
                    href="mailto:info@destinyguided.com"
                    className="font-semibold hover:text-red-600 transition"
                  >
                    info@destinyguided.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Visit Us</p>
                  <p className="font-semibold">Kicukiro, Kigali – Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Destiny Guided Education Counsellors. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
