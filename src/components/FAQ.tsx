import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Quanto tempo terei acesso ao conteúdo?",
    answer: "Você terá acesso completo ao conteúdo por 6 meses, incluindo todas as atualizações durante esse período."
  },
  {
    question: "Preciso ter experiência prévia como social media para aproveitar o material?",
    answer: "Não! O conteúdo foi pensado para ser acessível mesmo para quem está começando, com uma abordagem prática e clara."
  },
  {
    question: "Posso assistir no celular ou tablet?",
    answer: "Sim, todo o material está disponível na plataforma Hotmart que é uma plataforma responsiva e pode ser acessado de qualquer dispositivo."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, é só pedir reembolso. Sem perguntas, sem complicações."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-24 w-full relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-neon-black z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40
          bg-[radial-gradient(ellipse_at_top_right,rgba(255,60,142,0.3)_0%,transparent_70%),
          radial-gradient(ellipse_at_bottom_left,rgba(0,153,255,0.3)_0%,transparent_70%)]">
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Perguntas Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-blue-pink mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl text-white cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-neon-pink" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neon-pink" />
                )}
              </div>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.p
                    className="text-gray-300 mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
