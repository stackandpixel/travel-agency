import React, { useState } from 'react';
import { X, Users, MessageCircle, MapPin, Sparkles, Check } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose }) => {
  const [cityPref, setCityPref] = useState<'Pune' | 'Mumbai' | 'All'>('Pune');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleJoinWhatsApp = () => {
    window.open(
      `https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(
        `Hi Roam Tribe India! 👋 I'd like to join the ${cityPref} Travel Community WhatsApp group for weekend getaways, trek drops, and local meetups.`
      )}`,
      '_blank'
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=Join%20Roam%20Tribe`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Banner */}
        <div className="bg-[#163A32] text-white p-6 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#F28C45]/20 blur-xl" />
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-[#F28C45] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Community Network
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-xl font-bold font-display text-white">Join the Roam Tribe Squad</h3>
          <p className="text-xs text-[#F7F3E8]/80 mt-1">
            Over 4,200+ travellers across Pune & Mumbai sharing weekend trails, road trips, and sunset catchups.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Select Your Preferred Hub
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 bg-neutral-100 rounded-lg">
              {(['Pune', 'Mumbai', 'All'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCityPref(c)}
                  className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                    cityPref === c
                      ? 'bg-white text-[#163A32] shadow-xs font-semibold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {c === 'All' ? 'Pan-India' : `${c} Hub`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-xs text-neutral-600 border border-neutral-100 rounded-xl p-3.5 bg-neutral-50/70">
            <div className="flex items-center gap-2 text-neutral-900 font-medium">
              <Users className="w-4 h-4 text-[#163A32]" />
              <span>What you get inside the community:</span>
            </div>
            <div className="space-y-1.5 pl-6 text-neutral-600">
              <p>• 48-hour early-bird access to Himalayan & international batches</p>
              <p>• Weekly spontaneous Sahyadri weekend trek announcements</p>
              <p>• Verified solo travel roommates pairing & carpooling</p>
              <p>• Monthly offline sunset coffee & acoustic jam meetups</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <MapPin className="w-3.5 h-3.5 text-[#F28C45] shrink-0" />
            <span>Regular meetups at FC Road (Pune) & Bandra Bandstand (Mumbai)</span>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={handleJoinWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#1ebc59] transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Join {cityPref} WhatsApp Community
            </button>
            <button
              onClick={handleCopyLink}
              className="w-full py-2 text-xs text-neutral-600 hover:text-neutral-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : null}
              {copied ? 'Invite Link Copied!' : 'Copy Community Invitation Link'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
