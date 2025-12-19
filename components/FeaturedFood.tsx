
import React from 'react';
import { FEATURED_FOOD } from '../constants';

const FeaturedFood: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-navy mb-12">What We're Known For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_FOOD.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-200 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl text-navy mb-4">{card.title}</h3>
                <ul className="mb-8 space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex justify-between font-bold text-gray-700">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={card.link}
                  className="block w-full text-center py-4 bg-navy text-white font-black uppercase text-xs tracking-widest"
                >
                  View {card.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFood;
