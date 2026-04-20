import { motion } from 'motion/react';
import { Camera, Map, Utensils, Waves } from 'lucide-react';

export default function ThingsToDo() {
  const activities = [
    {
      title: 'Beavers Bend State Park',
      category: 'Nature',
      desc: 'Just minutes from our cabins, Beavers Bend State Park offers over 30 miles of hiking trails, trout fishing on the crystal-clear Mountain Fork River, horseback riding, mini golf, and paddleboat rentals. It\'s the crown jewel of southeast Oklahoma and your backyard playground.',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600',
      link: 'https://www.travelok.com/state-parks/beavers-bend-resort-park',
    },
    {
      title: 'Broken Bow Lake',
      category: 'Adventure',
      desc: 'One of Oklahoma\'s most pristine lakes, Broken Bow Lake spans over 14,000 acres of crystal-clear water fed by mountain streams. Perfect for boating, jet skiing, kayaking, swimming, and fishing for bass and catfish. Multiple marinas offer boat rentals for guests.',
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=600',
      link: 'https://www.travelok.com/listings/view.profile/id.6498',
    },
    {
      title: 'Hochatown',
      category: 'Dining & Culture',
      desc: 'The booming heart of the Broken Bow area, Hochatown is packed with award-winning restaurants, local craft breweries, Oklahoma wineries, and one-of-a-kind shops. Don\'t miss Grateful Head Pizza Oven & Bar, Beavers Bend Brewery, and Hochatown Distillery.',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=600',
      link: 'https://visitbrokenbowcabins.com/',
    },
    {
      title: 'Glover River',
      category: 'The Last Wild River',
      desc: 'The Glover River is Oklahoma\'s last free-flowing, undammed river — a true wilderness experience. Our flagship property, the Last Wild River Resort, sits right on its banks. Float the river on a kayak or tube, cast a line for bass, or simply listen to the water from your cabin deck.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600',
      link: 'https://www.travelok.com/listings/view.profile/id.6536',
    },
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
            Adventure Awaits
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-espresso"
          >
            Things to Do
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-espresso/60 max-w-2xl mx-auto text-lg italic"
          >
            From the serene waters of Broken Bow Lake to the rugged trails of 
            Beavers Bend, discover why this is Oklahoma's favorite backyard.
          </motion.p>
        </div>

        <div className="space-y-32">
          {activities.map((act, idx) => (
            <motion.div 
              key={act.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              <div className="flex-1 w-full relative">
                <div className={`aspect-video rounded-[40px] overflow-hidden shadow-2xl relative z-10 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                  <img 
                    src={act.image} 
                    alt={act.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className={`absolute -top-6 -left-6 w-full h-full bg-gold/10 rounded-[40px] -z-0 ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`} />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-3 text-gold">
                  {idx === 0 && <Map size={20} />}
                  {idx === 1 && <Waves size={20} />}
                  {idx === 2 && <Utensils size={20} />}
                  {idx === 3 && <Camera size={20} />}
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">{act.category}</span>
                </div>
                <h3 className="text-4xl font-serif font-bold text-espresso">{act.title}</h3>
                <p className="text-espresso/70 text-lg leading-relaxed">
                  {act.desc}
                </p>
                <a
                  href={act.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-espresso font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors duration-300"
                >
                  Learn More &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
