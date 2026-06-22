import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import logo from '../assets/AylluqProduccionesLOGO.png';

export default function Footer() {
  const whatsappUrl = 'https://wa.me/51969878834?text=' + encodeURIComponent('Hola Aylluq Producciones, deseo información sobre los paquetes de fotografía.');

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://www.facebook.com/profile.php?id=61577762212093',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/aylluq.producciones/',
    },
    {
      name: 'WhatsApp',
      icon: <Phone className="w-5 h-5" />,
      url: whatsappUrl,
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:aylluqfoto@gmail.com',
    },
  ];

  return (
    <footer id="contact" className="bg-bg-main border-t border-text-main/15 pt-20 pb-10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute left-10 bottom-0 w-80 h-80 rounded-full bg-accent-red/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <ScrollReveal animation="fade-up" duration={800} className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Aylluq Producciones Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 brightness-0 invert"
              />
              <span className="text-text-main font-bold text-xl tracking-widest uppercase">
                Aylluq <span className="text-accent-red">Producciones</span>
              </span>
            </div>
            <p className="text-text-detail-taupe text-sm font-light leading-relaxed max-w-sm">
              Creando recuerdos eternos a través de lentes de alta fidelidad. Especialistas en fotografía artística y cinematografía de eventos, bodas y retratos.
            </p>
            {/* Social Icons row */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-bg-card-brown/40 border border-text-main/10 hover:border-accent-red hover:bg-accent-red hover:text-text-main text-text-detail-taupe flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Contacts */}
          <ScrollReveal animation="fade-up" duration={800} delay={150} className="space-y-6">
            <h4 className="text-text-main font-bold uppercase tracking-wider text-xs border-l-2 border-accent-red pl-3">
              Contacto Directo
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-detail-taupe hover:text-text-main text-sm font-light transition-colors duration-250 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-accent-red flex-shrink-0" />
                  <span>WhatsApp: 969 878 834</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:aylluqfoto@gmail.com"
                  className="flex items-center gap-3 text-text-detail-taupe hover:text-text-main text-sm font-light transition-colors duration-250 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-accent-red flex-shrink-0" />
                  <span>aylluqfoto@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-detail-taupe text-sm font-light">
                <MapPin className="w-4 h-4 text-accent-red flex-shrink-0" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </ScrollReveal>

          {/* Business Hours */}
          <ScrollReveal animation="fade-up" duration={800} delay={300} className="space-y-6">
            <h4 className="text-text-main font-bold uppercase tracking-wider text-xs border-l-2 border-accent-red pl-3">
              Atención
            </h4>
            <div className="space-y-2 text-text-detail-taupe text-sm font-light">
              <p className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span className="text-text-main font-medium">9:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sábados:</span>
                <span className="text-text-main font-medium">9:00 - 14:00</span>
              </p>
              <p className="flex justify-between text-text-detail-rose">
                <span>Domingos:</span>
                <span>Previa cita</span>
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-bg-card-red/10 border border-text-main/5 text-xxs text-text-detail-rose text-center leading-relaxed">
              Reserva con anticipación de 2 a 4 semanas para asegurar la fecha de tu producción.
            </div>
          </ScrollReveal>
        </div>

        <div className="h-px bg-text-main/10 mb-8"></div>

        {/* Bottom Rights */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xxs text-text-detail-rose/70 font-light">
          <p>© {new Date().getFullYear()} Aylluq Producciones. Todos los derechos reservados.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-text-main transition-colors duration-300">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-text-main transition-colors duration-300">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
