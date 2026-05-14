import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Sparkles, Mail, ExternalLink } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen relative overflow-hidden text-slate-600">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-brand-green/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white shadow-sm px-6 py-2 rounded-full text-xs uppercase tracking-[4px] text-brand-green font-bold mb-6 border border-brand-green/20"
          >
            <GraduationCap size={16} /> World-Class Learning
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-slate-900 mb-6 leading-tight"
          >
            Education <span className="text-brand-green">Initiatives</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto"
          >
            Integrating spiritual development with modern academic rigor to nurture excellence in both worlds.
          </motion.p>
        </div>

        {/* Section 1: Jamia-tul-Mastwaar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 md:p-14 rounded-[40px] border border-brand-green/20 mb-16 shadow-xl relative"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-100">
            <div>
              <span className="text-[10px] uppercase tracking-[4px] text-brand-green font-bold">Girls & Boys Campus</span>
              <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-2">
                Jamia-tul-Mastwaar
              </h2>
            </div>
            <div className="bg-slate-50 px-6 py-3 rounded-2xl text-xs uppercase tracking-widest text-brand-blue font-bold flex items-center gap-2 border border-slate-100 shadow-sm">
              <Sparkles size={16} /> Founded Feb 18, 2018
            </div>
          </div>

          <div className="space-y-6 font-serif text-lg leading-relaxed text-slate-700">
            <p>
              On February 18, 2018, Makhdoom Mahmood Mastwaar Qalandar founded Jamia-tul-Mastwaar, a pioneering educational institution that stands at the intersection of academic rigor and spiritual growth. As the first of its kind, Jamia-tul-Mastwaar uniquely integrates the principles of Tasawwuf (spiritual development) with both religious and worldly education. This holistic approach fosters not only intellectual excellence but also personal and spiritual transformation, ensuring that students are equipped to succeed in all aspects of life.
            </p>
            <p>
              The institute welcomes students from diverse backgrounds, both locally and across Pakistan, creating an inclusive and nurturing environment where learning and spiritual development go hand in hand. In line with its vision of global expansion, Jamia-tul-Mastwaar is preparing to welcome international students, further establishing itself as a leading center of knowledge and spiritual enlightenment for seekers worldwide.
            </p>
          </div>

          {/* Darse-Tasawwuf Feature Box */}
          <div className="my-10 p-8 bg-slate-50 rounded-3xl border border-brand-green/20 bg-gradient-to-r from-brand-green/5 to-transparent shadow-sm">
            <h3 className="text-brand-green font-bold text-base uppercase tracking-widest mb-3 flex items-center gap-2">
              <BookOpen size={18} /> Darse-Tasawwuf Core Curriculum
            </h3>
            <p className="font-serif text-slate-700 text-base leading-relaxed">
              Under the esteemed guidance of Makhdoom Mahmood Mastwaar Qalandar, students engage in comprehensive educational programs, excelling both academically and spiritually. A key aspect of the curriculum includes Darse-Tasawwuf—weekly sessions where students explore the deeper dimensions of self-awareness, closeness to Allah, and the cultivation of positivity. These classes not only enrich the students’ intellectual understanding but also shape their hearts, fostering a profound connection with the Divine.
            </p>
          </div>

          <p className="font-serif text-lg leading-relaxed text-slate-700 mb-8">
            Makhdoom Mahmood Mastwaar Qalandar’s vision for the students of Jamia-tul-Mastwaar extends beyond academic achievement. He strives to nurture individuals who are not only highly skilled in their chosen fields but who also carry forward the universal message of love, light, and harmony. Graduates of the institute are expected to inspire others through their actions, embodying the core values of Tasawwuf—love, service, and compassion—in their professional and personal lives.
          </p>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              Join this Transformative Journey:
            </span>
            <a 
              href="mailto:info@jamiatulmastwaar.com"
              className="px-8 py-4 bg-brand-green text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-green-700 transition-all flex items-center gap-3 shadow-lg shadow-brand-green/20"
            >
              <Mail size={16} /> info@jamiatulmastwaar.com
            </a>
          </div>
        </motion.div>

        {/* Section 2: SNAMS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-14 rounded-[40px] border border-brand-blue/20 shadow-xl relative bg-gradient-to-br from-white via-slate-50 to-brand-blue/5"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-100">
            <div>
              <span className="text-[10px] uppercase tracking-[4px] text-brand-blue font-bold">SNAMS</span>
              <h2 className="font-display text-3xl md:text-4xl text-slate-900 mt-2">
                Syeda Tun Nisa Al Mastwaar School
              </h2>
            </div>
            <div className="bg-slate-50 px-6 py-3 rounded-2xl text-xs uppercase tracking-widest text-slate-600 font-bold border border-slate-100 shadow-sm">
              Montessori to Grade 5
            </div>
          </div>

          <p className="font-serif text-lg leading-relaxed text-slate-700 mb-8">
            SNAMS – Syeda Tun Nisa Al Mastwaar School is a progressive educational institution in Chakwal dedicated to redefining learning through a balanced blend of global academic standards and holistic child development. From Montessori to Grade 5, SNAMS nurtures intellectual growth alongside confidence, leadership, creativity, and strong communication skills. With an international teaching approach and a 21st-century learning framework, the school emphasizes concept-based education, character development, and personalized attention for every child.
          </p>

          <p className="font-serif text-lg leading-relaxed text-slate-700 mb-10">
            Under the leadership of Makhdoom Mahmood Mastwaar Qalandar, SNAMS is guided by a vision to shape responsible, capable, and future-ready individuals prepared to thrive in an evolving world.
          </p>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              Explore SNAMS Website:
            </span>
            <a 
              href="https://www.snamsschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand-blue text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-lg shadow-brand-blue/20"
            >
              <ExternalLink size={16} /> www.snamsschool.com
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
