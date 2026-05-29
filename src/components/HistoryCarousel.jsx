import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const CARDS_DATA = [
  {
    id: 1,
    category: 'VÍDEO RETROSPECTIVA',
    title: 'ASSISTA AGORA',
    image: '/caparetro.jpg',
    isVideo: true,
  },
  {
    id: 2,
    category: 'NOSSA EQUIPE',
    title: 'ONDE TUDO COMEÇOU',
    image: '/nossaequipenovo.jpg',
    isVideo: false,
  },
  {
    id: 3,
    category: 'NOSSAS ORIGENS',
    title: 'O PRIMEIRO ENDEREÇO',
    image: '/antiga_rsi.jpeg',
    isVideo: false,
  },
  {
    id: 4,
    category: 'MOMENTOS QUE MARCAM',
    title: 'GRANDES CONQUISTAS',
    image: '/momento1.jpeg',
    isVideo: false,
  },
  {
    id: 5,
    category: 'MOMENTOS QUE MARCAM',
    title: 'GRANDES CONQUISTAS',
    image: '/momento2.jpeg',
    isVideo: false,
  },
  {
    id: 6,
    category: 'CELEBRAÇÃO',
    title: 'DOIS ANOS DE EVOLUÇÃO',
    image: '/momento3.jpeg',
    isVideo: false,
  }
];

export default function HistoryCarousel({ onOpenVideo }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive items to show: Mobile = 1, Tablet = 2, Desktop = 3
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1; // Default/Mobile
  };

  const [visibleCount, setVisibleCount] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, CARDS_DATA.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="historia" className="relative bg-rsiDark-950 py-24 px-4 md:px-8 border-b border-white/5">
      
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rsiGreen-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-widest uppercase">
            COMO TUDO COMEÇOU...
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Relembramos cada passo dessa trajetória construída com propósito, pessoas e grandes momentos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-between group px-0 md:px-8">
          
          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 z-35 p-3 rounded-full border border-white/10 bg-black/60 text-white transition-all hover:bg-rsiGreen-500 hover:text-black hover:border-rsiGreen-500 disabled:opacity-30 disabled:hover:bg-black/60 disabled:hover:text-white disabled:hover:border-white/10`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider Content Viewport */}
          <div className="w-full overflow-hidden mx-10 md:mx-4">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(CARDS_DATA.length / visibleCount) * 100}%`
              }}
            >
              {CARDS_DATA.map((card) => (
                <div 
                  key={card.id}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 bg-rsiDark-900 group/card cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:border-rsiGreen-500/30"
                  style={{ width: `calc(${100 / CARDS_DATA.length}% - 1.5rem)` }}
                  onClick={() => card.isVideo ? onOpenVideo() : null}
                >
                  {/* Card Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover/card:grayscale-0 group-hover/card:scale-105 group-hover/card:brightness-75 transition-all duration-700 ease-out"
                  />

                  {/* Absolute overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Play Button Overlay (only for video card) */}
                  {card.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-white flex items-center justify-center group-hover/card:bg-rsiGreen-500 group-hover/card:border-rsiGreen-500 group-hover/card:text-black transition-all duration-350 transform group-hover/card:scale-110 shadow-lg shadow-black/50">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Content Area */}
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-1">
                      {card.category}
                    </h3>
                    <p className="text-[11px] tracking-wider text-gray-400 uppercase font-light font-mono">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 z-35 p-3 rounded-full border border-white/10 bg-black/60 text-white transition-all hover:bg-rsiGreen-500 hover:text-black hover:border-rsiGreen-500 disabled:opacity-30 disabled:hover:bg-black/60 disabled:hover:text-white disabled:hover:border-white/10`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-350 ${
                currentIndex === idx 
                  ? 'bg-rsiGreen-500 w-5 shadow-sm shadow-rsiGreen-500/50' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>

    </section>
  );
}
