
import React, { useEffect } from 'react';
import { MapPin, Phone, Car, Clock, ExternalLink } from 'lucide-react';

interface LocationPageProps {
  onOrder?: () => void;
}

const LocationPage: React.FC<LocationPageProps> = ({ onOrder }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl mb-4">Location & Hours</h1>
        <p className="text-sand text-lg md:text-xl font-bold uppercase tracking-widest">
          The house with the parking lot in OTR.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact & Directions Block */}
          <div className="space-y-12">
            <div className="border-l-8 border-sand pl-6">
              <h2 className="text-3xl md:text-5xl text-navy uppercase font-black tracking-tighter mb-4">Find The House</h2>
              <p className="text-gray-600 font-bold">We are located in a converted residential building with a private parking lot right out front—a rare find in Over-The-Rhine.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-navy p-4 text-white">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs text-gray-400 mb-1">Our Address</h4>
                  <a 
                    href="https://maps.google.com?q=123+Over-The-Rhine+St+Cincinnati+OH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-navy font-black text-2xl hover:text-sand block leading-tight"
                  >
                    123 Over-The-Rhine St.<br />
                    Cincinnati, OH 45202
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-navy p-4 text-white">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs text-gray-400 mb-1">Call Us</h4>
                  <a 
                    href="tel:5135550123" 
                    className="text-navy font-black text-2xl hover:text-sand block"
                  >
                    (513) 555-0123
                  </a>
                  <p className="text-gray-500 font-bold text-sm mt-1">Call for takeout orders or large party inquiries.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-sand p-4 text-navy">
                  <Car size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs text-gray-400 mb-1">Parking Info</h4>
                  <p className="text-navy font-black text-2xl">Private Lot + Street Parking</p>
                  <p className="text-gray-500 font-bold text-sm mt-1">Our dedicated lot is free for customers. If it's full, there is metered parking on OTR St.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-navy text-white px-8 py-5 font-black uppercase text-xs tracking-widest text-center flex items-center justify-center gap-3 hover:bg-sand hover:text-navy transition-all shadow-lg"
              >
                Get Directions <ExternalLink size={16} />
              </a>
              <button
                onClick={onOrder}
                className="flex-1 border-4 border-navy text-navy px-8 py-5 font-black uppercase text-xs tracking-widest text-center hover:bg-navy hover:text-white transition-all"
              >
                Order Online
              </button>
            </div>
          </div>

          {/* Hours Block */}
          <div className="bg-white border-2 border-navy p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <Clock className="text-sand" size={32} />
              <h3 className="text-3xl text-navy font-black uppercase tracking-tighter">Service Hours</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Monday</span>
                <span className="font-bold text-gray-600">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Tuesday</span>
                <span className="font-bold text-gray-600">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Wednesday</span>
                <span className="font-bold text-gray-600">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Thursday</span>
                <span className="font-bold text-gray-600">10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-sand pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Friday</span>
                <span className="font-black text-navy">10:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b-2 border-sand pb-4">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Saturday</span>
                <span className="font-black text-navy">10:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-black text-navy uppercase tracking-widest text-sm">Sunday</span>
                <span className="font-bold text-gray-600">10:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="mt-10 p-6 bg-cream border border-gray-100">
              <p className="text-navy font-bold text-sm">
                <span className="text-sand font-black mr-2">Note:</span> 
                Kitchen closes 30 minutes before house doors close. Brunch is served daily until 3PM.
              </p>
            </div>
          </div>

        </div>

        {/* Map Placeholder/Image Section */}
        <div className="mt-16 border-2 border-navy overflow-hidden h-[400px] relative group">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
            alt="Neighborhood Map Area" 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-navy text-white p-8 shadow-2xl border-2 border-sand text-center">
              <p className="font-black uppercase tracking-widest text-xs mb-2 text-sand">Visit The House</p>
              <p className="font-black text-2xl uppercase">123 Over-The-Rhine St.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
