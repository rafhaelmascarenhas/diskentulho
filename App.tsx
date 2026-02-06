import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Features from './components/Features';
import MiddleCTA from './components/MiddleCTA';
import Stats from './components/Stats';
import Region from './components/Region';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-gray antialiased bg-gray-50">
      <Header />
      <Hero />
      <Models />
      <Features />
      <MiddleCTA />
      <Stats />
      <Region />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;