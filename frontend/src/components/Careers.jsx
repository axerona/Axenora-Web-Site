import React from "react";
import carImage from "../assets/car.png";

const Careers = () => {
  return (
    <section
      id="careers"
      className="relative min-h-screen bg-[#0a0f2c] text-gray-200 flex items-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-8 md:px-16">


        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join our Team
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We're always looking for talented individuals passionate about
            innovation and technology. If you want to be part of Axenora's
            journey, check out our open positions below.
          </p>

          <ul className="space-y-3 text-lg list-disc list-inside">
            <li>AI Engineer</li>
            <li>Game Developer</li>
            <li>Cybersecurity Specialist</li>
            <li>Product Manager</li>
          </ul>

          <p className="mt-8 text-gray-300">
            send your CV to:{" "}
            <a
              href="mailto:careers@axenora.com"
              className="text-indigo-400 hover:underline"
            >
              careers@axenora.com
            </a>
          </p>
        </div>

        <div className="hidden md:block absolute right-0 top-0 h-full">
          <img
            src={carImage}
            alt="Careers"
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Careers;
