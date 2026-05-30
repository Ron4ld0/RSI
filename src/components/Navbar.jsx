import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenRSVP }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-rsiDark-950/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src="/logo.resende.PNG" 
            alt="Resende Logo" 
            className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#historia" className="text-xs tracking-widest text-gray-300 hover:text-white transition-colors uppercase font-medium">
            História
          </a>
          <a href="#evento" className="text-xs tracking-widest text-gray-300 hover:text-white transition-colors uppercase font-medium">
            Convenção
          </a>
          <button 
            onClick={onOpenRSVP}
            className="text-xs tracking-widest text-rsiGreen-400 hover:text-white transition-colors uppercase font-medium"
          >
            Confirmar Presença
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onOpenRSVP}
            className="text-xs font-bold tracking-widest text-rsiDark-950 bg-white hover:bg-rsiGreen-500 hover:text-white px-5 py-2.5 rounded transition-all duration-300"
          >
            RSVP
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rsiDark-900 border-b border-white/10 px-6 py-6 flex flex-col gap-6 animate-fade-in shadow-2xl">
          <a 
            href="#historia" 
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wider text-gray-300 hover:text-white uppercase font-medium"
          >
            História
          </a>
          <a 
            href="#evento" 
            onClick={() => setIsOpen(false)}
            className="text-sm tracking-wider text-gray-300 hover:text-white uppercase font-medium"
          >
            Convenção
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenRSVP();
            }}
            className="text-sm tracking-wider text-left text-rsiGreen-400 hover:text-white uppercase font-medium"
          >
            Confirmar Presença
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenRSVP();
            }}
            className="w-full text-center bg-white text-rsiDark-950 font-bold py-3 rounded-lg text-sm tracking-widest uppercase hover:bg-rsiGreen-500 hover:text-white transition-all"
          >
            Confirmar Presença (RSVP)
          </button>
        </div>
      )}

    </header>
  );
}
