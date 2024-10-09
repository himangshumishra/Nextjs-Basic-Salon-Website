import React from 'react';
import Image from 'next/image';
import c1 from '../../public/images/c1.png';
import c2 from '../../public/images/c2.png';
import c3 from '../../public/images/c3.png';
import c4 from '../../public/images/c4.png';

const clients = [
  {
    src: c1,
    alt: "Hair salon logo with scissors and mustache",
    name: "HAIR SALON",
  },
  {
    src: c2,
    alt: "Hair salon logo with scissors and comb",
    name: "HAIR SALON",
  },
  {
    src: c3,
    alt: "Hair salon logo with scissors and hair strands",
    name: "HAIR SALON",
  },
  {
    src: c4,
    alt: "Hair salon logo with profile and scissors",
    name: "HAIR SALON",
  },
];

const Clients: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Clients</h1>
        <div className="flex justify-center items-center mt-2 mb-8">
          <div className="border-t border-gray-300 flex-grow mr-2"></div>
          <div className="text-yellow-500 text-2xl">
            <i className="fas fa-mustache"></i>
          </div>
          <div className="border-t border-gray-300 flex-grow ml-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="text-center p-4 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className='bg-gray-200 p-4 rounded-lg overflow-hidden'>
                <Image
                  alt={client.alt}
                  src={client.src}
                  width={100}
                  height={100}
                  className="mx-auto rounded-lg"
                />
              </div>
              <p className="text-gray-800 font-semibold mt-4">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;