import React from "react";

const teamMembers = [
  {
    name: "DAVID",
    role: "Hair Cut Specialist",
    image: "https://placehold.co/300x400?text=David",
    alt: "David, Hair Cut Specialist",
  },
  {
    name: "PAUL",
    role: "Beard & Trimming",
    image: "https://placehold.co/300x400?text=Paul",
    alt: "Paul, Beard & Trimming Specialist",
  },
  {
    name: "CHARLIE",
    role: "Hair Color Specialist",
    image: "https://placehold.co/300x400?text=Charlie",
    alt: "Charlie, Hair Color Specialist",
  },
];

const Team: React.FC = () => {
  return (
    <div className="text-center py-10 bg-amber-50">
      <h2 className="text-yellow-600 text-lg font-bold">SPECIALISTS</h2>
      <h1 className="text-4xl font-bold text-gray-800">Our Team</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="border-t-2 border-yellow-600 w-16"></div>
        <i className="fas fa-mustache text-yellow-600 mx-2"></i>
        <div className="border-t-2 border-yellow-600 w-16"></div>
      </div>
      <div className="flex justify-center mt-10 space-x-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-64">
            <img src={member.image} alt={member.alt} className="w-full h-auto" />
            <div className="bg-yellow-600 text-white py-2">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;