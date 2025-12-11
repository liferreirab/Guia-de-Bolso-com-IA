import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PainReliefSection = () => {
  const benefits = [
    'Processo guiado, sem enrolação',
    'Fluxo de trabalho com IA para máxima agilidade',
    'Rotina organizada para publicar com tranquilidade',
    'Menos esforço no dia a dia, mais eficiência'
  ];

  return (
    <div className="relative overflow-hidden w-full py-24 bg-black">
      {/* Background effect (seguro, sem classes custom) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(255,60,142,0.3) 0%, transparent 70%), radial-gradient(circle at 80% 50%, rgba(0,153,255,0.3) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Headline + copy */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ganhe Tempo e Liberdade na Rotina de Conteúdo
            </span>
          </h2>

          <div className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed space-y-3">
            <p>Pare de perder horas tentando ter ideias que nunca saem do papel.</p>
            <p>
              Aprenda um método prático para montar o briefing, definir a persona e
              organizar um mês inteiro de conteúdo em minutos.
            </p>
            <p>
              Assim, você ganha tempo, vence a procrastinação e foca no que importa:
              <span className="font-semibold text-white">
                {' '}crescer o perfil, gerar valor e atrair clientes certos.
              </span>
            </p>
          </div>

          <div className="mt-8 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400" />
        </div>

        {/* Lista de benefícios */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span className="text-white font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão de ação */}
        <div className="mt-12 text-center">
         <Button
  className="w-full max-w-full sm:w-auto sm:max-w-none mx-auto
             text-center whitespace-normal break-words
             bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500
             hover:from-blue-500/90 hover:to-purple-500/90 
             text-white text-base sm:text-lg font-semibold
             py-4 sm:py-5 px-4 sm:px-10 rounded-2xl
             shadow-[0_0_20px_rgba(255,60,142,0.5)] hover:shadow-[0_0_30px_rgba(255,60,142,0.7)]
             transition-transform duration-300 sm:hover:scale-105"
>
  <a
    href="#cta"
    className="block w-full text-center"
  >
    Quero ganhar tempo e resultados agora
  </a>
</Button>

        </div>
      </div>
    </div>
  );
};

export default PainReliefSection;
