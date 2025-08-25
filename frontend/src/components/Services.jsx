import React from "react";
import { FaRobot, FaShieldAlt, FaGamepad, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import bg from "../assets/ser.png";

const Services = () => {
  const navigate = useNavigate();

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
    <section 
      className="w-full min-h-screen flex flex-col items-center relative py-16 md:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-900/20 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl w-full px-4 sm:px-6 text-white z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions tailored to your business needs with cutting-edge technology
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-16">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1"
              >
                <div className="p-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    {React.cloneElement(service.icon, { className: "text-3xl text-blue-400" })}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mt-1 mr-3 text-blue-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
            <button 
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-blue-400 to-cyan-300 hover:from-blue-500 hover:to-cyan-400 text-black/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
