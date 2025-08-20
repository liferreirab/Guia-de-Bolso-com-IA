
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';

const productFeatures = [
  'Em 1 hora você monta sua linha editorial do zero com uma aula direta e prática, sem enrolação',
  'Arquivo digital com prompts de alta performance',
  'Checklist de planejamento prático e modelo de briefing pronto para personalizar com as dores do seu público',
  'O que ninguém te ensina: como usar IA e ainda parecer 100% você',
  'Bônus: modelo de calendário de conteúdo'
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
            <span className="text-neon-blue neon-glow-blue">O que você recebe no Mini Curso: IA para Redes Sociais:</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup visual do produto */}
          <div className="flex justify-center">
            <div className="relative max-w-lg w-full">
              <img
                src="/product-showcase/mockup.png"
                alt="Mockup do Guia de Bolso - Criação de Conteúdo com IA"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-neon-pink/30 rounded-2xl blur-xl z-0"></div>
            </div>
          </div>

          {/* Lista de features */}
          <div className="space-y-6">
            {productFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-transparent glass-card border-0 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center">
                    <span className="text-neon-pink font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg">{feature}</p>
                  </div>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          className="bg-neon-pink hover:bg-neon-pink/80 text-white text-xl font-bold py-6 px-10 rounded-2xl 
          shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
          transition-transform duration-300 transform hover:scale-105 animate-pulse [animation-duration:3s]"
          onClick={scrollToCTA}
        >
          🔘 Quero meu Mini Curso agora
        </Button>
      </div>
    </div>
  );
};

export default ProductShowcase;
