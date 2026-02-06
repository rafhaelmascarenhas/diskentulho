import React from 'react';
import { MessageCircle, Truck, Trash2, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Chame no WhatsApp",
      description: "Chame a gente no WhatsApp e informe o endereço"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Entrega no local",
      description: "Entregamos a caçamba no local combinado"
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Encha a caçamba",
      description: "Você preenche sem prazo contratado"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Retirada e descarte",
      description: "Retiramos e fazemos o descarte correto"
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Simples, rápido e <span className="text-brand-yellow">sem complicação</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-700 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-brand-dark border-2 border-brand-yellow flex items-center justify-center relative z-10">
                     <span className="text-brand-yellow">
                        {step.icon}
                     </span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-yellow text-brand-dark font-bold flex items-center justify-center border-4 border-brand-dark z-20">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;