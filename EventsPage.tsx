
import React, { useEffect } from 'react';
import { EVENTS } from './constants';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl mb-4">Events</h1>
        <p className="text-sand text-lg md:text-xl font-bold uppercase tracking-widest">
          What's happening at the house.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Weekly Recurring Section */}
        <section className="mb-20">
          <div className="border-l-8 border-sand pl-6 mb-12">
            <h2 className="text-4xl md:text-6xl text-navy uppercase font-black tracking-tighter">Weekly Specials</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2">Mark your calendar for these regulars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-navy mb-4">Neighborhood Trivia</h3>
              <p className="text-gray-600 font-bold mb-6">Every Tuesday at 7:00 PM. Grab a team or join one at the bar. We serve $5 draft beers all night.</p>
              <div className="flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest">
                <Clock size={16} className="text-sand" />
                Tuesdays, 7PM - 9PM
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-navy mb-4">Burger Night</h3>
              <p className="text-gray-600 font-bold mb-6">Every Wednesday. $10 Smash Burgers and $3 fries. It’s the busiest night of the week for a reason.</p>
              <div className="flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest">
                <Clock size={16} className="text-sand" />
                Wednesdays, All Day
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-navy mb-4">Friday Night Jazz</h3>
              <p className="text-gray-600 font-bold mb-6">Local Cincinnati musicians play live in the dining room. Relaxed vibes, full menu available.</p>
              <div className="flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest">
                <Clock size={16} className="text-sand" />
                Fridays, 8PM - 11PM
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl text-navy mb-4">Game Day Brunch</h3>
              <p className="text-gray-600 font-bold mb-6">We show all the local games on our screens. $5 Mimosas and $6 Bloody Marys.</p>
              <div className="flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest">
                <Clock size={16} className="text-sand" />
                Sundays, 10AM - 3PM
              </div>
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section className="mb-20">
          <div className="border-l-8 border-navy pl-6 mb-12">
            <h2 className="text-4xl md:text-6xl text-navy uppercase font-black tracking-tighter">Upcoming Events</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-2">Specific dates and community gatherings.</p>
          </div>

          <div className="space-y-6">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-navy text-white p-8 md:flex justify-between items-center group">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-2 text-sand mb-2">
                    <Calendar size={18} />
                    <span className="font-bold uppercase tracking-widest text-xs">{event.date}</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-2">{event.title}</h3>
                  <p className="text-white/70 font-bold max-w-2xl">{event.description}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sand font-black text-xs uppercase tracking-widest border-2 border-sand px-6 py-3 group-hover:bg-sand group-hover:text-navy transition-all cursor-default">
                    Walk-ins Only
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private Events CTA */}
        <section className="bg-sand p-12 text-center md:text-left md:flex justify-between items-center">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">Host Your Own</h2>
            <p className="text-navy font-bold text-lg">Our dining room is available for holiday parties, birthdays, and local meetups. We don't charge a "room fee"—just a minimum food and drink spend.</p>
          </div>
          <a
            href="tel:5135550123"
            className="inline-block bg-navy text-white px-10 py-5 font-black uppercase tracking-widest text-sm shadow-lg hover:bg-white hover:text-navy transition-all"
          >
            Call To Book
          </a>
        </section>
      </div>
    </div>
  );
};

export default EventsPage;
