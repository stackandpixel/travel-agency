export type TravelCategory =
  | 'Weekend Getaway'
  | 'Mountains & Treks'
  | 'Beaches & Islands'
  | 'Road Trips'
  | 'Backpacking'
  | 'International Trips'
  | 'Camping Under the Stars'
  | 'Festival & Special Trips';

export type StartingCity = 'Pune' | 'Mumbai' | 'Delhi' | 'Bangalore' | 'Guwahati' | 'Chandigarh';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  mealsIncluded?: string;
  stayType?: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  destination: string;
  region: 'Himachal' | 'Uttarakhand' | 'Meghalaya' | 'Rajasthan' | 'Goa' | 'Maharashtra' | 'Karnataka' | 'Kerala' | 'International';
  category: TravelCategory;
  duration: string; // e.g., "5 Days / 4 Nights"
  durationDays: number;
  startingPrice: number;
  originalPrice?: number;
  startingCity: StartingCity[];
  departureDate: string; // e.g. "2026-10-24"
  departureDateFormatted: string; // e.g. "24 Oct 2026"
  nextBatches: string[];
  totalSeats: number;
  availableSeats: number;
  fitnessLevel: 'Easy' | 'Moderate' | 'Challenging' | 'Relaxed';
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  transportation: string;
  meetingPoint: string;
  packingList: string[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
}

export interface Destination {
  id: string;
  name: string;
  country: 'India' | 'International';
  stateOrRegion: string;
  tagline: string;
  description: string;
  coverImage: string;
  bestTimeToVisit: string;
  categories: TravelCategory[];
  tripCount: number;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  publishedDate: string;
  readTime: string;
  relatedTripSlug?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  tripTaken: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface TripFilterState {
  searchQuery: string;
  category: string;
  region: string;
  startingCity: string;
  maxPrice: number;
  duration: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'date-asc';
}
