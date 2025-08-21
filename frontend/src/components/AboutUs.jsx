import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Axenora</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              At Axenora, we are passionate about delivering innovative solutions that drive business success. 
              Founded with a vision to transform the digital landscape, we have grown to become a trusted partner 
              for businesses seeking cutting-edge technology solutions.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Our Mission</h4>
                <p className="text-gray-600">To empower businesses with innovative technology solutions that drive growth and success.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Our Vision</h4>
                <p className="text-gray-600">To be the leading technology partner that transforms businesses through digital innovation.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
