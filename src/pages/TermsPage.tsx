import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, AlertCircle, FileText } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F3E8] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163A32] hover:text-[#F28C45] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xs space-y-10">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
              Policies & Guidelines
            </div>
            <h1 className="text-3xl font-black font-display text-[#163A32]">
              Community Code, Terms & Cancellation
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Last updated: October 2026 · Roam Tribe India Demo by {siteConfig.studioCredit.name}
            </p>
          </div>

          {/* Demo Disclaimer Box */}
          <div className="bg-amber-50/80 border border-amber-200 p-5 rounded-2xl flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-[#F28C45] shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Stack & Pixel Demonstration Notice</strong>
              This website is a conceptual brand identity, UI/UX, and engineering showcase developed by{' '}
              <strong>Stack & Pixel</strong> for prospective Indian travel communities, trekking clubs, and group travel agencies. Fictional sample trips and itineraries are presented for demonstration purposes.
            </div>
          </div>

          {/* Cancellation Policy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-[#163A32] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>1. Booking, Rescheduling & Cancellation Policy</span>
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>Reservation Deposit:</strong> A 30% initial token deposit is required to confirm a seat in any upcoming batch. The remaining balance is payable 7 days prior to departure.
              </p>
              <p>
                <strong>Batch Date Rescheduling:</strong> Travellers may reschedule their booking to any available future batch within 12 months with zero penalty up to 14 days before the scheduled trip start date.
              </p>
              <p>
                <strong>Standard Cancellation Deductions:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>15 or more days prior: 90% refund of the deposit.</li>
                <li>7 to 14 days prior: 50% refund or 75% credit voucher valid for any trip.</li>
                <li>Less than 7 days prior: Non-refundable due to pre-locked hotel rooms, vehicle commitments, and permits.</li>
              </ul>
              <p>
                <strong>Weather Disruptions:</strong> In the event of force majeure (extreme weather, landslides, roadblocks), Roam Tribe offers alternative itineraries or full credit vouchers.
              </p>
            </div>
          </section>

          {/* Community Code of Conduct */}
          <section className="space-y-3 pt-6 border-t border-neutral-100">
            <h2 className="text-xl font-bold font-display text-[#163A32] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#F28C45]" />
              <span>2. The Roam Tribe Community Code</span>
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                We foster a safe, inclusive, welcoming environment for travellers of all backgrounds.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Zero Tolerance for Harassment:</strong> Respect fellow travellers, homestay hosts, and trek leads. Any form of harassment will result in immediate removal from the batch.</li>
                <li><strong>Solo Female Traveller Safety:</strong> Same-gender room sharing is guaranteed. We maintain strict night safety protocols at all mountain and beach camps.</li>
                <li><strong>Leave No Trace (LNT):</strong> We pack out what we pack in. Never dispose of plastic bottles or litter along mountain trails or beaches.</li>
                <li><strong>Respect Local Cultures:</strong> When visiting sacred spots, temples, or remote tribal hamlets, dress modestly and ask permission before taking close-up portraits.</li>
              </ul>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="space-y-3 pt-6 border-t border-neutral-100">
            <h2 className="text-xl font-bold font-display text-[#163A32]">
              3. Privacy & Communication Policy
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We respect your contact details. Phone numbers and email addresses collected via WhatsApp enquiries or forms are used exclusively for itinerary dispatch, batch logistics, and verified community notifications. We do not sell or share traveller data with third-party advertisers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
