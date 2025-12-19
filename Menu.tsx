
import React, { useEffect } from 'react';
import { FULL_MENU } from './constants';

interface MenuProps {
  onOrder?: () => void;
}

const AllergenBadge: React.FC<{ label: string }> = ({ label }) => {
  const getColors = () => {
    switch (label) {
      case 'V': return 'bg-green-100 text-green-800 border-green-200';
      case 'GF': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'N': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`text-[10px] font-black px-1.5 py-0.5 border rounded leading-none ${getColors()}`}>
      {label}
    </span>
  );
};

const MenuSection: React.FC<{ title: string; id: string; items: any[] }> = ({ title, id, items }) => (
  <div id={id} className="relative py-16 border-b border-gray-200 scroll-mt-32 md:scroll-mt-40 overflow-hidden">
    {/* Ghost background text */}
    <div className="absolute top-4 left-0 w-full select-none pointer-events-none opacity-[0.03] flex justify-center lg:justify-start">
      <span className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter whitespace-nowrap">
        {title}
      </span>
    </div>

    <div className="relative z-10">
      <h2 className="text-2xl md:text-4xl text-navy mb-12 font-black uppercase tracking-tighter">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col group">
            <div className="flex justify-between items-baseline mb-2">
              <div className="flex items-center gap-3">
                <span className="text-lg md:text-xl font-black text-navy uppercase leading-none tracking-tight">
                  {item.name}
                </span>
                <div className="flex gap-1">
                  {item.allergens?.map((a: string) => <AllergenBadge key={a} label={a} />)}
                </div>
              </div>
              <div className="flex-grow mx-4 border-b-2 border-dotted border-gray-200 mb-1"></div>
              <span className="text-lg md:text-xl font-black text-sand shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-gray-500 font-bold text-sm md:text-base leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Menu: React.FC<MenuProps> = ({ onOrder }) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== '#menu') {
      const id = hash.split('#').pop();
      const element = document.getElementById(id || '');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleCategoryJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#menu#${id}`);
    }
  };

  const menuCategories = [
    { label: 'Brunch', id: 'brunch' },
    { label: 'Appetizers', id: 'apps' },
    { label: 'Burgers', id: 'burgers' },
    { label: 'Mains', id: 'mains' },
    { label: 'Drinks', id: 'drinks' }
  ];

  return (
    <div className="bg-cream min-h-screen pb-32">
      <div className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl mb-4 tracking-tighter">Our Menu</h1>
        <p className="text-sand text-lg md:text-xl font-bold uppercase tracking-[0.2em]">
          Fresh. Simple. Local.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Grid - matching screenshot layout */}
        <div className="sticky top-20 md:top-24 z-20 bg-cream/95 py-6 backdrop-blur-md mb-12">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">
            {menuCategories.map((cat, idx) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => handleCategoryJump(e, cat.id)}
                className={`bg-navy text-white px-4 py-4 font-black text-center text-[10px] md:text-xs uppercase tracking-widest hover:bg-sand hover:text-navy transition-all border border-navy shadow-sm ${
                  idx >= 3 && menuCategories.length === 5 ? 'col-span-1' : ''
                }`}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>

        {/* Allergen Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <div className="flex items-center gap-2">
            <AllergenBadge label="V" /> Vegetarian
          </div>
          <div className="flex items-center gap-2">
            <AllergenBadge label="GF" /> Gluten-Free
          </div>
          <div className="flex items-center gap-2">
            <AllergenBadge label="N" /> Contains Nuts
          </div>
        </div>

        <MenuSection title="Daily Brunch" id="brunch" items={FULL_MENU.brunch} />
        <MenuSection title="Appetizers" id="apps" items={FULL_MENU.apps} />
        <MenuSection title="Burgers" id="burgers" items={FULL_MENU.burgers} />
        <MenuSection title="Comfort Mains" id="mains" items={FULL_MENU.mains} />
        <MenuSection title="Drinks" id="drinks" items={FULL_MENU.drinks} />

        <div className="py-24 text-center">
          <p className="text-navy/50 font-bold uppercase tracking-widest text-xs mb-8">
            All prices subject to change. Everything is prepared fresh in our kitchen.
          </p>
          <button
            onClick={onOrder}
            className="inline-block bg-sand text-navy px-12 py-6 font-black uppercase tracking-widest text-sm shadow-xl hover:bg-navy hover:text-white transition-all transform hover:-translate-y-1"
          >
            Start Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
