
import React from 'react';
import { EVENTS } from '../constants';
import { Calendar } from 'lucide-react';

interface EventsProps {
  onSeeAll?: () => void;
}

const Events: React.FC<EventsProps> = ({ onSeeAll }) => {
  return (
    <section id="events" className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-sand mb-12">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {EVENTS.map((event) => (
            <div key={event.id} className="border border-white/10 p-8 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-2 text-sand mb-4">
                <Calendar size={18} />
                <span className="font-bold uppercase tracking-widest text-xs">{event.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">{event.title}</h3>
              <p className="text-white/70 font-bold leading-relaxed mb-6">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        
        <button
          onClick={onSeeAll}
          className="inline-block bg-sand text-navy px-8 py-3 font-black hover:bg-white transition-colors uppercase text-sm tracking-widest"
        >
          See All Events
        </button>
      </div>
    </section>
  );
};

export default Events;
