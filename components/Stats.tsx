import React from 'react';
import { Users, Truck, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-8">Já, confia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">+ 1000</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">clientes atendidos sem dor de cabeça</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">+ 2500</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">caçambas entregues e retiradas no prazo</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">5</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">anos de história em Divinópolis</span>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-brand-dark font-medium text-lg">
            O Diskentulho é conhecido em Divinópolis por cumprir prazo e não deixar cliente na mão.
          </p>
        </div>

        {/* Large Image Feature */}
        <div className="max-w-4xl mx-auto relative mt-16">
          <div className="aspect-[16/9] bg-brand-dark rounded-3xl relative overflow-hidden shadow-2xl">
             {/* Abstract background shape inside image container */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-800 skew-x-12 translate-x-1/4"></div>
             
             {/* Dumpster Image */}
             <img 
               src="https://images.unsplash.com/photo-1590644365607-1c5a38a07999?q=80&w=1600&auto=format&fit=crop" 
               alt="Caçamba Diskentulho" 
               className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
             />
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pseudo Dumpster Graphic using CSS shapes if image isn't perfect, or just use the image. 
                      Since I don't have the exact yellow dumpster asset, I'll style a container to look like one 
                      or just use the text overlay. */}
                   <img 
                      src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop"
                      alt="Caçamba Amarela"
                      className="w-[500px] h-auto object-contain drop-shadow-2xl transform rotate-[-5deg]"
                      style={{filter: 'hue-rotate(-15deg) saturate(200%)'}} 
                   />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow px-4 py-2 rotate-[-5deg] font-black text-brand-dark border-2 border-brand-dark">
                     DISKENTULHO
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;