import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle, Instagram, HelpCircle, Users } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ContactPage: React.FC = () => {
  const [activeType, setActiveType] = useState<'individual' | 'custom-group'>('individual');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [travellerCount, setTravellerCount] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const prefilledWhatsApp = `Hi Roam Tribe India! 👋 I'm contacting you regarding a ${
    activeType === 'custom-group' ? 'custom private squad trip' : 'group trip enquiry'
  } to ${destination || '[Destination]'} for ${travellerCount} people around ${travelDates || 'upcoming dates'}. My name is ${name || '[My Name]'}.`;

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-[#163A32] tracking-tight">
            Let’s Plan Your Next Adventure
          </h1>
          <p className="text-sm text-neutral-600 mt-2">
            Have questions about upcoming batches, looking for custom friend-squad itineraries, or want to join our Pune & Mumbai community? We’re always here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-xs space-y-6">
              <h2 className="text-xl font-bold font-display text-[#163A32]">
                Direct Community Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(
                    'Hi Roam Tribe! I would like to enquire about upcoming group trips.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-950 transition-colors border border-emerald-200/60"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#163A32]">WhatsApp Support (Fastest)</div>
                    <div className="text-neutral-600 font-mono text-xs mt-0.5">{siteConfig.formattedPhone}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">Available 9:00 AM – 9:00 PM IST</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/60">
                  <Mail className="w-5 h-5 text-[#F28C45] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#163A32]">Business & Collaboration Email</div>
                    <div className="text-neutral-600 font-mono text-xs mt-0.5">{siteConfig.contactEmail}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">For corporate retreats, brands & sponsors</div>
                  </div>
                </div>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-[#163A32] transition-colors border border-neutral-200/60"
                >
                  <Instagram className="w-5 h-5 text-[#F28C45] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#163A32]">Instagram Direct Message</div>
                    <div className="text-neutral-600 text-xs mt-0.5">{siteConfig.instagramHandle}</div>
                    <div className="text-[11px] text-neutral-500 mt-1">Daily trail updates, photos & stories</div>
                  </div>
                </a>
              </div>

              {/* City Hubs */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                  Departure & Pickup Hubs
                </h3>

                {siteConfig.primaryHubs.map((hub) => (
                  <div key={hub.city} className="flex items-start gap-2.5 text-xs text-neutral-600">
                    <MapPin className="w-4 h-4 text-[#F28C45] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">{hub.city} Hub:</strong> {hub.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom squad callout */}
            <div className="bg-[#163A32] text-white p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C45] uppercase">
                <Users className="w-4 h-4" />
                <span>Custom Squad & Corporate Trips</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Planning a trip for 8+ travellers?
              </h4>
              <p className="text-xs text-[#F7F3E8]/80 leading-relaxed">
                We craft tailor-made getaways with private transport from Pune or Mumbai, dedicated trek captains, and bespoke stays for your office team or college alumni circle.
              </p>
            </div>
          </div>

          {/* Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-xs">
              {/* Type Switcher */}
              <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => setActiveType('individual')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeType === 'individual'
                      ? 'bg-white text-[#163A32] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Join an Existing Batch
                </button>
                <button
                  type="button"
                  onClick={() => setActiveType('custom-group')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeType === 'custom-group'
                      ? 'bg-white text-[#163A32] shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Custom Squad / Corporate (8+)
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold font-display text-[#163A32]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <strong>{name}</strong>! Your enquiry has been received. Our team will reach out via WhatsApp on <span className="font-mono text-[#163A32] font-semibold">{phone}</span> shortly.
                  </p>
                  <p className="text-xs text-neutral-400 italic">
                    * Note: This is a front-end demo for Stack & Pixel showcase. No real database record has been created.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-[#163A32] text-white rounded-lg text-xs font-semibold hover:bg-[#224D43]"
                    >
                      Submit Another Query
                    </button>
                    <a
                      href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(prefilledWhatsApp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#25D366] text-white rounded-lg text-xs font-semibold hover:bg-[#1ebc59]"
                    >
                      Chat on WhatsApp Now
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Siddharth Patil"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kasol, Meghalaya, Goa, Bali..."
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        Tentative Dates / Month
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Late October / Diwali Weekend"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                        Number of Travellers
                      </label>
                      <select
                        value={travellerCount}
                        onChange={(e) => setTravellerCount(e.target.value)}
                        className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 bg-white focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                      >
                        <option value="1">1 (Solo Explorer)</option>
                        <option value="2">2 (Couple or Friends)</option>
                        <option value="3-5">3–5 (Small Squad)</option>
                        <option value="6-10">6–10 Travellers</option>
                        <option value="10+">10+ Travellers (Custom Group)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1">
                      Your Message or Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your squad, preferred pace, starting city (Pune/Mumbai/Delhi), dietary needs, or any specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full text-sm border border-neutral-300 rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#163A32]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-[#163A32] text-white rounded-xl text-sm font-bold hover:bg-[#224D43] transition-colors cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Trip Request</span>
                    </button>
                    <a
                      href={`https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodeURIComponent(prefilledWhatsApp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] text-white rounded-xl text-sm font-bold hover:bg-[#1ebc59] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-neutral-500 text-center pt-2">
                    * Demo Form: Validated in browser. Connects cleanly with any CRM or webhook backend.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
