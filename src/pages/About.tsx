import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-espresso">
                A Continuing<br />
                <span className="curly-text text-gold">Tradition of Warmth</span>
              </h1>
            </div>
            <p className="text-espresso/70 text-lg leading-relaxed">
              Hi there! We're so glad you found us! At Bear Mountain Lodging, we offer picturesque
              romantic couples and family cabin accommodations among the beautiful Ouachita Mountains
              in Broken Bow. We started our company in 2011 to create a special place for couples —
              a destination our guests would enjoy and want to visit again and again.
            </p>
            <p className="text-espresso/70 text-lg leading-relaxed">
              We have designed and been involved in the building of all of our couples cabins from
              the ground up. My husband and I have been married for 40 wonderful years and before
              building cabins, we ran another business for 28 years. We raised two daughters who
              have now started families of their own. We currently have two grandsons and five grand-dogs.
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
                src="https://visitbrokenbowcabins.com/wp-content/uploads/2022/04/DJI_0024-2048x1364-2.jpeg"
                alt="Bear Mountain Lodging from above"
                className="w-full h-full object-cover -skew-y-2 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold rounded-full -z-10 blur-3xl opacity-20" />
          </motion.div>
        </div>

        {/* Expanded Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft space-y-4">
            <span className="text-gold uppercase tracking-widest text-[10px] font-bold">2011</span>
            <h3 className="text-2xl font-serif font-bold text-espresso">Where It Began</h3>
            <p className="text-espresso/70 leading-relaxed">
              We started with a single cabin and a commitment to romance and unparalleled hospitality.
              Our couples cabins were designed and built from the ground up — every detail chosen with love.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-soft space-y-4">
            <span className="text-gold uppercase tracking-widest text-[10px] font-bold">2020</span>
            <h3 className="text-2xl font-serif font-bold text-espresso">Family & Growth</h3>
            <p className="text-espresso/70 leading-relaxed">
              After requests from returning guests, we built Rio Vista — our first family cabin. We then
              began managing select owner properties that matched our vision, and our eldest daughter
              joined the team. A&M Cabin Care also joined to ensure every cabin stays in pristine condition.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-soft space-y-4">
            <span className="text-gold uppercase tracking-widest text-[10px] font-bold">Present</span>
            <h3 className="text-2xl font-serif font-bold text-espresso">Last Wild River Resort</h3>
            <p className="text-espresso/70 leading-relaxed">
              Our newest and biggest project — Last Wild River Resort, located west of Broken Bow on the Glover River.
              164 acres of pure nature. On River Time Lodge sleeps up to 18, with on-site fishing, kayaking,
              canoeing, volleyball, horseshoes, and more.
            </p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <section className="bg-espresso rounded-[60px] p-12 md:p-24 text-center text-cream relative overflow-hidden mb-24">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-white">
              <path d="M0 0 L100 0 L100 100 Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Our Philosophy</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl md:text-2xl italic font-serif leading-relaxed text-cream/80">
              "We take great pride in what we do because we believe romance is important.
              Whether you're newlyweds or celebrating a silver anniversary, we hope you'll find
              the refreshment and relaxation you need. We've put a lot of time, hard work, and love into our cabins."
            </p>
            <span className="block italic text-gold">— The Bear Mountain Family</span>
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-serif font-bold text-espresso">Ready to Experience It for Yourself?</h2>
          <p className="text-espresso/60 max-w-xl mx-auto">
            Browse our cabins and find the perfect retreat for your next getaway.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cabins" className="bg-gold hover:bg-gold-hover text-forest font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300">
              View Our Cabins
            </Link>
            <Link to="/contact" className="bg-espresso hover:bg-forest text-cream font-bold px-10 py-4 rounded-full uppercase text-xs tracking-widest transition-all duration-300">
              Get In Touch
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
