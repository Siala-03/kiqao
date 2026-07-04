import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { usePageTitle } from '../hooks/usePageTitle';
type MenuCategory =
'Breakfast' |
'Starters & Burgers' |
'Main Course' |
'Pasta, Pizza & Salads' |
'Desserts & Sides' |
'Coffee, Juice & Mocktails' |
'Cocktails, Wine & Bar';
const menuData: Record<MenuCategory, {
  name: string;
  desc?: string;
  price: string;
}[]> = {
  Breakfast: [
  {
    name: 'Kiqao Signature Breakfast',
    price: 'RWF 13,000'
  },
  {
    name: 'Omelette',
    desc: 'Spanish, Denver, Fajita, Spinach & Mushroom',
    price: 'RWF 7,000'
  },
  {
    name: 'Stuffed Crepes with Chocolate',
    price: 'RWF 9,000'
  },
  {
    name: 'Coconut Cream / Buttermilk Pancake',
    price: 'RWF 8,000'
  },
  {
    name: 'Chicken Salad Croissant',
    price: 'RWF 10,000'
  },
  {
    name: 'Chicken Wrap / Beef Wrap',
    price: 'RWF 11,000'
  },
  {
    name: 'Seasonal Fruit Plate',
    price: 'RWF 7,500'
  }],

  'Starters & Burgers': [
  {
    name: 'Chili Garlic Chicken Wings',
    price: 'RWF 8,000'
  },
  {
    name: 'Garlic Bread with Cheese',
    price: 'RWF 3,500'
  },
  {
    name: 'Golden Fried Mozzarella Sticks',
    price: 'RWF 5,000'
  },
  {
    name: 'Double Cheese Jalapeno Burger',
    price: 'RWF 11,000'
  },
  {
    name: 'The Meatball Masterpiece',
    price: 'RWF 12,000'
  },
  {
    name: 'Kiqao Signature Club Sandwich',
    price: 'RWF 12,500'
  },
  {
    name: 'Veggie Burger',
    price: 'RWF 7,500'
  }],

  'Main Course': [
  {
    name: 'Fish Fillet with Creamy Creole Sauce',
    price: 'RWF 18,000'
  },
  {
    name: 'Pan Seared Tilapia',
    price: 'RWF 15,000'
  },
  {
    name: 'Creamy Chicken Marsala',
    price: 'RWF 18,000'
  },
  {
    name: 'Pinwheels Steak with Mozzarella',
    price: 'RWF 18,000'
  },
  {
    name: 'Alfredo Chicken Wings',
    price: 'RWF 10,000'
  },
  {
    name: 'Grilled Sirloin Steak',
    price: 'RWF 20,000'
  },
  {
    name: 'Lip Smacking Beef Parmigiana',
    price: 'RWF 20,000'
  },
  {
    name: 'T-Bone Steak with Chimi Churi Sauce',
    price: 'RWF 20,000'
  },
  {
    name: 'Huntsman Platter',
    price: 'RWF 25,000'
  }],

  'Pasta, Pizza & Salads': [
  {
    name: 'Penne Alforno',
    price: 'RWF 13,000'
  },
  {
    name: 'Kiqao Signature Chicken Pasta',
    price: 'RWF 12,000'
  },
  {
    name: 'Mushroom Tagliatelle',
    price: 'RWF 12,000'
  },
  {
    name: 'Ginovesse Pasta',
    price: 'RWF 12,000'
  },
  {
    name: 'Tuscan Chicken Pasta',
    price: 'RWF 12,000'
  },
  {
    name: 'Margarita Pizza',
    price: 'RWF 8,000'
  },
  {
    name: 'Spicy Pepperoni Pizza',
    price: 'RWF 12,000'
  },
  {
    name: 'Rainbow Vegetable Pizza',
    price: 'RWF 9,000'
  },
  {
    name: 'Bolognaise Pizza',
    price: 'RWF 12,000'
  },
  {
    name: 'Chicken Hawaiian Pizza',
    price: 'RWF 12,000'
  },
  {
    name: 'Chicken BBQ Pizza',
    price: 'RWF 12,000'
  },
  {
    name: 'Ham and Mushroom Pizza',
    price: 'RWF 12,000'
  },
  {
    name: 'Tuna and Mushroom Pizza',
    price: 'RWF 11,000'
  },
  {
    name: 'Nyama Feast Pizza',
    price: 'RWF 13,000'
  },
  {
    name: 'Mushroom and Olive Loaded Pizza',
    price: 'RWF 10,000'
  },
  {
    name: 'Cowboy Caviar Salad',
    price: 'RWF 13,000'
  },
  {
    name: 'Mango Lime Peanut & Chicken Salad',
    price: 'RWF 12,000'
  },
  {
    name: 'Greek Salad',
    price: 'RWF 10,000'
  },
  {
    name: 'Chicken Caesar Salad',
    price: 'RWF 12,000'
  }],

  'Desserts & Sides': [
  {
    name: 'Tropical Fruit Salad with Yoghurt & Nuts',
    price: 'RWF 7,500'
  },
  {
    name: 'Cinnamon French Toast with Whipping Cream',
    price: 'RWF 9,000'
  },
  {
    name: 'Potatoes',
    desc: 'Mashed, Fries, Chunky Chips, Sautee, Wedges',
    price: 'RWF 4,000'
  },
  {
    name: 'Plantain',
    price: 'RWF 4,000'
  },
  {
    name: 'Rice',
    price: 'RWF 3,500'
  },
  {
    name: 'Loaded Fries',
    price: 'RWF 8,000'
  },
  {
    name: 'Pickled Vegetable',
    price: 'RWF 3,500'
  },
  {
    name: 'Onion Rings',
    price: 'RWF 3,500'
  },
  {
    name: 'Creamed Spinach',
    price: 'RWF 3,500'
  }],

  'Coffee, Juice & Mocktails': [
  {
    name: 'Cappuccino',
    price: 'RWF 4,000'
  },
  {
    name: 'Café Latte',
    price: 'RWF 4,000'
  },
  {
    name: 'Mocha',
    price: 'RWF 4,000'
  },
  {
    name: 'Macchiato',
    price: 'RWF 3,000'
  },
  {
    name: 'Espresso',
    price: 'RWF 3,000'
  },
  {
    name: 'Spiced Tea / African Tea / Herbal Tea',
    price: 'RWF 4,000'
  },
  {
    name: 'Fresh Juices',
    desc: 'Mango, Passion, Pineapple, Watermelon',
    price: 'RWF 5,000'
  },
  {
    name: 'Cocktail Juice',
    price: 'RWF 6,000'
  },
  {
    name: 'Smoothies',
    price: 'RWF 6,000'
  },
  {
    name: 'Mocktails',
    price: 'RWF 10,000'
  }],

  'Cocktails, Wine & Bar': [
  {
    name: 'Signature Cocktails',
    price: 'from RWF 15,000'
  },
  {
    name: 'Long Island / Old Fashion / Amalfi Collins',
    price: 'RWF 18,000'
  },
  {
    name: 'Red Wine by the Glass',
    price: 'from RWF 12,000'
  },
  {
    name: 'White Wine by the Glass',
    price: 'from RWF 12,000'
  },
  {
    name: 'Sparkling Wine by the Glass',
    price: 'from RWF 15,000'
  },
  {
    name: 'Champagne Bottles',
    price: 'from RWF 250,000'
  },
  {
    name: 'Vodka, Gin, Tequila, Whisky, Rum & Cognac',
    desc: 'Available by shot and bottle',
    price: ''
  },
  {
    name: 'Sodas & Water',
    price: 'from RWF 2,000'
  },
  {
    name: 'Local Beer',
    price: 'RWF 3,000'
  },
  {
    name: 'Premium Beer & Energy Drinks',
    price: 'from RWF 4,000'
  }]

};
const categories: MenuCategory[] = [
'Breakfast',
'Starters & Burgers',
'Main Course',
'Pasta, Pizza & Salads',
'Desserts & Sides',
'Coffee, Juice & Mocktails',
'Cocktails, Wine & Bar'];

export function MenuPage() {
  usePageTitle('Menu | Kiqao Lounge');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Breakfast');
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
                      <h3 className="font-display text-xl text-kiqao-warm-white">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-kiqao-charcoal mx-4 relative top-[-6px]"></div>
                      <span className="font-display text-xl text-kiqao-gold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.desc &&
                  <p className="text-kiqao-cream/60 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                  }
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Notice */}
          <div className="mt-24 text-center border-t border-kiqao-charcoal pt-8">
            <p className="text-kiqao-cream/40 text-xs max-w-2xl mx-auto">
              Please inform your server of any allergies or dietary
              requirements. A discretionary 12.5% service charge will be added
              to your bill.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>);

}
