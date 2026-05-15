import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Heart, ShieldCheck, Users, Phone, Video, BookOpen, Music, Mic } from 'lucide-react';

interface UrsKhakiPageProps {
  onNavigate: (page: string) => void;
}

export default function UrsKhakiPage({ onNavigate }: UrsKhakiPageProps) {
  const [selectedYear, setSelectedYear] = useState('2024');

  const years = ['2024', '2023', '2022', '2021', '2020'];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden text-slate-600">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
        <div className="absolute top-[50%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <ShieldCheck size={16} /> Murshid of Majzooban, Qalandaran, and Salikaan
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-slate-900 mb-6 leading-tight"
          >
            31st Urs Mubarak of <span className="text-brand-blue italic">Syed Rasool Shah Khaki (R.A.)</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          >
            Commemorating the legacy of the source of Hidayah and spiritual guide of thousands.
          </motion.p>
        </div>

        {/* Layout Grid: Sidebar Years Filter + Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Years Selector */}
          <div className="lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-100 space-y-2 shadow-sm">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[4px] mb-4 border-b border-slate-100 pb-2 px-4">
              Archive Years
            </h3>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`w-full text-left px-6 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all ${
                  selectedYear === y
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-brand-blue'
                }`}
              >
                {y} Urs Archive
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-16">
            {selectedYear === '2024' ? (
              <>
                {/* Main Announcement Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 md:p-12 rounded-[34px] border border-slate-100 bg-gradient-to-r from-brand-blue/5 via-white to-brand-blue/5 shadow-xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold block mb-1">
                        Upcoming Event Announcement
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-slate-900">
                        31st Urs Syed Rasool Shah Khaki R.A
                      </h2>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-xs uppercase tracking-widest text-brand-blue font-bold flex items-center gap-2">
                      <Calendar size={14} /> November 10, 2024
                    </div>
                  </div>

                  <p className="font-serif text-lg leading-relaxed text-slate-700 mb-6">
                    The 31st Urs Mubarak of Huzoor Syed Rasool Shah Khaki Shah (R.A.), the Murshid of Majzooban, Qalandaran, and Salikaan and the source of Hidayah, will be held at 10:00 AM on Sunday, 10th November 2024, under the supervision of Makhdoom Mahmood Mastwaar Qalandar at Darbar Sharif.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Clock className="text-brand-blue shrink-0" size={20} />
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm">Main Gathering</h4>
                        <p className="text-xs text-slate-500 font-serif">10:00 AM, Sunday</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <MapPin className="text-brand-blue shrink-0" size={20} />
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm">Location</h4>
                        <p className="text-xs text-slate-500 font-serif">Darbar Sharif, Makhdoom Pur Sharif</p>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-slate-700 leading-relaxed mb-6">
                    This sacred occasion will be illuminated with mehfil-e-samaa (qawwali), and heartfelt duas (supplications). It will be a gathering of fuqara and ahl-e-dil, immersed in ishq-e-haqiqi (divine love) and striving for ma’rifah (gnosis) through suhbat-e-awliya (company of saints).
                  </p>

                  <div className="p-6 bg-slate-50 rounded-2xl space-y-3 mb-8 border border-slate-100 font-serif text-sm">
                    <p className="flex items-center gap-2 text-slate-900">
                      <span className="text-brand-blue font-bold">✨ Spiritual Goal:</span> Islah-e-nafs (purification of the self)
                    </p>
                    <p className="flex items-center gap-2 text-slate-900">
                      <span className="text-brand-blue font-bold">🌊 Ultimate Path:</span> Fana fi Allah, reconnecting hearts to the eternal ocean of divine presence.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={16} className="text-brand-blue" /> Inquiries: +1 224-716-6575
                    </div>
                    <div className="flex items-center gap-2 text-brand-pink">
                      <Video size={16} /> Live Stream on YouTube
                    </div>
                  </div>
                </motion.div>

                {/* Itinerary / Details Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 rounded-[34px] border border-slate-100 shadow-xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold block mb-1">
                        Ceremony Highlights
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-slate-900">
                        Gathering of Divine Love (Ishq-e-Haqiqi)
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-6 font-serif text-base md:text-lg leading-relaxed text-slate-700">
                      <p>
                        The Urs serves as a means of barakah (blessing), tajalli (divine manifestation), and islah-e-nafs (purification of the self), guiding seekers on the path of fana fi shaykh, fana fi rasool, and ultimately fana fi Allah.
                      </p>
                      <p>
                        Heartfelt prayers and supplications will be offered for the global Muslim Ummah, seeking peace, unity, and divine guidance. The atmosphere will be one of profound reverence as seekers from all walks of life gather to honor the legacy of Pir Khaki Shah Sarkar (R.A.).
                      </p>
                      <div className="pt-4">
                        <button
                          onClick={() => onNavigate('khaki')}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-blue-700 transition-all shadow-lg"
                        >
                          <BookOpen size={16} /> Learn more about Syed Rasool Shah Khaki <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-5 w-full">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white p-2 border border-slate-100 shadow-xl">
                        <img 
                          src="/02-ors-khaki-shah-29sep2024.jpg" 
                          alt="Urs Khaki Shah" 
                          className="w-full h-full object-cover rounded-2xl contrast-110 hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Highlights Sections */}
                <div className="space-y-12">
                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                    <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <Music className="text-brand-blue" size={20} /> Mehfil-e-Samaa (Qawwali)
                    </h3>
                    <p className="font-serif text-slate-700 leading-relaxed">
                      A soul-enriching session of Sufi Qawwali, reflecting the deep devotion and love for the Divine. The poetry of the saints will be recited to inspire hearts and elevate spirits.
                    </p>
                  </div>

                  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                    <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                      <Mic className="text-brand-blue" size={20} /> Heartfelt Supplications (Dua)
                    </h3>
                    <p className="font-serif text-slate-700 leading-relaxed">
                      Collective prayers led by Makhdoom Mahmood Mastwaar Qalandar, invoking divine mercy and blessings for all attendees and the entire world.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white p-16 rounded-[40px] border border-slate-100 text-center shadow-xl">
                <Calendar className="mx-auto mb-4 text-brand-blue" size={48} />
                <h2 className="font-display text-3xl text-slate-900 mb-4">
                  Archive for {selectedYear} Urs Mubarak
                </h2>
                <p className="font-serif text-slate-600 max-w-xl mx-auto leading-relaxed">
                  The archives for the {selectedYear} gathering at Darbar Sharif commemorate the historical spiritual sittings and addresses held in honor of Syed Rasool Shah Khaki (R.A.).
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
