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
        
        {/* عنوان الصفحة */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          Rent Arcade Machines 🕹️
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Fill out the form below to request a rental quote for your event.
        </p>

        {/*  form   name w phone w mn aymt mn aymt w wen w location*/}


      </div>
    </div>
  );
};

export default RentMachines;