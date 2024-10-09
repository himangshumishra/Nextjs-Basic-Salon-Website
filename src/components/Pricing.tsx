import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-lg w-3/4">
        <h1 className="text-3xl font-bold text-center mb-4 text-black">Barbershop Pricing Plan</h1>
        <div className="flex justify-center mb-6">
          <div className="border-t border-gray-400 w-16"></div>
          <i className="fas fa-mustache text-yellow-600 mx-2"></i>
          <div className="border-t border-gray-400 w-16"></div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Hair Cut <span className="text-yellow-600 float-right">$10</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Hair Styling <span className="text-yellow-600 float-right">$25</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Hair Trimming <span className="text-yellow-600 float-right">$30</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Kids Hair Cut <span className="text-yellow-600 float-right">$15</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Shaving <span className="text-yellow-600 float-right">$40</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Beard Trimming <span className="text-yellow-600 float-right">$25</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Face Cleaning <span className="text-yellow-600 float-right">$60</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-black">Mustache Trim <span className="text-yellow-600 float-right">$12</span></h2>
              <p className="text-sm text-gray-600">Amat Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-600 text-white py-2 px-6 rounded-full">VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;