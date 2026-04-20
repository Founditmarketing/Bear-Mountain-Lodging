import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookingWidget from '../components/BookingWidget';
import CabinCard from '../components/CabinCard';
import { cabins } from '../data/cabins';
import { Leaf, Heart, Mountain, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

// Real hero images scraped directly from visitbrokenbowcabins.com
const HERO_IMAGES = [
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/DJI_0023-2.jpeg', alt: 'Aerial view of Rio Vista cabin' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/D8FD713A-2DA5-407F-96D3-D619A08F3AE2-scaled.jpeg', alt: 'Last Wild River Resort' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/Wine-Glasses-Fav-scaled.jpeg', alt: 'Romantic cabin getaway' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/Swing-Bed-Closeup-scaled.jpeg', alt: 'Cabin swing bed' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2024/10/DSC_7869-scaled.jpg', alt: 'The Perfect Blend cabin' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/RV-Fire-Pit-2-scaled-1.jpeg', alt: 'Fire pit evening' },
  { src: 'https://visitbrokenbowcabins.com/wp-content/uploads/2022/09/DSC_4355-scaled.jpg', alt: 'Cabin exterior' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setSlide((s) => (s + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > slide ? 1 : -1);
    setSlide(idx);
  };

  const prev = () => { setDirection(-1); setSlide((s) => (s - 1 + HERO_IMAGES.length) % HERO_IMAGES.length); };
  const next = () => { setDirection(1);  setSlide((s) => (s + 1) % HERO_IMAGES.length); };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest/50 via-forest/20 to-forest/50 pointer-events-none" />

        {/* Crossfade Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <motion.img
                src={HERO_IMAGES[slide].src}
                alt={HERO_IMAGES[slide].alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Text */}
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
              Luxury Cabin Rentals in Broken Bow, Oklahoma
            </p>
          </motion.div>
          <div className="pt-12">
            <BookingWidget />
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-gold/80 backdrop-blur-sm rounded-full text-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/20 hover:bg-gold/80 backdrop-blur-sm rounded-full text-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === slide ? 'bg-gold w-6 h-2' : 'bg-white/50 w-2 h-2 hover:bg-white'}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center"
        >
          <div className="w-[1px] h-10 bg-gold/50" />
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
                  src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/Wine-Glasses-Fav-scaled.jpeg" 
                  alt="Cabin luxury amenities" 
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
                  src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/RV-Fire-Pit-2-scaled-1.jpeg" 
                  alt="Fire pit at cabin" 
                  className="rounded-2xl h-48 w-full object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/D8FD713A-2DA5-407F-96D3-D619A08F3AE2-scaled.jpeg" 
                  alt="Last Wild River Resort" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg -mt-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/Swing-Bed-Closeup-scaled.jpeg" 
                  alt="Cabin swing bed" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg -mt-16"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/dsc_5648.jpeg" 
                  alt="Cabin exterior" 
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
