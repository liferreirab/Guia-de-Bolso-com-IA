import React from 'react';
import { 
  Clock, 
  Target, 
  TrendingUp, 
  Sparkles, 
  Bot, 
  Infinity, 
  CalendarCheck, 
  FileText 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const PainReliefSection = () => {
  // Dados dos Cards (Copy corrigida e otimizada)
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: "Engenharia de Prompt",
      description: "Chega de respostas genéricas. Aprenda a fazer a IA entender e replicar o tom de voz exato do seu cliente (sem parecer robô)."
    },
    {
      icon: <Infinity className="w-8 h-8 text-purple-400" />,
      title: "Linha Editorial Infinita",
      description: "A técnica validada para extrair 30 dias de ideias inéditas a partir de um único tema pilar. Nunca mais sofra com bloqueio criativo."
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-pink-400" />,
      title: "Calendário Estratégico",
      description: "Não poste por postar. Organize as ideias em uma sequência lógica de consciência que gera engajamento e prepara para a venda."
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: "Legendas Prontas",
      description: "Modelos de copy que conectam e convertem. É só copiar, colar e adaptar. Menos esforço operacional, mais eficiência no dia a dia."
    }
  ];

  return (
    <div className="relative overflow-hidden w-full py-24 bg-black">
      {/* Background effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,60,142,0.15) 0%, transparent 70%), radial-gradient(circle at 80% 50%, rgba(0,153,255,0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        
        {/* --- SEÇÃO 1: A DOR (Topo) --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ganhe Tempo e Liberdade na Rotina
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-10">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Você senta para planejar o conteúdo do seu cliente e perde horas olhando para a tela? 
              Sente que gasta mais tempo criando o post do que gerenciando a estratégia?
            </p>

            {/* Bloco Visual "Processo" */}
            <div className="relative py-8 md:py-6">
              {/* Ícones Flutuantes */}
              <div className="absolute top-0 left-0 md:left-[10%] opacity-20 animate-pulse">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400 -rotate-12" />
              </div>
              <div className="absolute bottom-0 left-2 md:left-[15%] opacity-30">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-purple-400 rotate-12" />
              </div>
              <div className="absolute top-2 right-0 md:right-[10%] opacity-30">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-pink-400 -rotate-6" />
              </div>
              <div className="absolute bottom-4 right-4 md:right-[15%] opacity-40 animate-pulse delay-700">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-200" />
              </div>

              {/* Texto Central */}
              <div className="relative z-10 flex flex-col items-center justify-center px-4">
                <span className="text-gray-400 text-base md:text-lg mb-2 block text-center">
                  O problema não é falta de criatividade.
                </span>
                
                <div className="relative inline-block text-center">
                  <span className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                    É falta de um <br className="sm:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      processo.
                    </span>
                  </span>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-purple-500/20 blur-xl rounded-full"></div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Chega de entregar calendários com atraso ou passar o final de semana trabalhando 
              porque não conseguiu render na semana.
            </p>
          </div>
        </div>

        {/* --- SEÇÃO 2: A SOLUÇÃO (Grid de Cards) --- */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                {/* Glow interno no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  {/* Ícone com fundo brilhante */}
                  <div className="shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO 3: CTA --- */}
        <div className="text-center">
          <Button
            className="w-full max-w-full sm:w-auto sm:max-w-none mx-auto
              text-center whitespace-normal break-words
              bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500
              hover:from-blue-500/90 hover:to-purple-500/90 
              text-white text-base sm:text-lg font-semibold
              py-6 px-8 sm:px-12 rounded-2xl
              shadow-[0_0_20px_rgba(255,60,142,0.4)] hover:shadow-[0_0_35px_rgba(255,60,142,0.6)]
              transition-all duration-300 sm:hover:scale-105 h-auto"
          >
            <a href="#cta" className="block w-full">
              Quero dominar esse processo agora
            </a>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Acesso imediato • Garantia de 7 dias
          </p>
        </div>

      </div>
    </div>
  );
};

export default PainReliefSection;