import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GalleryReviewsPage } from './pages/GalleryReviewsPage';
import { CoursesPage } from './pages/CoursesPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LEGACY_SERVICE_ALIASES, updateDocumentMetadata } from './data/routes';
import { STUDIO_INFO } from './data/siteData';

interface AppProps {
  initialPath?: string;
}

export default function App({ initialPath }: AppProps = {}) {
  const [currentPath, setCurrentPath] = useState<string>(() => initialPath ?? window.location.pathname ?? '/');

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname || '/');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => updateDocumentMetadata(currentPath), [currentPath]);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openBooking = () => {
    window.open(STUDIO_INFO.bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const renderPage = () => {
    const normalized = currentPath.replace(/\/+$/, '') || '/';

    if (normalized === '/') return <HomePage onNavigate={navigate} onOpenBooking={openBooking} />;
    if (normalized === '/about' || normalized === '/studio') return <AboutPage onOpenBooking={openBooking} onNavigate={navigate} />;
    if (normalized === '/gallery-reviews' || normalized === '/gallery' || normalized === '/testimonials') return <GalleryReviewsPage onNavigate={navigate} onOpenBooking={openBooking} />;
    if (normalized === '/courses') return <CoursesPage onNavigate={navigate} onOpenBooking={openBooking} />;
    if (normalized === '/contact' || normalized === '/booking') return <ContactPage onOpenBooking={openBooking} />;

    if (normalized.startsWith('/services/')) {
      const requestedSlug = normalized.replace('/services/', '');
      const slug = LEGACY_SERVICE_ALIASES[requestedSlug] ?? requestedSlug;
      return <ServiceDetailPage slug={slug} onOpenBooking={openBooking} onNavigate={navigate} />;
    }

    if (normalized === '/privacy-policy' || normalized === '/legal/privacy-policy') return <LegalPage type="privacy" onNavigate={navigate} />;
    if (normalized === '/terms-of-service' || normalized === '/legal/terms-of-service') return <LegalPage type="terms" onNavigate={navigate} />;
    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="relative min-h-screen bg-[#372629] text-[#fff8f6] flex flex-col font-sans-ui selection:bg-[#d6929e] selection:text-[#372629]">
      <div className="fixed inset-0 pointer-events-none grain-overlay z-30" aria-hidden="true" />
      <Navbar currentPath={currentPath} onNavigate={navigate} onOpenBooking={openBooking} />
      <main className="flex-1 w-full">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
