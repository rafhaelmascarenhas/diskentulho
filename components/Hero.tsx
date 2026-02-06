import React from 'react';
import { MessageCircle, ArrowDown, Timer, DollarSign, UserCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

  return (
    <section className="relative w-full bg-brand-dark pt-32 pb-48 md:pb-32 lg:pb-40 overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="desktop.webp" 
          alt="Obra de construção" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-brand-yellow/30 bg-brand-yellow/10">
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
          <span className="text-xs font-bold tracking-wider text-brand-yellow uppercase">Localização de Caçambas em Divinópolis</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          Caçamba entregue e retirada <br className="hidden md:block" />
          no prazo. <span className="text-brand-yellow">Sem dor de cabeça <br className="hidden md:block" /> na sua obra.</span>
        </h1>
        
        {/* Subhead */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light">
          Caçambas de 5m³ e 5,7m³ para obras, reformas e limpezas. <br className="hidden md:block" />
          Entrega rápida, retirada no prazo e descarte legal.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-[#1da851] text-white font-bold text-lg py-3 px-8 rounded shadow-lg transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
          <a 
            href="#modelos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-brand-dark hover:bg-gray-100 font-bold text-lg py-3 px-8 rounded shadow-lg transition-transform hover:-translate-y-1"
          >
            Ver Caçambas
          </a>
        </div>
      </div>

      {/* Bottom Floating Info Boxes */}
      <div className="relative z-20 container mx-auto px-4 mt-8 md:-mt-10 lg:-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl">
          
          {/* Box 1 */}
          <div className="bg-brand-yellow/90 backdrop-blur-sm p-8 text-center md:text-left md:border-r border-brand-dark/10 flex flex-col items-center md:items-start group hover:bg-brand-yellow transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-brand-dark mb-1 flex items-center gap-2">
              <Timer className="w-5 h-5" /> Entrega
            </h3>
            <p className="text-brand-dark/80 text-sm">Caçamba no local sem atrasar sua obra</p>
          </div>

          {/* Box 2 */}
          <div className="bg-brand-dark/95 backdrop-blur-sm p-8 text-center md:text-left md:border-r border-white/10 flex flex-col items-center md:items-start relative overflow-hidden">
             <div className="absolute inset-0 border-b-4 border-brand-yellow md:border-b-0"></div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 -mt-1 text-brand-yellow animate-bounce">
                <ArrowDown className="w-4 h-4" />
             </div>
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-brand-yellow" /> Preço Justo
            </h3>
            <p className="text-gray-400 text-sm">Sem surpresas depois</p>
          </div>

          {/* Box 3 */}
          <div className="bg-brand-yellow/90 backdrop-blur-sm p-8 text-center md:text-left flex flex-col items-center md:items-start group hover:bg-brand-yellow transition-colors relative overflow-hidden">
             <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-brand-dark mb-1 flex items-center gap-2">
              <UserCheck className="w-5 h-5" /> Atendimento
            </h3>
            <p className="text-brand-dark/80 text-sm">Fale direto com quem resolve</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;