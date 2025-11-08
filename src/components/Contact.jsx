import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl p-8 shadow-sm"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Contact</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">For collaborations, opportunities, or just to say hello.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <input type="text" name="name" placeholder="Your name" required className="w-full rounded-xl border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
          <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border border-zinc-200/70 dark:border.white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />
          <textarea name="message" placeholder="Message" rows={4} required className="w-full rounded-xl border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40" />

          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium shadow-sm transition hover:opacity-90">Send Message →</button>
            <span className="text-sm text-emerald-600 dark:text-emerald-400">{status}</span>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
