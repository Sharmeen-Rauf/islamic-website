import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WelcomeSlider() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/makhdoompur-sharif-chakwal-webp-scaled.jpg" 
          alt="Darbar Sharif" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-10 pointer-events-none">
        <button className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/20 transition-all pointer-events-auto text-white">
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-white/20 transition-all pointer-events-auto text-white">
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white italic drop-shadow-2xl tracking-wide">
            Welcome to Muhabbat Mission International
          </h2>
          
          <p className="font-serif text-xl md:text-3xl text-slate-200 font-light mb-8 drop-shadow-lg">
            where LOVE is not just a word, but a way of life.
          </p>

          <a 
            href="#mission" 
            className="px-10 py-4 bg-[#1E824C] hover:bg-[#156339] text-white rounded-full font-bold text-sm shadow-[0_0_20px_rgba(30,130,76,0.4)] hover:shadow-[0_0_30px_rgba(30,130,76,0.6)] transition-all hover:-translate-y-1 tracking-wider"
          >
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
