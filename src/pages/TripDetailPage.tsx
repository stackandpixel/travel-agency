import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Backpack,
  Bed,
  Bus,
  Sparkles,
  HelpCircle,
  Share2,
  Check,
  ArrowLeft
} from 'lucide-react';
import { sampleTrips } from '../data/tripsData';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { EnquiryModal } from '../components/EnquiryModal';
import { siteConfig } from '../data/siteConfig';

export const TripDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const trip = sampleTrips.find((t) => t.slug === slug);

  // States
  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'stays' | 'packing' | 'faqs'>('itinerary');
  const [selectedBatch, setSelectedBatch] = useState<string>(
    trip?.nextBatches[0] || trip?.departureDateFormatted || ''
  );
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Checklist checked state
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  if (!trip) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[#F7F3E8]">
        <h2 className="text-2xl font-bold text-[#163A32]">Trip Not Found</h2>
        <p className="text-sm text-neutral-600 mt-2 max-w-md">
          The requested trip may have moved or concluded. Explore our upcoming active group departures.
        </p>
        <Link
          to="/trips"
          className="mt-6 px-6 py-2.5 bg-[#163A32] text-white rounded-lg text-sm font-semibold hover:bg-[#224D43]"
        >
          View All Upcoming Trips
        </Link>
      </div>
    );
  }

  const toggleDay = (day: number) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const toggleChecklist = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const relatedTrips = sampleTrips
    .filter((t) => t.id !== trip.id && (t.region === trip.region || t.category === trip.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F7F3E8] pb-24 md:pb-32">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Link to="/trips" className="inline-flex items-center gap-1 hover:text-[#163A32] font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Trips</span>
            </Link>
            <span>/</span>
            <span className="text-neutral-400">{trip.category}</span>
            <span>/</span>
            <span className="text-[#163A32] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {trip.title}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1 text-xs text-neutral-600 hover:text-[#163A32] font-medium cursor-pointer"
          >
            {linkCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{linkCopied ? 'Link Copied' : 'Share Trip'}</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#163A32] text-white">
        <div className="relative h-72 sm:h-96 lg:h-[460px] overflow-hidden">
          <ImageWithFallback
            src={trip.heroImage}
            alt={trip.title}
            fallbackTitle={trip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#163A32] via-[#163A32]/40 to-transparent" />

          {/* Floating Details on Hero Bottom */}
          <div className="absolute bottom-6 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Unboxed category metadata with dot separators */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F7F3E8]/90 font-medium mb-2 drop-shadow-xs">
                <span className="text-[#F28C45] font-bold">{trip.category}</span>
                <span aria-hidden="true">·</span>
                <span>{trip.destination}</span>
                <span aria-hidden="true">·</span>
                <span>{trip.fitnessLevel} Grade</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#F7F3E8] drop-shadow-sm text-balance">
                {trip.title}
              </h1>

              <p className="text-xs sm:text-base text-[#F7F3E8]/85 mt-2 max-w-2xl drop-shadow-xs">
                {trip.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Specs Strip */}
        <div className="bg-[#102a24] border-y border-white/10 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F28C45] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase">Duration</div>
                  <div className="font-semibold text-white">{trip.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#F28C45] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase">Next Departure</div>
                  <div className="font-semibold text-white">{trip.departureDateFormatted}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C45] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase">Starting Hubs</div>
                  <div className="font-semibold text-white truncate">{trip.startingCity.join(', ')}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#F28C45] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase">Batch Availability</div>
                  <div className="font-semibold text-amber-300">
                    {trip.availableSeats} of {trip.totalSeats} seats open
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Two-Column (Details + Booking Panel) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview & Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold font-display text-[#163A32]">Trip Overview</h2>
                <p className="text-sm text-neutral-700 leading-relaxed mt-3">
                  {trip.overview}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold font-display text-[#163A32] mb-3">
                  Key Experience Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trip.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <Sparkles className="w-4 h-4 text-[#F28C45] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-neutral-200 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'itinerary', label: 'Day-Wise Itinerary' },
                { id: 'inclusions', label: 'Inclusions & Exclusions' },
                { id: 'stays', label: 'Stay & Transit' },
                { id: 'packing', label: 'Packing Checklist' },
                { id: 'faqs', label: 'Trip FAQs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-2 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-[#163A32] text-[#163A32]'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Day-Wise Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold font-display text-[#163A32]">
                    Detailed Day-Wise Plan
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveDay(activeDay === null ? 1 : null)}
                    className="text-xs text-[#163A32] hover:underline font-semibold cursor-pointer"
                  >
                    {activeDay === null ? 'Expand Days' : 'Collapse Days'}
                  </button>
                </div>

                <div className="space-y-4">
                  {trip.itinerary.map((dayItem) => {
                    const isOpen = activeDay === dayItem.day;
                    return (
                      <div
                        key={dayItem.day}
                        className="border border-neutral-200 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleDay(dayItem.day)}
                          className="w-full flex items-center justify-between p-4 bg-neutral-50/70 hover:bg-neutral-100/70 text-left transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-[#163A32] text-white text-xs font-bold flex items-center justify-center shrink-0">
                              D{dayItem.day}
                            </span>
                            <div>
                              <div className="text-xs text-neutral-500 font-medium">Day {dayItem.day}</div>
                              <div className="text-sm font-bold text-[#202522]">{dayItem.title}</div>
                            </div>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-neutral-500" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-neutral-500" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-5 border-t border-neutral-200 text-xs sm:text-sm text-neutral-700 space-y-3 bg-white">
                            <p className="leading-relaxed">{dayItem.description}</p>
                            {dayItem.highlights && dayItem.highlights.length > 0 && (
                              <div className="pt-2">
                                <div className="text-xs font-bold text-[#163A32] mb-1.5 uppercase tracking-wider">
                                  Highlights:
                                </div>
                                <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                                  {dayItem.highlights.map((h, idx) => (
                                    <span key={idx} className="bg-neutral-100 px-2.5 py-1 rounded-md">
                                      • {h}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {(dayItem.mealsIncluded || dayItem.stayType) && (
                              <div className="pt-2 border-t border-neutral-100 flex flex-wrap gap-4 text-xs text-neutral-500">
                                {dayItem.mealsIncluded && (
                                  <div>
                                    <strong className="text-neutral-700">Meals:</strong> {dayItem.mealsIncluded}
                                  </div>
                                )}
                                {dayItem.stayType && (
                                  <div>
                                    <strong className="text-neutral-700">Stay:</strong> {dayItem.stayType}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 2: Inclusions & Exclusions */}
            {activeTab === 'inclusions' && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
                <div>
                  <h3 className="text-base font-bold font-display text-emerald-800 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>What is Included in Your Package</span>
                  </h3>
                  <div className="space-y-2.5">
                    {trip.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <h3 className="text-base font-bold font-display text-neutral-800 flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-neutral-400" />
                    <span>What is Excluded</span>
                  </h3>
                  <div className="space-y-2.5">
                    {trip.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-500">
                        <span className="text-neutral-400 mt-0.5">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Stay & Transit */}
            {activeTab === 'stays' && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F28C45] flex items-center justify-center shrink-0">
                      <Bed className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#163A32]">Accommodation Details</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                        {trip.accommodation}
                      </p>
                      <p className="text-xs text-neutral-500 mt-2">
                        * Twin/triple sharing is standard. Solo travellers are paired with same-gender roommates by default. Private rooms available on request at nominal supplement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-neutral-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#163A32] flex items-center justify-center shrink-0">
                      <Bus className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#163A32]">Transportation & Vehicles</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                        {trip.transportation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-neutral-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#163A32]">Meeting Point & Reporting Time</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                        {trip.meetingPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Packing Checklist */}
            {activeTab === 'packing' && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#163A32] flex items-center gap-2">
                      <Backpack className="w-5 h-5 text-[#F28C45]" />
                      <span>Interactive Packing Checklist</span>
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Check items off as you pack your backpack.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {trip.packingList.map((item, idx) => {
                    const isDone = Boolean(checkedItems[idx]);
                    return (
                      <label
                        key={idx}
                        onClick={() => toggleChecklist(idx)}
                        className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-colors ${
                          isDone
                            ? 'bg-emerald-50/60 border-emerald-300 text-emerald-900 line-through'
                            : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => {}}
                          className="mt-0.5 accent-[#163A32]"
                        />
                        <span>{item}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 5: FAQs */}
            {activeTab === 'faqs' && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
                <h3 className="text-lg font-bold font-display text-[#163A32] flex items-center gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-[#F28C45]" />
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-3">
                  {trip.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/70">
                      <h4 className="text-sm font-bold text-[#163A32]">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-display text-[#163A32]">
                Trip Photo Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trip.galleryImages.map((img, idx) => (
                  <div key={idx} className="aspect-4/3 rounded-xl overflow-hidden border border-neutral-200">
                    <ImageWithFallback
                      src={img}
                      alt={`${trip.title} gallery photo ${idx + 1}`}
                      fallbackTitle={trip.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cancellation Policy Placeholder (Honest & Transparent) */}
            <div className="bg-[#F7F3E8] p-6 rounded-2xl border border-amber-200/70 space-y-3">
              <div className="flex items-center gap-2 text-[#163A32] font-bold text-sm">
                <ShieldAlert className="w-4 h-4 text-[#F28C45]" />
                <span>Transparent Booking & Cancellation Guidelines</span>
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                • <strong>Full batch flexibility:</strong> Free date transfer to any other batch up to 14 days before departure.
                <br />
                • <strong>15+ days prior:</strong> 90% refund of booking deposit.
                <br />
                • <strong>7–14 days prior:</strong> 50% refund or 75% credit note towards future tribe departures.
                <br />
                • <strong>Under 7 days:</strong> Non-refundable due to advance hotel & transport lock-ins.
              </p>
              <div className="text-[11px] text-neutral-500 pt-1">
                * Note: This is an interactive demo representation. No transactions or seat locks are binding without organizer sign-off.
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Enquiry Panel */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-lg space-y-5">
              <div>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                  Starting Price Per Person
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black font-display text-[#163A32] tabular-nums">
                    ₹{trip.startingPrice.toLocaleString('en-IN')}
                  </span>
                  {trip.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through tabular-nums">
                      ₹{trip.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs text-neutral-500">+ 5% GST</span>
                </div>
              </div>

              {/* Select Upcoming Batch */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wide">
                  Select Departure Batch
                </label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full text-xs font-medium border border-neutral-300 rounded-lg p-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                >
                  {trip.nextBatches.map((b) => (
                    <option key={b} value={b}>
                      {b} (Limited Slots)
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Indicator */}
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/60 text-xs text-amber-900 flex items-center justify-between">
                <span className="font-semibold">Batch Status:</span>
                <span className="font-bold text-[#F28C45]">
                  {trip.availableSeats} Seats Left
                </span>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-1">
                <WhatsAppButton
                  tripTitle={trip.title}
                  departureDate={selectedBatch}
                  variant="sticky"
                  label="Enquire on WhatsApp"
                  className="w-full"
                />

                <button
                  type="button"
                  onClick={() => setEnquiryModalOpen(true)}
                  className="w-full py-2.5 text-xs font-bold text-[#163A32] border border-[#163A32] rounded-lg hover:bg-[#163A32] hover:text-white transition-colors cursor-pointer"
                >
                  Submit Detailed Enquiry Form
                </button>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified boutique stays & certified captains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Equal gender ratio & solo-friendly pairing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quick WhatsApp replies (9 AM – 9 PM)</span>
                </div>
              </div>
            </div>

            {/* Trip Captain Card */}
            <div className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-xs flex items-center gap-3.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Roam Tribe Captain"
                fallbackTitle="Captain"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-neutral-200"
              />
              <div className="truncate">
                <div className="text-xs uppercase tracking-wider text-[#F28C45] font-bold">
                  Lead Trip Captain
                </div>
                <div className="text-sm font-bold text-[#163A32]">
                  Rohan & Roam Crew
                </div>
                <div className="text-[11px] text-neutral-500">
                  Certified Wilderness First Aid & Trail Lead
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Trips Section */}
        {relatedTrips.length > 0 && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-bold font-display text-[#163A32] mb-6">
              You Might Also Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTrips.map((rTrip) => (
                <Link
                  key={rTrip.id}
                  to={`/trips/${rTrip.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#163A32]/40 transition-all hover:shadow-md block group"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <ImageWithFallback
                      src={rTrip.heroImage}
                      alt={rTrip.title}
                      fallbackTitle={rTrip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-neutral-500 mb-1">
                      {rTrip.category} · {rTrip.duration}
                    </div>
                    <h3 className="text-sm font-bold text-[#202522] group-hover:text-[#163A32] transition-colors truncate">
                      {rTrip.title}
                    </h3>
                    <div className="mt-2 text-sm font-bold text-[#163A32] tabular-nums">
                      From ₹{rTrip.startingPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        trip={trip}
      />
    </div>
  );
};
