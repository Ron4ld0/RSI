import React, { useEffect, useState, useRef } from 'react';
import { Home, BarChart2, Users } from 'lucide-react';

function CountUp({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    // Remove formatting characters to get raw number
    const target = parseInt(end.replace(/[^0-9]/g, ''), 10);
    if (isNaN(target)) {
      setCount(end);
      return;
    }

    const stepTime = Math.max(Math.floor(duration / target), 1);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / 30)); // chunk size for smooth 30fps
      if (start >= target) {
        clearInterval(timer);
        setCount(end); // set final string representation
      } else {
        // Format with dots for thousands
        const formatted = start.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setCount(formatted);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isIntersecting, end, duration]);

  return <span ref={countRef}>{prefix}{count}{suffix}</span>;
}

export default function MetricsSection() {
  return (
    <section className="relative bg-[#ebdfcf] py-20 px-4 md:px-8 overflow-hidden z-20">
      
      {/* Decorative Warm Lens Flare Edges */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-12 bg-amber-500/20 blur-xl rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-12 bg-amber-500/20 blur-xl rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 relative">
          
          {/* Column 1: Sonhos Realizados */}
          <div className="flex flex-col items-center text-center px-4 md:border-r border-[#d4c5b1]">
            <div className="w-14 h-14 rounded-full border border-stone-800/20 flex items-center justify-center text-stone-800 mb-6 hover:scale-110 transition-transform duration-300">
              <Home className="w-6 h-6 stroke-[1.25]" />
            </div>
            <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-stone-900 tracking-tight mb-3">
              +<CountUp end="800" />
            </h3>
            <p className="text-[11px] md:text-xs font-montserrat tracking-widest text-stone-700 font-semibold uppercase">
              SONHOS REALIZADOS
            </p>
          </div>

          {/* Column 2: Corretores */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 rounded-full border border-stone-800/20 flex items-center justify-center text-stone-800 mb-6 hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 stroke-[1.25]" />
            </div>
            <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-stone-900 tracking-tight mb-3">
              +<CountUp end="90" />
            </h3>
            <p className="text-[11px] md:text-xs font-montserrat tracking-widest text-stone-700 font-semibold uppercase">
              CORRETORES
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
