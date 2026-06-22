import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'weddings', label: 'Bodas' },
    { id: 'events', label: 'Eventos' },
    { id: 'portraits', label: 'Retratos' },
  ];

  const items = [
    {
      id: 1,
      category: 'weddings',
      title: 'Boda de Ensueño: Sofía & Carlos',
      desc: 'Fotografía exterior y cobertura de video cinematográfico.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      category: 'events',
      title: 'Concierto Acústico: Sala Estelar',
      desc: 'Video resumen dinámico y cobertura de luces.',
      img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      category: 'portraits',
      title: 'Retrato Corporativo: CEO Fintech',
      desc: 'Sesión de iluminación formal en estudio.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      category: 'weddings',
      title: 'El Primer Baile: Lucía & Andrés',
      desc: 'Captura espontánea bajo luces de hadas.',
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      category: 'events',
      title: 'Lanzamiento de Marca: NeoTech',
      desc: 'Fotografía de prensa e institucional.',
      img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      category: 'portraits',
      title: 'Retrato Editorial: Moda de Otoño',
      desc: 'Sesión artística en exteriores urbanos.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="text-center space-y-4 mb-16">
            <div className="text-accent-red text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 detail-tag">
              <Camera className="w-4 h-4" /> Portafolio
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-main tracking-tight">
              Nuestros Trabajos
            </h2>
            <p className="max-w-2xl mx-auto text-text-detail-taupe text-base sm:text-lg font-light leading-relaxed">
              Una selección exclusiva de momentos capturados en alta definición y con una mirada artística singular.
            </p>
            <div className="h-0.5 w-24 bg-accent-red mx-auto rounded-full opacity-60"></div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal animation="fade-up" delay={150} duration={800}>
          <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border cursor-pointer detail-tag ${
                  activeTab === cat.id
                    ? 'bg-accent-red border-accent-red text-text-main shadow-[0_0_15px_rgba(229,53,23,0.35)]'
                    : 'bg-transparent border-text-main/15 text-text-detail-taupe hover:border-text-main hover:text-text-main'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={(index % 3) * 100}
              duration={650}
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer border border-text-main/10 bg-bg-card-red/10 shadow-lg aspect-[4/3]"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-50"
                />

                {/* Hover overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-2.5">
                    <span className="inline-block px-3 py-1 rounded bg-accent-red/90 text-text-main text-[10px] uppercase tracking-[0.15em] font-medium detail-tag">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="text-text-main font-light text-2xl leading-tight flex items-center gap-2">
                      {item.title} <ZoomIn className="w-4 h-4 text-accent-red flex-shrink-0" />
                    </h3>
                    <p className="text-text-detail-taupe text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-main/95 backdrop-blur-md animate-fade-in">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedImage(null)}></div>

          {/* Modal Container */}
          <div className="relative max-w-4xl w-full glass-panel-heavy rounded-3xl overflow-hidden border border-text-main/20 shadow-2xl z-10">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-bg-main/60 hover:bg-accent-red text-text-main border border-text-main/10 transition-colors duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media */}
            <div className="aspect-video w-full relative">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta */}
            <div className="p-6 sm:p-8 bg-bg-card-red/20 border-t border-text-main/10 space-y-2">
              <span className="inline-block px-3 py-1 rounded bg-accent-red text-text-main text-xs font-bold uppercase tracking-widest">
                {categories.find(c => c.id === selectedImage.category)?.label}
              </span>
              <h3 className="text-2xl font-bold text-text-main tracking-tight">
                {selectedImage.title}
              </h3>
              <p className="text-text-detail-taupe text-sm leading-relaxed">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
