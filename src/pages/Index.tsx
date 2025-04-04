
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
