import React, { useEffect } from 'react';
import { X, ArrowLeft, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  title?: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div
      id="image-modal-backdrop"
      className="fixed inset-0 z-[250] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="image-modal-container"
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center p-1 sm:p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar with explicit 'Voltar' and 'Fechar' */}
        <div className="w-full flex items-center justify-between mb-2.5 px-1 z-10">
          <button
            id="image-modal-back-btn"
            onClick={onClose}
            aria-label="Voltar"
            className="text-white hover:text-[#B5A48B] bg-black/70 sm:bg-white/10 hover:bg-black/90 px-4 py-2 rounded-full flex items-center gap-2 text-xs uppercase tracking-wider transition-colors shadow-lg backdrop-blur-md min-h-[44px] border border-white/15 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Voltar</span>
          </button>

          <button
            id="image-modal-close-btn"
            onClick={onClose}
            aria-label="Fechar visualização da imagem"
            className="text-white/90 hover:text-white p-2.5 rounded-full bg-black/70 sm:bg-white/10 hover:bg-black/90 transition-colors shadow-lg backdrop-blur-md min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/15 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-white/5 border border-white/15 rounded-xl overflow-hidden max-h-[82vh] flex flex-col items-center max-w-full shadow-2xl">
          <img
            src={imageSrc}
            alt={title || 'Visualização ampliada do caso'}
            className="max-h-[calc(78vh-65px)] max-w-full w-auto h-auto object-contain rounded-t-lg min-h-0 shrink"
            referrerPolicy="no-referrer"
          />
          {/* Modal bottom bar with Voltar and WhatsApp CTA */}
          <div className="w-full bg-[#1A1A1A] py-3 px-4 sm:px-5 flex flex-wrap items-center justify-between border-t border-white/10 gap-2.5 shrink-0">
            {title ? (
              <span className="text-white text-xs tracking-wider uppercase font-medium leading-snug">
                {title}
              </span>
            ) : (
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white flex items-center gap-1.5 text-xs uppercase tracking-wider py-2 px-3 rounded hover:bg-white/10 transition-colors min-h-[40px] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Voltar</span>
              </button>
            )}
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium py-2 px-3.5 text-[11px] text-[#B5A48B] hover:text-white border-[#B5A48B]/50 hover:border-[#B5A48B] inline-flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider min-h-[40px] rounded"
            >
              <span>Quero um resultado como este</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
