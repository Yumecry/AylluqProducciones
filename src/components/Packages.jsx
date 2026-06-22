import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Check, Shield, MessageCircle, Clock, Gift, MapPin, X, ChevronLeft, ChevronRight, Video, Camera, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState('boda'); // 'boda' or 'patronal'
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const bodaPackages = [
    {
      id: 'boda-1',
      num: 'Paquete 1',
      title: 'SOLO VIDEO',
      desc: '1 videógrafo profesional',
      price: 'S/ 700.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 1 de Bodas (Solo Video, 1 videógrafo).',
      features: [
        '1 Videógrafo Profesional',
        '8 Horas de Cobertura Continua',
        'Grabación en Calidad Full HD / 4K',
        'Video de Resumen (Teaser de 3-5 min)',
        'Entrega Digital en USB Premium'
      ]
    },
    {
      id: 'boda-2',
      num: 'Paquete 2',
      title: 'SOLO VIDEO',
      desc: '2 videógrafos profesionales',
      price: 'S/ 1 130.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 2 de Bodas (Solo Video, 2 videógrafos).',
      features: [
        '2 Videógrafos Profesionales',
        'Multicámara para Ceremonia y Fiesta',
        'Cobertura de 8 Horas',
        'Edición Cinematográfica Avanzada',
        'Video Documental Completo (30-45 min)'
      ]
    },
    {
      id: 'boda-3',
      num: 'Paquete 3',
      title: 'SOLO FOTO',
      desc: '1 fotógrafo profesional',
      price: 'S/ 650.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 3 de Bodas (Solo Foto, 1 fotógrafo).',
      features: [
        '1 Fotógrafo Profesional',
        'Retratos Artísticos y Cobertura Completa',
        'Edición y Corrección de Color Digital',
        'Más de 300 Fotos en Alta Resolución',
        'Galería Online Privada por 3 meses'
      ]
    },
    {
      id: 'boda-4',
      num: 'Paquete 4',
      title: 'VIDEO + FOTOS',
      desc: '1 videógrafo + 1 fotógrafo profesional',
      price: 'S/ 1 100.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 4 de Bodas (Video + Fotos, 1 videógrafo + 1 fotógrafo).',
      popular: true,
      features: [
        '1 Videógrafo + 1 Fotógrafo Profesional',
        'Cobertura Integral (Pre-boda hasta Fiesta)',
        'Video Teaser + Video Completo Editado',
        'Más de 400 Fotos Editadas en Alta Resolución',
        'Entrega en Caja de Madera USB Personalizada'
      ]
    },
    {
      id: 'boda-5',
      num: 'Paquete 5',
      title: 'VIDEO + DRONE',
      desc: '1 videógrafo + 1 dronero profesional',
      price: 'S/ 1 150.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 5 de Bodas (Video + Drone, 1 videógrafo + 1 dronero).',
      features: [
        '1 Videógrafo + 1 Piloto de Drone Certificado',
        'Tomas Aéreas Cinematográficas (4K)',
        'Cobertura Terrestre y Aérea de 8 Horas',
        'Video Resumen Cinematográfico',
        'Audio Profesional de Ceremonia Grabado en Consola'
      ]
    },
    {
      id: 'boda-6',
      num: 'Paquete 6',
      title: 'VIDEO + DRONE + FOTOS',
      desc: '1 videógrafo + 1 dronero + 1 fotógrafo profesional',
      price: 'S/ 1 500.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 6 de Bodas (Video + Drone + Fotos, 1 videógrafo + 1 dronero + 1 fotógrafo).',
      premium: true,
      features: [
        'Equipo de 3 Profesionales (Foto, Video y Drone)',
        'Cobertura Aérea y Terrestre Completa',
        'Fotografías Ilimitadas en Alta Resolución',
        'Video Resumen Premium (5 min) + Video Largo',
        'Sesión Pre-boda de Regalo Incluida'
      ]
    }
  ];

  const patronalPackages = [
    {
      id: 'patronal-1',
      num: 'Paquete 1',
      title: 'SOLO VIDEO',
      desc: '1 videógrafo profesional',
      dailyPrice: 'S/ 450.00',
      totalPrice: 'S/ 1 350.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 1 de Fiestas Patronales (Solo Video, 1 videógrafo).',
      features: [
        '1 Videógrafo Cobertura Base',
        'Grabación de Pasacalles, Misas y Baile',
        'Resumen de Fiesta Patronal (15-20 min)',
        'Sonido Directo de Bandas/Orquestas'
      ]
    },
    {
      id: 'patronal-2',
      num: 'Paquete 2',
      title: 'SOLO VIDEO',
      desc: '2 videógrafos profesionales',
      dailyPrice: 'S/ 850.00',
      totalPrice: 'S/ 2 550.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 2 de Fiestas Patronales (Solo Video, 2 videógrafos).',
      features: [
        '2 Videógrafos Profesionales (Dos Ángulos)',
        'Grabación Multicámara de Ceremonias Clave',
        'Video Documental Extendido de la Festividad',
        'Edición Premium con Música Tradicional y Ambiental'
      ]
    },
    {
      id: 'patronal-3',
      num: 'Paquete 3',
      title: 'SOLO FOTO',
      desc: '1 fotógrafo profesional',
      dailyPrice: 'S/ 400.00',
      totalPrice: 'S/ 1 200.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 3 de Fiestas Patronales (Solo Foto, 1 fotógrafo).',
      features: [
        '1 Fotógrafo Cobertura Completa de 3 Días',
        'Fotografía Documental, Retratos de Mayordomos',
        'Edición Digital de Color y Contraste',
        'Más de 500 Fotos Digitales en Alta Resolución'
      ]
    },
    {
      id: 'patronal-4',
      num: 'Paquete 4',
      title: 'VIDEO + FOTOS',
      desc: '1 videógrafo + 1 fotógrafo profesional',
      dailyPrice: 'S/ 750.00',
      totalPrice: 'S/ 2 250.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete 4 de Fiestas Patronales (Video + Fotos, 1 videógrafo + 1 fotógrafo).',
      popular: true,
      features: [
        '1 Videógrafo + 1 Fotógrafo en Equipo',
        'Cobertura de Fotos y Video Durante los 3 Días',
        'Documental del Evento + Teaser de Redes Sociales',
        'Galería de Fotos en Alta Calidad y Video en USB'
      ]
    },
    {
      id: 'patronal-special',
      num: 'Paquete Especial',
      title: 'VIDEO + DRONE',
      desc: '2 videógrafos + 1 dronero + 1 reportero profesional',
      dailyPrice: 'S/ 1 350.00',
      totalPrice: 'S/ 4 050.00',
      whatsappMsg: 'Hola Aylluq Producciones, deseo cotizar el Paquete Especial de Fiestas Patronales (Video + Drone, 2 videógrafos + 1 dronero + 1 reportero).',
      premium: true,
      features: [
        'Gran Equipo: 2 Video + 1 Drone + 1 Reportero',
        'Tomas Aéreas Espectaculares del Pueblo y Danzas',
        'Entrevistas a los Mayordomos e Invitados Especiales',
        'Video Documental Completo de Cine de la Festividad',
        'Audio Estéreo de Bandas Grabado con Micrófonos de Campo'
      ]
    }
  ];

  const bodaImages = [
    'https://images.unsplash.com/photo-1519225495810-7517c2440bce?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1520854221256-174b1ec35cce?auto=format&fit=crop&q=80&w=800'
  ];

  const patronalImages = [
    'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=800'
  ];

  const activeImages = activeCategory === 'boda' ? bodaImages : patronalImages;

  useEffect(() => {
    if (selectedImageIndex === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, activeImages]);

  return (
    <section id="packages" className="py-32 bg-bg-main relative overflow-hidden">
      {/* Decorative side glow */}
      <div className="absolute left-[-10%] top-[40%] w-[40%] h-[40%] rounded-full bg-bg-card-red/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="text-center space-y-4 mb-16">
            <span className="text-accent-red text-xs font-semibold uppercase tracking-[0.2em] detail-tag">
              Tarifas y Presupuestos
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-main tracking-tight">
              Nuestros Paquetes
            </h2>
            <p className="max-w-2xl mx-auto text-text-detail-taupe text-base sm:text-lg font-light leading-relaxed">
              Elige el formato de cobertura que se adapte perfectamente a tu evento. Haz clic en las muestras de fotos para expandirlas y en el botón para cotizar por WhatsApp.
            </p>
            <div className="h-0.5 w-24 bg-accent-red mx-auto rounded-full opacity-60"></div>
          </div>
        </ScrollReveal>

        {/* Category Selector Tabs */}
        <ScrollReveal animation="fade-up" delay={100} duration={800}>
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveCategory('boda')}
              className={`px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border cursor-pointer detail-tag ${
                activeCategory === 'boda'
                  ? 'bg-accent-red border-accent-red text-text-main shadow-[0_0_20px_rgba(229,53,23,0.3)]'
                  : 'bg-transparent border-text-main/15 text-text-detail-taupe hover:border-text-main hover:text-text-main'
              }`}
            >
              Presupuesto para Bodas
            </button>
            <button
              onClick={() => setActiveCategory('patronal')}
              className={`px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border cursor-pointer detail-tag ${
                activeCategory === 'patronal'
                  ? 'bg-accent-red border-accent-red text-text-main shadow-[0_0_20px_rgba(229,53,23,0.3)]'
                  : 'bg-transparent border-text-main/15 text-text-detail-taupe hover:border-text-main hover:text-text-main'
              }`}
            >
              Fiestas Patronales
            </button>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Image Collage Strip (Editorial style) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <ScrollReveal animation="fade-right" duration={1000} className="space-y-6">
              {/* Dynamic Collage Title */}
              <div className="border-l-2 border-accent-red pl-4 py-1">
                <span className="text-xs text-text-detail-rose uppercase tracking-widest detail-tag block">
                  Galería de Muestras
                </span>
                <h3 className="text-2xl font-light text-text-main tracking-tight mt-1">
                  {activeCategory === 'boda' ? 'Momentos de Boda' : 'Celebraciones Patronales'}
                </h3>
              </div>

              {/* Asymmetric collage */}
              <div className="relative h-[480px] w-full">
                {/* Large Background Photo */}
                <div 
                  onClick={() => setSelectedImageIndex(0)}
                  className="absolute left-0 top-0 w-[75%] h-[320px] rounded-lg overflow-hidden border border-text-main/10 shadow-lg cursor-zoom-in group z-0"
                >
                  <img
                    src={activeCategory === 'boda' ? bodaImages[0] : patronalImages[0]}
                    alt="Sample collage 1"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xxs font-mono tracking-widest text-text-main uppercase bg-black/80 border border-text-main/20 px-3.5 py-2 rounded-full backdrop-blur-xs shadow-lg">Ampliar Muestra</span>
                  </div>
                </div>
                {/* Overlapping Foreground Photo */}
                <div 
                  onClick={() => setSelectedImageIndex(1)}
                  className="absolute right-0 bottom-4 w-[65%] h-[240px] rounded-lg overflow-hidden border border-text-main/20 shadow-xl z-10 cursor-zoom-in group"
                >
                  <img
                    src={activeCategory === 'boda' ? bodaImages[1] : patronalImages[1]}
                    alt="Sample collage 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xxs font-mono tracking-widest text-text-main uppercase bg-black/80 border border-text-main/20 px-3.5 py-2 rounded-full backdrop-blur-xs shadow-lg">Ampliar Muestra</span>
                  </div>
                </div>
                {/* Small Accent Photo */}
                <div 
                  onClick={() => setSelectedImageIndex(2)}
                  className="absolute left-4 bottom-0 w-[40%] h-[120px] rounded-lg overflow-hidden border border-text-main/10 shadow-md z-20 cursor-zoom-in group"
                >
                  <img
                    src={activeCategory === 'boda' ? bodaImages[2] : patronalImages[2]}
                    alt="Sample collage 3"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xxs font-mono tracking-widest text-text-main uppercase bg-black/80 border border-text-main/20 px-2.5 py-1 rounded-full backdrop-blur-xs shadow-md">Ampliar</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Packages Table List */}
          <div className="lg:col-span-7 space-y-6">
            {activeCategory === 'boda' ? (
              /* Bodas List */
              <div className="space-y-6">
                {bodaPackages.map((pkg, index) => {
                  const isHighlighted = pkg.popular || pkg.premium;
                  return (
                    <ScrollReveal
                      key={pkg.id}
                      animation="fade-up"
                      delay={index * 80}
                      duration={600}
                    >
                      <div className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex flex-col gap-5 relative group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                        isHighlighted 
                          ? 'border-accent-red/35 bg-bg-card-red/10 shadow-[0_0_30px_rgba(229,53,23,0.1)]' 
                          : 'border-text-main/10 hover:border-accent-red/30'
                      }`}>
                        {/* Popular badge */}
                        {pkg.popular && (
                          <span className="absolute top-4 right-4 bg-accent-red text-text-main text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold shadow-lg">
                            Más Vendido
                          </span>
                        )}
                        {pkg.premium && (
                          <span className="absolute top-4 right-4 bg-accent-brown border border-accent-red/30 text-text-main text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold shadow-lg">
                            Recomendado
                          </span>
                        )}

                        {/* Top Info */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-text-main/5 pb-4">
                          <div className="space-y-1">
                            <span className="text-xs text-accent-red tracking-widest font-mono font-semibold block uppercase">
                              // {pkg.num}
                            </span>
                            <h4 className="text-2xl font-light text-text-main tracking-tight group-hover:text-accent-red transition-colors duration-300">
                              {pkg.title}
                            </h4>
                            <p className="text-text-detail-taupe text-sm font-light">
                              {pkg.desc}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                            {/* Price Tag Box */}
                            <div className="flex flex-col items-end justify-center px-6 py-3 rounded-xl bg-bg-card-red/20 border border-text-main/10 min-w-[130px] group-hover:border-accent-red/30 transition-colors duration-300">
                              <span className="text-[9px] uppercase tracking-widest text-text-detail-rose font-mono mb-0.5">Inversión</span>
                              <span className="text-xl font-mono text-text-main font-semibold">{pkg.price}</span>
                            </div>

                            {/* Booking CTA */}
                            <a
                              href={`https://wa.me/51969878834?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-4 rounded-xl bg-accent-red hover:bg-accent-red/90 text-text-main hover:scale-105 transition-all duration-300 shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center border border-accent-red/20"
                              title="Reservar en WhatsApp"
                            >
                              <MessageCircle className="w-5 h-5 fill-text-main stroke-bg-main" />
                            </a>
                          </div>
                        </div>

                        {/* Features Inclusions List */}
                        <div className="space-y-3">
                          <span className="text-[10px] uppercase tracking-widest text-text-detail-taupe font-mono block">¿Qué Incluye el Servicio?</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-text-detail-taupe font-light">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-accent-red flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              /* Fiestas Patronales List */
              <div className="space-y-6">
                {patronalPackages.map((pkg, index) => {
                  const isHighlighted = pkg.popular || pkg.premium;
                  return (
                    <ScrollReveal
                      key={pkg.id}
                      animation="fade-up"
                      delay={index * 80}
                      duration={600}
                    >
                      <div className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex flex-col gap-5 relative group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                        isHighlighted 
                          ? 'border-accent-red/35 bg-bg-card-red/10 shadow-[0_0_30px_rgba(229,53,23,0.1)]' 
                          : 'border-text-main/10 hover:border-accent-red/30'
                      }`}>
                        {/* Popular badge */}
                        {pkg.popular && (
                          <span className="absolute top-4 right-4 bg-accent-red text-text-main text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold shadow-lg">
                            Más Vendido
                          </span>
                        )}
                        {pkg.premium && (
                          <span className="absolute top-4 right-4 bg-accent-brown border border-accent-red/30 text-text-main text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-mono font-bold shadow-lg">
                            Recomendado
                          </span>
                        )}

                        {/* Top Info */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-text-main/5 pb-4">
                          <div className="space-y-1">
                            <span className="text-xs text-accent-red tracking-widest font-mono font-semibold block uppercase">
                              // {pkg.num}
                            </span>
                            <h4 className="text-2xl font-light text-text-main tracking-tight group-hover:text-accent-red transition-colors duration-300">
                              {pkg.title}
                            </h4>
                            <p className="text-text-detail-taupe text-sm font-light">
                              {pkg.desc}
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                            {/* Daily price box */}
                            <div className="flex flex-col items-center justify-center px-4 py-2.5 rounded-xl bg-bg-card-brown/20 border border-text-main/5 min-w-[95px]">
                              <span className="text-[9px] uppercase tracking-wider text-text-detail-taupe detail-tag mb-0.5">Por Día</span>
                              <span className="text-sm font-mono text-text-detail-taupe font-medium">{pkg.dailyPrice}</span>
                            </div>

                            {/* 3 days total price box */}
                            <div className="flex flex-col items-center justify-center px-5 py-2.5 rounded-xl bg-bg-card-red/35 border border-accent-red/30 min-w-[125px] shadow-[0_0_15px_rgba(229,53,23,0.15)] group-hover:border-accent-red/50 transition-colors duration-300">
                              <span className="text-[9px] uppercase tracking-widest text-accent-red font-mono mb-0.5 font-bold">Total (3 Días)</span>
                              <span className="text-md font-mono text-text-main font-semibold underline decoration-accent-red decoration-2">{pkg.totalPrice}</span>
                            </div>

                            {/* Booking CTA */}
                            <a
                              href={`https://wa.me/51969878834?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-4 rounded-xl bg-accent-red hover:bg-accent-red/90 text-text-main hover:scale-105 transition-all duration-300 shadow-md cursor-pointer flex-shrink-0 flex items-center justify-center border border-accent-red/20"
                              title="Reservar en WhatsApp"
                            >
                              <MessageCircle className="w-5 h-5 fill-text-main stroke-bg-main" />
                            </a>
                          </div>
                        </div>

                        {/* Features Inclusions List */}
                        <div className="space-y-3">
                          <span className="text-[10px] uppercase tracking-widest text-text-detail-taupe font-mono block">¿Qué Incluye el Servicio?</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-text-detail-taupe font-light">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-accent-red flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Global Delivery and Conditions Section */}
        <ScrollReveal animation="fade-up" duration={800} className="mt-24 border-t border-text-main/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Condition 1: Deliveries */}
            <div className="glass-panel p-6 rounded-2xl border border-text-main/5 hover:border-accent-red/10 transition-colors duration-300 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-bg-card-brown/40 border border-text-main/10 text-accent-red flex-shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-text-main font-semibold text-lg uppercase tracking-wider text-xs detail-tag">
                  Entregas de Trabajo
                </h4>
                <p className="text-text-detail-taupe text-sm font-light leading-relaxed">
                  Entregamos el material en medios digitales: <strong>Memoria USB</strong> conteniendo todos los videos editados y fotografías en alta definición.
                </p>
              </div>
            </div>

            {/* Condition 2: Payment options */}
            <div className="glass-panel p-6 rounded-2xl border border-text-main/5 hover:border-accent-red/10 transition-colors duration-300 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-bg-card-brown/40 border border-text-main/10 text-accent-red flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-text-main font-semibold text-lg uppercase tracking-wider text-xs detail-tag">
                  Formas de Pago
                </h4>
                <p className="text-text-detail-taupe text-sm font-light leading-relaxed">
                  Contrato de prestación de servicios con **50% de adelanto** para la reserva y firma, y el **50% restante al terminar el día del evento**.
                </p>
              </div>
            </div>

            {/* Condition 3: Logistics details */}
            <div className="glass-panel p-6 rounded-2xl border border-text-main/5 hover:border-accent-red/10 transition-colors duration-300 flex items-start gap-4">
              <div className="p-3 rounded-lg bg-bg-card-brown/40 border border-text-main/10 text-accent-red flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-text-main font-semibold text-lg uppercase tracking-wider text-xs detail-tag">
                  Detalles de Cobertura
                </h4>
                <p className="text-text-detail-taupe text-sm font-light leading-relaxed">
                  {activeCategory === 'boda' 
                    ? 'Los presupuestos de boda incluyen 8 horas de cobertura continua. La hora adicional tiene un costo de S/ 120.' 
                    : 'Para fiestas patronales la cotización es de 3 días base de cobertura. Nota: no incluye pasaje ni viáticos fuera de Lima.'}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Photography Gear Commitment Section */}
        <ScrollReveal animation="fade-up" duration={800} className="mt-20 border-t border-text-main/10 pt-16">
          <div className="text-center space-y-4 mb-12">
            <span className="text-accent-red text-xs font-semibold uppercase tracking-[0.2em] detail-tag">
              Equipamiento Profesional
            </span>
            <h3 className="text-3xl font-light text-text-main tracking-tight">
              Tecnología y Óptica de Vanguardia
            </h3>
            <p className="max-w-2xl mx-auto text-text-detail-taupe text-sm font-light leading-relaxed">
              Utilizamos equipos de nivel cinematográfico para asegurar que cada fotograma y toma aérea posea la máxima fidelidad cromática, nitidez y rango dinámico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-5 rounded-2xl border border-text-main/5 hover:border-accent-red/20 transition-all duration-300 flex flex-col items-center text-center space-y-3 group hover:-translate-y-0.5">
              <div className="p-4 rounded-xl bg-bg-card-brown/30 border border-text-main/10 text-accent-red">
                <Video className="w-6 h-6" />
              </div>
              <h4 className="text-text-main font-semibold text-sm uppercase tracking-wider font-mono">Cámaras 4K Cine</h4>
              <p className="text-text-detail-rose text-xs font-light leading-relaxed">Cuerpos Sony FX3 / A7SIII con grabación en 4K a 10 bits y tasas elevadas de cuadros para cámara lenta fluida.</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-text-main/5 hover:border-accent-red/20 transition-all duration-300 flex flex-col items-center text-center space-y-3 group hover:-translate-y-0.5">
              <div className="p-4 rounded-xl bg-bg-card-brown/30 border border-text-main/10 text-accent-red">
                <Camera className="w-6 h-6" />
              </div>
              <h4 className="text-text-main font-semibold text-sm uppercase tracking-wider font-mono">Lentes G-Master</h4>
              <p className="text-text-detail-rose text-xs font-light leading-relaxed">Ópticas fijas ultra-luminosas f/1.2 y f/1.4 para retratos de bodas con excelente nitidez y bokeh cinematográfico.</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-text-main/5 hover:border-accent-red/20 transition-all duration-300 flex flex-col items-center text-center space-y-3 group hover:-translate-y-0.5">
              <div className="p-4 rounded-xl bg-bg-card-brown/30 border border-text-main/10 text-accent-red">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-text-main font-semibold text-sm uppercase tracking-wider font-mono">Drones DJI</h4>
              <p className="text-text-detail-rose text-xs font-light leading-relaxed">Sistemas aéreos DJI Mavic 3 Pro Cine para tomas de drone espectaculares con perfiles de color planos (D-Log).</p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-text-main/5 hover:border-accent-red/20 transition-all duration-300 flex flex-col items-center text-center space-y-3 group hover:-translate-y-0.5">
              <div className="p-4 rounded-xl bg-bg-card-brown/30 border border-text-main/10 text-accent-red">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-text-main font-semibold text-sm uppercase tracking-wider font-mono">Estabilizadores</h4>
              <p className="text-text-detail-rose text-xs font-light leading-relaxed">Gimbals DJI Ronin RS3 Pro y audio digital inalámbrico Rode Wireless PRO con grabación float de 32 bits.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4 animate-fade-in">
            {/* Background click to close */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setSelectedImageIndex(null)}
            />
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-text-main/70 hover:text-text-main hover:bg-white/10 p-3 rounded-full transition-all duration-200 z-[110] cursor-pointer"
              aria-label="Cerrar galería"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left Control Arrow */}
            <button 
              onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1))}
              className="absolute left-6 text-text-main/70 hover:text-text-main hover:bg-white/10 p-3 rounded-full transition-all duration-200 z-[110] cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Control Arrow */}
            <button 
              onClick={() => setSelectedImageIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-6 text-text-main/70 hover:text-text-main hover:bg-white/10 p-3 rounded-full transition-all duration-200 z-[110] cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image display wrapper */}
            <div className="relative max-w-5xl max-h-[85vh] z-[105] flex flex-col items-center animate-zoom-in">
              <img 
                src={activeImages[selectedImageIndex]} 
                alt={`Muestra expandida ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-text-main/15"
              />
              
              {/* Photo counter */}
              <div className="mt-4 px-4 py-2 rounded-full bg-bg-main/90 border border-text-main/10 text-xs font-mono text-text-main shadow-md flex items-center gap-2">
                <span className="text-accent-red font-semibold">&gt;</span>
                <span>Imagen {selectedImageIndex + 1} de {activeImages.length}</span>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
