import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-rsiDark-950 border-t border-white/5 py-12 px-6 md:px-12 relative z-20 overflow-hidden">
      
      {/* Decorative Line Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex items-center gap-4">
          <div className="border border-white/10 p-1.5 rounded bg-white/5">
            <img 
              src="/logo.resende.PNG" 
              alt="Resende Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <span className="text-xs text-gray-500 font-light hidden sm:inline">
            © {new Date().getFullYear()} Resende Soluções Imobiliárias.
          </span>
        </div>

        {/* Middle Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <a href="#historia" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase">
            HISTÓRIA
          </a>
          <a href="#evento" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase">
            PROPÓSITO
          </a>
          <a href="#evento" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase">
            PESSOAS
          </a>
          <a href="#historia" className="text-xs tracking-widest text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase">
            RESULTADOS
          </a>
        </nav>

        {/* Right Side: Slogan */}
        <div className="text-xs tracking-mega text-rsiGreen-400 font-medium font-mono uppercase">
          [ DOIS ANOS DE EVOLUÇÃO ]
        </div>

      </div>

      {/* Mobile Only Copyright */}
      <div className="text-center mt-6 block sm:hidden">
        <span className="text-[10px] text-gray-600 font-light">
          © {new Date().getFullYear()} Resende Soluções Imobiliárias.
        </span>
      </div>

    </footer>
  );
}
