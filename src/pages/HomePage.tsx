import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Search,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  Heart,
  Instagram,
  ArrowUpRight,
  Tent,
  Mountain,
  Sun,
  Send
} from 'lucide-react';
import { sampleTrips } from '../data/tripsData';
import { sampleStories } from '../data/storiesData';
import { sampleTestimonials } from '../data/testimonialsData';
import { travelCategoriesList, siteConfig } from '../data/siteConfig';
import { TripCard } from '../components/TripCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { EnquiryModal } from '../components/EnquiryModal';
import { CommunityModal } from '../components/CommunityModal';
import { Trip } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Search State
  const [searchDestination, setSearchDestination] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Tab filter for featured section
  const [featuredFilter, setFeaturedFilter] = useState<string>('All');

  // Modals
  const [selectedTripForEnquiry, setSelectedTripForEnquiry] = useState<Trip | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);

  // Newsletter State
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscriberInterest, setSubscriberInterest] = useState('Weekend Getaways & Sahyadris');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchDestination) params.set('q', searchDestination);
    if (selectedCity) params.set('city', selectedCity);
    if (selectedCategory) params.set('category', selectedCategory);
    navigate(`/trips?${params.toString()}`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;
    setNewsletterSubmitted(true);
  };

  const openEnquiry = (trip: Trip) => {
    setSelectedTripForEnquiry(trip);
    setEnquiryModalOpen(true);
  };

  const filteredFeaturedTrips = sampleTrips.filter((trip) => {
    if (featuredFilter === 'All') return true;
    if (featuredFilter === 'Mountains') return trip.category === 'Mountains & Treks';
    if (featuredFilter === 'Beaches') return trip.category === 'Beaches & Islands';
    if (featuredFilter === 'Weekend') return trip.category === 'Weekend Getaway';
    if (featuredFilter === 'International') return trip.category === 'International Trips';
    return true;
  });

  const travelStyles = [
    {
      title: 'Weekend Getaways',
      desc: 'Quick 2–3 day escapes from Pune & Mumbai to Sahyadri forts, secret beaches, and hillside stays.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      category: 'Weekend Getaway',
      icon: Sun
    },
    {
      title: 'Mountains & Treks',
      desc: 'Pine-scented Parvati trails, high-altitude summits, and misty Himalayan ridge lines.',
      image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      category: 'Mountains & Treks',
      icon: Mountain
    },
    {
      title: 'Beaches & Islands',
      desc: 'Sunset cliffs of Gokarna, secret coves in South Goa, and crystal island waters.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      category: 'Beaches & Islands',
      icon: Sun
    },
    {
      title: 'Road Trips',
      desc: 'Rugged overland 4x4 convoys through Spiti, Ladakh, and golden desert dunes.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      category: 'Road Trips',
      icon: Compass
    },
    {
      title: 'Backpacking',
      desc: 'Immersive low-footprint journeys through living root bridges, tea slopes, and riverbeds.',
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80',
      category: 'Backpacking',
      icon: Compass
    },
    {
      title: 'International Trips',
      desc: 'Curated adventures to Bali, Thailand, Vietnam, and Sri Lanka with seamless logistics.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      category: 'International Trips',
      icon: Sparkles
    },
    {
      title: 'Camping Under the Stars',
      desc: 'Lakeside and cliff-edge dome tents, bonfires, acoustic jams, and Milky Way astrophotography.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      category: 'Camping Under the Stars',
      icon: Tent
    },
    {
      title: 'Festival & Special Trips',
      desc: 'Holi in Pushkar, Ziro Valley music festival in Arunachal, and seasonal harvest escapes.',
      image: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80',
      category: 'Festival & Special Trips',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#163A32] text-white overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Background ambient texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F28C45_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Prose & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="text-xs uppercase tracking-widest text-[#F28C45] font-bold">
                India’s Authentic Group Travel Tribe
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-[#F7F3E8] text-balance">
                Your People. Your Places. Your Next Adventure.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#F7F3E8]/85 leading-relaxed max-w-xl">
                From spontaneous weekend escapes to unforgettable international journeys, discover incredible places and meet people who love travelling just as much as you do.
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/trips"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F28C45] text-white font-bold rounded-xl hover:bg-[#e07b36] transition-all shadow-md active:scale-[0.98] text-sm whitespace-nowrap"
                >
                  <span>Explore Upcoming Trips</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setCommunityModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#F28C45]" />
                  <span>Join Our Travel Community</span>
                </button>
              </div>

              {/* Community Caption */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#F7F3E8]/70">
                <span className="w-2 h-2 rounded-full bg-[#F28C45]" />
                <span className="italic">
                  “Good people. Great places. Unforgettable stories.”
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline">Weekly pickups from Pune & Mumbai</span>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80"
                  alt="Young Indian travellers exploring Himalayas together"
                  fallbackTitle="Roam Tribe Himalayan Group Trail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase font-semibold text-[#F28C45] tracking-wide">
                    Kasol & Kheerganga High Pass
                  </div>
                  <div className="text-base font-bold font-display mt-0.5">
                    9,700 ft Summit Hot Springs
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-200 mt-1">
                    <span>Next Batch: 24 Oct</span>
                    <span>·</span>
                    <span>Starting from ₹9,499</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Search & Filter Bar */}
          <div className="mt-12 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-neutral-200 text-[#202522]">
            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Destination or Keyword
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Kasol, Goa, Bali, Sahyadris..."
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Starting City
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-200 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  >
                    <option value="">Any Starting City</option>
                    <option value="Pune">Pune Hub (Baner & FC Rd)</option>
                    <option value="Mumbai">Mumbai Hub (Bandra & Dadar)</option>
                    <option value="Delhi">Delhi (Majnu Ka Tilla)</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Guwahati">Guwahati (North East)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                  Travel Category
                </label>
                <div className="relative">
                  <Compass className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-neutral-200 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  >
                    <option value="">All Categories</option>
                    {travelCategoriesList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#163A32] text-white rounded-lg text-sm font-bold hover:bg-[#224D43] transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Find My Trip</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. FEATURED UPCOMING TRIPS */}
      <section className="py-20 bg-[#F7F3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
                Handpicked Group Departures
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
                Featured Upcoming Trips
              </h2>
              <p className="text-sm text-neutral-600 mt-1 max-w-xl">
                Curated itineraries with verified boutique stays, certified trek captains, and young like-minded squads.
              </p>
            </div>

            {/* Interactive Tab filter control */}
            <div className="flex flex-wrap gap-1 p-1 bg-neutral-200/60 rounded-xl">
              {[
                { label: 'All Trips', value: 'All' },
                { label: 'Treks & Mountains', value: 'Mountains' },
                { label: 'Beach Escapes', value: 'Beaches' },
                { label: 'Weekend Trips', value: 'Weekend' },
                { label: 'International', value: 'International' }
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setFeaturedFilter(tab.value)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    featuredFilter === tab.value
                      ? 'bg-white text-[#163A32] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Trip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeaturedTrips.slice(0, 6).map((trip) => (
              <TripCard key={trip.id} trip={trip} onEnquire={openEnquiry} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/trips"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#163A32] text-white text-sm font-bold rounded-xl hover:bg-[#224D43] transition-colors shadow-sm"
            >
              <span>Explore All {sampleTrips.length} Upcoming Trips</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY TRAVEL STYLE */}
      <section id="styles" className="py-20 bg-white border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              Choose Your Adventure
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
              Explore by Travel Style
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Whether you crave chilly mountaintop bonfires, lazy tropical backwaters, or cross-country road trips, we have a tribe for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelStyles.map((style) => (
              <Link
                key={style.title}
                to={`/trips?category=${encodeURIComponent(style.category)}`}
                className="group relative rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#163A32]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-end min-h-[260px] p-6 text-white"
              >
                <ImageWithFallback
                  src={style.image}
                  alt={style.title}
                  fallbackTitle={style.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#F28C45] text-xs font-bold uppercase mb-1">
                    <style.icon className="w-4 h-4" />
                    <span>Travel Style</span>
                  </div>
                  <h3 className="text-lg font-bold font-display group-hover:text-[#F28C45] transition-colors flex items-center justify-between">
                    <span>{style.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                    {style.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY TRAVEL WITH US */}
      <section className="py-20 bg-[#F7F3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              The Roam Tribe Difference
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
              Why Travel With Our Tribe?
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              We are not a faceless booking agency. We curate soulful, stress-free journeys where solo travellers become lifelong travel buddies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                num: '01',
                title: 'Like-Minded People',
                desc: 'Meet fellow young professionals, solo explorers, and adventure lovers who match your energy.'
              },
              {
                num: '02',
                title: 'Curated Experiences',
                desc: 'Explore thoughtfully crafted routes: secret coves, hidden waterfalls, and cozy local cafes.'
              },
              {
                num: '03',
                title: 'Less Planning, More Fun',
                desc: 'Zero logistics headache. Stay, transport, permissions, and captain handled seamlessly.'
              },
              {
                num: '04',
                title: 'Memories That Last',
                desc: 'Campfire acoustic sessions, stargazing nights, and stories that outlive the trip.'
              },
              {
                num: '05',
                title: 'Community First',
                desc: 'Stay connected through city meetups in Pune and Mumbai long after the bags are unpacked.'
              }
            ].map((feature) => (
              <div
                key={feature.num}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#163A32]/40 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-display text-[#F28C45] block mb-3">
                    {feature.num}.
                  </span>
                  <h3 className="text-base font-bold text-[#163A32] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE COMMUNITY EXPERIENCE (SOCIAL COLLAGE) */}
      <section className="py-20 bg-[#163A32] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#F28C45] font-bold">
                The Social Side of Travel
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F7F3E8] text-balance">
                Come for the Destination. Stay for the People.
              </h2>
              <p className="text-sm text-[#F7F3E8]/80 leading-relaxed">
                Strangers on Friday night. Best friends by Sunday evening. We believe the true magic of travel isn't just the mountain peak or the sunset beach—it’s the laughter shared over late-night Maggi, the acoustic songs by the bonfire, and the stories traded along the trail.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#F7F3E8]/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C45] shrink-0" />
                  <span>65%+ of our travellers sign up solo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C45] shrink-0" />
                  <span>Equal gender ratio with verified safe stays & women captains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F28C45] shrink-0" />
                  <span>Weekly local trail meetups & coffee hangouts in Pune & Mumbai</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCommunityModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F28C45] text-white font-bold rounded-xl hover:bg-[#e07b36] transition-colors shadow-md text-sm cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Become Part of the Tribe</span>
                </button>
              </div>
            </div>

            {/* Right Photo Collage */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="space-y-3">
                  <div className="rounded-xl overflow-hidden aspect-3/4 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                      alt="Group campfire laughter in Parvati"
                      fallbackTitle="Parvati Bonfire"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-4/3 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
                      alt="Sahyadri trek summit squad"
                      fallbackTitle="Sahyadri Summit Squad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <div className="rounded-xl overflow-hidden aspect-4/3 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
                      alt="Goa beach sunset squad"
                      fallbackTitle="Goa Beach Squad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-3/4 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
                      alt="Bali villa group dinner"
                      fallbackTitle="Bali Group Dinner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-3 hidden sm:block">
                  <div className="rounded-xl overflow-hidden aspect-3/4 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80"
                      alt="Meghalaya waterfall dip"
                      fallbackTitle="Meghalaya Waterfall Squad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-4/3 border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                      alt="Gokarna cliff trail group"
                      fallbackTitle="Gokarna Cliff Trail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 bg-[#F7F3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              Simple 3-Step Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
              How Travelling With Us Works
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              No complicated booking portals or confusing hidden costs. Just straightforward community travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Find Your Trip',
                desc: 'Explore our upcoming calendar of Himalayan treks, beach getaways, or weekend Sahyadri trails and pick the dates that suit your calendar.'
              },
              {
                step: '02',
                title: 'Connect With the Tribe',
                desc: 'Enquire on WhatsApp, talk to our trip coordinator, get your questions answered, and review the detailed batch plan.'
              },
              {
                step: '03',
                title: 'Pack Your Bags',
                desc: 'Confirm your slot with the organizer, receive the packing guide, join the batch WhatsApp group, and get ready for adventure.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-8 border border-neutral-200/80 relative shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#163A32] text-[#F7F3E8] font-black font-display text-lg flex items-center justify-center mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-display text-[#202522] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRAVEL STORIES & EXPERIENCES */}
      <section className="py-20 bg-white border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
                From The Tribe Journal
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
                Travel Stories & Guides
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Practical guides, packing checklists, and honest solo travel experiences written by our captains.
              </p>
            </div>
            <Link
              to="/stories"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#163A32] hover:text-[#F28C45] transition-colors"
            >
              <span>Read All Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleStories.map((story) => (
              <Link
                key={story.id}
                to={`/stories/${story.slug}`}
                className="group flex flex-col bg-[#F7F3E8]/50 rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#163A32]/40 transition-all hover:shadow-md"
              >
                <div className="aspect-16/10 overflow-hidden relative">
                  <ImageWithFallback
                    src={story.coverImage}
                    alt={story.title}
                    fallbackTitle={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata kicker */}
                    <div className="text-xs text-[#163A32] font-semibold mb-1.5">
                      {story.category} · {story.readTime}
                    </div>
                    <h3 className="text-base font-bold text-[#202522] group-hover:text-[#163A32] transition-colors leading-snug line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span>{story.publishedDate}</span>
                    <span className="text-[#163A32] font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Story →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (CLEANLY LABELED DEMO / SAMPLE PROFILES) */}
      <section className="py-20 bg-[#F7F3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              Sample Tribe Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
              Stories From Past Travellers
            </h2>
            <p className="text-xs text-neutral-500 mt-1 italic">
              * Representative feedback profiles created for Stack & Pixel demonstration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-[#F28C45] font-semibold mb-2">
                    ★ ★ ★ ★ ★
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3">
                  <ImageWithFallback
                    src={t.avatar}
                    alt={t.name}
                    fallbackTitle={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-neutral-200"
                  />
                  <div className="truncate">
                    <div className="text-sm font-bold text-[#202522] truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-neutral-500 truncate">
                      {t.role} · {t.city}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM & SOCIAL COMMUNITY */}
      <section className="py-16 bg-white border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C45] uppercase">
                <Instagram className="w-4 h-4" />
                <span>Follow The Trail On Instagram</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-[#163A32] mt-0.5">
                {siteConfig.instagramHandle}
              </h3>
            </div>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#163A32] text-white rounded-xl text-xs font-bold hover:bg-[#224D43] transition-colors"
            >
              <span>Follow @roamtribeindia</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=400&q=80', caption: 'Kheerganga Pass' },
              { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80', caption: 'South Goa Sunset' },
              { img: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=400&q=80', caption: 'Cherrapunji Mist' },
              { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80', caption: 'Bali Rice Fields' },
              { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80', caption: 'Gokarna Kudle Beach' },
              { img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', caption: 'Spiti 4x4 Camp' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-neutral-200 block"
              >
                <ImageWithFallback
                  src={item.img}
                  alt={item.caption}
                  fallbackTitle={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-white text-xs font-semibold drop-shadow-xs">
                    {item.caption}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER / COMMUNITY SIGNUP */}
      <section className="py-20 bg-[#163A32] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-widest text-[#F28C45] font-bold mb-2">
            Stay In The Loop
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F7F3E8]">
            Your Next Adventure Is Calling.
          </h2>
          <p className="text-sm text-[#F7F3E8]/80 mt-2 max-w-xl mx-auto">
            Get early alerts on new batch launches, secret weekend trail drops in Pune & Mumbai, and invite-only campfire meetups.
          </p>

          <div className="mt-8 bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-xs border border-white/15 max-w-2xl mx-auto text-left">
            {newsletterSubmitted ? (
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-[#F28C45] mx-auto" />
                <h4 className="text-lg font-bold text-white">Welcome aboard, {subscriberName || 'Explorer'}!</h4>
                <p className="text-xs text-[#F7F3E8]/80">
                  You are now on the Roam Tribe inner circle. (Demo validated — no backend server connected).
                </p>
                <button
                  onClick={() => setNewsletterSubmitted(false)}
                  className="mt-3 text-xs text-[#F28C45] underline font-medium"
                >
                  Enter another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#F7F3E8] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Nair"
                      value={subscriberName}
                      onChange={(e) => setSubscriberName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white text-[#202522] rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#F28C45]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#F7F3E8] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-white text-[#202522] rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#F28C45]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F7F3E8] mb-1">
                    Your Primary Travel Interest
                  </label>
                  <select
                    value={subscriberInterest}
                    onChange={(e) => setSubscriberInterest(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white text-[#202522] rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#F28C45]"
                  >
                    <option value="Weekend Getaways & Sahyadris">Weekend Getaways & Sahyadri Trails (Pune/Mumbai)</option>
                    <option value="Himalayan Treks & Parvati">Himalayan Treks & Parvati Valley</option>
                    <option value="Beach Escapes & Gokarna">Coastal Escapes & Secret Beaches</option>
                    <option value="International Tours">International Group Tours (Bali / Thailand)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#F28C45] text-white font-bold rounded-lg hover:bg-[#e07b36] transition-colors shadow-sm text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe to Tribe Alerts</span>
                </button>

                <p className="text-[11px] text-[#F7F3E8]/60 text-center">
                  Zero spam. Only handpicked travel plans. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        trip={selectedTripForEnquiry}
      />
      <CommunityModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
      />
    </div>
  );
};
