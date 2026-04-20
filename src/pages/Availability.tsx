import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Filter, Search } from 'lucide-react';

export default function Availability() {
  const months = ['April 2026', 'May 2026', 'June 2026', 'July 2026'];
  
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            Plan Your Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-espresso"
          >
            Check Availability
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-espresso/60 max-w-2xl mx-auto text-lg italic"
          >
            Dates shown are for reference. For confirmed availability and to book your stay,
            please call us at{' '}
            <a href="tel:5802124746" className="text-gold font-bold not-italic hover:underline">(580) 212-4746</a>{' '}
            or{' '}
            <a href="mailto:bearmountainlodging@gmail.com" className="text-gold font-bold not-italic hover:underline">email us</a>.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-8 rounded-[32px] shadow-xl mb-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest ml-1">Cabin Type</label>
            <select className="w-full bg-cream rounded-xl px-4 py-3 border border-gold/10 focus:outline-none">
              <option>All Cabins</option>
              <option>1 Bedroom</option>
              <option>2+ Bedrooms</option>
              <option>Pet Friendly Only</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest ml-1">Arrival Date</label>
            <div className="relative">
              <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input type="text" placeholder="Select Date" className="w-full bg-cream rounded-xl pl-12 pr-4 py-3 border border-gold/10 focus:outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest ml-1">Departure Date</label>
            <div className="relative">
              <CalendarIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input type="text" placeholder="Select Date" className="w-full bg-cream rounded-xl pl-12 pr-4 py-3 border border-gold/10 focus:outline-none" />
            </div>
          </div>
          <button className="bg-gold hover:bg-gold-hover text-forest font-bold py-3 rounded-xl flex items-center justify-center uppercase tracking-widest text-xs transition-all duration-300 shadow-md">
            <Search size={16} className="mr-2" />
            Refresh
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-8 mb-12 text-xs font-bold uppercase tracking-widest text-espresso/60">
          <div className="flex items-center"><div className="w-4 h-4 rounded-sm bg-white border border-gold/20 mr-2" /> Available</div>
          <div className="flex items-center"><div className="w-4 h-4 rounded-sm bg-forest mr-2" /> Booked</div>
          <div className="flex items-center"><div className="w-4 h-4 rounded-sm bg-gold mr-2" /> Selected</div>
        </div>

        {/* Calendar Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {months.map((month) => (
            <div key={month} className="bg-white p-8 rounded-[32px] shadow-soft border border-gold/5">
              <h3 className="text-2xl font-serif font-bold text-espresso mb-8 flex justify-between items-center">
                {month}
                <Filter size={18} className="text-gold cursor-pointer" />
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                  <div key={d} className="text-center text-[10px] font-bold text-gold py-2">{d}</div>
                ))}
                {Array.from({ length: 30 }).map((_, i) => {
                  return (
                    <div 
                      key={i} 
                      className="aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all cursor-pointer shadow-sm bg-cream text-espresso hover:bg-gold hover:text-forest"
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
