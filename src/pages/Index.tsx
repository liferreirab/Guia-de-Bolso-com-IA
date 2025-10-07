
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainReliefSection from '@/components/PainReliefSection';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CountdownBanner from '@/components/CountdownBanner';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { useEffect } from "react";
import Guarantee from '@/components/Guarantee';
import ScrollPopup from '../components/ScrollPopup'; // adjust path as needed
import GuaranteeSection from '@/components/Guarantee';


const Index = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get("fbclid");
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (fbclid) {
      const checkoutLinks = document.querySelectorAll('a[href*="pay.hotmart.com"]');
      checkoutLinks.forEach(link => {
        try {
          const anchor = link as HTMLAnchorElement;
          const url = new URL(anchor.href);
          url.searchParams.set("fbclid", fbclid);
          url.searchParams.set("utm_source", utmSource || "default_source");
          url.searchParams.set("utm_medium", utmMedium || "default_medium");
          url.searchParams.set("utm_campaign", utmCampaign || "default_campaign");
          url.searchParams.set("src", utmCampaign || "default_campaign");
          anchor.href = url.toString();
        } catch (error) {
          console.error("Failed to update fbclid on link", error);
        }
      });
    }
  }, []);


  return (
    <div className="min-h-screen bg-[url('/bg/grid-dark.png')] bg-cover bg-center text-white">
      <Navbar />
      <CountdownBanner />
      <Hero />
      <PainReliefSection />
      <Testimonials />
      <Features />
      <ProductShowcase />
      <Benefits />
      <CTA />
       <GuaranteeSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
