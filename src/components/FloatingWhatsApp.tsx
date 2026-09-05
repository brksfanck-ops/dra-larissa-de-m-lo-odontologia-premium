import React, { useState } from 'react';
import { CLINIC_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-[200] flex items-center gap-2 sm:gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-stone-200 text-xs font-medium text-stone-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Agende sua avaliação</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 ml-1 text-xs p-1 min-w-[24px] min-h-[24px] flex items-center justify-center"
            aria-label="Fechar dica"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Fixed Button */}
      <a
        id="floating-whatsapp-btn"
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Dra. Larissa de Mélo"
        className="relative bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-emerald-500/30 flex items-center justify-center group min-w-[52px] min-h-[52px]"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>

        <svg
          className="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.164 1.236 8.41 3.483 2.247 2.247 3.483 5.234 3.483 8.41 0 6.556-5.332 11.888-11.888 11.888-2.018 0-4.005-.512-5.763-1.484l-6.229 1.631zm6.757-4.022l.33.197c1.451.865 3.112 1.321 4.811 1.321 5.123 0 9.29-4.167 9.29-9.291 0-2.482-.966-4.817-2.721-6.571-1.754-1.754-4.09-2.72-6.57-2.72-5.124 0-9.292 4.167-9.292 9.291 0 1.79.51 3.53 1.476 5.04l.217.341-1.001 3.655 3.738-.979z" />
        </svg>
      </a>
    </div>
  );
};
