import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative mt-20 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Your Privacy Matters</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              Privacy <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              We are committed to protecting your privacy and personal information.
            </p>
          </div>
        </div>
        
        
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                At THE QUICK POINT, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                By using our services, you consent to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                2. Information We Collect
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <UserCheck className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-800" style={{ fontWeight: 600 }}>Personal Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Name and contact details</li>
                    <li>• Delivery address</li>
                    <li>• Phone number</li>
                    <li>• Email address</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-orange-600" />
                    <h3 className="text-lg font-semibold text-gray-800" style={{ fontWeight: 600 }}>Usage Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Order history</li>
                    <li>• Product preferences</li>
                    <li>• Website usage data</li>
                    <li>• Device information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                We use your information for the following purposes:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontWeight: 400 }}>Processing and fulfilling your orders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontWeight: 400 }}>Communicating with you about your orders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontWeight: 400 }}>Improving our products and services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontWeight: 400 }}>Sending promotional offers (with your consent)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" style={{ fontWeight: 400 }}>Ensuring security and preventing fraud</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                4. Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>With delivery partners to fulfill your orders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>With payment processors for transaction processing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>When required by law or legal process</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                5. Data Security
              </h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
                <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                6. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                You have the right to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2" style={{ fontWeight: 600 }}>Access</h4>
                  <p className="text-sm text-gray-600" style={{ fontWeight: 400 }}>Request access to your personal data</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2" style={{ fontWeight: 600 }}>Correction</h4>
                  <p className="text-sm text-gray-600" style={{ fontWeight: 400 }}>Request correction of inaccurate data</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2" style={{ fontWeight: 600 }}>Deletion</h4>
                  <p className="text-sm text-gray-600" style={{ fontWeight: 400 }}>Request deletion of your data</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2" style={{ fontWeight: 600 }}>Opt-out</h4>
                  <p className="text-sm text-gray-600" style={{ fontWeight: 400 }}>Opt-out of marketing communications</p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                7. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                We use cookies to enhance your experience on our website. Cookies help us understand how you use our site and improve our services. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontWeight: 400 }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
                9. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontWeight: 400 }}>
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;