import React from 'react';
import { SERVICES, CLINIC_INFO } from '../data';
import { Sparkles, Gem, Sun, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B5A48B]" />;
      case 'Gem':
        return <Gem className="w-5 h-5 text-[#B5A48B]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#B5A48B]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#B5A48B]" />;
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B5A48B] font-medium block mb-2">
              Especialidades em Destaque
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic text-[#1A1A1A]">
              Tratamentos de Alta Precisão
            </h2>
          </div>
          <p className="text-stone-500 max-w-md text-xs sm:text-sm font-light leading-relaxed">
            Tecnologia de ponta aliada à arte e à biocompatibilidade, proporcionando resultados duradouros e harmoniosos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#F9F8F6] border border-stone-200/60 hover:border-[#B5A48B]/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center mb-5 sm:mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-[#1A1A1A] mb-2 sm:mb-3 group-hover:text-[#B5A48B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-stone-200/50">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#B5A48B] transition-colors font-medium py-2 min-h-[44px]"
                >
                  <span>Saiba Mais no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
