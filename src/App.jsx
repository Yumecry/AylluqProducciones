import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'packages'
  const [activeSection, setActiveSection] = useState('home');

  // Navigate to standard anchors on Home Page
  const onNavigate = (sectionId) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Scroll active section observer (IntersectionObserver)
  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = ['home', 'about', 'portfolio', 'contact'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle part of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentView]);

  return (
    <div className="bg-bg-main min-h-screen text-text-main flex flex-col selection:bg-accent-red selection:text-text-main">
      {/* Dynamic Background Mesh Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-bg-card-red/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-brown/10 blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onNavigate={onNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow z-10 relative">
        {currentView === 'home' ? (
          <div className="space-y-0">
            <div id="home">
              <Hero setCurrentView={setCurrentView} />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="portfolio">
              <Portfolio />
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Packages />
          </div>
        )}
      </main>

      {/* Footer / Contact (visible at all times) */}
      <div className="z-10 relative">
        <Footer />
      </div>
    </div>
  );
}
