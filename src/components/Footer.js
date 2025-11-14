
import React from 'react';
// The Footer component contains company info, quick links, and contact details
const Footer = () => {
  return (
    // The main footer container, fixed at the bottom of the screen
    // حاوية التذييل الرئيسية، ثابتة في أسفل الشاشة
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-start">
          
          {/* Section 1: Company Info */}
          {/* القسم 1: معلومات الشركة */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">Arcade Lebanon</h3>
            <p className="text-sm text-gray-400">
              Your premier destination for arcade machines and events in Lebanon. We turn your occasions into unforgettable gaming zones.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          {/* القسم 2: روابط سريعة */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Events & Festivals
              </a>
              </li>

              <li><a href="/sell" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Sell Machines
              </a>
              </li>

              <li><a href="/rent" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Rent Machines
              </a>
              </li>

              <li><a href="/about" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              About Us
              </a>
              </li>
                <li><a href="/contact" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                Contact
                </a>
                </li>
            </ul>
          </div>

            {/* Section 3: Contact Info */} 

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-2">Beirut, Lebanon</p>
            <p className="text-sm text-gray-400 mb-4">info@arcadelebanon.com</p>
            
            {/* Social Media Icons (Placeholder) */}
            {/* أيقونات التواصل الاجتماعي (مكان مؤقت) */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        {/* حقوق النشر */}
        <div className="text-center border-t border-gray-700 mt-8 pt-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Arcade Lebanon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
