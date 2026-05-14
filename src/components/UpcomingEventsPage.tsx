import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, ShieldCheck, Globe, BookOpen, ArrowRight, Video, Phone } from 'lucide-react';

interface UpcomingEventsPageProps {
  onNavigate: (page: string) => void;
}

export default function UpcomingEventsPage({ onNavigate }: UpcomingEventsPageProps) {
  const upcomingGatherings = [
    {
      title: '75th Annual Urs Mubarak of Imam Hussain (A.S.)',
      date: 'July 5 - 6, 2025 (9th & 10th Muharram)',
      location: 'Darbar Makhdoom Pur Sharif, Mureed, Chakwal',
      image: '/ors-imam-hussain-6jul2025-ft-img.jpg',
      color: 'brand-green',
      badge: 'Main Upcoming Gathering',
      desc: 'Under the spiritual guidance of Pir Syed Rasool Shah Khaki (R.A.) and patronage of Hazrat Makhdoom Mahmood Mastwaar Qalandar. Includes Mehfil-e-Shabina after Isha prayers and the Main Urs Gathering at 10:00 AM. Featuring Naat recitation by Al-Haaj Muhammad Shehbaz Qamar Fareedi and special address by Allama Sahibzada Abid Hussain Shakoori Al-Hussaini.',
      highlights: ['Mehfil-e-Shabina: 9th Muharram', 'Main Congregation: 10th Muharram, 10:00 AM'],
      link: 'urs-imam-hussain'
    },
    {
      title: '32nd Annual Urs Mubarak of Hazrat Peer Khaki Shah (R.A.)',
      date: 'October 30, 2025',
      location: 'Darbar Makhdoom Pur Sharif, Chakwal',
      image: '/02-ors-khaki-shah-29sep2024.jpg',
      color: 'brand-gold',
      badge: 'Annual Commemoration',
      desc: 'The grand annual gathering honoring the Murshid of Majzooban, Qalandaran, and Salikaan, Huzoor Syed Rasool Shah Khaki (R.A.). Thousands of seekers gather for soulful Mehfil-e-Samaa (Qawwali), special discourses by Makhdoom Mahmood Mastwaar Qalandar, and heartfelt communal prayers.',
      highlights: ['Soulful Mehfil-e-Samaa', 'Makhdoom Sahib Discourse & Mass Prayers'],
      link: 'khaki'
    },
    {
      title: 'Seh Roza Chilla (Three-Day Spiritual Retreat)',
      date: 'October 30 - November 2, 2025',
      location: 'Darbar Makhdoom Pur Sharif, Chakwal',
      image: '/3-day-spirtual-retreart.jpg',
      color: 'brand-blue',
      badge: 'Spiritual Chilla',
      desc: 'Commencing immediately after the Urs of Hazrat Peer Khaki Shah (R.A.). A dedicated 3-day sanctuary for self-purification, fasting, deep meditation (Muraqaba), and nightly spiritual training lectures by Hazrat Makhdoom Mahmood Mastwaar Qalandar.',
      highlights: ['3 Days of Meditative Isolation', 'Exclusive Nightly Spiritual Training'],
      link: 'events'
    },
    {
      title: 'UK & Europe Spiritual Awakening Retreats',
      date: 'August - September 2025',
      location: 'United Kingdom, Norway, Spain, Italy & Turkey',
      image: '/ilford-london-visit-06sep2025-ft-img.jpg',
      color: 'brand-pink',
      badge: 'International Itinerary',
      desc: 'Annual international journey uniting seekers from diverse cultures. Features youth self-realization meditation workshops, weekly online Darse Tasawwuf, and grand gatherings in London (Ilford, Watford), Oslo, Istanbul, and Konya.',
      highlights: ['Youth Self-Realization Seminars', 'Rumi Heritage Teachings in Konya'],
      link: 'tours'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden text-slate-300">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-pink/20 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-gold/20 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-pink font-bold mb-6 border border-brand-pink/20"
          >
            <Calendar size={14} /> Mark Your Calendars
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Upcoming <span className="text-gradient-gold">Gatherings</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto"
          >
            Join thousands of seekers worldwide in our upcoming annual commemorations, international spiritual retreats, and weekly assemblies.
          </motion.p>
        </div>

        {/* Upcoming Gatherings Grid */}
        <div className="space-y-16 mb-24">
          {upcomingGatherings.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl group-hover:bg-brand-pink/10 transition-colors pointer-events-none" />

              <div className="lg:col-span-5 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden glass p-2 border border-white/10 shadow-xl group-hover:scale-102 transition-transform duration-500">
                  <img 
                    src={g.image} 
                    alt={g.title} 
                    className="w-full h-full object-cover rounded-2xl contrast-110 group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 rounded-full glass text-[10px] uppercase tracking-widest text-${g.color} font-bold border border-${g.color}/30 flex items-center gap-2`}>
                    <Sparkles size={14} /> {g.badge}
                  </span>
                  <span className="px-4 py-1.5 rounded-full glass text-[10px] uppercase tracking-widest text-slate-300 font-bold border border-white/10 flex items-center gap-2">
                    <Clock size={14} className="text-brand-gold" /> {g.date}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl text-white group-hover:text-brand-gold transition-colors leading-tight">
                  {g.title}
                </h2>

                <p className="font-serif text-slate-300 text-base leading-relaxed">
                  {g.desc}
                </p>

                <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/5 font-serif text-xs md:text-sm">
                  {g.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> {h}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <MapPin size={16} className="text-brand-pink shrink-0" />
                  <span>{g.location}</span>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => onNavigate(g.link)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-gold text-black text-xs uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl shadow-brand-gold/20"
                  >
                    View Gathering Details <ArrowRight size={14} />
                  </button>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <span className="flex items-center gap-1"><Phone size={14} className="text-brand-green" /> 0333-5006899</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Assistance Box */}
        <div className="p-12 glass rounded-[40px] border border-brand-pink/20 bg-gradient-to-r from-brand-pink/10 via-transparent to-brand-blue/10 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="font-display text-3xl text-white mb-4">
            Need Travel & Accommodation Assistance?
          </h3>
          <p className="font-serif text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Darbar Makhdoom Pur Sharif welcomes all visitors. Our management committee provides complete guidance for international and national attendees regarding lodging, meals, and local transit.
          </p>
          <a
            href="https://wa.me/12247166575"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-600/30"
          >
            Inquire on WhatsApp <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
