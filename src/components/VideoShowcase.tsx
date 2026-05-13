import { motion } from 'motion/react';
import { Youtube, PlayCircle } from 'lucide-react';

const videos = [
  { title: "Darse Tasawwuf", category: "Meditation", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800" },
  { title: "Soul Connections", category: "Podcast", image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&q=80&w=800" },
  { title: "Urs 2024 Highlights", category: "Events", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" },
  { title: "Morning Dhikr", category: "Sacred", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" },
];

export default function VideoShowcase() {
  return (
    <section id="media" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[5px] text-brand-blue font-bold">Media Hub</span>
            <h2 className="font-display text-4xl text-white mt-4">The Digital Darbar</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full glass text-[10px] uppercase tracking-widest font-bold">
            <Youtube size={16} className="text-red-500" /> Subscribe
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-2xl">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircle className="text-white w-12 h-12" />
                </div>
                <div className="absolute bottom-2 right-2 glass px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase tracking-widest">
                  12:40
                </div>
              </div>
              <h3 className="text-white font-bold text-sm tracking-wide mb-1 group-hover:text-brand-pink transition-colors">{v.title}</h3>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{v.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
