import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/12-darbar-lighting-08octo2022-ft-img.jpg" 
          alt="Darbar Sharif Lighting" 
          className="w-full h-full object-cover opacity-30 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 mix-blend-overlay">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blue/30 blur-[100px] animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[30%] w-[300px] h-[300px] rounded-full bg-brand-gold/20 blur-[80px]" />
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <svg className="w-[800px] h-[800px] animate-spin-slow text-brand-gold" viewBox="0 0 200 200">
           <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" fill="none" stroke="currentColor" strokeWidth="1"/>
           <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block glass px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[3px] text-brand-gold font-semibold border border-brand-gold/30 mb-8 shadow-lg shadow-brand-gold/20">
            ✦ Est. 1994 · Global Spiritual Mission ✦
          </span>
          
          <h2 className="font-arabic text-3xl md:text-4xl text-brand-gold mb-2 tracking-[4px] opacity-60">
            مُحَبَّت مِشَن اِنْٹَرنیشنل
          </h2>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl">
            <span className="text-gradient-pink">MUHABBAT</span><br />
            <span className="text-brand-green">MISSION</span>
          </h1>
          
          <p className="font-serif italic text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Where Love is not just a word — it is a way of life.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-xl mx-auto mb-12 opacity-90 drop-shadow-lg">
            Founded by Makhdoom Mahmood Mastwaar Qalandar, MMI is dedicated to spreading 
            love, peace, and spiritual awakening across all borders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#mission" className="px-10 py-4 bg-brand-pink text-white rounded-full font-bold text-xs uppercase tracking-[2px] shadow-2xl shadow-brand-pink/40 hover:-translate-y-1 transition-all">
              Explore Our Mission
            </a>
            <a href="#literature" className="px-10 py-4 glass text-white rounded-full font-bold text-xs uppercase tracking-[2px] border border-white/10 hover:bg-white/10 transition-all">
              View Literature
            </a>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { label: 'Students', value: '100K+' },
            { label: 'Centers', value: '100+' },
            { label: 'Since', value: '1994' },
            { label: 'Continents', value: '4+' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl">
              <div className="font-display text-2xl text-gradient-gold mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
