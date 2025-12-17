import React, { useState, useEffect } from 'react';
import { MessageCircle, Download, Droplet, Check, Smartphone, ShoppingCart, Truck, Shield, Heart, Package, Zap, Instagram, Facebook, Youtube } from 'lucide-react';
import AppDownloadSection from '../components/AppDownloadSection';
import dahi from '../assets/dahi.png'
import dahiya from '../assets/dahiya.png'
import matka from '../assets/matka.png'
import kulhad from '../assets/kulhad.png'
import slider from '../assets/slider.png'

const Home = () => {
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

  const products = [
    {
      icon: dahi,
      title: "Pure Desi Ghee",
      description: "Made from 100% cow's milk using traditional bilona method",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: dahiya,
      title: "Plain Curd",
      description: "Fresh, creamy curd made daily with pure cultures",
      // color: "from-green-500 to-green-600"
    },
    {
      icon: matka,
      title: "Matka Curd",
      description: "Traditional earthen pot curd with authentic taste",
      // color: "from-orange-600 to-green-500"
    },
    {
      icon: kulhad,
      title: "Kulhad Curd",
      description: "Rustic kulhad-style curd for the perfect desi experience",
      color: "from-green-600 to-orange-500"
    }
  ];

  const steps = [
    {
      icon: <Download className="w-16 h-16" />,
      title: "Download the App",
      description: "Get our app from Play Store or App Store"
    },
    {
      icon: <ShoppingCart className="w-16 h-16" />,
      title: "Choose Your Product",
      description: "Select from our range of pure dairy products"
    },
    {
      icon: <Truck className="w-16 h-16" />,
      title: "Get Fresh Delivery",
      description: "Receive fresh products right at your doorstep"
    }
  ];

  const features = [
    {
      icon: <Check className="w-8 h-8" />,
      title: "100% Pure & Natural",
      description: "No additives or preservatives"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Traditional Preparation",
      description: "Authentic desi methods followed"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Hygienic Packaging",
      description: "Safe and clean delivery"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Reliable Service",
      description: "Quick delivery guaranteed"
    }
  ];

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://i.ytimg.com/vi/znVWBY6s-Nc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgYShbMA8=&amp;rs=AOn4CLBfU9uIszHL3SKMyQbbBaqxXk6KEQ")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Freshness Delivered Daily</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              THE <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">QUICK POINT</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              Bringing pure desi ghee and fresh dairy products straight to your kitchen with speed and quality.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-0 bg-gradient-to-t from-orange-500 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">About THE QUICK POINT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8 sm:p-12 shadow-xl">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                <span className="font-bold text-orange-600">THE QUICK POINT</span> is built with a mission to deliver <span className="font-semibold text-green-600">pure, traditional dairy products</span> prepared using authentic methods. We focus on <span className="font-semibold">quality, hygiene, and trust</span> to bring you the finest dairy experience that connects you to your roots.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Pure Products</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">Fresh</div>
                  <div className="text-sm text-gray-600">Daily Production</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Trust</div>
                  <div className="text-sm text-gray-600">Our Promise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" data-animate className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">Our Products</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Fresh
                  </span>
                </div>
                
                <div className={`mb-6 text-white w-20 h-20 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <img src={product.icon} alt="" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                
                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center group">
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-6">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} flex items-center justify-center text-white shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50">
                      <span className={`text-xl font-bold ${index % 2 === 0 ? 'text-orange-600' : 'text-green-600'}`}>{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-orange-500 to-green-500 transform -translate-x-1/2" style={{ width: 'calc(100% - 8rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" data-animate className={`py-20 bg-black text-white transition-all duration-1000 ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Strengths</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-6">Why Choose THE QUICK POINT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have Questions or Want Updates?</h2>
          <p className="text-xl mb-8 text-white/90">Connect with us instantly on WhatsApp.</p>
          
          <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto">
            <MessageCircle className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section> */}

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us</h2>
            <p className="text-gray-600">Stay connected for daily updates and offers</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/thequickpointofficial/" target='_blank' className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
              <Instagram className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a href="https://www.facebook.com/thequickpointofficial/" target='_blank' className="group w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
              <Facebook className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            </a>
            
            <a href="https://www.youtube.com/@thequickpoint2178/" target='_blank' className="group w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
              <Youtube className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <AppDownloadSection />

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
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Home;