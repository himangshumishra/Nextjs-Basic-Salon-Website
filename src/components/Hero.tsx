import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/heroImg.png"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Salon Website
          </h1>
          <p className="text-lg text-white mb-8">
            Get ready to experience the best salon services in town!
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            aria-label="Book an Appointment"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;