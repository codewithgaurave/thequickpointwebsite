import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle, Award, Shield, Heart, Target, Eye, Package, Leaf, Clock, Users, TrendingUp } from 'lucide-react';

const Aboutus = () => {
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

  const qualityHighlights = [
    { icon: <Leaf className="w-6 h-6" />, text: "Freshly prepared" },
    { icon: <Shield className="w-6 h-6" />, text: "No artificial preservatives" },
    { icon: <Package className="w-6 h-6" />, text: "Hygienic packaging" },
    { icon: <Award className="w-6 h-6" />, text: "Consistent taste & texture" }
  ];

  const trustIndicators = [
    { icon: <Eye className="w-8 h-8" />, title: "Transparent Processes", description: "Complete visibility in our preparation methods" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "Honest Communication", description: "Clear and open dialogue with customers" },
    { icon: <Clock className="w-8 h-8" />, title: "Reliable Service", description: "Consistent quality and timely delivery" },
    { icon: <Users className="w-8 h-8" />, title: "Customer-First Approach", description: "Your satisfaction is our priority" }
  ];

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Page Intro Section */}
      <section className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Heart className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>Our Story</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              About <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              Delivering freshness, purity, and authentic taste to your kitchen.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32  from-orange-500 to-transparent"></div>
      </section>

      {/* Brand Story Section */}
      <section id="brand-story" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible['brand-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#0B8F00', fontWeight: 600 }}>
                Our Brand Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-green-200/30 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 space-y-6" style={{ color: '#333333' }}>
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  <span className="font-semibold text-orange-600" style={{ fontWeight: 600 }}>THE QUICK POINT</span> was created with a simple yet powerful idea — to bring back the purity and authentic taste of traditional dairy products. In a time where quality is often compromised, we wanted to offer something honest, fresh, and reliable.
                </p>
                
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  Our journey began with a deep respect for traditional preparation methods and a strong commitment to hygiene and quality. Every product from THE QUICK POINT reflects our belief that food should be pure, nourishing, and prepared with care.
                </p>
                
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  We combine time-tested practices with modern convenience, making it easy for customers to access premium dairy products with just a few clicks.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Traditional Methods</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Quality First</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium" style={{ color: '#333333', fontWeight: 500 }}>Modern Convenience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" data-animate className={`py-20 transition-all duration-1000 ${isVisible['vision-mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold" style={{ color: '#FF8C00', fontWeight: 600 }}>
                  Our Vision
                </h3>
              </div>
              
              <div className="space-y-4" style={{ color: '#333333' }}>
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  Our vision is to become a <span className="font-semibold text-orange-600" style={{ fontWeight: 600 }}>trusted household name</span> for pure and authentic dairy products, delivering freshness and quality that customers can rely on every day.
                </p>
                
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  We aim to redefine how people experience traditional dairy by blending <span className="font-semibold text-green-600" style={{ fontWeight: 600 }}>authenticity with speed, convenience, and transparency</span>.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold" style={{ color: '#FF8C00', fontWeight: 600 }}>
                  Our Mission
                </h3>
              </div>
              
              <div className="space-y-4" style={{ color: '#333333' }}>
                <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                  Our mission is to provide high-quality dairy products that are:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg" style={{ fontWeight: 400 }}>Prepared using traditional methods</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg" style={{ fontWeight: 400 }}>Free from harmful additives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg" style={{ fontWeight: 400 }}>Hygienically processed and packaged</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg" style={{ fontWeight: 400 }}>Delivered quickly and reliably</span>
                  </li>
                </ul>
                
                <p className="text-lg leading-relaxed pt-2" style={{ fontWeight: 400 }}>
                  We strive to ensure that every product reaching your home meets the highest standards of purity and freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality Section */}
      <section id="quality" data-animate className={`py-20 bg-white transition-all duration-1000 ${isVisible.quality ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#0B8F00', fontWeight: 600 }}>
                Commitment to Quality
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-6" style={{ color: '#333333' }}>
              <p className="text-lg leading-relaxed text-center" style={{ fontWeight: 400 }}>
                Quality is at the heart of everything we do at <span className="font-semibold text-green-600" style={{ fontWeight: 600 }}>THE QUICK POINT</span>. From sourcing raw materials to final delivery, every step is carefully monitored to maintain purity and consistency.
              </p>
              
              <p className="text-lg leading-relaxed text-center" style={{ fontWeight: 400 }}>
                We follow strict hygiene standards and quality checks to ensure that our products retain their natural taste and nutritional value. Our processes are designed to preserve freshness while respecting traditional preparation techniques.
              </p>
              
              <p className="text-lg leading-relaxed text-center" style={{ fontWeight: 400 }}>
                Each product is crafted with attention to detail, ensuring that what you receive is nothing less than the best.
              </p>
            </div>
          </div>
          
          {/* Quality Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityHighlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-base font-medium" style={{ color: '#333333', fontWeight: 500 }}>
                      {item.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Trust Section */}
      <section id="trust" data-animate className={`py-20 bg-black text-white transition-all duration-1000 ${isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-semibold mb-4" style={{ color: '#FF8C00', fontWeight: 600 }}>
                Customer Trust
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                Customer trust is our greatest achievement. We believe that trust is built through <span className="font-semibold text-orange-400" style={{ fontWeight: 600 }}>transparency, consistency, and honest service</span>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                THE QUICK POINT is committed to delivering exactly what we promise — pure products, timely delivery, and dependable support. We value long-term relationships with our customers and continuously work to exceed expectations.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                Your satisfaction motivates us to grow, improve, and serve you better every day.
              </p>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold" style={{ fontWeight: 600 }}>{item.title}</h3>
                  <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8" style={{ fontWeight: 600 }}>
            Have questions or want to know more about THE QUICK POINT?
          </h2>
          
          <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer group px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto" style={{ fontWeight: 600 }}>
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us</span>
          </button>
        </div>
      </section>

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

export default Aboutus;