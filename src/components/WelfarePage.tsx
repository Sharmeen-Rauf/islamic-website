import { motion } from 'motion/react';
import { Heart, ShieldAlert, Stethoscope, Clock, Sparkles, Globe, HelpingHand, ArrowRight } from 'lucide-react';

export default function WelfarePage() {
  const services = [
    {
      icon: <HelpingHand size={24} />,
      title: 'Humanitarian Welfare Events',
      color: 'brand-pink',
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/10',
      hoverBorderClass: 'hover:border-brand-pink/30',
      hoverTextClass: 'group-hover:text-brand-pink',
      hoverBgClass: 'group-hover:bg-brand-pink/10',
      desc: 'MMI organizes various social welfare initiatives to assist those in need, regardless of their caste, creed, or background. The mission is to support humanity in times of adversity, bringing people together to offer care and kindness.'
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'COVID-19 Relief Efforts',
      color: 'brand-blue',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/10',
      hoverBorderClass: 'hover:border-brand-blue/30',
      hoverTextClass: 'group-hover:text-brand-blue',
      hoverBgClass: 'group-hover:bg-brand-blue/10',
      desc: 'During the COVID-19 pandemic, MMI played an active role in food distribution to the needy, ensuring that no one went hungry during the crisis.'
    },
    {
      icon: <Stethoscope size={24} />,
      title: 'Free Medical Camps',
      color: 'brand-green',
      colorClass: 'text-brand-green',
      bgClass: 'bg-brand-green/10',
      hoverBorderClass: 'hover:border-brand-green/30',
      hoverTextClass: 'group-hover:text-brand-green',
      hoverBgClass: 'group-hover:bg-brand-green/10',
      desc: 'MMI organizes doctor’s camps for those who cannot afford medical checkups, providing free health services to underserved communities.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Catastrophe Relief',
      color: 'brand-blue',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/10',
      hoverBorderClass: 'hover:border-brand-blue/30',
      hoverTextClass: 'group-hover:text-brand-blue',
      hoverBgClass: 'group-hover:bg-brand-blue/10',
      desc: 'In times of natural disasters or emergencies, MMI is ready to serve, offering aid and support to affected communities wherever possible.'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      color: 'brand-pink',
      colorClass: 'text-brand-pink',
      bgClass: 'bg-brand-pink/10',
      hoverBorderClass: 'hover:border-brand-pink/30',
      hoverTextClass: 'group-hover:text-brand-pink',
      hoverBgClass: 'group-hover:bg-brand-pink/10',
      desc: 'Makhdoom Mahmood Mastwaar Qalandar’s doors are always open to those in need. The organization ensures that no one is left without help, no matter the time or circumstances.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Counseling & Spiritual Healing',
      color: 'brand-blue',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/10',
      hoverBorderClass: 'hover:border-brand-blue/30',
      hoverTextClass: 'group-hover:text-brand-blue',
      hoverBgClass: 'group-hover:bg-brand-blue/10',
      desc: 'Makhdoom Mahmood Mastwaar Qalandar offers daily counseling and spiritual healing sessions without any cost. His compassionate support reaches many, guiding them through life\'s struggles and providing spiritual solace.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Expansion',
      color: 'brand-blue',
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue/10',
      hoverBorderClass: 'hover:border-brand-blue/30',
      hoverTextClass: 'group-hover:text-brand-blue',
      hoverBgClass: 'group-hover:bg-brand-blue/10',
      desc: 'With the mission now expanding internationally, MMI’s welfare work is being carried out not only across Pakistan but also globally, bringing aid and love to those in need across borders.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden text-slate-600">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <Heart size={14} /> Humanity First
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-slate-900 mb-6 leading-tight"
          >
            Welfare & <span className="text-brand-blue italic">Social Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          >
            "Dignity is received through service. One who serves others achieves greatness."
          </motion.p>
          <p className="text-xs uppercase tracking-widest text-brand-blue font-bold mt-3">
            — Makhdoom Mahmood Mastwaar Qalandar
          </p>
        </div>

        {/* Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 mb-16 shadow-xl bg-gradient-to-r from-brand-blue/5 via-white to-brand-blue/5"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 font-serif text-lg leading-relaxed text-slate-700">
            <p>
              Makhdoom Mahmood Mastwaar Qalandar's life and mission revolve around the selfless service of humanity. He firmly believes that acts of kindness, no matter how small, can bring about transformative change.
            </p>
            <p>
              His teachings emphasize the importance of serving others in every way possible, a message he instills in his students and followers. Through his guidance, the core principle of Muhabbat (love) is spread globally, teaching us to make the world a better place through compassion, kindness, and generosity.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold">Initiatives</span>
            <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-2">
              Services Offered by MMI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-50 p-8 rounded-3xl border border-slate-200 ${s.hoverBorderClass} transition-all flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-md`}
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-slate-100 rounded-full blur-2xl ${s.hoverBgClass} transition-colors`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${s.bgClass} flex items-center justify-center ${s.colorClass} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {s.icon}
                  </div>
                  <h3 className={`font-display text-xl text-slate-900 mb-4 tracking-wide ${s.hoverTextClass} transition-colors`}>
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-serif">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-slate-700 transition-colors">Muhabbat Mission</span>
                  <div className={`w-4 h-1 rounded-full bg-${s.color} group-hover:w-8 transition-all`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[40px] border border-brand-blue/20 text-center relative overflow-hidden bg-gradient-to-b from-brand-blue/5 to-transparent shadow-xl"
        >
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h3 className="font-display text-3xl md:text-4xl text-slate-900">
              Get Involved in Our Mission
            </h3>
            <p className="font-serif text-lg leading-relaxed text-slate-700">
              At the heart of Muhabbat Mission International is the belief that every act of kindness, no matter how small, contributes to a larger wave of positive change. Makhdoom Mahmood Mastwaar Qalandar’s work continues to inspire millions, reminding us that through selfless service, we can create a world filled with hope, love, and light.
            </p>
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-brand-blue text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl"
              >
                Contact Us Today <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
