
import React, { useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import OriginGallery from './components/OriginGallery.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-serfeco-gold selection:text-serfeco-dark">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <OriginGallery />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
