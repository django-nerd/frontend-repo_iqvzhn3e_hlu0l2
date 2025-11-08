import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Sparkles } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Bridal Fitting Checklist: 7 Tips for a Perfect Silhouette',
    excerpt:
      'From muslin mock-ups to final hem, here’s how we ensure your bridal fit looks flawless from every angle.',
    date: 'Oct 2025',
    image:
      'https://images.unsplash.com/photo-1520975682031-ae4c2f73e0f1?q=80&w=1600&auto=format&fit=crop',
    tag: 'Bridal',
  },
  {
    id: 2,
    title: 'Fabric Guide: Choosing the Right Weave for Summer',
    excerpt:
      'Cotton voile, linen, or silk organza? Learn which fabrics drape best for breathable elegance.',
    date: 'Sep 2025',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
    tag: 'Fabric',
  },
  {
    id: 3,
    title: 'Alterations 101: What Can Be Tailored (and What Can’t)',
    excerpt:
      'Length, waist, shoulders—know the limits before you buy, and how tailoring elevates off-the-rack pieces.',
    date: 'Aug 2025',
    image:
      'https://images.unsplash.com/photo-1520975693416-54d3f3ee5843?q=80&w=1600&auto=format&fit=crop',
    tag: 'Alterations',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative bg-amber-50/40 py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-amber-100/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-amber-600" />
          <h2 className="text-3xl font-serif tracking-tight text-zinc-900 sm:text-4xl">From the Studio</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow/30 ring-1 ring-zinc-200 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-amber-600/90 px-3 py-1 text-xs font-medium text-white">
                  {post.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-zinc-600">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-2 font-serif text-xl text-zinc-900">{post.title}</h3>
                <p className="text-sm text-zinc-600">{post.excerpt}</p>
                <button
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-4 py-2 text-sm text-white transition hover:bg-zinc-800"
                  aria-label={`Read more: ${post.title}`}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
