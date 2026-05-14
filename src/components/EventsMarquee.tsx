import { motion } from 'motion/react';

const images = [
  '/02-ors-khaki-shah-29sep2024.jpg',
  '/113-3day-spiritual-retreat-29jan2020-ft-img-68787027aaddf.jpg',
  '/13-milad-thoa-bahadur-07oct2022-ft-img-1.jpg',
  '/17-national-milad-celebration-10sep2022-ft-img.jpg',
  '/24-ors-imam-hussain-09aug2022-ft-img.jpg',
  '/27-majlis-mastwaar-23july2022-ft-img.jpg',
  '/3-day-spirtual-retreart.jpg',
  '/46-milad-baldia-town-karachi-15jan2022-f-img.jpg',
  '/75th-Urs-Imam-Hussain-RA-upcoming-jul2025 (1).jpg',
  '/milad-march-06sep2025-ft-img.jpg',
  '/ors-imam-hussain-6jul2025-ft-img.jpg'
];

export default function EventsMarquee() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] uppercase tracking-[5px] text-brand-blue font-bold">Moments of Light</span>
        <h2 className="font-display text-4xl text-slate-900 mt-4">Sacred Gatherings & Urs</h2>
        <div className="h-1 w-20 bg-brand-blue mx-auto mt-6 rounded-full" />
      </div>

      <div className="relative w-full overflow-hidden flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap gap-6 px-3"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...images, ...images].map((img, i) => (
            <div 
              key={i} 
              className="relative w-[300px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shrink-0 shadow-md border border-slate-100 group"
            >
              <img 
                src={img} 
                alt="Event Highlight" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold tracking-widest uppercase text-xs">
                  Darbar Sharif
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
