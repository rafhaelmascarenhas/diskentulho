import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
                <svg 
                  viewBox="0 0 448 512" 
                  className="w-4 h-4 fill-current" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
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
          <svg 
            viewBox="0 0 448 512" 
            className="w-6 h-6 fill-current" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span>Pedir pelo WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default Header;