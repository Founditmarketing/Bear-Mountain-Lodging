import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Legal</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-espresso">Terms of Service</h1>
            <p className="text-espresso/50 text-sm">Last updated: April 2025</p>
          </div>

          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-soft space-y-10 text-espresso/80 leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">1. Acceptance of Terms</h2>
              <p>By accessing or using the Bear Mountain Lodging website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">2. Reservations & Bookings</h2>
              <p>All reservation inquiries submitted through this website are subject to availability confirmation. A reservation is not confirmed until you receive written confirmation from Bear Mountain Lodging. We reserve the right to decline any booking at our sole discretion.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">3. Cancellation Policy</h2>
              <p>Cancellation policies vary by cabin and season. Specific cancellation terms will be communicated at the time of booking confirmation. We strongly recommend reviewing cancellation terms before finalizing any reservation.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">4. Guest Responsibilities</h2>
              <p>Guests are responsible for treating all cabin properties with care and respect. Any damage to the property beyond normal wear and tear may result in additional charges. Guests must comply with all cabin-specific rules, including occupancy limits, pet policies, and quiet hours.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">5. Pet Policy</h2>
              <p>Pets are only permitted in cabins explicitly designated as "Pet Friendly." A pet fee may apply. Guests are responsible for any damage caused by their pets. Unauthorized pets on the premises may result in immediate termination of the stay without refund.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">6. Limitation of Liability</h2>
              <p>Bear Mountain Lodging is not liable for any personal injury, loss, or damage to personal property that occurs during your stay. Guests assume all risks associated with their stay and activities in and around the property and surrounding natural areas.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">7. Intellectual Property</h2>
              <p>All content on this website, including images, text, logos, and design elements, is the property of Bear Mountain Lodging and may not be reproduced or used without prior written permission.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">9. Contact Us</h2>
              <p>For questions about these Terms of Service, please contact:</p>
              <div className="bg-cream rounded-2xl p-6 space-y-2">
                <p className="font-bold text-espresso">Bear Mountain Lodging</p>
                <p>143 Sycamore View Lane, Broken Bow, OK 74728</p>
                <p><a href="tel:5802124746" className="text-gold hover:text-espresso transition-colors">(580) 212-4746</a></p>
                <p><a href="mailto:bearmountainlodging@gmail.com" className="text-gold hover:text-espresso transition-colors">bearmountainlodging@gmail.com</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
