import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  SendIcon } from
'lucide-react';
import { PHONE_DISPLAY, EMAIL } from '../config/contact';
import { RESERVATION_URL, ORDER_URL } from '../config/servv';
export function Footer() {
  return (
    <footer className="bg-kiqao-black border-t border-kiqao-gold/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              to="/"
              className="flex flex-col items-start group inline-block">
              
              <span className="font-display text-3xl tracking-widest text-kiqao-warm-white">
                KIQAO
              </span>
              <span className="text-[0.65rem] tracking-[0.3em] text-kiqao-gold mt-1">
                LOUNGE
              </span>
            </Link>
            <p className="text-kiqao-cream/70 text-sm leading-relaxed">
              Experience the art of fine dining and curated wines in an
              atmosphere of timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kiqaolounge.rw/"
                className="text-kiqao-cream/60 hover:text-kiqao-gold transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-kiqao-cream/60 hover:text-kiqao-gold transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-kiqao-cream/60 hover:text-kiqao-gold transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
              {
                name: 'Menu',
                path: '/menu'
              },
              {
                name: 'Events',
                path: '/events'
              },
              {
                name: 'Reservations',
                href: RESERVATION_URL
              },
              {
                name: 'Order Online',
                href: ORDER_URL
              },
              {
                name: 'Contact',
                path: '/contact'
              }].
              map((item) =>
              <li key={item.name}>
                  {item.href ?
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kiqao-cream/70 hover:text-kiqao-gold transition-colors text-sm">

                      {item.name}
                    </a> :

                <Link
                  to={item.path!}
                  className="text-kiqao-cream/70 hover:text-kiqao-gold transition-colors text-sm">

                      {item.name}
                    </Link>
                }
                </li>
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Hours of Operation
            </h4>
            <ul className="space-y-4 text-sm text-kiqao-cream/70">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span>11:00 AM - Late</span>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display text-lg text-kiqao-warm-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-kiqao-cream/70 mb-8">
              <li>Nyarutarama KG 274 St, Kigali, Rwanda</li>
              <li>{PHONE_DISPLAY}</li>
              <li>{EMAIL}</li>
            </ul>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="bg-kiqao-charcoal border border-kiqao-charcoal text-kiqao-cream px-4 py-2 w-full focus:outline-none focus:border-kiqao-gold text-sm rounded-l-sm" />
              
              <button
                type="submit"
                className="bg-kiqao-gold text-kiqao-black px-4 py-2 hover:bg-kiqao-champagne transition-colors rounded-r-sm flex items-center justify-center"
                aria-label="Subscribe">
                
                <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-kiqao-charcoal flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-kiqao-cream/50 text-xs">
            &copy; {new Date().getFullYear()} Kiqao Lounge. All rights reserved.
          </p>
          <p className="text-kiqao-cream/50 text-xs flex items-center">
            Crafted with passion • Developed by Siala Solutions
          </p>
        </div>
      </div>
    </footer>);

}