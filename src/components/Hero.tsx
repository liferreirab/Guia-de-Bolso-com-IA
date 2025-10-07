
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
  <div className="flex flex-col w-full lg:w-1/2 xl:w-3/5 mb-12 lg:mb-0 lg:pl-10 text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
      <span className="text-white block">
        Crie conteúdos estratégicos que geram mais engajamento, mais clientes e mais faturamento.
      </span>
      <span className="text-neon-pink text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 block">
        Pare de desperdiçar horas tentando adivinhar o que postar.
      </span>
    </h1>

    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
      Aprenda o método que usa Inteligência Artificial para planejar 
      <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">
        {' '}30 dias de conteúdo estratégico em menos de 1 hora
      </span>, atrair clientes certos e transformar redes sociais em uma fonte previsível de lucro.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        className="w-full sm:w-auto text-center whitespace-normal break-words 
          bg-neon-pink hover:bg-neon-pink/80 text-white text-sm sm:text-base font-bold 
          py-5 px-6 sm:px-10 rounded-2xl shadow-[0_0_20px_rgba(255,60,142,0.6)] 
          hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] transition-transform duration-300 
          transform hover:scale-105 animate-pulse [animation-duration:3s]"
        onClick={scrollToCTA}
      >
        Quero destravar meu conteúdo agora!
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
