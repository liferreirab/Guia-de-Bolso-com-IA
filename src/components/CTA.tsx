import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <div id="cta" className="py-16 md:py-24 w-full bg-neon-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-64 -right-64 w-80 h-80 md:w-96 md:h-96 rounded-full bg-neon-pink/20 blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-80 h-80 md:w-96 md:h-96 rounded-full bg-neon-blue/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,153,255,0.2)]">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <span className="text-neon-blue">Pronta Para Transformar Sua </span><br className="hidden sm:block" />
              <span className="text-white">Criação de Conteúdo?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              O Curso <span className="text-white font-semibold">IA para Redes Sociais</span> vai direto ao ponto e entrega tudo que você precisa 
              para usar a Inteligência Artificial a seu favor e multiplicar seus resultados.
            </p>
          </div>
          
          {/* Box única centralizada (mantendo a ancoragem) */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-neon-pink font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
              O Que Você Recebe:
            </h3>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="divide-y divide-white/10">
                {[
                  { name: 'Aulas gravadas e práticas', price: 'R$197' },
                  { name: 'Modelos de prompts prontos', price: 'R$97' },
                  { name: 'Checklist e briefing prático', price: 'R$97' },
                  { name: 'Acesso às atualizações', price: 'R$97' },
                  { name: 'Suporte', price: 'R$47' },
                  { name: 'Bônus: Template de Calendário Editorial Notion', price: 'R$47' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue flex-shrink-0" />
                      <span className="text-gray-200 text-sm sm:text-base">{item.name}</span>
                    </div>
                    <span className="text-gray-400 line-through text-sm sm:text-lg mt-1 sm:mt-0">
                      {item.price}
                    </span>
                  </div>
                ))}

                {/* Linha total (riscar e deixar apagado) */}
                <div className="bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-purple-500/20">
                  <div className="flex flex-row justify-center items-center gap-2 text-center p-4 sm:p-5">
                    <span className="text-white font-semibold text-base sm:text-xl">
                      Valor Total
                    </span>
                    <span className="text-white/60 line-through font-bold text-xl sm:text-3xl">
                      R$582
                    </span>
                  </div>
                </div>

                {/* Preço promocional + à vista */}
                <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-center py-5 sm:py-6">
                  <p className="text-white text-base sm:text-xl mb-1 font-medium">
                    Mas hoje você paga apenas
                  </p>
                  <p className="text-white font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] animate-pulse [animation-duration:3s] text-3xl sm:text-5xl">
                    <span className="text-base sm:text-2xl align-top mr-1">3x de</span> R$16,77
                  </p>
                  <p className="text-white/90 text-sm sm:text-base mt-2 font-semibold">
                    ou à vista <span className="text-white">R$47</span>
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">
                    Acesso completo e imediato ao Treinamento
                  </p>
                </div>
              </div>
            </div>

            {/* Botão de compra logo abaixo da box */}
            <Button
              className="mt-6 w-full bg-neon-pink hover:bg-neon-pink/80 text-white py-5 sm:py-6 rounded-lg 
                shadow-[0_0_15px_rgba(255,60,142,0.5)] transition-all hover:shadow-[0_0_25px_rgba(255,60,142,0.8)]
                flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <a 
                href="https://pay.hotmart.com/M87692618I?off=2bxvy15n" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center gap-2"
              >
                <span>Liberar meu conteúdo agora!</span>
               
              </a>
            </Button>

            {/* provas de confiança (opcional manter) */}
         

            <div className="mt-5 text-center text-white/60 text-[10px] sm:text-xs">
              🔒 Ambiente seguro • 💳 Cartão • Pix • Boleto
            </div>
          </div>

          {/* Rodapé */}
          <div className="text-center pt-6 border-t border-white/10 mt-10">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Dúvidas? Entre em contato pelo email <span className="text-neon-cyan">contato@elifatima.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
