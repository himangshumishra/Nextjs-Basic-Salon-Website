import React from "react";
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white">
      <div className="text-center lg:text-center lg:w-1/2 p-8 lg:p-16">
        <h2 className="text-yellow-600 text-lg font-bold">INTRODUCING</h2>
        <h1 className="text-4xl font-bold mt-2 text-black">
          BARBERZ..The Barbershop
        </h1>
        <h3 className="text-2xl font-bold mt-2 text-black">Since 1990</h3>
        <div className="my-4">
          <Image
            src="/images/barber.png"
            alt="Barber Icon"
            width={96}
            height={96}
            className="mx-auto"
          />
        </div>

        <p className="text-gray-700 max-w-xl mx-auto">
          Barber is a person whose occupation is mainly to cut, dress, groom, style,
          and shave men&apos;s and boys&apos; hair. A barber&apos;s place of work is known as a
          &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. Barbershops are also places of social
          interaction and public discourse. In some instances, barbershops are
          also public forums.
        </p>
        <button className="mt-6 bg-yellow-600 text-white py-2 px-6 rounded-full font-bold hover:bg-yellow-700">
          MORE ABOUT US
        </button>
      </div>
      <div className="relative mt-8 lg:mt-0 lg:w-1/2 p-8 lg:p-16 flex justify-center">
        <Image
          src="/images/into-group.png"
          alt="Barber group"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Intro;