import React from 'react';  
import Link from 'next/link';  
  
const Footer = () => {  
  return (  
   <footer className="bg-gray-900 text-white py-8">  
    <div className="container mx-auto p-4">  
      <div className="flex flex-wrap justify-center mb-4">  
       <div className="w-full md:w-1/3 xl:w-1/4 p-4">  
        <h4 className="text-lg font-bold mb-2">Quick Links</h4>  
        <ul>  
          <li>  
           <Link href="/" className="text-gray-200 hover:text-white">Home</Link>  
          </li>  
          <li>  
           <Link href="/about" className="text-gray-200 hover:text-white">About Us</Link>  
          </li>  
          <li>  
           <Link href="/gallery" className="text-gray-200 hover:text-white">Gallery</Link>  
          </li>  
          <li>  
           <Link href="/contact" className="text-gray-200 hover:text-white">Contact Us</Link>  
          </li>  
        </ul>  
       </div>  
       <div className="w-full md:w-1/3 xl:w-1/4 p-4">  
        <h4 className="text-lg font-bold mb-2">Services</h4>  
        <ul>  
          <li className="text-gray-200">Hairs</li>  
          <li className="text-gray-200">Beauty</li>  
          <li className="text-gray-200">Spa</li>  
          <li className="text-gray-200">Massage</li>  
        </ul>  
       </div>  
       <div className="w-full md:w-1/3 xl:w-1/4 p-4">  
        <h4 className="text-lg font-bold mb-2">Contact</h4>  
        <p className="text-gray-200">  
          Phone: +4259807545  
          <br />  
          Email: <a href="mailto:barberz123@info.com" className="text-gray-200 hover:text-white">barberz123@info.com</a>  
          <br />  
          Address: GOLDEN STREET, CHINATOWN, SAN FRANCISCO  
        </p>  
       </div>  
      </div>  
      <div className="text-center">  
       <p className="text-gray-200">&copy; 2021 All Rights Reserved</p>  
      </div>  
    </div>  
   </footer>  
  );  
};  
  
export default Footer;
