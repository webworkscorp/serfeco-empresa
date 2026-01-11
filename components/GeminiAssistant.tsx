
import React, { useState, useRef, useEffect } from 'react';
import { getProjectAdvice } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Bienvenido. ¿En qué podemos asesorarle hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);
    const aiResponse = await getProjectAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'Servicio no disponible.' }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-serfeco-blue text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <i className="fas fa-comment text-lg"></i>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-6 md:w-[320px] md:h-[480px] z-[60] bg-white border border-serfeco-border flex flex-col shadow-xl animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-serfeco-blue p-4 text-white flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest">Asesor Técnico</span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <i className="fas fa-times text-xs"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 text-[13px] leading-snug ${
                  m.role === 'user' ? 'bg-serfeco-blue text-white' : 'bg-white text-serfeco-dark border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-[10px] text-serfeco-gray uppercase font-bold animate-pulse">Procesando...</div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escriba aquí..."
              className="flex-1 bg-slate-100 px-3 py-2 outline-none text-[13px]"
            />
            <button onClick={handleSend} disabled={isLoading} className="text-serfeco-blue px-2">
              <i className="fas fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;
