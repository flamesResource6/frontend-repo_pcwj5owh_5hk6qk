import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function Hero({ onToggleTheme, isDark }) {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-zinc-900/60 dark:via-zinc-900/30 dark:to-zinc-900/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400" />
            Crafting minimal, future‑friendly experiences
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Alex Rivera</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Product designer & developer blending clean aesthetics, smooth motion, and thoughtful details into premium digital products.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90"
            >
              View Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400/80 dark:hover:border-white/20 transition"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-white/10 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 shadow-sm backdrop-blur-md hover:bg-white/90 dark:hover:bg-white/20 transition"
          aria-label="Toggle theme"
        >
          <span className={`h-2.5 w-2.5 rounded-full ${isDark ? 'bg-yellow-300' : 'bg-zinc-900'}`} />
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </section>
  );
}

export default Hero;
