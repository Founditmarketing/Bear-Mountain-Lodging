import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Heart, Music, Wine, Camera } from 'lucide-react';

export default function Events() {
  const experiences = [
    { title: 'Weddings', icon: Heart, desc: 'Breathtaking riverside ceremonies and elegant forest receptions.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600' },
    { title: 'Corporate Retreats', icon: Music, desc: 'The perfect environment for team building and focused strategy.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
    { title: 'Celebrations', icon: Wine, desc: 'Birthdays, anniversaries, and reunions that will be talked about for years.', image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600' },
    { title: 'Photography', icon: Camera, desc: 'Endless natural backdrops for the perfect professional session.', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.3em] text-xs font-bold"
          >
            Memories in the Making
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-espresso"
          >
            Weddings & Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-espresso/60 max-w-2xl mx-auto text-lg italic"
          >
            From riverside commitment ceremonies to massive family reunions at 
            the Last Wild River Resort, we provide the perfect canvas for your events.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 p-12 text-white space-y-4">
                <div className="p-3 bg-gold/20 backdrop-blur-md rounded-2xl w-fit">
                  <exp.icon className="text-gold" size={24} />
                </div>
                <h3 className="text-4xl font-serif font-bold">{exp.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{exp.desc}</p>
                <Link to="/contact" className="flex items-center text-gold font-bold uppercase tracking-widest text-xs pt-4 group-hover:gap-2 transition-all">
                  Inquire Now <CalendarIcon className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
