import React from 'react';
import { RefreshCw } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <RefreshCw className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Simple Process</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              How It <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Works</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              Learn how our process works step by step.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32  from-orange-500 to-transparent"></div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600">Detailed process information will be available soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;