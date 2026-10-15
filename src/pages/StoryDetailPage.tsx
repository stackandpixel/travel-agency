import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, Compass } from 'lucide-react';
import { sampleStories } from '../data/storiesData';
import { sampleTrips } from '../data/tripsData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = sampleStories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-[#F7F3E8]">
        <h2 className="text-2xl font-bold text-[#163A32]">Story Not Found</h2>
        <Link to="/stories" className="mt-4 text-xs font-bold text-[#163A32] underline">
          Return to All Stories
        </Link>
      </div>
    );
  }

  const relatedTrip = story.relatedTripSlug
    ? sampleTrips.find((t) => t.slug === story.relatedTripSlug)
    : null;

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163A32] hover:text-[#F28C45] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Travel Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs space-y-8">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45]">
              {story.category}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black font-display text-[#163A32] leading-tight text-balance">
              {story.title}
            </h1>

            {/* Author bar */}
            <div className="pt-2 flex items-center justify-between border-y border-neutral-100 py-3 text-xs text-neutral-500">
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={story.author.avatar}
                  alt={story.author.name}
                  fallbackTitle={story.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#202522]">{story.author.name}</div>
                  <div className="text-[11px] text-neutral-400">{story.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span>{story.publishedDate}</span>
                <span>·</span>
                <span>{story.readTime}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden aspect-16/10 border border-neutral-200">
            <ImageWithFallback
              src={story.coverImage}
              alt={story.title}
              fallbackTitle={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Body */}
          <div className="space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed max-w-none">
            {story.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Trip Card Callout */}
          {relatedTrip && (
            <div className="mt-10 p-6 bg-[#F7F3E8] rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#F28C45] tracking-wider">
                  Featured Experience Mentioned
                </span>
                <h4 className="text-lg font-bold text-[#163A32] mt-0.5">
                  {relatedTrip.title}
                </h4>
                <p className="text-xs text-neutral-600 mt-1">
                  {relatedTrip.duration} · From ₹{relatedTrip.startingPrice.toLocaleString('en-IN')}
                </p>
              </div>

              <Link
                to={`/trips/${relatedTrip.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#163A32] text-white rounded-lg text-xs font-bold hover:bg-[#224D43] transition-colors shrink-0"
              >
                <span>View Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};
