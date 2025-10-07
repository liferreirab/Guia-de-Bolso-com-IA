
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';


const featuresList = [
  {
    id: 6,
    title: "Calendário Editorial",
    description: "Use modelos prontos de calendário editorial para planejar com clareza"
  },
  {
    id: 5,
    title: "Linha Editorial Inteligente",
    description: "Monte uma linha editorial com o apoio da IA para conteúdos consistentes"
  },
  {
    id: 4,
    title: "Rotina Organizada",
    description: "Tenha uma rotina de criação produtiva, com ferramentas que otimizam tempo"
  },
  {
    id: 2,
    title: "Prompts Perfeitos",
    description: "Aprenda a escrever prompts que geram resultados profissionais com agilidade"
  },
  {
    id: 3, 
    title: "Stories Criativos",
    description: "Produza stories estratégicos e criativos com IA, com muito mais facilidade"
  },
  {
    id: 1,
    title: "Fotos Hiper-Realistas",
    description: "Crie fotos profissionais com IA, mesmo sem experiência em tecnologia"
  }
];


const Features = () => {
  
  return (
    <div id="features" className="py-24 w-full bg-neon-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30
        bg-[radial-gradient(circle_at_10%_20%,rgba(142,45,226,0.4)_0%,transparent_50%),
        radial-gradient(circle_at_80%_70%,rgba(0,229,255,0.4)_0%,transparent_60%)]">
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block">
            <span className="text-gradient"> Para quem cansou de postar sem resultado!</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div 
              key={feature.id} 
              className="glass-card p-6 rounded-xl transition-all duration-300
                hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] group"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-neon-cyan mr-3 flex-shrink-0 
                  group-hover:text-neon-pink transition-colors" />
                <h3 className="text-xl font-bold text-white group-hover:text-gradient">{feature.title}</h3>
              </div>
              <p className="text-gray-300 pl-9">{feature.description}</p>
            </div>
          ))}
        </div>
              {/* Call-to-action button */}
      <div className="mt-16 flex justify-center">
        <Button
          className="bg-neon-pink hover:bg-neon-pink/80 text-white text-xl font-bold py-6 px-10 rounded-2xl 
          shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
          transition-transform duration-300 transform hover:scale-105 animate-pulse [animation-duration:3s]"
          onClick={scrollToCTA}
        >
          Quero Acessar Agora!
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Features;
