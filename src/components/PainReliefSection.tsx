
import React from 'react';
import { Check } from 'lucide-react';

const PainReliefSection = () => {
  const benefits = [
    'Roteiros prontos',
    'Prompts que funcionam',
    'Exemplo de linha editorial real',
    'Entrega digital imediata'
  ];

  return (
    <div className="py-24 w-full bg-neon-black/95 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30
          bg-[radial-gradient(circle_at_20%_50%,rgba(255,60,142,0.3)_0%,transparent_70%),
          radial-gradient(circle_at_80%_50%,rgba(0,153,255,0.3)_0%,transparent_70%)]">
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-glow">
            <span className="text-gradient">Criar conteúdo ainda te trava?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Você não tem tempo pra sentar e "pensar em conteúdo".<br />
            Você precisa de direção — e de um atalho inteligente.
          </p>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <span className="text-white font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainReliefSection;
