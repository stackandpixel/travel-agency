export const siteConfig = {
  brandName: 'Roam Tribe India',
  tagline: 'Find Your People. Discover Your World.',
  alternativeTaglines: [
    'Less Scrolling. More Exploring.',
    'Strangers Today. Travel Buddies Tomorrow.',
    'Your Next Adventure Starts Here.',
    'Collect Moments, Not Just Destinations.',
    'Explore More. Worry Less. Travel Together.'
  ],
  description: 'Curated group travel community for young explorers, solo travellers, and road trippers across India. Join weekend getaways, Himalayan treks, and international escapes.',
  primaryWhatsAppNumber: '919876543210', // Configurable Indian WhatsApp number
  formattedPhone: '+91 98765 43210',
  contactEmail: 'explore@roamtribeindia.com',
  instagramHandle: '@roamtribeindia',
  instagramUrl: 'https://instagram.com',
  youtubeUrl: 'https://youtube.com',
  communityUrl: 'https://chat.whatsapp.com',
  primaryHubs: [
    { city: 'Pune', address: 'Baner High Street & FC Road pickup points, Pune, Maharashtra' },
    { city: 'Mumbai', address: 'Bandra Reclamation & Dadar TT pickup points, Mumbai, Maharashtra' }
  ],
  studioCredit: {
    name: 'Stack & Pixel',
    role: 'Web Design & Development Studio',
    target: 'Built as a high-fidelity interactive demo for Indian travel communities & agencies.'
  }
};

export const travelCategoriesList = [
  'Weekend Getaway',
  'Mountains & Treks',
  'Beaches & Islands',
  'Road Trips',
  'Backpacking',
  'International Trips',
  'Camping Under the Stars',
  'Festival & Special Trips'
] as const;

export const citiesList = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Guwahati', 'Chandigarh'] as const;
