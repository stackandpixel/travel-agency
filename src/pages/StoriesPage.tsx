import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { sampleStories } from '../data/storiesData';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const StoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F3E8] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-1">
            The Roam Tribe Journal
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-[#163A32] tracking-tight">
            Travel Stories & Trail Guides
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            First-hand advice, packing wisdom, weekend escapes from Pune & Mumbai, and raw stories of making friends in the wild.
          </p>
        </div>

        {/* Featured Story Card (First) */}
        {sampleStories[0] && (
          <Link
            to={`/stories/${sampleStories[0].slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-neutral-200/80 hover:border-[#163A32]/40 transition-all hover:shadow-xl mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 aspect-16/10 lg:aspect-auto overflow-hidden">
                <ImageWithFallback
                  src={sampleStories[0].coverImage}
                  alt={sampleStories[0].title}
                  fallbackTitle={sampleStories[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#F28C45] mb-2">
                    Editor's Pick · {sampleStories[0].category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#163A32] group-hover:text-[#F28C45] transition-colors leading-tight">
                    {sampleStories[0].title}
                  </h2>
                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {sampleStories[0].excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ImageWithFallback
                      src={sampleStories[0].author.avatar}
                      alt={sampleStories[0].author.name}
                      fallbackTitle={sampleStories[0].author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-[#202522]">
                        {sampleStories[0].author.name}
                      </div>
                      <div className="text-neutral-500">
                        {sampleStories[0].publishedDate} · {sampleStories[0].readTime}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#163A32] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleStories.slice(1).map((story) => (
            <Link
              key={story.id}
              to={`/stories/${story.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#163A32]/40 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden relative">
                  <ImageWithFallback
                    src={story.coverImage}
                    alt={story.title}
                    fallbackTitle={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#163A32] font-semibold mb-1.5">
                    {story.category} · {story.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-[#202522] group-hover:text-[#163A32] transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>By {story.author.name}</span>
                <span className="text-[#163A32] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
