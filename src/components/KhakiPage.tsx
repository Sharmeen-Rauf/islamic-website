import { motion } from 'motion/react';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export default function KhakiPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-[150px] animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-pink/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header / Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-gold font-bold mb-6"
          >
            <Sparkles size={14} /> Sacred Biography & Teachings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-white mb-4 leading-tight"
          >
            Syed Rasool Shah <span className="text-gradient-gold">Khaki</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-arabic text-2xl text-slate-400 tracking-wider mb-2"
          >
            سید رسول شاہ خاکی رحمۃ اللہ علیہ
          </motion.p>
          <p className="text-xs uppercase tracking-[3px] text-brand-pink font-semibold">
            Father of Makhdoom Mahmood Mastwaar Qalandar
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-blue mx-auto mt-8 rounded-full" />
        </div>

        {/* Book Reading Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-dark p-8 md:p-16 rounded-[40px] border border-brand-gold/20 shadow-2xl relative"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-6 left-6 text-brand-gold/30 hidden sm:block">
            <Feather size={24} />
          </div>
          <div className="absolute top-6 right-6 text-brand-gold/30 hidden sm:block">
            <BookOpen size={24} />
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Intro Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
              <div className="flex-1 font-serif text-lg leading-relaxed text-slate-300">
                <p className="mb-6">
                  <span className="float-left text-7xl font-display text-brand-gold pr-4 pb-2 leading-none">
                    S
                  </span>
                  yed Rasool Shah Khaki was born on the 9th of Ramadan, on a Monday during Zuhar time, in Kupwara near Lolab, Kashmir. He was born into a distinguished Syed family, tracing his lineage back to Shaykh Dawood Shah Khaki. His father, Pir Musa Shah, was a revered Sufi mystic in Kashmir.
                </p>
                <p className="mb-6">
                  Syed Rasool Shah Khaki received his early education and spiritual training within the Makhdoomia (Suharwardiya) order, under the guidance of his grandfather, Pir Abdullah Shah. In Kashmir, he frequently met with Pir Sharf ud Din Rafiqi, the vicegerent of the esteemed early 20th-century Sufi scholar and poet, Pir Meher Ali Shah. The spiritual influence and blessings of Pir Sharf ud Din Rafiqi played a crucial role in his spiritual development.
                </p>
              </div>

              <div className="w-full lg:w-80 shrink-0">
                <div className="glass p-3 rounded-3xl border border-brand-gold/30 shadow-2xl overflow-hidden group">
                  <img
                    src="/syed-rasool-shah-khaki.jpg"
                    alt="Syed Rasool Shah Khaki"
                    className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                  />
                  <p className="text-[10px] text-center mt-3 text-slate-400 uppercase tracking-widest font-semibold">
                    Syed Rasool Shah Khaki (رحمۃ اللہ علیہ)
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent my-12" />

            {/* State of Jazb & Travels */}
            <div className="mb-16">
              <h2 className="font-display text-3xl text-brand-gold mb-6 italic">
                State of Jazb & Sacred Travels
              </h2>
              <p className="font-serif text-lg leading-relaxed text-slate-300 mb-6">
                At a young age, Syed Rasool Shah Khaki entered a state of jazb—a profound spiritual absorption and divine attraction. Driven by this state, he left his home and embarked on a profound journey across the subcontinent. His quest for spiritual enlightenment led him to numerous sacred sites in India, including Delhi, Bombay, Amritsar, Dehra Dun, Ambala, and Bareilly Sharif. In Pakistan, his journey led him to Lahore, Rawalpindi, Murree, Razmak, Chilas, Doda, Mureed, and finally, to the revered Makhdoom Pur Sharif.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-brand-pink font-bold text-sm tracking-widest uppercase mb-3">
                    Meeting in Murree & Golra Sharif
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-serif">
                    In Murree, he had a profound meeting with Khwaja Qasim Mohrvi, a respected Sufi saint, who honored him with the Khilafat of the Naqshbandi order. Near Pindi, he journeyed to Golra Sharif where he met the illustrious saint Pir Mehr Ali Shah. Pir Mehr Ali Shah was not only a scholar of deep Islamic theology but also a luminous beacon in the world of Sufism, embodying the sacred virtues of humility, wisdom, and divine love. Syed Rasool Shah Khaki was deeply blessed by his spiritual presence.
                  </p>
                </div>

                <div className="glass p-8 rounded-3xl border border-white/5">
                  <h3 className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-3">
                    Encounter in Bombay
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-serif">
                    During his travels in Bombay, he encountered Naqeeb ul Ashraaf Syed Ibrahim Saif ud Din Gilani, the Sajjada Nasheen of Baghdad Shareef. Recognizing the depth of Syed Rasool Shah Khaki’s spiritual state, Syed Ibrahim prayed for him to transition from his intense spiritual absorption (jazb) and to also serve as a guide for seekers. Following this prayer, Syed Ibrahim bestowed upon him the Khilafat of the Qadriya order.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent my-12" />

            {/* Second Photo & Focus */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center mb-16">
              <div className="flex-1 font-serif text-lg leading-relaxed text-slate-300">
                <h2 className="font-display text-3xl text-brand-gold mb-6 italic">
                  Focus on Qadriya Order & Shrines Visited
                </h2>
                <p className="mb-6">
                  Though Syed Rasool Shah Khaki was honored with the spiritual authority of several Sufi orders, his focus remained primarily on the teachings of the Qadriya order. He devoted his life to guiding others along the path of spiritual growth and enlightenment, leaving a lasting impact on all who sought his wisdom.
                </p>
                <p className="mb-6">
                  Throughout his life, he embarked on numerous spiritual journeys, visiting the revered shrines of great Sufi saints and spiritual luminaries. He paid homage to sacred sites such as Data Ganj Baksh Ali Hujweri, Syed Shah Muhammad Ghous Lahori, Imam Bari Sarkar, Abdullah Shah Ghazi, Abdullah Shah Sahabi, Baha'ud din Zakriya Multani, and Syed Jalal Uddin Surkhposh Bukhari.
                </p>
              </div>

              <div className="w-full lg:w-80 shrink-0">
                <div className="glass p-3 rounded-3xl border border-brand-gold/30 shadow-2xl overflow-hidden group">
                  <img
                    src="/Khaki-Shah-3.jpg"
                    alt="Syed Rasool Shah Khaki"
                    className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                  />
                  <p className="text-[10px] text-center mt-3 text-slate-400 uppercase tracking-widest font-semibold">
                    Spiritual Luminary & Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent my-12" />

            {/* Literary Works & Settling in Makhdum Pur Sharif */}
            <div className="mb-16 font-serif text-lg leading-relaxed text-slate-300">
              <h2 className="font-display text-3xl text-brand-gold mb-6 italic text-center">
                Literary Contributions & The Divine Vision
              </h2>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Syed Rasool Shah Khaki was also a prolific writer on the subject of Tasawwuf, contributing significantly to the literature of Sufism. His works include <strong className="text-brand-gold font-normal italic">Misbahul Hidayat</strong>, <strong className="text-brand-gold font-normal italic">Asrar e Ramooz e Tareeqat</strong>, <strong className="text-brand-gold font-normal italic">Ramooz e Haqeeqat</strong>, <strong className="text-brand-gold font-normal italic">Zia ul Quloob</strong> and <strong className="text-brand-gold font-normal italic">Kashkol e Qalandari Dar Daman e Sikandari</strong>, each of which reflects his deep spiritual insights and commitment to the Sufi path.
              </p>

              <div className="glass-dark p-8 rounded-3xl border border-brand-pink/20 my-8 text-center max-w-3xl mx-auto">
                <p className="text-sm font-sans tracking-widest text-brand-pink uppercase font-bold mb-3">
                  Transformation of Makhdum Pur Sharif
                </p>
                <p className="italic text-base text-slate-300 leading-relaxed">
                  "A turning point in his life came through a divine vision, where he was guided to settle in Makhdum Pur Sharif. At the time of his arrival, Makhdum Pur was nothing more than a dense, uninhabited jungle. However, under Syed Rasool Shah Khaki's spiritual leadership, this place was transformed into a center of divine love and spiritual learning. Today, Makhdum Pur Sharif is a beacon of light, drawing thousands of seekers from across the world."
                </p>
              </div>
            </div>

            {/* Sacred Quotes & Philosophy */}
            <div className="mt-16 pt-12 border-t border-brand-gold/20 text-center">
              <h3 className="font-display text-2xl text-white mb-8 tracking-wide">
                Enduring Legacy & Sacred Sayings
              </h3>
              
              <div className="space-y-8 max-w-3xl mx-auto">
                <blockquote className="glass p-8 rounded-3xl border-l-4 border-l-brand-gold text-left">
                  <p className="font-serif italic text-xl text-white leading-relaxed mb-4">
                    “To contemplate is Noor (The Light) whereas neglect is darkness, and ignorance is misguidance.”
                  </p>
                  <footer className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                    — Syed Rasool Shah Khaki (رحمۃ اللہ علیہ)
                  </footer>
                </blockquote>

                <blockquote className="glass p-8 rounded-3xl border-l-4 border-l-brand-pink text-left">
                  <p className="font-serif italic text-xl text-white leading-relaxed mb-4">
                    “Love depends on spiritual awareness and spiritual awareness depends on love. In other words, without spiritual awareness, love cannot be born and without love, one cannot progress in spiritual awareness.”
                  </p>
                  <footer className="text-xs uppercase tracking-widest text-brand-pink font-bold">
                    — Syed Rasool Shah Khaki (رحمۃ اللہ علیہ)
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
