import React from 'react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Legal Information</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              Terms & <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Conditions</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
        
        
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                Welcome to THE QUICK POINT. These Terms and Conditions ("Terms") govern your use of our website, mobile application, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                If you do not agree with any part of these terms, you may not access or use our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                2. Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                THE QUICK POINT provides dairy products including but not limited to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Pure Desi Ghee</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Plain Curd</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Matka Curd</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Kulhad Curd</span>
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                By using our services, you agree to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Provide accurate and complete information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Use our services only for lawful purposes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Respect our intellectual property rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>Not interfere with our services or systems</span>
                </li>
              </ul>
            </div>

            {/* Orders and Payments */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                4. Orders and Payments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion. Payment must be made at the time of order placement or delivery as specified.
              </p>
            </div>

            {/* Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                5. Delivery
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                We strive to deliver products within the specified timeframe. However, delivery times are estimates and may vary due to circumstances beyond our control.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                6. Limitation of Liability
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700" style={{ fontWeight: 400 }}>
                    THE QUICK POINT shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                7. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                8. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2" style={{ fontWeight: 500 }}>THE QUICK POINT</p>
                <p className="text-gray-600" style={{ fontWeight: 400 }}>Email: support@thequickpoint.in</p>
                <p className="text-gray-600" style={{ fontWeight: 400 }}>Phone: +91 99349 93423</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500" style={{ fontWeight: 400 }}>
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;