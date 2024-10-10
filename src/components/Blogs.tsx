import React from "react";
import Image from "next/image";
import b1 from "../../public/images/b1.png";
import b2 from "../../public/images/b2.png";
import b3 from "../../public/images/b3.png";

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-white min-w-full">
      <div className="text-center mb-8">
        <h2 className="text-yellow-600 text-lg font-bold">NEWS FROM BLOG</h2>
        <h1 className="text-4xl font-bold text-gray-800">What&apos;s On Our Mind</h1>
        <div className="flex justify-center items-center mt-2">
          <div className="w-16 h-1 bg-yellow-600"></div>
          <i className="fas fa-mustache text-yellow-600 mx-2"></i>
          <div className="w-16 h-1 bg-yellow-600"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={b1}
            alt="Barber cutting hair in a barbershop"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm">BEARD STYLES / BY ADMIN</span>
              <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded">Mar 20</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800">The Best Barbershop In The Town</h2>
            <p className="text-gray-600 text-sm mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={b2}
            alt="Man getting a beard trim in a barbershop"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm">BEARD STYLES / BY ADMIN</span>
              <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded">Apr 25</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800">The Best Barbershop In The Town</h2>
            <p className="text-gray-600 text-sm mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={b3}
            alt="Man getting a shave in a barbershop"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm">BEARD STYLES / BY ADMIN</span>
              <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded">Jun 12</span>
            </div>
            <h2 className="text-lg font-bold text-gray-800">The Best Barbershop In The Town</h2>
            <p className="text-gray-600 text-sm mt-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;