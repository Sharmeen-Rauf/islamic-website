import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const quotes = [
  { arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ", translation: '"And He is with you wherever you are."', ref: "Surah Al-Hadid, 57:4" },
  { arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: '"Indeed, with hardship comes ease."', ref: "Surah Al-Inshirah, 94:6" },
  { arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ", translation: '"So remember Me; I will remember you."', ref: "Surah Al-Baqarah, 2:152" },
  { arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", translation: '"Allah is the Light of the heavens and the earth."', ref: "Surah An-Nur, 24:35" },
];

export default function AyatQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 backdrop-blur-sm" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-12"
        >
          <span className="inline-block text-[10px] uppercase tracking-[4px] text-brand-green font-bold mb-4">
            ✦ Divine Wisdom ✦
          </span>
          <div className="h-[2px] w-12 bg-brand-green mx-auto" />
        </motion.div>

        <div className="glass-dark p-12 md:p-20 rounded-[40px] relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[40px]">
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="font-arabic text-4xl md:text-6xl text-white leading-relaxed">
                {quotes[index].arabic}
              </h3>
              <p className="font-serif italic text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {quotes[index].translation}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-brand-green font-bold">
                {quotes[index].ref}
              </p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setIndex((prev) => (prev + 1) % quotes.length)}
            className="mt-12 w-12 h-12 rounded-full glass flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all mx-auto"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
