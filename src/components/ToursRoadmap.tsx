import { motion } from 'motion/react';
import { Compass, MapPin, Globe, ArrowRight, Play, MessageCircle, Instagram, Sparkles, BookOpen } from 'lucide-react';

interface ToursRoadmapProps {
  onNavigate: (page: string) => void;
}

export default function ToursRoadmap({ onNavigate }: ToursRoadmapProps) {
  const roadmapNodes = [
    {
      step: '01',
      title: 'Makhdoom Mahmood Mastwaar Qalandar Annual Tour — Pakistan',
      tag: 'National Tour',
      color: 'brand-pink',
      image: '/14-lahore-visit-01oct2022-ft-img.jpg',
      desc: 'Makhdoom Mahmood Mastwaar Qalandar embarks on his annual tour across Pakistan, offering profound insights into sacred topics such as self-recognition, closeness to Allah, attaining His light, the importance of a spiritual guide, and nurturing love for Prophet Muhammad ﷺ, along with other Prophets and saints, all through the teachings of Tasawwuf.',
      schedule: [
        'A speech on sacred topics',
        'Dhikr/Zikr gatherings connecting with the remembrance of Allah',
        'Q&A sessions for seekers to seek personal guidance'
      ],
      destinations: 'Lahore (8-Day Sittings), Karachi (12-Day Sittings), Wah Cantt (3-Day Sittings), Islamabad, Mian Channu (3-Day Sittings).',
      link: 'tours'
    },
    {
      step: '02',
      title: 'International Retreats — European Awakening',
      tag: 'Europe Chapter',
      color: 'brand-blue',
      image: '/berlin-germany-visit-13sep2025-ft-img.jpg',
      desc: 'Makhdoom Mahmood Mastwaar Qalandar invites seekers from around the world to join sacred retreats dedicated to fostering divine connection, inner peace, and spiritual growth. Rooted in the timeless essence of Tasawwuf (Sufism), these gatherings transcend worldly chaos, replacing it with divine love and tranquility.',
      schedule: [
        'Teachings of Tawheed (oneness with God)',
        'Depth of Dhikr and Muraqaba (meditation)',
        'Inspiring Khidmat-e-Khalq (service to humanity)'
      ],
      destinations: 'Norway, Sweden, Spain, Italy, Greece.',
      link: 'tours'
    },
    {
      step: '03',
      title: 'United Kingdom Sacred Gatherings',
      tag: 'UK Chapter',
      color: 'brand-gold',
      image: '/ilford-london-visit-06sep2025-ft-img.jpg',
      desc: 'Yearly, Makhdoom Mahmood Mastwaar Qalandar journeys to the UK, bringing seekers together from diverse backgrounds to share in the blessings of Sufi teachings. His presence becomes a source of solace, guidance, and light, leaving attendees with a heart full of peace and joy.',
      schedule: [
        'Youth Self-Realization & Meditation Sessions',
        'Weekly Darse Tasawwuf discourses',
        'Soulful Qawwali & communal prayers'
      ],
      destinations: 'Ilford, Watford, Manchester, Derby, Glasgow, Scotland.',
      link: 'tours'
    },
    {
      step: '04',
      title: 'Turkey Sufi Sanctuary & Heritage',
      tag: 'Turkey Chapter',
      color: 'brand-green',
      image: '/35-haripur-visit-25march2022-ft-img.jpg',
      desc: 'Embark on a life-changing journey of discovery, healing, and connection with God under the sacred guidance of Shaykh Syed Mahmood ul Hassan Shah Khaki, a beacon for seekers on the path to spiritual enlightenment. Awaken your spirit, embrace peace, and return to the world renewed with love and purpose.',
      schedule: [
        'Connecting with Maulana Rumi’s spiritual heritage',
        'Communal meditation and remembrance',
        'Global harmony and unity gatherings'
      ],
      destinations: 'Istanbul, Konya.',
      link: 'tours'
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-brand-pink/20 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-brand-gold/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <Compass size={14} /> Global Spiritual Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-slate-900 mb-6 leading-tight"
          >
            Sacred Roadmap & <span className="text-brand-blue italic">Annual Tours</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Explore our YouTube-style interactive roadmap detailing the sacred gatherings, annual Pakistan sittings, and international retreats hosted worldwide.
          </motion.p>
        </div>

        {/* Roadmap Timeline Container */}
        <div className="space-y-20 relative">
          {/* Vertical Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-[50%] top-10 bottom-10 w-0.5 bg-gradient-to-b from-brand-blue/30 via-slate-300 to-brand-blue/30 -translate-x-1/2 z-0" />

          {roadmapNodes.map((node, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={node.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Node Center Badge for Desktop */}
                <div className="hidden lg:flex absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white items-center justify-center font-display text-base text-brand-blue font-bold border-2 border-brand-blue z-20 shadow-md">
                  {node.step}
                </div>

                {/* Left/Right Column: Image / YouTube Thumbnail Style */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden bg-white p-2 border border-slate-200 shadow-xl group relative cursor-pointer" onClick={() => onNavigate(node.link)}>
                    <img 
                      src={node.image} 
                      alt={node.title} 
                      className="w-full h-full object-cover rounded-2xl contrast-110 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-2xl m-2">
                      <div className="w-16 h-16 rounded-full glass px-2 flex items-center justify-center text-white bg-black/60 border border-white/20 group-hover:scale-110 transition-transform shadow-2xl shadow-black backdrop-blur-md">
                        <Play size={28} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white bg-black/60 border border-white/20 backdrop-blur-md">
                      Roadmap Step {node.step}
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop line */}
                <div className="hidden lg:block lg:col-span-2" />

                {/* Content Details */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className={`text-[10px] uppercase tracking-[4px] font-bold text-brand-blue block`}>
                    {node.tag}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl text-slate-900 leading-tight">
                    {node.title}
                  </h3>

                  <p className="font-serif text-slate-600 leading-relaxed text-sm md:text-base">
                    {node.desc}
                  </p>

                  <div className="space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm font-serif text-xs md:text-sm">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-2 border-b border-slate-100 pb-2">
                      Structured Daily Schedule:
                    </span>
                    <ul className="space-y-2 text-slate-700">
                      {node.schedule.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <MapPin size={16} className="shrink-0 mt-0.5 text-brand-blue" />
                    <span>Sittings & Cities: {node.destinations}</span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate(node.link)}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-blue text-white text-xs uppercase tracking-widest font-bold hover:bg-blue-700 transition-all shadow-md hover:-translate-y-0.5"
                    >
                      Explore Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 bg-white p-12 rounded-[40px] border border-slate-200 text-center shadow-xl max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-white to-brand-blue/5 pointer-events-none" />
          <h3 className="font-display text-3xl md:text-4xl text-slate-900 mb-4 relative z-10">
            Inquire & Join Sacred Sittings
          </h3>
          <p className="font-serif text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8 relative z-10">
            To join these sacred gatherings in your local city or for comprehensive details on global retreats, reach out directly or follow Pir Saheb’s journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/12247166575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30"
            >
              <MessageCircle size={18} /> WhatsApp: +1 224-716-6575
            </a>
            <a 
              href="https://instagram.com/mastwaarqalandar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-purple-600 hover:opacity-90 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-pink/30"
            >
              <Instagram size={18} /> @mastwaarqalandar
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
