import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mql.matches);
    const onChange = (e) => setIsDark(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [isDark]);

  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <div className="min-h-screen bg-[radial-gradient(90%_60%_at_10%_10%,rgba(124,58,237,0.10),transparent),radial-gradient(70%_50%_at_90%_0%,rgba(59,130,246,0.10),transparent)] dark:bg-[radial-gradient(90%_60%_at_10%_10%,rgba(124,58,237,0.22),transparent),radial-gradient(70%_50%_at_90%_0%,rgba(59,130,246,0.22),transparent)] bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 space-y-16 sm:space-y-20">
        <header className="flex items-center justify-between">
          <a href="#home" className="rounded-full border border-zinc-200/70 dark:border-white/10 bg-white/70 dark:bg-white/10 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 shadow-sm backdrop-blur-md">AR</a>
          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: '#work', label: 'Work' },
              { href: '#about', label: 'About' },
              { href: '#experience', label: 'Experience' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="rounded-full border border-transparent hover:border-zinc-300/70 dark:hover:border-white/10 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-300 transition">{l.label}</a>
            ))}
          </nav>
        </header>

        <Hero onToggleTheme={toggleTheme} isDark={isDark} />

        <WorkGallery />
        <About />
        <Experience />
        <Contact />

        <footer className="py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Alex Rivera — Crafted with care.
        </footer>
      </div>
    </div>
  );
}

export default App;
