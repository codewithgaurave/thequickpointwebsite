import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  Download,
  MessageCircle
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" }
  ];

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/app-release.apk";
  link.download = "TheQuickPoint-App.apk";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com",
      color: "hover:text-blue-500"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      href: "https://youtube.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-black text-white font-['Poppins',sans-serif]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="w-10 h-12" />
              <span className="font-bold text-lg">THE QUICK POINT</span>
            </div>

            <p className="text-orange-500 font-medium">
              Freshness, Purity & Authentic Desi Taste
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              THE QUICK POINT delivers pure, fresh and traditionally prepared
              dairy products with modern convenience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect With Us</h3>

            {/* WhatsApp Button */}
            <button
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=919934993423",
                  "_blank"
                )
              }
              className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </button>

            {/* Download App Button */}
<button
  onClick={handleDownload}
  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition"
>
  <Download className="w-5 h-5" />
  <span>Download App</span>
</button>


            {/* Social Icons */}
            <div>
              <p className="text-sm text-gray-400 mb-3">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-800 max-w-7xl mx-auto" />

      {/* Bottom */}
      <div className="py-8 text-center text-xs text-gray-500">
        © 2025 THE QUICK POINT. Design & Developed by{" "}
        <a
          href="https://digicoders.in"
          target="_blank"
          rel="noreferrer"
          className="text-orange-500"
        >
          #TeamDigiCoders
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition"
      >
        <ChevronRight className="w-6 h-6 -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;
