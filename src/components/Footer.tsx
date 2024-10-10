import React from 'react';
import Image from 'next/image';
import f1 from '../../public/images/f1.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Logo and Subscribe Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
            <Image 
              src={f1}
              alt="Barberz Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Email*"
                className="flex-grow px-4 py-2 rounded-l bg-white text-black"
              />
              <button className="bg-[#d4af37] px-6 py-2 rounded-r font-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg font-bold mb-4 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#d4af37] after:mt-2">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col items-center">
              {['HOME', 'ABOUT US', 'GALLERY', 'CONTACT US'].map((item) => (
                <li key={item} className="mb-2 flex items-center">
                  <i className="fas fa-cut text-[#d4af37] mr-2"></i>
                  {item}
                  <i className="fas fa-separator text-[#d4af37] ml-2"></i>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg font-bold mb-4 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#d4af37] after:mt-2">
              SERVICES
            </h3>
            <ul className="flex flex-col items-center">
              {['HAIRS', 'BEAUTY', 'SPA', 'MASSAGE'].map((item) => (
                <li key={item} className="mb-2 flex items-center">
                  <i className="fas fa-cut text-[#d4af37] mr-2"></i>
                  {item}
                  <i className="fas fa-separator text-[#d4af37] ml-2"></i>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold mb-4 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#d4af37] after:mt-2">
              CONTACT
            </h3>
            <ul className="flex flex-col items-center">
              <li className="mb-2 flex items-center justify-center">
                <i className="fas fa-phone text-[#d4af37] mr-2"></i>
                +4125987645
                <i className="fas fa-separator text-[#d4af37] ml-2"></i>
              </li>
              <li className="mb-2 flex items-center justify-center">
                <i className="fas fa-envelope text-[#d4af37] mr-2"></i>
                barberz.123@info.com
                <i className="fas fa-separator text-[#d4af37] ml-2"></i>
              </li>
              <li className="mb-2 flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-[#d4af37] mr-2"></i>
                GOLDEN STREET, CHINATOWN SAN FRANCISCO
                <i className="fas fa-separator text-[#d4af37] ml-2"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mb-4">
          {['facebook-f', 'twitter', 'youtube', 'instagram'].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className="text-[#d4af37] mx-3 text-xl hover:text-white transition-colors"
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          Copyright © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;