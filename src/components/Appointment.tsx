import React from "react";

const Appointment: React.FC = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/appointment.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-yellow-500 text-lg mb-2">Best Barbershop In The City</h2>
        <h1 className="text-5xl font-bold mb-4">Making You Look Good Is In Our Heritage.</h1>
        <p className="text-lg mb-6">Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom Style And Shave Men&rsquo;s And Boy&rsquo;s Hair</p>
        <button className="bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold">Make An Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;