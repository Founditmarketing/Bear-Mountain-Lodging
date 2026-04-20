import CabinCard from '../components/CabinCard';
import { cabins } from '../data/cabins';
import { motion } from 'motion/react';

export default function Cabins() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            Find Your Retreat
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-espresso"
          >
            Our Luxury Cabins
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-espresso/60 max-w-2xl mx-auto text-lg italic"
          >
            Hand-selected, meticulously maintained, and perfectly situated. 
            Choose the sanctuary that speaks to your heart.
          </motion.p>
        </div>

        {/* Filter Placeholder */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {['All Cabins', '1 Bedroom', '2-3 Bedrooms', 'Large Groups', 'Pet Friendly'].map((filter) => (
            <button 
              key={filter}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === 'All Cabins' ? 'bg-forest text-gold shadow-lg' : 'bg-white text-espresso hover:bg-gold/10 border border-gold/10'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-espresso text-cream rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Need assistance choosing the perfect cabin?
            </h2>
            <p className="text-cream/70 text-lg">
              Our reservation specialists are ready to help you find the ideal match 
              for your special occasion or family retreat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="tel:5802124746" className="bg-gold hover:bg-gold-hover text-forest font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300 w-full sm:w-auto">
                Call (580) 212-4746
              </a>
              <a href="mailto:bearmountainlodging@gmail.com" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full border border-white/20 uppercase text-xs tracking-widest transition-all duration-300 w-full sm:w-auto text-center">
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
