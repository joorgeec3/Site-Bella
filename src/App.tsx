import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBookingWithTreatment = (treatment?: string) => {
    setSelectedTreatment(treatment);
    setIsBookingOpen(true);
  };

  // Route matching logic
  const renderPage = () => {
    const normalized = currentPath.replace(/\/+$/, '') || '/';

    if (normalized === '/' || normalized === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenBooking={() => openBookingWithTreatment()}
        />
      );
    }

    if (normalized === '/about' || normalized === '/studio') {
      return (
        <AboutPage
          onOpenBooking={() => openBookingWithTreatment()}
        />
      );
    }

    if (normalized === '/contact' || normalized === '/booking') {
      return <ContactPage />;
    }

    if (normalized.startsWith('/services/')) {
      const slug = normalized.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onOpenBooking={() => openBookingWithTreatment()}
          onNavigate={navigate}
        />
      );
    }

    if (normalized === '/privacy-policy' || normalized === '/legal/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigate} />;
    }

    if (normalized === '/terms-of-service' || normalized === '/legal/terms-of-service') {
      return <LegalPage type="terms" onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="relative min-h-screen bg-[#261511] text-[#f2f0e5] flex flex-col font-sans-ui selection:bg-[#ffd9a8] selection:text-[#261511]">
      {/* Subtle organic film grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none grain-overlay z-30" />

      {/* Main Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBooking={() => openBookingWithTreatment()}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {renderPage()}
      </main>

      {/* Signature Pistachio Giant Footer */}
      <Footer onNavigate={navigate} />

      {/* Interactive 3-Stage Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedTreatment}
      />
    </div>
  );
}
