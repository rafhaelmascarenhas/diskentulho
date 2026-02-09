import React from 'react';
import { MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-yellow text-brand-dark relative overflow-hidden group">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 transition-opacity duration-700 group-hover:opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
             backgroundSize: '40px 40px'
           }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-4xl mx-auto tracking-tight drop-shadow-sm">
          Resolva o descarte do seu entulho agora
        </h2>
        
        <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Evite atraso, multa e dor de cabeça. Fale com o <span className="font-bold underline decoration-4 decoration-brand-dark/20">Diskentulho</span> pelo WhatsApp.
        </p>

        <a 
          href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-5 px-10 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-2 active:scale-95 active:translate-y-0"
        >
          <MessageCircle className="w-8 h-8 fill-current transition-transform group-hover:rotate-12" />
          <span>Pedir Minha Caçamba</span>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;