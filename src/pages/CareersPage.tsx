import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { EMAIL } from '../config/contact';
import { usePageTitle } from '../hooks/usePageTitle';

const departments = [
{
  name: 'Kitchen',
  desc: 'Chefs, sous chefs, and kitchen staff crafting every plate that leaves the pass.'
},
{
  name: 'Front of House',
  desc: 'Servers and hosts delivering the warmth and precision Kiqao guests expect.'
},
{
  name: 'Bar & Lounge',
  desc: 'Bartenders and sommeliers curating our cocktail and wine program.'
},
{
  name: 'Management',
  desc: 'Operations and events leads keeping every service running seamlessly.'
}];

export function CareersPage() {
  usePageTitle('Careers | Kiqao Lounge');
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/DSC_8433.webp"
              alt="Kiqao Lounge kitchen"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-kiqao-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl text-kiqao-warm-white mb-4">

              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-kiqao-gold tracking-widest uppercase text-sm">

              Join the Kiqao team
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto">

            <h2 className="font-display text-3xl md:text-4xl text-kiqao-warm-white mb-6">
              Build Your Career With Us
            </h2>
            <p className="text-kiqao-cream/80 leading-relaxed">
              We're always looking for passionate, detail-driven people to
              join our kitchen, floor, and bar teams. If hospitality is your
              craft, we'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {departments.map((dept, i) =>
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-kiqao-charcoal border border-kiqao-charcoal hover:border-kiqao-gold/30 transition-colors p-8 rounded-sm">

                <h3 className="font-display text-2xl text-kiqao-warm-white mb-3">
                  {dept.name}
                </h3>
                <p className="text-kiqao-cream/70 leading-relaxed">{dept.desc}</p>
              </motion.div>
            )}
          </div>

          <div className="text-center border-t border-kiqao-charcoal pt-12">
            <p className="text-kiqao-cream/70 mb-6">
              Send your CV and a short note about yourself to
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Careers%20at%20Kiqao%20Lounge`}
              className="inline-flex items-center px-8 py-4 bg-kiqao-warm-white text-kiqao-black font-medium tracking-wider rounded-full hover:bg-kiqao-cream transition-colors uppercase text-sm">

              {EMAIL}
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </PageTransition>);

}
