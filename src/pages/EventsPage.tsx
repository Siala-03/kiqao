import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { RESERVATION_URL } from '../config/servv';
import { usePageTitle } from '../hooks/usePageTitle';
const upcomingEvents = [
{
  title: 'Wine Tasting Evening',
  date: 'March 28, 2026',
  time: '7:00 PM',
  price: 'RWF 30,000',
  desc: 'Journey through rare Bordeaux vintages guided by our head sommelier.',
  capacity: 'Limited to 30 guests'
},
{
  title: 'Jazz & Dine Night',
  date: 'April 5, 2026',
  time: '7:30 PM',
  price: 'RWF 45,000',
  desc: 'Live jazz trio with a curated 5-course tasting menu.',
  capacity: 'Open seating'
},
{
  title: "Chef's Table Experience",
  date: 'April 12, 2026',
  time: '8:00 PM',
  price: 'RWF 65,000',
  desc: 'Intimate 8-course journey with Chef Marcus at the kitchen counter.',
  capacity: 'Only 12 seats'
},
{
  title: 'Spring Wine Gala',
  date: 'April 20, 2026',
  time: '6:00 PM',
  price: 'RWF 80,000',
  desc: 'Celebrate spring with new additions to our wine collection.',
  capacity: 'Limited to 50 guests'
}];

const pastEventsImages = [
'https://lh3.googleusercontent.com/gps-cs-s/AHVAweokl7nkQ43kBf1czeS3F-dVHANVdR-lYhtGYuyuSw3STogPTMYtOy0wysNNxaREyGlBSUJh2jqKkMwFaNtoDEg22XMHOo63xyQcOPkuw4dwdxgZSlfCxm9qIlO9YyY5DqOtu7SwBl_h_uzC=s680-w680-h510-rw',
'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqVsOQQFiejgXo3wLI3nc3-5tCq_CnYfCvRnLcgGsYQw0IVTmdIGKM3fjs7DLUipgpkmHHk3D9qfHM2QdEfjiqMqgQfjumKhJSm9iMj10P_kKAbmOCEEcsJQQD27j9_e50_ykBKch-agRDq=s680-w680-h510-rw',
'https://lh3.googleusercontent.com/p/AF1QipM21yFeKQwYMICtGwpdsT88DocSiRza-IqLF7_G=w141-h235-n-k-no-nu',
'https://lh3.googleusercontent.com/p/AF1QipMVo7ZrpWik9kkW-K8BTzsIfZSI05qP10ICqPHo=w141-h118-n-k-no-nu',
'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepp40HOIUBuq-WaOQL-FZBq09_-tNdieL6py0LakSxWnVLXgwMeYF3yO0943_I4qhOz5TRWO8NTOxiFRrM6kICSbgoWh6R1k0i6yZImbKdrNgP0yN9cG6gUsSSpTWk67lBS90QH2ZT8L0tC=w141-h118-n-k-no-nu',
'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerhovdT9IAiPP7PEqLdvQSGBwp9OFzjMSGb3uwUFx94w20rytpxquf_RpKz6DKerlexPO8anOr-w9RftMzvrRd4QfZ6JbuYKnQRdfaRkKXxu6K4WOnqCSiwWB2j4knwu1Wvw02-yZcCfy_l=w141-h176-n-k-no-nu'];

export function EventsPage() {
  usePageTitle('Events | Kiqao Lounge');
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920"
              alt="Events hero"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/70 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-display text-5xl md:text-6xl text-kiqao-warm-white mb-4">
              
              Events & Experiences
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="text-kiqao-gold tracking-widest uppercase text-sm">
              
              Unforgettable moments at Kiqao
            </motion.p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-kiqao-warm-white mb-4">
              Upcoming Events
            </h2>
            <div className="w-16 h-0.5 bg-kiqao-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) =>
            <motion.div
              key={idx}
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
              transition={{
                delay: idx * 0.1
              }}
              className="bg-kiqao-charcoal border border-kiqao-charcoal hover:border-kiqao-gold/30 transition-colors p-8 rounded-sm flex flex-col h-full">
              
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display text-2xl text-kiqao-warm-white">
                    {event.title}
                  </h3>
                  <span className="text-kiqao-gold font-display text-xl">
                    {event.price}
                  </span>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center text-kiqao-cream/70 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-3 text-kiqao-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-kiqao-cream/70 text-sm">
                    <ClockIcon className="w-4 h-4 mr-3 text-kiqao-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-kiqao-cream/70 text-sm">
                    <UsersIcon className="w-4 h-4 mr-3 text-kiqao-gold" />
                    {event.capacity}
                  </div>
                </div>

                <p className="text-kiqao-cream/80 mb-8 font-light">
                  {event.desc}
                </p>

                <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3 border border-kiqao-gold text-kiqao-gold text-center uppercase tracking-wider text-sm font-medium hover:bg-kiqao-gold hover:text-kiqao-black transition-colors rounded-sm">

                  Reserve Spot
                </a>
              </motion.div>
            )}
          </div>
        </section>

        {/* Private Events CTA */}
        <section className="py-24 bg-kiqao-rich-black border-y border-kiqao-charcoal">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-4xl text-kiqao-warm-white mb-6">
              Host a Private Event
            </h2>
            <p className="text-kiqao-cream/80 text-lg mb-10 leading-relaxed font-light">
              From intimate celebrations to corporate gatherings, our private
              dining spaces offer the perfect backdrop for your special
              occasion. Let our dedicated events team craft a bespoke experience
              tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm">
              
              Inquire Now
            </Link>
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-kiqao-warm-white mb-4">
              Past Memories
            </h2>
            <div className="w-16 h-0.5 bg-kiqao-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEventsImages.map((img, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}
              className="relative aspect-square overflow-hidden group rounded-sm">
              
                <img
                src={img}
                alt={`Past event ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
                <div className="absolute inset-0 bg-kiqao-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-kiqao-gold font-display text-xl tracking-wider">
                    Kiqao Moments
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>);

}