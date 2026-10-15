import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass, Calendar, Globe } from 'lucide-react';
import { sampleDestinations } from '../data/destinationsData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const DestinationsPage: React.FC = () => {
  const [filterRegion, setFilterRegion] = useState<'All' | 'India' | 'International'>('All');

  const filteredDestinations = sampleDestinations.filter((d) => {
    if (filterRegion === 'All') return true;
    return d.country === filterRegion;
  });

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
            Explore Destinations
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-[#163A32] tracking-tight">
            Discover Your Next Horizon
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            From the mystical rainforests of Meghalaya and rugged Sahyadri cliffs to tropical Balinese waterfalls and Himalayan passes.
          </p>

          {/* Region Tabs */}
          <div className="mt-8 inline-flex p-1 bg-neutral-200/70 rounded-xl">
            {(['All', 'India', 'International'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilterRegion(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  filterRegion === tab
                    ? 'bg-white text-[#163A32] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tab === 'All' ? 'All Destinations' : `${tab} Escapes`}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              id={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#163A32]/40 transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Media Container */}
                <div className="relative aspect-16/10 overflow-hidden">
                  <ImageWithFallback
                    src={dest.coverImage}
                    alt={dest.name}
                    fallbackTitle={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 text-[11px] font-bold text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {dest.stateOrRegion}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-semibold">
                      <Globe className="w-3.5 h-3.5 text-[#F28C45]" />
                      {dest.country}
                    </span>
                    <span className="font-medium text-amber-200">
                      {dest.tripCount} Active Batches
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Clean unboxed category list */}
                  <div className="text-xs text-[#163A32] font-semibold mb-2">
                    {dest.categories.join(' · ')}
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#202522] group-hover:text-[#163A32] transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-xs font-medium text-[#F28C45] mt-1">
                    "{dest.tagline}"
                  </p>

                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>Best time: {dest.bestTimeToVisit}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  to={`/trips?q=${encodeURIComponent(dest.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-[#163A32] text-white rounded-lg text-xs font-bold hover:bg-[#224D43] transition-colors"
                >
                  <span>Explore {dest.name} Trips</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Demo note */}
        <div className="mt-12 text-center text-xs text-neutral-500 italic">
          * Destinations listed above represent curated sample circuits designed for Roam Tribe India.
        </div>
      </div>
    </div>
  );
};
