
import React, { useState, useEffect } from 'react';
import { FULL_MENU } from './constants';
import { ShoppingBag, Plus, Minus, Trash2, ChevronRight, X, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const AllergenBadge: React.FC<{ label: string }> = ({ label }) => {
  const getColors = () => {
    switch (label) {
      case 'V': return 'bg-green-100 text-green-800 border-green-200';
      case 'GF': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'N': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`text-[9px] font-black px-1 py-0.5 border rounded leading-none ${getColors()}`}>
      {label}
    </span>
  );
};

const OrderPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('apps');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (name: string, priceStr: string) => {
    const price = parseFloat(priceStr.replace('$', ''));
    setCart(prev => {
      const existing = prev.find(item => item.name === name);
      if (existing) {
        return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { name, price, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.name === name) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const categories = [
    { id: 'apps', label: 'Appetizers' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'brunch', label: 'Daily Brunch' },
    { id: 'mains', label: 'Mains' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const handleFinalCheckout = () => {
    setIsConfirming(false);
    setIsCheckingOut(true);
  };

  if (isCheckingOut) {
    return (
      <div className="bg-cream min-h-screen py-20 px-4">
        <div className="max-w-md mx-auto bg-white border-2 border-navy p-8 text-center shadow-2xl">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-black uppercase text-navy mb-4">Order Received</h2>
          <p className="text-gray-600 font-bold mb-8">
            Your order has been sent to our kitchen. Estimated pickup time is 20-25 minutes.
          </p>
          <div className="bg-cream p-6 border border-gray-100 text-left mb-8">
            <p className="font-black text-xs uppercase text-gray-400 mb-2">Order Summary</p>
            {cart.map(item => (
              <div key={item.name} className="flex justify-between text-sm font-bold text-navy mb-1">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-black text-navy">
              <span>Total Paid</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => {
                setCart([]);
                setIsCheckingOut(false);
                window.location.hash = '';
              }}
              className="w-full bg-navy text-white py-4 font-black uppercase tracking-widest text-sm hover:bg-sand hover:text-navy transition-all"
            >
              Back to Home
            </button>
            <button 
              onClick={() => {
                setCart([]);
                setIsCheckingOut(false);
              }}
              className="w-full border-2 border-navy text-navy py-4 font-black uppercase tracking-widest text-sm hover:bg-navy hover:text-white transition-all"
            >
              New Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Header */}
      <div className="bg-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <div className="flex items-center gap-6">
             <button 
              onClick={() => window.location.hash = ''} 
              className="hidden lg:flex items-center gap-2 text-sand font-black uppercase text-xs tracking-widest hover:text-white"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <div>
              <h1 className="text-4xl md:text-6xl mb-2">Order Online</h1>
              <p className="text-sand text-xs md:text-sm font-black uppercase tracking-widest">
                Pickup from 123 Over-The-Rhine St.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-sand text-navy p-4 rounded-full shadow-lg md:hidden"
          >
            <ShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-navy text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-navy">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-32 h-fit space-y-2">
          <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-4 px-4">Categories</h4>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`w-full text-left px-4 py-3 font-black uppercase text-xs tracking-widest transition-all ${
                activeCategory === cat.id ? 'bg-navy text-white' : 'hover:bg-sand/20 text-navy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </aside>

        {/* Menu Items */}
        <div className="flex-grow">
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar sticky top-20 bg-cream/95 z-20 pt-2 backdrop-blur-sm">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 font-black uppercase text-[10px] tracking-widest border-2 ${
                  activeCategory === cat.id ? 'bg-navy border-navy text-white' : 'border-gray-200 text-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(FULL_MENU as any)[activeCategory].map((item: any, idx: number) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 flex flex-col justify-between group hover:shadow-md transition-shadow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-black uppercase text-navy leading-tight">{item.name}</h3>
                      <div className="flex gap-1 flex-wrap">
                        {item.allergens?.map((a: string) => <AllergenBadge key={a} label={a} />)}
                      </div>
                    </div>
                    <span className="font-bold text-sand shrink-0">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-bold leading-snug mb-6">{item.description}</p>
                </div>
                <button
                  onClick={() => addToCart(item.name, item.price)}
                  className="w-full border-2 border-navy text-navy py-3 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={14} /> Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Cart Sidebar */}
        <aside className="hidden md:block w-80 shrink-0 sticky top-32 h-fit bg-white border-2 border-navy shadow-xl">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-black uppercase text-navy tracking-tighter text-xl">Your Order</h3>
            <span className="bg-sand text-navy text-[10px] font-black px-2 py-1 uppercase">{totalItems} Items</span>
          </div>
          
          <div className="p-6 max-h-[400px] overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-10 space-y-4">
                <p className="text-gray-400 font-bold italic">Your bag is empty.</p>
                <button 
                  onClick={() => window.location.hash = 'menu'}
                  className="text-[10px] font-black uppercase tracking-widest text-sand hover:text-navy underline underline-offset-4"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.name} className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-black text-navy text-sm uppercase leading-tight">{item.name}</p>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.name, -1)} className="text-sand hover:text-navy"><Minus size={14} /></button>
                      <span className="font-black text-xs">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.name, 1)} className="text-sand hover:text-navy"><Plus size={14} /></button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-navy text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.name)} className="text-gray-300 hover:text-red-500 mt-1"><Trash2 size={12} /></button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-6 bg-cream border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <span className="font-black uppercase text-xs text-gray-400">Subtotal</span>
              <span className="font-black text-xl text-navy">${subtotal.toFixed(2)}</span>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={() => setIsConfirming(true)}
              className={`w-full py-4 font-black uppercase text-xs tracking-widest shadow-lg flex items-center justify-center gap-2 transition-all ${
                cart.length === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-sand text-navy hover:bg-navy hover:text-white'
              }`}
            >
              Checkout <ChevronRight size={16} />
            </button>
          </div>
        </aside>
      </div>

      {/* Confirmation Dialog Overlay */}
      {isConfirming && (
        <div className="fixed inset-0 z-[150] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg border-4 border-navy shadow-2xl overflow-hidden">
            <div className="bg-navy text-white p-6 flex justify-between items-center">
              <h3 className="font-black uppercase text-xl tracking-tighter">Confirm Your Order</h3>
              <button onClick={() => setIsConfirming(false)} className="hover:text-sand"><X size={24} /></button>
            </div>
            
            <div className="p-8">
              <div className="mb-6 space-y-4 max-h-[30vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.name} className="flex justify-between items-start border-b border-gray-100 pb-3 last:border-0">
                    <div>
                      <p className="font-black text-navy uppercase text-sm">{item.name}</p>
                      <p className="text-xs font-bold text-gray-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-navy">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cream p-6 border-t-2 border-navy/10 space-y-2 mb-8">
                <div className="flex justify-between text-gray-500 font-bold text-sm uppercase">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-bold text-sm uppercase">
                  <span>Tax (Estimated)</span>
                  <span>${(subtotal * 0.07).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-navy font-black text-2xl uppercase pt-2 border-t border-navy/5">
                  <span>Total</span>
                  <span>${(subtotal * 1.07).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsConfirming(false)}
                  className="flex-1 border-2 border-navy text-navy py-4 font-black uppercase text-xs tracking-widest hover:bg-gray-50 transition-all"
                >
                  Go Back
                </button>
                <button
                  onClick={handleFinalCheckout}
                  className="flex-1 bg-sand text-navy py-4 font-black uppercase text-xs tracking-widest shadow-lg hover:bg-navy hover:text-white transition-all"
                >
                  Place Order & Pay
                </button>
              </div>
              <p className="mt-4 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                This is a simulated transaction. No actual payment will be processed.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[110] bg-black/60 md:hidden flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-black uppercase text-navy text-2xl tracking-tighter">Your Bag</h3>
              <button onClick={() => setIsCartOpen(false)} className="p-2" aria-label="Close Cart"><X size={24} /></button>
            </div>

            <div className="space-y-6 mb-10">
              {cart.length === 0 ? (
                <p className="text-gray-400 font-bold text-center py-12 italic">Your bag is empty.</p>
              ) : (
                cart.map(item => (
                  <div key={item.name} className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="font-black text-navy uppercase">{item.name}</p>
                      <div className="flex items-center gap-4">
                        <button onClick={() => updateQuantity(item.name, -1)} className="border-2 border-gray-200 p-1" aria-label="Decrease quantity"><Minus size={16} /></button>
                        <span className="font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.name, 1)} className="border-2 border-gray-200 p-1" aria-label="Increase quantity"><Plus size={16} /></button>
                      </div>
                    </div>
                    <p className="font-black text-navy">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-black uppercase text-sm text-gray-400">Total</span>
                <span className="font-black text-3xl text-navy">${subtotal.toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={() => {
                  setIsCartOpen(false);
                  setIsConfirming(true);
                }}
                className={`w-full py-5 font-black uppercase text-sm tracking-widest shadow-lg ${
                  cart.length === 0 ? 'bg-gray-200 text-gray-400' : 'bg-sand text-navy'
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
