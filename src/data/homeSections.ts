export interface HomePhoto {
  src: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  category?: 'Brows' | 'Cosmetic Tattoo' | 'Lashes' | 'Skin' | 'Studio';
}

export const LIVIA_PORTRAIT: HomePhoto = {
  src: '/images/home/livia-rego.webp',
  title: 'Meet Livia',
  alt: 'Portrait of Livia Rego, founder of Bella Beauty Brazil, in a black outfit against a light grey background.',
  width: 800,
  height: 1200,
};

// These five separate images are published in the official site's service imagery.
// Their aspect ratios remain intact in the editorial columns and the lightbox.
export const HOME_WORK_PHOTOS: HomePhoto[] = [
  {
    src: '/images/home/work-cosmetic-tattoo.webp',
    title: 'Cosmetic tattooing',
    alt: 'A lip pigmentation treatment in progress, photographed for Bella Beauty Brazil’s official service page.',
    width: 1170,
    height: 776,
    category: 'Cosmetic Tattoo',
  },
  {
    src: '/images/home/work-brows.webp',
    title: 'Brows',
    alt: 'Close-up of a face with defined brows and closed eyes in Bella Beauty Brazil’s published brows imagery.',
    width: 988,
    height: 761,
    category: 'Brows',
  },
  {
    src: '/images/home/work-lashes.webp',
    title: 'Lashes',
    alt: 'Close-up of an eye with defined lashes in Bella Beauty Brazil’s published lashes imagery.',
    width: 1027,
    height: 1384,
    category: 'Lashes',
  },
  {
    src: '/images/home/work-facial.webp',
    title: 'Facial treatments',
    alt: 'Black-gloved hands holding a facial treatment kit, photographed for the official Bella Beauty Brazil website.',
    width: 522,
    height: 789,
    category: 'Skin',
  },
  {
    src: '/images/home/work-studio.webp',
    title: 'In the studio',
    alt: 'Livia preparing a beauty treatment at work in a studio, in a photograph published by Bella Beauty Brazil.',
    width: 516,
    height: 653,
    category: 'Studio',
  },
];

// Instagram is login-gated in the browser. These are distinct official-website
// photographs, not fabricated posts, captions, dates or a live social feed.
export const FOLLOW_JOURNEY_PHOTOS: HomePhoto[] = [
  {
    src: '/images/home/journey-lip-blush.webp',
    title: 'Lip Blush imagery',
    alt: 'Beauty portrait used for the Lip Blush feature on the official Bella Beauty Brazil website.',
    width: 1400,
    height: 533,
  },
  {
    src: '/images/home/journey-beauty-portrait.webp',
    title: 'Beauty portrait',
    alt: 'Beauty portrait with a rose from Bella Beauty Brazil’s official website imagery.',
    width: 585,
    height: 732,
  },
  {
    src: '/images/home/journey-editorial.webp',
    title: 'Editorial beauty',
    alt: 'Editorial beauty portrait published on the Bella Beauty Brazil website.',
    width: 1400,
    height: 927,
  },
];
