
import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl mb-4">Contact Us</h1>
        <p className="text-sand text-lg md:text-xl font-bold uppercase tracking-widest">
          Get in touch with the team.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div className="border-l-8 border-sand pl-6">
              <h2 className="text-3xl md:text-5xl text-navy uppercase font-black tracking-tighter mb-4">Immediate Help?</h2>
              <p className="text-gray-600 font-bold">For takeout orders, table availability, or same-day reservations, please call the restaurant directly. Email is checked daily for general inquiries and event bookings.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <div className="text-sand mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl text-navy font-black uppercase mb-2">Phone</h3>
                <a href="tel:5135550123" className="text-navy font-bold hover:text-sand transition-colors">(513) 555-0123</a>
              </div>

              <div className="bg-white border border-gray-200 p-8 shadow-sm">
                <div className="text-sand mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl text-navy font-black uppercase mb-2">Email</h3>
                <a href="mailto:hello@davidskitchenotr.com" className="text-navy font-bold hover:text-sand transition-colors">hello@davidskitchenotr.com</a>
              </div>
            </div>

            <div className="bg-navy text-white p-8">
              <h3 className="text-2xl font-black uppercase mb-4 text-sand">Large Parties & Events</h3>
              <p className="font-bold text-white/80 mb-6 leading-relaxed">Planning a birthday or a corporate lunch? We accommodate parties of 10 or more with a fixed menu or family-style service. Use the form to give us the details.</p>
              <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest border-t border-white/10 pt-6">
                <MessageSquare size={18} className="text-sand" />
                Response time: Within 24 hours
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-2 border-navy p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="bg-sand text-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h2 className="text-3xl font-black uppercase text-navy mb-4">Message Sent</h2>
                <p className="text-gray-600 font-bold mb-8">Thanks for reaching out. A manager will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-navy text-white px-8 py-4 font-black uppercase text-xs tracking-widest"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-cream border-2 border-gray-100 p-4 focus:border-navy outline-none font-bold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-cream border-2 border-gray-100 p-4 focus:border-navy outline-none font-bold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Subject</label>
                  <select className="w-full bg-cream border-2 border-gray-100 p-4 focus:border-navy outline-none font-bold appearance-none">
                    <option>General Inquiry</option>
                    <option>Large Party Booking</option>
                    <option>Careers / Hiring</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    className="w-full bg-cream border-2 border-gray-100 p-4 focus:border-navy outline-none font-bold resize-none"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-navy text-white py-5 font-black uppercase tracking-widest text-sm hover:bg-sand hover:text-navy transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
