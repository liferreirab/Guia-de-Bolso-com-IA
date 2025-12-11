import React from 'react';
import { Sparkles, Clock, RefreshCw, Lightbulb, BookOpen, Rocket } from 'lucide-react';
import { scrollToCTA } from '@/utils/scrollToCta';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    id: 1,
    icon: <Sparkles className="h-6 w-6 text-white" />,
    color: "bg-neon-pink",
    title: "Implementação \"Vapt-Vupt\"",
    description: "Nada de teorias longas. Você recebe acesso instantâneo e já sai do primeiro módulo com o planejamento do seu cliente pronto."
  },
  {
    id: 2,
    icon: <Clock className="h-6 w-6 text-white" />,
    color: "bg-neon-blue",
    title: "Aumente seu Valor/Hora",
    description: "Ao reduzir o tempo operacional de 10h para 1h, você sobra tempo para atender mais clientes e faturar mais."
  },
  {
    id: 3,
    icon: <RefreshCw className="h-6 w-6 text-white" />,
    color: "bg-neon-purple",
    title: "Funciona pra Qualquer Nicho",
    description: "De estética a advocacia. A estrutura dos prompts é universal: basta preencher as variáveis e ter conteúdo pronto para qualquer cliente."
  },
  {
    id: 4,
    icon: <Lightbulb className="h-6 w-6 text-white" />,
    color: "bg-neon-cyan",
    title: "Fim do Bloqueio Criativo",
    description: "Nunca mais encare uma tela em branco. Tenha um banco de ideias infinito para qualquer nicho de mercado."
  },
  {
    id: 5,
    icon: <BookOpen className="h-6 w-6 text-white" />,
    color: "bg-neon-pink",
    title: "Didática \"Zero Enrolação\"",
    description: "Aulas curtas e diretas. Respeitamos o seu tempo: é assistir e partir para a execução imediata."
  },
  {
    id: 6,
    icon: <Rocket className="h-6 w-6 text-white" />,
    color: "bg-neon-blue",
    title: "Diferencial Competitivo",
    description: "Enquanto concorrentes gastam dias planejando, você entrega calendários estratégicos em minutos e encanta clientes."
  }
];

const Benefits = () => {
  return (
    <div id="benefits" className="py-20 md:py-24 w-full relative overflow-hidden bg-black/40">
      
      {/* Background effect - Mais sutil para focar no texto */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none
        bg-[radial-gradient(circle_at_center,rgba(142,45,226,0.15)_0%,transparent_70%)]">
      </div>
      
      <div className="container mx-auto px-5 md:px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Por que esse é o <span className="text-gradient">melhor investimento</span><br className="hidden md:block"/> para o seu negócio hoje?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Tenha acesso a um sistema de implementação rápida desenhado para quem não tem tempo a perder.
          </p>
        </div>
        
        {/* Grid Layout - Mudança para 2 Colunas e Cards Horizontais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 
                hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5"
            >
              {/* Icon Container with dynamic glow */}
              <div className={`flex-shrink-0 p-3 rounded-xl ${benefit.color} shadow-lg shadow-${benefit.color.replace('bg-', '')}/20 
                group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Text Content - Alinhado à esquerda */}
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 flex justify-center">
          <Button
            className="w-full md:w-auto bg-neon-pink hover:bg-neon-pink/80 text-white text-lg font-bold py-6 px-12 rounded-xl 
            shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
            transition-all duration-300 hover:-translate-y-1"
            onClick={scrollToCTA}
          >
            Quero meu acesso agora
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Benefits;