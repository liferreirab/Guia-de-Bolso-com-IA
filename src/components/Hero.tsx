
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background com efeito de gradiente */}
      <div className="absolute inset-0 bg-neon-black z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-75 
          bg-[radial-gradient(circle_at_30%_20%,rgba(0,153,255,0.4)_0%,transparent_50%),
          radial-gradient(circle_at_70%_65%,rgba(255,60,142,0.4)_0%,transparent_50%)]">
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between 
        min-h-screen py-12 px-4">
        
        {/* Texto */}
        <div className="flex flex-col max-w-xl mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-glow">
            <span className="text-gradient">Guia de Bolso:</span><br />
            <span className="text-white">Criação de Conteúdo com IA</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Um material prático, estratégico e em constante atualização para social medias, 
            criadoras de conteúdo e empreendedoras que querem usar a inteligência 
            artificial como aliada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white py-6 px-8 rounded-xl 
              shadow-[0_0_15px_rgba(255,60,142,0.5)] transition-all hover:shadow-[0_0_25px_rgba(255,60,142,0.8)]">
              <a href="https://pay.hotmart.com/M87692618I?bid=1743367203678" className="w-full h-full">
                Quero Meu Guia Agora!
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue py-6 px-8 rounded-xl 
              hover:bg-neon-blue/20 shadow-[0_0_10px_rgba(0,153,255,0.3)] transition-all 
              hover:shadow-[0_0_20px_rgba(0,153,255,0.6)]"
              onClick={scrollToBenefits}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        {/* Imagem otimizada com preloading e formatos modernos */}
        <div className="relative max-w-md w-full animate-float">
          <picture>
            {/* WebP format for modern browsers */}
            <source 
              srcSet="/lovable-uploads/e3ad022b-6398-4a75-a41a-9cd4376e8e7f.webp" 
              type="image/webp" 
            />
            {/* Fallback para browsers que não suportam WebP */}
            <img 
              src="/lovable-uploads/e3ad022b-6398-4a75-a41a-9cd4376e8e7f.png"
              alt="Criação de conteúdo com IA" 
              className="rounded-2xl shadow-2xl z-10 relative w-full h-auto"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="400"
              height="600"
            />
          </picture>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-neon-pink/30 rounded-2xl 
            blur-xl z-0"></div>
            
          {/* Nota manuscrita */}
          <div className="absolute bottom-4 left-4 transform rotate-[-5deg] bg-white/90 px-3 py-1 rounded shadow-md z-20">
            <p className="text-neon-black font-handwriting text-xl md:text-2xl">essa imagem foi 100% feita por IA!</p>
          </div>
        </div>
      </div>
      
      {/* Decoração */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        <div className="w-24 h-1 rounded-full bg-neon-pink"></div>
        <div className="w-6 h-1 rounded-full bg-neon-blue"></div>
        <div className="w-3 h-1 rounded-full bg-neon-purple"></div>
      </div>
    </div>
  );
};

export default Hero;
