import React, { useState } from "react";
import bg from "../assets/ser.png";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "AI Solutions",
      description: "We build intelligent tools that automate and enhance decision making.",
    },
    {
      title: "Cyber Safety",
      description: "Real-time AI safety tech to protect users online.",
    },
    {
      title: "Game Development",
      description: "Immersive mobile games with unique storytelling and design.",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden">
     
      <div
        className="relative w-screen h-72 md:h-80 flex items-center justify-center text-white mb-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold z-10">Our Services</h2>
      </div>

       
      <div className="max-w-6xl mx-auto pt-4 pb-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            className={`p-8 rounded-md shadow-md cursor-pointer transition-all duration-300 transform
              ${
                activeCard === index
                  ? "bg-blue-600 text-white"
                  : "bg-[#0B1140] text-white hover:bg-blue-500"
              }
              hover:-translate-y-2 hover:scale-[1.03]`}
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
