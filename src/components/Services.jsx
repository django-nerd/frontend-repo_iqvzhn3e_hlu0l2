import { motion } from 'framer-motion';
import { Scissors, Shirt, Sparkles, Users, Needle } from 'lucide-react';

const services = [
  {
    title: 'Custom Stitching',
    icon: Shirt,
    desc: 'Made-to-measure outfits tailored to your silhouette.',
    price: 'Starting at ₹799',
  },
  {
    title: 'Alterations & Repairs',
    icon: Scissors,
    desc: 'Perfect adjustments, seamless fixes, and resizing.',
    price: 'Starting at ₹199',
  },
  {
    title: 'Bridal & Party Wear Design',
    icon: Sparkles,
    desc: 'Elegant designs for weddings, receptions, and parties.',
    price: 'Starting at ₹2999',
  },
  {
    title: "Kids & Men's Tailoring",
    icon: Users,
    desc: 'Smart fits for kidswear and menswear with comfort.',
    price: 'Starting at ₹599',
  },
  {
    title: 'Embroidery & Fabric Detailing',
    icon: Needle,
    desc: 'Threadwork, sequins, and custom monograms.',
    price: 'Custom pricing',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-amber-50 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-gray-900"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, desc, price }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              className="group rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-amber-500/10 p-3 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
              <div className="mt-4 text-sm text-amber-700 font-medium">{price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
