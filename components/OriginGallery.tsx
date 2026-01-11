
import React from 'react';

const OriginGallery: React.FC = () => {
  const images = [
    { url: 'https://i.imgur.com/vJp52EY.jpeg', title: 'Textura y Resistencia' },
    { url: 'https://i.imgur.com/bLaGOFr.jpeg', title: 'Madera Estructural' },
    { url: 'https://i.imgur.com/vC0iUYC.jpeg', title: 'Selección Rigurosa' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-serfeco-blue text-xs font-bold uppercase tracking-widest mb-3">Nuestra Materia Prima</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-serfeco-dark mb-6">
              Calidad desde el origen
            </h3>
            <p className="text-serfeco-gray text-lg leading-relaxed mb-8">
              La base de un proyecto duradero es un material excepcional. Seleccionamos personalmente cada pieza en su estado natural, asegurando que solo la madera con mejor desempeño estructural llegue a manos de nuestros clientes.
            </p>
            
            <div className="aspect-video overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.imgur.com/UpBJzAh.jpeg" 
                alt="Origen de la madera MaderasMyR" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-serfeco-dark/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-4 left-4 bg-serfeco-gold px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-serfeco-dark">
                Zona de Acopio y Selección
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4 reveal delay-200">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden shadow-lg">
                <img 
                  src={images[0].url} 
                  alt={images[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden shadow-lg">
                <img 
                  src={images[2].url} 
                  alt={images[2].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-12">
              <div className="aspect-[3/5] overflow-hidden shadow-lg">
                <img 
                  src={images[1].url} 
                  alt={images[1].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 p-6 bg-serfeco-light border-l-4 border-serfeco-blue">
                <p className="text-xs font-bold text-serfeco-blue uppercase tracking-widest mb-2">Compromiso MaderasMyR</p>
                <p className="text-sm text-serfeco-gray italic">"Madera genuina, tratada con respeto para construcciones que trascienden."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginGallery;
