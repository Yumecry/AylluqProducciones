import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/AylluqProduccionesLOGO.png';

export default function Navbar({ currentView, setCurrentView, onNavigate, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', id: 'home', type: 'view' },
    { label: 'Sobre Nosotros', id: 'about', type: 'section' },
    { label: 'Portafolio', id: 'portfolio', type: 'section' },
    { label: 'Paquetes', id: 'packages', type: 'view' },
    { label: 'Contacto', id: 'contact', type: 'section' },
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.type === 'view') {
      setCurrentView(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(item.id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-bg-main/80 backdrop-blur-md border-b border-text-main/10 shadow-lg py-1'
        : 'bg-transparent border-b border-transparent shadow-none py-3'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick({ type: 'view', id: 'home' })}>
            <img
              src={logo}
              alt="Aylluq Producciones Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 brightness-0 invert"
            />
            <span className="text-text-main font-bold text-xl tracking-widest uppercase font-sans">
              Aylluq <span className="text-accent-red font-sans">Producciones</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                (item.type === 'view' && currentView === item.id) ||
                (item.type === 'section' && activeSection === item.id && currentView === 'home');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs tracking-widest uppercase transition-all duration-350 cursor-pointer detail-tag ${isActive
                      ? 'text-accent-red font-semibold drop-shadow-[0_0_8px_rgba(229,53,23,0.5)]'
                      : 'text-text-detail-taupe hover:text-text-main font-light'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-detail-taupe hover:text-text-main focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-t border-text-main/10 bg-bg-main/95' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => {
            const isActive =
              (item.type === 'view' && currentView === item.id) ||
              (item.type === 'section' && activeSection === item.id && currentView === 'home');
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium tracking-widest uppercase transition-colors duration-300 detail-tag ${isActive
                    ? 'text-accent-red bg-bg-card-red/20 border-l-4 border-accent-red'
                    : 'text-text-detail-taupe hover:text-text-main hover:bg-bg-card-brown/20'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
