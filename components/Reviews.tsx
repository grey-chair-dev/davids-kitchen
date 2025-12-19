
import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl text-navy mb-12">What Locals Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-8 bg-cream border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#D2B48C"
                    color="#D2B48C"
                  />
                ))}
              </div>
              <p className="text-navy font-bold text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="font-black text-gray-500 uppercase text-xs tracking-widest">— {review.author}</p>
            </div>
          ))}
        </div>
        
        <a
          href="https://maps.google.com"
          target="_blank"
          className="inline-block px-8 py-4 bg-navy text-white font-black uppercase text-xs tracking-widest"
        >
          View All Reviews
        </a>
      </div>
    </section>
  );
};

export default Reviews;
