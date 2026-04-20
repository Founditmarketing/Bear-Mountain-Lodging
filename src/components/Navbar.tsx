import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cabins/Reserve', path: '/cabins' },
    { name: 'Availability', path: '/availability' },
    { name: 'Events/Weddings', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Things To Do', path: '/things-to-do' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-4 shadow-sm border-b border-black/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-colors duration-300 ${isScrolled ? 'text-espresso' : 'text-white'}`}>
          <div className="flex-shrink-0 flex flex-col">
            <Link to="/" className="text-xl md:text-2xl font-serif font-bold italic tracking-tight uppercase">
              Bear Mountain Lodging
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[11px] uppercase tracking-widest font-semibold hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:5802124746" className={`flex items-center border-l pl-6 ml-6 transition-colors duration-300 ${isScrolled ? 'text-gold border-black/10' : 'text-gold border-white/20'}`}>
                <Phone size={14} className="mr-2" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">(580) 212-4746</span>
              </a>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-md transition-colors ${isScrolled ? 'hover:bg-black/5' : 'hover:bg-white/10'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-[11px] uppercase tracking-widest font-semibold text-espresso hover:text-gold transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:5802124746" className="py-4 flex items-center text-gold border-t border-black/5 mt-4">
                <Phone size={18} className="mr-3" />
                <span className="text-sm font-semibold">(580) 212-4746</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
