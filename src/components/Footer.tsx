import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-6">The Mountain Retreat</h4>
            <p className="font-serif italic text-xl text-white">12 years of creating memories.</p>
            <p className="text-cream/40 text-xs mt-4 italic font-medium">
              Experience the breathtaking landscape of southeast Oklahoma in our luxury cabins. 
            </p>
            <p className="text-cream/20 text-[10px] mt-6">© {currentYear} Bear Mountain Lodging</p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-2 text-cream/70">
              <a href="tel:5802124746" className="block hover:text-gold transition-colors">(580) 212-4746</a>
              <a href="mailto:bearmountainlodging@gmail.com" className="block hover:text-gold transition-colors">bearmountainlodging@gmail.com</a>
              <p>9AM – 7PM Daily</p>
            </div>
            <div className="pt-4 flex space-x-4">
              <Link to="/privacy" className="text-cream/30 hover:text-gold text-[10px] uppercase tracking-widest transition-colors font-bold">Privacy</Link>
              <Link to="/terms" className="text-cream/30 hover:text-gold text-[10px] uppercase tracking-widest transition-colors font-bold">Terms</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white mb-6">Location</h4>
            <div className="space-y-2 text-cream/70">
              <p>143 Sycamore View Lane</p>
              <p>Broken Bow, OK 74728</p>
            </div>
            <div className="pt-6">
              <form action="https://api.web3forms.com/submit" method="POST" className="flex">
                {/* TODO: Replace with real Web3Forms access key from https://web3forms.com */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="STAY UPDATED" 
                  required
                  className="bg-transparent border-b border-cream/20 py-2 text-[10px] uppercase tracking-[3px] font-bold focus:outline-none focus:border-gold transition-colors w-full placeholder:text-cream/30"
                />
                <button type="submit" className="ml-2 text-gold hover:text-white transition-colors">
                  &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
