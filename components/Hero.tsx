
import React, { useEffect, useState } from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState("Open now until 11PM");

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 10 && hour < 23) {
        setStatus("Open now until 11PM");
      } else {
        setStatus("Closed — Opens at 10AM");
      }
    };
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1600"
          alt="David's Kitchen Burger"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <h1 className="text-white text-5xl md:text-8xl mb-2 max-w-2xl">
          Brunch. Burgers. Dinner.
        </h1>
        <p className="text-white text-lg md:text-xl max-w-lg mb-8 font-bold">
          Cincinnati’s neighborhood spot for comfort food and cocktails.
        </p>
        
        <div className="flex flex-col sm:row gap-4 mb-8 w-full sm:w-auto">
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('menu')}
              className="flex-1 sm:flex-none px-8 py-4 bg-white text-navy font-black text-center text-sm uppercase tracking-widest"
            >
              View Menu
            </button>
            <button
              onClick={() => onNavigate('order')}
              className="flex-1 sm:flex-none px-8 py-4 bg-sand text-navy font-black text-center text-sm uppercase tracking-widest"
            >
              Order Online
            </button>
          </div>
        </div>

        <div className="text-navy bg-sand px-4 py-2 font-black text-sm uppercase tracking-widest">
          {status}
        </div>
      </div>
    </section>
  );
};

export default Hero;
