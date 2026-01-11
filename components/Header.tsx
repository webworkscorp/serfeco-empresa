
import React, { useState, useEffect } from 'react';
import { BRAND_NAME, BRAND_LOGO } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Empresa', id: 'empresa' },
    { label: 'Proceso', id: 'proceso' }
  ];

  const blueFilter = {
    filter: scrolled 
      ? 'brightness(0) invert(24%) sepia(88%) saturate(1637%) hue-rotate(188deg) brightness(94%) contrast(96%)' 
      : 'none'
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="section-container flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => scrollToSection(e, 'inicio')}
          className="flex items-center gap-3"
        >
          <img 
            src={BRAND_LOGO} 
            alt={BRAND_NAME} 
            style={blueFilter}
            className={`${scrolled ? 'h-10' : 'h-14'} w-auto transition-all`}
          />
          <span className={`font-bold text-lg tracking-tight ${scrolled ? 'text-serfeco-blue' : 'text-white'}`}>
            {BRAND_NAME}
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-xs font-bold uppercase tracking-wider ${scrolled ? 'text-serfeco-gray hover:text-serfeco-blue' : 'text-white/80 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#consulta"
            onClick={(e) => scrollToSection(e, 'consulta')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${scrolled ? 'bg-serfeco-blue text-white' : 'bg-serfeco-gold text-serfeco-dark hover:opacity-90'}`}
          >
            Consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
