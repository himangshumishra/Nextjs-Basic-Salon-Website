import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

const Features: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-[#fdf6e4]">
      <div className="text-center mx-8">
        <div className="text-4xl font-bold text-black">2000+</div>
        <div className="text-lg text-black">HAPPY CLIENTS</div>
      </div>
      <div className="text-center mx-8">
        <FontAwesomeIcon icon={faCut} className="text-4xl text-[#d4af37]" />
      </div>
      <div className="text-center mx-8">
        <div className="text-4xl font-bold text-black">500</div>
        <div className="text-lg text-black">HAIR CUTS</div>
      </div>
      <div className="text-center mx-8">
        <FontAwesomeIcon icon={faCut} className="text-4xl text-[#d4af37]" />
      </div>
      <div className="text-center mx-8">
        <div className="text-4xl font-bold text-black">150</div>
        <div className="text-lg text-black">STYLERS</div>
      </div>
      <div className="text-center mx-8">
        <FontAwesomeIcon icon={faCut} className="text-4xl text-[#d4af37]" />
      </div>
      <div className="text-center mx-8">
        <div className="text-4xl font-bold text-black">35</div>
        <div className="text-lg text-black">BRANCHES</div>
      </div>
    </div>
  );
};

export default Features;