import React from 'react';

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4"> CONTACTUS </h1>
        <p className="text-gray-800 text-lg mb-2">
           Number : <span className="font-semibold">+961 70 123 456</span>
        </p>
        <p className="text-gray-800 text-lg mb-2">
           email: <span className="font-semibold">52220006@liu.lb</span>
        </p>
        <div className="text-sm text-gray-500">Tripoli, North Lebanon</div>
      </div>
    </div>
  );
};

export default ContactInfo;