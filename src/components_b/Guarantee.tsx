import { ShieldCheck, Check } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="w-full bg-neon-black py-16 sm:py-28 relative overflow-hidden">
      {/* Glows iguais ao CTA, otimizados no mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-64 -right-64 w-64 h-64 md:w-96 md:h-96 rounded-full bg-neon-pink/20 blur-3xl" />
        <div className="absolute -bottom-64 -left-64 w-64 h-64 md:w-96 md:h-96 rounded-full bg-neon-blue/20 blur-3xl" />
        {/* Spotlight central com altura menor no mobile */}
        <div className="absolute inset-0 mx-auto max-w-3xl h-[420px] md:h-[600px] opacity-40
                        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),rgba(0,0,0,0)_60%)]" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Badge topo */}
        <div className="w-full flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium
                           bg-gradient-to-r from-blue-500/30 via-pink-500/30 to-purple-500/30 text-white border border-white/10
                           shadow-[0_0_16px_rgba(255,60,142,0.35)]">
            ✅ Sem risco • Garantia de 7 dias
          </span>
        </div>

        {/* Card com borda em gradiente */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-neon-blue/60 via-neon-pink/60 to-purple-500/60
                          shadow-[0_0_28px_rgba(0,153,255,0.25),0_0_28px_rgba(255,60,142,0.15)]">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-5 sm:px-10 py-10 sm:py-12">
              {/* Selo */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-neon-blue/20 blur-xl" />
                  <div className="relative bg-white/10 border border-white/15 rounded-full p-3.5 sm:p-4">
                    <ShieldCheck className="w-11 h-11 sm:w-14 sm:h-14 text-neon-blue" />
                  </div>
                </div>
              </div>

              {/* Título */}
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Garantia Incondicional de 7 Dias
              </h2>

              {/* Subtítulo */}
              <p className="mt-4 text-center text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Experimente o curso completo, sem medo. Se dentro de 7 dias você sentir que não é pra você,
                devolvemos <span className="text-white font-semibold">100% do valor</span> — sem burocracia e sem perguntas.
              </p>

              {/* Bullets de confiança */}
              <ul className="mt-8 flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-4 text-sm sm:text-base">
                <li className="flex items-center gap-2 justify-center sm:justify-start text-gray-200">
                  <Check className="w-5 h-5 text-neon-blue" /> Reembolso total
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start text-gray-200">
                  <Check className="w-5 h-5 text-neon-blue" /> Sem letras miúdas
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start text-gray-200">
                  <Check className="w-5 h-5 text-neon-blue" /> Compra segura (Hotmart)
                </li>
              </ul>

              {/* CTA secundário */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://pay.hotmart.com/M87692618I?off=2bxvy15n&checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg
                             bg-neon-pink text-white font-semibold shadow-[0_0_16px_rgba(255,60,142,0.45)]
                             hover:bg-neon-pink/85 transition-colors text-sm sm:text-base"
                >
                  Quero testar sem riscos
                </a>
              </div>

              {/* Rodapé mini-infos */}
              <div className="mt-5 text-center text-white/60 text-xs">
                🔒 Ambiente seguro • 💳 Cartão • Pix • Boleto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;