
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neon-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-gradient font-bold text-2xl mb-2">Guia de Bolso</h3>
            <p className="text-gray-400">Criação de Conteúdo com IA</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-2">
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-neon-blue">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-neon-blue">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
