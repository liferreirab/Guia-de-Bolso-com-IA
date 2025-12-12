
import React from 'react';
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';

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
<div
  className="container relative z-10 flex flex-col lg:flex-row items-center justify-between 
    min-h-[80vh] lg:min-h-screen py-12 px-6 sm:px-8 md:px-10 lg:px-16"
>
  <div className="flex flex-col w-full lg:w-3/4 xl:w-4/5 mb-12 lg:mb-0 lg:pl-0 text-center lg:text-left">
    
    <h1 className="font-bold mb-8 leading-tight">
      {/* 1. Pré-headline ajustada: Menor, Uppercase e com espaçamento para elegância */}
      <span className="text-neon-pink font-extrabold tracking-wide uppercase block text-sm sm:text-base md:text-xl mb-4">
        Para Social Medias que valorizam seu tempo:
      </span>

      {/* 2. Headline Principal: Maior contraste e destaque no benefício */}
      <span className="text-white block text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        Crie uma Linha Editorial completa + Calendário de Posts estratégicos{' '}
        {/* Gradiente aplicado apenas na promessa final */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-neon-pink">
          em apenas 1 hora.
        </span>
      </span>
    </h1>

    <p className="text-gray-300 text-base sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
      Domine a Inteligência Artificial, ganhe velocidade e impressione seus clientes.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      {/* 3. Botão com texto maior e mais destaque */}
      <Button
        className="w-full sm:w-auto text-center whitespace-normal break-words 
          bg-neon-pink hover:bg-neon-pink/80 text-white text-lg sm:text-xl font-bold 
          py-6 px-8 sm:px-12 rounded-2xl 
          shadow-[0_0_25px_rgba(255,60,142,0.5)] 
          hover:shadow-[0_0_40px_rgba(255,60,142,0.8)] 
          transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 
          animate-pulse [animation-duration:3s]"
        onClick={scrollToCTA}
      >
        Quero destravar agora!
      </Button>
    </div>
  </div>
  
  
        {/* Imagem otimizada com preloading e formatos modernos */}
        <div className="relative max-w-md w-full animate-float">
          <picture>
            {/* Fallback para browsers que não suportam WebP */}
            <source
              srcSet="/lovable-uploads/e3ad022b-6398-4a75-a41a-9cd4376e8e7f.png"
              type="image/png"
            />
            <img
              src="/lovable-uploads/e3ad022b-6398-4a75-a41a-9cd4376e8e7f.png"
              alt="Criação de conteúdo com IA"
              className="rounded-2xl shadow-2xl z-10 relative w-full h-auto"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="400"
              height="600"
            />
          </picture>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-neon-pink/30 rounded-2xl 
            blur-xl z-0"></div>

          {/* Nota manuscrita */}
          <div className="absolute bottom-4 left-4 transform rotate-[-5deg] bg-white/90 px-3 py-1 rounded shadow-md z-20">
            <p className="text-neon-black font-handwriting text-lg md:text-xl">essa imagem foi 100% feita por IA!</p>
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
