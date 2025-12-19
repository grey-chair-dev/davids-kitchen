
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-xl mb-2 text-navy">Brunch every day</h3>
            <p className="text-gray-600 font-bold">Starting at 10AM. Full menu available.</p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-xl mb-2 text-navy">Signature burgers</h3>
            <p className="text-gray-600 font-bold">House-ground beef, smash style, zero pretense.</p>
          </div>
          <div className="border-l-4 border-navy pl-6">
            <h3 className="text-xl mb-2 text-navy">Full bar & beer</h3>
            <p className="text-gray-600 font-bold">Craft cocktails and local draft beers.</p>
          </div>
        </div>
        <p className="text-navy text-xl font-black text-left">
          Come solo or with friends — seat yourself at the bar or grab a table.
        </p>
      </div>
    </section>
  );
};

export default Features;
