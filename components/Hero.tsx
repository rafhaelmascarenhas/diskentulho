import React from 'react';
import { MessageCircle, ArrowDown, Timer, DollarSign, UserCheck } from 'lucide-react';

const Hero: React.FC = () => {
  // Configuração profissional do Link do WhatsApp
  const phoneNumber = "5537998136323";
  const message = encodeURIComponent("Olá! Preciso de uma caçamba para minha obra. Gostaria de saber os valores e disponibilidade.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative w-full bg-brand-dark overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Adicionando um timestamp para forçar atualização do cache se necessário, mas o principal é garantir que o nome esteja correto */}
          <source media="(min-width: 768px)" srcSet="/bg-desktop.webp" />
          <img 
            src="/mobile1.webp" 
            alt="Canteiro de obras organizado com caçamba" 
            // Posiciona para mostrar pessoas da cintura pra cima (top = topo da imagem)
            className="w-full h-full object-cover object-[center_bottom] md:object-[center_85%]" 
          />
        </picture>
        
        {/* Overlay mais inteligente: Escuro no topo (para o texto) e transparente embaixo (para ver as pessoas) */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-brand-yellow/30 bg-white/5 backdrop-blur-md shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-brand-yellow uppercase">Atendemos Divinópolis</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 max-w-4xl mx-auto tracking-tight drop-shadow-xl">
          Sua obra não pode parar. <br className="hidden md:block" />
          <span className="text-brand-yellow text-shadow-sm">Caçamba rápida</span> e sem dor de cabeça.
        </h1>
        
        {/* Subhead */}
        <p className="text-gray-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg text-shadow">
          Aluguel de caçambas de <strong>5m³</strong> e <strong>5,7m³</strong>. Entregamos e retiramos rigorosamente no prazo.
        </p>
        
        {/* Buttons - CTA */}
        {/* Mobile: Espaçamento reduzido (mb-12) para aproximar os cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-48 lg:mb-64">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir caçamba pelo WhatsApp"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Pedir Caçamba Agora</span>
          </a>
          <a 
            href="#modelos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md text-white font-medium text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
          >
            Ver Tamanhos
          </a>
        </div>
      </div>

      {/* Cards de Valor - Efeito Glass (Vidro) para Mobile e Desktop */}
      <div className="relative z-20 container mx-auto px-4 pb-8 md:pb-12 md:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mx-auto max-w-5xl">
          
          {/* Box 1 */}
          <div className="
            relative overflow-hidden group
            flex flex-row md:flex-col items-center md:items-start 
            text-left md:text-left
            p-2 md:p-8 
            rounded-xl md:rounded-2xl
            bg-transparent border border-white/10 
            hover:bg-white/5 transition-all duration-300
          ">
             <div className="mr-3 md:mr-0 md:mb-4 p-1.5 md:p-3 bg-brand-yellow rounded-full shrink-0 shadow-[0_0_15px_rgba(255,193,7,0.3)]">
                <Timer className="w-4 h-4 md:w-6 md:h-6 text-brand-dark" />
             </div>
             <div>
                <h3 className="text-sm md:text-xl font-bold text-white mb-0 md:mb-2">
                  Entrega Pontual
                </h3>
                <p className="text-gray-200 text-xs md:text-base font-medium leading-snug">
                  Solicitou, chegou. Respeitamos o prazo.
                </p>
             </div>
          </div>

          {/* Box 2 */}
          <div className="
            relative overflow-hidden group
            flex flex-row md:flex-col items-center md:items-start 
            text-left md:text-left
            p-2 md:p-8 
            rounded-xl md:rounded-2xl
            bg-transparent border border-white/10 
            hover:bg-white/5 transition-all duration-300
          ">
             <div className="mr-3 md:mr-0 md:mb-4 p-1.5 md:p-3 bg-white/20 rounded-full shrink-0">
                <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-brand-yellow" />
             </div>
             <div>
                <h3 className="text-sm md:text-xl font-bold text-white mb-0 md:mb-2">
                  Preço Justo
                </h3>
                <p className="text-gray-200 text-xs md:text-base font-medium leading-snug">
                  Valor transparente. Sem taxas surpresas.
                </p>
             </div>
          </div>

          {/* Box 3 */}
          <div className="
            relative overflow-hidden group
            flex flex-row md:flex-col items-center md:items-start 
            text-left md:text-left
            p-2 md:p-8 
            rounded-xl md:rounded-2xl
            bg-transparent border border-white/10 
            hover:bg-white/5 transition-all duration-300
          ">
             <div className="mr-3 md:mr-0 md:mb-4 p-1.5 md:p-3 bg-brand-yellow rounded-full shrink-0 shadow-[0_0_15px_rgba(255,193,7,0.3)]">
                <UserCheck className="w-4 h-4 md:w-6 md:h-6 text-brand-dark" />
             </div>
             <div>
                <h3 className="text-sm md:text-xl font-bold text-white mb-0 md:mb-2">
                  Atendimento Real
                </h3>
                <p className="text-gray-200 text-xs md:text-base font-medium leading-snug">
                  Fale direto com nossa equipe no WhatsApp.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;