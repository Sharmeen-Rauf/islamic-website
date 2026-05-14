import { motion } from 'motion/react';
import { Heart, Globe, Sparkles, ShieldCheck, Users, ArrowRight } from 'lucide-react';

interface MissionPageProps {
  onNavigate: (page: string) => void;
}

export default function MissionPage({ onNavigate }: MissionPageProps) {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden text-slate-600">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-brand-blue/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <Heart size={14} /> Unconditional Love
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-slate-900 mb-6 leading-tight"
          >
            Our Mission & <span className="text-brand-blue italic">Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto"
          >
            Dedicated to spreading love, peace, and spiritual harmony free from all boundaries.
          </motion.p>
        </div>

        {/* Section 1: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-14 rounded-[40px] border border-slate-100 mb-16 shadow-xl relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6 font-serif text-lg leading-relaxed text-slate-700">
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold font-sans block">
              Est. 1994
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-1 mb-6 font-sans">
              Introduction of Muhabbat Mission International
            </h2>
            <p>
              Founded in 1994 by Makhdoom Mahmood Mastwaar Qalandar, Muhabbat (Love) Mission International is dedicated to a vision free of sectarianism and politics. Our mission is rooted in love—love for Allah Almighty, love for His Messenger صلى الله عليه وآلہ وسلم, and love for each other.
            </p>
            <p>
              We pray that Allah blesses all human beings to love one another unconditionally.
            </p>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 p-2 border border-slate-200 shadow-md">
              <img 
                src="/makhdoompur-sharif-chakwal-webp-scaled (4).jpg" 
                alt="Makhdoom Pur Sharif"
                className="w-full h-full object-cover rounded-2xl grayscale contrast-125 hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-[10px] text-center mt-3 text-slate-500 uppercase tracking-widest font-semibold">
              Darbar Makhdoom Pur Shareef
            </p>
          </div>
        </motion.div>

        {/* Section 2: Vision & Golden Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-14 rounded-[40px] border border-brand-blue/20 mb-16 shadow-xl relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-brand-blue/5"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6 font-serif text-lg leading-relaxed text-slate-700">
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold font-sans block">
              Core Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-1 mb-6 font-sans">
              Vision of Makhdoom Mahmood Mastwaar Qalandar
            </h2>
            <p>
              Makhdoom Mahmood Mastwaar Qalandar envisioned unity in diversity, aiming to achieve love, peace, and harmony among all people. Muhabbat Mission International strives to bring happiness, prosperity, and spiritual discovery through the mystical path toward oneness.
            </p>

            <div className="my-10 p-8 bg-slate-50 rounded-3xl border-l-4 border-l-brand-blue text-center shadow-md">
              <p className="font-serif italic text-2xl text-slate-900 mb-4 leading-relaxed">
                “Uplifting goodness of society is only possible when the heart has Love, Muhabbat.”
              </p>
              <p className="text-xs uppercase tracking-widest text-brand-blue font-bold font-sans">
                — Makhdoom Mahmood Mastwaar Qalandar
              </p>
            </div>

            <p>
              The Darbar Shareef, Astana e Aliya Qadriya Makhdoomia, welcomes everyone, regardless of caste, creed, or religion. We offer a space for advice, guidance, and training in self-realization and self-improvement, helping individuals achieve happiness and well-being.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Global Reach & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-8 md:p-12 rounded-3xl border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-display text-2xl text-slate-900 mb-4">
                Global Chapters & Community
              </h3>
              <p className="font-serif text-slate-600 text-base leading-relaxed mb-6">
                Muhabbat Mission International, originally founded in Pakistan, has grown to encompass Asia and beyond, with established chapters in the USA, UK, Europe and South Africa. Today, our teachings inspire over 100,000 students worldwide, supported by more than 100 centers and institutions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-widest">
              <span>100K+ Students</span>
              <span>100+ Centers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-8 md:p-12 rounded-3xl border border-brand-blue/20 flex flex-col justify-between bg-gradient-to-b from-brand-blue/5 to-transparent"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-display text-2xl text-slate-900 mb-4">
                Join Our Mission
              </h3>
              <p className="font-serif text-slate-600 text-base leading-relaxed mb-8">
                Join us in our mission to promote love and unity across borders and cultures. Together, we can create a more compassionate and harmonious world.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Learn More About Us <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
