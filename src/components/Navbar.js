
import React from 'react';

// The Navbar component contains the logo and navigation links
// مكون شريط التنقل (Navbar) يحتوي على الشعار وروابط التنقل
const Navbar = () => {
  // Array of navigation links for easy management
  // مصفوفة (Array) لروابط التنقل لسهولة إدارتها وتعديلها
  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'Events', url: '/events' }, // Focus on Events as per your request
    { title: 'Sell Machines', url: '/sell' },
    { title: 'Rent Machines', url: '/rent' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    // The main navigation bar container
    // حاوية شريط التنقل الرئيسية
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Brand Name - Always visible */}
        {/* الشعار/اسم العلامة التجارية - يظهر دائماً */}
        <a href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300">
          Arcade Lebanon
        </a>

        {/* Desktop Navigation Links - Hidden on small screens (mobile) */}
        {/* روابط التنقل لسطح المكتب - مخفية على الشاشات الصغيرة (الهاتف) */}
        <div className="hidden md:flex space-x-6 space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.url} 
              className="text-white hover:text-yellow-400 transition duration-300 text-lg"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Visible only on small screens */}
        {/* زر قائمة الهاتف - يظهر فقط على الشاشات الصغيرة */}
        <button className="md:hidden text-white text-2xl">
          {/* We will use a simple icon for the menu button */}
          {/* سنستخدم أيقونة بسيطة لزر القائمة */}
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;