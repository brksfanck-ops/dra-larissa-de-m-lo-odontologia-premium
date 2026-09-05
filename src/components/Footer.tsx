import React from 'react';
import { CLINIC_INFO } from '../data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="pt-12 sm:pt-16 pb-28 sm:pb-16 text-center border-t border-stone-200/60 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <span className="text-lg sm:text-xl tracking-widest uppercase font-light text-[#1A1A1A]">
            Dra. <span className="font-bold text-[#B5A48B]">Larissa</span> de Mélo
          </span>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 italic mt-2 text-stone-600">
            Dra. Larissa de Mélo | Guarulhos, SP
          </p>
        </div>

        <div className="mb-8 sm:mb-10 max-w-md mx-auto">
          <a
            id="footer-whatsapp-cta"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium bg-[#1A1A1A] text-white border-none px-6 sm:px-12 py-4 text-xs sm:text-sm md:text-base font-light normal-case tracking-normal shadow-xl hover:bg-[#B5A48B] hover:text-[#1A1A1A] transition-all hover:scale-102 w-full inline-flex items-center justify-center min-h-[50px] rounded-xl"
          >
            Clique aqui para agendar sua consulta via WhatsApp
          </a>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Dra. Larissa de Mélo • Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#inicio" className="hover:text-[#B5A48B] transition-colors py-2 px-1 min-h-[44px] flex items-center">Início</a>
            <a href="#resultados" className="hover:text-[#B5A48B] transition-colors py-2 px-1 min-h-[44px] flex items-center">Resultados</a>
            <a href="#experiencia" className="hover:text-[#B5A48B] transition-colors py-2 px-1 min-h-[44px] flex items-center">Experiência</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#B5A48B] transition-colors py-2 px-2 min-h-[44px]"
              aria-label="Voltar ao topo da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
