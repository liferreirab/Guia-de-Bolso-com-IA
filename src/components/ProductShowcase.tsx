import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';
import { Gift } from 'lucide-react';

const productFeatures = [
  'Em 1 hora você monta sua linha editorial do zero com uma aula direta e prática, sem enrolação',
  'Arquivo digital com prompts de alta performance',
  'Checklist de planejamento prático e modelo de briefing pronto para personalizar com as dores do seu público',
  'O que ninguém te ensina: como usar IA e ainda parecer 100% você'
];

const ProductShowcase = () => {
  return (
    <div id="product" className="py-16 md:py-24 w-full bg-neon-black/90 relative">
      {/* Background lines — escondido no mobile para performance */}
      <div className="absolute inset-0 overflow-hidden opacity-10 hidden md:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent"
            style={{ top: `${Math.random() * 100}%`, left: 0, right: 0, opacity: Math.random() * 0.5 + 0.5 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i + 20}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-blue to-transparent"
            style={{ left: `${Math.random() * 100}%`, top: 0, bottom: 0, opacity: Math.random() * 0.5 + 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="text-neon-blue">O que você recebe no Mini Curso: IA para Redes Sociais:</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 mx-auto mt-4 sm:mt-6 rounded-full" />
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mockup visual (primeiro no mobile) */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <img
                src="/product-showcase/mockup.png"
                alt="Mockup do Guia de Bolso - Criação de Conteúdo com IA"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
                width={900}
                height={1200}
                sizes="(max-width: 768px) 90vw, 600px"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-neon-pink/30 rounded-2xl blur-xl z-0" />
            </div>
          </div>

          {/* Lista de features (vem depois no mobile para dar contexto) */}
          <div className="order-2 lg:order-none space-y-4 sm:space-y-6">
            {productFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-transparent glass-card border-0 p-5 sm:p-6 relative group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neon-pink/20 flex items-center justify-center">
                    <span className="text-neon-pink font-bold text-xs sm:text-sm">{index + 1}</span>
                  </div>
                  <p className="text-white font-medium text-base sm:text-lg leading-relaxed">
                    {feature}
                  </p>
                </div>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            ))}
          </div>
        </div>

        {/* BÔNUS DESTACADO */}
        <div className="mt-10 md:mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 via-pink-500/10 to-purple-500/10" />
            <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider px-2 py-1 rounded-md bg-white/10 text-white/80">
                  Bônus Exclusivo — Só nesta turma
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
                  Template de Calendário Editorial — <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Para você copiar e colar!</span>
                </h3>
                <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
                  Economize tempo e mantenha consistência desde o primeiro dia.
                </p>
              </div>

              <div className="w-full md:w-auto">
                <Button
                  className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-500/90 hover:to-pink-500/90 text-white font-semibold px-5 py-5 md:px-6 md:py-6 rounded-xl motion-safe:transition-all"
                  onClick={scrollToCTA}
                >
                  Garantir com o Bônus
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA principal */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <Button
            className="w-full sm:w-auto bg-neon-pink hover:bg-neon-pink/80 text-white text-lg sm:text-xl font-bold py-5 sm:py-6 px-6 sm:px-10 rounded-2xl shadow-[0_0_16px_rgba(255,60,142,0.45)] hover:shadow-[0_0_26px_rgba(255,60,142,0.7)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
            onClick={scrollToCTA}
          >
            Quero meu acesso!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
