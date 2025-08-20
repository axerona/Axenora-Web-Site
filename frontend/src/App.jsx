import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home"); 

  return (
    <div className="App font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "home" && <Hero />}
      {activeTab === "services" && <Services />}
      {activeTab === "contact" && <Contact />}
      {/* Add other components like Pricing, Careers as needed */}
       
    </div>
  );
}

export default App;
