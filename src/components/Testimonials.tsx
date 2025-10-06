import React from 'react';
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';

const testimonials = [
  {
    id: 1,
    name: "Luciana",
    image: "/testimonials/25.png",
  },
  {
    id: 2,
    name: "Ayumi",
    image: "/testimonials/30.png",
  },
  {
    id: 3,
    name: "Hogna",
    image: "/testimonials/27.png",
  },
  {
    id: 4,
    name: "Laíza",
    image: "/testimonials/29.png",
  },
  {
    id: 5,
    name: "Glízia",
    image: "/testimonials/IMG_0859.jpg",
  }

];

const Testimonials = () => {
  
  return (
    <div id="benefits" className="py-24 w-full relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-neon-black z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40
          bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,60,142,0.3)_0%,transparent_70%),
          radial-gradient(ellipse_at_top_left,rgba(0,153,255,0.3)_0%,transparent_70%)]">
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Confira o depoimento de quem comprou</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center
                transition-all duration-300 hover:shadow-[0_0_25px_rgba(142,45,226,0.3)]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full max-w-xs sm:max-w-sm h-auto mb-4 object-cover rounded-lg border-2 border-neon-pink"
              />

              <h3 className="text-lg font-semibold text-white mb-2">{t.name}</h3>
            </div>
          ))}
        </div>
        {/* Call-to-action button */}
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
