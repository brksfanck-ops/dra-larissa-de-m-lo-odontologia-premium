import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data';
import { Menu, X, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Transformações', href: '#resultados' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'glass-header border-b border-stone-200/60 shadow-sm py-3'
          : 'glass-header border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <a
          id="header-brand-link"
          href="#inicio"
          className="text-xl tracking-widest uppercase font-light text-[#1A1A1A] hover:opacity-90 transition-opacity"
        >
          Dra. <span className="font-bold text-[#B5A48B]">Larissa</span> de Mélo
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/70 hover:text-[#B5A48B] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            id="header-appointment-cta"
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium hidden md:inline-flex text-center text-[#1A1A1A]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B5A48B]" />
            <span>Agendar Consulta</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1A1A1A] hover:text-[#B5A48B] focus:outline-none focus:ring-2 focus:ring-[#B5A48B]/50 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[65px] bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-drawer"
            className="lg:hidden relative z-50 bg-[#F9F8F6] border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A] py-3.5 px-2 border-b border-stone-200/50 hover:text-[#B5A48B] active:bg-stone-100 flex items-center justify-between min-h-[44px] rounded font-medium"
                >
                  <span>{link.label}</span>
                  <span className="text-stone-400 text-base">›</span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-premium w-full text-center bg-[#1A1A1A] text-white border-none py-3.5 text-xs min-h-[48px] rounded-lg shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#B5A48B]" />
                  <span>Agendar Consulta no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
