import { SERVICE_PAGES, STUDIO_INFO } from './siteData';

export const SITE_ORIGIN = 'https://www.bellabeautybrazil.com.au';

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
}

const coreRoutes: SiteRoute[] = [
  { path: '/', title: 'Bella Beauty Brazil | Brows, Lip Blush & Beauty in Greenslopes', description: 'Explore brow, lash, lip blush, facial, waxing and training services by Livia Rego at Bella Beauty Brazil in Greenslopes, Brisbane.' },
  { path: '/about', title: 'About Livia Rego | Bella Beauty Brazil, Greenslopes', description: 'Meet Livia Rego and learn the story behind Bella Beauty Brazil, her beauty services and the studio in Greenslopes, Brisbane.' },
  { path: '/gallery-reviews', title: 'Gallery & Client Review | Bella Beauty Brazil', description: 'View published Bella Beauty Brazil service photos and an attributed client review. See brow, lash and beauty work by Livia Rego.' },
  { path: '/contact', title: 'Contact & Book | Bella Beauty Brazil, Greenslopes', description: 'Contact Livia Rego at Bella Beauty Brazil in Greenslopes, QLD, or open the official Timely page to check current services and appointments.' },
  { path: '/courses', title: 'Training & Courses | Bella Beauty Brazil', description: 'Ask Livia Rego about current beauty training and course information at Bella Beauty Brazil in Greenslopes, Brisbane.' },
  { path: '/privacy-policy', title: 'Privacy Policy | Bella Beauty Brazil', description: 'Read the privacy information for Bella Beauty Brazil.' },
  { path: '/terms-of-service', title: 'Terms of Service | Bella Beauty Brazil', description: 'Read the terms of service for Bella Beauty Brazil.' },
];

export const LEGACY_SERVICE_ALIASES: Record<string, string> = {
  'body-and-wellness': 'facial-treatments',
  'brow-lash': 'brow-sculpting-tint',
  'signature-nails': 'brow-sculpting-tint',
  'skin-waxing-care': 'waxing',
};

const serviceRoutes: SiteRoute[] = SERVICE_PAGES.filter((service) => service.slug !== 'training-courses').map((service) => ({
  path: `/services/${service.slug}`,
  title: `${service.title} | Bella Beauty Brazil, Greenslopes`,
  description: `${service.subtitle} Read service information, technique comparisons, official aftercare and FAQs from Bella Beauty Brazil in Greenslopes, Brisbane.`,
}));

const legacyRoutes: SiteRoute[] = [
  ...Object.entries(LEGACY_SERVICE_ALIASES).map(([oldSlug, newSlug]) => ({
  path: `/services/${oldSlug}`,
  title: `Service information | Bella Beauty Brazil`,
  description: 'This previously indexed Bella Beauty Brazil service URL remains available and points to the relevant current service information.',
  canonicalPath: `/services/${newSlug}`,
  noindex: true,
  })),
  { path: '/services/training-courses', title: 'Training & Courses | Bella Beauty Brazil', description: 'Course information and current offers are listed on the Bella Beauty Brazil Courses page.', canonicalPath: '/courses', noindex: true },
];

export const SITE_ROUTES: SiteRoute[] = [...coreRoutes, ...serviceRoutes, ...legacyRoutes, { path: '/booking', title: 'Contact & Book | Bella Beauty Brazil', description: 'Open the official Bella Beauty Brazil booking page and contact the Greenslopes studio.', canonicalPath: '/contact', noindex: true }];

export const INDEXABLE_ROUTES = SITE_ROUTES.filter((route) => !route.noindex);

export const routeForPath = (path: string): SiteRoute | undefined => {
  const normalized = path.replace(/\/+$/, '') || '/';
  return SITE_ROUTES.find((route) => route.path === normalized);
};

export const canonicalForRoute = (route: SiteRoute): string => {
  const canonicalPath = route.canonicalPath ?? route.path;
  return `${SITE_ORIGIN}${canonicalPath === '/' ? '/' : canonicalPath}`;
};

export const updateDocumentMetadata = (path: string): void => {
  if (typeof document === 'undefined') return;
  const route = routeForPath(path);
  const title = route?.title ?? 'Page not found | Bella Beauty Brazil';
  const description = route?.description ?? 'The requested Bella Beauty Brazil page could not be found.';
  document.title = title;

  const upsert = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  upsert('meta[name="description"]', 'name', 'description', description);
  upsert('meta[property="og:title"]', 'property', 'og:title', title);
  upsert('meta[property="og:description"]', 'property', 'og:description', description);
  upsert('meta[property="og:url"]', 'property', 'og:url', route ? canonicalForRoute(route) : SITE_ORIGIN);
  upsert('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  upsert('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  upsert('meta[name="robots"]', 'name', 'robots', route?.noindex || !route ? 'noindex,follow' : 'index,follow');

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = route ? canonicalForRoute(route) : SITE_ORIGIN;
};

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: STUDIO_INFO.name,
  founder: { '@type': 'Person', name: STUDIO_INFO.owner },
  url: `${SITE_ORIGIN}/`,
  telephone: STUDIO_INFO.phone,
  email: STUDIO_INFO.email,
  image: 'https://static.wixstatic.com/media/26620d_9852d9679c5b40c580f3def211a6bf31~mv2.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 3, 412 Logan Road',
    addressLocality: 'Greenslopes',
    addressRegion: 'QLD',
    postalCode: '4120',
    addressCountry: 'AU',
  },
  areaServed: STUDIO_INFO.serviceAreas.map((name) => ({ '@type': 'Place', name })),
  sameAs: [STUDIO_INFO.instagram, STUDIO_INFO.facebook],
  makesOffer: SERVICE_PAGES.filter((service) => service.slug !== 'training-courses').map((service) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: service.title, serviceType: service.category },
    url: `${SITE_ORIGIN}/services/${service.slug}`,
  })),
};

export const AI_DISCOVERY_TEXT = `# Bella Beauty Brazil\n\nBella Beauty Brazil is the beauty studio of Livia Rego at Suite 3, 412 Logan Road, Greenslopes, QLD 4120, Australia.\n\n- Website: ${SITE_ORIGIN}/\n- Contact: ${SITE_ORIGIN}/contact\n- Booking: ${STUDIO_INFO.bookingUrl}\n- Services: ${SERVICE_PAGES.map((service) => service.title).join(', ')}\n- Service area: ${STUDIO_INFO.serviceAreas.join(', ')}\n- Phone: ${STUDIO_INFO.phone}\n- Email: ${STUDIO_INFO.email}\n\nPublic information should be confirmed on the linked official pages. No opening hours, service prices, ratings or course dates are asserted here.\n\n## Pages\n${INDEXABLE_ROUTES.map((route) => `- [${route.title}](${SITE_ORIGIN}${route.path === '/' ? '/' : route.path}): ${route.description}`).join('\n')}\n`;
