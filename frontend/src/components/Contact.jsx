import React from "react";
import bg from "../assets/con.png";

const Contact = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 text-white z-10">

        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold">Reach Us</h2>
          <p className="text-lg opacity-90">Contact</p>
          <div className="space-y-2 text-sm opacity-80">
            <p>Azenora Technology (pvt). LTD</p>
            <p>Address: xxxxxxxxxxxxxxxxxxxx</p>
            <p>Phone: xxxxxxxxxxx</p>
          </div>
        </div>


        <form className="space-y-6 bg-white/5 border border-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="space-y-1">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 p-2"
              placeholder="Write your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-lg shadow-md"
          >
            Send your message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
