import React from 'react';
import { MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-yellow text-brand-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
             backgroundSize: '40px 40px'
           }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6 max-w-4xl mx-auto">
          Resolva o descarte do seu entulho agora
        </h2>
        
        <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-90">
          Evite atraso, multa e dor de cabeça. Fale com o Diskentulho pelo WhatsApp.
        </p>

        <a 
          href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-[#1da851] text-white font-bold text-lg py-4 px-10 rounded shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-3xl"
        >
          <MessageCircle className="w-6 h-6" />
          Chamar no WhatsApp agora
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;