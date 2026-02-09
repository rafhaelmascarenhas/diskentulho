import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Otimização de link do WhatsApp para mobile e desktop
  const phoneNumber = "5537998136323";
  const message = encodeURIComponent("Olá! Preciso de uma caçamba. Poderia me passar os valores?");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Efeito de scroll para mudar a cor do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Top Hazard Stripe - Apenas visível quando não scrollado para dar um toque industrial */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-brand-yellow transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center font-bold text-xl text-brand-dark rounded-lg shadow-lg group-hover:scale-110 transition-transform">D</div>
              <span className="text-xl md:text-2xl font-black text-white tracking-tight group-hover:text-brand-yellow transition-colors">
                DISK<span className="text-brand-yellow">ENTULHO</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-300">
              <a href="#modelos" className="hover:text-brand-yellow hover:scale-105 transition-all">Nossas Caçambas</a>
              <a href="#por-que-nos" className="hover:text-brand-yellow hover:scale-105 transition-all">Vantagens</a>
              <a href="#como-funciona" className="hover:text-brand-yellow hover:scale-105 transition-all">Como Funciona</a>
              <a href="#regiao" className="hover:text-brand-yellow hover:scale-105 transition-all">Área de Atuação</a>
            </nav>

            {/* CTA Buttons Group */}
            <div className="flex items-center gap-4">
              {/* Phone Number (Hidden on mobile) */}
              <a href={`tel:${phoneNumber}`} className="hidden xl:flex items-center gap-2 text-white hover:text-brand-yellow transition-colors font-bold text-sm">
                <Phone size={16} className="text-brand-yellow" />
                (37) 99813-6323
              </a>

              {/* WhatsApp Button */}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold py-2.5 px-5 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pedir Agora</span>
              </a>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white hover:text-brand-yellow transition-colors p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-xl font-bold text-white">
          <a href="#modelos" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Nossas Caçambas</a>
          <a href="#por-que-nos" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Vantagens</a>
          <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Como Funciona</a>
          <a href="#regiao" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-yellow transition-colors">Área de Atuação</a>
        </nav>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl shadow-lg w-3/4 justify-center"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>Pedir pelo WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default Header;