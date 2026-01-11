
import React from 'react';
import { PILLARS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="empresa" className="py-24 bg-white scroll-mt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-serfeco-blue text-xs font-bold uppercase tracking-widest mb-3">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-serfeco-dark mb-6">
              Experiencia, orden y compromiso en cada proyecto
            </h3>
            <p className="text-serfeco-gray text-lg leading-relaxed mb-8">
              Somos una empresa con más de 16 años de experiencia combinada en el sector de la construcción. Nos caracterizamos por ofrecer soluciones prácticas, materiales de calidad y una atención cercana, enfocada en cumplir lo acordado en tiempo y forma.
            </p>
            
            <p className="text-serfeco-gray mb-10">
              Contamos con licencia y seguro, trabajando bajo estándares de seguridad y responsabilidad ambiental para garantizar un servicio profesional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <i className="fas fa-check-circle text-serfeco-gold text-lg"></i>
                  </div>
                  <span className="text-sm font-semibold text-serfeco-dark leading-tight">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal delay-200">
            <div className="aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/iWcegJl.jpeg" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                alt="Proyecto MaderasMyR" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-serfeco-blue px-8 py-6 text-white shadow-2xl">
              <span className="text-4xl font-extrabold block leading-none">16+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80 mt-1 block">Años de Trayectoria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
