import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  WineIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronDownIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PHONE_E164 } from '../config/contact';
import { RESERVATION_URL } from '../config/servv';
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
export function HomePage() {
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* SECTION A: HERO */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/kiqaovideo.mp4"
              poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center" />

            <div className="absolute inset-0 bg-gradient-to-b from-kiqao-black/80 via-kiqao-black/60 to-kiqao-black/90"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8">
              
              <motion.h1
                variants={fadeInUp}
                className="font-display text-5xl md:text-7xl lg:text-8xl text-kiqao-warm-white leading-tight">
                
                Where Every Sip <br className="hidden md:block" />
                <span className="text-kiqao-gold italic">Tells a Story</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-kiqao-cream/90 max-w-2xl mx-auto font-light tracking-wide">
                
                Experience the art of fine dining and curated wines in an
                atmosphere of timeless elegance
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                
                <a
                  href={RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm text-center">

                  Reserve a Table
                </a>
                <Link
                  to="/menu"
                  className="w-full sm:w-auto px-8 py-4 border border-kiqao-gold text-kiqao-gold font-medium tracking-wider hover:bg-kiqao-gold/10 transition-colors rounded-sm text-center">
                  
                  Explore Menu
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1.5,
              duration: 1
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-kiqao-gold animate-bounce">
            
            <span className="text-xs tracking-widest uppercase mb-2">
              Scroll
            </span>
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
        </section>

        {/* SECTION B: ABOUT/STORY */}
        <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={fadeInUp}
              className="relative">
              
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMWv67TxTSzvXCFQ_MV0YLumwkxlRJTODN8Rmhq=s680-w680-h510-rw"
                  alt="Restaurant interior"
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
              viewport={{
                once: true,
                margin: '-100px'
              }}
              variants={staggerContainer}
              className="space-y-8">
              
              <motion.div variants={fadeInUp}>
                <span className="text-kiqao-gold text-sm font-bold tracking-[0.2em] uppercase">
                  Our Story
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white mt-4 mb-6">
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
                {
                  label: 'Years',
                  value: '15+'
                },
                {
                  label: 'Wines',
                  value: '200+'
                },
                {
                  label: 'Dishes',
                  value: '50+'
                },
                {
                  label: 'Guests',
                  value: '10K+'
                }].
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

        {/* SECTION C: FEATURED DISHES */}
        <section className="py-24 md:py-32 bg-kiqao-rich-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeInUp}
              className="text-center mb-16">
              
              <span className="text-kiqao-gold text-sm font-bold tracking-[0.2em] uppercase">
                Chef's Selection
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white mt-4">
                Signature Creations
              </h2>
              <div className="w-16 h-0.5 bg-kiqao-gold mx-auto mt-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
              {
                name: 'Filet Mignon',
                desc: 'Perfectly seared with truffle jus and seasonal vegetables',
                price: 'RWF 60,000',
                img: 'https://images.unsplash.com/photo-1706650616334-97875fae8521?w=800&auto=format&fit=crop'
              },
              {
                name: 'Grilled Chicken',
                desc: 'With herbs and roasted vegetables',
                price: 'RWF 40,000',
                img: 'https://images.unsplash.com/photo-1592011432621-f7f576f44484?w=800&auto=format&fit=crop'
              },
              {
                name: 'Mushroom Risotto',
                desc: 'Creamy arborio rice with wild mushrooms',
                price: 'RWF 30,000',
                img: 'https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?w=800&auto=format&fit=crop'
              }].
              map((dish, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6
                }}
                className="bg-kiqao-charcoal rounded-sm overflow-hidden group border border-kiqao-gold/10 hover:border-kiqao-gold/30 transition-colors">
                
                  <div className="relative h-64 overflow-hidden">
                    <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                    <div className="absolute top-4 right-4 bg-kiqao-black/80 backdrop-blur-sm text-kiqao-gold px-4 py-2 font-display text-lg rounded-sm border border-kiqao-gold/20">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="font-display text-2xl text-kiqao-warm-white mb-3">
                      {dish.name}
                    </h3>
                    <p className="text-kiqao-cream/70 text-sm">{dish.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="text-center">
              <Link
                to="/menu"
                className="inline-flex items-center text-kiqao-gold hover:text-kiqao-champagne transition-colors group tracking-wide uppercase text-sm font-medium">
                
                View Full Menu
                <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION D: WINE COLLECTION */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1920"
              alt="Wine cellar"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/85 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={staggerContainer}>
                
                <motion.h2
                  variants={fadeInUp}
                  className="font-display text-4xl md:text-5xl text-kiqao-warm-white mb-6">
                  
                  Curated Wine Collection
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="w-16 h-0.5 bg-kiqao-gold mb-8">
                </motion.div>
                <motion.p
                  variants={fadeInUp}
                  className="text-kiqao-cream/80 leading-relaxed mb-10 text-lg">
                  
                  Our cellar houses over 200 carefully selected labels from the
                  world's most renowned vineyards. Whether you prefer a bold
                  Bordeaux, a crisp Chablis, or a rare vintage Champagne, our
                  sommelier is ready to guide your selection.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/menu"
                    className="inline-block px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm">
                    
                    Explore Our Wine List
                  </Link>
                </motion.div>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[
                {
                  name: 'Red Wines',
                  count: '85+ Labels'
                },
                {
                  name: 'White Wines',
                  count: '60+ Labels'
                },
                {
                  name: 'Rosé',
                  count: '25+ Labels'
                },
                {
                  name: 'Champagne',
                  count: '30+ Labels'
                }].
                map((category, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5
                  }}
                  className="bg-kiqao-charcoal/60 border border-kiqao-gold/20 p-8 rounded-sm text-center hover:bg-kiqao-charcoal transition-colors backdrop-blur-md">
                  
                    <WineIcon className="w-8 h-8 text-kiqao-gold mx-auto mb-4" />
                    <h3 className="font-display text-xl text-kiqao-warm-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-kiqao-gold/80 text-sm">
                      {category.count}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* SECTION E: EVENTS PREVIEW */}
        <section className="py-24 md:py-32 bg-kiqao-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                variants={fadeInUp}>
                
                <span className="text-kiqao-gold text-sm font-bold tracking-[0.2em] uppercase">
                  Join Us
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-kiqao-warm-white mt-4">
                  Upcoming Experiences
                </h2>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                viewport={{
                  once: true
                }}
                className="mt-6 md:mt-0">
                
                <Link
                  to="/events"
                  className="inline-flex items-center text-kiqao-gold hover:text-kiqao-champagne transition-colors group tracking-wide uppercase text-sm font-medium">
                  
                  View All Events
                  <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              {
                title: 'Wine Tasting Evening',
                date: 'March 28, 2026',
                desc: 'Explore rare vintages from Bordeaux with our sommelier.'
              },
              {
                title: 'Jazz & Dine Night',
                date: 'April 5, 2026',
                desc: 'Live jazz performances paired with a 5-course tasting menu.'
              },
              {
                title: "Chef's Table Experience",
                date: 'April 12, 2026',
                desc: 'An intimate 8-course journey with Chef Marcus.'
              }].
              map((event, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6
                }}
                className="group relative bg-kiqao-rich-black border border-kiqao-charcoal p-8 rounded-sm hover:border-kiqao-gold/50 transition-colors">
                
                  <div className="text-kiqao-gold text-sm font-medium tracking-wider mb-4">
                    {event.date}
                  </div>
                  <h3 className="font-display text-2xl text-kiqao-warm-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-kiqao-cream/70 mb-8 line-clamp-2">
                    {event.desc}
                  </p>
                  <Link
                  to="/events"
                  className="text-kiqao-gold text-sm uppercase tracking-wider font-medium flex items-center group-hover:text-kiqao-champagne">
                  
                    Learn More{' '}
                    <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION F: TESTIMONIALS */}
        <section className="py-24 md:py-32 bg-kiqao-rich-black px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="font-display text-4xl md:text-5xl text-kiqao-warm-white mb-16">
              
              What Our Guests Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
              {
                quote:
                'An extraordinary dining experience. The wine pairing was impeccable and the ambiance is unmatched.',
                name: 'Sarah M.'
              },
              {
                quote:
                'Kiqao Lounge has become our go-to for special occasions. Every visit feels like a celebration.',
                name: 'James K.'
              },
              {
                quote:
                "The Chef's Table experience was unforgettable. Truly world-class cuisine in a stunning setting.",
                name: 'Amara O.'
              }].
              map((testimonial, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.5
                }}
                className="bg-kiqao-charcoal p-10 rounded-sm relative">
                
                  <div className="flex justify-center mb-6 space-x-1">
                    {[...Array(5)].map((_, j) =>
                  <StarIcon
                    key={j}
                    className="w-5 h-5 text-kiqao-gold fill-kiqao-gold" />

                  )}
                  </div>
                  <p className="text-kiqao-cream/90 italic mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-display text-kiqao-gold text-lg">
                    — {testimonial.name}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION G: RESERVATION CTA */}
        <section className="relative py-32 flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweokl7nkQ43kBf1czeS3F-dVHANVdR-lYhtGYuyuSw3STogPTMYtOy0wysNNxaREyGlBSUJh2jqKkMwFaNtoDEg22XMHOo63xyQcOPkuw4dwdxgZSlfCxm9qIlO9YyY5DqOtu7SwBl_h_uzC=s680-w680-h510-rw"
              alt="Elegant restaurant"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/80"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={staggerContainer}
            className="relative z-10 max-w-3xl mx-auto">
            
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-6xl text-kiqao-warm-white mb-6">
              
              Reserve Your Experience
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-kiqao-cream/80 mb-10 font-light">
              
              Join us for an unforgettable evening of fine dining and
              exceptional wines
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-6">
              
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm">

                Book a Table
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="px-8 py-4 border border-kiqao-gold text-kiqao-gold font-medium tracking-wider hover:bg-kiqao-gold/10 transition-colors rounded-sm">

                Call Us
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </PageTransition>);

}