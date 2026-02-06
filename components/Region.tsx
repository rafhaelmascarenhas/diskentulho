import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const Region: React.FC = () => {
  return (
    <section id="regiao" className="py-24 bg-white text-center">
      <div className="container mx-auto px-4">
        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-brand-yellow" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
          Atendemos <span className="text-brand-yellow">Divinópolis</span> e região
        </h2>
        
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Atendemos Divinópolis e cidades próximas. Se você tiver dúvidas sobre sua região, fale com a gente no WhatsApp e confirmemos na hora.
        </p>

        <a 
          href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-[#ffcd29] text-brand-dark font-bold py-3 px-8 rounded shadow transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Consultar atendimento no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Region;