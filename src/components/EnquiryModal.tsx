import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Copy, Check } from 'lucide-react';
import { Trip } from '../types';
import { generateWhatsAppLink } from './WhatsAppButton';
import { siteConfig } from '../data/siteConfig';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  trip?: Trip | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, trip }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Pune');
  const [travellerCount, setTravellerCount] = useState('1');
  const [batchDate, setBatchDate] = useState(trip?.nextBatches[0] || trip?.departureDateFormatted || '');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const prefilledText = trip
    ? `Hi Roam Tribe India! 👋 I would like to join the ${trip.title} (${batchDate || trip.departureDateFormatted}) for ${travellerCount} traveller(s). My name is ${name || '[My Name]'}, departing from ${city}. Please share booking details.`
    : `Hi Roam Tribe India! 👋 I am interested in upcoming group trips from ${city}. Please share upcoming batches and community details.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(prefilledText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#163A32] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#F28C45] font-semibold">
              Direct Trip Enquiry
            </span>
            <h3 className="text-lg font-bold font-display mt-0.5">
              {trip ? trip.title : 'Plan Your Next Adventure'}
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-[#202522]">Enquiry Received!</h4>
              <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our trip captain will connect with you via WhatsApp at{' '}
                <span className="font-mono text-[#163A32] font-semibold">{phone}</span> within 2–4 hours with batch availability, inclusions, and payment options.
              </p>

              <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(prefilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#163A32] text-white rounded-lg text-sm font-medium hover:bg-[#224D43] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Continue on WhatsApp Now
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 border border-neutral-300 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors"
                >
                  Done
                </button>
              </div>

              <p className="text-xs text-neutral-600 mt-4">
                * Note: This is an interactive demo for Stack & Pixel showcase. No real transaction has occurred.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F7F3E8] p-3 rounded-xl border border-amber-200/60 text-xs text-[#202522] flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#F28C45] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#163A32]">Fastest Response:</span> You can chat directly on WhatsApp, or leave your enquiry below. We usually reply within a few hours.
                </div>
              </div>

              {trip && trip.nextBatches && trip.nextBatches.length > 0 && (
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Select Upcoming Batch
                  </label>
                  <select
                    value={batchDate}
                    onChange={(e) => setBatchDate(e.target.value)}
                    className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  >
                    {trip.nextBatches.map((b) => (
                      <option key={b} value={b}>
                        Batch departure: {b}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Starting City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  >
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Number of Travellers
                  </label>
                  <select
                    value={travellerCount}
                    onChange={(e) => setTravellerCount(e.target.value)}
                    className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                  >
                    <option value="1">Solo Traveller (1)</option>
                    <option value="2">2 Travellers (Friends / Couple)</option>
                    <option value="3-4">Small Group (3-4)</option>
                    <option value="5+">Squad (5+ travellers)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Questions or Dietary Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Vegetarian food requirement, room sharing questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#163A32] text-white rounded-lg text-sm font-semibold hover:bg-[#224D43] transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Trip Enquiry
                </button>
                <a
                  href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(prefilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:bg-[#1ebc59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Instant WhatsApp
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-neutral-600">
                <span>Want to paste your query directly?</span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1 text-[#163A32] hover:underline font-medium cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
