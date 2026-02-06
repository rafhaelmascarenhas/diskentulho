import React from 'react';
import { Check, MessageCircle, Lightbulb } from 'lucide-react';

const Models: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

  return (
    <section id="modelos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-3">
            Nossas <span className="text-brand-yellow">Caçambas</span>
          </h2>
          <p className="text-gray-500">Dois tamanhos para atender sua obra. Veja como se encaixar melhor no seu projeto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 5m3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-brand-dark border-4 border-brand-yellow flex items-center justify-center text-white font-black text-2xl shadow-lg">
                5m³
              </div>
            </div>
            
            <h3 className="text-center text-xl font-bold text-brand-dark mb-6">Caçamba 5 metros cúbicos</h3>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm text-gray-500 text-center mb-4">Ideal para reformas de banheiro, cozinha ou limpezas residenciais.</p>
              
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Cabe o entulho de 1 cômodo reformado</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Reforma de banheiro ou cozinha</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Limpeza de quintal</span>
              </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Troca de piso ou revestimento</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6 flex gap-3 items-start">
               <Lightbulb className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
               <p className="text-xs text-gray-600 leading-relaxed">
                 <span className="font-bold">Dica:</span> Escolha certa para: banheiro, cozinha, quintal ou troca de piso.
               </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-[#1da851] text-white font-bold py-3 px-4 rounded transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Card 5.7m3 */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-yellow p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4">
             <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
              Mais Popular
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-brand-dark border-4 border-brand-yellow flex items-center justify-center text-white font-black text-2xl shadow-lg">
                5,7 m³
              </div>
            </div>
            
            <h3 className="text-center text-xl font-bold text-brand-dark mb-6">Caçamba 5,7 metros cúbicos</h3>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm text-gray-500 text-center mb-4">Para reformas completas, demolições e obras maiores.</p>
              
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Cabe o entulho de 2+ cômodos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Reforma completa do apartamento</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Demolição de paredes e pisos</span>
              </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Construções e ampliações</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6 flex gap-3 items-start">
               <Lightbulb className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
               <p className="text-xs text-gray-600 leading-relaxed">
                 <span className="font-bold">Dica:</span> Escolha certa para: reforma completa, demolição ou construção.
               </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-[#1da851] text-white font-bold py-3 px-4 rounded transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-gray-500 flex items-center justify-center gap-2">
           <span className="text-brand-yellow text-lg">⚡</span>
           <span><strong>Preço sob consulta.</strong> Chame no WhatsApp e informe sua região para orçamento.</span>
        </div>
      </div>
    </section>
  );
};

export default Models;