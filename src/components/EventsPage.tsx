import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Sparkles, BookOpen, ArrowRight } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export default function EventsPage({ onNavigate }: EventsPageProps) {
  const events = [
    {
      title: 'Weekly Darse Tasawwuf & Dhikr',
      timing: 'Every Friday',
      image: '/12-darbar-lighting-08octo2022-ft-img.jpg',
      color: 'brand-gold',
      desc: 'Every Friday, Makhdoom Mahmood Mastwaar Qalandar hosts a gathering that serves as a beacon for seekers of spiritual wisdom. The session opens with a Mehfil of Dhikr, a powerful practice of remembrance that purifies the heart and elevates the soul by invoking the names of Allah. The highlight of the evening is a profound discourse by Makhdoom Sahib, who explores the timeless wisdom contained in Hazrat Maulana Rumi’s Masnavi, one of the greatest spiritual masterpieces of all time. Makhdoom Sahib not only elucidates these tales but also connects them to contemporary issues, providing practical guidance for seekers to navigate their spiritual paths in today’s world.'
    },
    {
      title: 'Weekly Online Youth Self-Realization & Meditation Sessions',
      timing: 'Every Saturday',
      image: '/meditation-watford-london-30aug2025-ft-img.jpg',
      color: 'brand-pink',
      desc: 'Every Saturday, we host a transformative youth meditation session and workshop, specifically designed to address the unique challenges faced by young people today. These insightful sessions delve into essential topics such as the origin of life, understanding needs and desires, listening to one\'s inner voice, the significance of surrounding oneself with positive influences, social pressures, discovering life\'s purpose, and navigating emotions like fear and love. The workshops also feature a dynamic Q&A segment, offering students the opportunity to seek clarity and receive personalized guidance. Join us to embark on a journey of self-discovery and personal growth.'
    },
    {
      title: 'Urs of Imam Hussain (Alayhi Salam)',
      timing: 'Annually on 10th Muharram',
      image: '/ors-imam-hussain-6jul2025-ft-img.jpg',
      color: 'brand-green',
      desc: 'Held annually on the 10th of Muharram, this sacred event commemorates the unparalleled legacy of Imam Hussain (Alayhi Salam) and His Family\'s (Alayhi Salam) supreme sacrifice. Imam Hussain Alayhi Salam stands as a hero and role model for all, regardless of faith, exemplifying courage, justice, and unwavering devotion to truth. Each year, a large number of seekers from Pakistan, USA, UK, and across Europe gather to honor His (Alayhi Salam) legacy and reflect on his enduring message.'
    },
    {
      title: '31st & Upcoming 32nd Urs Mubarak of Huzoor Syed Rasool Shah Khaki (R.A.)',
      timing: 'Annual Commemoration (Upcoming: 32nd Annual Urs Mubarak)',
      image: '/02-ors-khaki-shah-29sep2024.jpg',
      color: 'brand-gold',
      hasKhakiLink: true,
      desc: 'The 31st Urs Mubarak of Huzoor Syed Rasool Shah Khaki Shah (R.A.), the Murshid of Majzooban, Qalandaran, and Salikaan and the source of Hidayah, was held under the supervision of Makhdoom Mahmood Mastwaar Qalandar. This sacred occasion is illuminated with mehfil-e-samaa (qawwali), and heartfelt duaa (supplications). It is a gathering of fuqara and ahl-e-dil, immersed in ishq-e-haqiqi (divine love) and striving for ma\'rifah (gnosis) through suhbat-e-awliya (company of saints). The Urs serves as a means of barakah (blessing), tajalli (divine manifestation), and islah-e-nafs (purification of the self), guiding seekers on the path of fana fi shaykh, fana fi rasool, and ultimately fana fi Allah, reconnecting hearts to the eternal ocean of divine presence. Annually, about 100,000 seekers gather to participate in this spiritually enriching occasion. Preparations are now underway for the upcoming 32nd Annual Urs Mubarak.'
    },
    {
      title: 'Seh Roza Chilla (Three-Day Retreat)',
      timing: 'Begins day after Urs of Khaki Shah',
      image: '/3-day-spirtual-retreart.jpg',
      color: 'brand-blue',
      desc: 'The Seh Roza Chilla (Three-Day Retreat) begins the day after the Urs of Syed Rasool Shah Khaki. During this retreat, participants engage in a profound spiritual practice, sitting in Chilla for three days. This retreat is a time for self-purification, free from worldly distractions, involving fasting, meditating, and attending nightly sermons by Makhdoom Mahmood Mastwaar Qalandar. Each year, Makhdoom Sahib selects a sacred topic for the students, providing them with the wisdom to enhance their spirituality and personal growth.'
    },
    {
      title: 'Eid Prayers',
      timing: 'Eid ul-Fitr & Eid ul-Adha',
      image: '/17-national-milad-celebration-10sep2022-ft-img.jpg',
      color: 'brand-pink',
      desc: 'Makhdoom Mahmood Mastwaar Qalandar leads the Eid prayers for both Eid ul-Fitr and Eid ul-Adha. These sacred gatherings celebrate the joyous conclusion of Ramadan and the profound significance of the Hajj pilgrimage, providing a special moment of unity, reflection, and communal worship for all attendees.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden text-slate-300">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-gold/20 blur-[150px]" />
        <div className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-brand-pink/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-gold font-bold mb-6 border border-brand-gold/20"
          >
            <Calendar size={14} /> Sacred Gatherings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Events & <span className="text-gradient-gold">Congregations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto"
          >
            Join thousands of seekers in transformative spiritual gatherings, Dhikr, retreats, and sacred commemorations.
          </motion.p>
        </div>

        {/* Events List Grid */}
        <div className="space-y-16 mb-20">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors pointer-events-none" />

              <div className="lg:col-span-5 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden glass p-2 border border-white/10 shadow-xl group-hover:border-brand-gold/30 transition-all">
                  <img 
                    src={e.image} 
                    alt={e.title}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 contrast-110" 
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 rounded-full glass text-[10px] uppercase tracking-widest text-${e.color} font-bold border border-${e.color}/30 flex items-center gap-2`}>
                    <Clock size={12} /> {e.timing}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl text-white group-hover:text-brand-gold transition-colors leading-tight">
                  {e.title}
                </h2>

                <p className="font-serif text-slate-300 text-base md:text-lg leading-relaxed">
                  {e.desc}
                </p>

                {e.hasKhakiLink && (
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => onNavigate('khaki')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-gold hover:text-black transition-all shadow-lg"
                    >
                      <BookOpen size={14} /> To learn more about Syed Rasool Shah Khaki, click here <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact info link */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm mb-4">
            For more information or to inquire about upcoming sacred schedules:
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-pink text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-pink/30"
          >
            Contact Us <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}
