
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrollToCTA } from '@/utils/scrollToCta';


const screenshots = [
  {
    id: 1,
    title: "Prompts de alta performance",
    description: "Domine a arte de conversar com a inteligência artificial e obtenha respostas precisas, criativas e alinhadas com seus objetivos.\nCom esses prompts estratégicos, você economiza tempo, desbloqueia ideias e transforma a IA em uma verdadeira aliada nos seus projetos.\n\n✔️ Estrutura validada\n✔️ Resultados rápidos\n✔️ Aplicável a diferentes nichos",
    image: "/product-showcase/prompts_alta_performance.png"
  }
  ,
  {
    id: 2,
    title: "Estratégias de conteúdo",
    description: "Pare de depender de bancos de imagem genéricos ou de profissionais caros. Descubra como criar imagens únicas, impactantes e 100% personalizadas usando inteligência artificial — mesmo que você não entenda nada de design.\n\n✅ Visual profissional em minutos\n✅ Estilo próprio e autêntico\n✅ Ferramentas mais utilizadas",
    image: "/product-showcase/estrategias_de_conteudo.png"
  },
  {
    id: 3,
    title: "Criação de imagens com IA",
    description: "Crie conteúdos com objetivo e resultado. Neste módulo, você vai aprender a planejar, organizar e executar conteúdos que conectam e convertem.\n\n✅ Estrutura estratégica para redes sociais\n✅ Prompts prontos e adaptáveis\n✅ Mais consistência, menos bloqueios criativos",
    image: "/product-showcase/criacao_imagens.png"
  }
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
            <span className="text-neon-blue neon-glow-blue">O Que Você Vai Encontrar</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ferramentas, exemplos, tutoriais e estratégias reais, para quem quer parar de travar na hora de criar
            e começar a usar a IA como uma parceira no processo criativo.
          </p>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot) => (
            <Card
              key={screenshot.id}
              className="bg-transparent overflow-hidden glass-card border-0 group"
            >
              <div className="w-full max-w-md">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="w-full h-auto object-contain transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                  {screenshot.title}
                </h3>
                <p className="whitespace-pre-line text-gray-300">{screenshot.description}</p>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          className="bg-neon-pink hover:bg-neon-pink/80 text-white text-xl font-bold py-6 px-10 rounded-2xl 
          shadow-[0_0_20px_rgba(255,60,142,0.6)] hover:shadow-[0_0_30px_rgba(255,60,142,0.9)] 
          transition-transform duration-300 transform hover:scale-105 animate-pulse [animation-duration:3s]"
          onClick={scrollToCTA}
        >
          Quero Meu Guia Agora!
        </Button>
      </div>

    </div>
  );
};

export default ProductShowcase;
