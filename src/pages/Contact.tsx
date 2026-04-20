import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold uppercase tracking-[0.3em] text-xs font-bold"
              >
                Connect With Us
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif font-bold text-espresso"
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-espresso/60 text-lg leading-relaxed max-w-lg"
              >
                Whether you have questions about a specific cabin or need help planning your trip, 
                our team is here to assist you in creating the perfect Oklahoma getaway.
              </motion.p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-4 bg-forest text-gold rounded-2xl mr-6 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-espresso">Call Us</h4>
                  <p className="text-espresso/60 mt-1">(580) 212-4746</p>
                  <p className="text-gold text-xs uppercase font-bold tracking-widest mt-2">Available 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-4 bg-forest text-gold rounded-2xl mr-6 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-espresso">Email Us</h4>
                  <p className="text-espresso/60 mt-1">bearmountainlodging@gmail.com</p>
                  <p className="text-gold text-xs uppercase font-bold tracking-widest mt-2">Responds within 24h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-4 bg-forest text-gold rounded-2xl mr-6 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-espresso">Visit Us</h4>
                  <p className="text-espresso/60 mt-1 whitespace-pre-line">
                    143 Sycamore View Lane,{"\n"}
                    Broken Bow, OK 74728
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <h4 className="text-espresso font-bold uppercase tracking-widest text-xs">Follow Our Story</h4>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/bearmountainlodging" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-espresso hover:bg-gold hover:text-forest transition-all duration-300 rounded-full shadow-md">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/bearmountainlodging" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-espresso hover:bg-gold hover:text-forest transition-all duration-300 rounded-full shadow-md">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8 relative z-10">
              {/* TODO: Replace with real Web3Forms access key from https://web3forms.com */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-espresso/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-cream border border-gold/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-espresso/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-cream border border-gold/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-espresso/40 ml-1">Subject</label>
                <select 
                  name="subject"
                  className="w-full bg-cream border border-gold/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Reservation Question</option>
                  <option>Wedding & Events</option>
                  <option>Pet Policy Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-espresso/40 ml-1">Your Message</label>
                <textarea 
                  name="message" 
                  rows={5} 
                  required 
                  placeholder="How can we help you?"
                  className="w-full bg-cream border border-gold/10 rounded-xl px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-forest font-bold py-5 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 uppercase tracking-widest text-xs"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
