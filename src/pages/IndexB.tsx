import React, { useEffect } from "react";
import Navbar from "@/components_b/Navbar";
import Hero from "@/components_b/Hero";
import PainReliefSection from "@/components_b/PainReliefSection";
import Features from "@/components_b/Features";
import ProductShowcase from "@/components_b/ProductShowcase";
import Benefits from "@/components_b/Benefits";
import Testimonials from "@/components_b/Testimonials";
import CountdownBanner from "@/components_b/CountdownBanner";
import CTA from "@/components_b/CTA";
import FAQ from "@/components_b/FAQ";
import Footer from "@/components_b/Footer";
import GuaranteeSection from "@/components_b/Guarantee";
import FloatingWhatsAppButton from "@/components_b/FloatingWhatsAppButton";

// Caso você já esteja usando ScrollPopup, pode manter. Se não usa, remova:
// import ScrollPopup from "../components/ScrollPopup";

const IndexB = () => {
  // Mantém apenas o efeito de UTM/FBCLID
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get("fbclid");
    const utmSource = urlParams.get("utm_source");
    const utmMedium = urlParams.get("utm_medium");
    const utmCampaign = urlParams.get("utm_campaign");

    if (fbclid) {
      const checkoutLinks = document.querySelectorAll(
        'a[href*="pay.hotmart.com"]'
      );
      checkoutLinks.forEach((link) => {
        try {
          const url = new URL(link.href);
          url.searchParams.set("fbclid", fbclid);
          url.searchParams.set("utm_source", utmSource || "default_source");
          url.searchParams.set("utm_medium", utmMedium || "default_medium");
          url.searchParams.set(
            "utm_campaign",
            utmCampaign || "default_campaign"
          );
          url.searchParams.set("src", utmCampaign || "default_campaign");
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

      {/* Aqui está o seu CTA, agora já com o POPUP embutido! */}
      <CTA />

      <GuaranteeSection />
      <FAQ />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default IndexB;
