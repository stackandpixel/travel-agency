import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle, MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#163A32] text-[#F7F3E8] border-t border-[#224D43] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#224D43]">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black font-display tracking-tight text-[#F7F3E8]">
                Roam Tribe India
              </span>
            </Link>
            <p className="text-sm text-[#F7F3E8]/80 leading-relaxed max-w-sm">
              {siteConfig.tagline} We bring together young explorers, solo travellers, and road trippers across Pune, Mumbai, and beyond for authentic group travel experiences.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F28C45] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                aria-label="YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3 text-xs text-[#F7F3E8]/60 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F28C45]" />
                <span>Pune Hub: Baner Road & FC Road</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F28C45]" />
                <span>Mumbai Hub: Bandra Reclamation & Dadar</span>
              </div>
            </div>
          </div>

          {/* Col 3: Explore Trips */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
              Explore Trips
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F3E8]/80">
              <li>
                <Link to="/trips?category=Weekend+Getaway" className="hover:text-white transition-colors">
                  Weekend Getaways
                </Link>
              </li>
              <li>
                <Link to="/trips?category=Mountains+%26+Treks" className="hover:text-white transition-colors">
                  Himalayan Treks
                </Link>
              </li>
              <li>
                <Link to="/trips?category=Beaches+%26+Islands" className="hover:text-white transition-colors">
                  Beach Escapes
                </Link>
              </li>
              <li>
                <Link to="/trips?category=International+Trips" className="hover:text-white transition-colors">
                  International Tours
                </Link>
              </li>
              <li>
                <Link to="/trips?city=Pune" className="hover:text-white transition-colors">
                  Trips from Pune
                </Link>
              </li>
              <li>
                <Link to="/trips?city=Mumbai" className="hover:text-white transition-colors">
                  Trips from Mumbai
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
              Destinations
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F3E8]/80">
              <li>
                <Link to="/destinations#dest-himachal" className="hover:text-white transition-colors">
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link to="/destinations#dest-meghalaya" className="hover:text-white transition-colors">
                  Meghalaya
                </Link>
              </li>
              <li>
                <Link to="/destinations#dest-goa" className="hover:text-white transition-colors">
                  Goa & Secret Coves
                </Link>
              </li>
              <li>
                <Link to="/destinations#dest-maharashtra" className="hover:text-white transition-colors">
                  The Sahyadris
                </Link>
              </li>
              <li>
                <Link to="/destinations#dest-bali" className="hover:text-white transition-colors">
                  Bali (Indonesia)
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors inline-flex items-center gap-1 font-semibold text-[#F28C45]">
                  <span>View All 14 Regions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Community & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
              Tribe & Support
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F3E8]/80">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-white transition-colors">
                  Travel Journal & Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Custom Squad Trips
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Community Safety Code
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Stack & Pixel credit & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F3E8]/60">
          <div>
            © {new Date().getFullYear()} Roam Tribe India. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-center">
            <span>Designed & Developed by <strong className="text-white">Stack & Pixel</strong></span>
            <span className="text-[#F7F3E8]/30">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#F7F3E8]/30">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Demo Showcase Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
