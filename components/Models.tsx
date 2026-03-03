import React from 'react';
import { Check, Lightbulb } from 'lucide-react';

const Models: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0";

  return (
    <section id="modelos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-3">
            Nossa <span className="text-brand-yellow">Caçamba</span>
          </h2>
          <div className="text-gray-500 max-w-2xl mx-auto space-y-2">
            <p>Aluguel de caçambas para obras e reformas. Entrega rápida e retirada programada com responsabilidade e compromisso.</p>
            <div className="text-sm bg-yellow-50 text-yellow-800 py-2 px-4 rounded-xl inline-block max-w-xl">
              <p className="mb-1"><span className="font-bold">Atenção:</span> Atualmente pedimos um prazo de até 4 dias para a retirada da caçamba.</p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card Único */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-brand-yellow p-8 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
              Caçamba ideal para sua Obra
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-60 h-10 rounded-full bg-brand-dark border-4 border-brand-yellow flex items-center justify-center text-white font-black text-xl shadow-lg uppercase tracking-wider">
                Diskentulho
              </div>
            </div>
            
            <h3 className="text-center text-xl font-bold text-brand-dark mb-6"></h3>
            
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm text-gray-500 text-center mb-4">Volume ideal para a maioria das reformas residenciais e comerciais.</p>
              
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Tamanho ideal para sua necessidade</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Ideal para reformas e limpeza de terrenos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Respeite o limite da borda para transporte seguro</span>
              </div>
               <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="min-w-5 min-h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                   <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Descarte responsável em local autorizado</span>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 mb-6 flex gap-3 items-start">
               <Lightbulb className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
               <p className="text-xs text-gray-600 leading-relaxed">
                 <span className="font-bold">Dica:</span> Não ultrapasse a borda superior da caçamba. Isso garante a segurança no transporte e evita multas.
               </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded transition-colors"
            >
              <svg 
                viewBox="0 0 448 512" 
                className="w-4 h-4 fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="text-center mt-12 text-sm text-gray-500 flex items-center justify-center gap-2">
           <span className="text-brand-yellow text-lg">⚡</span>
           <span><strong>Preço sob consulta.</strong> Chame no WhatsApp e informe sua região para orçamento.</span>
        </div>

        {/* Section Institucional / Video */}
        <div className="mt-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2">
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-wider w-fit mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                  Institucional
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
                  Diskentulho <span className="text-gray-300">|</span> Divinópolis
                </h3>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Fundada em Divinópolis/MG, a Diskentulho atua há mais de <span className="font-bold text-brand-dark bg-yellow-100 px-1 rounded">34 anos com caçambas de entulho</span>.
                  </p>
                  <p>
                    Nosso objetivo é oferecer as melhores soluções em locação de caçambas estacionárias, priorizando a <strong className="text-brand-dark">segurança</strong>, <strong className="text-brand-dark">qualidade</strong> e <strong className="text-brand-dark">eficiência</strong> na prestação dos serviços.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-8">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-dark">34<span className="text-brand-yellow">+</span></span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Anos de Mercado</span>
                   </div>
                   <div className="w-px h-10 bg-gray-200"></div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-brand-dark">100<span className="text-brand-yellow">%</span></span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Legalizado</span>
                   </div>
                </div>
              </div>

              {/* Video Side */}
              <div className="relative bg-brand-dark flex items-center justify-center p-8 md:p-12 order-1 md:order-2">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative w-full max-w-[320px] rounded-lg overflow-hidden shadow-2xl border border-white/20">
                     <div className="aspect-[9/16]">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      >
                        <source src="/videodiskentulho.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Models;