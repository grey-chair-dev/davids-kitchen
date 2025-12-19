
import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Menu', action: () => onNavigate('menu') },
    { name: 'Events', action: () => onNavigate('events') },
    { name: 'Location & Hours', action: () => onNavigate('location') },
    { name: 'Contact', action: () => onNavigate('contact') },
  ];

  return (
    <nav className="sticky-nav bg-white text-navy shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center group py-2"
              aria-label="Go to Home"
            >
              <div className="p-1 rounded-sm">
                <img 
                  src="/logo.png" 
                  alt="David's Kitchen + Bar" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    // Fallback to text if image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex flex-col leading-none text-left">
                          <span class="font-black text-2xl tracking-tighter text-navy">DAVID'S</span>
                          <span class="font-bold text-[10px] tracking-[0.3em] text-sand">KITCHEN + BAR</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`text-xs font-bold tracking-widest uppercase text-navy hover:text-sand transition-colors ${
                  (item.name === 'Menu' && currentPage === 'menu') ||
                  (item.name === 'Events' && currentPage === 'events') ||
                  (item.name === 'Location & Hours' && currentPage === 'location') ||
                  (item.name === 'Contact' && currentPage === 'contact') ? 'text-sand' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('order')}
              className={`px-6 py-2.5 font-black text-xs uppercase tracking-widest transition-all ${
                currentPage === 'order' ? 'bg-navy text-white' : 'bg-sand text-navy hover:bg-navy hover:text-white'
              }`}
            >
              Order Online
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-navy/10 px-4 pt-2 pb-8 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { item.action?.(); setIsOpen(false); }}
              className="block w-full text-left px-3 py-5 text-lg font-black uppercase text-navy border-b border-navy/10"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-6 px-3">
            <button
              onClick={() => { onNavigate('order'); setIsOpen(false); }}
              className="block w-full bg-sand text-navy text-center py-4 font-black uppercase tracking-widest"
            >
              Order Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
