import React, { useState, useEffect } from 'react';
import { MessageCircle, Droplet, CheckCircle, Leaf, Package, Shield, Heart, Thermometer, RefreshCw, Filter, Eye } from 'lucide-react';
import dahi from '../assets/dahi.png'
import dahiya from '../assets/dahiya.png'
import matka from '../assets/matka.png'
import kulhad from '../assets/kulhad.png'

const Products = () => {
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
      id: 'pure-desi-ghee',
      name: 'Pure Desi Ghee',
      icon: dahi,
      bgColor: '#FFFFFF',
      description: 'Our Pure Desi Ghee is prepared using traditional methods to retain its natural aroma, rich texture, and authentic taste. It is made from high-quality milk and carefully processed to preserve its nutritional value.',
      benefits: [
        'Rich in natural nutrients',
        'Enhances flavor of food',
        'Supports digestion',
        'No artificial additives'
      ],
      process: [
        { icon: <Droplet className="w-6 h-6" />, text: 'Fresh milk sourced daily' },
        { icon: <RefreshCw className="w-6 h-6" />, text: 'Traditional slow-churning method' },
        { icon: <Thermometer className="w-6 h-6" />, text: 'Controlled heating for purity' },
        { icon: <Filter className="w-6 h-6" />, text: 'Carefully filtered and packed' }
      ],
      quality: [
        'Multiple quality checks',
        'Hygienic processing environment',
        'Fresh batch preparation',
        'Secure and clean packaging'
      ]
    },
    {
      id: 'plain-curd',
      name: 'Plain Curd',
      icon: dahiya,
      // bgColor: '#F5F5F5',
      description: 'Our Plain Curd is smooth, fresh, and naturally fermented to deliver a balanced taste and perfect consistency. It is ideal for daily meals and promotes a healthy lifestyle.',
      benefits: [
        'Improves digestion',
        'Rich in probiotics',
        'Light and refreshing',
        'Suitable for daily consumption'
      ],
      process: [
        { icon: <Thermometer className="w-6 h-6" />, text: 'Fresh milk boiling' },
        { icon: <Leaf className="w-6 h-6" />, text: 'Natural fermentation' },
        { icon: <Thermometer className="w-6 h-6" />, text: 'Controlled temperature setting' },
        { icon: <Package className="w-6 h-6" />, text: 'Fresh packaging' }
      ],
      quality: [
        'No artificial thickening agents',
        'Fresh daily batches',
        'Clean and sealed containers',
        'Consistent taste guarantee'
      ]
    },
    {
      id: 'matka-curd',
      name: 'Matka Curd',
      icon: matka,
      bgColor: '#FFFFFF',
      description: 'Matka Curd is traditionally set in earthen pots, giving it a natural flavor, thick texture, and refreshing taste that reflects authentic desi culture.',
      benefits: [
        'Naturally thick texture',
        'Earthy and rich flavor',
        'Helps maintain body cooling',
        'Traditional taste experience'
      ],
      process: [
        { icon: <Droplet className="w-6 h-6" />, text: 'Milk prepared using traditional method' },
        { icon: <Heart className="w-6 h-6" />, text: 'Set in earthen pots (Matka)' },
        { icon: <Leaf className="w-6 h-6" />, text: 'Slow natural fermentation' },
        { icon: <Shield className="w-6 h-6" />, text: 'Handled with care and hygiene' }
      ],
      quality: [
        'Quality-tested earthen pots',
        'Hygienic handling',
        'Controlled fermentation',
        'Fresh delivery'
      ]
    },
    {
      id: 'kulhad-curd',
      name: 'Kulhad Curd',
      icon: kulhad,
      bgColor: '#F5F5F5',
      description: 'Kulhad Curd offers a unique traditional experience with a distinct aroma and taste, thanks to its clay-based preparation that enhances flavor naturally.',
      benefits: [
        'Unique desi aroma',
        'Traditional presentation',
        'Naturally refreshing',
        'Premium taste experience'
      ],
      process: [
        { icon: <Droplet className="w-6 h-6" />, text: 'Fresh milk preparation' },
        { icon: <Shield className="w-6 h-6" />, text: 'Set in clay kulhads' },
        { icon: <Thermometer className="w-6 h-6" />, text: 'Natural cooling and fermentation' },
        { icon: <Package className="w-6 h-6" />, text: 'Careful packaging for delivery' }
      ],
      quality: [
        'High-quality clay kulhads',
        'Hygienic environment',
        'Freshly prepared batches',
        'Quality-checked before delivery'
      ]
    }
  ];

  return (
    <div className="font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Page Intro Section */}
      <section className="relative text-white min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'}}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Package className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium" style={{ fontWeight: 500 }}>100% Pure & Traditional</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-slideUp" style={{ fontWeight: 700 }}>
              Our <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Products</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s', opacity: 0, fontWeight: 400 }}>
              Pure, fresh, and traditionally prepared dairy products delivered with care.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32  from-orange-500 to-transparent"></div>
      </section>

      {/* Products Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          data-animate
          className={`py-20 transition-all duration-1000 ${isVisible[product.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ backgroundColor: product.bgColor }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Product Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24  from-orange-500 to-green-500 rounded-3xl flex items-center justify-center text-white shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <img src={product.icon} alt="" />
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-semibold mb-6" style={{ color: '#0B8F00', fontWeight: 600 }}>
                {product.name}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-8"></div>
              
              <p className="text-lg leading-relaxed max-w-4xl mx-auto" style={{ color: '#333333', fontWeight: 400 }}>
                {product.description}
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              {/* Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium" style={{ color: '#333333', fontWeight: 500 }}>Benefits</h3>
                </div>
                
                <ul className="space-y-4">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0B8F00' }} />
                      <span className="text-base" style={{ color: '#333333', fontWeight: 400 }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation Process */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium" style={{ color: '#333333', fontWeight: 500 }}>Preparation Process</h3>
                </div>
                
                <ul className="space-y-4">
                  {product.process.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                        {step.icon}
                      </div>
                      <span className="text-base" style={{ color: '#333333', fontWeight: 400 }}>{step.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium" style={{ color: '#333333', fontWeight: 500 }}>Quality Assurance</h3>
                </div>
                
                <ul className="space-y-4">
                  {product.quality.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0B8F00' }} />
                      <span className="text-base" style={{ color: '#333333', fontWeight: 400 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Badge */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span className="font-medium" style={{ fontWeight: 500 }}>Freshly Prepared Daily</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium" style={{ fontWeight: 500 }}>100% Pure & Natural</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
              <MessageCircle className="w-12 h-12" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8" style={{ fontWeight: 600 }}>
            Want to enjoy fresh and pure dairy products?
          </h2>
          
          <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=919934993423&text&type=phone_number&app_absent=0', '_blank')} className="group cursor-pointer px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 mx-auto" style={{ fontWeight: 600 }}>
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>WhatsApp Us</span>
          </button>
          
          <p className="mt-6 text-white/90 text-sm" style={{ fontWeight: 400 }}>
            Get instant responses and place your order today!
          </p>
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

export default Products;