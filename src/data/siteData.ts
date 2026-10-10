import type { FAQItem, HomeServiceCard, ServicePageData, TestimonialItem } from '../types';

export const STUDIO_INFO = {
  name: 'Bella Beauty Brazil',
  owner: 'Livia Rego',
  tagline: 'Enhancing Beauty, Empowering Confidence.',
  address: 'Suite 3, 412 Logan Road, Greenslopes, QLD 4120, Australia',
  phone: '+61 402 148 437',
  telephoneLink: '+61402148437',
  email: 'livia.anjos14@gmail.com',
  bookingUrl: 'https://bellabrazil.gettimely.com/',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Suite+3%2C+412+Logan+Road%2C+Greenslopes+QLD+4120+Australia',
  mapEmbedUrl: 'https://maps.google.com/maps?q=Suite%203%2C%20412%20Logan%20Road%2C%20Greenslopes%2C%20QLD%204120%2C%20Australia&output=embed',
  instagram: 'https://www.instagram.com/bellabeautybrazil/',
  facebook: 'https://www.facebook.com/bellabeautybrazil/',
  officialWebsite: 'https://www.bellabeautybrazil.com.au/',
  aftercareUrl: 'https://www.bellabeautybrazil.com.au/_files/ugd/26620d_2df1062d732e44f2af7e3ce4284b53dd.pdf',
  logo: '/images/bella-beauty-mark.png',
  portraitUrl: 'https://static.wixstatic.com/media/26620d_db84471b835e42a6a53555cc28a20fa9~mv2.jpeg/v1/fill/w_560,h_760,al_c,q_85,enc_avif,quality_auto/B80F2BB2-926A-4085-9766-329BE198DBEB.jpeg',
  locale: 'en-AU',
  currency: 'AUD',
  serviceAreas: [
    'Greenslopes', 'Stones Corner', 'Coorparoo', 'Holland Park', 'Annerley',
    'Tarragindi', 'Woolloongabba', 'Brisbane Southside', 'Greater Brisbane',
  ],
};

// The four original homepage cards remain four cards; their image URLs are preserved from the template.
export const SERVICES: HomeServiceCard[] = [
  {
    id: 'cosmetic-tattooing', slug: 'nano-strokes', title: 'Cosmetic Tattooing',
    subtitle: 'Nano Strokes, Microblading, Shadow / Hybrid Brows and Lip Blush.',
    number: '(01)', heroImage: 'https://framerusercontent.com/images/g9MCl79KZ3q7N1ba5liIGYZTyjQ.webp',
  },
  {
    id: 'brows-lashes', slug: 'brow-sculpting-tint', title: 'Brows & Lashes',
    subtitle: 'Brow Sculpting & Tint, Brow Lamination and Lash Lift.',
    number: '(02)', heroImage: 'https://framerusercontent.com/images/JcnBu1sDmZvH0TCDKnb4LPyuUMA.webp',
  },
  {
    id: 'facial-treatments', slug: 'facial-treatments', title: 'Facial Treatments',
    subtitle: 'Personalised facial treatments, with service details confirmed before booking.',
    number: '(03)', heroImage: 'https://framerusercontent.com/images/ryUDWV1zf3c5pigeVIU40fEkkM.webp',
  },
  {
    id: 'waxing-training', slug: 'waxing', title: 'Waxing & Training',
    subtitle: 'Waxing services and Training & Courses with Livia Rego.',
    number: '(04)', heroImage: 'https://framerusercontent.com/images/4fEjiUGdLwYQv6JtlYBeRguxM.webp',
  },
];

// The original five four-petal cards stay in the pinned scroll scene. Two service names share each card.
export const PETAL_SERVICES = [
  { id: 'nano-strokes', title: 'Nano Strokes\n& Microblading', description: 'Fine-stroke brow techniques', link: '/services/nano-strokes' },
  { id: 'shadow-hybrid', title: 'Shadow / Hybrid\nBrows', description: 'Lip Blush', link: '/services/shadow-hybrid-brows' },
  { id: 'brow-sculpting', title: 'Brow Sculpting\n& Tint', description: 'Brow Lamination', link: '/services/brow-sculpting-tint' },
  { id: 'lash-lift', title: 'Lash Lift', description: 'Facial Treatments', link: '/services/lash-lift' },
  { id: 'waxing', title: 'Waxing', description: 'Training & Courses', link: '/services/waxing' },
];

const officialImages = {
  cosmeticTattoo: 'https://static.wixstatic.com/media/26620d_60def2ff1cf24c3e9c52d16fb2c9b319~mv2.png/v1/fill/w_640,h_760,fp_0.5_0.49,q_85,enc_avif,quality_auto/26620d_60def2ff1cf24c3e9c52d16fb2c9b319~mv2.png',
  brows: 'https://static.wixstatic.com/media/26620d_ccd3c59696cc4eb39733a3b1a129be28~mv2.png/v1/fill/w_640,h_760,fp_0.46_0.5,q_85,enc_avif,quality_auto/26620d_ccd3c59696cc4eb39733a3b1a129be28~mv2.png',
  lashes: 'https://static.wixstatic.com/media/26620d_65148b3a57784337867231f9dd180377~mv2.jpg/v1/fill/w_640,h_760,fp_0.52_0.51,q_85,enc_avif,quality_auto/26620d_65148b3a57784337867231f9dd180377~mv2.jpg',
  facial: 'https://static.wixstatic.com/media/26620d_8db47cbfa2ae46459cc8cad0d0c87b47~mv2.png/v1/fill/w_640,h_760,q_85,enc_avif,quality_auto/26620d_8db47cbfa2ae46459cc8cad0d0c87b47~mv2.png',
  waxing: 'https://static.wixstatic.com/media/26620d_36327ea852c04617b0c85649efd4682e~mv2.png/v1/fill/w_640,h_760,fp_0.57_0.29,q_85,enc_avif,quality_auto/26620d_36327ea852c04617b0c85649efd4682e~mv2.png',
  courses: 'https://static.wixstatic.com/media/26620d_60638e467cce47bd815eb3ab14c53a07~mv2.png/v1/fill/w_640,h_760,q_85,enc_avif,quality_auto/26620d_60638e467cce47bd815eb3ab14c53a07~mv2.png',
  lips: 'https://static.wixstatic.com/media/26620d_9852d9679c5b40c580f3def211a6bf31~mv2.png/v1/fill/w_900,h_700,al_l,q_85,enc_avif,quality_auto/26620d_9852d9679c5b40c580f3def211a6bf31~mv2.png',
  livia: 'https://static.wixstatic.com/media/26620d_db84471b835e42a6a53555cc28a20fa9~mv2.jpeg/v1/fill/w_560,h_760,al_c,q_85,enc_avif,quality_auto/B80F2BB2-926A-4085-9766-329BE198DBEB.jpeg',
  results: 'https://static.wixstatic.com/media/26620d_1026b7089b8e42dd9fa872a45d56e999~mv2.png/v1/fill/w_640,h_760,al_c,q_85,enc_avif,quality_auto/00006bbb%20.png',
};

const browTechniqueComparison = [
  { name: 'Nano Strokes', description: 'A fine-stroke brow option. The exact tool, pattern and suitability are confirmed with Livia in a consultation.' },
  { name: 'Microblading', description: 'Timely describes this as a manual technique that creates fine, hair-like eyebrow strokes; its listing includes a follow-up touch-up.' },
  { name: 'Shadow / Hybrid Brows', description: 'The Timely listing describes Hybrid Brows as brow shaping with a gel dye that colours the hairs and temporarily stains the skin.' },
];

const serviceFaqs = {
  brows: [
    { question: 'How do I choose between brow techniques?', answer: 'Compare the published service descriptions, then speak with Livia about your brows and the finish you prefer. Suitability is confirmed individually.' },
    { question: 'Is a follow-up listed for cosmetic tattooing?', answer: 'Timely lists a Microblading touch-up option. Check the current booking page for the applicable timing and service details.' },
    { question: 'Where can I find aftercare?', answer: 'Use the Bella Beauty Brazil aftercare sheet for Microblading and follow the personalised instructions given for your appointment.' },
  ],
  general: [
    { question: 'How can I check availability and current pricing?', answer: 'The current service menu and appointment availability are shown on Bella Beauty Brazil’s Timely booking page.' },
    { question: 'How do I choose the right service?', answer: 'Read the service descriptions and contact Livia if you would like help comparing options before booking.' },
    { question: 'Where is Bella Beauty Brazil?', answer: 'The studio is at Suite 3, 412 Logan Road, Greenslopes, QLD 4120, Australia.' },
  ],
};

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'nano-strokes', title: 'Nano Strokes', category: 'Cosmetic Tattooing',
    subtitle: 'A fine-stroke brow option, discussed and tailored with Livia Rego.',
    intro: 'Nano Strokes are one of the brow services requested at Bella Beauty Brazil. Start with a conversation about the look you want; Livia can explain the technique, suitability and current appointment details before you decide.',
    heroImage: officialImages.cosmeticTattoo, galleryImages: [officialImages.cosmeticTattoo, officialImages.brows, officialImages.results],
    comparisonTitle: 'Compare brow techniques', comparisonIntro: 'The service menu uses different approaches to brow definition. These descriptions are a starting point, not a suitability assessment.', techniques: browTechniqueComparison,
    aftercare: 'Follow the written aftercare instructions given for your Nano Strokes appointment. The linked official care sheet covers Microblading; do not assume every cosmetic-tattoo technique has identical aftercare.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: serviceFaqs.brows,
  },
  {
    slug: 'microblading', title: 'Microblading', category: 'Cosmetic Tattooing',
    subtitle: 'Manual, fine hair-like brow strokes with service details published on Timely.',
    intro: 'Bella Beauty Brazil’s Timely listing describes Microblading as a manual technique that creates fine, hair-like strokes. It also lists a follow-up touch-up service. Confirm current availability and the details for your appointment on Timely.',
    heroImage: officialImages.cosmeticTattoo, galleryImages: [officialImages.cosmeticTattoo, officialImages.brows, officialImages.results],
    priceOptions: [{ label: 'Perfect Brows — Microblading', amount: 615, duration: '2 hours, 30 mins' }],
    comparisonTitle: 'Microblading, Nano Strokes or Hybrid Brows?', comparisonIntro: 'These options differ in how the brow look is created. A consultation with Livia is the right place to discuss your brows and preferences.', techniques: browTechniqueComparison,
    aftercare: 'The official Bella Beauty Brazil aftercare sheet gives Microblading-specific guidance. Read it before your appointment and follow Livia’s instructions for your own treatment.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: serviceFaqs.brows,
  },
  {
    slug: 'shadow-hybrid-brows', title: 'Shadow / Hybrid Brows', category: 'Brows',
    subtitle: 'Brow shaping and colour options, with the finish discussed before treatment.',
    intro: 'The Timely menu describes Hybrid Brows as a shaped brow finished with a gel dye that colours the brow hairs and temporarily stains the skin. Ask Livia how this compares with a soft shadow effect and which service name matches the result you have in mind.',
    heroImage: officialImages.brows, galleryImages: [officialImages.brows, officialImages.cosmeticTattoo, officialImages.results],
    priceOptions: [{ label: 'Brow Sculpt & Hybrid Brow', amount: 79, duration: '40 mins' }],
    comparisonTitle: 'Compare brow techniques', comparisonIntro: 'Understand the broad difference between fine strokes, manual strokes and temporary colour before choosing.', techniques: browTechniqueComparison,
    aftercare: 'Follow the care advice provided for the specific brow service you book. The linked care sheet is the official Bella Beauty Brazil guide for treatments including Microblading and Brow Lamination.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: serviceFaqs.brows,
  },
  {
    slug: 'lip-blush', title: 'Lip Blush', category: 'Cosmetic Tattooing',
    subtitle: 'Semi-permanent lip colour designed to enhance the natural lip tone.',
    intro: 'Bella Beauty Brazil describes Lip Blush as semi-permanent cosmetic tattooing for the lips. The colour settles as the lips heal, so the final appearance is not the same as the fresh treatment result. Discuss your preferred tone and the published touch-up information with Livia before booking.',
    heroImage: officialImages.lips, galleryImages: [officialImages.lips, officialImages.results, officialImages.cosmeticTattoo],
    priceOptions: [{ label: 'Lip Blushing — semi-permanent makeup', amount: 615, duration: '2 hours, 30 mins' }],
    comparisonTitle: 'Lip Blush and everyday lip colour', comparisonIntro: 'Lip Blush is a semi-permanent service; lipstick is a temporary makeup choice. They are different options for adding colour, and a consultation can clarify the process and aftercare.',
    techniques: [
      { name: 'Lip Blush', description: 'A semi-permanent cosmetic tattoo service listed by Bella Beauty Brazil.' },
      { name: 'Everyday lip colour', description: 'A temporary makeup option that can be applied and removed as part of a daily routine.' },
      { name: 'Consultation first', description: 'Use a consultation to discuss the desired tone, the treatment process and whether the service is suitable for you.' },
    ],
    aftercare: 'The official Lip Tattoo aftercare sheet gives treatment-specific instructions. It notes that lip colour may take about 30–45 days to stabilise; follow the full care sheet and Livia’s advice.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: [
      { question: 'How long does the colour take to settle?', answer: 'The official Bella Beauty Brazil care sheet says lip colour may take about 30–45 days to stabilise. Individual healing can vary.' },
      { question: 'Where can I read the aftercare instructions?', answer: 'Read the official Lip Tattoo aftercare sheet and follow the instructions Livia provides for your appointment.' },
      ...serviceFaqs.general,
    ],
  },
  {
    slug: 'brow-sculpting-tint', title: 'Brow Sculpting & Tint', category: 'Brows',
    subtitle: 'Brow mapping and shaping with an optional tint to define the natural brow.',
    intro: 'The Timely listing describes Brow Sculpt as a personalised appointment that considers facial expression, symmetry, hair colour and hair type, with mapping, waxing, trimming and tweezing. A tint can be added when you want more visible colour.',
    heroImage: officialImages.brows, galleryImages: [officialImages.brows, officialImages.cosmeticTattoo, officialImages.results],
    priceOptions: [
      { label: 'Brow Sculpt Signature', amount: 56, duration: '25 mins' },
      { label: 'Brow Sculpt & Tint', amount: 76, duration: '35 mins' },
      { label: 'Brow Sculpt & Hybrid Brow', amount: 79, duration: '40 mins' },
    ],
    comparisonTitle: 'Brow Sculpt, Tint and Hybrid Brow', comparisonIntro: 'Sculpting defines the shape, while tint and Hybrid Brow services add colour in different ways. The current Timely descriptions help you compare them.',
    techniques: [
      { name: 'Brow Sculpt', description: 'Mapping, waxing, trimming and tweezing to shape brows for the individual face.' },
      { name: 'Brow Sculpt & Tint', description: 'The sculpt is paired with a tint; Timely says the tint can make brows appear darker or fuller.' },
      { name: 'Brow Sculpt & Hybrid Brow', description: 'The listed Hybrid service uses gel dye on both hairs and skin for a more visibly coloured brow.' },
    ],
    aftercare: 'Aftercare depends on the selected service and products used. Follow the instructions given at your appointment; use the official care sheet where it applies.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: serviceFaqs.general,
  },
  {
    slug: 'brow-lamination', title: 'Brow Lamination', category: 'Brows',
    subtitle: 'A brow-shaping service that sets the hairs in a brushed and sculpted direction.',
    intro: 'Bella Beauty Brazil describes Brow Lamination as a service that straightens and sets brow hairs, with shaping and tint available in the listed combination. Timely says results commonly last 6–8 weeks, depending on individual hair growth.',
    heroImage: officialImages.brows, galleryImages: [officialImages.brows, officialImages.results, officialImages.cosmeticTattoo],
    priceOptions: [
      { label: 'Brow Lamination, Shape and Tint', amount: 133, duration: '1 hour' },
      { label: 'Brow Lamination (only)', amount: 90 },
    ],
    comparisonTitle: 'Brow Lamination, Sculpt and Hybrid Brow', comparisonIntro: 'These services focus on different parts of brow styling: hair direction, shape, or added colour.',
    techniques: [
      { name: 'Brow Lamination', description: 'Straightens and sets brow hairs; the listed combination can include shape and tint.' },
      { name: 'Brow Sculpt', description: 'Uses mapping and hair removal to define the outline while keeping the existing hair direction.' },
      { name: 'Hybrid Brow', description: 'Adds a gel dye to the hairs and temporarily stains the skin as described on Timely.' },
    ],
    aftercare: 'The official Brow Lamination care sheet asks clients to keep brows dry and avoid water, steam and sweat for the first 48 hours; it also gives brushing and product guidance. Read the full sheet and follow Livia’s instructions.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: [
      { question: 'How long can Brow Lamination last?', answer: 'Timely describes a typical 6–8 week result, depending on the individual hair growth cycle.' },
      { question: 'What should I do after the appointment?', answer: 'Follow the official Brow Lamination aftercare sheet. It includes a 48-hour dry period and other treatment-specific guidance.' },
      ...serviceFaqs.general,
    ],
  },
  {
    slug: 'lash-lift', title: 'Lash Lift', category: 'Lashes',
    subtitle: 'A lift and curl for natural lashes, with tint listed as an optional combination.',
    intro: 'Bella Beauty Brazil’s Timely description says a Lash Lift shapes natural lashes from the root using silicone pads. Tint is available in a listed combination. Timely notes a typical 6–8 week result; individual lash cycles vary.',
    heroImage: officialImages.lashes, galleryImages: [officialImages.lashes, officialImages.brows, officialImages.results],
    priceOptions: [
      { label: 'Lash Lifting & Tint', amount: 133, duration: '1 hour, 10 mins' },
      { label: 'Classic EyeLashes', amount: 145 },
      { label: 'Hybrid EyeLashes', amount: 175 },
    ],
    comparisonTitle: 'Current lash menu options', comparisonIntro: 'The Timely menu lists a Lash Lift and tint combination alongside Classic EyeLashes and Hybrid EyeLashes appointments. Confirm the technique and suitability with Livia before choosing.',
    techniques: [
      { name: 'Lash Lift', description: 'Lifts and curls natural lashes from the root, as described on Timely.' },
      { name: 'Lash Lift & Tint', description: 'Pairs the lift with tint to darken the natural lashes.' },
      { name: 'Brow Lamination', description: 'A separate brow service that changes brow-hair direction rather than lifting lashes.' },
    ],
    aftercare: 'The official Lash Lift care sheet asks clients to keep lashes dry and avoid water, steam and sweat for the first 24 hours; it also covers makeup and cleansing. Read the complete sheet and follow Livia’s instructions.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: [
      { question: 'How long does a Lash Lift last?', answer: 'Timely describes a typical 6–8 week result, depending on the natural lash cycle.' },
      { question: 'What is the first-day aftercare?', answer: 'The official Bella Beauty Brazil Lash Lift sheet asks clients to avoid water, steam and sweat for the first 24 hours. Read it for the complete instructions.' },
      ...serviceFaqs.general,
    ],
  },
  {
    slug: 'facial-treatments', title: 'Facial Treatments', category: 'Facials',
    subtitle: 'A facial appointment with service details confirmed on the current booking page.',
    intro: 'The Bella Beauty Brazil Timely menu describes a facial that includes cleansing, serums, a peel, extractions and a jelly mask. Ask Livia about the steps and suitability for your skin before booking.',
    heroImage: officialImages.facial, galleryImages: [officialImages.facial, officialImages.results, officialImages.lips],
    priceOptions: [
      { label: 'Dermaplaning', amount: 140, duration: '55 mins' },
      { label: 'Micro Needling', amount: 185, duration: '1 hour' },
      { label: 'Facial Spa', amount: 150, duration: '1 hour, 20 mins' },
      { label: 'Deluxe Facial', amount: 360, duration: '1 hour, 50 mins' },
    ],
    comparisonTitle: 'Facial Treatments and other services', comparisonIntro: 'A facial focuses on a skin-care appointment. Brow and lip cosmetic tattooing are separate services with different processes and aftercare.',
    techniques: [
      { name: 'Facial Treatment', description: 'The Timely service description lists cleansing, serums, a peel, extractions and a jelly mask.' },
      { name: 'Waxing', description: 'A separate hair-removal service; choose the specific area and service shown on Timely.' },
      { name: 'Cosmetic Tattooing', description: 'A separate semi-permanent service for brows or lips, with its own consultation and aftercare.' },
    ],
    aftercare: 'Follow the personalised aftercare advice given for your facial. The linked official care sheet covers lash, brow and lip procedures; it does not replace facial-specific advice.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: serviceFaqs.general,
  },
  {
    slug: 'waxing', title: 'Waxing', category: 'Waxing',
    subtitle: 'Waxing appointments for the areas listed in the current Timely service menu.',
    intro: 'Bella Beauty Brazil’s booking menu includes brow and body waxing options. Choose the area from the current Timely list and contact Livia if you need help selecting a service.',
    heroImage: officialImages.waxing, galleryImages: [officialImages.waxing, officialImages.facial, officialImages.brows],
    priceOptions: [{ label: 'Brazilian Waxing', amount: 82, duration: '30 mins' }],
    comparisonTitle: 'Waxing and brow-shaping options', comparisonIntro: 'The right listing depends on the area and finish you want. The Timely menu separates brow sculpting from other waxing services.',
    techniques: [
      { name: 'Brow Sculpt', description: 'Mapping, waxing, trimming and tweezing to shape the brows.' },
      { name: 'Brow Sculpt & Tint', description: 'Adds a tint to a mapped and shaped brow.' },
      { name: 'Area-specific Waxing', description: 'Select the body or facial area named in the current booking menu.' },
    ],
    aftercare: 'The source care sheet does not provide general waxing aftercare. Ask Livia for the instructions appropriate to the area and your appointment.',
    faqs: serviceFaqs.general,
  },
  {
    slug: 'training-courses', title: 'Training & Courses', category: 'Courses',
    subtitle: 'Ask Livia about current training and course information before making plans.',
    intro: 'Training & Courses is listed on Bella Beauty Brazil’s official services page. Contact Livia to confirm the current course topics, format, prerequisites, dates and fees; those details are not published here.',
    heroImage: officialImages.courses, galleryImages: [officialImages.courses, officialImages.cosmeticTattoo, officialImages.brows],
    comparisonTitle: 'Compare brow techniques before training', comparisonIntro: 'If your enquiry is about brow training, first identify which technique you want to learn more about. Confirm course availability and content directly with Livia.',
    techniques: browTechniqueComparison,
    aftercare: 'Aftercare is specific to the service technique. The linked official sheet covers selected procedures; confirm the relevant guide with Livia for the course or treatment you have in mind.', aftercareUrl: STUDIO_INFO.aftercareUrl,
    faqs: [
      { question: 'What courses are currently available?', answer: 'Training & Courses is listed on the official services page. Contact Livia to confirm current course topics and availability.' },
      { question: 'Where can I check current course dates and details?', answer: 'Timely lists current course fees and durations. Confirm availability, prerequisites and any changes directly with Livia before booking.' },
      ...serviceFaqs.general,
    ],
  },
];

export const COURSE_OPTIONS = [
  { title: 'Lash Lift Course 1:1', duration: '8 hours', amount: 950 },
  { title: 'Brow Lamination Course 1:1', duration: '8 hours, 5 mins', amount: 950 },
  { title: 'Classic Eyelashes Extensions Course 1:1', duration: '6 hours, 30 mins', amount: 1400 },
  { title: 'Microblading Course (Nano Strokes)', duration: '16 hours', amount: 4200 },
] as const;

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'official-review-alisha', cardType: 'review',
    quote: 'Livia is such a delight! I had my first ever brow lamination (with sculpt and hybrid brow) and couldn’t be happier. Livia took the time to map my face and check colours to ensure the end result suited me. And it does, I love it. Admittedly it’s been too long between appointments and I need to book back in!!',
    author: 'Alisha Kelleher, BNE', sourceUrl: STUDIO_INFO.officialWebsite,
  },
  {
    id: 'editorial-brows', cardType: 'image', image: 'https://framerusercontent.com/images/EFIb4igWqIzbFEyCZo3BFHgus2I.webp', tag: 'Brow detail', number: '(01)',
  },
  {
    id: 'official-gallery-link', cardType: 'link', quote: 'See current beauty work', text: 'Browse Bella Beauty Brazil’s published photos and updates on Instagram.', author: 'Official Instagram', sourceUrl: STUDIO_INFO.instagram,
  },
  {
    id: 'editorial-lashes', cardType: 'image', image: 'https://framerusercontent.com/images/ryUDWV1zf3c5pigeVIU40fEkkM.webp', tag: 'Beauty detail', number: '(02)',
  },
  {
    id: 'official-booking-link', cardType: 'link', quote: 'Read more before you book', text: 'Check the current service descriptions and appointment details on Timely.', author: 'Bella Beauty Brazil on Timely', sourceUrl: STUDIO_INFO.bookingUrl,
  },
  {
    id: 'editorial-skin', cardType: 'image', image: 'https://framerusercontent.com/images/LqhMir4S348J4zeD3yvidn9oAAA.webp', tag: 'Skin detail', number: '(03)',
  },
];

export const FAQS: FAQItem[] = [
  { question: 'How do I book an appointment?', answer: 'All bookings are made through Bella Beauty Brazil’s Timely page. You can check current services and availability there.', previewImage: 'https://framerusercontent.com/images/JMzqaeUM3iexjgci97MQ7a4kLTc.webp' },
  { question: 'Which brow technique should I choose?', answer: 'Nano Strokes, Microblading and Shadow / Hybrid Brows use different approaches. Read the service descriptions and ask Livia which options are appropriate for your brows.', previewImage: 'https://framerusercontent.com/images/YvhNMBAxbLRNOGQAD1mELQMXSw.webp' },
  { question: 'Where can I find treatment aftercare?', answer: 'Use the official Bella Beauty Brazil aftercare sheet for the treatments it covers, and follow the specific advice Livia gives you.', previewImage: 'https://framerusercontent.com/images/G7i6UOsdVjVL7YT7fV3ZUqfJ4A.jpeg' },
  { question: 'Where is the studio?', answer: 'Suite 3, 412 Logan Road, Greenslopes, QLD 4120, Australia. The Contact & Book page includes a map and direct contact links.', previewImage: 'https://framerusercontent.com/images/JcnBu1sDmZvH0TCDKnb4LPyuUMA.webp' },
  { question: 'How can I ask about a service or course?', answer: 'Call +61 402 148 437 or email livia.anjos14@gmail.com. Course details and current availability can be confirmed directly with Livia.', previewImage: 'https://framerusercontent.com/images/unYVmVFmHjCIL4qowvtUbrgFzSY.webp' },
];

export const TEAM_MEMBERS = [
  { name: 'Cosmetic Tattooing', role: 'Appointments with Livia Rego', image: 'https://framerusercontent.com/images/58msSXlC40gGW9fj6F4HpA6Ws.webp' },
  { name: 'Brows & Lashes', role: 'Personalised services with Livia Rego', image: 'https://framerusercontent.com/images/pDjLj0MphsqZFcRtRfZtJMlqi4.webp' },
  { name: 'Facial Treatments', role: 'Service details confirmed on Timely', image: 'https://framerusercontent.com/images/aMNRMtpMS0M4qIXyTGv9IOR3Jo.webp' },
  { name: 'Waxing', role: 'Current service menu on Timely', image: 'https://framerusercontent.com/images/njNsdcFPYzY5tMABiaEtm9KM.webp' },
  { name: 'Training & Courses', role: 'Ask Livia for current course information', image: 'https://framerusercontent.com/images/hREPzCnaWN6oVoJuQfPFZob7wl0.webp' },
  { name: 'Bella Beauty Brazil', role: 'Suite 3, Greenslopes, Brisbane', image: 'https://framerusercontent.com/images/RsVkrKj4tVnoJQk3a4QCA7jirg.webp' },
];

export const STUDIO_PILLARS = [
  { title: 'Livia’s story', description: 'Livia Rego moved from Brazil to Australia in search of new challenges and built a career in beauty after working in executive air-cargo sales and foreign trade.' },
  { title: 'A personal approach', description: 'Livia says her aim is to help uncover each client’s individual beauty and to give her best to the work she chooses.' },
  { title: 'Brow and beauty services', description: 'The current menu includes cosmetic tattooing, brow and lash services, facials, waxing and training enquiries.' },
  { title: 'Based in Greenslopes', description: 'Visit Bella Beauty Brazil at Suite 3, 412 Logan Road, Greenslopes, QLD 4120.' },
];
