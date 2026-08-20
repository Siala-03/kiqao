import React from 'react';
import { motion } from 'framer-motion';
import { MusicIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { RESERVATION_URL } from '../config/servv';
import { usePageTitle } from '../hooks/usePageTitle';

const lineup = [
{ night: 'Thursdays', title: 'Acoustic Sessions', time: '8:00 PM - 11:00 PM' },
{ night: 'Fridays', title: 'Live Jazz', time: '8:30 PM - Midnight' },
{ night: 'Saturdays', title: 'DJ Nights', time: '9:00 PM - Late' },
{ night: 'Sundays', title: 'Sunday Soul Brunch', time: '11:00 AM - 3:00 PM' }];

export function LivePage() {
  usePageTitle('Live | Kiqao Lounge');
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/done_6.webp"
              alt="Kiqao Lounge live nights"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-kiqao-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-kiqao-warm-white mb-4">

              Live
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-kiqao-gold tracking-widest uppercase text-sm">

              Music and nights at Kiqao
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {lineup.map((slot, i) =>
            <motion.div
              key={slot.night}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-kiqao-charcoal border border-kiqao-charcoal hover:border-kiqao-gold/30 transition-colors p-6 sm:p-8 rounded-sm gap-3">

                <div className="flex items-center gap-4">
                  <MusicIcon className="w-5 h-5 text-kiqao-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl text-kiqao-warm-white">
                      {slot.title}
                    </h3>
                    <p className="text-kiqao-cream/60 text-sm">{slot.night}</p>
                  </div>
                </div>
                <span className="text-kiqao-gold text-sm tracking-wide">{slot.time}</span>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-16">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-kiqao-warm-white text-kiqao-black font-medium tracking-wider rounded-full hover:bg-kiqao-cream transition-colors uppercase text-sm">

              Reserve a Table
            </a>
          </div>
        </section>
      </main>
    </PageTransition>);

}
