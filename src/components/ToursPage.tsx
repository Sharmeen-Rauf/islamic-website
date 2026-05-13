import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Globe, Compass, ArrowRight, Clock, MessageCircle, Instagram, Sparkles, BookOpen, Heart, Users } from 'lucide-react';

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pakistan' | 'international'>('all');

  const pakistanCities = [
    { name: 'Lahore', sittings: '8-Day Sittings', image: '/14-lahore-visit-01oct2022-ft-img.jpg', location: 'Lahore Shareef' },
    { name: 'Karachi', sittings: '12-Day Sittings', image: '/46-milad-baldia-town-karachi-15jan2022-f-img.jpg', location: 'Baldia Town & Main Centers' },
    { name: 'Wah Cantt', sittings: '3-Day Sittings', image: '/13-milad-thoa-bahadur-07oct2022-ft-img-1.jpg', location: 'Wah Cantt Centers' },
    { name: 'Islamabad', sittings: 'Sacred Assemblies', image: '/17-national-milad-celebration-10sep2022-ft-img.jpg', location: 'Capital Congregations' },
    { name: 'Mian Channu', sittings: '3-Day Sittings', image: '/makhdoompur-sharif-chakwal-webp-scaled (4).jpg', location: 'Mian Channu Shareef' },
  ];

  const internationalRegions = [
    {
      region: 'Europe',
      color: 'brand-blue',
      image: '/berlin-germany-visit-13sep2025-ft-img.jpg',
      cities: ['Norway', 'Sweden', 'Spain', 'Italy', 'Greece'],
      desc: 'Annual spiritual retreats bringing light, inner peace, and unconditional love across European capitals.'
    },
    {
      region: 'United Kingdom',
      color: 'brand-pink',
      image: '/ilford-london-visit-06sep2025-ft-img.jpg',
      cities: ['Ilford', 'Watford', 'Manchester', 'Derby', 'Glasgow, Scotland'],
      desc: 'Transformative youth meditation sessions, Darse Tasawwuf, and grand spiritual sittings uniting the UK community.'
    },
    {
      region: 'Turkey',
      color: 'brand-gold',
      image: '/35-haripur-visit-25march2022-ft-img.jpg',
      cities: ['Istanbul', 'Konya'],
      desc: 'Connecting with the timeless legacy of Maulana Rumi and spreading the blessings of Sufi teachings.'
    }
  ];

  const dailySchedule = [
    { title: 'Sacred Discourses', desc: 'A profound speech on sacred topics including self-recognition, closeness to Allah, attaining His light, the importance of a spiritual guide, and nurturing love for Prophet Muhammad ﷺ.', icon: <BookOpen size={20} /> },
    { title: 'Dhikr & Remembrance', desc: 'Powerful Dhikr/Zikr gatherings, allowing participants to deeply connect with the remembrance of Allah Almighty and purify their hearts.', icon: <Heart size={20} /> },
    { title: 'Q&A Seekers Session', desc: 'Interactive Q&A sessions for seekers to ask questions, resolve spiritual dilemmas, and receive tailored personal guidance.', icon: <Users size={20} /> }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden text-slate-300">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-pink/20 blur-[150px]" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-gold/20 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-gold font-bold mb-6 border border-brand-gold/20"
          >
            <Compass size={14} /> Global Spiritual Awakening
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Annual Tours & <span className="text-gradient-gold">Retreats</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto"
          >
            Embark on a life-changing journey of discovery, healing, and connection with Allah under the sacred guidance of Makhdoom Mahmood Mastwaar Qalandar.
          </motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-20">
          {[
            { id: 'all', label: 'All Sacred Itineraries' },
            { id: 'pakistan', label: 'Annual Pakistan Tours' },
            { id: 'international', label: 'International Retreats' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all border ${
                activeCategory === tab.id 
                  ? 'bg-brand-gold text-black border-brand-gold shadow-lg shadow-brand-gold/20 font-extrabold' 
                  : 'glass text-slate-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section 1: Pakistan Annual Tours */}
        {(activeCategory === 'all' || activeCategory === 'pakistan') && (
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-[4px] text-brand-pink font-bold">National Tour</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-2 mb-6">
                Makhdoom Mahmood Mastwaar Qalandar Annual Tour — Pakistan
              </h2>
              <p className="font-serif text-lg leading-relaxed text-slate-300 max-w-4xl mx-auto">
                Makhdoom Mahmood Mastwaar Qalandar embarks on his annual tour across Pakistan, offering profound insights into sacred topics such as self-recognition, closeness to Allah, attaining His light, the importance of a spiritual guide, and nurturing love for Prophet Muhammad ﷺ, along with other Prophets and saints, all through the teachings of Tasawwuf.
              </p>
            </div>

            {/* Structured Schedule Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {dailySchedule.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-pink/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3 tracking-wide">
                    {s.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-serif">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Cities Grid */}
            <h3 className="font-display text-2xl text-white mb-8 text-center uppercase tracking-widest text-brand-gold font-bold">
              Pakistan Tour Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {pakistanCities.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all overflow-hidden group"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                    <img 
                      src={c.image} 
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-110" 
                    />
                    <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white bg-black/60 border border-white/20">
                      {c.sittings}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-pink mb-1">
                    <MapPin size={14} />
                    <span>{c.location}</span>
                  </div>

                  <h4 className="font-display text-2xl text-white group-hover:text-brand-gold transition-colors">
                    {c.name}
                  </h4>
                </motion.div>
              ))}
            </div>

            <div className="p-8 glass rounded-3xl border border-brand-pink/20 text-center bg-gradient-to-r from-brand-pink/10 via-transparent to-brand-pink/10">
              <p className="font-serif text-lg text-slate-300 mb-4">
                Makhdoom Mahmood Mastwaar Qalandar also visits many other local cities across Pakistan. For inquiries about his visit to your city, please reach out to us.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-pink text-white text-xs uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-xl shadow-brand-pink/20"
              >
                Contact Us for Local Inquiries <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Section 2: International Retreats */}
        {(activeCategory === 'all' || activeCategory === 'international') && (
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold">Global Retreats</span>
              <h2 className="font-display text-4xl md:text-5xl text-white mt-2 mb-6">
                International Retreats with Makhdoom Mahmood Mastwaar Qalandar
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 font-serif text-lg leading-relaxed text-slate-300">
                <p>
                  Makhdoom Mahmood Mastwaar Qalandar invites seekers from around the world to join sacred retreats dedicated to fostering divine connection, inner peace, and spiritual growth. Rooted in the timeless essence of Tasawwuf (Sufism) — the heart of spirituality — these retreats offer the opportunity to transcend daily anxieties and worldly chaos, replacing them with divine love and tranquility.
                </p>
                <p>
                  Through the teachings of Tawheed (oneness with God), Makhdoom Mahmood Mastwaar Qalandar leads seekers into the depth of Dhikr (remembrance of God) and muraqaba (meditation), unraveling the veils between the self and the Divine. Makhdoom Mahmood Mastwaar Qalandar dedicates these gatherings to illuminate the path to Allah and inspire khidmat-e-khalq (service to humanity). Through his teachings, seekers from all walks of life are reminded of the transformative power of love, compassion, and the divine unity that binds all of creation.
                </p>
                <p>
                  Yearly, Makhdoom Mahmood Mastwaar Qalandar journeys to the UK, Europe, and Turkey, bringing seekers together from diverse backgrounds to share in the blessings of Sufi teachings. His presence becomes a source of solace, guidance, and light, leaving attendees with a heart full of peace and joy that flows back into their lives and communities.
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl text-white mb-10 text-center uppercase tracking-widest text-brand-gold font-bold">
              Sacred Gatherings Destinations
            </h3>

            {/* International Regions Accordion / Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {internationalRegions.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-[34px] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between overflow-hidden group bg-gradient-to-b from-white/5 to-transparent"
                >
                  <div>
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={r.image} 
                        alt={r.region} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 contrast-110" 
                      />
                    </div>

                    <div className={`text-xs font-bold uppercase tracking-widest text-${r.color} mb-2 flex items-center gap-2`}>
                      <Globe size={16} /> <span>International Tour</span>
                    </div>

                    <h4 className="font-display text-3xl text-white mb-4">
                      {r.region}
                    </h4>

                    <p className="font-serif text-slate-400 text-sm mb-6 leading-relaxed">
                      {r.desc}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mb-3 border-b border-white/5 pb-2">
                        Included Gathering Cities:
                      </span>
                      <ul className="grid grid-cols-2 gap-2">
                        {r.cities.map((city) => (
                          <li key={city} className="flex items-center gap-2 text-sm text-slate-300 font-serif">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Spiritual Conclusion Box */}
            <div className="p-8 md:p-12 glass rounded-[40px] border border-brand-gold/30 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-gold/10 text-center max-w-4xl mx-auto shadow-2xl">
              <p className="font-serif italic text-lg md:text-xl text-white leading-relaxed mb-6">
                "This is a chance to embark on a life-changing journey of discovery, healing, and connection with God under the sacred guidance of Shaykh Syed Mahmood ul Hassan Shah Khaki, a beacon for seekers on the path to spiritual enlightenment. Join us and awaken your spirit, embrace peace, and return to the world renewed with love and purpose."
              </p>
            </div>
          </div>
        )}

        {/* Section 3: Universal Contact & Social CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-12 rounded-[40px] border border-white/20 text-center relative overflow-hidden bg-gradient-to-br from-brand-pink/10 via-slate-900/80 to-brand-blue/10 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Connect & Join Gatherings
            </h3>
            <p className="font-serif text-lg text-slate-300 leading-relaxed">
              To join these sacred gatherings or for more detailed itinerary information, please contact us directly on WhatsApp or follow Pir Saheb’s journey on Instagram.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </motion.div>

      </div>
    </div>
  );
}
