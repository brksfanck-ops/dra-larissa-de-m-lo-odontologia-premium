import React, { useState } from 'react';
import { LIFESTYLE_SLIDES, CLINIC_INFO } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ImageModal } from './ImageModal';
import { CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Information */}
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B5A48B] font-medium block mb-3">
              Atendimento Humanizado
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic text-[#1A1A1A] mb-4 sm:mb-6 leading-tight">
              Excelência comprovada por quem confia.
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mb-6 sm:mb-8 italic font-serif-luxury leading-relaxed">
              "A segurança de um sorriso perfeito através das mãos de quem entende de estética e função."
            </p>
            <div className="w-16 sm:w-20 h-[1.5px] bg-[#B5A48B] mb-6 sm:mb-8" />

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-[#B5A48B]/15 text-[#B5A48B] mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    Planejamento Digital e Facetas
                  </h4>
                  <p className="text-xs text-stone-500 font-light leading-relaxed mt-0.5">
                    Precisão fotográfica e prototipagem prévia para você enxergar o resultado antes da confecção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-[#B5A48B]/15 text-[#B5A48B] mt-0.5 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    Materiais de Alta Performance
                  </h4>
                  <p className="text-xs text-stone-500 font-light leading-relaxed mt-0.5">
                    Resinas de última geração e cerâmicas alemãs com estabilidade de cor e durabilidade comprovada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-[#B5A48B]/15 text-[#B5A48B] mt-0.5 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    Experiência Exclusiva e Conforto
                  </h4>
                  <p className="text-xs text-stone-500 font-light leading-relaxed mt-0.5">
                    Ambiente silencioso, climatizado e focado em transformar a visita ao dentista em um momento agradável.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#B5A48B] hover:border-[#B5A48B] w-full sm:w-auto text-center min-h-[48px] rounded-lg shadow-sm"
              >
                Conversar com a Dra. Larissa
              </a>
            </div>
          </div>

          {/* Lifestyle Swiper */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden p-2 bg-white/70 border border-stone-200/80 shadow-xl">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="lifestyleSwiper w-full rounded-xl overflow-hidden pb-10"
              >
                {LIFESTYLE_SLIDES.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div
                      className="cursor-pointer group relative overflow-hidden rounded-lg aspect-[4/3] bg-stone-100 flex items-center justify-center"
                      onClick={() => setActiveImage(slide.image)}
                    >
                      <img
                        src={slide.image}
                        alt={slide.caption || 'Experiência Odontológica'}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {slide.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white">
                          <p className="text-xs uppercase tracking-widest text-[#B5A48B] font-medium mb-1">
                            Odontologia Premium
                          </p>
                          <p className="text-sm font-light text-stone-100">{slide.caption}</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={!!activeImage}
        imageSrc={activeImage}
        title="Dra. Larissa de Mélo — Experiência em Odontologia"
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
};
