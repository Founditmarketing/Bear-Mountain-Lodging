import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home',       path: '/' },
    { name: 'Cabins',     path: '/cabins' },
    { name: 'Availability', path: '/availability' },
    { name: 'Events',     path: '/events' },
    { name: 'About',      path: '/about' },
    { name: 'Things To Do', path: '/things-to-do' },
    { name: 'Contact',    path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // Transparent only on home page before scrolling; solid everywhere else
  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-espresso'}`}>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg md:text-xl font-serif font-bold italic tracking-tight uppercase leading-tight">
              Bear Mountain<br className="hidden sm:block" />
              <span className="text-gold text-sm font-sans not-italic normal-case tracking-[0.15em] hidden sm:block">Lodging</span>
            </Link>
          </div>

          {/* Desktop nav — visible at xl+ */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive(link.path)
                    ? isTransparent ? 'bg-white/15 text-gold' : 'bg-gold/15 text-gold'
                    : isTransparent ? 'hover:bg-white/10 hover:text-gold text-white/90' : 'hover:bg-black/5 hover:text-gold text-espresso/80'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Phone CTA */}
            <a
              href="tel:5802124746"
              className={`ml-3 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                isTransparent
                  ? 'border-white/40 text-white hover:bg-white/10 hover:border-gold hover:text-gold'
                  : 'border-gold text-gold hover:bg-gold hover:text-forest'
              }`}
            >
              <Phone size={12} />
              (580) 212-4746
            </a>
          </div>

          {/* Hamburger — visible below xl */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${isTransparent ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-md border-b border-black/5 overflow-hidden shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center py-3 px-4 rounded-xl text-[11px] uppercase tracking-widest font-bold transition-all duration-200 ${
                    isActive(link.path) ? 'bg-gold/10 text-gold' : 'text-espresso hover:text-gold hover:bg-gold/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:5802124746"
                className="flex items-center gap-3 py-3 px-4 mt-2 rounded-xl bg-gold/10 text-gold border border-gold/20 transition-all hover:bg-gold/20"
              >
                <Phone size={16} />
                <span className="text-sm font-bold">(580) 212-4746</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
