import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AyatQuote from './components/AyatQuote';
import Mission from './components/Mission';
import VideoShowcase from './components/VideoShowcase';
import Books from './components/Books';
import KhakiPage from './components/KhakiPage';
import AboutPage from './components/AboutPage';
import EducationPage from './components/EducationPage';
import WelfarePage from './components/WelfarePage';
import EventsPage from './components/EventsPage';
import MissionPage from './components/MissionPage';
import ToursPage from './components/ToursPage';
import UrsImamHussainPage from './components/UrsImamHussainPage';
import ToursRoadmap from './components/ToursRoadmap';
import UpcomingEventsPage from './components/UpcomingEventsPage';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/20 shadow-lg overflow-hidden bg-black/20">
                <img src="/logo (6).png" alt="Muhabbat Mission Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <h1 className="font-display text-xs tracking-widest text-white leading-tight">
                  MUHABBAT <span className="text-brand-pink">MISSION</span>
                </h1>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">International</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Spreading the light of Love and Tasawwuf across the globe since 1994. 
              Founded by Makhdoom Mahmood Mastwaar Qalandar.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[4px] font-bold mb-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={16} className="text-brand-pink" /> 
                <a href="mailto:mastwaar@gmail.com" className="hover:text-white transition-colors">mastwaar@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={16} className="text-brand-pink" /> 
                <a href="tel:+12247166575" className="hover:text-white transition-colors">+1 224-716-6575</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="text-brand-pink flex-shrink-0" /> 
                <span>Darbar Makhdoom Pur Shareef Murid, Chakwal 48800, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[4px] font-bold mb-8">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: 'https://instagram.com/mastwaarqalandar' },
                { icon: <Youtube size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-brand-pink hover:border-brand-pink transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[4px] font-bold mb-8">Newsletter</h4>
            <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-wider">Stay updated with sacred gatherings</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-brand-pink transition-colors" />
              <button className="bg-brand-pink px-4 py-2 rounded-lg text-[10px] uppercase font-bold text-white tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            © 2024 MUHABBAT MISSION INTERNATIONAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-slate-600 uppercase tracking-widest hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderView = () => {
    switch (currentPage) {
      case 'khaki':
        return <KhakiPage />;
      case 'mission':
        return <MissionPage onNavigate={setCurrentPage} />;
      case 'tours':
        return <ToursPage />;
      case 'urs-imam-hussain':
        return <UrsImamHussainPage onNavigate={setCurrentPage} />;
      case 'upcoming-events':
        return <UpcomingEventsPage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'education':
        return <EducationPage />;
      case 'welfare':
        return <WelfarePage />;
      case 'events':
        return <EventsPage onNavigate={setCurrentPage} />;
      case 'literature':
        return (
          <div className="pt-20">
            <Books />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <AyatQuote />
            <Mission />
            <Showcase />
            <ToursRoadmap onNavigate={setCurrentPage} />
            <Books />
            <VideoShowcase />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderView()}
      <Footer />
    </div>
  );
}

function Showcase() {
  return (
    <section className="py-24 glass-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
         >
           <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass border-white/10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover rounded-[34px]"
                alt="Founder"
              />
           </div>
           <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl max-w-xs shadow-2xl">
              <p className="font-serif italic text-lg text-white mb-2 leading-tight tracking-tight">
                "Uplifting goodness of society is only possible when the heart has Love."
              </p>
              <p className="text-[10px] uppercase font-bold text-brand-pink tracking-[3px]">
                — MAKHDOM MEHMOOD
              </p>
           </div>
         </motion.div>
         
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
         >
           <span className="text-brand-green text-[10px] uppercase tracking-[4px] font-bold">Spiritual Lineage</span>
           <h2 className="font-display text-4xl text-white mt-4 mb-8 leading-tight">
             Traces of <span className="text-brand-pink italic">Infinite</span> Grace
           </h2>
           <p className="text-slate-300 leading-relaxed mb-8 opacity-80">
            Shaykh Syed Mahmood ul Hassan Shah Khaki traces his lineage to Hazrat Dawood Shah Khaki of Kashmir. 
            His teachings emphasize purification of the heart, inner peace, and deep connection with the Divine.
           </p>
           <div className="space-y-6">
              {[
                { title: 'Qadriya Order', desc: 'The path of strength and devotion.' },
                { title: 'Makhdoomia Order', desc: 'The lineage of knowledge and service.' },
                { title: 'Qalandariya Order', desc: 'The way of absolute freedom in Divine Love.' },
              ].map((path, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 shrink-0" />
                  <div>
                    <h5 className="text-white font-bold text-xs uppercase tracking-widest">{path.title}</h5>
                    <p className="text-slate-500 text-xs">{path.desc}</p>
                  </div>
                </div>
              ))}
           </div>
         </motion.div>
      </div>
    </section>
  );
}
