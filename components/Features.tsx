import React from 'react';
import { Clock, ShieldCheck, Truck, MessageSquareHeart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tip?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tip }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center h-full relative group hover:shadow-xl transition-shadow duration-300">
    <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 text-brand-dark group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    
    {tip && (
      <div className="mt-auto bg-gray-50 border border-gray-200 p-3 rounded-lg w-full text-left">
        <p className="text-xs text-gray-700 font-medium flex items-start gap-2">
          <span className="text-brand-yellow shrink-0">💡</span> 
          <span>{tip}</span>
        </p>
      </div>
    )}
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pontualidade",
      description: "Entregamos e retiramos no horário combinado.",
      tip: "Atraso vira problema nosso, não da sua obra."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança",
      description: "Equipamentos de proteção e descarte feitos de forma legal e responsável."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frota própria",
      description: "Caminhões próprios garantem mais controle e menos atraso."
    },
    {
      icon: <MessageSquareHeart className="w-8 h-8" />,
      title: "Atendimento",
      description: "Fale direto com a gente pelo WhatsApp. Sem enrolação."
    }
  ];

  return (
    <section id="por-que-nos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Por que escolher a <span className="text-brand-yellow">Diskentulho</span>?
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tip={feature.tip}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;