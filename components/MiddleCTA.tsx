import React from 'react';
import { MessageCircle } from 'lucide-react';

const MiddleCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
          Já sabe qual caçamba precisa?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          Chame no WhatsApp e resolvemos agora mesmo. Atendimento rápido e sem burocracia.
        </p>
        <a 
          href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-10 rounded-xl shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
        >
          <MessageCircle className="w-6 h-6 fill-current transition-transform group-hover:scale-110" />
          <span>Chamar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default MiddleCTA;