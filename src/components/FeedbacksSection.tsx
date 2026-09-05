import React, { useState } from 'react';
import { FEEDBACK_ITEMS, CLINIC_INFO } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ImageModal } from './ImageModal';
import { MessageCircleHeart, ZoomIn, Star } from 'lucide-react';

export const FeedbacksSection: React.FC = () => {
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#1A1A1A] text-white overflow-hidden relative">
      {/* Decorative ambient subtle glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B5A48B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex justify-center items-center gap-1 text-[#B5A48B] mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#B5A48B]" />
          ))}
        </div>

        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B5A48B] font-light block mb-2">
          Depoimentos Espontâneos
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic mb-3 sm:mb-4">
          Reconhecimento e Carinho
        </h2>
        <p className="text-stone-400 text-xs sm:text-sm max-w-lg mx-auto mb-10 sm:mb-14 font-light leading-relaxed">
          A maior recompensa é a transformação na vida e na confiança de cada paciente. Toque nos prints para ler as mensagens completas.
        </p>

        {/* Feedback Swiper */}
        <div className="w-full pb-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="feedbackSwiper pb-12"
          >
            {FEEDBACK_ITEMS.map((item, index) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver depoimento: ${item.highlight}`}
                  onClick={() => setActiveFeedback(item.image)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveFeedback(item.image);
                    }
                  }}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#242424] hover:border-[#B5A48B]/60 active:scale-[0.99] transition-all duration-300 shadow-xl hover:shadow-2xl p-2 max-w-[310px] w-full focus:outline-none focus:ring-2 focus:ring-[#B5A48B]"
                >
                  <div className="relative overflow-hidden rounded-xl bg-black/40">
                    <img
                      src={item.image}
                      alt={item.highlight || `Feedback de Paciente ${index + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-xs uppercase tracking-wider text-white">
                        <ZoomIn className="w-4 h-4 text-[#B5A48B]" />
                        <span>Ampliar Mensagem</span>
                      </div>
                    </div>
                    {/* Mobile touch zoom cue */}
                    <div className="sm:hidden absolute bottom-2 right-2 bg-black/60 text-white/90 p-1.5 rounded-full backdrop-blur-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-3 text-left">
                    <div className="flex items-center gap-2 text-[11px] text-[#B5A48B] uppercase tracking-wider font-medium">
                      <MessageCircleHeart className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">{item.highlight}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Action button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium border-[#B5A48B] text-white hover:bg-[#B5A48B] hover:text-[#1A1A1A] inline-flex items-center justify-center gap-2 text-xs w-full sm:w-auto text-center min-h-[48px] px-6 rounded-lg shadow-md"
          >
            <span>Faça Parte Destas Histórias • Agendar</span>
          </a>
        </div>
      </div>

      <ImageModal
        isOpen={!!activeFeedback}
        imageSrc={activeFeedback}
        title="Reconhecimento & Depoimento — Dra. Larissa de Mélo"
        onClose={() => setActiveFeedback(null)}
      />
    </section>
  );
};
