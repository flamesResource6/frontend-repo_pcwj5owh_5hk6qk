import { motion } from 'framer-motion';

function About() {
  const skills = ['Product Design', 'Interaction Design', 'React', 'TypeScript', 'Framer Motion', 'Design Systems', 'Accessibility', 'Prototyping'];

  return (
    <section id="about" className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 shadow-sm"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">About</h2>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          I'm a multidisciplinary designer‑developer focused on crafting minimal, premium digital experiences. I value clarity, strong typography, and purposeful motion. My process blends strategy, systems thinking, and detail‑oriented execution to create work that feels effortless.
        </p>

        <div className="mt-6">
          <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
