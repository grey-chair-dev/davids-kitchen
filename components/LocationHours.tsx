
import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

interface LocationHoursProps {
  onSeeMore?: () => void;
  onOrder?: () => void;
}

const LocationHours: React.FC<LocationHoursProps> = ({ onSeeMore, onOrder }) => {
  return (
    <section id="location" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <h2 className="text-3xl md:text-5xl text-navy">Find Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-sand shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-black uppercase text-xs text-gray-400 mb-1">Address</h4>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    className="text-navy font-black text-xl hover:text-sand"
                  >
                    123 Over-The-Rhine St, Cincinnati, OH
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-sand shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-black uppercase text-xs text-gray-400 mb-1">Phone</h4>
                  <a 
                    href="tel:5135550123" 
                    className="text-navy font-black text-xl hover:text-sand"
                  >
                    (513) 555-0123
                  </a>
                </div>
              </div>

              <div className="bg-cream p-6 border border-gray-100">
                <h4 className="font-black uppercase text-xs text-gray-400 mb-4">Current Hours</h4>
                <div className="space-y-2 font-bold text-navy">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span>Sun–Thu</span>
                    <span>10AM–10PM</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Fri–Sat</span>
                    <span>10AM–11PM</span>
                  </div>
                </div>
                <button 
                  onClick={onSeeMore}
                  className="mt-4 text-[10px] font-black uppercase tracking-widest text-sand hover:text-navy transition-colors underline underline-offset-4"
                >
                  View Full Hours & Parking
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-navy text-white px-8 py-4 font-black uppercase text-xs tracking-widest text-center"
              >
                Get Directions
              </a>
              <button
                onClick={onOrder}
                className="flex-1 bg-sand text-navy px-8 py-4 font-black uppercase text-xs tracking-widest text-center"
              >
                Order Online
              </button>
            </div>
          </div>

          <div className="h-96 lg:h-auto bg-gray-100 border border-gray-200 overflow-hidden relative">
             <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Neighborhood Map" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute bottom-6 right-6 bg-navy text-white px-4 py-2 font-black uppercase text-[10px] tracking-widest">
              Private Parking Lot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
