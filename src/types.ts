export interface HomeServiceCard {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  number: string;
  heroImage: string;
}

export interface TechniqueComparison {
  name: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  galleryImages: string[];
  comparisonTitle: string;
  comparisonIntro: string;
  techniques: TechniqueComparison[];
  aftercare: string;
  aftercareUrl?: string;
  faqs: FAQItem[];
}

export interface TestimonialItem {
  id: string;
  cardType: 'review' | 'image' | 'link';
  quote?: string;
  text?: string;
  author?: string;
  tag?: string;
  number?: string;
  image?: string;
  sourceUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  previewImage?: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  treatment: string;
  experienceGoal: string;
  tellUsMore: string;
  date: string;
  time: string;
  message: string;
}
