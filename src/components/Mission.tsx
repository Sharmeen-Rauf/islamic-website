import { motion } from 'motion/react';
import { Heart, Globe, Book, Sparkles } from 'lucide-react';

const missions = [
  {
    icon: <Heart />,
    title: 'Pure Love',
    color: 'brand-pink',
    desc: 'Spread unconditional love (Muhabbat) beyond all borders, sectarianism, and politics.'
  },
  {
    icon: <Book />,
    title: 'Education',
    color: 'brand-green',
    desc: 'Integrating spiritual growth with modern worldly education through world-class institutions.'
  },
  {
    icon: <Globe />,
    title: 'Global Unity',
    color: 'brand-blue',
    desc: 'Connecting seekers worldwide from Pakistan to UK, USA, and Europe under the path of Tasawwuf.'
  },
  {
    icon: <Sparkles />,
    title: 'Spirituality',
    color: 'brand-gold',
    desc: 'Cultivating inner peace, purification of the heart, and deep connection with the Divine.'
  }
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 relative">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[5px] text-brand-blue font-bold">Our Vision</span>
              <h2 className="font-display text-4xl text-slate-900 mt-4">Love is the Universal Language</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-sm">
              The Darbar Shareef welcomes everyone regardless of caste, creed, or religion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 shadow-sm p-8 rounded-[32px] hover:shadow-xl hover:-translate-y-1 transition-all relative group overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${m.color}/10 flex items-center justify-center text-${m.color} mb-8 group-hover:scale-110 transition-transform`}>
                  {m.icon}
                </div>
                <h3 className="font-display text-lg text-slate-900 mb-4 italic tracking-wide">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
