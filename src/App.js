// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

// Import all the page components
// استيراد جميع مكونات الصفحات
import Home from './pages/Home';
import Events from './pages/Events';
import SellMachines from './pages/SellMachines';
import RentMachines from './pages/RentMachines';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    // Router wraps the entire application to enable routing
    // Router يحيط بالتطبيق بأكمله لتمكين نظام التوجيه
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100"> 
        
        {/* Navbar and Footer are outside Routes, so they appear on every page */}
        {/* شريط التنقل والتذييل خارج الـ Routes، لذلك يظهران في كل صفحة */}
        <Navbar />

        {/* Routes defines the paths for each page */}
        {/* Routes يحدد المسارات لكل صفحة */}
        <main className="flex-grow">
          <Routes>
            {/* Route for the Home page (path is '/') */}
            {/* مسار الصفحة الرئيسية (المسار هو '/') */}
            <Route path="/" element={<Home />} />
            
            {/* Routes for other pages */}
            {/* مسارات الصفحات الأخرى */}
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


