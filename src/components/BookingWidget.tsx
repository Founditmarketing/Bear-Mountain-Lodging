import { useState } from 'react';
import { Calendar, Users, Search, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function BookingWidget() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-5xl mx-auto px-4 md:px-0"
    >
      <div className="glass-editorial rounded-xl p-4 md:p-6 shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-end gap-x-6 gap-y-4">
          
          {/* Check In */}
          <div className="flex-1 w-full flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-[#888] tracking-widest ml-1">Check-In</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/50" size={16} />
              <input 
                type="text" 
                placeholder="Oct 24, 2026" 
                className="w-full bg-white border border-[#ddd] rounded-md pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex-1 w-full flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-[#888] tracking-widest ml-1">Check-Out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/50" size={16} />
              <input 
                type="text" 
                placeholder="Oct 28, 2026" 
                className="w-full bg-white border border-[#ddd] rounded-md pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {/* Adults */}
          <div className="flex-1 w-full flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-[#888] tracking-widest ml-1">Adults</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/50" size={16} />
              <select className="w-full bg-white border border-[#ddd] rounded-md pl-10 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:border-gold transition-colors appearance-none">
                <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4+ Adults</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888]" size={14} />
            </div>
          </div>

          {/* Children */}
          <div className="flex-1 w-full flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold text-[#888] tracking-widest ml-1">Children</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/50" size={16} />
              <select className="w-full bg-white border border-[#ddd] rounded-md pl-10 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:border-gold transition-colors appearance-none">
                <option>0 Children</option>
                <option>1 Child</option>
                <option>2 Children</option>
                <option>3+ Children</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888]" size={14} />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto">
            <button className="w-full lg:px-8 bg-gold hover:bg-gold-hover text-white font-bold rounded-md py-3 flex items-center justify-center transition-all duration-300 shadow-md group border-none">
              <Search size={16} className="mr-3" />
              <span className="uppercase tracking-widest text-[10px]">Search Availability</span>
            </button>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
