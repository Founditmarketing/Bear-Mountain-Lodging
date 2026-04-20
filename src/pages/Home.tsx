import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BookingWidget from '../components/BookingWidget';
import CabinCard from '../components/CabinCard';
import { cabins } from '../data/cabins';
import { Leaf, Heart, Mountain, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest/40 to-forest/40" />
        
        {/* Hero Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Cabin" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif italic font-bold tracking-tight mb-2 drop-shadow-xl">
              Escape to the Wild
            </h1>
            <p className="text-white/80 font-medium uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Luxury Cabin Rentals in Broken Bow
            </p>
          </motion.div>

          {/* Booking Widget */}
          <div className="pt-12">
            <BookingWidget />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2">Explore More</span>
          <div className="w-[1px] h-12 bg-gold/50" />
        </motion.div>
      </section>

      {/* Welcome content */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold font-sans">Rustic Elegance</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-espresso leading-tight">
                  Experience the Untamed Beauty of Broken Bow
                </h2>
                <span className="serif-italic text-gold text-2xl block italic">Luxury cabin rentals for every occasion</span>
              </div>
              <p className="text-espresso/70 leading-relaxed text-lg">
                Are you looking for the perfect place to get away and relax with friends, family, or someone special? 
                Bear Mountain Lodging offers the ultimate luxury experience just minutes from 
                Beavers Bend State Park and Broken Bow Lake. Our cabins are designed to provide
                the perfect blend of rustic charm and modern sophistication.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-forest text-gold rounded-full"><Heart size={20} /></div>
                  <span className="font-semibold text-espresso">Perfect Getaways</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-forest text-gold rounded-full"><Mountain size={20} /></div>
                  <span className="font-semibold text-espresso">Stunning Views</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-forest text-gold rounded-full"><Leaf size={20} /></div>
                  <span className="font-semibold text-espresso">Eco-Conscious</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-forest text-gold rounded-full"><Sparkles size={20} /></div>
                  <span className="font-semibold text-espresso">Luxury Amenities</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000" 
                  alt="Cozy Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-forest rounded-full -z-10 blur-3xl opacity-10" />
              <div className="absolute top-1/2 -right-12 translate-y-[-50%] p-8 bg-white rounded-2xl shadow-xl hidden md:block">
                <p className="font-serif italic text-xl text-espresso">"A sanctuary for the soul."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabin Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-y-4">
            <div className="space-y-1">
              <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold">Luxury Accommodations</span>
              <h2 className="text-4xl font-serif italic font-bold text-espresso">Our Featured Cabins</h2>
            </div>
            <Link to="/cabins" className="text-xs text-gold font-bold uppercase tracking-widest hover:text-espresso transition-colors">
              View All Cabins &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabins.slice(0, 4).map((cabin) => (
              <CabinCard key={cabin.id} cabin={cabin} />
            ))}
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-24 bg-forest text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1588694423247-ca06e3089d02?auto=format&fit=crop&q=80&w=600" 
                  alt="Family activities" 
                  className="rounded-2xl h-48 w-full object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1601927331269-f20cf9552e6d?auto=format&fit=crop&q=80&w=600" 
                  alt="Lake view" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg -mt-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1533424263720-6d274712534f?auto=format&fit=crop&q=80&w=600" 
                  alt="Cabin evening" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg -mt-16"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600" 
                  alt="Forest trail" 
                  className="rounded-2xl h-48 w-full object-cover shadow-lg -mt-24"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex-1 space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Unforgettable Memories</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  Luxurious Family Cabins & Adventures
                </h2>
              </div>
              <p className="text-cream/80 text-lg leading-relaxed">
                Whether you're exploring the Last Wild River Resort on the Glover River or 
                boating on the pristine Broken Bow Lake, our cabins serve as the perfect 
                basecamp for your family adventures. Hochatown offers a local culture of 
                fine dining, wineries, and family fun that you won't find anywhere else.
              </p>
              <Link to="/availability" className="bg-gold hover:bg-gold-hover text-forest font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300">
                Plan Your Stay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">Guest Reviews</span>
            <h2 className="text-4xl font-serif italic font-bold text-espresso">What Our Guests Say</h2>
            <div className="flex items-center justify-center gap-1 pt-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              ))}
              <span className="ml-2 text-sm font-bold text-espresso/60">264+ Google Reviews · 98% Recommend</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Lynda Bauer',
                cabin: 'Fleur De Lake',
                review: 'Stayed at Fleur De Lake with family and loved the experience. The house was just what we wanted with wonderful amenities and added charm for the holidays! Would like to return with friends and explore more of the scenery during the spring or summer.',
              },
              {
                name: 'Lenzy Cornatzer',
                cabin: 'Last Wild River Resort',
                review: 'My family and I (16 of us) stayed at the Last Wild River resort. Let me just say that this is an incredible property. We stayed over Thanksgiving and enjoyed everything this property had to offer. Fishing, hiking, kayaking, and the fire pit. You can book this place with confidence.',
              },
              {
                name: 'Meghan Davis',
                cabin: 'The Perfect Blend',
                review: 'The Perfect Blend cabin was amazing! It had every amenity you would need. The jacuzzi was an added benefit and we loved the deck lounge. We would definitely stay there again.',
              },
              {
                name: 'Robert',
                cabin: 'Honeymoon Stay',
                review: 'My wife and I spent our honeymoon/one year anniversary here. We couldn\'t be more pleased with how amazing it was. We will be coming back without a doubt.',
              },
              {
                name: 'James',
                cabin: 'Honey Bear Cabin',
                review: 'Great cabin. Nearby to a market, but secluded enough to get away. Great get-away for my wife and myself.',
              },
              {
                name: 'Veronica',
                cabin: 'Guest Review',
                review: 'We had the most amazing time at Bear Mountain Lodging. The cabin was immaculately clean, beautifully decorated, and had everything we needed. The owners are so responsive and helpful. Can\'t wait to come back!',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-8 shadow-soft space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <p className="text-espresso/70 leading-relaxed italic text-sm">"{t.review}"</p>
                <div className="pt-2 border-t border-gold/10">
                  <p className="font-bold text-espresso">{t.name}</p>
                  <p className="text-[10px] text-gold uppercase tracking-widest font-bold">{t.cabin}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
