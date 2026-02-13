import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; // Using lucide-react for icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className='bg-white shadow-md w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          {/* <div className='flex-shrink-0 flex items-center'>
            <span className='text-2xl font-bold text-primary2'>TF</span>
            <span className='text-2xl font-bold text-primary1'>pharmacy</span>
          </div> */}
          <div className='w-48'>
            <img src={logo} alt='TFpharmacy Logo' />
          </div>

          {/* Desktop Navigation (Spread) */}
          <div className='hidden md:flex space-x-8 items-center'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-gray-700 hover:text-blue-600 font-medium'>
                {link.name}
              </a>
            ))}
            <button className='p-2 text-gray-700 hover:text-blue-600'>
              <ShoppingCart size={24} />
            </button>
          </div>

          {/* Mobile Right Side (Cart + Hamburger) */}
          <div className='md:hidden flex items-center space-x-4'>
            <button className='p-2 text-gray-700'>
              <ShoppingCart size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-700 focus:outline-none'>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-gray-50 border-t border-gray-100'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600'>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
