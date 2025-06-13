import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { scrollToCTA } from '@/utils/scrollToCta';


const ScrollPopup = () => {
  const [show, setShow] = useState(false);
  
useEffect(() => {
  const dismissed = localStorage.getItem("popupDismissed");
  if (dismissed) return;

  const handleScroll = () => {
    if ((window as any).suppressPopup) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrolled = (scrollTop + windowHeight) / docHeight;

    if (scrolled > 0.6 && !show) {
      setShow(true);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [show]);

  
  useEffect(() => {
    if (show) {
      // Create the blur layer
      const blurLayer = document.createElement('div');
      blurLayer.id = 'popup-blur-overlay';
      blurLayer.style.position = 'fixed';
      blurLayer.style.top = '0';
      blurLayer.style.left = '0';
      blurLayer.style.width = '100vw';
      blurLayer.style.height = '100vh';
      blurLayer.style.zIndex = '40'; // below popup
      blurLayer.style.backdropFilter = 'blur(10px)';
      blurLayer.style.webkitBackdropFilter = 'blur(10px)';
      blurLayer.style.backgroundColor = 'rgba(0,0,0,0.3)';

      document.body.appendChild(blurLayer);

      // Lock scroll
      document.body.style.overflow = 'hidden';

      return () => {
        const existing = document.getElementById('popup-blur-overlay');
        if (existing) existing.remove();
        document.body.style.overflow = '';
      };
    } else {
      // Ensure blur layer is removed if manually toggled off
      const existing = document.getElementById('popup-blur-overlay');
      if (existing) existing.remove();
      document.body.style.overflow = '';
    }
  }, [show]);


  const handleClose = () => {
    setShow(false);
    localStorage.setItem("popupDismissed", "true");
  };

  const handleCTAClick = () => {
    scrollToCTA();
    setShow(false);
    localStorage.setItem("popupDismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-neon-black p-8 rounded-2xl max-w-md w-full text-white shadow-2xl border border-neon-pink">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-neon-pink hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold mb-4 text-gradient">
          VOCÊ ESTÁ A UM PASSO DE DESTRAVAR SEU CONTEÚDO COM IA!
        </h3>

        <p className="text-gray-300 mb-6">
          Não perca a oferta limitada com 70% desconto! Aproveite agora mesmo!
        </p>
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleCTAClick}
            className="block text-center bg-neon-pink hover:bg-neon-pink/80 text-white font-bold py-3 px-6 rounded-xl transition-all"
            aria-label="Close"
          >
            Quero meu guia!
          </button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          Checkut 100% Seguro • Garantia de 7 dias
        </p>
      </div>
    </div>
  );
};

export default ScrollPopup;
