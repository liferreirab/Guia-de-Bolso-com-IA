
import React from 'react';
import { Sparkles, Clock, RefreshCw, Lightbulb, BookOpen, Rocket } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: <Sparkles className="h-8 w-8 text-neon-pink" />,
    title: "Conteúdo Prático",
    description: "Material direto ao ponto com ferramentas práticas para usar hoje mesmo"
  },
  {
    id: 2,
    icon: <Clock className="h-8 w-8 text-neon-blue" />,
    title: "Economize Tempo",
    description: "Otimize sua rotina de criação com processos mais ágeis e inteligentes"
  },
  {
    id: 3,
    icon: <RefreshCw className="h-8 w-8 text-neon-purple" />,
    title: "Atualizações Gratuitas",
    description: "Acesso vitalício com todas as atualizações futuras sem custo adicional"
  },
  {
    id: 4,
    icon: <Lightbulb className="h-8 w-8 text-neon-cyan" />,
    title: "Ideias Criativas",
    description: "Supere bloqueios criativos com técnicas de geração de ideias com IA"
  },
  {
    id: 5,
    icon: <BookOpen className="h-8 w-8 text-neon-pink" />,
    title: "Tutoriais Claros",
    description: "Aprenda com tutoriais passo a passo mesmo que esteja começando agora"
  },
  {
    id: 6,
    icon: <Rocket className="h-8 w-8 text-neon-blue" />,
    title: "Resultados Imediatos",
    description: "Aplique as estratégias e veja transformações rápidas no seu conteúdo"
  }
];

const Benefits = () => {
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
            <span className="text-gradient">Por Que Escolher Este Guia?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Um conteúdo vivo que evolui com as tecnologias e entrega exatamente o que você precisa
            para criar conteúdo excepcional com a ajuda da IA.
          </p>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center
                transition-all duration-300 hover:shadow-[0_0_25px_rgba(142,45,226,0.3)]"
            >
              <div className="mb-4 p-3 rounded-full bg-white/5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
