import React from 'react';
import { ShieldCheck, Video, Heart, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const highlights = [
    {
      icon: <Video className="w-6 h-6 text-accent-red" />,
      title: 'Mirada Cinematográfica',
      desc: 'No solo grabamos video; creamos piezas de cine digital que capturan el alma y las emociones de tus momentos.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent-red" />,
      title: 'Edición Premium',
      desc: 'Un proceso minucioso de corrección de color, diseño sonoro y montaje musical adaptado al estilo único de tu evento.',
    },
    {
      icon: <Heart className="w-6 h-6 text-accent-red" />,
      title: 'Pasión por el Detalle',
      desc: 'Desde retratos íntimos hasta coberturas masivas, priorizamos los detalles y los gestos espontáneos sobre las poses.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-bg-main relative overflow-hidden">
      {/* Decorative accent background flare */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-bg-card-red/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Asymmetric Editorial Images Composition (Central style) */}
          <ScrollReveal animation="fade-right" duration={1200} className="relative h-[550px] w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
            {/* Background floating card (Top Right) */}
            <div className="absolute right-0 top-4 w-[48%] h-[200px] rounded-lg overflow-hidden border border-text-main/10 shadow-xl opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-[1.03] group">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600"
                alt="Photography camera setup"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>

            {/* Main large vertical card (Left) */}
            <div className="absolute left-0 top-12 w-[60%] h-[380px] rounded-lg overflow-hidden border border-text-main/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-700 hover:scale-[1.02] group">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                alt="Videographer recording"
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent"></div>
            </div>

            {/* Overlapping foreground card (Bottom Right) */}
            <div className="absolute right-4 bottom-8 w-[52%] h-[240px] rounded-lg overflow-hidden border border-text-main/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-20 transition-all duration-700 hover:scale-[1.04] group">
              <img
                src="https://images.unsplash.com/photo-1520854221256-174b1ec35cce?auto=format&fit=crop&q=80&w=600"
                alt="Wedding couple photoshoot"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 to-transparent"></div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-2 left-6 glass-panel-heavy py-4 px-6 rounded-lg border border-text-main/20 shadow-2xl flex items-center gap-3 z-30 animate-pulse">
              <div className="text-3xl font-bold text-accent-red tracking-tighter">5+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-main font-bold leading-tight">
                Años de <br /> Experiencia
              </div>
            </div>
          </ScrollReveal>

          {/* Description Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal animation="fade-left" duration={800}>
              <div className="space-y-4">
                <div className="text-accent-red text-xs font-semibold uppercase tracking-[0.2em] detail-tag">
                  ¿Quiénes Somos?
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-main tracking-tight leading-tight">
                  Aylluq Producciones
                </h2>
                <div className="h-0.5 w-24 bg-accent-red rounded-full opacity-60"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" duration={800} delay={150}>
              <p className="text-text-detail-taupe text-lg sm:text-xl leading-relaxed font-light">
                Nacimos con la firme convicción de que cada historia merece ser contada con la máxima calidad y sensibilidad estética. Nos especializamos en capturar la complicidad de las bodas, la energía de los eventos y la autenticidad en los retratos corporativos y personales.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" duration={800} delay={250}>
              <p className="text-text-detail-rose text-base sm:text-lg leading-relaxed font-light">
                El término <strong>"Aylluq"</strong> proviene del quechua y evoca los lazos de familia y comunidad. Para nosotros, cada cliente se convierte en parte de nuestra red creativa, plasmando sus memorias más preciadas en obras visuales eternas.
              </p>
            </ScrollReveal>

            {/* Highlight Cards */}
            <div className="space-y-6 pt-4">
              {highlights.map((h, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={300 + index * 100} duration={600}>
                  <div className="flex gap-5 p-4 rounded-xl hover:bg-bg-card-red/20 transition-all duration-300 border border-transparent hover:border-text-main/5 group">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-bg-card-brown/40 border border-text-main/10 h-fit transition-transform duration-300 group-hover:scale-105">
                      {h.icon}
                    </div>
                    <div>
                      <h3 className="text-text-main font-semibold text-xl mb-1.5">{h.title}</h3>
                      <p className="text-text-detail-taupe text-base leading-relaxed font-light">{h.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
