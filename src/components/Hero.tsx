import React from 'react';
import { CLINIC_INFO } from '../data';
import { Sparkles, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-28 sm:pt-36 pb-16 sm:pb-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B5A48B]/10 border border-[#B5A48B]/25 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#B5A48B]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#B5A48B] font-medium">
              Odontologia de Alta Performance
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury mb-6 sm:mb-8 italic leading-[1.1] text-[#1A1A1A]">
            Onde o cuidado se torna <br />
            <span className="not-italic font-light tracking-tight text-[#2B2B2B]">
              uma experiência.
            </span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-lg mb-8 sm:mb-10 leading-relaxed font-light">
            Em Guarulhos, um espaço exclusivo dedicado à estética dental, facetas em resina e porcelana, e ao planejamento digital do sorriso.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              id="hero-book-cta"
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#B5A48B] hover:border-[#B5A48B] w-full sm:w-auto text-center shadow-lg group min-h-[48px] rounded-lg"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#resultados"
              className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/80 hover:text-[#B5A48B] transition-colors py-3 px-4 min-h-[44px] flex items-center justify-center font-medium"
            >
              Ver Casos Reais ↓
            </a>
          </div>

          {/* Quick credibility markers - responsive flex/grid */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg text-left bg-stone-100/60 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none">
            <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-0">
              <div className="flex items-center gap-1.5 text-[#B5A48B] sm:mb-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Alta Precisão</span>
              </div>
              <p className="text-[11px] text-stone-500 font-light text-right sm:text-left">Mapeamento 3D individual</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-0 border-t sm:border-t-0 border-stone-200/40 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-[#B5A48B] sm:mb-1">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Exclusivo</span>
              </div>
              <p className="text-[11px] text-stone-500 font-light text-right sm:text-left">Hora marcada sem espera</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:gap-0 border-t sm:border-t-0 border-stone-200/40 pt-2 sm:pt-0">
              <div className="flex items-center gap-1.5 text-[#B5A48B] sm:mb-1">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">Guarulhos</span>
              </div>
              <p className="text-[11px] text-stone-500 font-light text-right sm:text-left">Fácil acesso & conforto</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Elegant architectural border backdrop */}
            <div className="absolute -inset-3 border border-[#B5A48B]/30 rounded-2xl transform translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-stone-100">
              <img
                src={CLINIC_INFO.heroImage}
                alt="Dra. Larissa de Mélo"
                className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B5A48B] font-medium">Atendimento Premium</p>
                <p className="text-lg font-serif-luxury italic">Dra. Larissa de Mélo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
