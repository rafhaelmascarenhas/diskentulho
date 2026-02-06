import React from 'react';
import { Star } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-16 bg-brand-yellow text-brand-dark">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 fill-brand-dark text-brand-dark" />
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 max-w-4xl mx-auto">
          "A Diskentulho é referência em Divinópolis e Região."
        </h2>
        
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-90">
          Centenas de obras atendidas com pontualidade e respeito ao meio ambiente.
        </p>
      </div>
    </section>
  );
};

export default Authority;