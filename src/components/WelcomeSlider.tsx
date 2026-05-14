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

export default function WelcomeSlider() {
  return (
    <section className="relative w-full h-32 md:h-48 flex items-center justify-center overflow-hidden bg-slate-900 border-y border-slate-200">
      
      {/* Infinite Image Marquee Background */}
      <div className="absolute inset-0 z-0 flex items-center opacity-30">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          className="flex whitespace-nowrap h-full"
        >
          {/* Double array for seamless loop */}
          {[...images, ...images].map((img, i) => (
            <img 
              key={i}
              src={img} 
              alt="Darbar Sharif Event" 
              className="w-[200px] md:w-[300px] h-full object-cover shrink-0 filter grayscale mix-blend-luminosity"
            />
          ))}
        </motion.div>
      </div>

      {/* Dark gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-black text-white italic tracking-wide">
            Welcome to Muhabbat Mission International
          </h2>
          <p className="font-serif text-sm md:text-lg text-slate-300 font-light drop-shadow-sm">
            where LOVE is not just a word, but a way of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
