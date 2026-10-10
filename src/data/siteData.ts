import { ServiceDetail, TeamMember, TestimonialItem, FAQItem } from '../types';

export const STUDIO_INFO = {
  name: 'Oria',
  tagline: 'Beauty Designed Around You',
  address: 'Rozengracht 207, 1016 LZ Amsterdam, Netherlands',
  phone: '+33 1 02 03 04 05',
  email: 'hello@oria-studio.com',
  hoursWeekday: 'Monday — Saturday: 10:00 — 20:00',
  hoursSunday: 'Sunday: Closed',
  openBadge: 'Open Mon — Sat 10:00 — 20:00',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  youtube: 'https://youtube.com',
  facebook: 'https://facebook.com',
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'body-and-wellness',
    slug: 'body-and-wellness',
    title: 'Body and Wellness',
    subtitle: 'Take care of your body, slow down and reconnect',
    startingPrice: 'From $59',
    number: '(01)',
    tagline: 'Treatments tailored to your body',
    heroImage: 'https://framerusercontent.com/images/g9MCl79KZ3q7N1ba5liIGYZTyjQ.webp',
    whyLoveTitle: 'A more intentional approach to well-being',
    whyLoveDescription:
      'At Oria, every body treatment is designed to slow things down, release tension and create a true moment of reconnection. We combine purposeful techniques with skin-nourishing formulas to restore balance from head to toe.',
    approachTitle: 'A more intentional approach to body care',
    approachDescription:
      'From customized pressure to soothing botanicals, every session is adapted to what your body needs on that particular day. You leave feeling restored, balanced and deeply relaxed.',
    treatments: [
      { name: 'Treatments tailored to your body', price: '$59', duration: '60 min', description: 'Personalized treatment focused on relieving accumulated stress and restoring natural rhythm.' },
      { name: 'Back & Neck Massage', price: '$49', duration: '45 min', description: 'Targeted deep relief for tense shoulders, neck stiffness and upper spine tension.' },
      { name: 'Full Body Scrub', price: '$65', duration: '50 min', description: 'Gentle mineral exfoliation that leaves skin silk-smooth and radiant.' },
      { name: 'Scalp Massage', price: '$39', duration: '30 min', description: 'Revitalizing acupressure massage stimulating circulation and soothing the mind.' },
      { name: 'Relaxation Ritual', price: '$79', duration: '75 min', description: 'A head-to-toe sensory experience with warming oils and rhythmic strokes.' },
      { name: 'Leg Relief', price: '$45', duration: '40 min', description: 'Decongesting, cooling therapy to relieve tired, heavy legs and improve circulation.' }
    ],
    benefits: [
      { title: 'Skin Renewal', description: 'Promotes cellular turnover and restores velvety softness.' },
      { title: 'Quiet Mind', description: 'Calms nervous system overload in a peaceful, quiet sanctuary.' },
      { title: 'Self-Care Ritual', description: 'A sacred pause in your week dedicated entirely to yourself.' }
    ],
    galleryImages: [
      'https://framerusercontent.com/images/xrIvS3U9ilJt94wAd2IclaB2vg.webp',
      'https://framerusercontent.com/images/d6FalmNQWu1tjjLFeaPASF4wbE.webp',
      'https://framerusercontent.com/images/8ML1NOrHKPysPX5MVl3kCaGuXM.webp',
      'https://framerusercontent.com/images/slmF3X1BQX5F1zK8d1mNkPiE90.webp'
    ]
  },
  {
    id: 'brow-lash',
    slug: 'brow-lash',
    title: 'Brow & Lash',
    subtitle: 'Natural enhancements designed to define, lift and balance your features.',
    startingPrice: 'From $48',
    number: '(02)',
    tagline: 'Tailored Enhancements',
    heroImage: 'https://framerusercontent.com/images/JcnBu1sDmZvH0TCDKnb4LPyuUMA.webp',
    whyLoveTitle: 'A more intentional approach to brow & lash care',
    whyLoveDescription:
      'We believe in accentuating your natural facial architecture rather than following rigid formulas. Precision mapping, feather-light tinting, and restorative lamination create effortless symmetry.',
    approachTitle: 'A more intentional approach to eye beauty',
    approachDescription:
      'Each appointment begins with a brief facial analysis to ensure your brows and lashes enhance your eyes naturally without ever looking harsh or artificial.',
    treatments: [
      { name: 'Tailored Enhancements', price: '48$', duration: '45 min', description: 'Full brow architecture, delicate wax or thread shaping, and custom tint.' },
      { name: 'Lash lift', price: '52$', duration: '50 min', description: 'Gentle lifting curl creating eye-opening radiance that lasts 6 to 8 weeks.' },
      { name: 'Lash bot treatment', price: '35$', duration: '30 min', description: 'Deep keratin infusion strengthening and conditioning natural lashes.' },
      { name: 'Classic lash extensions', price: '75$', duration: '75 min', description: 'One-to-one application for a clean, natural mascara-like enhancement.' },
      { name: 'Light volume extensions', price: '89$', duration: '90 min', description: 'Feather-soft handmade fans for subtle fullness and fluffy texture.' },
      { name: 'Precision waxing', price: '24$', duration: '20 min', description: 'Hygienic, gentle shaping removing stray hairs with calming aftercare.' }
    ],
    benefits: [
      { title: 'Natural Definition', description: 'Framing your gaze with soft lines that highlight eye shape.' },
      { title: 'Soft Volume', description: 'Weightless application preserving the health of natural hairs.' },
      { title: 'Effortless Beauty', description: 'Wake up ready with balanced symmetry every single morning.' }
    ],
    galleryImages: [
      'https://framerusercontent.com/images/vUXZB9qwvMCgxkGXk6wHmX4tE.webp',
      'https://framerusercontent.com/images/NdZR25KS2e7bQnHBatZI33yN2Y8.webp',
      'https://framerusercontent.com/images/6Xn9h0JBmnAmcvu994QvJ3S0JkQ.webp',
      'https://framerusercontent.com/images/5CxHugTiwGauPamAXj2QtL8dn7w.webp'
    ]
  },
  {
    id: 'signature-nails',
    slug: 'signature-nails',
    title: 'Signature Nails',
    subtitle: 'Refined nail care designed to combine beauty, precision and long-lasting wear.',
    startingPrice: 'From $68',
    number: '(03)',
    tagline: 'Structured Manicures',
    heroImage: 'https://framerusercontent.com/images/ryUDWV1zf3c5pigeVIU40fEkkM.webp',
    whyLoveTitle: 'A more intentional approach to nail care',
    whyLoveDescription:
      'We treat nails as a health ritual first. Combining meticulous dry Russian manicure techniques, organic cuticle treatments, and ultra-durable gel strengthening for impeccable finish.',
    approachTitle: 'A more intentional approach to nail beauty',
    approachDescription:
      'From clean nudist tones to bespoke minimal nail art, our manicures preserve natural nail integrity and withstand weeks of wear without chipping or lifting.',
    treatments: [
      { name: 'Structured Manicures', price: '68$', duration: '60 min', description: 'Our signature builder gel overlay providing strength, structure and high shine.' },
      { name: 'Semi-permanent manicure', price: '42$', duration: '45 min', description: 'Clean cuticle work and flawless polish cured under gentle low-heat LED.' },
      { name: 'Minimal nail art', price: '20$', duration: '20 min', description: 'Delicate micro-french, chrome glaze, or subtle organic line details.' },
      { name: 'Full manicure', price: '40$', duration: '40 min', description: 'Shaping, nourishing scrub, cuticle perfection and buffing or standard color.' },
      { name: 'Pedicure treatments', price: '45$', duration: '50 min', description: 'Foot bath, callus smoothing, cuticle grooming and hydrating massage.' },
      { name: 'Removal & nail care', price: '25$', duration: '30 min', description: 'Non-damaging e-file soak-off followed by restorative keratin oil treatment.' }
    ],
    benefits: [
      { title: 'Long-Lasting Wear', description: 'Formulas engineered to last 3 to 4 weeks with zero peeling.' },
      { title: 'Refined Details', description: 'Micro-precision cuticle lines and immaculate architectural apex.' },
      { title: 'Healthy Nail Focus', description: 'Zero acid primers, non-toxic products and restorative oils.' }
    ],
    galleryImages: [
      'https://framerusercontent.com/images/NopbWH0VhOm4NbcS8vSLk5OsNmc.webp',
      'https://framerusercontent.com/images/2eCBFlL5WSaFSykB3fWcCpk2LT0.webp',
      'https://framerusercontent.com/images/S1aYk5SMy8iCJWdUiYT95kfVx64.webp',
      'https://framerusercontent.com/images/DxXW9mC5vGSObsz9FovZzDPvZM.webp'
    ]
  },
  {
    id: 'skin-waxing-care',
    slug: 'skin-waxing-care',
    title: 'Skin & Waxing Care',
    subtitle: 'Gentle treatments designed to smooth, comfort and care for the skin.',
    startingPrice: 'From $45',
    number: '(04)',
    tagline: 'Gentle Techniques',
    heroImage: 'https://framerusercontent.com/images/4fEjiUGdLwYQv6JtlYBeRguxM.webp',
    whyLoveTitle: 'A more intentional approach to skin care',
    whyLoveDescription:
      'Hair removal should feel comfortable and skin-honoring. We utilize hypo-allergenic, low-temperature waxes with prebiotic soothing mists to leave delicate skin nourished.',
    approachTitle: 'A more intentional approach to smooth skin',
    approachDescription:
      'We prioritize skin barrier preservation above all. Each waxing treatment includes pre-cleansing, soothing botanical toners, and anti-inflammatory post-care.',
    treatments: [
      { name: 'Gentle Techniques', price: '45$', duration: '30 min', description: 'Custom hair removal with specialized low-temperature waxes for sensitive areas.' },
      { name: 'Arm waxing', price: '35$', duration: '30 min', description: 'Thorough hair removal from shoulder to wrist leaving skin silky smooth.' },
      { name: 'Bikini / Brazilian waxing', price: '50$', duration: '35 min', description: 'Quick, hygienic waxing with soothing lavender balm.' },
      { name: 'Facial waxing', price: '20$', duration: '15 min', description: 'Lip, chin or sideburn delicate hair removal with calming chamomile extract.' },
      { name: 'Post-wax care', price: '15$', duration: '15 min', description: 'Cooling hydro-jelly mask reducing erythema and calming follicles.' },
      { name: 'Skin prep exfoliation', price: '28$', duration: '20 min', description: 'Gentle enzymatic exfoliation preventing ingrown hairs and rough texture.' }
    ],
    benefits: [
      { title: 'Healthy Glow', description: 'Smooth, radiant skin with zero lingering redness or irritation.' },
      { title: 'Comfort & Care', description: 'Hypoallergenic formulas created for reactive and sensitive skin.' },
      { title: 'Personalized Care', description: 'Post-treatment instructions tailored to your skin type.' }
    ],
    galleryImages: [
      'https://framerusercontent.com/images/vJK6ruDx0WMd0zmSouLoPwHxps.webp',
      'https://framerusercontent.com/images/VBbUpAUEOdBMAALXxF3YIKjKGA.webp',
      'https://framerusercontent.com/images/wKRRAyICzjI1zA7u4zPkcNjX4.webp',
      'https://framerusercontent.com/images/vf10Oz7fatmCtZ2BtSCamgbAzM.webp'
    ]
  }
];

export const PETAL_SERVICES = [
  {
    id: 'brow-lash',
    title: 'Brow & Lash\nStudio',
    description: 'Defined brows,\neffortlessly enhanced',
    price: '€35',
    link: '/services/brow-lash',
  },
  {
    id: 'signature-nails',
    title: 'Signature Nail\nServices',
    description: 'Long-lasting,\nrefined nail care',
    price: '$45',
    link: '/services/signature-nails',
  },
  {
    id: 'smooth-skin',
    title: 'Smooth Skin',
    description: 'Silky skin with\nlasting results',
    price: '€25',
    link: '/services/skin-waxing-care',
  },
  {
    id: 'wellness-escape',
    title: 'Wellne\nEscap',
    description: 'Time reserved\nentirely for you',
    price: '€55',
    link: '/services/body-and-wellness',
  },
  {
    id: 'body-rituals',
    title: 'Body Rituals',
    description: 'Relaxation designed\naround you',
    price: '€60',
    link: '/services/body-and-wellness',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Fast, comfortable and surprisingly painless',
    text: 'Everything was done with so much care and precision. The treatment was efficient without ever feeling rushed, and the results lasted much longer than previous experiences I\'ve had elsewhere. You can immediately tell they care about quality and comfort.',
    author: 'Camille V.',
    isImageCard: false
  },
  {
    id: '2',
    image: 'https://framerusercontent.com/images/EFIb4igWqIzbFEyCZo3BFHgus2I.webp',
    tag: 'Brow Shaping',
    number: '(08)',
    isImageCard: true
  },
  {
    id: '3',
    quote: 'My brows finally look balanced and natural',
    text: 'I have tried several studios across Europe, but Oria is in a league of its own. My brows finally look symmetrical and soft, without looking artificial or overly defined. It completely transformed my morning routine.',
    author: 'Elena R.',
    isImageCard: false
  },
  {
    id: '4',
    image: 'https://framerusercontent.com/images/ryUDWV1zf3c5pigeVIU40fEkkM.webp',
    tag: 'Signature Designs',
    number: '(22)',
    isImageCard: true
  },
  {
    id: '5',
    quote: 'I walked out feeling lighter and completely relaxed',
    text: 'This was honestly one of the best massages I\'ve had in years. The pressure was perfectly adjusted, the atmosphere felt incredibly calming, and every part of the experience felt thoughtful. It felt like a complete reset for both body and mind.',
    author: 'Sophie M.',
    isImageCard: false
  },
  {
    id: '6',
    image: 'https://framerusercontent.com/images/LqhMir4S348J4zeD3yvidn9oAAA.webp',
    tag: 'Precision Waxing',
    number: '(15)',
    isImageCard: true
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need to book in advance?',
    answer: 'We recommend booking in advance to secure your preferred time and treatment, especially during busy periods and weekends.',
    previewImage: 'https://framerusercontent.com/images/JMzqaeUM3iexjgci97MQ7a4kLTc.webp',
  },
  {
    question: 'Which treatment is right for me?',
    answer: 'If you are unsure which treatment best suits your needs, our team will be happy to guide you and recommend the right option based on your preferences.',
    previewImage: 'https://framerusercontent.com/images/YvhNMBAxbLRNOGQAD1mELQMXSw.webp',
  },
  {
    question: 'How long do appointments usually take?',
    answer: 'Appointment times vary depending on the service, but most treatments take between 45 minutes and 2 hours.',
    previewImage: 'https://framerusercontent.com/images/G7i6UOsdVjVL7YT7fV3ZUqfJ4A.jpeg',
  },
  {
    question: 'Do you offer personalized treatments?',
    answer: 'Yes, every treatment is customized to your skin, nail, brow or body preferences and goals.',
    previewImage: 'https://framerusercontent.com/images/JcnBu1sDmZvH0TCDKnb4LPyuUMA.webp',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can easily book online through our booking page or contact our studio directly by phone or email.',
    previewImage: 'https://framerusercontent.com/images/unYVmVFmHjCIL4qowvtUbrgFzSY.webp',
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Amara Lewis',
    role: 'Lead Aesthetician & Founder',
    image: 'https://framerusercontent.com/images/58msSXlC40gGW9fj6F4HpA6Ws.webp'
  },
  {
    name: 'Sofia Moreau',
    role: 'Brow & Lash Specialist',
    image: 'https://framerusercontent.com/images/pDjLj0MphsqZFcRtRfZtJMlqi4.webp'
  },
  {
    name: 'Lina Hart',
    role: 'Master Nail Artist',
    image: 'https://framerusercontent.com/images/aMNRMtpMS0M4qIXyTGv9IOR3Jo.webp'
  },
  {
    name: 'Camille Laurent',
    role: 'Skin Therapy Expert',
    image: 'https://framerusercontent.com/images/njNsdcFPYzY5tMABiaEtm9KM.webp'
  },
  {
    name: 'Naomi Ellis',
    role: 'Wellness Massage Therapist',
    image: 'https://framerusercontent.com/images/hREPzCnaWN6oVoJuQfPFZob7wl0.webp'
  },
  {
    name: 'Maya Brooks',
    role: 'Studio Director & Concierge',
    image: 'https://framerusercontent.com/images/RsVkrKj4tVnoJQk3a4QCA7jirg.webp'
  }
];
