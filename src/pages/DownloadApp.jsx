import React, { useState, useEffect } from 'react';
import { MessageCircle, Download, Smartphone, CheckCircle, ShoppingCart, Package, Truck, Bell, Shield, Heart, Leaf, Award, Zap, Menu, Clock } from 'lucide-react';

const DownloadApp = () => {
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

  const handlePlayStore = () => {
    // Redirect to Play Store
    window.open('https://play.google.com/store', '_blank');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello THE QUICK POINT, I would like to know more about your app.");
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  const benefits = [
    { icon: <Menu className="w-6 h-6" />, text: "Easy product selection" },
    { icon: <Zap className="w-6 h-6" />, text: "Fast order placement" },
    { icon: <Bell className="w-6 h-6" />, text: "Reliable delivery updates" },
    { icon: <Shield className="w-6 h-6" />, text: "Secure and hygienic handling" }
  ];

  const steps = [
    {
      number: "1",
      icon: <Download className="w-12 h-12" />,
      title: "Download the App",
      description: "Get the app from Google Play Store.",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "2",
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Choose Your Product",
      description: "Select from pure desi ghee, plain curd, matka curd, or kulhad curd.",
      color: "from-green-500 to-green-600"
    },
    {
      number: "3",
      icon: <Package className="w-12 h-12" />,
      title: "Place Your Order",
      description: "Confirm your order in a few simple steps.",
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "4",
      icon: <Truck className="w-12 h-12" />,
      title: "Enjoy Fresh Delivery",
      description: "Receive freshly prepared products at your doorstep.",
      color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    "Clean and simple user interface",
    "Quick product browsing",
    "Secure order process",
    "Order status notifications",
    "Customer support access"
  ];

  const trustPoints = [
    { icon: <Heart className="w-6 h-6" />, text: "Traditional preparation" },
    { icon: <Award className="w-6 h-6" />, text: "Quality-checked products" },
    { icon: <Shield className="w-6 h-6" />, text: "Secure handling" },
    { icon: <Leaf className="w-6 h-6" />, text: "Trusted local brand" }
  ];

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-green-900/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Smartphone className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Now Available on Mobile</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
                Download THE QUICK POINT <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">App</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-4 animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 500 }}>
                Freshness, purity, and authentic dairy products — just one tap away.
              </p>
              
              <p className="text-base sm:text-lg text-gray-400 mb-8 animate-slideUp" style={{ animationDelay: '0.3s', opacity: 0, fontWeight: 400 }}>
                Order pure desi ghee and fresh curd products quickly and conveniently using THE QUICK POINT mobile app. Experience traditional taste with modern speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
                <button
                  onClick={handlePlayStore}
                  className="group cursor-pointer px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  style={{ fontWeight: 600 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </button>
                
                <button className="group cursor-pointer  px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold text-base hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3" style={{ fontWeight: 600 }}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs">COMING SOON</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - App Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="w-64 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-br from-orange-500 to-green-600 rounded-[3rem] shadow-2xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded-[2.5rem] flex flex-col items-center justify-center p-6 space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-green-600 rounded-3xl flex items-center justify-center shadow-xl">
                      <Smartphone className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-center" style={{ fontWeight: 700, color: '#333333' }}>THE QUICK POINT</h3>
                    <div className="space-y-3 w-full">
                      <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/5"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl"></div>
                      <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-xl"></div>
                      <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-xl"></div>
                      <div className="h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Download Section */}
      <section id="why-download" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible['why-download'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#0B8F00', fontWeight: 600 }}>
              Why Download the App?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-8"></div>
            
            <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#333333', fontWeight: 400 }}>
              The THE QUICK POINT app is designed to make ordering fresh dairy products simple, fast, and reliable. With an easy-to-use interface and secure ordering process, you can enjoy pure products without any hassle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all">
                    {benefit.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#0B8F00' }} />
                    <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>
                      {benefit.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" data-animate className={`py-20 transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
              How the App Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-50">
                        <span className="text-xl font-bold" style={{ color: index % 2 === 0 ? '#FF8C00' : '#0B8F00', fontWeight: 700 }}>{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold" style={{ color: '#333333', fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed" style={{ color: '#666666', fontWeight: 400 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section id="features" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
              App Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2"
                >
                  <CheckCircle className="w-8 h-8 flex-shrink-0" style={{ color: '#0B8F00' }} />
                  <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section id="trust" data-animate className={`py-20 bg-black text-white transition-all duration-1000 ${isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
              Trust & Quality Assurance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-8"></div>
            
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300" style={{ fontWeight: 400 }}>
              THE QUICK POINT app ensures the same quality and purity that our brand stands for. Every order placed through the app follows strict quality and hygiene standards, ensuring fresh and reliable delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    {point.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-base font-medium" style={{ fontWeight: 500 }}>
                      {point.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.compatibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-orange-600" />
            
            <h3 className="text-3xl font-semibold mb-8" style={{ color: '#FF8C00', fontWeight: 600 }}>
              Compatibility & Availability
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <CheckCircle className="w-6 h-6" style={{ color: '#0B8F00' }} />
                <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>Available on Android devices</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <Clock className="w-6 h-6" style={{ color: '#FF8C00' }} />
                <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>iOS version coming soon</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-md">
                <Zap className="w-6 h-6" style={{ color: '#0B8F00' }} />
                <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>Lightweight app for smooth performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
              <Download className="w-12 h-12" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8" style={{ fontWeight: 600 }}>
            Ready to experience pure and fresh dairy products?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePlayStore}
              className="group px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              style={{ fontWeight: 600 }}
            >
              <Download className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Download App</span>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="group px-10 py-4 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              style={{ fontWeight: 600 }}
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section> */}

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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-20px) rotate(6deg);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DownloadApp;