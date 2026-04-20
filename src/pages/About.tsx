import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Our Legacy</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-espresso">
                12 Years of <br />
                <span className="curly-text text-gold">Wild Elegance</span>
              </h1>
            </div>
            <p className="text-espresso/70 text-lg leading-relaxed">
              Bear Mountain Lodging is an owner-operated cabin rental company offering luxury 
              honeymoon and family cabins near Broken Bow Lake. Born from a passion for sharing 
              the untamed beauty of southeast Oklahoma, we've grown from a single cabin into 
              one of the most trusted names in the region.
            </p>
            <p className="text-espresso/70 text-lg leading-relaxed">
              From intimate romantic escapes to massive group retreats at our legendary 
              Last Wild River Resort on the Glover River, every property in our collection 
              is personally managed and immaculately maintained — because this is our home, 
              and we want it to feel like yours.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-espresso">12+</p>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mt-1">Years</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-espresso">264+</p>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mt-1">Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif font-bold text-espresso">98%</p>
                <p className="text-[10px] uppercase font-bold text-gold tracking-widest mt-1">Recommend</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl skew-y-2">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Founder's Vision" 
                className="w-full h-full object-cover -skew-y-2 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold rounded-full -z-10 blur-3xl opacity-20" />
          </motion.div>
        </div>

        {/* Philosophy */}
        <section className="bg-espresso rounded-[60px] p-12 md:p-24 text-center text-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
              <path d="M0 0 L100 0 L100 100 Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Our Philosophy</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-cream/80">
              "We believe that luxury isn't just about high-end linens and gourmet kitchens—it's 
              the silence of the forest at dawn, the sound of the Glover River, and the 
              uninterrupted time spent with the people you love."
            </p>
            <span className="block italic text-gold">— The Bear Mountain Family</span>
          </div>
        </section>
      </div>
    </div>
  );
}
