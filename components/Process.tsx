
import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-serfeco-dark text-white scroll-mt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-serfeco-gold text-xs font-bold uppercase tracking-widest mb-3">Sostenibilidad y Calidad</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Uso responsable de materiales</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Utilizamos materiales de alta calidad y priorizamos prácticas ambientalmente responsables, buscando reducir el impacto ambiental sin comprometer la resistencia ni la seguridad de nuestros proyectos.
            </p>
            <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-serfeco-gold italic text-lg font-medium">
                "Creemos que un buen trabajo empieza con buenos materiales y decisiones conscientes."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal delay-200">
            <div className="space-y-4">
              <div className="bg-white/5 p-6 border border-white/10">
                <i className="fas fa-leaf text-serfeco-gold text-2xl mb-4"></i>
                <h4 className="font-bold text-sm uppercase mb-2">Ecológico</h4>
                <p className="text-xs text-white/50">Procesos con enfoque en reducción de impacto ambiental.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <i className="fas fa-shield-alt text-serfeco-gold text-2xl mb-4"></i>
                <h4 className="font-bold text-sm uppercase mb-2">Resistente</h4>
                <p className="text-xs text-white/50">Materiales seleccionados para máxima solidez.</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/5 p-6 border border-white/10">
                <i className="fas fa-certificate text-serfeco-gold text-2xl mb-4"></i>
                <h4 className="font-bold text-sm uppercase mb-2">Calidad</h4>
                <p className="text-xs text-white/50">Estándares técnicos en cada entrega.</p>
              </div>
              <div className="bg-white/5 p-6 border border-white/10">
                <i className="fas fa-handshake text-serfeco-gold text-2xl mb-4"></i>
                <h4 className="font-bold text-sm uppercase mb-2">Ético</h4>
                <p className="text-xs text-white/50">Negocios basados en honestidad y claridad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
