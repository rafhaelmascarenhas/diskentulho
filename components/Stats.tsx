import React from 'react';
import { Users, Truck, Calendar } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-yellow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-8">Entrega e confiança</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">+ 5000</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">clientes</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">+ 100.000</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">caçambas entregues</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-brand-dark flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-brand-dark" />
              </div>
              <span className="text-4xl font-black text-brand-dark mb-1">34</span>
              <span className="text-sm font-bold text-brand-dark/70 uppercase text-center">anos de história</span>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto text-brand-dark font-medium text-lg">
            O Diskentulho é conhecido em Divinópolis por cumprir prazo e não deixar cliente na mão.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;