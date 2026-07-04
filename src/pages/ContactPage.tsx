import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, EMAIL } from '../config/contact';
const faqs = [
{
  q: 'Do you accommodate dietary restrictions?',
  a: 'Absolutely! Our kitchen can accommodate most dietary requirements including gluten-free, vegan, and specific allergies. Please inform us when making your reservation so our chef can prepare accordingly.'
},
{
  q: 'Is parking available?',
  a: 'Yes, we offer complimentary valet parking for all our dining guests. Self-parking is also available in the adjacent secure lot.'
},
{
  q: 'Can I host a private event?',
  a: 'Yes! We have private dining rooms that can accommodate up to 40 guests, and the entire venue can be booked for larger events. Please use the contact form to inquire about private events.'
}];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920"
              alt="Contact hero"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-kiqao-black/80 backdrop-blur-sm"></div>
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
              
              Get in Touch
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
              
              We'd love to hear from you
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="bg-kiqao-rich-black border border-kiqao-charcoal p-8 md:p-10 rounded-sm">
              
              <h2 className="font-display text-3xl text-kiqao-warm-white mb-8">
                Send a Message
              </h2>

              {isSuccess ?
              <div className="bg-kiqao-charcoal/50 border border-kiqao-gold/30 p-6 rounded-sm text-center">
                  <p className="text-kiqao-gold font-medium mb-2">
                    Message Sent Successfully!
                  </p>
                  <p className="text-kiqao-cream/70 text-sm">
                    We will get back to you as soon as possible.
                  </p>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm" />
                  
                  </div>
                  <div>
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm" />
                  
                  </div>
                  <div>
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                    value={formData.subject}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value
                    })
                    }
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm appearance-none">
                    
                      <option>General Inquiry</option>
                      <option>Reservation Issue</option>
                      <option>Private Event</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm resize-none">
                  </textarea>
                  </div>
                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm uppercase disabled:opacity-70 flex justify-center">
                  
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              }
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="space-y-10">
              
              <div>
                <h2 className="font-display text-3xl text-kiqao-warm-white mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 text-kiqao-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-kiqao-warm-white font-medium mb-1">
                        Location
                      </h4>
                      <p className="text-kiqao-cream/70">
                        Nyarutarama KG 274 St
                        <br />
                        Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-6 h-6 text-kiqao-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-kiqao-warm-white font-medium mb-1">
                        Phone
                      </h4>
                      <p className="text-kiqao-cream/70">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="w-6 h-6 text-kiqao-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-kiqao-warm-white font-medium mb-1">
                        Email
                      </h4>
                      <p className="text-kiqao-cream/70">
                        {EMAIL}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-kiqao-gold mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-kiqao-warm-white font-medium mb-1">
                        Hours
                      </h4>
                      <p className="text-kiqao-cream/70">
                        Mon-Sun: 11:00 AM - Late
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.450212234567!2d30.0575!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTcnMTUuMiJTIDMwwrAzNCcxNS4yRw!5e0!3m2!1sen!2srw!4v1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-kiqao-charcoal h-64 rounded-sm border border-kiqao-gold/20 overflow-hidden group hover:border-kiqao-gold/50 transition-colors">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.450212234567!2d30.0575!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTcnMTUuMiJTIDMwwrAzNCcxNS4yRw!5e0!3m2!1sen!2srw!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiqao Lounge Location"
                  className="w-full h-full"
                />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white font-medium tracking-wider hover:bg-[#128C7E] transition-colors rounded-sm uppercase">

                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl text-kiqao-warm-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-0.5 bg-kiqao-gold mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) =>
              <div
                key={idx}
                className="bg-kiqao-rich-black border border-kiqao-charcoal rounded-sm overflow-hidden">
                
                  <button
                  onClick={() =>
                  setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
                  
                    <span className="font-display text-lg text-kiqao-warm-white">
                      {faq.q}
                    </span>
                    {openFaqIndex === idx ?
                  <ChevronUpIcon className="w-5 h-5 text-kiqao-gold flex-shrink-0" /> :

                  <ChevronDownIcon className="w-5 h-5 text-kiqao-gold flex-shrink-0" />
                  }
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === idx &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}>
                    
                        <div className="px-6 pb-6 text-kiqao-cream/70 leading-relaxed border-t border-kiqao-charcoal pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>);

}