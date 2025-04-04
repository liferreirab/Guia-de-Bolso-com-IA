
import React from 'react';
import { Card } from "@/components/ui/card";

const screenshots = [
  {
    id: 1,
    title: "Prompts de alta performance",
    description: "Exemplos de prompts que geram resultados profissionais",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Estratégias de conteúdo",
    description: "Planejamento inteligente para suas publicações",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Criação de imagens com IA",
    description: "Tutoriais passo a passo para criar visuais incríveis",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=500&q=80"
  }
];

const ProductShowcase = () => {
  return (
    <div id="product" className="py-24 w-full bg-neon-black/90 relative">
      {/* Background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
              opacity: Math.random() * 0.5 + 0.5
            }}
          ></div>
        ))}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i + 20}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-blue to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: 0,
              bottom: 0,
              opacity: Math.random() * 0.5 + 0.5
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon-blue neon-glow-blue">O Que Você Vai Encontrar</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ferramentas, exemplos, tutoriais e estratégias reais, para quem quer parar de travar na hora de criar 
            e começar a usar a IA como uma parceira no processo criativo.
          </p>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot) => (
            <Card 
              key={screenshot.id}
              className="bg-transparent overflow-hidden glass-card border-0 group"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-black via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-gray-300">{screenshot.description}</p>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
