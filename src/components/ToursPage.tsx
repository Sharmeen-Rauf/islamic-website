import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Globe, Compass, ArrowRight } from 'lucide-react';

interface Visit {
  title: string;
  category: 'national' | 'international';
  location: string;
  image: string;
  desc: string;
  date?: string;
}

export default function ToursPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'national' | 'international'>('all');

  const visits: Visit[] = [
    {
      title: 'Lahore Spiritual Visit',
      category: 'national',
      location: 'Lahore, Pakistan',
      image: '/14-lahore-visit-01oct2022-ft-img.jpg',
      date: 'October 2022',
      desc: 'Sacred gatherings, Dhikr, and spiritual addresses in the historic heart of Lahore, connecting thousands of seekers to the path of divine love.'
    },
    {
      title: 'Karachi Milad & Gathering',
      category: 'national',
      location: 'Karachi, Pakistan',
      image: '/46-milad-baldia-town-karachi-15jan2022-f-img.jpg',
      date: 'January 2022',
      desc: 'Grand Milad celebrations and spiritual counseling reaching seekers across Karachi, cultivating inner peace and purification of the heart.'
    },
    {
      title: 'Islamabad Sacred Assembly',
      category: 'national',
      location: 'Islamabad, Pakistan',
      image: '/17-national-milad-celebration-10sep2022-ft-img.jpg',
      date: 'September 2022',
      desc: 'Gatherings of divine love and spiritual awakening in the capital city, welcoming individuals from all walks of life.'
    },
    {
      title: 'United Kingdom Spiritual Tour',
      category: 'international',
      location: 'London, Ilford & Watford, UK',
      image: '/ilford-london-visit-06sep2025-ft-img.jpg',
      date: 'August - September 2025',
      desc: 'Transformative youth meditation sessions, weekly online Darse Tasawwuf workshops, and grand spiritual gatherings uniting the UK community.'
    },
    {
      title: 'European Expansion & Retreats',
      category: 'international',
      location: 'Berlin Germany & Oslo Norway',
      image: '/berlin-germany-visit-13sep2025-ft-img.jpg',
      date: 'September 2025',
      desc: 'Spiritual light expanding across Europe, spreading unconditional love, self-realization, and harmony beyond all borders.'
    },
    {
      title: 'Turkey & South Africa Chapters',
      category: 'international',
      location: 'Istanbul & Johannesburg',
      image: '/35-haripur-visit-25march2022-ft-img.jpg',
      desc: 'International spiritual tours and established chapters uniting diverse cultures under the universal banner of Muhabbat Mission.'
    },
    {
      title: 'Mian Channu & Wah Cantt',
      category: 'national',
      location: 'Punjab, Pakistan',
      image: '/13-milad-thoa-bahadur-07oct2022-ft-img-1.jpg',
      desc: 'Spiritual tours connecting local communities with the core teachings of Tasawwuf and selfless service to humanity.'
    }
  ];

  const filteredVisits = activeTab === 'all' 
    ? visits 
    : visits.filter(v => v.category === activeTab);

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden text-slate-300">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[150px]" />
        <div className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] rounded-full bg-brand-green/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <Compass size={14} /> Sacred Journeys Across the Globe
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            National & International <span className="text-gradient-gold">Visits</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto"
          >
            Explore the spiritual tours of Makhdoom Mahmood Mastwaar Qalandar spreading unconditional love and harmony worldwide.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { id: 'all', label: 'All Visits' },
            { id: 'national', label: 'National Visits (Pakistan)' },
            { id: 'international', label: 'International Visits' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all border ${
                activeTab === tab.id 
                  ? 'bg-brand-gold text-black border-brand-gold shadow-lg shadow-brand-gold/20' 
                  : 'glass text-slate-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredVisits.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass p-6 rounded-3xl border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={v.image} 
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-110" 
                  />
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-gold backdrop-blur-md bg-black/40 border border-white/10">
                    {v.category === 'national' ? 'National' : 'International'}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-pink mb-2">
                  {v.category === 'international' ? <Globe size={14} /> : <MapPin size={14} />}
                  <span>{v.location}</span>
                </div>

                <h3 className="font-display text-2xl text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {v.title}
                </h3>

                <p className="font-serif text-slate-400 text-sm leading-relaxed mb-6">
                  {v.desc}
                </p>
              </div>

              {v.date && (
                <div className="pt-4 border-t border-white/5 text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center justify-between">
                  <span>Tour Date</span>
                  <span className="text-slate-400">{v.date}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Inquiry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-12 rounded-[40px] border border-brand-gold/30 text-center bg-gradient-to-b from-brand-gold/5 to-transparent shadow-2xl max-w-4xl mx-auto"
        >
          <h3 className="font-display text-3xl text-white mb-4">
            Invite MMI to Your City
          </h3>
          <p className="font-serif text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            To coordinate a spiritual gathering, Darse Tasawwuf, or youth meditation workshop in your local community, please reach out to our international organizing team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-brand-gold text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-brand-gold/20"
          >
            Coordinate a Visit <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
