import React from "react";

const Contact: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row w-full h-full bg-gray-900 bg-opacity-75 text-white">
        <div className="w-full h-screen p-10 flex flex-col justify-center text-center">
          <h2 className="text-yellow-500 text-lg">Contact</h2>
          <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
          <div className="border-t-2 border-yellow-500 w-16 mt-4 mb-4 mx-auto text-center"></div>
          <p className="text-sm max-w-xl text-center mx-auto">
            Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-10 bg-black bg-opacity-75 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-yellow-500 text-lg">Make An Appointment</h2>
          <p className="text-sm mb-6">Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom</p>
          <form className="space-y-4">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded"
              />
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded"
              />
              <input
                type="text"
                placeholder="Time"
                className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded"
              />
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <select className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded">
                <option>Services</option>
              </select>
              <select className="w-full lg:w-1/2 p-2 bg-transparent border border-gray-500 rounded">
                <option>Choose Barber</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-yellow-500 text-black font-bold rounded"
            >
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;