import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  const [activeTab, setActiveTab] = useState("home"); 

  return (
    <div className="App font-sans">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "home" && <Hero />}
      {activeTab === "services" && <Services />}
       
    </div>
  );
}

export default App;
