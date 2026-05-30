import React from 'react';
import { Camera } from 'lucide-react';

export default function HeroSection({ onOpenRSVP }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rsiDark-950 pt-20 pb-16 px-4 md:px-8">
      
      {/* Background Ambient Glows & Fog */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-rsiGreen-500/5 rounded-full blur-[90px] pointer-events-none"></div>
      
      {/* Viewfinder Camera Frame (Brackets) */}
      <div className="absolute inset-4 md:inset-8 border border-white/5 pointer-events-none z-10">
        {/* Top-Left Bracket */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40"></div>
        {/* Top-Right Bracket */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40"></div>
        {/* Bottom-Left Bracket */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40"></div>
        {/* Bottom-Right Bracket */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40"></div>

        {/* Vertical Text - Left Edge */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 text-[10px] tracking-mega text-gray-500 font-medium select-none uppercase">
          <span className="rotate-90 origin-center my-8">DOIS ANOS</span>
        </div>

        {/* Camera Metrics Overlay */}
        <div className="absolute top-16 md:top-20 left-6 flex items-center gap-2 text-xs md:text-sm text-white/80 tracking-widest font-mono">
          <span className="w-3.5 h-3.5 rounded-full bg-red-600 animate-record shadow-sm shadow-red-600/50"></span>
          <span className="font-bold">REC</span>
        </div>
        <div className="absolute top-16 md:top-20 right-6 text-xs md:text-sm font-bold text-white/80 tracking-widest font-mono">
          <span>25FPS</span>
        </div>

        {/* Bottom scale & metrics */}
        <div className="absolute bottom-4 left-6 text-xs text-white/50 tracking-wider font-mono hidden sm:block">
          <span>+</span>
        </div>
        <div className="absolute bottom-4 right-6 text-xs text-white/70 tracking-widest font-mono flex items-center gap-4">
          <span>ISO 800</span>
          <span>F/1.4</span>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/30 tracking-widest font-mono hidden md:block select-none">
          <span>[ . . ɩ . . ɩ . . ɩ . . ]</span>
        </div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-20">
        
        {/* Left Side: Typography & Text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-6 md:space-y-8 pl-0 md:pl-8">
          
          {/* Brand Logo (Visible only on mobile above tagline, centered) */}
          <div className="flex lg:hidden justify-center mb-6">
            <img 
              src="/logo.resende.PNG" 
              alt="Resende Logo" 
              className="h-28 sm:h-32 w-auto object-contain"
            />
          </div>

          <div className="space-y-3 w-full flex flex-col items-center lg:items-start">
            {/* Tagline */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-mega text-rsiCream-300 font-bold uppercase text-glow-gold">
                CONVITE ESPECIAL
              </span>
              <div className="h-[1.5px] w-24 bg-rsiCream-500/40 hidden lg:block"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-tight">
            UMA HISTÓRIA <br />
            ESCULPIDA COM <br />
            <span className="font-normal italic text-rsiCream-200">DEDICAÇÃO</span> E <br />
            <span className="font-bold text-glow-emerald text-rsiGreen-400">OUSADIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
            Acompanhe a nossa evolução e celebre o próximo passo da <strong className="text-rsiGreen-500 font-semibold text-glow-emerald">RSI</strong>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={onOpenRSVP}
              className="px-8 py-4 bg-rsiGreen-500 text-rsiDark-950 font-bold tracking-wider rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-rsiGreen-500/20 text-center"
            >
              CONFIRMAR PRESENÇA
            </button>
            <a 
              href="#historia"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-wider rounded-lg hover:bg-white/5 hover:border-white transition-all duration-300 text-center"
            >
              CONHECER HISTÓRIA
            </a>
          </div>

        </div>

        {/* Right Side: Portrait Image with Overlay Camera Graphics */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Card Wrapper (Ensures name badge stays pinned to the card boundaries) */}
          <div className="relative w-[300px] h-[400px] sm:w-[350px] sm:h-[480px] md:w-[380px] md:h-[500px]">
            
            {/* Frame/Glow behind the portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rsiGreen-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

            {/* Lens flare orange glow on bottom-left of photo */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-amber-500/10 blur-xl pointer-events-none mix-blend-screen z-20"></div>

            {/* Container for Thiago's Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-rsiDark-900">
              {/* The photo of Thiago (thiago2 version) */}
              <img 
                src="/thiago2.png" 
                alt="Thiago Resende" 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out brightness-[0.95] contrast-[1.05]"
              />
              
              {/* Camera crosshair graphic overlays */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Central crosshair circle */}
                <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  <div className="absolute left-0 w-2 h-[1px] bg-white/40"></div>
                  <div className="absolute right-0 w-2 h-[1px] bg-white/40"></div>
                  <div className="absolute top-0 h-2 w-[1px] bg-white/40"></div>
                  <div className="absolute bottom-0 h-2 w-[1px] bg-white/40"></div>
                </div>
              </div>

              {/* Subtle smoke grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

              {/* Bottom Shadow Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            </div>

            {/* Thiago Resende Text Overlay (Centered horizontally at the bottom) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md border border-white/10 py-3.5 px-6 rounded-lg text-center z-30 pointer-events-none select-none shadow-2xl min-w-[280px]">
              <h4 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide leading-none">Thiago Resende</h4>
              <span className="text-[10px] tracking-wider text-rsiGreen-400 block mt-1.5 font-mono uppercase">Sócio Fundador | CEO</span>
              <div className="w-12 h-[1px] bg-white/20 mx-auto mt-2.5"></div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
