
import React from 'react';
import { BRAND_NAME, CONTACT_INFO, BRAND_LOGO } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-serfeco-dark text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={BRAND_LOGO} 
                alt={BRAND_NAME} 
                className="h-10 w-auto brightness-0 invert" 
              />
              <span className="font-bold text-lg">{BRAND_NAME}</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">
              Servicios técnicos de construcción y carpintería con 16 años de trayectoria en Costa Rica.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-serfeco-gold hover:bg-serfeco-gold hover:text-serfeco-dark transition-all"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-serfeco-gold hover:bg-serfeco-gold hover:text-serfeco-dark transition-all"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-serfeco-gold mb-4">Menú</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a 
                  href="#servicios" 
                  onClick={(e) => scrollToSection(e, 'servicios')}
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#empresa" 
                  onClick={(e) => scrollToSection(e, 'empresa')}
                  className="hover:text-white transition-colors"
                >
                  Empresa
                </a>
              </li>
              <li>
                <a 
                  href="#proceso" 
                  onClick={(e) => scrollToSection(e, 'proceso')}
                  className="hover:text-white transition-colors"
                >
                  Proceso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-serfeco-gold mb-4">Contacto</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>{CONTACT_INFO.phone}</li>
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a></li>
              <li>San José, Costa Rica</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {BRAND_NAME}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
