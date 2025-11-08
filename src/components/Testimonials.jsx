import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { name: 'Ananya', text: 'Perfect fit and beautiful detailing. My bridal lehenga looked stunning!', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Rahul', text: 'Quick alterations and great service. Highly recommend BLV Stitchings!', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Meera', text: 'Elegant designs and professional approach. Loved the experience!', avatar: 'https://i.pravatar.cc/100?img=32' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-center text-gray-900"
        >
          What Clients Say
        </motion.h2>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className="h-16 w-16 rounded-full border-2 border-amber-400" />
                <p className="mt-4 text-gray-700 max-w-2xl">“{testimonials[idx].text}”</p>
                <div className="mt-3 font-medium text-gray-900">{testimonials[idx].name}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`h-2 w-2 rounded-full ${i === idx ? 'bg-amber-600' : 'bg-amber-300'}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
      </div>
      </div>
    </section>
  );
}
