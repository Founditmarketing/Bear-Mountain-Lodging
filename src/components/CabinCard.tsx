import React from 'react';
import { Cabin } from '../types';
import { Users, Bed, Bath, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CabinCardProps {
  cabin: Cabin;
}

const CabinCard: React.FC<CabinCardProps> = ({ cabin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden card-shadow group"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={cabin.image}
          alt={cabin.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-espresso border border-black/5">
            {cabin.petFriendly ? 'Pet Friendly' : 'No Pets'}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <h3 className="text-xl font-serif italic font-bold text-espresso group-hover:text-gold transition-colors duration-300">
            {cabin.name}
          </h3>
          <p className="text-xs text-[#666] leading-relaxed line-clamp-1">
            {cabin.beds} Bed • {cabin.baths} Bath • Sleeps {cabin.sleeps}
          </p>
        </div>
        
        <p className="text-xs text-[#888] line-clamp-2 italic leading-relaxed">
          {cabin.description}
        </p>

        <div className="pt-2">
          <Link
            to={`/cabins/${cabin.id}`}
            className="inline-flex items-center text-[10px] uppercase tracking-[2px] font-bold text-gold hover:text-espresso transition-all duration-300 group"
          >
            Explore Cabin <ChevronRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CabinCard;

