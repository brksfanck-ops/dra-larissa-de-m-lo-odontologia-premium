import React from 'react';
import { CLINIC_INFO } from '../data';
import { MapPin, Phone, CalendarCheck, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B5A48B] font-medium block mb-3">
              Espaço Exclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury italic text-[#1A1A1A] mb-4 sm:mb-6">
              Localização em Guarulhos
            </h2>
            <p className="text-stone-600 font-light leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Um ambiente projetado para oferecer a máxima tranquilidade, biossegurança e privacidade. Os atendimentos são realizados exclusivamente com hora marcada, garantindo dedicação total ao seu tempo e ao seu sorriso.
            </p>

            <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/60 shadow-sm">
                <div className="p-2 rounded-lg bg-[#B5A48B]/10 text-[#B5A48B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    Endereço
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Guarulhos - São Paulo (Próximo aos principais acessos e com estacionamento)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/60 shadow-sm">
                <div className="p-2 rounded-lg bg-[#B5A48B]/10 text-[#B5A48B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                    Horário de Atendimento
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Segunda a Sexta • Sessões com agendamento prévio individual
                  </p>
                </div>
              </div>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/60 shadow-sm hover:border-[#B5A48B] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                      Contato Direto
                    </h4>
                    <span className="text-[10px] text-emerald-600 font-medium uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">Toque para chamar</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 font-medium">
                    WhatsApp: {CLINIC_INFO.phoneDisplay}
                  </p>
                </div>
              </a>
            </div>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-[#1A1A1A] text-white border-[#1A1A1A] hover:bg-[#B5A48B] hover:border-[#B5A48B] inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center min-h-[48px] rounded-lg shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-[#B5A48B]" />
              <span>Solicitar Horário na Agenda</span>
            </a>
          </div>

          {/* Location Visual Card */}
          <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-white shadow-xl p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Atendimento Ativo em Guarulhos</span>
              </div>

              <h3 className="text-2xl font-serif-luxury text-[#1A1A1A]">
                Pronto(a) para a sua transformação?
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Cada tratamento é planejado digitalmente, respeitando a anatomia, o perfil labial e os anseios do paciente. Venha conhecer nosso protocolo de atendimento.
              </p>

              <div className="p-4 rounded-xl bg-[#F9F8F6] border border-stone-200/50 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Cidade:</span>
                  <span className="font-medium text-[#1A1A1A]">Guarulhos - SP</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Especialidade:</span>
                  <span className="font-medium text-[#1A1A1A]">Estética Dental & DSD</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Agendamento:</span>
                  <span className="font-medium text-emerald-600">Via WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-xs text-stone-400">
                Dra. Larissa de Mélo
              </span>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B5A48B] hover:text-[#1A1A1A] font-medium uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Falar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
