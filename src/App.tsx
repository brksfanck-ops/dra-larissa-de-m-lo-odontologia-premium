import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResultsGallery } from './components/ResultsGallery';
import { ServicesSection } from './components/ServicesSection';
import { LifestyleSection } from './components/LifestyleSection';
import { FeedbacksSection } from './components/FeedbacksSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] relative selection:bg-[#B5A48B] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <ResultsGallery />
        <ServicesSection />
        <LifestyleSection />
        <FeedbacksSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
