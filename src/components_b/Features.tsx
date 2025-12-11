import React from 'react';
import { 
  Clapperboard, 
  Smartphone, 
  Image as ImageIcon, 
  AtSign, 
  Layers, 
  ClipboardCheck 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';

const featuresList = [
  {
    id: 1,
    title: "Roteiros de Reels Virais",
    description: "Não fique só no texto. Receba scripts prontos para vídeos curtos que aumentam o alcance do perfil.",
    icon: Clapperboard
  },
  {
    id: 2,
    title: "Sequências de Stories",
    description: "Estratégias de narrativa para prender a atenção nos stories e transformar seguidores em fãs.",
    icon: Smartphone
  },
  {
    id: 3,
    title: "Gerador de Imagens",
    description: "Chega de fotos repetidas. Comandos para criar imagens exclusivas que destacam o feed.",
    icon: ImageIcon
  },
  {
    id: 4,
    title: "Biografias que Convertem",
    description: "Aprenda a usar a IA para criar Bios estratégicas e atraentes em segundos. A vitrine perfeita.",
    icon: AtSign
  },
  {
    id: 5,
    title: "Carrosséis Educativos",
    description: "Estruturas prontas para criar posts de 'arraste para o lado' que geram salvamentos e autoridade.",
    icon: Layers
  },
  {
    id: 6,
    title: "Checklist de Rotina",
    description: "O passo a passo operacional para você produzir e agendar tudo sem esquecer nenhum detalhe.",
    icon: ClipboardCheck
  }
];

const Features = () => {
  return (
    <div id="features" className="py-20 md:py-24 w-full bg-neon-black relative overflow-hidden">
      
      {/* Background decorations (Mobile optimized opacity) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 md:opacity-30 pointer-events-none
        bg-[radial-gradient(circle_at_10%_20%,rgba(142,45,226,0.4)_0%,transparent_50%),
        radial-gradient(circle_at_80%_70%,rgba(0,229,255,0.4)_0%,transparent_60%)]">
      </div>
      
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 inline-block leading-tight">
            Além da estratégia, ferramentas para <br className="hidden md:block" />
            <span className="text-gradient"> todos os formatos:</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-blue-pink mx-auto rounded-full"></div>
        </div>
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresList.map((feature) => (
            <div 
              key={feature.id} 
              className="glass-card bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl transition-all duration-300
                hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

              <div className="flex items-start mb-4 relative z-10">
                <div className="p-3 rounded-lg bg-white/5 mr-4 group-hover:bg-neon-cyan/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-neon-cyan group-hover:text-neon-pink transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 mt-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-[3.25rem]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Button
            className="w-full md:w-auto bg-neon-pink hover:bg-neon-pink/80 text-white text-lg md:text-xl font-bold py-6 px-10 rounded-xl 
            shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
            transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={scrollToCTA}
          >
            Quero Acessar Agora
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Features;