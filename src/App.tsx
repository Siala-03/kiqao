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
import { OurStoryPage } from './pages/OurStoryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { CareersPage } from './pages/CareersPage';
import { LivePage } from './pages/LivePage';
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
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>);

}