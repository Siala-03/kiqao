import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
// Pages
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-kiqao-black font-body text-kiqao-cream selection:bg-kiqao-gold/30 selection:text-kiqao-warm-white">
        <Navbar />

        {/* AnimatePresence allows components to animate out when they're removed from the React tree */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>);

}