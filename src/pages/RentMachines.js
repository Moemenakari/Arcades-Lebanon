// src/pages/RentMachines.js

import React, { useState } from 'react';

const RentMachines = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    machine: '',
    startDate: '',
    endDate: '',
    location: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Rent Request Submitted:', formData);
    alert('Your rental request has been submitted successfully! We will contact you soon.');

    //   return update

    setFormData({
      name: '',
      email: '',
      phone: '',
      machine: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* title  */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Rent Arcade Machines 🕹️
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Fill out the form below to request a rental quote for your event.
        </p>

        {/*  form   name w phone w mn aymt mn aymt w wen w location*/}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div> 
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input      
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required  
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>  

            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email Address                                                               
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>  
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input    
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required  
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>    
            <div> 
              <label className="block text-gray-700 font-bold mb-2" htmlFor="machine">  
                Machine Type  
              </label>  
              <input   
                type="text" 
                id="machine"
                name="machine"  
                value={formData.machine}
                onChange={handleChange} 
                required  
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />  
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">
                Rental Start Date     
              </label>  
              <input  
                type="date"
                id="startDate"          
                name="startDate"
                value={formData.startDate}  
                onChange={handleChange}
                required  
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />  
            </div>          
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">
                Rental End Date                       
              </label>  
              <input  
                type="date" 
                id="endDate"    
                name="endDate"
                value={formData.endDate}  
                onChange={handleChange} 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location" 
                value={formData.location} 
                onChange={handleChange}
                required  
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>  
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default RentMachines;