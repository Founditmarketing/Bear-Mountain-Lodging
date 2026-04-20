import { motion } from 'motion/react';

export default function Privacy() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-espresso">Privacy Policy</h1>
            <p className="text-espresso/50 text-sm">Last updated: April 2025</p>
          </div>

          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-soft space-y-10 text-espresso/80 leading-relaxed">

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">1. Information We Collect</h2>
              <p>When you contact us, make a reservation inquiry, or subscribe to our newsletter through Bear Mountain Lodging ("we," "us," or "our"), we may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and email address (via contact forms and newsletter signups)</li>
                <li>Phone number (when provided voluntarily)</li>
                <li>Travel dates and cabin preferences submitted through inquiry forms</li>
                <li>General usage data (pages visited, browser type) via standard web analytics</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your reservation inquiries and questions</li>
                <li>Send you updates, availability notices, and promotions (only if you opt in)</li>
                <li>Improve our website and guest experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell, trade, or rent your personal information to third parties.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">3. Cookies</h2>
              <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">4. Third-Party Services</h2>
              <p>We may use trusted third-party services (such as email delivery and form processing providers) that handle data on our behalf. These services are bound by their own privacy policies and are not permitted to use your information for their own purposes.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">5. Data Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">6. Your Rights</h2>
              <p>You may request to access, correct, or delete the personal information we hold about you at any time by contacting us at the details below. We will respond to all requests within a reasonable timeframe.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-espresso">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
