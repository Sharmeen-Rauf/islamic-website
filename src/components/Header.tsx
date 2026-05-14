import { motion } from 'motion/react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Header({ currentPage = 'home', onNavigate = () => {} }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setEventsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark py-2 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          onClick={() => handleNav('home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform overflow-hidden bg-black/20">
            <img src="/logo (6).png" alt="Muhabbat Mission Logo" className="w-full h-full object-contain p-1" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-xs tracking-widest text-white leading-tight">
              MUHABBAT <span className="text-brand-pink">MISSION</span>
            </h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter">International</p>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => handleNav('home')}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-colors relative group ${currentPage === 'home' ? 'text-brand-pink font-bold' : 'text-slate-300 hover:text-brand-pink'}`}
          >
            Home
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-pink transition-all ${currentPage === 'home' ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
          </button>

          <button
            onClick={() => handleNav('mission')}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-colors relative group ${currentPage === 'mission' ? 'text-brand-pink font-bold' : 'text-slate-300 hover:text-brand-pink'}`}
          >
            Mission
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-pink transition-all ${currentPage === 'mission' ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
          </button>

          {/* About Us Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('about')}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest flex items-center gap-1 transition-colors relative ${['about', 'education', 'welfare'].includes(currentPage) ? 'text-brand-pink font-bold' : 'text-slate-300 hover:text-brand-pink'}`}
            >
              About Us <ChevronDown size={12} />
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-pink transition-all ${['about', 'education', 'welfare'].includes(currentPage) ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
            </button>

            {aboutDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 w-48 glass-dark rounded-2xl py-3 px-2 border border-white/10 shadow-2xl z-50 flex flex-col gap-1 bg-slate-950/95 backdrop-blur-2xl"
              >
                <button
                  onClick={() => handleNav('about')}
                  className={`text-left px-4 py-2 text-[10px] uppercase tracking-widest rounded-xl transition-all ${currentPage === 'about' ? 'bg-brand-pink text-white font-bold' : 'text-slate-300 hover:bg-white/5 hover:text-brand-pink'}`}
                >
                  About Us Core
                </button>
                <button
                  onClick={() => handleNav('education')}
                  className={`text-left px-4 py-2 text-[10px] uppercase tracking-widest rounded-xl transition-all ${currentPage === 'education' ? 'bg-brand-green text-black font-bold' : 'text-slate-300 hover:bg-white/5 hover:text-brand-green'}`}
                >
                  Education
                </button>
                <button
                  onClick={() => handleNav('welfare')}
                  className={`text-left px-4 py-2 text-[10px] uppercase tracking-widest rounded-xl transition-all ${currentPage === 'welfare' ? 'bg-brand-blue text-black font-bold' : 'text-slate-300 hover:bg-white/5 hover:text-brand-blue'}`}
                >
                  Welfare
                </button>
              </motion.div>
            )}
          </div>

          <button
            onClick={() => handleNav('khaki')}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-colors relative group ${currentPage === 'khaki' ? 'text-brand-gold font-bold' : 'text-slate-300 hover:text-brand-gold'}`}
          >
            Syed Rasool Shah Khaki
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-gold transition-all ${currentPage === 'khaki' ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
          </button>

          {/* Events & Tours Mega Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={() => setEventsDropdownOpen(true)}
            onMouseLeave={() => setEventsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('events')}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest flex items-center gap-1 transition-colors relative ${['events', 'tours'].includes(currentPage) ? 'text-brand-pink font-bold' : 'text-slate-300 hover:text-brand-pink'}`}
            >
              Events & Tours <ChevronDown size={12} />
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-pink transition-all ${['events', 'tours'].includes(currentPage) ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
            </button>

            {eventsDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl z-50 grid grid-cols-3 gap-8 bg-slate-950/95 backdrop-blur-2xl"
              >
                {/* Column 1 */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-brand-gold uppercase tracking-[3px] border-b border-white/10 pb-2">
                    Darbar Sharif
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      { name: 'Urs Hazrat Khaki Shah RA', path: 'events' },
                      { name: 'Urs Imam Hussain RA', path: 'urs-imam-hussain' },
                      { name: '3 Day Spiritual Retreat', path: 'events' },
                      { name: 'Friday Prayer', path: 'events' },
                      { name: 'Eid-ul-Adha', path: 'events' },
                      { name: 'Eid-ul-Fitr', path: 'events' }
                    ].map((item) => (
                      <li key={item.name}>
                        <button
                          onClick={() => handleNav(item.path)}
                          className="text-left text-xs text-slate-300 hover:text-brand-gold transition-colors block py-0.5"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-brand-pink uppercase tracking-[3px] border-b border-white/10 pb-2">
                    National Visits
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Lahore',
                      'Karachi',
                      'Islamabad',
                      'Mian Channu',
                      'Wah Cantt'
                    ].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => handleNav('tours')}
                          className="text-left text-xs text-slate-300 hover:text-brand-pink transition-colors block py-0.5"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-brand-blue uppercase tracking-[3px] border-b border-white/10 pb-2">
                    International Visits
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Europe',
                      'United Kingdom',
                      'Turkey',
                      'South Africa'
                    ].map((item) => (
                      <li key={item}>
                        <button
                          onClick={() => handleNav('tours')}
                          className="text-left text-xs text-slate-300 hover:text-brand-blue transition-colors block py-0.5"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          <button
            onClick={() => handleNav('literature')}
            className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-colors relative group ${currentPage === 'literature' ? 'text-brand-gold font-bold' : 'text-slate-300 hover:text-brand-gold'}`}
          >
            Literature
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-brand-gold transition-all ${currentPage === 'literature' ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`} />
          </button>

          <a 
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-pink/80 text-[10px] uppercase font-bold tracking-[2px] text-white shadow-lg shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-0.5 transition-all"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark border-t border-white/5 py-8 px-6 md:hidden flex flex-col items-center gap-4 text-center z-50 max-h-[80vh] overflow-y-auto"
        >
          <button 
            onClick={() => handleNav('home')}
            className={`py-2 text-xs uppercase tracking-[3px] ${currentPage === 'home' ? 'text-brand-pink font-bold' : 'text-slate-300'}`}
          >
            Home
          </button>

          <button 
            onClick={() => handleNav('mission')}
            className={`py-2 text-xs uppercase tracking-[3px] ${currentPage === 'mission' ? 'text-brand-pink font-bold' : 'text-slate-300'}`}
          >
            Mission
          </button>

          <div className="w-full flex flex-col items-center">
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`py-2 text-xs uppercase tracking-[3px] flex items-center gap-2 ${['about', 'education', 'welfare'].includes(currentPage) ? 'text-brand-pink font-bold' : 'text-slate-300'}`}
            >
              About Us {mobileAboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {mobileAboutOpen && (
              <div className="flex flex-col gap-3 py-3 w-full bg-white/5 rounded-2xl my-2">
                <button 
                  onClick={() => handleNav('about')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'about' ? 'text-brand-pink font-bold' : 'text-slate-400'}`}
                >
                  About Us Core
                </button>
                <button 
                  onClick={() => handleNav('education')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'education' ? 'text-brand-green font-bold' : 'text-slate-400'}`}
                >
                  Education
                </button>
                <button 
                  onClick={() => handleNav('welfare')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'welfare' ? 'text-brand-blue font-bold' : 'text-slate-400'}`}
                >
                  Welfare
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('khaki')}
            className={`py-2 text-xs uppercase tracking-[3px] ${currentPage === 'khaki' ? 'text-brand-gold font-bold' : 'text-slate-300'}`}
          >
            Syed Rasool Shah Khaki
          </button>

          <div className="w-full flex flex-col items-center">
            <button 
              onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
              className={`py-2 text-xs uppercase tracking-[3px] flex items-center gap-2 ${['events', 'tours'].includes(currentPage) ? 'text-brand-pink font-bold' : 'text-slate-300'}`}
            >
              Events & Tours {mobileEventsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {mobileEventsOpen && (
              <div className="flex flex-col gap-3 py-3 w-full bg-white/5 rounded-2xl my-2">
                <button 
                  onClick={() => handleNav('events')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'events' ? 'text-brand-gold font-bold' : 'text-slate-400'}`}
                >
                  Darbar Sharif Events
                </button>
                <button 
                  onClick={() => handleNav('tours')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'tours' ? 'text-brand-pink font-bold' : 'text-slate-400'}`}
                >
                  National Visits
                </button>
                <button 
                  onClick={() => handleNav('tours')}
                  className={`text-xs uppercase tracking-[2px] py-1 ${currentPage === 'tours' ? 'text-brand-blue font-bold' : 'text-slate-400'}`}
                >
                  International Visits
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNav('literature')}
            className={`py-2 text-xs uppercase tracking-[3px] ${currentPage === 'literature' ? 'text-brand-gold font-bold' : 'text-slate-300'}`}
          >
            Literature
          </button>

          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 py-3 px-8 rounded-full bg-brand-pink text-xs uppercase tracking-[3px] font-bold text-white shadow-lg"
          >
            Connect
          </a>
        </motion.div>
      )}

      {/* Bismillah Sub-bar */}
      <div className="w-full h-[30px] bg-gradient-to-r from-brand-pink/10 via-brand-blue/10 to-brand-green/10 flex items-center justify-center border-y border-white/5 overflow-hidden">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-arabic text-sm text-slate-400/60 tracking-[4px]"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>
      </div>
    </header>
  );
}
