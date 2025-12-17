import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Headphones, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+91XXXXXXXXXX';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:thequickpointbarbigha@gmail.com';
  };

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Page Intro Section */}
      <section className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>We're Here to Help</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              Contact <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              We are here to help you with fresh and pure dairy products.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32  from-orange-500 to-transparent"></div>
      </section>

      {/* WhatsApp CTA Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <MessageCircle className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" style={{ fontWeight: 600 }}>
            Connect with Us on WhatsApp
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Have a question, need updates, or want to know more about our products? Message us on WhatsApp and get quick assistance from our team.
          </p>
          
          <button
            onClick={handleWhatsApp}
            className="group px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
            style={{ fontWeight: 600 }}
          >
            <MessageCircle className="w-6 h-6 text-green-400 group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us</span>
          </button>
        </div>
      </section> */}

      {/* Contact Details Section */}
      <section id="contact-details" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible['contact-details'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone Number */}
            <div className="group bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={handleCall}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-semibold" style={{ color: '#333333', fontWeight: 600 }}>
                  Phone Number
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: '#666666', fontWeight: 400 }}>
                  Call us for product inquiries and support during business hours.
                </p>
                
                <a href="tel:+91 9934993423" className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent hover:from-green-700 hover:to-green-800 transition-all" style={{ fontWeight: 600 }}>
                  +91 9934993423
                </a>
                
                <div className="flex items-center space-x-2 text-sm text-green-600" style={{ fontWeight: 500 }}>
                  <Clock className="w-4 h-4" />
                  <span>Available during business hours</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={handleEmail}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Mail className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-semibold" style={{ color: '#333333', fontWeight: 600 }}>
                  Email ID
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: '#666666', fontWeight: 400 }}>
                  Write to us for partnerships, feedback, or general queries.
                </p>
                
                <a href="mailto:thequickpointbarbigha@gmail.com" className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent hover:from-orange-700 hover:to-orange-800 transition-all break-all" style={{ fontWeight: 600 }}>
                  thequickpointbarbigha@gmail.com
                </a>
                
                <div className="flex items-center space-x-2 text-sm text-orange-600" style={{ fontWeight: 500 }}>
                  <Send className="w-4 h-4" />
                  <span>Quick response guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" data-animate className={`py-20 transition-all duration-1000 ${isVisible['service-area'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
              Our Service Area
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform">
                <MapPin className="w-12 h-12" />
              </div>
            </div>
            
            <p className="text-lg text-center leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: '#333333', fontWeight: 400 }}>
              THE QUICK POINT currently serves selected local areas to ensure freshness and fast delivery. We focus on delivering high-quality dairy products within our service zones while maintaining strict quality standards.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium" style={{ fontWeight: 500 }}>Bihar City</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium" style={{ fontWeight: 500 }}>Surrounding Areas</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-50 to-green-50 rounded-full border-2 border-green-200">
                <MapPin className="w-5 h-5" style={{ color: '#0B8F00' }} />
                <span className="font-semibold" style={{ color: '#0B8F00', fontWeight: 600 }}>
                  Expanding soon to more locations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section id="customer-support" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible['customer-support'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 hover:rotate-6 transition-all">
                <Headphones className="w-10 h-10" />
              </div>
            </div>
            
            <h3 className="text-3xl font-semibold mb-6" style={{ color: '#FF8C00', fontWeight: 600 }}>
              Dedicated Customer Support
            </h3>
            
            <p className="text-lg leading-relaxed" style={{ color: '#333333', fontWeight: 400 }}>
              Our customer support team is dedicated to providing quick and reliable assistance. Whether it's product information, order updates, or feedback, we are always ready to help.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
                <MessageCircle className="w-8 h-8" style={{ color: '#0B8F00' }} />
                <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Quick Response</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle className="w-8 h-8" style={{ color: '#0B8F00' }} />
                <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Reliable Support</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md">
                <Headphones className="w-8 h-8" style={{ color: '#0B8F00' }} />
                <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Always Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-bounce">
              <MessageCircle className="w-12 h-12 text-orange-400" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8" style={{ fontWeight: 600 }}>
            Need help or updates?
          </h2>
          
          <button
            onClick={handleWhatsApp}
            className="group cursor-pointer px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto"
            style={{ fontWeight: 600 }}
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us Now</span>
          </button>
          
          <p className="mt-6 text-gray-400 text-sm" style={{ fontWeight: 400 }}>
            Get instant support and quick responses to all your queries
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      {/* <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="w-8 h-8" />
      </button> */}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;