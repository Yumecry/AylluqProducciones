import React from 'react';
import { Play, Camera, ChevronRight } from 'lucide-react';

export default function Hero({ setCurrentView }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-main">
      {/* Background Image with Dark Vignette and Color Grading Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920"
          alt="Cinematic production background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-40 contrast-125 saturate-75 transition-all duration-1000"
        />
        {/* Gradients to main background #23041b */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main/90 via-transparent to-bg-main/90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Decorative lights (radial overlays for depth) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-red/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-brown/20 blur-[150px] pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* Subtitle / Category Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs sm:text-sm tracking-widest text-text-main uppercase mb-6 border border-text-main/15 detail-tag">
          <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></span>
          PRODUCTORA AUDIOVISUAL PREMIUM
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-text-main tracking-tight leading-none mb-6">
          Capturando la esencia de <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main via-accent-red to-accent-red/80 font-normal italic">
            momentos memorables
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-text-detail-taupe mb-10 leading-relaxed font-light">
          En <strong className="text-text-main font-normal">Aylluq Producciones</strong> creamos historias cinematográficas que perduran. Fotografía profesional y producciones de video de altísima fidelidad para bodas, eventos corporativos y retratos.
        </p>

        {/* Buttons / CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => {
              setCurrentView('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto px-8 py-4 bg-accent-red text-text-main font-semibold tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(229,53,23,0.35)] hover:shadow-[0_0_35px_rgba(229,53,23,0.6)] hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Explorar Paquetes</span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 glass-panel text-text-main hover:bg-text-main/10 font-semibold tracking-wider rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-text-main/20"
          >
            <Play className="w-4 h-4 text-accent-red fill-accent-red" />
            <span>Ver Portafolio</span>
          </a>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-detail-rose opacity-60 animate-bounce pointer-events-none hidden sm:flex">
        <span className="text-xs uppercase tracking-[0.2em] detail-tag">Desplazar</span>
        <div className="w-5 h-8 rounded-full border-2 border-text-detail-rose flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent-red animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}
