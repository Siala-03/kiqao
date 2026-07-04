import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';
type MenuCategory = 'Starters' | 'Mains' | 'Liquor' | 'Desserts' | 'Wine List';
const menuData = {
  Starters: [
  {
    name: 'Truffle Burrata',
    desc: 'Heirloom tomatoes, aged balsamic, basil oil',
    price: 'RWF 28,800',
    tags: ['V', 'GF']
  },
  {
    name: 'Tuna Tartare',
    desc: 'Avocado, ponzu, sesame, taro chips',
    price: 'RWF 33,600',
    tags: ['GF']
  },
  {
    name: 'French Onion Soup',
    desc: 'Gruyère crouton, rich beef broth',
    price: 'RWF 21,600',
    tags: []
  },
  {
    name: 'Beef Carpaccio',
    desc: 'Parmesan shavings, arugula, truffle oil',
    price: 'RWF 31,200',
    tags: ['GF']
  },
  {
    name: 'Lobster Bisque',
    desc: 'Cognac cream, chives, brioche',
    price: 'RWF 26,400',
    tags: []
  },
  {
    name: 'Caesar Salad',
    desc: 'Romaine hearts, anchovy dressing, parmesan crisp',
    price: 'RWF 19,200',
    tags: []
  }],

  Mains: [
  {
    name: 'Wagyu Tenderloin',
    desc: 'Truffle potato purée, seasonal greens, red wine jus',
    price: 'RWF 102,000',
    tags: ['GF']
  },
  {
    name: 'Rack of Lamb',
    desc: 'Herb crusted, ratatouille, rosemary reduction',
    price: 'RWF 93,600',
    tags: []
  },
  {
    name: 'Duck Confit',
    desc: 'Puy lentils, pancetta, cherry gastrique',
    price: 'RWF 78,000',
    tags: ['GF']
  },
  {
    name: 'Filet Mignon',
    desc: '8oz center cut, asparagus, béarnaise',
    price: 'RWF 110,400',
    tags: ['GF']
  },
  {
    name: 'Chicken Supreme',
    desc: 'Wild mushroom risotto, thyme jus',
    price: 'RWF 66,000',
    tags: ['GF']
  },
  {
    name: 'Osso Buco',
    desc: 'Braised veal shank, saffron gremolata',
    price: 'RWF 86,400',
    tags: []
  }],

  Liquor: [
  {
    name: 'Grey Goose Vodka',
    desc: 'French premium vodka, 40% ABV, 1L',
    price: 'RWF 285,000',
    tags: []
  },
  {
    name: 'Hennessy XO',
    desc: 'Extra old cognac, 40% ABV, 70cl',
    price: 'RWF 680,000',
    tags: []
  },
  {
    name: 'Johnnie Walker Blue',
    desc: 'Blended Scotch whisky, 40% ABV, 75cl',
    price: 'RWF 420,000',
    tags: []
  },
  {
    name: 'Moët & Chandon Impérial',
    desc: 'Champagne, 12% ABV, 75cl',
    price: 'RWF 195,000',
    tags: []
  },
  {
    name: 'Remy Martin Louis XIII',
    desc: 'Ultra-premium cognac, 40% ABV, 70cl',
    price: 'RWF 850,000',
    tags: []
  }],

  Desserts: [
  {
    name: 'Crème Brûlée',
    desc: 'Madagascar vanilla bean, fresh berries',
    price: 'RWF 21,600',
    tags: ['V', 'GF']
  },
  {
    name: 'Chocolate Fondant',
    desc: 'Molten center, salted caramel ice cream',
    price: 'RWF 26,400',
    tags: ['V']
  },
  {
    name: 'Tiramisu',
    desc: 'Espresso soaked ladyfingers, mascarpone',
    price: 'RWF 24,000',
    tags: ['V']
  },
  {
    name: 'Cheese Board',
    desc: 'Selection of artisanal cheeses, honeycomb, crackers',
    price: 'RWF 33,600',
    tags: ['V']
  },
  {
    name: 'Panna Cotta',
    desc: 'Passion fruit coulis, coconut tuile',
    price: 'RWF 21,600',
    tags: ['V', 'GF']
  }],

  'Wine List': [
  {
    name: 'Château Margaux 2015',
    desc: 'Bordeaux Blend, France',
    price: 'RWF 384,000',
    tags: []
  },
  {
    name: 'Opus One 2018',
    desc: 'Cabernet Sauvignon, Napa Valley',
    price: 'RWF 540,000',
    tags: []
  },
  {
    name: 'Dom Pérignon 2012',
    desc: 'Champagne, France',
    price: 'RWF 456,000',
    tags: []
  },
  {
    name: 'Cloudy Bay Sauvignon',
    desc: 'Marlborough, New Zealand',
    price: 'RWF 78,000',
    tags: []
  },
  {
    name: 'Whispering Angel Rosé',
    desc: 'Côtes de Provence, France',
    price: 'RWF 66,000',
    tags: []
  },
  {
    name: 'Barolo Riserva 2016',
    desc: 'Piedmont, Italy',
    price: 'RWF 216,000',
    tags: []
  }]

};
const categories: MenuCategory[] = [
'Starters',
'Mains',
'Liquor',
'Desserts',
'Wine List'];

export function MenuPage() {
  usePageTitle('Menu | Kiqao Lounge');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Starters');
  return (
    <PageTransition>
      <main className="flex-grow bg-kiqao-black text-kiqao-cream min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920"
              alt="Menu hero"
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
              
              Our Menu
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
              
              A culinary journey crafted with passion
            </motion.p>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-kiqao-charcoal pb-6">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base tracking-widest uppercase transition-colors relative pb-2 ${activeCategory === cat ? 'text-kiqao-gold' : 'text-kiqao-cream/60 hover:text-kiqao-warm-white'}`}>
              
                {cat}
                {activeCategory === cat &&
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-kiqao-gold" />

              }
              </button>
            )}
          </div>

          {/* Menu Items Grid */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: -20
                }}
                transition={{
                  duration: 0.4
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                
                {menuData[activeCategory].map((item, idx) =>
                <div key={idx} className="flex flex-col">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display text-xl text-kiqao-warm-white flex items-center gap-3">
                        {item.name}
                        {item.tags.length > 0 &&
                      <span className="flex gap-1">
                            {item.tags.map((tag) =>
                        <span
                          key={tag}
                          className="text-[10px] border border-kiqao-gold/50 text-kiqao-gold px-1 rounded-sm">
                          
                                {tag}
                              </span>
                        )}
                          </span>
                      }
                      </h3>
                      <div className="flex-grow border-b border-dotted border-kiqao-charcoal mx-4 relative top-[-6px]"></div>
                      <span className="font-display text-xl text-kiqao-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-kiqao-cream/60 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dietary Legend */}
          <div className="mt-24 text-center border-t border-kiqao-charcoal pt-8">
            <p className="text-kiqao-cream/50 text-xs tracking-widest uppercase flex justify-center gap-6">
              <span>V = Vegetarian</span>
              <span>GF = Gluten Free</span>
            </p>
            <p className="text-kiqao-cream/40 text-xs mt-4 max-w-2xl mx-auto">
              Please inform your server of any allergies or dietary
              requirements. A discretionary 12.5% service charge will be added
              to your bill.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>);

}