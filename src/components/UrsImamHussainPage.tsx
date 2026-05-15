import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Heart, ShieldCheck, Users, Phone, Video, BookOpen } from 'lucide-react';

interface UrsImamHussainPageProps {
  onNavigate: (page: string) => void;
}

export default function UrsImamHussainPage({ onNavigate }: UrsImamHussainPageProps) {
  const [selectedYear, setSelectedYear] = useState('2025');

  const years = ['2025', '2022', '2021', '2020', '2019', '2017'];

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
            <ShieldCheck size={16} /> Sayyid-ush-Shuhadaa Hazrat Imam Hussain (A.S.)
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-slate-900 mb-6 leading-tight"
          >
            75th Annual Urs Mubarak of <span className="text-brand-blue italic">Imam Hussain (A.S.)</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto"
          >
            Under the auspices of Muhabbat Mission International and the spiritual guidance of Pir Khaki Shah Sarkar (R.A.).
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
            {selectedYear === '2025' ? (
              <>
                {/* Upcoming Announcement Banner */}
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
                        75th Urs Imam Hussain (R.A.) — July 2025
                      </h2>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-xs uppercase tracking-widest text-brand-blue font-bold flex items-center gap-2">
                      <Calendar size={14} /> 9th & 10th Muharram
                    </div>
                  </div>

                  <p className="font-serif text-lg leading-relaxed text-slate-700 mb-6">
                    Under the auspices of Muhabbat Mission International and the spiritual guidance of Pir Syed Rasool Shah Khaki (RA), the 75th Annual Urs of Nawasa-e-Rasool, the rider of the shoulders of the Prophet Muhammad (PBUH), the noble martyr of Karbala, Hazrat Imam Hussain (R.A.), is being held on the 9th and 10th of Muharram at the revered shrine of Astana Aliya Qadria Makhdoomia Qalandaria, Makhdoom Pur Sharif, Mureed, District Chakwal.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Clock className="text-brand-blue shrink-0" size={20} />
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm">Mehfil-e-Shabina</h4>
                        <p className="text-xs text-slate-500 font-serif">9th Muharram, after Isha prayers</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Sparkles className="text-brand-blue shrink-0" size={20} />
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm">Main Urs Gathering</h4>
                        <p className="text-xs text-slate-500 font-serif">10th Muharram, starting at 10:00 AM</p>
                      </div>
                    </div>
                  </div>

                  <p className="font-serif text-slate-700 leading-relaxed mb-6">
                    The events are being held under the spiritual patronage of Qalandar of this era, International Preacher of Islam, and the beloved son of Pir Khaki Shah Sarkar (RA), Hazrat Makhdoom Mahmood Mastwaar Qalandar.
                  </p>

                  <div className="p-6 bg-slate-50 rounded-2xl space-y-3 mb-8 border border-slate-100 font-serif text-sm">
                    <p className="flex items-center gap-2 text-slate-900">
                      <span className="text-brand-blue font-bold">✨ Special Naat Recitation:</span> Al-Haaj Muhammad Shehbaz Qamar Fareedi
                    </p>
                    <p className="flex items-center gap-2 text-slate-900">
                      <span className="text-brand-blue font-bold">🎙️ Special Address:</span> Allama Sahibzada Abid Hussain Shakoori Al-Hussaini
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone size={16} className="text-brand-blue" /> Contact: 0333-5006899
                    </div>
                    <div className="flex items-center gap-2 text-brand-pink">
                      <Video size={16} /> Live Broadcast on MMI & Qadri Sound
                    </div>
                  </div>
                </motion.div>

                {/* Day 1 Detail */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 rounded-[34px] border border-slate-100 shadow-xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold block mb-1">
                        Ceremony Itinerary
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-slate-900">
                        75th Urs Imam Hussain A.S. — Day 1
                      </h2>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-xl text-xs uppercase tracking-widest text-slate-500 font-bold border border-slate-100">
                      July 5, 2025 (09 Muharram)
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 space-y-6 font-serif text-base md:text-lg leading-relaxed text-slate-700">
                      <p>
                        On the occasion of the two day ceremony commemorating the 75th Urs of Syedna Imam Hussain A.S., the first day (09 Muharram) was marked by profound spiritual devotion and heartfelt remembrance. The day commenced with the sacred rituals of Ghusal (bathing) and Chadar Poshi (ritual of covering the shrine with a cloth with Quranic Surahs written on it) of the shrine of Syed Rasool Shah Khaki (RA), followed by the traditional flag hoisting ceremony at Darbar Makhdoom Pur Sharif, Chakwal, led by the esteemed Dawood Shah Khaki, eldest son of Makhdoom Mahmood Mastwaar Qalandar.
                      </p>
                      <p>
                        The night will culminate in Mehfil-e-Shabina, a spiritual gathering to honor and reflect upon the unparalleled sacrifices and legacy of Imam Hussain A.S. Scholars and devotees from near and far gathered in unity to uphold his message of justice, truth, and unwavering faith. The atmosphere throughout the day remained one of deep reverence, as participants engaged in collective prayers and majalis, drawing inspiration from the eternal lessons of Karbala.
                      </p>
                    </div>
                    <div className="md:col-span-5 w-full">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white p-2 border border-slate-100 shadow-xl">
                        <img 
                          src="/ors-imam-hussain-6jul2025-ft-img.jpg" 
                          alt="Urs Imam Hussain Day 1" 
                          className="w-full h-full object-cover rounded-2xl contrast-110 hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Day 2 Detail & Key Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 rounded-[34px] border border-slate-100 shadow-xl relative"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold block mb-1">
                        Main Congregation & Discourse
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-slate-900">
                        Urs Imam Hussain A.S. — Day 2
                      </h2>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-xl text-xs uppercase tracking-widest text-slate-500 font-bold border border-slate-100">
                      July 6, 2025 (10 Muharram)
                    </div>
                  </div>

                  <p className="font-serif text-lg leading-relaxed text-slate-700 mb-10">
                    The Main Urs Gathering was held on the 10th of Muharram, beginning at 10:00 AM under the spiritual patronage of The Mystic of the Age, International Preacher of Sufism, and the beloved son of Pir Syed Rasool Shah Khaki RA, Hazrat Makhdoom Mahmood Mastwaar Qalandar, Sajjada Nasheen of Darbar Aliya Qadria Qalandaria Makhdoomia. Special Naat Recitation was presented by Al-Haaj Muhammad Shehbaz Qamar Fareedi, and a Special Address was delivered by Allama Sahibzada Abid Hussain Shakoori Al-Hussaini.
                  </p>

                  {/* Highlights Sections */}
                  <div className="space-y-12">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                      <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                        <Sparkles className="text-brand-blue" size={20} /> Exalted Status of Ahlul Bayt (The Holy Household)
                      </h3>
                      <p className="font-serif text-slate-700 leading-relaxed mb-4">
                        Hazrat Makhdoom Sahib highlighted the unparalleled spiritual rank of the Ahlul Bayt, especially the Panj Tan Pak — the Five Sacred Souls:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 font-serif text-slate-900 font-bold text-sm bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-blue" /> The Holy Prophet Muhammad ﷺ</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-blue" /> Hazrat Ali (R.A.)</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-blue" /> Hazrat Fatima-tuz-Zahra (A.S.)</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-blue" /> Hazrat Imam Hassan (A.S.)</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-brand-blue" /> Hazrat Imam Hussain (A.S.)</li>
                      </ul>
                      <p className="font-serif text-xs text-slate-500 mt-3 italic">
                        — affirming their elevated position among all companions and family members.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                      <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                        <BookOpen className="text-brand-blue" size={20} /> Quranic References and Grammatical Insights
                      </h3>
                      <p className="font-serif text-slate-700 leading-relaxed mb-4">
                        He presented Quranic verses that signify the purity and virtue of the Panj Tan Pak, offering deep linguistic and grammatical explanations that underline their divine selection and sanctity in the light of the Quran. (Surah Āl Imran : 61-62)
                      </p>
                      <div className="p-6 bg-white rounded-2xl border border-slate-100 mb-4 text-center shadow-sm">
                        <p className="font-arabic text-xl md:text-2xl text-brand-blue leading-relaxed mb-4">
                          فَمَنۡ حَآجَّكَ فِيۡهِ مِنۡۢ بَعۡدِ مَا جَآءَكَ مِنَ الۡعِلۡمِ فَقُلۡ تَعَالَوۡا نَدۡعُ اَبۡنَآءَنَا وَاَبۡنَآءَكُمۡ وَنِسَآءَنَا وَنِسَآءَكُمۡ وَاَنۡفُسَنَا وَاَنۡفُسَكُمۡ ثُمَّ نَبۡتَهِلۡ فَنَجۡعَل لَّعۡنَتَ اللّٰهِ عَلَى الۡكٰذِبِيۡنَ
                        </p>
                      </div>
                      <p className="font-serif text-sm text-slate-700 leading-relaxed">
                        In the first part of this surah Christianity is mentioned. The verse sanctioning mutual imprecation or prayer duel (مباہلہ) is in this first part. The prayer duel is associated with the visit of the Christian delegation of Najran which took place in year 9 Hijrah. However, the portion of this surah containing the verse about the prayer duel was certainly not revealed in year 9 Hijrah because internal evidence indicates that this portion was revealed in the early Madinah period, and the Holy Prophet presented the matters in this earlier revealed portion of the surah to the Najran delegation. Apart from this, the principles established in this portion for contending with other religions, and in particular this verse: <span className="font-arabic text-brand-blue">تَعَالَوۡاْ إِلَىٰ ڪَلِمَةٍ۬ سَوَآءِۭ بَيۡنَنَا وَبَيۡنَكُمۡ</span> (…come to an equitable word between us and you) (3:64) are found in letters that the Holy Prophet wrote to the Caesar and others at the end of 6 Hijrah. So, this section was certainly revealed prior to 6 hijrah and the best estimate is that the revelation took place in 3 Hijrah.
                      </p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-4 pt-4 border-t border-slate-100">
                        Reference: Tafseer Bayan-ul-Quran (English)
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                      <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                        <Heart className="text-brand-pink" size={20} /> Belief in Ahlul Bayt as a Path to Paradise
                      </h3>
                      <p className="font-serif text-slate-700 leading-relaxed mb-4">
                        Emphasizing the necessity of love, respect, and loyalty toward the family of the Holy Prophet ﷺ, he reminded believers that:
                      </p>
                      <ul className="space-y-2 font-serif text-slate-900 font-bold text-sm pl-4 border-l-2 border-brand-pink mb-4">
                        <li>✦ Imam Hassan (A.S.) and Imam Hussain (A.S.) are the leaders of the youth of Paradise.</li>
                        <li>✦ Hazrat Fatima-tuz-Zahra (A.S.) is the leader of the women of Paradise.</li>
                      </ul>
                      <p className="font-serif text-slate-700 text-sm">
                        Therefore, entering Jannah without acknowledging and loving these sacred personalities is unimaginable.
                      </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 bg-gradient-to-r from-brand-blue/5 to-transparent">
                      <h3 className="font-display text-xl text-slate-900 mb-4 flex items-center gap-2">
                        <Users className="text-brand-blue" size={20} /> Spiritual Oath, Poetry & Closing Prayers
                      </h3>
                      <p className="font-serif text-slate-700 leading-relaxed mb-4">
                        Towards the end of his address, Hazrat Makhdoom Sahib recited selected couplets from his own poetry, reflecting his deep devotion to the Ahlul Bayt and the spiritual message of Karbala. The event concluded with a large number of attendees pledging their spiritual allegiance (Bay‘ah) on the hand of Makhdoom Mahmood Mastwaar Qalandar. A soul-enriching collective prayer followed, filled with Durood Sharif, Quranic Surahs, and tributes offered to Sayyid-ush-Shuhadaa Imam Hussain (A.S.) and the 72 martyrs of Karbala.
                      </p>
                      <div className="p-6 bg-white rounded-2xl border border-brand-blue/20 mt-6 shadow-sm">
                        <h4 className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-2">
                          Summary of the Message
                        </h4>
                        <p className="font-serif text-slate-700 text-sm leading-relaxed">
                          Sayyid-ush-Shuhadaa Hazrat Imam Hussain (A.S.) offered the ultimate sacrifice—his own life and the lives of his entire family—for the sake of Islam. Through this unparalleled act of devotion, he attained a level of submission and contentment (tasleem o raza) that could never be achieved by anyone other than the beloved grandson of the Prophet Muhammad ﷺ.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <div className="bg-white p-16 rounded-[40px] border border-slate-100 text-center shadow-xl">
                <Calendar className="mx-auto mb-4 text-brand-blue" size={48} />
                <h2 className="font-display text-3xl text-slate-900 mb-4">
                  Archive for {selectedYear} Urs Mubarak
                </h2>
                <p className="font-serif text-slate-600 max-w-xl mx-auto leading-relaxed">
                  The archives for the {selectedYear} gathering commemorate the historical spiritual sittings, Mehfil-e-Shabina, and addresses held at Darbar Makhdoom Pur Sharif.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
