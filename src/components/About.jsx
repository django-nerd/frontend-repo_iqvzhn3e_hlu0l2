import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520970164194-0c2c1a6aeda9?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 text-amber-50">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl"
        >
          Our Story
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-base md:text-lg text-amber-100/90 leading-relaxed max-w-3xl"
        >
          BLV Stitchings is built on a passion for timeless craftsmanship. With years of experience
          in custom tailoring, alterations, and embroidery, we bring your ideas to life with precision and care.
          From everyday fits to exquisite bridal wear, every stitch reflects dedication to elegance and comfort.
        </motion.p>
      </div>
    </section>
  );
}
