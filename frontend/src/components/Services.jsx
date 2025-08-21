import React from "react";
import { FaRobot, FaShieldAlt, FaGamepad, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import bg from "../assets/ser.png";

const Services = () => {

  const services = [
    {
      title: "AI Solutions",
      icon: <FaRobot className="text-3xl text-blue-400" />,
      description: "Transform your business with cutting-edge artificial intelligence solutions.",
      features: [
        "Custom AI model development",
        "Machine learning integration",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions"
      ]
    },
    {
      title: "Game Development",
      icon: <FaGamepad className="text-3xl text-blue-400" />,
      description: "Immersive gaming experiences across multiple platforms.",
      features: [
        "2D/3D game development",
        "Mobile & PC games",
        "AR/VR experiences",
        "Game design & art",
        "Multiplayer integration"
      ]
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-3xl text-blue-400" />,
      description: "Modern, responsive, and high-performance web applications.",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "CMS development",
        "API integration",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="text-3xl text-blue-400" />,
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS & Android development",
        "React Native apps",
        "UI/UX design",
        "App store optimization",
        "Maintenance & support"
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-gray-900">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={bg} 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions tailored to your business needs with cutting-edge technology
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src={bg} 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg mb-8">Our team is here to help you turn your ideas into reality.</p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
