import { motion } from 'framer-motion';

const items = [
  { year: '2024', title: 'Lead Product Designer', org: 'Orbit Labs', desc: 'Led design for an AI‑powered analytics suite with a focus on information density and smooth motion.' },
  { year: '2022', title: 'Senior Designer', org: 'Studio Nova', desc: 'Delivered high‑contrast design system and micro‑interaction guidelines across web + mobile.' },
  { year: '2020', title: 'Creative Technologist', org: 'Freelance', desc: 'Built interactive brand sites and prototypes using React and motion frameworks.' },
];

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6">
      <div className="rounded-3xl border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Experience & Recognitions</h2>
        <div className="mt-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300/70 to-transparent dark:via-white/10" />
          <ul className="space-y-6">
            {items.map((item, idx) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 shadow" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{item.year}</span>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">— {item.org}</span>
                </div>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300 leading-relaxed">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
