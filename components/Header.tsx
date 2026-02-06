import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark shadow-md">
      {/* Top Hazard Stripe */}
      <div className="h-2 w-full hazard-stripe"></div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center font-bold text-brand-dark rounded">D</div>
            <span className="text-xl font-bold text-brand-yellow tracking-wider">DISKENTULHO</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <span className="text-gray-500 italic hidden xl:block">Não se trata de uma questão de...</span>
            <a href="#modelos" className="hover:text-brand-yellow transition-colors">Caçambas</a>
            <a href="#por-que-nos" className="hover:text-brand-yellow transition-colors">Por que nós</a>
            <a href="#como-funciona" className="hover:text-brand-yellow transition-colors">Como funciona</a>
            <a href="#regiao" className="hover:text-brand-yellow transition-colors">Região</a>
          </nav>

          {/* CTA Button */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green hover:bg-[#1da851] text-white text-sm font-bold py-2 px-4 rounded transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;