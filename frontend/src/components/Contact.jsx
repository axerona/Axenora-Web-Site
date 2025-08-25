import React, { useState } from "react";
import bg from "../assets/Img.png";
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      e.target.submit();
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <section
      className="w-full min-h-screen flex justify-center items-center relative py-16 md:py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >

      <div className="relative max-w-6xl w-full px-4 sm:px-6 grid md:grid-cols-2 gap-12 text-white z-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Reach Out to Us
            </h2>
            <p className="text-lg text-gray-300 max-w-md">
              Have questions or want to discuss a project? We'd love to hear from you.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-blue-600/20">
                <FiMapPin className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-gray-300">Axenora Technology (Pvt) Ltd</p>
                <p className="text-gray-300">Galewela, Sri Lanka</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-blue-600/20">
                <FiMail className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <a 
                  href="mailto:info@axenoratechnology.com" 
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  info@axenoratechnology.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-full bg-blue-600/20">
                <FiPhone className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <a 
                  href="tel:+94 70 576 8036" 
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  +94 70 576 8036
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
            
            <form 
              action="https://formspree.io/f/mkgvwayn"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Honeypot field to reduce spam */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Your Message</label>
                <div className="relative">
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                  <div className="absolute top-3 right-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full bg-gradient-to-r ${isSubmitted ? 'from-green-500 to-emerald-500' : 'from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600'} text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                <FiSend className="h-5 w-5" />
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
