import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";  

function App() {
  const [activeTab, setActiveTab] = useState("home"); 

  return (
    <div className="App font-sans flex flex-col min-h-screen">
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

    
      <main className="flex-grow">
        {activeTab === "home" && <Hero />}
        {activeTab === "services" && <Services />}
        {activeTab === "contact" && <Contact />}
       
      </main>

      
      <Footer />
    </div>
  );
}

export default App;
