import React from 'react';
import bg from "../assets/bga.png";

const AboutUs = () => {
    return (
        <section
            className="w-full min-h-screen flex justify-center items-center relative"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
		zIndex: -1,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-6xl w-full px-6 py-16 text-white z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold mb-4">About Axenora</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 bg-white/5 border border-white/20 backdrop-blur-sm p-8 rounded-2xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                            <p className="text-gray-300 leading-relaxed">
                                At Axenora, we are passionate about delivering innovative solutions that drive business success.
                                Founded with a vision to transform the digital landscape, we have grown to become a trusted partner
                                for businesses seeking cutting-edge technology solutions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                                <p className="text-gray-300">To empower businesses with innovative technology solutions that drive growth and success.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                                <p className="text-gray-300">To be the leading technology partner that transforms businesses through digital innovation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold text-blue-400 mb-2">1+</h3>
                            <p className="text-gray-300">Years of Experience</p>
                        </div>
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold text-blue-400 mb-2">10+</h3>
                            <p className="text-gray-300">Projects Completed</p>
                        </div>
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold text-blue-400 mb-2">10+</h3>
                            <p className="text-gray-300">Team Members</p>
                        </div>
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl text-center">
                            <h3 className="text-3xl font-bold text-blue-400 mb-2">100%</h3>
                            <p className="text-gray-300">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
