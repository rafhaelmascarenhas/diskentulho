import React from 'react';
import { MessageCircle } from 'lucide-react';

const MiddleCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-4">
          Já sabe qual caçamba precisa?
        </h2>
        <p className="text-gray-600 mb-8">
          Chame no WhatsApp e resolvemos agora.
        </p>
        <a 
          href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-[#1da851] text-white font-bold py-3 px-8 rounded shadow-lg transition-transform hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default MiddleCTA;