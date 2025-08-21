import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App font-sans flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
             
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
