import React from 'react';
import { renderToString } from 'react-dom/server';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import App from '../src/App.tsx';
import { businessStructuredData, canonicalForRoute, SITE_ORIGIN, SITE_ROUTES } from '../src/data/routes.ts';
import { COURSE_OPTIONS, SERVICE_PAGES, STUDIO_INFO } from '../src/data/siteData.ts';

const distDir = join(process.cwd(), 'dist');
const shell = await readFile(join(distDir, 'index.html'), 'utf8');
const xmlEscape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const jsonLdString = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
const headTag = (name: string, attr: 'name' | 'property', content: string) => `<meta ${attr}="${name}" content="${content.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}" />`;
const canonicalHref = (path: string) => `${SITE_ORIGIN}${path === '/' ? '/' : path}`;

const buildStructuredData = (path: string, route: (typeof SITE_ROUTES)[number] | undefined) => {
  const canonical = route ? canonicalForRoute(route) : SITE_ORIGIN;
  const schemas: Record<string, unknown>[] = [businessStructuredData, {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route?.title ?? 'Page not found | Bella Beauty Brazil',
    description: route?.description ?? 'The requested Bella Beauty Brazil page could not be found.',
    url: canonical,
    inLanguage: 'en-AU',
    isPartOf: { '@type': 'WebSite', name: 'Bella Beauty Brazil', url: `${SITE_ORIGIN}/` },
  }];

  const service = path.startsWith('/services/') ? SERVICE_PAGES.find((item) => path === `/services/${item.slug}` && item.slug !== 'training-courses') : undefined;
  if (service) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.category,
      description: service.subtitle,
      provider: { '@type': 'BeautySalon', name: STUDIO_INFO.name, url: `${SITE_ORIGIN}/` },
      areaServed: businessStructuredData.areaServed,
      url: canonical,
      ...(service.priceOptions?.length ? { offers: service.priceOptions.map((option) => ({
        '@type': 'Offer',
        name: option.label,
        price: String(option.amount),
        priceCurrency: 'AUD',
        url: STUDIO_INFO.bookingUrl,
      })) } : {}),
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question', name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  if (path === '/courses' || path === '/services/training-courses') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Bella Beauty Brazil — Training & Courses',
      numberOfItems: COURSE_OPTIONS.length,
      itemListElement: COURSE_OPTIONS.map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: course.title,
          provider: { '@type': 'BeautySalon', name: STUDIO_INFO.name },
          offers: { '@type': 'Offer', price: String(course.amount), priceCurrency: 'AUD', url: STUDIO_INFO.bookingUrl },
        },
      })),
    });
  }
  return schemas;
};

for (const route of SITE_ROUTES) {
  const htmlPath = route.path;
  const description = route.description;
  const canonical = canonicalForRoute(route);
  const robots = route.noindex ? 'noindex,follow' : 'index,follow';
  const matchingService = route.path.startsWith('/services/') ? SERVICE_PAGES.find((item) => route.path === `/services/${item.slug}`) : undefined;
  const socialImage = matchingService?.heroImage ?? 'https://static.wixstatic.com/media/26620d_9852d9679c5b40c580f3def211a6bf31~mv2.png';
  const metadata = [
    headTag('description', 'name', description),
    headTag('robots', 'name', robots),
    `<link rel="canonical" href="${xmlEscape(canonical)}" />`,
    headTag('og:title', 'property', route.title),
    headTag('og:description', 'property', description),
    headTag('og:url', 'property', canonical),
    headTag('og:image', 'property', socialImage),
    headTag('twitter:title', 'name', route.title),
    headTag('twitter:description', 'name', description),
    headTag('twitter:image', 'name', socialImage),
  ].join('\n    ');
  const markup = renderToString(<App initialPath={htmlPath} />);
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${xmlEscape(route.title)}</title>`);
  html = html.replace(/<meta name="description"[^>]*\/>/, '');
  html = html.replace(/<meta name="robots"[^>]*\/>/, '');
  html = html.replace(/<link rel="canonical"[^>]*\/>/, '');
  html = html.replace(/<meta property="og:(?:title|description|url|image)"[^>]*\/>/g, '');
  html = html.replace(/<meta name="twitter:(?:title|description|image)"[^>]*\/>/g, '');
  const structuredDataTag = `<script id="site-structured-data" type="application/ld+json">${jsonLdString(buildStructuredData(htmlPath, route))}</script>`;
  if (html.includes('id="site-structured-data"')) {
    html = html.replace(/<script id="site-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, structuredDataTag);
  } else {
    html = html.replace(/(<\/head>)/, `    ${structuredDataTag}\n  $1`);
  }
  html = html.replace(/(<\/head>)/, `    ${metadata}\n  $1`);
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const target = htmlPath === '/' ? join(distDir, 'index.html') : join(distDir, htmlPath.slice(1), 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

// Keep a static 404 document with useful Bella links and noindex instructions.
const notFoundMarkup = renderToString(<App initialPath="/404" />);
let notFound = shell.replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found | Bella Beauty Brazil</title>');
notFound = notFound.replace(/(<\/head>)/, `    ${headTag('robots', 'name', 'noindex,follow')}\n    ${headTag('description', 'name', 'The requested Bella Beauty Brazil page could not be found.')}\n  $1`);
notFound = notFound.replace('<div id="root"></div>', `<div id="root">${notFoundMarkup}</div>`);
await writeFile(join(distDir, '404.html'), notFound);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SITE_ROUTES.filter((route) => !route.noindex).map((route) => `  <url><loc>${xmlEscape(canonicalHref(route.path))}</loc></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(distDir, 'sitemap.xml'), sitemap);
const routeManifest = {
  canonicalOrigin: SITE_ORIGIN,
  prerenderedRoutes: SITE_ROUTES.map((route) => ({ path: route.path, canonical: canonicalForRoute(route), indexable: !route.noindex })),
  legacyAliases: Object.fromEntries(SITE_ROUTES.filter((route) => route.noindex && route.canonicalPath).map((route) => [route.path, route.canonicalPath])),
};
await writeFile(join(distDir, 'site-routes.json'), `${JSON.stringify(routeManifest, null, 2)}\n`);
console.log(`Prerendered ${SITE_ROUTES.length} routes; generated sitemap.xml and route manifest.`);
