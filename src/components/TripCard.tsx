import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react';
import { Trip } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface TripCardProps {
  trip: Trip;
  onEnquire?: (trip: Trip) => void;
}

export const TripCard: React.FC<TripCardProps> = ({ trip, onEnquire }) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#163A32]/40 transition-all duration-300 hover:shadow-xl">
      {/* Visual media container */}
      <Link to={`/trips/${trip.slug}`} className="block relative aspect-4/3 overflow-hidden">
        <ImageWithFallback
          src={trip.heroImage}
          alt={trip.title}
          fallbackTitle={trip.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Scrim for contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Departure & Seats alert unboxed on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white drop-shadow-xs pointer-events-none">
          <span className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#F28C45]" />
            {trip.departureDateFormatted}
          </span>
          <span className="flex items-center gap-1 font-semibold text-amber-200">
            <Users className="w-3.5 h-3.5" />
            {trip.availableSeats > 0 ? `${trip.availableSeats} seats left` : 'Waitlist Only'}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean unboxed metadata kicker with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-2">
            <span className="text-[#163A32] font-semibold">{trip.category}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{trip.duration}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{trip.fitnessLevel}</span>
          </div>

          {/* Primary Trip Title */}
          <Link to={`/trips/${trip.slug}`} className="block group/title">
            <h3 className="text-lg font-bold text-[#202522] group-hover/title:text-[#163A32] transition-colors leading-snug line-clamp-1">
              {trip.title}
            </h3>
          </Link>

          {/* Tagline / Micro description */}
          <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
            {trip.tagline}
          </p>

          {/* Starting Cities */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-3 pt-3 border-t border-neutral-100">
            <MapPin className="w-3.5 h-3.5 text-[#F28C45] shrink-0" />
            <span className="truncate">Starts from: {trip.startingCity.join(', ')}</span>
          </div>
        </div>

        {/* Pricing & CTA Row */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] text-neutral-600 uppercase tracking-wider font-medium">
              Starting from
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-[#163A32] font-display tabular-nums">
                ₹{trip.startingPrice.toLocaleString('en-IN')}
              </span>
              {trip.originalPrice && (
                <span className="text-xs text-neutral-600 line-through tabular-nums">
                  ₹{trip.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onEnquire && (
              <button
                type="button"
                onClick={() => onEnquire(trip)}
                className="px-3 py-2 text-xs font-semibold text-[#163A32] border border-[#163A32]/30 hover:bg-[#163A32] hover:text-white rounded-lg transition-colors cursor-pointer"
                title="Quick Enquiry"
              >
                Enquire
              </button>
            )}
            <Link
              to={`/trips/${trip.slug}`}
              className="inline-flex items-center gap-1 px-3.5 py-2 bg-[#163A32] text-white hover:bg-[#224D43] text-xs font-semibold rounded-lg transition-all duration-200 shadow-xs hover:shadow whitespace-nowrap"
            >
              <span>Explore Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
