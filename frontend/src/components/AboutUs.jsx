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
                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">About Axenora</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 bg-white/5 border border-white/20 backdrop-blur-sm p-8 rounded-2xl">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                            <p className="text-gray-300 leading-relaxed">
                                At Axenora Technology, we are driven by a single vision: Innovating the Future. We are a Sri Lanka–based IT company dedicated to creating cutting-edge digital solutions that transform the way people live, work, and connect. Our passion lies in merging creativity with advanced technology to design products that don't just serve today's needs but also shape tomorrow's world.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                                <p className="text-gray-300">To create futuristic digital products that combine artificial intelligence, design, and innovation to empower individuals, businesses, and communities.</p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                                <p className="text-gray-300">To be a global leader in next-generation IT solutions, known for creativity, reliability, and innovation — shaping a smarter and safer digital future.</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-semibold">Innovation</span> – Turning bold ideas into transformative technology.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-semibold">Excellence</span> – Delivering products that are reliable, scalable, and user-focused.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-semibold">Trust & Security</span> – Protecting user data and ensuring transparency in every product.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-semibold">Global Vision</span> – Building solutions that can impact people worldwide, not just locally.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/20 backdrop-blur-sm p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4">Our Innovations</h3>
                            <p className="text-gray-300 mb-4">From AI-powered innovations to next-generation gaming projects, Axenora continues to push the boundaries of possibility:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-medium">Project Fly</span> – A smart game pattern prediction tool</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-medium">Dream AI</span> – An AI-powered dream-to-video generator</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-medium">BlurShield AI</span> – A child-safety solution for real-time content filtering</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-gray-300"><span className="font-medium">Project Shadow</span> – Next-generation gaming experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
