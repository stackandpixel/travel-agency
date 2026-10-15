import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Compass, Heart, Shield, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { siteConfig } from '../data/siteConfig';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rohan Deshmukh',
      role: 'Founder & Head of Trails',
      city: 'Pune',
      favDestination: 'Parvati Valley & Spiti',
      bio: 'Former software engineer who spent weekends mapping Sahyadri fort trails before launching Roam Tribe to bring urban professionals into the wild.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Aanya Kulkarni',
      role: 'Community Experience Director',
      city: 'Mumbai',
      favDestination: 'Meghalaya & South Goa',
      bio: 'Passionate about solo traveller safety and cultural storytelling. Curates our women-friendly departures and acoustic campfire meetups.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Vikramjit Singh',
      role: 'Senior High-Altitude Captain',
      city: 'Chandigarh / Manali',
      favDestination: 'Kheerganga & Pin Parvati',
      bio: 'Certified Basic & Advance Mountaineer from NIM Uttarkashi with over 80+ batches guided across Himachal and Uttarakhand.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Tanvi Shenoy',
      role: 'International Escapes Curator',
      city: 'Pune / Bali',
      favDestination: 'Bali & Vietnam',
      bio: 'Scouts hidden waterfalls, design pool villas, and boutique culinary gems across Southeast Asia for our international departures.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45]">
              About Roam Tribe India
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-display text-[#163A32] tracking-tight leading-[1.1]">
              Born From a Desire for Real Connection.
            </h1>
            <p className="text-base text-neutral-700 leading-relaxed">
              We started Roam Tribe India in Pune with a simple realization: too many young professionals spend their work weeks staring at screens and their weekends wanting to explore, but held back by flaky friend group chats or the hesitation of travelling alone.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We set out to create something different: a travel community where solo travellers feel immediately welcome, itineraries are thoughtfully balanced between thrill and relaxation, and strangers genuinely leave as friends. Today, our community connects thousands of adventurers across Pune, Mumbai, and pan-India.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#163A32]">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#F28C45]" />
                Solo-Friendly Default
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#F28C45]" />
                Zero-Fluff Safety & Verification
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#F28C45]" />
                Community Over Commercialism
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl aspect-4/3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Roam Tribe mountain community"
                fallbackTitle="Roam Tribe Mountain Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Philosophy & Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              Our Core Philosophy
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#163A32]">
              What Makes The Tribe Different?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#163A32] text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold font-display text-[#202522]">
                Curated, Not Commercial
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We avoid rushed 20-stop tourist bus loops. Our trips emphasize slow mornings, authentic village stays, lesser-known trails, and time to sit by a campfire with music.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#163A32] text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold font-display text-[#202522]">
                Safe for Solo Women Travellers
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Close to half of our community travellers are women embarking solo. We enforce strict community guidelines, verified property inspections, and same-gender room allotments.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#163A32] text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold font-display text-[#202522]">
                Beyond the Trip Itself
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                When you return from a trip, the adventure continues. Members join local WhatsApp chapters, attend Pune and Mumbai coffee meetups, and plan their own carpooling weekend escapes.
              </p>
            </div>
          </div>
        </div>

        {/* Fictional Demo Team Profiles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              The People Behind The Adventures
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#163A32]">
              Meet The Trip Captains
            </h2>
            <p className="text-xs text-neutral-500 mt-1 italic">
              * Representative demo team profiles created for Stack & Pixel showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={m.image}
                      alt={m.name}
                      fallbackTitle={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[#F28C45] font-bold uppercase tracking-wider mb-0.5">
                      {m.role}
                    </div>
                    <h3 className="text-base font-bold text-[#202522]">{m.name}</h3>
                    <div className="text-xs text-neutral-500 mb-2">
                      Based in {m.city} · Fav: {m.favDestination}
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#163A32] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#F7F3E8]">
            Ready to Find Your People?
          </h2>
          <p className="text-sm text-[#F7F3E8]/80 max-w-xl mx-auto">
            Browse our upcoming departures from Pune and Mumbai or connect with our trip coordinators to find the trip that suits your travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              to="/trips"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F28C45] text-white font-bold rounded-xl hover:bg-[#e07b36] transition-colors text-sm"
            >
              <span>Explore Upcoming Trips</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Trip Captain</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
