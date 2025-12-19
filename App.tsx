
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedFood from './components/FeaturedFood';
import Reviews from './components/Reviews';
import Events from './components/Events';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import MobileFloatingCall from './components/MobileFloatingCall';
import Menu from './Menu';
import EventsPage from './EventsPage';
import LocationPage from './LocationPage';
import ContactPage from './ContactPage';
import OrderPage from './OrderPage';

export type Page = 'home' | 'menu' | 'events' | 'location' | 'contact' | 'order';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('menu')) {
        setCurrentPage('menu');
      } else if (hash.includes('events-page')) {
        setCurrentPage('events');
      } else if (hash.includes('location-page')) {
        setCurrentPage('location');
      } else if (hash.includes('contact-page')) {
        setCurrentPage('contact');
      } else if (hash.includes('order')) {
        setCurrentPage('order');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    if (page === 'home') window.location.hash = '';
    else if (page === 'menu') window.location.hash = 'menu';
    else if (page === 'events') window.location.hash = 'events-page';
    else if (page === 'location') window.location.hash = 'location-page';
    else if (page === 'contact') window.location.hash = 'contact-page';
    else if (page === 'order') window.location.hash = 'order';
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <Features />
            <FeaturedFood />
            <Reviews />
            <Events onSeeAll={() => navigateTo('events')} />
            <LocationHours onSeeMore={() => navigateTo('location')} onOrder={() => navigateTo('order')} />
          </>
        )}
        {currentPage === 'menu' && <Menu onOrder={() => navigateTo('order')} />}
        {currentPage === 'events' && <EventsPage />}
        {currentPage === 'location' && <LocationPage onOrder={() => navigateTo('order')} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'order' && <OrderPage />}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <MobileFloatingCall onNavigate={navigateTo} />
    </div>
  );
};

export default App;
