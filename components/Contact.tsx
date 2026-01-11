
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !inquiry.trim()) return;

    const message = `Consulta MaderasMyR\nNombre: ${name}\nDetalles del proyecto: ${inquiry}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="consulta" className="py-24 bg-serfeco-light scroll-mt-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 reveal">
              <h2 className="text-serfeco-blue text-xs font-bold uppercase tracking-widest mb-3">Agendar</h2>
              <h3 className="text-4xl font-bold text-serfeco-dark mb-6">Hablemos sobre su proyecto</h3>
              <p className="text-serfeco-gray mb-8 leading-relaxed">
                Si está interesado en adquirir madera para construcción, remodelar o desarrollar un proyecto nuevo.
              </p>
              
              <div className="mt-12 pt-10 border-t border-serfeco-border">
                <p className="text-[10px] uppercase font-bold text-serfeco-gray mb-6 tracking-widest">Canales Oficiales</p>
                <div className="flex gap-4">
                  <a 
                    href={CONTACT_INFO.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white flex items-center justify-center text-serfeco-blue border border-serfeco-border hover:bg-serfeco-blue hover:text-white transition-all shadow-sm"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href={CONTACT_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white flex items-center justify-center text-serfeco-blue border border-serfeco-border hover:bg-serfeco-blue hover:text-white transition-all shadow-sm"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 reveal delay-200">
              <form 
                className="bg-white p-10 shadow-xl border border-serfeco-border relative" 
                onSubmit={handleSubmit}
              >
                <div className="absolute top-0 right-0 w-2 h-full bg-serfeco-gold"></div>
                <h4 className="text-lg font-bold text-serfeco-dark mb-8">Información de consulta</h4>
                
                <div className="mb-6">
                  <label className="block text-[11px] uppercase font-bold text-serfeco-gray mb-2 tracking-wide">Su Nombre</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese su nombre completo"
                    className="w-full bg-slate-50 px-5 py-4 text-sm border border-serfeco-border outline-none focus:border-serfeco-blue focus:bg-white transition-all" 
                  />
                </div>
                
                <div className="mb-10">
                  <label className="block text-[11px] uppercase font-bold text-serfeco-gray mb-2 tracking-wide">Detalles de la consulta</label>
                  <textarea 
                    required
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    placeholder="Describa brevemente su proyecto o el tipo de madera que necesita..."
                    className="w-full bg-slate-50 px-5 py-4 text-sm border border-serfeco-border outline-none h-40 resize-none focus:border-serfeco-blue focus:bg-white transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-serfeco-blue text-white py-5 font-bold text-sm uppercase tracking-[0.2em] hover:bg-serfeco-dark transition-all shadow-lg active:scale-[0.98]"
                >
                  Enviar Información
                </button>
                <p className="text-center text-[10px] text-serfeco-gray mt-6 uppercase tracking-widest font-medium">
                  Le responderemos vía WhatsApp a la brevedad
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
