//logo+title+lpages tm
import React from 'react';
import logo from '../assets/logonextlevelgame.jpg';
const Navbar = () => {
  const navLinks = [

    { title: 'Events', url: '/events' }, 
    { title: 'Sell Machines', url: '/sell' },
    { title: 'Rent Machines', url: '/rent' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];//string
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Brand Name - Always visible */}
        <a href="/" className="flex items-center space-x-3">
        <img src={logo} alt="Arcade Lebanon Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-white text-2xl font-bold">
          Next Level Games
          </span>
        </a>
        {/* Desktop Navigation Links - Hidden on small screens (mobile) */}
        <div className="hidden md:flex space-x-8 ">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.url} 
              className="text-white hover:text-yellow-400 transition duration-300 text-lg">
              {link.title}
            </a>
          ))}
        </div>
        {/* Mobile Menu Button - Visible only on small screens */}
        <button className="md:hidden text-white text-2xl">
          {/*  simple icon menu button */}
          ☰
        </button>
      </div>
    </nav>
  );
};
export default Navbar;