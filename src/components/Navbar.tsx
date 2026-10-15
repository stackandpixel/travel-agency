import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Compass, Phone } from 'lucide-react';
import { CommunityModal } from './CommunityModal';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communityModalOpen, setCommunityModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Upcoming Trips', path: '/trips' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Travel Styles', path: '/#styles' },
    { label: 'Travel Stories', path: '/stories' },
    { label: 'About Us', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F7F3E8]/95 backdrop-blur-md border-b border-[#202522]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-18">
            {/* Zone 1: Brand title, single text element wordmark */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-black font-display tracking-tight text-[#163A32] whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-[#163A32] text-[#F7F3E8] flex items-center justify-center font-bold text-base group-hover:bg-[#F28C45] transition-colors">
                R
              </span>
              <span>Roam Tribe India</span>
            </Link>

            {/* Zone 2: 4–5 concise single-line nav links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#202522]/80">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`hover:text-[#163A32] transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                    isActive(item.path)
                      ? 'text-[#163A32] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#163A32]'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#163A32] hover:text-[#224D43] px-3 py-2 transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact Hub</span>
              </Link>
              <button
                type="button"
                onClick={() => setCommunityModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#163A32] rounded-lg hover:bg-[#224D43] transition-colors shadow-xs hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-[#F28C45]" />
                <span>Join Community</span>
              </button>
            </div>

            {/* Mobile burger toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setCommunityModalOpen(true)}
                className="px-2.5 py-1.5 bg-[#163A32] text-white rounded-lg text-xs font-semibold"
              >
                Join
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#202522] hover:bg-neutral-200/50 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#202522]/10 bg-[#F7F3E8] px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#163A32] text-white'
                      : 'text-[#202522] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#202522] hover:bg-black/5"
              >
                Contact & Custom Escapes
              </Link>
            </nav>

            <div className="pt-3 border-t border-[#202522]/10 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCommunityModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#163A32] text-white text-sm font-bold rounded-lg"
              >
                <Users className="w-4 h-4 text-[#F28C45]" />
                Join WhatsApp Travel Tribe
              </button>
              <a
                href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(
                  'Hi Roam Tribe India! I have a general enquiry about upcoming group trips.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#163A32] border border-[#163A32]/30 rounded-lg"
              >
                WhatsApp Us: {siteConfig.formattedPhone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Community Modal */}
      <CommunityModal
        isOpen={communityModalOpen}
        onClose={() => setCommunityModalOpen(false)}
      />
    </>
  );
};
