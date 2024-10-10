import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/images/TestimonialsImage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-white text-lg">TESTIMONIALS</h2>
        <h1 className="text-white text-3xl font-bold mb-6">Hear From Our Customers</h1>
        <div className="flex space-x-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <div className="flex items-center mb-4">
              <Image
                src="/images/t1.png"
                alt="Portrait of Robert Fox"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-white text-sm">
                  “Just Came Back To Home And Should Say That It Is Definitely A Great Experience. I Would Recommend It For Everyone Who Needs A Bike For A Short Term Or Want To T...”
                </p>
              </div>
            </div>
            <div className="text-yellow-500 text-lg font-bold">Robert Fox</div>
            <div className="text-gray-400 text-sm">Writer</div>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="text-yellow-500 text-2xl ml-auto">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <div className="flex items-center mb-4">
              <Image
                src="/images/t2.png"
                alt="Portrait of Marvin McKinney"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-white text-sm">
                  “Amazing Service! Claire Helped Me To Reduce The Shipping Price A Little And Shipped It Immediately After Purchasing. The Amethyst Cave I Got Is A Beauty And I C...”
                </p>
              </div>
            </div>
            <div className="text-yellow-500 text-lg font-bold">Marvin McKinney</div>
            <div className="text-gray-400 text-sm">Businessman</div>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="text-yellow-500 text-2xl ml-auto">
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;