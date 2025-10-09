
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 bg-neon-black/80 backdrop-blur-lg shadow-md' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-gradient font-bold text-2xl">
              
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neon-black/95 backdrop-blur-lg p-4 absolute left-0 right-0 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollTo('features')} className="text-gray-300 hover:text-white p-2 cursor-pointer">
              Recursos
            </a>
            <a onClick={() => scrollTo('product')} className="text-gray-300 hover:text-white p-2 cursor-pointer">
              O Treinamento
            </a>
            <a onClick={() => scrollTo('benefits')} className="text-gray-300 hover:text-white p-2 cursor-pointer">
              Benefícios
            </a>
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white w-full">
              <a href="https://pay.hotmart.com/M87692618I?off=2bxvy15n&checkoutMode=10" className="w-full h-full">
                Comprar Agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
