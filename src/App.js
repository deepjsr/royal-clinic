import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import GeneralDentistry from './pages/GeneralDentistry';
import CosmeticDentistry from './pages/CosmeticDentistry';
import Orthodontics from './pages/Orthodontics';
import EmergencyCare from './pages/EmergencyCare';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { clinic } from './data/site';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/emergency" element={<EmergencyCare />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat on WhatsApp with ${clinic.name}`}
      >
        <span className="floating-whatsapp__icon">💬</span>
        <span className="floating-whatsapp__text">WhatsApp</span>
      </a>
    </>
  );
}
