import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import HowItWorks from './pages/HowItWorks'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'
import DownloadApp from './pages/DownloadApp'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<DownloadApp />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    <Footer />
      </div>
  )
}

export default App
