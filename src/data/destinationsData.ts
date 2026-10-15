import { Destination } from '../types';

export const sampleDestinations: Destination[] = [
  // India
  {
    id: 'dest-himachal',
    name: 'Himachal Pradesh',
    country: 'India',
    stateOrRegion: 'Northern Himalayas',
    tagline: 'Pine-clad valleys, hot springs, river cafes & high mountain passes',
    description: 'From the bohemian riverside vibes of Kasol and Old Manali to the moonscapes of Spiti Valley, Himachal is India’s ultimate mountain playground.',
    coverImage: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'All Year (Snow: Dec-Feb, Treks: Mar-Nov)',
    categories: ['Mountains & Treks', 'Weekend Getaway', 'Road Trips'],
    tripCount: 6
  },
  {
    id: 'dest-meghalaya',
    name: 'Meghalaya',
    country: 'India',
    stateOrRegion: 'North East India',
    tagline: 'Living root bridges, glass-clear rivers & mist-cloaked waterfalls',
    description: 'The enchanted Abode of Clouds where centuries-old living ficus root bridges span crystal rivers and limestone caves invite the brave.',
    coverImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to May',
    categories: ['Backpacking', 'Mountains & Treks', 'Camping Under the Stars'],
    tripCount: 3
  },
  {
    id: 'dest-goa',
    name: 'Goa',
    country: 'India',
    stateOrRegion: 'Konkan Coast',
    tagline: 'Secret cliff beaches, Latin quarter alleys, mangrove kayaks & sundowners',
    description: 'Beyond commercial beaches lies soulful South Goa — hidden coves, heritage Portuguese mansions, island cruises, and vibrant community vibes.',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to April',
    categories: ['Beaches & Islands', 'Weekend Getaway'],
    tripCount: 4
  },
  {
    id: 'dest-maharashtra',
    name: 'Maharashtra & The Sahyadris',
    country: 'India',
    stateOrRegion: 'Western Ghats',
    tagline: 'Mist-shrouded fortresses, vertical Konkan cliffs & wild weekend trails',
    description: 'Our backyard playground for Pune & Mumbai explorers: Harishchandragad, Rajmachi, Sandhan Valley, and starry lakeside camps at Bhandardara.',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'June to February',
    categories: ['Weekend Getaway', 'Mountains & Treks', 'Camping Under the Stars'],
    tripCount: 8
  },
  {
    id: 'dest-karnataka',
    name: 'Karnataka & Gokarna',
    country: 'India',
    stateOrRegion: 'Southern Coast & Hills',
    tagline: 'Rocky beach trails, ancient Vijayanagara ruins & misty coffee hills',
    description: 'Hike 5 secluded beaches in Gokarna, climb ancient boulders in Hampi, or camp in rainforest coffee estates of Coorg and Chikmagalur.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to March',
    categories: ['Beaches & Islands', 'Weekend Getaway', 'Backpacking'],
    tripCount: 5
  },
  {
    id: 'dest-uttarakhand',
    name: 'Uttarakhand',
    country: 'India',
    stateOrRegion: 'Garhwal & Kumaon Himalayas',
    tagline: 'Alpine meadows of Bugyals, river rafting in Rishikesh & sacred peaks',
    description: 'From white-water rapids and indie cafes in Rishikesh to high-altitude treks like Dayara Bugyal and Kedarkantha summit.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'March to June, September to December',
    categories: ['Mountains & Treks', 'Camping Under the Stars'],
    tripCount: 4
  },
  {
    id: 'dest-rajasthan',
    name: 'Rajasthan',
    country: 'India',
    stateOrRegion: 'Thar Desert & Aravallis',
    tagline: 'Golden desert camps, blue alleyways of Jodhpur & starry desert nights',
    description: 'Caravan journeys across golden sand dunes, historic hill forts, folk acoustic campfire sessions, and royal street feasts.',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to March',
    categories: ['Road Trips', 'Festival & Special Trips'],
    tripCount: 3
  },
  {
    id: 'dest-kerala',
    name: 'Kerala',
    country: 'India',
    stateOrRegion: 'God’s Own Country',
    tagline: 'Misty Munnar tea slopes, Varkala red cliffs & backwater houseboats',
    description: 'Catch ocean sunsets atop Varkala’s dramatic red cliffs, kayak through emerald palm-fringed backwaters, and trek through tea gardens.',
    coverImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'September to March',
    categories: ['Beaches & Islands', 'Backpacking', 'Weekend Getaway'],
    tripCount: 3
  },

  // International
  {
    id: 'dest-bali',
    name: 'Bali',
    country: 'International',
    stateOrRegion: 'Indonesia',
    tagline: 'Emerald Ubud rice terraces, Nusa Penida T-Rex cliffs & beach clubs',
    description: 'The island of gods where sacred temples meet dramatic surf breaks, tropical waterfalls, vibrant boho cafes, and vibrant group community.',
    coverImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'April to November',
    categories: ['International Trips', 'Beaches & Islands'],
    tripCount: 3
  },
  {
    id: 'dest-thailand',
    name: 'Thailand',
    country: 'International',
    stateOrRegion: 'Southeast Asia',
    tagline: 'Limestone karsts of Krabi, neon Bangkok night markets & island hopping',
    description: 'Cruise longtail boats through turquoise Andaman bays, snorkel over coral reefs, and savor world-famous night street food with the tribe.',
    coverImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'November to April',
    categories: ['International Trips', 'Beaches & Islands', 'Backpacking'],
    tripCount: 2
  },
  {
    id: 'dest-vietnam',
    name: 'Vietnam',
    country: 'International',
    stateOrRegion: 'Southeast Asia',
    tagline: 'Lantern-lit Hoi An, misty Halong Bay cruises & mountain coffee culture',
    description: 'From cruising among limestone islets in Halong Bay to cycling through ancient yellow alleyways of Hoi An with steaming bowls of pho.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to April',
    categories: ['International Trips', 'Backpacking'],
    tripCount: 2
  },
  {
    id: 'dest-nepal',
    name: 'Nepal',
    country: 'International',
    stateOrRegion: 'Himalayan Realm',
    tagline: 'Annapurna views, serene Pokhara lakes & Himalayan tea-houses',
    description: 'Walk in the shadow of giants. Easy teahouse trekking around the Annapurna range, sunrise over Phewa Lake, and vibrant Kathmandu courtyards.',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'October to December, March to May',
    categories: ['International Trips', 'Mountains & Treks'],
    tripCount: 2
  },
  {
    id: 'dest-srilanka',
    name: 'Sri Lanka',
    country: 'International',
    stateOrRegion: 'Indian Ocean Tear',
    tagline: 'Scenic blue train to Ella, surf coast of Mirissa & ancient rock fortress',
    description: 'Ride the world’s most scenic blue train through misty tea plantations, climb Sigiriya lion rock, and learn to surf in Weligama.',
    coverImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'November to April (South Coast)',
    categories: ['International Trips', 'Beaches & Islands', 'Road Trips'],
    tripCount: 2
  },
  {
    id: 'dest-dubai',
    name: 'Dubai',
    country: 'International',
    stateOrRegion: 'United Arab Emirates',
    tagline: 'Thar-to-Gulf desert safaris, futuristic architecture & rooftop sunsets',
    description: 'An adrenaline-packed escape: dune bashing in red desert sands, skyline boat cruises, and exploring Old Dubai spice and gold souks.',
    coverImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    bestTimeToVisit: 'November to March',
    categories: ['International Trips', 'Weekend Getaway'],
    tripCount: 1
  }
];
