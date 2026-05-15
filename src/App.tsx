import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeSlider from './components/WelcomeSlider';
import AyatQuote from './components/AyatQuote';
import Mission from './components/Mission';
import VideoShowcase from './components/VideoShowcase';
import EventsMarquee from './components/EventsMarquee';
import Books from './components/Books';
import KhakiPage from './components/KhakiPage';
import AboutPage from './components/AboutPage';
import EducationPage from './components/EducationPage';
import WelfarePage from './components/WelfarePage';
import EventsPage from './components/EventsPage';
import MissionPage from './components/MissionPage';
import ToursPage from './components/ToursPage';
import UrsImamHussainPage from './components/UrsImamHussainPage';
import UpcomingEventsPage from './components/UpcomingEventsPage';
import DarbarSharifPage from './components/DarbarSharifPage';
import UrsKhakiPage from './components/UrsKhakiPage';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-md overflow-hidden p-1">
                <img src="/logo (6).png" alt="Muhabbat Mission Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="font-display text-xs tracking-widest text-slate-900 leading-tight">
                  MUHABBAT <span className="text-brand-blue">MISSION</span>
                </h1>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">International</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Spreading the light of Love and Tasawwuf across the globe since 1994. 
              Founded by Makhdoom Mahmood Mastwaar Qalandar.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 text-[10px] uppercase tracking-[4px] font-bold mb-8">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} className="text-brand-blue" /> 
                <a href="mailto:mastwaar@gmail.com" className="hover:text-brand-blue transition-colors">mastwaar@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={16} className="text-brand-blue" /> 
                <a href="tel:+12247166575" className="hover:text-brand-blue transition-colors">+1 224-716-6575</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-brand-blue flex-shrink-0" /> 
                <span>Darbar Makhdoom Pur Shareef Murid, Chakwal 48800, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-[10px] uppercase tracking-[4px] font-bold mb-8">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: 'https://instagram.com/mastwaarqalandar' },
                { icon: <Youtube size={20} />, href: '#' },
                { icon: <Facebook size={20} />, href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-brand-blue hover:border-brand-blue transition-all border border-slate-200">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 text-[10px] uppercase tracking-[4px] font-bold mb-8">Newsletter</h4>
            <p className="text-[10px] text-slate-500 mb-4 uppercase tracking-wider">Stay updated with sacred gatherings</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-brand-blue transition-colors text-slate-800" />
              <button className="bg-brand-blue px-4 py-2 rounded-lg text-[10px] uppercase font-bold text-white tracking-widest hover:bg-blue-700 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
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
      case 'darbar-sharif':
        return <DarbarSharifPage onNavigate={setCurrentPage} />;
      case 'urs-khaki':
        return <UrsKhakiPage onNavigate={setCurrentPage} />;
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
            <WelcomeSlider />
            <AyatQuote />
            <Mission />
            <Showcase />
            <ToursRoadmap onNavigate={setCurrentPage} />
            <Books />
            <VideoShowcase />
            <EventsMarquee />
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
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
         >
           <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-white shadow-xl border border-slate-100 p-2">
              <img 
                src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover rounded-[34px]"
                alt="Founder"
              />
           </div>
           <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl max-w-xs shadow-2xl border border-slate-100">
              <p className="font-serif italic text-lg text-slate-800 mb-2 leading-tight tracking-tight">
                "Uplifting goodness of society is only possible when the heart has Love."
              </p>
              <p className="text-[10px] uppercase font-bold text-brand-blue tracking-[3px]">
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
           <h2 className="font-display text-4xl text-slate-900 mt-4 mb-8 leading-tight">
             Traces of <span className="text-brand-blue italic">Infinite</span> Grace
           </h2>
           <p className="text-slate-600 leading-relaxed mb-8">
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
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h5 className="text-slate-900 font-bold text-xs uppercase tracking-widest">{path.title}</h5>
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
