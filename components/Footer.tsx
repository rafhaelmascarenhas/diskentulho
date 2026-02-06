import React from 'react';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-8 border-brand-yellow hazard-stripe-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center font-bold text-brand-dark rounded">D</div>
               <span className="text-xl font-bold text-brand-yellow tracking-wider">DISKENTULHO</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Caçamba entregue e retirada no prazo. Sem dor de cabeça na sua obra.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/diskentulhocacambas/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Não se trata de uma questão de...</a></li>
              <li><a href="#modelos" className="hover:text-brand-yellow transition-colors">Caçambas</a></li>
              <li><a href="#por-que-nos" className="hover:text-brand-yellow transition-colors">Diferenciais</a></li>
              <li><a href="#como-funciona" className="hover:text-brand-yellow transition-colors">Como funciona</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Serviços</h4>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Locação de Caçamba 5m³</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Locação de Caçamba 5,7m³</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Coleta de Entulho</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Descarte Legal</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Atendimento Residencial</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Atendimento Comercial</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-yellow mt-0.5" />
                <a href="https://api.whatsapp.com/send/?phone=5537998136323&text=Ol%C3%A1%2C+preciso+de+uma+ca%C3%A7amba+para+obra%2Freforma.+Pode+me+ajudar%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">(37) 9 9813-6323</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-yellow mt-0.5" />
                <span className="text-gray-400">contato@diskentulho.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow mt-0.5" />
                <span className="text-gray-400">Divinópolis e Região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2026 Diskentulho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Editar com</span>
            <span className="font-bold text-gray-500">Lovable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;