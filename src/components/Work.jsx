import React from 'react';
import Image from 'next/image';
import w1 from '../../public/images/w1.png';
import w2 from '../../public/images/w2.png';
import w3 from '../../public/images/w3.png';
import w4 from '../../public/images/w4.png';
import w5 from '../../public/images/w5.png';
import w6 from '../../public/images/w6.png';

const images = [
  { src: w1, alt: 'Child getting a haircut' },
  { src: w2, alt: 'Person getting a haircut' },
  { src: w3, alt: 'Person getting a haircut' },
  { src: w4, alt: 'Person with a beard getting a haircut' },
  { src: w5, alt: 'Person with a beard getting a haircut' },
  { src: w6, alt: 'Person with a beard getting a haircut' },
];

const Work = () => {
  return (
    <div className="text-center py-6 bg-white w-full">
      <h1 className="text-4xl font-bold text-black">Our Work</h1>
      <div className="flex justify-center items-center mt-1">
        <div className="w-12"></div>
        <i className="fas fa-mustache text-yellow-500 mx-1"></i>
        <div className="w-12"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-28">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;