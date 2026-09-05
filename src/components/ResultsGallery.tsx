import React, { useState, useRef, useEffect } from 'react';
import { CLINICAL_CASES, CLINIC_INFO } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ImageModal } from './ImageModal';
import { ZoomIn, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const ResultsGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, []);

  const resetAutoplayTimer = () => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    autoplayTimeoutRef.current = setTimeout(() => {
      const swiper = swiperRef.current;
      if (swiper?.autoplay) {
        swiper.params.speed = 6000;
        swiper.autoplay.start();
      }
    }, 2000);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.autoplay) {
      swiper.autoplay.stop();
    }
    // Stop ongoing animation and prevent loopPreventsSliding from ignoring the first click
    swiper.animating = false;
    swiper.params.loopPreventsSliding = false;
    swiper.params.speed = 450;
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionDuration = '450ms';
    }
    swiper.slidePrev(450);
    resetAutoplayTimer();
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.autoplay) {
      swiper.autoplay.stop();
    }
    // Stop ongoing animation and prevent loopPreventsSliding from ignoring the first click
    swiper.animating = false;
    swiper.params.loopPreventsSliding = false;
    swiper.params.speed = 450;
    if (swiper.wrapperEl) {
      swiper.wrapperEl.style.transitionDuration = '450ms';
    }
    swiper.slideNext(450);
    resetAutoplayTimer();
  };

  return (
    <section id="resultados" className="py-16 sm:py-24 bg-white overflow-hidden border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B5A48B] font-medium block mb-2">
            Antes & Depois • Casos Clínicos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic text-[#1A1A1A] mb-3 sm:mb-4">
            Transformações Reais
          </h2>
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#B5A48B] font-light">
            Planejamento Individualizado em cada detalhe
          </p>
          <p className="text-xs text-stone-500 mt-2.5 flex items-center justify-center gap-1.5 font-light">
            <span>Toque em qualquer imagem para ampliar em alta definição</span>
          </p>
        </div>
      </div>

      {/* Swiper Continuous Linear Marquee with Manual Navigation Option */}
      <div className="w-full py-2 relative group">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loopPreventsSliding={false}
          preventInteractionOnTransition={false}
          onTouchStart={() => {
            if (autoplayTimeoutRef.current) clearTimeout(autoplayTimeoutRef.current);
          }}
          onTouchEnd={() => {
            resetAutoplayTimer();
          }}
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={16}
          loop={true}
          speed={6000}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          className="swiper-results !overflow-visible px-4 sm:px-6"
        >
          {CLINICAL_CASES.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`} className="!w-auto flex justify-center">
              <div
                role="button"
                tabIndex={0}
                aria-label="Ampliar imagem do caso"
                onClick={() => setSelectedImage(item.image)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage(item.image);
                  }
                }}
                className="group/card relative cursor-pointer overflow-hidden rounded-xl bg-white border border-[#B5A48B]/30 hover:border-[#B5A48B] active:scale-[0.99] transition-all duration-300 shadow-sm hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#B5A48B]"
              >
                <img
                  src={item.image}
                  alt="Caso de transformação de sorriso"
                  className="h-[270px] sm:h-[340px] md:h-[440px] w-auto object-contain bg-white transition-transform duration-500 group-hover/card:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle Clean Zoom Cue on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white flex items-center gap-2 shadow-xl">
                    <ZoomIn className="w-4 h-4 text-[#B5A48B]" />
                    <span className="text-xs uppercase tracking-wider font-medium">Ampliar Imagem</span>
                  </div>
                </div>
                
                {/* Mobile tap zoom hint icon */}
                <div className="sm:hidden absolute bottom-2.5 right-2.5 bg-black/60 text-white/90 p-1.5 rounded-full backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Manual navigation control bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 px-4">
          <button
            id="gallery-btn-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Passar para foto anterior"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F9F8F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#B5A48B] border border-stone-300 hover:border-transparent text-xs font-medium transition-all shadow-xs cursor-pointer min-h-[42px] active:scale-95 select-none touch-manipulation"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>
          
          <span className="text-[11px] text-stone-500 font-light tracking-wider uppercase select-none">
            Passe manualmente pelas fotos
          </span>

          <button
            id="gallery-btn-next"
            type="button"
            onClick={handleNext}
            aria-label="Passar para próxima foto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F9F8F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#B5A48B] border border-stone-300 hover:border-transparent text-xs font-medium transition-all shadow-xs cursor-pointer min-h-[42px] active:scale-95 select-none touch-manipulation"
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Under-gallery CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#F9F8F6] p-5 sm:p-4 sm:pr-6 rounded-2xl border border-stone-200/70 shadow-sm w-full sm:w-auto max-w-xl sm:max-w-none">
          <p className="text-stone-700 text-sm font-light text-center sm:text-left">
            Quer um planejamento personalizado para harmonizar seu sorriso?
          </p>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#B5A48B] hover:border-[#B5A48B] text-xs whitespace-nowrap w-full sm:w-auto text-center min-h-[44px] rounded-lg shadow-sm"
          >
            <span>Consultar Disponibilidade</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal for detailed case inspection with easy return option */}
      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};
