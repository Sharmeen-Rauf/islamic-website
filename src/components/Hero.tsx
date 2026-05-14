import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-slate-950">
      
      {/* Dynamic Background Image & Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bg-overlay.jpg" 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
      </div>

      {/* Vibrant Orbs for aesthetic lighting */}
      <div className="absolute inset-0 z-0 mix-blend-screen">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-pink/20 blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
          
          {/* Left Content - Typography */}
          <motion.div 
            className="flex-1 text-center lg:text-left z-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* Urdu Calligraphy */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="font-arabic text-brand-gold text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              قلندر دوراں، شیخ کامل، صوفی شاعر، سفیر محبت الہی
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="font-arabic text-brand-gold text-4xl md:text-6xl lg:text-7xl font-bold mb-8 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            >
              مخدوم محمود مستوار قلندر
            </motion.div>

            {/* English Typography */}
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="font-display text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mb-3 drop-shadow-lg"
            >
              Makhdoom Mahmood <span className="text-gradient-pink">MASTWAAR</span> Qalandar
            </motion.h2>

            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-brand-gold text-xl md:text-2xl font-serif italic mb-3"
            >
              The Reviver, Mystical Master, Sufi Poet
            </motion.h3>

            <motion.h4 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-slate-300 font-medium mb-10 tracking-widest uppercase text-xs"
            >
              Ambassador of Divine Love
            </motion.h4>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <a 
                href="#mission" 
                className="inline-block px-10 py-4 bg-brand-pink hover:bg-brand-pink/80 text-white rounded-full font-bold text-xs uppercase tracking-[2px] shadow-[0_0_30px_rgba(233,30,140,0.4)] hover:shadow-[0_0_40px_rgba(233,30,140,0.6)] transition-all hover:-translate-y-1"
              >
                Read More
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="flex-1 relative z-10 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img 
                src="/peer-saab (2).png" 
                alt="Makhdoom Mahmood Mastwaar Qalandar" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 relative"
              />
              {/* Elegant Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-pink/30 blur-[100px] rounded-full -z-10 mix-blend-screen" />
            </div>
          </motion.div>

        </div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { label: 'Students', value: '100K+' },
            { label: 'Centers', value: '100+' },
            { label: 'Since', value: '1994' },
            { label: 'Continents', value: '4+' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl text-center">
              <div className="font-display text-2xl text-gradient-gold mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
