import React from "react";

const FloatingWhatsAppButton = () => {
  const whatsappNumber = "17784031396";
  const message = encodeURIComponent(
    "Oi! Tenho uma dúvida sobre o curso IA para Redes Sociais."
  );
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = () => {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.opener = null;
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 99999,
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 18px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          backgroundImage:
            "linear-gradient(135deg, #ec4899, #8b5cf6)", // rosa/roxo neon
          boxShadow: "0 0 22px rgba(236, 72, 153, 0.7)",
        }}
      >
        {/* bolinha estilo WhatsApp */}
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 12px rgba(37,211,102,0.9)",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "18px" }}>💬</span>
        </div>

        {/* textos */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "#f9fafb",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Falar com suporte
          </span>
          <span
            style={{
              color: "#e5e7eb",
              fontSize: "11px",
              lineHeight: 1.2,
            }}
          >
            Tirar dúvidas no WhatsApp
          </span>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsAppButton;
