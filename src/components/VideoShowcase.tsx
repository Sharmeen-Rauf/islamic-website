import { motion } from 'motion/react';
import { Youtube, PlayCircle, CheckCircle2 } from 'lucide-react';

const videos = [
  { 
    title: "Haqeeqat e Mustafa ﷺ | Dars e Masnavi | Jumma Bayan", 
    views: "12K views", 
    time: "2 days ago",
    duration: "45:20",
    image: "/14-lahore-visit-01oct2022-ft-img.jpg" 
  },
  { 
    title: "Shafaat e Mustafa ﷺ | Dars e Masnavi | Jumma Bayan", 
    views: "18K views", 
    time: "1 week ago",
    duration: "52:10",
    image: "/35-haripur-visit-25march2022-ft-img.jpg" 
  },
  { 
    title: "Barsaat of Karam | Annual Visit Khushab 2026", 
    views: "34K views", 
    time: "2 months ago",
    duration: "1:15:30",
    image: "/asifurrehman-ilford-london-07sep2025-ft-img.jpg" 
  },
  { 
    title: "The Reality of Divine Love | Tasawwuf Session", 
    views: "45K views", 
    time: "3 months ago",
    duration: "38:45",
    image: "/berlin-germany-visit-13sep2025-ft-img.jpg" 
  },
];

export default function VideoShowcase() {
  return (
    <section id="media" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[5px] text-brand-blue font-bold flex items-center gap-2 mb-3">
              <Youtube size={14} className="text-red-600" />
              YouTube Channel
            </span>
            <h2 className="font-display text-4xl text-slate-900 leading-tight">
              Makhdoom Mahmood <span className="text-brand-blue italic">Mastwaar</span> Qalandar
            </h2>
          </div>
          <a 
            href="https://www.youtube.com/user/Mastwaar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-red-600/20 transition-all hover:-translate-y-1"
          >
            <Youtube size={16} /> Subscribe
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-slate-100">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="text-white w-12 h-12 drop-shadow-md" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-bold text-white tracking-widest backdrop-blur-sm">
                  {v.duration}
                </div>
              </div>
              
              <div className="flex gap-3 px-1">
                {/* Channel Avatar */}
                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 shadow-sm border border-slate-200 mt-1">
                  <img src="/logo (6).png" alt="Channel Avatar" className="w-full h-full object-cover bg-white p-0.5" />
                </div>
                
                {/* Video Info */}
                <div className="flex flex-col">
                  <h3 className="text-slate-900 font-semibold text-sm line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {v.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5 text-slate-600 text-[11px] font-medium">
                    Mastwaar
                    <CheckCircle2 size={10} className="text-slate-400" />
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <span>{v.views}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 mx-0.5"></span>
                    <span>{v.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
