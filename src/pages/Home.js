// src/pages/Home.js

import React from 'react';
// Import all necessary images from the assets folder
import HeroImage from '../assets/hero_image.jpg'; 
import ComboBoxer from '../assets/combo_boxer.jpg';
import KingOfHammer from '../assets/king_of_hammer.jpg';
import AirHockeyTable from '../assets/air_hockey_table.jpg';
import BasketballHoop from '../assets/basketball_hoop.jpg';

// Array of featured machines for the "Arcade Showcase" section
const featuredMachines = [
  { name: "Boxing Combo Machine", image: ComboBoxer, description: "Test your strength and speed with our popular boxing and kick combo machine. Perfect for competitive fun!" },
  { name: "King of the Hammer", image: KingOfHammer, description: "Prove you're the strongest! A classic carnival game that brings out the competitor in everyone." },
  { name: "Professional Air Hockey", image: AirHockeyTable, description: "Fast-paced, competitive fun for all ages. Our tables are tournament-grade for the best experience." },
  { name: "Hoop Dreams Basketball", image: BasketballHoop, description: "Shoot and score! A high-energy game that's a must-have for any event or arcade zone." },
];

// The Home page component
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section - The Best Arcade Zone in Lebanon */}
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        
        {/* Background Image with Parallax Effect (simulated with fixed background) */}
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center" 
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        {/* Dark Overlay and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
          
          {/* Main Slogan - Emphasizing "Best in Lebanon" */}
          <h1 className="text-4xl md:text-7xl font-black text-center tracking-tight drop-shadow-lg">
            <span className="text-yellow-400">#1</span> Arcade Zone in Lebanon
          </h1>
          
          {/* Secondary Message */}
          <p className="text-xl md:text-3xl font-light mt-4 text-center max-w-3xl">
            Transforming every event into an <span className="font-bold text-red-500">unforgettable gaming experience</span>.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a 
              href="/events" 
              className="px-8 py-3 bg-red-600 text-white text-lg font-bold rounded-full hover:bg-red-700 transition duration-300 shadow-2xl uppercase transform hover:scale-105"
            >
              Book Your Festival Now
            </a>
            <a 
              href="/sell" 
              className="px-8 py-3 bg-yellow-400 text-gray-900 text-lg font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-2xl uppercase transform hover:scale-105"
            >
              Buy Your Own Machine
            </a>
          </div>
        </div>
      </div>

      {/* 2. Why Choose Us - Feature Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 border-b-4 border-yellow-400 inline-block pb-2">
            The Arcade Lebanon Difference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Variety */}
            <div className="p-6 bg-red-50 text-red-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <i className="fas fa-gamepad text-4xl mb-4"></i> {/* Placeholder for an icon */}
              <h3 className="text-2xl font-bold mb-3">10+ Different Games</h3>
              <p className="text-gray-700">
                From classic Air Hockey to the latest interactive challenges, we offer a diverse range of machines to guarantee joy for all ages.
              </p>
            </div>

            {/* Feature 2: Events Focus */}
            <div className="p-6 bg-yellow-50 text-yellow-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <i className="fas fa-calendar-alt text-4xl mb-4"></i> {/* Placeholder for an icon */}
              <h3 className="text-2xl font-bold mb-3">Festival Specialists</h3>
              <p className="text-gray-700">
                We are experts in transforming large events and festivals in Lebanon into high-energy, fun-filled arcade zones.
              </p>
            </div>

            {/* Feature 3: Location */}
            <div className="p-6 bg-blue-50 text-blue-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <i className="fas fa-map-marker-alt text-4xl mb-4"></i> {/* Placeholder for an icon */}
              <h3 className="text-2xl font-bold mb-3">Based in Tripoli</h3>
              <p className="text-gray-700">
                Proudly serving North Lebanon and beyond, ensuring fast and reliable setup for your event, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Arcade Showcase - Featured Machines */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Top Arcade Machines
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Map through the featuredMachines array to display cards */}
            {featuredMachines.map((machine, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
              >
                <img 
                  src={machine.image} 
                  alt={machine.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{machine.name}</h3>
                  <p className="text-gray-600 text-sm">{machine.description}</p>
                  <div className="mt-4 flex justify-between space-x-2">
                    <a 
                      href="/rent" 
                      className="flex-1 text-center py-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full hover:bg-yellow-500 transition duration-300"
                    >
                      Rent 🕹️
                    </a>
                    <a 
                      href="/sell" 
                      className="flex-1 text-center py-2 bg-red-600 text-white text-xs font-bold rounded-full hover:bg-red-700 transition duration-300"
                    >
                      Buy 💰
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/*  Image Gallery -color? */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Get Your Eyes on the Fun!
          </h2>
          
          {/* hammer  2x    (Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300">
              <img 
                src={KingOfHammer} 
                alt="Arcade Atmosphere" 
                className="w-full h-full object-cover"
              />
            {/* grid album 1x box  */}
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300">
              <img 
                src={ComboBoxer} 
                alt="Arcade Machine" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* grid album 1x hockey  */}
            <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300">
              <img 
                src={AirHockeyTable} 
                alt="Air Hockey" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* grid album 1x basket  */}
            <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300">
              <img 
                src={BasketballHoop} 
                alt="Basketball Game" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* grid album 1x hammer2  */}
            <div className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.01] transition duration-300">
              <img 
                src={KingOfHammer} 
                alt="Arcade Game" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action Banner - Final Push */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Ready to Bring the Joy?
          </h2>
          <p className="text-xl mb-8 font-light">
            Contact us today to discuss your event or machine purchase.
          </p>
          <a 
            href="/contact" 
            className="px-10 py-4 bg-yellow-400 text-gray-900 text-xl font-bold rounded-full hover:bg-yellow-500 transition duration-300 shadow-2xl uppercase transform hover:scale-105"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
