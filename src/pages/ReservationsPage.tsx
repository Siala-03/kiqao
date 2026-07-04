import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, PhoneIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_NUMBER, EMAIL } from '../config/contact';
// Access key from web3forms.com for the infokiqaolounge@gmail.com account.
// Set VITE_WEB3FORMS_ACCESS_KEY in .env once the client shares it — see .env.example.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
string | undefined;
export function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    occasion: 'None',
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>

  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Reservation Request from ${formData.name}`,
          from_name: 'Kiqao Lounge Reservations',
          to_email: EMAIL,
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  // Generate time slots
  const timeSlots = [];
  for (let hour = 17; hour <= 22; hour++) {
    timeSlots.push(`${hour > 12 ? hour - 12 : hour}:00 PM`);
    if (hour !== 22) timeSlots.push(`${hour > 12 ? hour - 12 : hour}:30 PM`);
  }
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[30vh] min-h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920"
              alt="Reservations hero"
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
              
              Reserve Your Table
            </motion.h1>
          </div>
        </section>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form Section */}
            <div className="lg:col-span-3">
              {isSuccess ?
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="bg-kiqao-charcoal border border-kiqao-gold/30 p-10 rounded-sm text-center h-full flex flex-col items-center justify-center">
                
                  <div className="w-16 h-16 bg-kiqao-gold/20 rounded-full flex items-center justify-center mb-6">
                    <CheckIcon className="w-8 h-8 text-kiqao-gold" />
                  </div>
                  <h2 className="font-display text-3xl text-kiqao-warm-white mb-4">
                    Reservation Confirmed
                  </h2>
                  <p className="text-kiqao-cream/80 mb-6">
                    Thank you, {formData.name}. Your request for a table for{' '}
                    {formData.partySize} on {formData.date} at {formData.time}{' '}
                    has been sent to our team.
                  </p>
                  <p className="text-kiqao-cream/60 text-sm mb-8">
                    We'll confirm with you shortly by phone or email.
                  </p>
                  <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      ...formData,
                      date: '',
                      time: '',
                      requests: ''
                    });
                  }}
                  className="px-8 py-3 border border-kiqao-gold text-kiqao-gold hover:bg-kiqao-gold hover:text-kiqao-black transition-colors rounded-sm uppercase tracking-wider text-sm">
                  
                    Make Another Booking
                  </button>
                </motion.div> :

              <motion.form
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                onSubmit={handleSubmit}
                className="bg-kiqao-rich-black border border-kiqao-charcoal p-8 md:p-10 rounded-sm">
                
                  <h2 className="font-display text-2xl text-kiqao-warm-white mb-8 border-b border-kiqao-charcoal pb-4">
                    Booking Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Date *
                      </label>
                      <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm" />
                    
                    </div>
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Time *
                      </label>
                      <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm appearance-none">
                      
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((time) =>
                      <option key={time} value={time}>
                            {time}
                          </option>
                      )}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Party Size *
                      </label>
                      <select
                      name="partySize"
                      required
                      value={formData.partySize}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm appearance-none">
                      
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '12+'].map(
                        (num) =>
                        <option key={num} value={num}>
                              {num} {num === 1 ? 'Person' : 'People'}
                            </option>

                      )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Occasion
                      </label>
                      <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm appearance-none">
                      
                        <option value="None">None</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl text-kiqao-warm-white mb-8 border-b border-kiqao-charcoal pb-4">
                    Guest Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm"
                      placeholder="John Doe" />
                    
                    </div>
                    <div>
                      <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm"
                      placeholder="+254 700 000 000" />
                    
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm"
                    placeholder="john@example.com" />
                  
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm text-kiqao-cream/70 mb-2 uppercase tracking-wider">
                      Special Requests
                    </label>
                    <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-kiqao-black border border-kiqao-charcoal text-kiqao-cream px-4 py-3 focus:outline-none focus:border-kiqao-gold transition-colors rounded-sm resize-none"
                    placeholder="Dietary requirements, seating preferences, etc.">
                  </textarea>
                  </div>

                  {isError &&
                <p className="text-red-400 text-sm mb-6">
                      Something went wrong sending your request. Please call
                      or WhatsApp us directly using the details on the right.
                    </p>
                }

                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-kiqao-gold text-kiqao-black font-medium tracking-wider hover:bg-kiqao-champagne transition-colors rounded-sm uppercase disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
                  
                    {isSubmitting ?
                  <span className="animate-pulse">Processing...</span> :

                  'Confirm Reservation'
                  }
                  </button>
                </motion.form>
              }
            </div>

            {/* Info Section */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="lg:col-span-2 space-y-8">
              
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800"
                  alt="Restaurant table setting"
                  className="w-full h-full object-cover" />
                
              </div>

              <div className="bg-kiqao-rich-black border border-kiqao-charcoal p-8 rounded-sm">
                <h3 className="font-display text-xl text-kiqao-warm-white mb-6">
                  Important Information
                </h3>

                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="text-kiqao-gold uppercase tracking-wider mb-2 text-xs">
                      Cancellation Policy
                    </h4>
                    <p className="text-kiqao-cream/80">
                      Please provide at least 24 hours notice for cancellations.
                      Late cancellations or no-shows may be subject to a fee.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-kiqao-gold uppercase tracking-wider mb-2 text-xs">
                      Large Parties
                    </h4>
                    <p className="text-kiqao-cream/80">
                      For parties of 8 or more, please contact us directly to
                      ensure we can accommodate your group perfectly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-kiqao-charcoal/50 border border-kiqao-gold/20 p-8 rounded-sm text-center">
                <h4 className="font-display text-lg text-kiqao-warm-white mb-4">
                  Need Assistance?
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="flex items-center justify-center text-kiqao-cream hover:text-kiqao-gold transition-colors">

                    <PhoneIcon className="w-4 h-4 mr-2" />
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-green-400 hover:text-green-300 transition-colors">

                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    Prefer WhatsApp? Book directly
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>);

}