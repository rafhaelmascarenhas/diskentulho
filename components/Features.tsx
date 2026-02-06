import React from 'react';
import { Clock, ShieldCheck, Truck, MessageSquareHeart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tip?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tip }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full relative group">
    <div className="w-16 h-16 bg-white border-2 border-brand-yellow rounded-full flex items-center justify-center mb-6 text-brand-yellow shadow-sm group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
    
    {tip && (
      <div className="mt-auto bg-brand-yellow/10 border border-brand-yellow/20 p-3 rounded-lg w-full">
        <p className="text-xs text-brand-dark font-medium">
          <strong>💡 Dica:</strong> {tip}
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
    <section id="por-que-nos" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Por que escolher um <span className="text-brand-yellow">Diskentulho</span> ?
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