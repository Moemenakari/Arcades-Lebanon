//sec1 tm <small txt> / sec2 tm <links > / sec3 tm <contact details > + icons from mui
import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
// The Footer component contains company info, quick links, and contact details
const Footer = () => {
  return (
    // The main footer container, fixed at the bottom of the screen
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8"> 
        <div className="flex flex-wrap justify-between items-start">
          
          {/* Section 1: Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-yellow-400 mb-3"> nextlevelgame</h3>
            <p className="text-sm text-gray-400 ">
              Your premier destination for arcade machines and events in Lebanon.
               We turn your occasions into unforgettable gaming zones.
            </p>
          </div>

          {/* Section 2: Quick Links */}

          <div className="w-full md:w-1/3 mb-6 md:mb-0">

            <h3 className="text-xl font-bold mb-3">
              Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events"
               className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Events & Festivals
              </a>
              </li>
              <li><a href="/sell" 
              className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Sell Machines
              </a>
              </li>

              <li><a href="/rent" 
              className="text-gray-400 hover:text-yellow-400 transition duration-300">
              Rent Machines
              </a>
              </li>

              <li><a href="/about" 
              className="text-gray-400 hover:text-yellow-400 transition duration-300">
              About Us
              </a>
              </li>
                <li><a href="/contact"
                 className="text-gray-400 hover:text-yellow-400 transition duration-300">
                Contact
                </a>
                </li>
            </ul>
          </div>

            {/* Section 3: Contact Info */} 

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <div className="flex flex-col items-start space-y-3">
                        {/*  Call me - icon call  */}
            <Chip
              icon={<PhoneIcon />}  //icon ta3 el call
              label="Call me: +961 70 123 456" 
              component="a"  // thwil la link 
              href="tel:+96170123456"    
              clickable // ykhalih yedghat 3al chip  
              sx={{
                backgroundColor: '#dc2626',
                color: 'white',             
                fontWeight: 'small',        
                padding: '10px',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'text-gray',   
                },
              }}
            />

            {/* عنوان location*/}
            <p className="text-sm text-gray-400 ">Tripoli-Lebanon</p>
            {/* بريد إلكتروني */}
            <p href="#" className="text-sm text-gray-400  hover:text-yellow-400 transition duration-300 ">52220006@liu.Lebanon</p>

            
            {/* Social Media Icons ( pre na2son links baaden Placeholder) */}

            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition duration-300">Facebook</a>
              <p className="text-white"> | </p>
              <p href="#" className="text-white hover:text-yellow-400 transition duration-300">TikTok</p>
              <p className="text-white"> | </p>
              <a href="#" className="text-white hover:text-yellow-400 transition duration-300">Instagram</a>
            </div>
          </div>
        </div>
        </div>
      </div>


    </footer> 
  );
};
export default Footer;
