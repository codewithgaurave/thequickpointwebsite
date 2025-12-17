import React, { useState, useEffect } from 'react';
import { Check, ShoppingCart, Truck, Shield, Smartphone } from 'lucide-react';
import phone from '../assets/phone.jpg'

const AppDownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: ShoppingCart, text: 'Easy and quick ordering' },
    { icon: Truck, text: 'Freshly prepared products' },
    { icon: Shield, text: 'Reliable and hygienic delivery' },
    { icon: Check, text: 'Trusted local dairy brand' }
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            {/* Heading */}
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Download the{' '}
              <span className="text-[#FF8C00]">THE QUICK POINT</span> App
            </h2>

            {/* Subheading */}
            <p className="text-[#F5F5F5] text-xl sm:text-2xl font-medium mb-6">
              Freshness, purity, and authentic dairy products — delivered with speed.
            </p>

            {/* Description */}
            <p className="text-[#F5F5F5] text-base sm:text-lg mb-10 max-w-[520px] leading-relaxed">
              Order pure desi ghee and fresh curd products effortlessly using our mobile app. 
              THE QUICK POINT app is designed to give you a smooth ordering experience with 
              trusted quality and fast delivery.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-700 transform ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-opacity-10 p-2 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0B8F00]" />
                  </div>
                  <span className="text-[#F5F5F5] text-sm sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-3 
                         hover:scale-105 hover:shadow-2xl hover:shadow-[#FF8C00]/20 transition-all duration-300
                         active:scale-95"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>

              <button
                className="cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-3 
                         hover:scale-105 hover:shadow-2xl hover:shadow-[#FF8C00]/20 transition-all duration-300
                         active:scale-95"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div
            className={`border-b relative transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative mx-auto max-w-[300px] lg:max-w-[400px]">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00] to-[#0B8F00] rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black p-3 rounded-[3rem] shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <img src={phone} alt="App Screenshot" className="w-full h-full object-cover aspect-[9/19]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;