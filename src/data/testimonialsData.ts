import { Testimonial } from '../types';

export const sampleTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Mehta',
    role: 'Product Designer',
    city: 'Pune',
    tripTaken: 'Kasol & Kheerganga Adventure',
    quote: 'I signed up solo because none of my college friends could take leave. Within two hours on the bus from Majnu Ka Tilla, we were already sharing playlists and food. Reaching the Kheerganga summit hot springs with the squad was pure magic.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Shreya Shenoy',
    role: 'Frontend Engineer',
    city: 'Mumbai',
    tripTaken: 'Goa Beach Escape & Secret Coves',
    quote: 'I had been to Goa four times before, but never experienced hidden coves like Kakolem or sunrise mangrove kayaking in the backwaters. The trip captain made sure everyone felt safe, included, and relaxed.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Devansh Ranawat',
    role: 'Financial Analyst',
    city: 'Mumbai',
    tripTaken: 'Meghalaya Explorer',
    quote: 'The 3,500 stairs down to the Double Decker Living Root Bridge were tough on the calves, but our Roam Tribe leader kept everyone pumped with hydration and trail banter. The glass waters of Dawki are etched in my memory forever.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Ananya Joshi',
    role: 'Brand Strategist',
    city: 'Pune',
    tripTaken: 'Gokarna Beach Trek',
    quote: 'Camping right on the sand at Kudle with campfire acoustic songs under a starry sky was the exact reset I needed from corporate hustle. Definitely travelling with Roam Tribe again!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const generalFaqs = [
  {
    question: 'How do I book or enquire about a trip?',
    answer: 'Browse any trip on the website and click "Enquire on WhatsApp". It opens a pre-formatted chat with our trip coordinator including the trip name and dates. We will answer all your questions, share seat availability, and guide you through the reservation process.'
  },
  {
    question: 'Are Roam Tribe trips safe for solo female travellers?',
    answer: 'Absolutely. Around 45-50% of our travellers are women travelling solo. We have strict community safety codes, verified homestays and hotels, dedicated male and female trip captains on large batches, and same-gender room pairing by default.'
  },
  {
    question: 'What is the average age group of travellers?',
    answer: 'Our community predominantly consists of young professionals, college graduates, and creative souls aged between 20 and 38 who love good conversations, photography, and outdoor experiences.'
  },
  {
    question: 'What happens if a trip gets cancelled due to weather or unforeseen events?',
    answer: 'Safety comes first. In case of extreme weather, landslides, or road closures, we either offer an alternative safe itinerary, reschedule your booking to any future batch within 12 months, or provide refund as per our transparent cancellation policy.'
  },
  {
    question: 'Can customized trips be organized for college squads or corporate teams?',
    answer: 'Yes! We frequently organize bespoke group escapes for corporate team offsites, college alumni squads, and private friend circles (minimum 8-10 people) with tailored pickup from Pune, Mumbai, Delhi, or Bangalore.'
  }
];
