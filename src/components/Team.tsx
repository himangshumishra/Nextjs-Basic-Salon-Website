import React from "react";
import Image from "next/image";
import t1 from "../../public/images/team1.png";
import t2 from "../../public/images/team2.png";
import t3 from "../../public/images/team3.png";

const teamMembers = [
  {
    name: "DAVID",
    role: "Hair Cut Specialist",
    image: t1,
    alt: "David, Hair Cut Specialist",
  },
  {
    name: "PAUL",
    role: "Beard & Trimming",
    image: t2,
    alt: "Paul, Beard & Trimming Specialist",
  },
  {
    name: "CHARLIE",
    role: "Hair Color Specialist",
    image: t3,
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
            <Image
              src={member.image}
              alt={member.alt}
              width={300}
              height={400}
              className="w-full "
            />
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