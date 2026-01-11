
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-serfeco-light scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-serfeco-blue text-sm font-bold uppercase tracking-widest mb-4">Nuestras Soluciones</h2>
          <h3 className="text-3xl font-bold text-serfeco-dark">Servicios Especializados</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white group p-10 border-t-4 border-t-serfeco-blue border-x border-b border-serfeco-border hover:shadow-2xl transition-all reveal delay-${(index + 1) * 100}`}
            >
              <div className="mb-8">
                <div className="w-14 h-14 bg-serfeco-light text-serfeco-blue flex items-center justify-center mb-6 group-hover:bg-serfeco-blue group-hover:text-white transition-colors duration-300">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-serfeco-dark mb-4">{service.title}</h4>
                <div className="w-12 h-1 bg-serfeco-gold mb-6"></div>
                <p className="text-sm text-serfeco-gray leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-serfeco-blue/60 mb-2">Alcance del servicio:</p>
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-serfeco-gold flex-shrink-0"></div>
                    <span className="text-xs font-semibold text-serfeco-dark/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
