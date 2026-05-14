import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

const books = [
  { urdu: 'تفسیر مستوار', eng: 'Tafseer-e-Mastwaar', desc: 'Quranic Insights', image: '/Tafseer-e-Mastwaar (1).jpg' },
  { urdu: 'مکین دل', eng: 'Makeen-e-Dil', desc: 'Dweller of the Heart', image: '/makeen-e-dil (1).png' },
  { urdu: 'اسرار مستوار', eng: 'Asrar-e-Mastwaar', desc: 'Mysteries of Mastwaar', image: '/asraar-e-mastwaar-book (1).png' },
  { urdu: 'مہر منور', eng: 'Mehr-e-Munawwar', desc: 'Spiritual Biography', image: '/Mehr-e-Munawwar (1).jpg' },
  { urdu: 'مقام محمود', eng: 'Maqam-e-Mahmood', desc: 'Divine Love Poetry', image: null },
  { urdu: 'سلسلہ دلبر', eng: 'Silsala-e-Dilbar', desc: 'Tasawwuf Guide', image: '/silsila-dilbar-book (1).png' },
];

export default function Books() {
  return (
    <section id="literature" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[5px] text-brand-blue font-bold">Literature</span>
          <h2 className="font-display text-4xl text-slate-900 mt-4">Oceans of Wisdom</h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-brand-blue/30 transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl group-hover:bg-brand-blue/10 transition-colors" />
              
              <div>
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                    <BookOpen size={20} />
                  </div>
                  <span className="font-display text-4xl opacity-[0.03] text-slate-900 group-hover:opacity-10">0{i+1}</span>
                </div>

                {book.image ? (
                  <div className="h-64 w-full rounded-2xl overflow-hidden mb-8 relative flex items-center justify-center bg-slate-50 border border-slate-100 p-4 group/img">
                    <img 
                      src={book.image} 
                      alt={book.eng} 
                      className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] group-hover/img:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="h-64 w-full rounded-2xl overflow-hidden mb-8 relative flex items-center justify-center bg-slate-50 border border-slate-100">
                    <BookOpen size={48} className="text-slate-300" />
                  </div>
                )}

                <div className="relative z-10">
                  <h3 className="font-arabic text-3xl text-slate-900 mb-2 text-right">{book.urdu}</h3>
                  <h4 className="text-brand-blue font-bold text-sm tracking-wide">{book.eng}</h4>
                  <p className="text-slate-600 text-xs mt-2 uppercase tracking-widest">{book.desc}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">View Details</span>
                <div className="w-6 h-[1px] bg-brand-blue group-hover:w-12 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
