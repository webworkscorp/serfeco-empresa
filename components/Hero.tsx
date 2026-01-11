
import React from 'react';

const Hero: React.FC = () => {
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
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-serfeco-dark overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-serfeco-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source 
            src="https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/0_Construction_Workers_Blueprint_3840x2160.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-serfeco-dark via-serfeco-dark/60 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="animate-hero-up opacity-0" style={{ animationDelay: '200ms' }}>
            <span className="inline-block text-serfeco-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 border-b border-serfeco-gold/30 pb-2">
              Expertos en Madera Estructural
            </span>
            <h1 className="mb-8">
              <span className="block text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Madera para <br />
                <span className="text-serfeco-gold">Construcción</span>
              </span>
            </h1>
          </div>

          <div className="animate-hero-up opacity-0" style={{ animationDelay: '400ms' }}>
            <p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-12 max-w-xl">
              Seleccionamos materiales de alta resistencia para proyectos que exigen durabilidad, puntualidad y un enfoque técnico superior.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 animate-hero-up opacity-0" style={{ animationDelay: '600ms' }}>
            <a 
              href="#servicios" 
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="bg-serfeco-blue text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-2xl active:scale-95"
            >
              Explorar Servicios
            </a>
            <a 
              href="#consulta" 
              onClick={(e) => scrollToSection(e, 'consulta')}
              className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-serfeco-dark transition-all active:scale-95"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll sutil */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
