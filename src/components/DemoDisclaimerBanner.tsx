import React, { useState } from 'react';
import { Sparkles, X, Settings2, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const DemoDisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [customPhone, setCustomPhone] = useState(siteConfig.primaryWhatsAppNumber);
  const [savedPhone, setSavedPhone] = useState(siteConfig.primaryWhatsAppNumber);
  const [copied, setCopied] = useState(false);

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        className="fixed bottom-4 left-4 z-40 bg-[#163A32] text-white text-[11px] font-semibold py-1.5 px-3 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
        title="View Stack & Pixel Demo Info"
      >
        <Sparkles className="w-3 h-3 text-[#F28C45]" />
        <span>Stack & Pixel Demo</span>
      </button>
    );
  }

  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    siteConfig.primaryWhatsAppNumber = customPhone.replace(/[^0-9]/g, '');
    siteConfig.formattedPhone = customPhone;
    setSavedPhone(siteConfig.primaryWhatsAppNumber);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowConfig(false);
    }, 1500);
  };

  return (
    <>
      <div className="bg-[#163A32] text-white text-xs py-2 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F28C45] shrink-0" />
            <span className="font-semibold text-[#F28C45] shrink-0">Demo Showcase:</span>
            <span className="text-[#F7F3E8]/90 truncate">
              Built by <strong>{siteConfig.studioCredit.name}</strong> for Indian travel communities & adventure groups.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowConfig(true)}
              className="inline-flex items-center gap-1 text-[11px] text-[#F7F3E8] hover:text-[#F28C45] underline font-medium cursor-pointer"
            >
              <Settings2 className="w-3 h-3" />
              <span>Demo Settings</span>
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-white/70 hover:text-white rounded-md hover:bg-white/10 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Demo Config Modal */}
      {showConfig && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 text-[#202522]">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2 text-sm font-bold text-[#163A32]">
                <Settings2 className="w-4 h-4 text-[#F28C45]" />
                <span>Travel Agency Demo Config</span>
              </div>
              <button
                onClick={() => setShowConfig(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-neutral-600">
              <p>
                In production, all trips, WhatsApp numbers, hub cities, and hero imagery can be customized or linked to any headless CMS (Sanity, Strapi) or Google Sheets.
              </p>

              <form onSubmit={handleSavePhone} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    WhatsApp Enquiry Number (with country code)
                  </label>
                  <input
                    type="text"
                    value={customPhone}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    placeholder="e.g. 919876543210"
                    className="w-full text-xs font-mono p-2 border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  />
                  <span className="text-[10px] text-neutral-400 mt-0.5 block">
                    All "Enquire on WhatsApp" buttons will immediately route to this number.
                  </span>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfig(false)}
                    className="px-3 py-1.5 text-xs text-neutral-600 hover:text-neutral-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#163A32] text-white rounded-lg text-xs font-bold hover:bg-[#224D43] flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : null}
                    {copied ? 'Updated!' : 'Update Number'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
