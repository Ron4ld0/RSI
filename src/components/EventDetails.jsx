import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventDetails({ onOpenRSVP }) {
  return (
    <section id="evento" className="relative bg-rsiDark-950 py-24 px-4 md:px-8 overflow-hidden z-20">
      
      {/* Background Graphic: Decorative camera lens circle */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 z-10">
        <div className="absolute inset-8 border border-white/5 rounded-full"></div>
        <div className="absolute inset-16 border border-white/5 rounded-full"></div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-rsiGreen-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-20 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="text-xs tracking-mega text-gray-500 font-mono uppercase block">
            O PRÓXIMO CAPÍTULO SERÁ INESQUECÍVEL
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight uppercase">
            CONVENÇÃO DE <br className="sm:hidden" />
            DOIS ANOS <span className="font-bold text-glow-emerald text-rsiGreen-400">RSI</span>
          </h2>
        </div>

        {/* Translucent Glass Details Grid */}
        <div className="glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Column 1: Data */}
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-rsiGreen-500">
                <Calendar className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest text-gray-400 font-mono uppercase block">DATA:</span>
                <span className="text-base font-semibold text-white">05 de Junho</span>
              </div>
            </div>

            {/* Column 2: Horário */}
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-rsiGreen-500">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest text-gray-400 font-mono uppercase block">HORÁRIO:</span>
                <span className="text-base font-semibold text-white">Às 14h00</span>
              </div>
            </div>

            {/* Column 3: Local */}
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 hover:bg-white/[0.02] transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-rsiGreen-500">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest text-gray-400 font-mono uppercase block">LOCAL:</span>
                <span className="text-base font-semibold text-white">Sede Resende Imob</span>
              </div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button
            onClick={onOpenRSVP}
            className="px-10 py-5 bg-rsiGreen-500 hover:bg-white text-rsiDark-950 hover:text-black font-bold tracking-widest rounded-lg transition-all duration-300 shadow-xl hover:shadow-rsiGreen-500/25"
          >
            CONFIRMAR PRESENÇA NO EVENTO
          </button>
        </div>

      </div>

    </section>
  );
}
