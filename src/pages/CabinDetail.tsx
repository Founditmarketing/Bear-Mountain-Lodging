import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cabins } from '../data/cabins';
import { Bed, Bath, Users, PawPrint, Phone, Mail, ChevronLeft, CheckCircle2 } from 'lucide-react';

const amenities = [
  'Hot Tub',
  'Fully Equipped Kitchen',
  'Smart TV',
  'Free WiFi',
  'Fireplace',
  'Covered Deck',
  'BBQ Grill',
  'Washer / Dryer',
  'Air Conditioning',
  'Heating',
  'Towels & Linens',
  'Coffee Maker',
];

export default function CabinDetail() {
  const { id } = useParams<{ id: string }>();
  const cabin = cabins.find((c) => c.id === id);

  if (!cabin) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-cream flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold text-espresso mb-4">Cabin Not Found</h1>
        <p className="text-espresso/60 mb-8">We couldn't find the cabin you're looking for.</p>
        <Link to="/cabins" className="bg-gold text-forest font-bold px-8 py-3 rounded-full uppercase tracking-widest text-xs">
          View All Cabins
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen bg-cream">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={cabin.image}
          alt={cabin.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/cabins" className="inline-flex items-center text-white/70 hover:text-gold text-xs uppercase tracking-widest font-bold mb-4 transition-colors">
              <ChevronLeft size={16} className="mr-1" /> Back to All Cabins
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">{cabin.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-soft">
                <Bed size={20} className="text-gold" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest">Bedrooms</p>
                  <p className="font-serif font-bold text-espresso text-xl">{cabin.beds}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-soft">
                <Bath size={20} className="text-gold" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest">Bathrooms</p>
                  <p className="font-serif font-bold text-espresso text-xl">{cabin.baths}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-soft">
                <Users size={20} className="text-gold" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest">Sleeps</p>
                  <p className="font-serif font-bold text-espresso text-xl">{cabin.sleeps}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-soft">
                <PawPrint size={20} className={cabin.petFriendly ? 'text-gold' : 'text-espresso/30'} />
                <div>
                  <p className="text-[10px] uppercase font-bold text-espresso/40 tracking-widest">Pets</p>
                  <p className="font-serif font-bold text-espresso text-xl">{cabin.petFriendly ? 'Welcome' : 'No Pets'}</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-espresso">About This Cabin</h2>
              <p className="text-espresso/70 text-lg leading-relaxed">{cabin.description}</p>
              <p className="text-espresso/70 text-lg leading-relaxed">
                Nestled in the heart of Hochatown, Oklahoma, this cabin puts you just minutes from 
                Beavers Bend State Park, Broken Bow Lake, and the Glover River. Whether you're 
                looking to adventure, relax, or celebrate, this is your perfect basecamp.
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-espresso">Cabin Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                    <span className="text-espresso/80 text-sm font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-[32px] p-8 shadow-2xl sticky top-32 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-espresso">Reserve This Cabin</h3>
                <p className="text-espresso/50 text-sm">Contact us to check availability and book your stay.</p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:5802124746"
                  className="flex items-center justify-center w-full bg-gold hover:bg-gold-hover text-forest font-bold py-4 rounded-2xl uppercase text-xs tracking-widest transition-all duration-300 shadow-lg space-x-3"
                >
                  <Phone size={18} />
                  <span>Call (580) 212-4746</span>
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full bg-espresso hover:bg-forest text-cream font-bold py-4 rounded-2xl uppercase text-xs tracking-widest transition-all duration-300 space-x-3"
                >
                  <Mail size={18} />
                  <span>Send an Inquiry</span>
                </Link>
              </div>

              <div className="border-t border-gold/10 pt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-espresso/40">Hours of Operation</p>
                <p className="text-espresso/70 text-sm">9AM – 7PM Daily</p>
                <p className="text-xs text-espresso/40 italic">We typically respond within 24 hours.</p>
              </div>
            </div>

            {/* Other Cabins */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-espresso/40">Explore Other Cabins</h4>
              {cabins.filter(c => c.id !== cabin.id).slice(0, 3).map(c => (
                <Link
                  key={c.id}
                  to={`/cabins/${c.id}`}
                  className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-soft hover:shadow-md transition-all group"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-serif font-bold text-espresso text-sm group-hover:text-gold transition-colors">{c.name}</p>
                    <p className="text-xs text-espresso/50">{c.beds} Bed · {c.baths} Bath · Sleeps {c.sleeps}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
