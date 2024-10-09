import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut, faPaintBrush, faScissors, faUserTie } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faCut,
    title: "Hair Cut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
  },
  {
    icon: faScissors,
    title: "Shaving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
  },
  {
    icon: faPaintBrush,
    title: "Hair Color",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
  },
  {
    icon: faUserTie,
    title: "Beard Trim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
  },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-12 bg-amber-50 min-w-full">
      <div className="text-center mb-12">
        <h2 className="text-yellow-600 text-lg">SERVICES</h2>
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <div className="flex justify-center mt-2">
          <FontAwesomeIcon icon={faScissors} className="text-yellow-600 text-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FontAwesomeIcon icon={service.icon} className="text-yellow-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-white transition duration-300">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;