
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; 

import Home from './pages/Home';
import SellMachines from './pages/SellMachines';
import RentMachines from './pages/RentMachines';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

function App() {
  return (

    <Router>

      <Navbar />

      <div className="min-h-screen">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />


          <Route 
            path="/sellmachines" 
            element={
              <ProtectedRoute>
                <SellMachines />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/rentmachines" 
            element={
              <ProtectedRoute>
                <RentMachines />
              </ProtectedRoute>
            } 
          />
          
        </Routes>
      </div>    
            
      

      <Footer />
    </Router>
  );
}

export default App;
