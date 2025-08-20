
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <div id="cta" className="py-24 w-full bg-neon-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-neon-pink/20 blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-neon-blue/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl border border-white/10
          shadow-[0_0_30px_rgba(0,153,255,0.2)]">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-glow">
              <span className="text-gradient">Pronta Para Transformar Sua</span><br />
              <span className="text-white">Criação de Conteúdo?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              O Mini Curso: IA para Redes Sociais vai direto ao ponto e entrega tudo que você precisa 
              para usar a inteligência artificial a seu favor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-neon-pink font-bold text-xl mb-4">O Que Você Recebe:</h3>
              <ul className="space-y-3">
                {['Aulas gravadas', 'Acesso de qualquer lugar do mundo', 'Atualizações gratuitas durante seu acesso', 
                  'Tutoriais passo a passo', 'Modelos de prompts prontos', 'Suporte por email'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-neon-blue mr-2 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col justify-center bg-white/5 rounded-xl p-6">
              <div className="mb-4 text-center">
                <span className="text-gray-400 text-sm line-through">De R$97,00 por</span>
                <div className="text-3xl font-bold text-white">R$47</div>
                <span className="text-neon-cyan text-sm">Pagamento único</span>
              </div>
              
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white py-6 rounded-lg 
                shadow-[0_0_15px_rgba(255,60,142,0.5)] transition-all hover:shadow-[0_0_25px_rgba(255,60,142,0.8)]
                flex items-center justify-center gap-2 text-lg">
                <a 
                  href="https://pay.hotmart.com/M87692618I?checkoutMode=10&bid=1748529481625" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center gap-2"
                >
                  <span>Quero Meu Mini Curso Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <p className="text-gray-400 text-sm text-center mt-4">
                Acesso imediato após a confirmação do pagamento
              </p>
            </div>
          </div>
          
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-gray-300">
              Dúvidas? Entre em contato pelo email <span className="text-neon-cyan">contato@elifatima.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
