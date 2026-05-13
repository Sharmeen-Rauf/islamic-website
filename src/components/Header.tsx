import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Events', href: '#events' },
    { name: 'Tours', href: '#tours' },
    { name: 'Literature', href: '#literature' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark py-2 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-pink to-brand-blue flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
            <span className="font-arabic text-xl text-white">م</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-xs tracking-widest text-white leading-tight">
              MUHABBAT <span className="text-brand-pink">MISSION</span>
            </h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">International</p>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 text-[10px] uppercase tracking-widest text-slate-300 hover:text-brand-pink transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-pink transition-all group-hover:w-1/2" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-pink/80 text-[10px] uppercase font-bold tracking-[2px] text-white shadow-lg shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-0.5 transition-all"
          >
            Connect
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark border-t border-white/5 py-8 px-6 md:hidden text-center"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 text-xs uppercase tracking-[3px] text-slate-300 hover:text-brand-pink"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 block py-4 text-xs uppercase tracking-[3px] font-bold text-brand-pink"
          >
            Connect
          </a>
        </motion.div>
      )}

      {/* Bismillah Sub-bar */}
      <div className="w-full h-[30px] bg-gradient-to-r from-brand-pink/10 via-brand-blue/10 to-brand-green/10 flex items-center justify-center border-y border-white/5 overflow-hidden">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-arabic text-sm text-slate-400/60 tracking-[4px]"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
      </div>
    </header>
  );
}
