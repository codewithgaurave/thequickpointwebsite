import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    // { name: 'How It Works', path: '/how-it-works' },
    // { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dowload App', path: '/download' }
  ];

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank');
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <img src={logo} alt="" className='w-8 h-10 md:w-10 md:h-12 rounded-full' />
                </div>
                <span
                  className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  THE QUICK POINT
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm font-semibold transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? isScrolled
                        ? 'text-green-500'
                        : 'text-green-600'
                      : isScrolled
                      ? 'text-white hover:text-orange-500'
                      : 'text-gray-800 hover:text-orange-500'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 from-orange-500 to-green-600 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* WhatsApp Button - Desktop */}
            <div className="hidden lg:block">
              <button
              onClick={handleWhatsApp}
                className={` cursor-pointer flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                }`}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-white hover:bg-gray-800' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'bg-black' : 'bg-white'}`}
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleMobileMenuClose}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'bg-green-600 text-white'
                      : 'bg-green-600 text-white'
                    : isScrolled
                    ? 'text-white hover:bg-gray-800 hover:text-orange-500'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-orange-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;