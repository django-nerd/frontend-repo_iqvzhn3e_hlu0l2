import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { src: 'https://images.unsplash.com/photo-1604908554007-24cbe757974d?q=80&w=1200&auto=format&fit=crop', title: 'Bridal Gown' },
  { src: 'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1200&auto=format&fit=crop', title: 'Designer Kurti' },
  { src: 'https://images.unsplash.com/photo-1520970164194-0c2c1a6aeda9?q=80&w=1200&auto=format&fit=crop', title: 'Hand Embroidery' },
  { src: 'https://images.unsplash.com/photo-1611259183889-d1da6e5fa66d?q=80&w=1200&auto=format&fit=crop', title: 'Menswear Suit' },
  { src: 'https://images.unsplash.com/photo-1551232864-3f0890e580d7?q=80&w=1200&auto=format&fit=crop', title: 'Party Wear' },
  { src: 'https://images.unsplash.com/photo-1601305011025-72d3c675b8f2?q=80&w=1200&auto=format&fit=crop', title: 'Saree Detailing' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-gray-900"
        >
          Portfolio
        </motion.h2>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>img]:mb-4">
          {items.map((it, idx) => (
            <div key={idx} className="relative cursor-pointer overflow-hidden rounded-xl" onClick={() => setActive(it)}>
              <img src={it.src} alt={it.title} className="w-full transition-transform duration-500 hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/50 px-2 py-1 text-sm text-white">{it.title}</div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active.src}
              src={active.src}
              alt={active.title}
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
