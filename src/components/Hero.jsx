import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Scissors, Sparkles } from 'lucide-react';

const slides = [
  'https://images.unsplash.com/photo-1555346958-c1c0e6b6fd75?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?q=80&w=1600&auto=format&fit=crop',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Fabric and tailoring"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-amber-200 backdrop-blur">
              <Sparkles className="h-4 w-4" /> Elegance Tailored For You
            </div>
            <h1 className="mt-6 font-serif text-4xl md:text-6xl text-white">BLV Stitchings</h1>
            <p className="mt-3 text-lg md:text-2xl text-amber-100">Perfect Fit, Elegant Stitch</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 text-white shadow-lg shadow-amber-500/30 transition hover:shadow-amber-500/50">
                Book Your Stitch
                <ChevronDown className="h-4 w-4 transition group-hover:translate-y-[2px]" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-white/10 px-6 py-3 text-amber-100 backdrop-blur transition hover:bg-white/20">
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { title: 'Stitching', icon: Scissors },
                { title: 'Alterations', icon: Sparkles },
                { title: 'Embroidery', icon: Sparkles },
              ].map(({ title, icon: Icon }) => (
                <motion.div key={title} whileHover={{ y: -4, scale: 1.02 }} className="rounded-xl border border-white/10 bg-white/10 p-5 text-left text-white backdrop-blur transition">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-medium">{title}</div>
                  </div>
                  <p className="mt-2 text-sm text-amber-100/90">Premium craftsmanship with attention to detail.</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80" aria-label="Scroll down">
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
