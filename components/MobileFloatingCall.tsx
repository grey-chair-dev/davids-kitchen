
import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { Page } from '../App';

interface MobileFloatingCallProps {
  onNavigate: (page: Page) => void;
}

const MobileFloatingCall: React.FC<MobileFloatingCallProps> = ({ onNavigate }) => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm flex gap-3">
      <a
        href="tel:5135550123"
        className="flex-1 flex items-center justify-center gap-3 bg-white text-navy border-2 border-navy py-4 px-6 rounded-full shadow-2xl font-bold uppercase tracking-widest text-xs"
        aria-label="Call to Order"
      >
        <Phone size={18} />
        Call To Order
      </a>
      <button
        onClick={() => onNavigate('order')}
        className="flex-1 flex items-center justify-center gap-3 bg-sand text-navy py-4 px-6 rounded-full shadow-2xl font-bold uppercase tracking-widest text-xs"
        aria-label="Order Online"
      >
        <ShoppingBag size={18} />
        Order Online
      </button>
    </div>
  );
};

export default MobileFloatingCall;
