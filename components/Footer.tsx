
import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-white text-navy pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button 
              onClick={() => onNavigate('home')}
              className="p-2 rounded-sm inline-block"
            >
              <img 
                src="/logo.png" 
                alt="David's Kitchen + Bar Logo" 
                className="h-20 w-auto"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </button>
            <div className="text-navy/70 font-bold space-y-1">
              <p>123 Over-The-Rhine St</p>
              <p>Cincinnati, OH 45202</p>
              <p className="pt-4 font-black text-navy">(513) 555-0123</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-navy hover:text-sand" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-navy hover:text-sand" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-navy hover:text-sand" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-black uppercase text-xs tracking-widest text-sand">Join Our Rewards</h4>
            <p className="text-navy/70 font-bold">Earn $5 off every 100 points. Get specials delivered to your inbox.</p>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-sand font-black uppercase text-xs tracking-widest bg-navy/5 p-4 border border-navy/10">
                <CheckCircle2 size={18} /> You're on the list.
              </div>
            ) : (
              <form className="flex" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-navy/5 border border-navy/20 px-4 py-3 text-navy focus:outline-none focus:border-sand flex-grow placeholder:text-navy/30"
                  required
                />
                <button
                  type="submit"
                  className="bg-sand text-navy px-8 py-3 font-black uppercase text-xs tracking-widest hover:bg-navy hover:text-white transition-all"
                >
                  Join
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <h4 className="font-black uppercase text-xs tracking-widest text-sand">Quick Links</h4>
            <ul className="space-y-4 font-bold text-xs uppercase tracking-widest">
              <li><button onClick={() => onNavigate('menu')} className="text-navy hover:text-sand text-left uppercase">Menu</button></li>
              <li><button onClick={() => onNavigate('order')} className="text-navy hover:text-sand text-left uppercase">Order Online</button></li>
              <li><button onClick={() => onNavigate('events')} className="text-navy hover:text-sand text-left uppercase">Events</button></li>
              <li><button onClick={() => onNavigate('location')} className="text-navy hover:text-sand text-left uppercase">Location</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-navy hover:text-sand text-left uppercase">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/40 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} David's Kitchen Cincinnati.
          </p>
          <span className="text-navy/20 text-[10px] font-bold uppercase tracking-[.3em]">Powered by Toast</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
