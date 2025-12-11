import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Luciana", image: "/testimonials/25.png" },
  { id: 2, name: "Ayumi", image: "/testimonials/30.png" },
  { id: 3, name: "Hogna", image: "/testimonials/27.png" },
  { id: 4, name: "Laíza", image: "/testimonials/29.png" },
  { id: 5, name: "Glízia", image: "/testimonials/IMG_0859.jpg" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detectar tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(1); // Mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerPage;
      // Volta ao início se chegar no fim
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [itemsPerPage]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerPage;
      // Vai pro final se estiver no início
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Aumentei para 4s para dar tempo de ler prints
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div id="testimonials" className="py-24 w-full relative overflow-hidden bg-neon-black">
      
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40
          bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,60,142,0.3)_0%,transparent_70%),
          radial-gradient(ellipse_at_top_left,rgba(0,153,255,0.3)_0%,transparent_70%)]">
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Veja com seus próprios olhos o que as alunas falam:</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CARROSSEL WRAPPER */}
        <div 
          className="relative max-w-6xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Botão Anterior */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 
              bg-black/50 hover:bg-neon-pink p-2 rounded-full text-white transition-all
              border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Janela de Visualização */}
          <div className="overflow-hidden rounded-xl py-4"> {/* py-4 adicionado para sombra não cortar */}
            <div 
              className="flex transition-transform duration-500 ease-in-out items-start" // items-start alinha prints de tamanhos diferentes pelo topo
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  className="flex-shrink-0 px-3 box-border"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="glass-card p-4 rounded-xl flex flex-col items-center text-center h-full
                    border border-white/10 bg-white/5 backdrop-blur-md hover:border-neon-pink/50 transition-colors">
                    
                    {/* AQUI ESTÁ A MUDANÇA: 
                       Removemos 'aspect-ratio', 'object-cover' e altura fixa.
                       Usamos 'w-full h-auto' para a imagem se ajustar naturalmente.
                    */}
                    <div className="w-full mb-4 relative rounded-lg overflow-hidden border-2 border-neon-pink/30">
                       <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-auto object-contain" // Garante que a imagem inteira apareça
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-white">{t.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Próximo */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 
              bg-black/50 hover:bg-neon-pink p-2 rounded-full text-white transition-all
              border border-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length - itemsPerPage + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                  ${currentIndex === idx ? "bg-neon-pink w-6" : "bg-gray-600 hover:bg-gray-400"}`}
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            className="w-full max-w-full sm:w-auto mx-auto 
              bg-neon-pink hover:bg-neon-pink/80 
              text-white text-base sm:text-xl font-bold 
              py-5 sm:py-6 px-4 sm:px-10 rounded-2xl 
              text-center whitespace-normal break-words 
              shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
              transition-transform duration-300 sm:hover:scale-105 
              animate-pulse [animation-duration:3s]"
            onClick={scrollToCTA}
          >
            Garantir minha vaga com o bônus!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;