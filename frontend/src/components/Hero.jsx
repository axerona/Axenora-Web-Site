import React from "react";
import bg from "../assets/bga.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-6 sm:px-12 ml-0 sm:ml-12 max-w-3xl text-left">
        <h1 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Innovating the Future
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg">
          Axenora Technology is a futuristic software company crafting
          cutting-edge AI, gaming, and safety solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
