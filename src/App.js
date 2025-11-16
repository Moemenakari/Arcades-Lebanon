//  tm 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 


// Import all the page components

import Home from './pages/Home';
import Events from './pages/Events';
import SellMachines from './pages/SellMachines';
import RentMachines from './pages/RentMachines';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    // Router wraps the entire application to enable routing

    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100"> 

        <Navbar />

        {/* Routes defines the paths for each page */}

        <main className="flex-grow">
          <Routes>
            {/* Route for the Home page (path is '/') */}

            <Route path="/" element={<Home />} />
            
            {/* Routes for other pages */}

            <Route path="/events" element={<Events />} />
            <Route path="/sell" element={<SellMachines />} />
            <Route path="/rent" element={<RentMachines />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App; 
