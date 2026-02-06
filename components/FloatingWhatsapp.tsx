import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-brand-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
        Fale Conosco
      </span>
    </a>
  );
};

export default FloatingWhatsapp;