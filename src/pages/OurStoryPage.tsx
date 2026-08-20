import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export function OurStoryPage() {
  usePageTitle('Our Story | Kiqao Lounge');
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/DSC_8494.webp"
              alt="Kiqao Lounge ambiance"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-kiqao-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-kiqao-warm-white mb-4">

              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-kiqao-gold tracking-widest uppercase text-sm">

              A legacy of culinary excellence
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="relative">

              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="/done_1.webp"
                  alt="Kiqao Lounge interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-kiqao-charcoal border border-kiqao-gold/30 hidden md:flex items-center justify-center p-6 rounded-sm">
                <p className="font-display text-2xl text-kiqao-gold text-center italic">
                  "A sanctuary for food and wine lovers."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-8">

              <motion.div variants={fadeInUp}>
                <span className="text-kiqao-gold text-sm font-bold tracking-[0.2em] uppercase">
                  Who We Are
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-kiqao-warm-white mt-4 mb-6">
                  A Legacy of Culinary Excellence
                </h2>
                <div className="w-16 h-0.5 bg-kiqao-gold mb-8"></div>
                <p className="text-kiqao-cream/80 leading-relaxed mb-6">
                  Established with a profound passion for bringing world-class
                  dining experiences to our city, Kiqao Lounge is more than a
                  restaurant—it's a destination.
                </p>
                <p className="text-kiqao-cream/80 leading-relaxed">
                  Our executive chef meticulously sources the finest seasonal
                  ingredients to craft dishes that honor traditional techniques
                  while embracing modern culinary innovation. Paired with our
                  extensive, carefully curated wine cellar, every meal becomes
                  an unforgettable journey of flavors.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-kiqao-charcoal">

                {[
                { label: 'Years', value: '15+' },
                { label: 'Wines', value: '200+' },
                { label: 'Dishes', value: '50+' },
                { label: 'Guests', value: '10K+' }].
                map((stat, i) =>
                <div key={i} className="text-center sm:text-left">
                    <div className="font-display text-3xl text-kiqao-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-kiqao-cream/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cinematic break */}
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden flex items-center justify-center">
          <img
            src="/done_3.webp"
            alt="Kiqao Lounge rooftop at dusk"
            className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-kiqao-black/50"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 font-display italic text-2xl md:text-4xl text-kiqao-warm-white text-center max-w-3xl px-6 leading-relaxed">

            "Every detail, from the pour to the plate, is crafted to be
            remembered."
          </motion.p>
        </section>
      </main>
    </PageTransition>);

}
