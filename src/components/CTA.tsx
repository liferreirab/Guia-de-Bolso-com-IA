import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CTA = () => {
  // ---------- ESTADO DO POPUP ----------
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("55"); // padrão Brasil
  const [telefone, setTelefone] = useState("");

  const handleTelefoneChange = (e) => {
    // deixa a pessoa digitar livremente (com DDD, traços etc.)
    setTelefone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseUrl = "https://pay.hotmart.com/M87692618I";
    const params = new URLSearchParams();

    // parâmetros fixos do checkout
    params.set("off", "2bxvy15n");
    params.set("checkoutMode", "10");

    // junta código do país + telefone (com DDD dentro do campo telefone)
    const fullPhone = `${countryCode}${telefone}`.replace(/\D/g, "");

    params.set("name", nome);
    params.set("email", email);
    params.set("phone", fullPhone);

    const url = `${baseUrl}?${params.toString()}`;

    // UTM da URL (se houver)
    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get("utm_source") || "";
    const utmCampaign = searchParams.get("utm_campaign") || "";

    // 1) Enviar dados para a planilha (Apps Script)
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwlHU8ZsZ80WZ-vMC2ATi7hK9xXd0kFpS_wiau2cVLEMdWnkOXScazD9NBM1bAUHok/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // mandamos tudo que interessa para a planilha
          body: JSON.stringify({
            nome,
            email,
            countryCode,
            telefone,
            fullPhone,
            utmSource,
            utmCampaign,
          }),
          mode: "no-cors", // evita erro de CORS no navegador
        }
      );
    } catch (err) {
      console.error("Erro ao enviar lead para a planilha:", err);
    }

    // 2) Abrir checkout em nova aba
    const novaAba = window.open(url, "_blank", "noopener,noreferrer");
    if (novaAba) {
      novaAba.opener = null;
    }
  };

  return (
    <div
      id="cta"
      className="py-16 md:py-24 w-full bg-neon-black relative overflow-hidden"
    >
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
              <span className="text-neon-blue">Pronta Para Transformar Sua </span>
              <br className="hidden sm:block" />
              <span className="text-white">Criação de Conteúdo?</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              O Curso{" "}
              <span className="text-white font-semibold">IA para Redes Sociais</span>{" "}
              vai direto ao ponto e entrega tudo que você precisa para usar a
              Inteligência Artificial a seu favor e multiplicar seus resultados.
            </p>
          </div>

          {/* Box única centralizada */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-neon-pink font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-center">
              O Que Você Recebe:
            </h3>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="divide-y divide-white/10">
                {[
                  { name: "Aulas gravadas e práticas", price: "R$197" },
                  { name: "Modelos de prompts prontos", price: "R$97" },
                  { name: "Checklist e briefing prático", price: "R$97" },
                  { name: "Acesso às atualizações", price: "R$97" },
                  { name: "Suporte", price: "R$47" },
                  {
                    name: "Bônus: Template de Calendário Editorial Notion",
                    price: "R$47",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue flex-shrink-0" />
                      <span className="text-gray-200 text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-400 line-through text-sm sm:text-lg mt-1 sm:mt-0">
                      {item.price}
                    </span>
                  </div>
                ))}

                {/* Linha total */}
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
                    <span className="text-base sm:text-2xl align-top mr-1">
                      3x de
                    </span>{" "}
                    R$16,77
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

            {/* Botão de compra abre o POPUP */}
            <Button
              type="button"
              onClick={() => setIsOpen(true)}
              className="mt-6 w-full bg-neon-pink hover:bg-neon-pink/80 text-white py-5 sm:py-6 rounded-lg shadow-[0_0_15px_rgba(255,60,142,0.5)] transition-all hover:shadow-[0_0_25px_rgba(255,60,142,0.8)] flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <span>Liberar meu conteúdo agora!</span>
            </Button>

            <div className="mt-5 text-center text-white/60 text-[10px] sm:text-xs">
              🔒 Ambiente seguro • 💳 Cartão • Pix • Boleto
            </div>
          </div>

          {/* Rodapé */}
          <div className="text-center pt-6 border-t border-white/10 mt-10">
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Dúvidas? Entre em contato pelo email{" "}
              <span className="text-neon-cyan">contato@elifatima.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* POPUP DO CHECKOUT */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]">
          <div className="relative w-full max-w-md mx-4 rounded-2xl border border-white/10 bg-gradient-to-br from-neon-black via-slate-900 to-black p-[1px] shadow-[0_0_40px_rgba(0,200,255,0.35)]">
            <div className="rounded-2xl bg-slate-950/95 p-6 sm:p-7">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Você está prestes a liberar seu acesso exclusivo! 
              </h2>
              <p className="text-sm text-slate-200 mb-4">
                Preencha seus dados para continuar:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-neon-pink"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-neon-pink"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                {/* Código do país + telefone (com DDD dentro) */}
                <div className="flex gap-3">
                  <div className="w-28">
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Código do país
                    </label>
                    <input
                      type="text"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-neon-pink"
                      placeholder="55"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Telefone (com DDD)
                    </label>
                    <input
                      type="text"
                      value={telefone}
                      onChange={handleTelefoneChange}
                      required
                      className="w-full rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-neon-pink"
                      placeholder="1198888-7777"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 rounded-lg border border-slate-500 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-700/80 transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-lg bg-neon-pink px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(255,60,142,0.8)] hover:bg-neon-pink/90 transition-colors"
                  >
                    Finalizar meu pedido
                  </button>
                </div>

                <p className="mt-2 text-[10px] text-center text-slate-400">
                  Seus dados são usados apenas para o acesso ao curso.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTA;
