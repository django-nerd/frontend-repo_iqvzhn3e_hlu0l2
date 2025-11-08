import { motion } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';

const items = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503341504253-dff4815485eb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517519014922-8fc07a34488e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520974722037-1f8420e2fb57?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975730495-1fbd2f0a0a2b?q=80&w=1600&auto=format&fit=crop',
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6 text-amber-600" />
            <h2 className="text-3xl font-serif tracking-tight text-zinc-900 sm:text-4xl">Latest on Instagram</h2>
          </div>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-amber-600 px-4 py-2 text-sm text-amber-700 transition hover:bg-amber-50"
          >
            Follow @blvstitchings
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {items.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-100"
            >
              <img
                src={src}
                alt={`Instagram post ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Play className="h-8 w-8 text-white drop-shadow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
