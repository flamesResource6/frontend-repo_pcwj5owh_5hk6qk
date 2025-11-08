import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula Dashboard',
    tag: 'Product Design · Web App',
    image: 'https://images.unsplash.com/photo-1630155518529-e56e5a46d8e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MjU3OTU0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Aether Brand Site',
    tag: 'Creative Dev · Website',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Mobile',
    tag: 'UI · iOS / Android',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quanta System',
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  },
];

function WorkGallery() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Selected Work</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-xl">A curated mix of interfaces and interactions with a focus on clarity, precision, and delightful motion.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-zinc-300/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400/80 dark:hover:border-white/20 transition">Let’s collaborate →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-white/10 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-sm"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-zinc-900/10 to-transparent opacity-80" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-white/10 backdrop-blur-md p-4 transition-transform duration-300 group-hover:-translate-y-1">
                <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{p.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">Exploration of motion, layout systems, and accessible color in a high‑contrast UI.</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WorkGallery;
