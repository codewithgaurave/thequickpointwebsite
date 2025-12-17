import React from 'react';
import { MessageCircle, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png'

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello THE QUICK POINT, I would like to know more about your products and services.");
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy', available: true },
    { name: 'Terms & Conditions', href: '#terms', available: true },
    { name: 'Refund Policy', href: '#refund', available: false }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-6 h-6" />, 
      href: 'https://instagram.com',
      color: 'hover:text-pink-500'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-6 h-6" />, 
      href: 'https://facebook.com',
      color: 'hover:text-blue-500'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-6 h-6" />, 
      href: 'https://youtube.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-black text-white font-['Poppins',sans-serif]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl" style={{ fontWeight: 700 }}>Q</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                  <span className="text-white font-bold text-xs" style={{ fontWeight: 700 }}>P</span>
                </div> */}
                <img src={logo} alt="" className='w-8 h-10 md:w-10 md:h-12' />
              </div>
              <span className="font-bold text-lg" style={{ fontWeight: 700 }}>THE QUICK POINT</span>
            </div>
            
            {/* Tagline */}
            <p className="text-base font-medium" style={{ color: '#FF8C00', fontWeight: 500 }}>
              Freshness, Purity & Authentic Desi Taste
            </p>
            
            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: '#BDBDBD', fontWeight: 400 }}>
              THE QUICK POINT is committed to delivering pure, fresh, and traditionally prepared dairy products. We combine authentic taste with modern convenience to serve quality you can trust.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold" style={{ fontWeight: 600 }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-sm transition-all duration-300"
                    style={{ color: '#BDBDBD', fontWeight: 400 }}
                  >
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
         

          {/* Column 4 - Connect */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold" style={{ fontWeight: 600 }}>Connect With Us</h3>
            
            {/* WhatsApp Button */}
            <button
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank')}
              
              className="cursor-pointer w-full group px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-green-600/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              style={{ fontWeight: 600 }}
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>WhatsApp Us</span>
            </button>
            
            {/* Social Media Icons */}
            <div className="space-y-4">
              <p className="text-sm" style={{ color: '#BDBDBD', fontWeight: 500 }}>Follow Us</p>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                    style={{ color: '#BDBDBD' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup (Optional) */}
            <div className="pt-4">
              <p className="text-xs" style={{ color: '#9E9E9E', fontWeight: 400 }}>
                Stay updated with fresh products and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px" style={{ backgroundColor: '#1E1E1E' }}></div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          {/* <p className="text-sm text-center md:text-left" style={{ color: '#BDBDBD', fontWeight: 400 }}>
            © 2025 THE QUICK POINT. Design and Developed By <a href="https://digicoders.in" target='_blank'>#TeamDigiCoders</a>
          </p> */}
          
          {/* Additional Links or Info */}
          {/* <div className="flex items-center space-x-6">
            <a 
              href="#privacy" 
              className="text-xs hover:text-orange-500 transition-colors"
              style={{ color: '#9E9E9E', fontWeight: 400 }}
            >
              Privacy
            </a>
            <a 
              href="#terms" 
              className="text-xs hover:text-orange-500 transition-colors"
              style={{ color: '#9E9E9E', fontWeight: 400 }}
            >
              Terms
            </a>
            <a 
              href="#contact" 
              className="text-xs hover:text-orange-500 transition-colors"
              style={{ color: '#9E9E9E', fontWeight: 400 }}
            >
              Contact
            </a>
          </div> */}
        </div>
        
        {/* Made With Love */}
        <div className="text-center mt-6">
          <p className="text-xs" style={{ color: '#757575', fontWeight: 400 }}>
            © 2025 THE QUICK POINT. Design and Developed By <a href="https://digicoders.in" target='_blank'>#TeamDigiCoders</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button (Optional) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 opacity-0 hover:opacity-100 md:opacity-100"
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-6 h-6 -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;