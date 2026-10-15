import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, RotateCcw, SlidersHorizontal, MapPin, Calendar, Compass, ArrowUpDown } from 'lucide-react';
import { sampleTrips } from '../data/tripsData';
import { travelCategoriesList, citiesList } from '../data/siteConfig';
import { TripCard } from '../components/TripCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { Trip } from '../types';

export const TripsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter States
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || '');
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [durationFilter, setDurationFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'date-asc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Modal State
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  // Sync with searchParams if changed from outside
  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('category');
    const city = searchParams.get('city');
    const reg = searchParams.get('region');
    if (q !== null) setSearchQuery(q);
    if (cat !== null) setSelectedCategory(cat);
    if (city !== null) setSelectedCity(city);
    if (reg !== null) setSelectedRegion(reg);
  }, [searchParams]);

  // Compute regions present in dataset
  const regions = useMemo(() => {
    const set = new Set(sampleTrips.map((t) => t.region));
    return Array.from(set);
  }, []);

  // Filtered & Sorted Trips
  const filteredTrips = useMemo(() => {
    return sampleTrips
      .filter((trip) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = trip.title.toLowerCase().includes(q);
          const matchDest = trip.destination.toLowerCase().includes(q);
          const matchTagline = trip.tagline.toLowerCase().includes(q);
          if (!matchTitle && !matchDest && !matchTagline) return false;
        }

        // Category
        if (selectedCategory && trip.category !== selectedCategory) {
          return false;
        }

        // Region
        if (selectedRegion && trip.region !== selectedRegion) {
          return false;
        }

        // Starting City
        if (selectedCity && !trip.startingCity.includes(selectedCity as any)) {
          return false;
        }

        // Duration filter
        if (durationFilter === 'weekend' && trip.durationDays > 3) {
          return false;
        }
        if (durationFilter === 'medium' && (trip.durationDays < 4 || trip.durationDays > 5)) {
          return false;
        }
        if (durationFilter === 'long' && trip.durationDays < 6) {
          return false;
        }

        // Price
        if (trip.startingPrice > maxPrice) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.startingPrice - b.startingPrice;
        if (sortBy === 'price-desc') return b.startingPrice - a.startingPrice;
        if (sortBy === 'date-asc') return new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime();
        // default featured: featured first, then lower price
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedRegion, selectedCity, durationFilter, maxPrice, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedRegion('');
    setSelectedCity('');
    setDurationFilter('');
    setMaxPrice(60000);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    Boolean(searchQuery) ||
    Boolean(selectedCategory) ||
    Boolean(selectedRegion) ||
    Boolean(selectedCity) ||
    Boolean(durationFilter) ||
    maxPrice < 60000;

  const handleEnquire = (trip: Trip) => {
    setSelectedTrip(trip);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
            Browse All Experiences
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-[#163A32] tracking-tight">
            Upcoming Group Trips
          </h1>
          <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
            Choose your next getaway from Pune, Mumbai, Delhi, and beyond. Verified boutique stays, local transport, certified leaders, and a ready-made tribe.
          </p>
        </div>

        {/* Search & Top Action Bar */}
        <div className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by destination, trip title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-2 text-xs font-bold bg-[#163A32] text-white rounded-lg"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs border border-neutral-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-hidden focus:ring-1 focus:ring-[#163A32]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="date-asc">Departure: Earliest First</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 text-xs text-[#F28C45] hover:text-[#e07b36] font-bold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Filters Sidebar + Results */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filters Desktop */}
          <aside
            className={`md:col-span-4 lg:col-span-3 bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs space-y-6 ${
              mobileFilterOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2 text-sm font-bold text-[#163A32]">
                <SlidersHorizontal className="w-4 h-4 text-[#F28C45]" />
                <span>Refine Trips</span>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs text-neutral-500 hover:text-[#163A32] underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Travel Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Travel Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs border border-neutral-200 rounded-lg p-2 bg-white focus:outline-hidden focus:ring-1 focus:ring-[#163A32]"
              >
                <option value="">All Categories ({sampleTrips.length})</option>
                {travelCategoriesList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Starting City */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Starting City Hub
              </label>
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                  <input
                    type="radio"
                    name="city"
                    checked={selectedCity === ''}
                    onChange={() => setSelectedCity('')}
                    className="accent-[#163A32]"
                  />
                  <span>All Starting Cities</span>
                </label>
                {citiesList.map((city) => (
                  <label key={city} className="flex items-center gap-2 text-xs text-neutral-700 cursor-pointer">
                    <input
                      type="radio"
                      name="city"
                      checked={selectedCity === city}
                      onChange={() => setSelectedCity(city)}
                      className="accent-[#163A32]"
                    />
                    <span>{city} Departure</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Region */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Destination Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full text-xs border border-neutral-200 rounded-lg p-2 bg-white focus:outline-hidden focus:ring-1 focus:ring-[#163A32]"
              >
                <option value="">All Regions</option>
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Trip Duration
              </label>
              <div className="space-y-1.5 text-xs text-neutral-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    checked={durationFilter === ''}
                    onChange={() => setDurationFilter('')}
                    className="accent-[#163A32]"
                  />
                  <span>Any Duration</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    checked={durationFilter === 'weekend'}
                    onChange={() => setDurationFilter('weekend')}
                    className="accent-[#163A32]"
                  />
                  <span>Weekend (2–3 Days)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    checked={durationFilter === 'medium'}
                    onChange={() => setDurationFilter('medium')}
                    className="accent-[#163A32]"
                  />
                  <span>Short Break (4–5 Days)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    checked={durationFilter === 'long'}
                    onChange={() => setDurationFilter('long')}
                    className="accent-[#163A32]"
                  />
                  <span>Extended Expedition (6+ Days)</span>
                </label>
              </div>
            </div>

            {/* Max Budget Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1">
                <span>Max Budget (INR)</span>
                <span className="text-[#163A32] font-mono tabular-nums">
                  ₹{maxPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={3000}
                max={60000}
                step={2000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#163A32] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-600 mt-1">
                <span>₹3,000</span>
                <span>₹60,000+</span>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="md:hidden w-full py-2 bg-[#163A32] text-white rounded-lg text-xs font-bold"
            >
              Apply Filters ({filteredTrips.length} Results)
            </button>
          </aside>

          {/* Results Grid */}
          <main className="md:col-span-8 lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between text-xs text-neutral-500 font-medium px-1">
              <span>
                Showing <strong className="text-[#163A32]">{filteredTrips.length}</strong> trip{filteredTrips.length === 1 ? '' : 's'}
              </span>
              {hasActiveFilters && (
                <span className="text-[#F28C45]">Filtered results</span>
              )}
            </div>

            {filteredTrips.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200">
                <Compass className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#202522]">No trips match your current filters</h3>
                <p className="text-sm text-neutral-500 mt-1 max-w-md mx-auto">
                  Try adjusting your budget slider, selecting a different starting city, or clearing destination search terms.
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-5 px-5 py-2.5 bg-[#163A32] text-white rounded-lg text-xs font-semibold hover:bg-[#224D43] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} onEnquire={handleEnquire} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        trip={selectedTrip}
      />
    </div>
  );
};
