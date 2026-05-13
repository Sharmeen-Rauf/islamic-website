import { motion } from 'motion/react';
import { BookOpen, Sparkles, Heart, Globe, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const booksList = [
    { name: 'Tafseer e Mastwaar', desc: 'An exploration of several Quranic verses, offering deep spiritual insights.' },
    { name: 'Makeene Dil', desc: 'A heartfelt narrative based on the love and teachings of the Prophet Muhammad (peace be upon him).' },
    { name: 'Asrar e Mastwaar', desc: 'A translation of several excerpts from Hazrat Rumi\'s renowned book "Masnavi," which consists of spiritual and moral lessons interwoven with Sufi metaphors and stories.' },
    { name: 'Azane Qalandar', desc: 'Another remarkable collection of his poetry.' },
    { name: 'Maqame Mahmood', desc: 'A collection of poetry centered on divine love.' },
    { name: 'Silsila e Dilbar', desc: 'A guide for seekers, presenting life lessons from the perspective of Tasawwuf (Islamic mysticism). It covers topics such as patience (sabr), loyalty (wafa), self-purification (tazkiyae nafs), love (ishq), and trust in Allah (tawakkul).' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen relative overflow-hidden text-slate-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-pink/20 blur-[140px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block glass px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-pink font-bold mb-6 border border-brand-pink/20"
          >
            ✦ Astana e Aliya Qadriya Makhdoomia ✦
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            About <span className="text-gradient-pink">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto"
          >
            Welcome to Muhabbat Mission International — where LOVE is not just a word, but a way of life.
          </motion.p>
        </div>

        {/* Section 1: Intro to Makhdoom Mahmood Mastwaar Qalandar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-[10px] uppercase tracking-[4px] text-brand-pink font-bold">Introduction</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-3 mb-6">
            Who is Makhdoom Mahmood Mastwaar Qalandar?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            <div className="lg:col-span-8 space-y-6 font-serif text-lg leading-relaxed text-slate-300">
              <p>
                Makhdoom Mahmood Mastwaar Qalandar, the visionary behind Muhabbat Mission International, has dedicated his life to a profound mission—a mission that echoes the timeless teachings of the Prophet Muhammad (Peace be upon Him). At the heart of this mission lie the core principles of love for Allah, love for the Prophet Muhammad (peace be upon him), and love for humanity.
              </p>
              <p>
                Makhdoom Mahmood Mastwaar Qalandar is a revered spiritual leader, a distinguished poet, a prolific author, and a renowned speaker. His eloquence and profound knowledge have captivated countless individuals.
              </p>
              <p>
                His mission is to spread the message of love, peace, and spiritual awakening to all those who seek guidance. He has established various spiritual centers and institutions where individuals from all walks of life can benefit from his wisdom and experience.
              </p>
            </div>

            <div className="lg:col-span-4 glass p-6 rounded-3xl border border-brand-pink/20 text-center">
              <img 
                src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200" 
                alt="Makhdoom Mahmood Mastwaar Qalandar"
                className="w-full h-64 object-cover rounded-2xl mb-4 grayscale contrast-125"
              />
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                Founder & Spiritual Guide
              </p>
              <p className="font-serif italic text-xs text-brand-pink">
                Makhdoom Mahmood Mastwaar Qalandar
              </p>
            </div>
          </div>

          {/* Golden Quote */}
          <div className="mt-12 p-8 glass rounded-3xl border-l-4 border-l-brand-pink text-left bg-gradient-to-r from-brand-pink/10 to-transparent">
            <p className="font-serif italic text-lg md:text-xl text-white mb-3">
              "O Seeker of Truth! Become so madly in love that every part of your being begins to reflect the image of your Beloved."
            </p>
            <p className="font-arabic text-md text-brand-pink tracking-wide">
              "Ae Talib-e-Haq! Muhabbat o ishq mein yun deewana ban ja ke tera ang ang yaar ka naqsha paish karne lage.”
            </p>
          </div>
        </motion.div>

        {/* Section 2: Biography & Lineage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[4px] text-brand-gold font-bold">Biography</span>
              <h3 className="font-display text-2xl md:text-3xl text-white mt-3 mb-6">
                Makhdoom Mahmood Mastwaar Qalandar
              </h3>
              <div className="space-y-4 font-serif text-sm md:text-base leading-relaxed text-slate-300">
                <p>
                  Shaykh Syed Mahmood ul Hassan Shah Khaki, also famously known as Makhdoom Mahmood Mastwaar Qalandar. Born in Chakwal, Pakistan, Makhdoom Mahmood Mastwaar Qalandar is a distinguished Sufi master and spiritual guide. His eminence is of Syed lineage, tracing his ancestry back to Hazrat Dawood Shah Khaki, a renowned Sufi mystic of his time in Kashmir.
                </p>
                <p>
                  The arrival of Makhdoom Mahmood Mastwaar Qalandar had been foretold by pious and holy personalities in advance. Syed Abdul Latif Kazmi, also known as Imam Bari Sarkar, a revered 17th-century Sufi ascetic, appeared in the dream of his father, Syed Rasool Shah Khaki. In this divine encounter, Imam Bari Sarkar announced the birth of a son and named him "Mahmood." Thus, he was named Mahmood ul Hassan Shah Khaki.
                </p>
                <p>
                  Syed Rasool Shah Khaki appointed Makhdoom Mahmood Mastwaar Qalandar as the Vicegerent, entrusting him with the leadership of the Sufi Orders. He is affiliated with the Qadriya, Makhdoomia, and Qalandariya orders. Today, he is widely recognized as a spiritual luminary and a beacon of light in the realm of Sufism.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bare Pir Saheb Bio Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 flex flex-col justify-between bg-gradient-to-br from-slate-900/50 to-brand-gold/5"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[4px] text-brand-gold font-bold">Lineage Core</span>
              <h3 className="font-display text-2xl md:text-3xl text-white mt-3 mb-6">
                Syed Rasool Shah Khaki (رحمۃ اللہ علیہ)
              </h3>
              <div className="space-y-4 font-serif text-sm md:text-base leading-relaxed text-slate-300 mb-8">
                <p>
                  Syed Rasool Shah Khaki was born on the 9th of Ramadan, in Kupwara near Lolab, Kashmir. Tracing his lineage back to Shaykh Dawood Shah Khaki, he entered a state of jazb at a young age, embarking on a profound spiritual journey across India and Pakistan.
                </p>
                <p>
                  Blessed with the Khilafat of the Qadriya and Naqshbandi orders by great saints like Pir Mehr Ali Shah and Khwaja Qasim Mohrvi, he was guided through a divine vision to settle in Makhdum Pur Sharif—transforming a dense jungle into a global sanctuary of light and divine love.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('khaki')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-gold text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all w-fit shadow-xl shadow-brand-gold/20"
            >
              Read Full Biography <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* Section 3: Literature & Clickable Books */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 mb-16 relative"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[4px] text-brand-gold font-bold">Oceans of Wisdom</span>
              <h2 className="font-display text-3xl md:text-4xl text-white mt-2">
                Literary Works & Publications
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('literature')}
              className="px-8 py-3 glass rounded-full border border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-black transition-all text-xs uppercase tracking-widest font-bold flex items-center gap-2"
            >
              <BookOpen size={16} /> To read books, click here
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booksList.map((b, i) => (
              <div 
                key={i}
                onClick={() => onNavigate('literature')}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-brand-gold/40 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-all">
                    <BookOpen size={16} />
                  </div>
                  <h4 className="text-white font-bold text-base group-hover:text-brand-gold transition-colors underline decoration-brand-gold/40 underline-offset-4">
                    {b.name}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: Our Mission / Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 text-center relative overflow-hidden"
        >
          <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold">Our Purpose</span>
          <h2 className="font-display text-3xl md:text-4xl text-white mt-2 mb-8">
            Our Mission & Vision
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 font-serif text-lg leading-relaxed text-slate-300">
            <p>
              Founded in 1994 by Makhdoom Mahmood Mastwaar Qalandar, Muhabbat (Love) Mission International is dedicated to a vision free of sectarianism and politics. Our mission is rooted in love—love for Allah Almighty, love for His Messenger ﷺ, and love for each other. We pray that Allah blesses all human beings to love one another unconditionally.
            </p>
            <p>
              Makhdoom Mahmood Mastwaar Qalandar envisioned unity in diversity, aiming to achieve love, peace, and harmony among all people. Muhabbat Mission International strives to bring happiness, prosperity, and spiritual discovery through the mystical path toward oneness.
            </p>
            <p>
              The Darbar Shareef, Astana e Aliya Qadriya Makhdoomia, welcomes everyone, regardless of caste, creed, or religion. We offer a space for advice, guidance, and training in self-realization and self-improvement, helping individuals achieve happiness and well-being.
            </p>
            <p>
              Muhabbat Mission International, originally founded in Pakistan, has grown to encompass Asia and beyond, with established chapters in the USA, UK, Europe and South Africa. Today, our teachings inspire over 100,000 students worldwide, supported by more than 100 centers and institutions.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('education')}
              className="px-8 py-4 bg-brand-green/20 border border-brand-green/40 text-brand-green rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-green hover:text-black transition-all"
            >
              Explore Education Initiatives
            </button>
            <button
              onClick={() => onNavigate('welfare')}
              className="px-8 py-4 bg-brand-blue/20 border border-brand-blue/40 text-brand-blue rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-blue hover:text-black transition-all"
            >
              Explore Welfare Initiatives
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
