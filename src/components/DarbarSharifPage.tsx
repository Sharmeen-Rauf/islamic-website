import { motion } from 'motion/react';
import { MapPin, Sparkles, Calendar, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface DarbarSharifPageProps {
  onNavigate: (page: string) => void;
}

export default function DarbarSharifPage({ onNavigate }: DarbarSharifPageProps) {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden text-slate-600">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
        <div className="absolute top-[50%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[150px]" />
        <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-blue font-bold mb-6 border border-brand-blue/20"
          >
            <MapPin size={16} /> Astana Aliya Qadria Makhdoomia Qalandaria
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-slate-900 mb-6 leading-tight"
          >
            Darbar <span className="text-brand-blue italic">Makhdoom Pur Sharif</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          >
            The Sacred Sanctuary of Divine Love, Peace, and Spiritual Transformation.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: History & Transformation */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl relative"
            >
              <h2 className="font-display text-3xl text-slate-900 mb-6 border-b border-slate-100 pb-4">
                Sacred Transformation
              </h2>
              <p className="font-serif text-lg leading-relaxed text-slate-700 mb-6">
                A turning point in the spiritual landscape of Chakwal came through a divine vision, where <span className="text-brand-blue font-bold">Syed Rasool Shah Khaki (R.A.)</span> was guided to settle in Makhdoom Pur Sharif. At the time of his arrival, Makhdoom Pur was nothing more than a dense, uninhabited jungle.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-blue mb-6 font-serif italic text-slate-600">
                "Under Syed Rasool Shah Khaki's spiritual leadership, this uninhabited jungle was transformed into a beacon of divine love and spiritual learning. Today, it stands as a center of enlightenment, drawing thousands of seekers from across the globe."
              </div>
              <p className="font-serif text-lg leading-relaxed text-slate-700">
                Today, the Darbar Sharif serves as the headquarters of <span className="text-brand-blue font-bold">Muhabbat Mission International</span>, continuing the mission of spreading unconditional love and the light of Tasawwuf under the guidance of Makhdoom Mahmood Mastwaar Qalandar.
              </p>
            </motion.div>

            {/* Annual Urs Mubarak Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Sparkles size={24} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold block mb-1">Annual Congregation</span>
                  <h2 className="font-display text-2xl md:text-3xl text-slate-900">Annual Urs Mubarak</h2>
                </div>
              </div>
              
              <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-slate-100 shadow-lg">
                <img 
                  src="/02-ors-khaki-shah-29sep2024.jpg" 
                  alt="Annual Urs Mubarak Gathering" 
                  className="w-full h-full object-cover contrast-110 hover:scale-105 transition-transform duration-700"
                />
              </div>

              <p className="font-serif text-lg leading-relaxed text-slate-700 mb-6">
                The Annual Urs Mubarak of Huzoor Syed Rasool Shah Khaki (R.A.) is a monumental spiritual event held at Darbar Makhdoom Pur Sharif. Attended by over 100,000 devotees, the gathering is a testament to the enduring spiritual influence of Pir Khaki Shah Sarkar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <ShieldCheck className="text-brand-blue shrink-0" size={20} />
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Mehfil-e-Samaa</h4>
                    <p className="text-xs text-slate-500">Heart-touching Qawwali & Sufi Music</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <Heart className="text-brand-pink shrink-0" size={20} />
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Langar-e-Aam</h4>
                    <p className="text-xs text-slate-500">Blessed communal meals for all</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Details & Features */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[34px] border border-slate-100 shadow-lg sticky top-32"
            >
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[4px] mb-6 border-b border-slate-100 pb-2">
                Darbar Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue border border-slate-100 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">Location</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-serif">
                      Makhdoom Pur Sharif, Mureed, District Chakwal, Punjab, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue border border-slate-100 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">Weekly Gathering</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-serif">
                      Every Friday: Darse Tasawwuf & Dhikr after Maghrib prayers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue border border-slate-100 shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm mb-1">Main Urs Date</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-serif">
                      Annually on the 29th of September (Subject to lunar calendar adjustments).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                <button 
                  onClick={() => onNavigate('events')}
                  className="w-full py-4 bg-brand-blue text-white rounded-2xl text-xs uppercase tracking-widest font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  View All Events <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>

            {/* Quick Link to Founder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue p-8 rounded-[34px] text-white shadow-xl relative overflow-hidden group cursor-pointer"
              onClick={() => onNavigate('khaki')}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-xl mb-2 relative z-10">Pir Khaki Shah Sarkar</h4>
              <p className="text-white/80 text-xs font-serif mb-4 relative z-10 leading-relaxed">
                Read the sacred biography and teachings of the founder of Darbar Makhdoom Pur Sharif.
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold relative z-10 group-hover:gap-4 transition-all">
                Read Biography <ArrowRight size={14} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gallery Section Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold">Visual Journey</span>
            <h2 className="font-display text-3xl text-slate-900 mt-2">Atmosphere of the Darbar</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <img src="/12-darbar-lighting-08octo2022-ft-img.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Darbar Lighting" />
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <img src="/14-lahore-visit-01oct2022-ft-img.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Darbar Gathering" />
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <img src="/35-haripur-visit-25march2022-ft-img.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Darbar Activities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
