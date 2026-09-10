import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES_DATA } from '../data/articles';
import { usePageTitle } from '../utils/usePageTitle';
import { 
  BookOpen, Calendar, Clock, ArrowRight, Search, 
  Tag, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowUpRight
} from 'lucide-react';

interface BlogPageProps {
  onOpenQuoteModal?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenQuoteModal }) => {
  usePageTitle(
    'B2B Sourcing Insights & Industry Blog',
    'Golden Fiber Crafts Ltd.',
    'Explore authoritative B2B guides, manufacturing insights, export logistics, and sustainable home decor sourcing knowledge from Bangladesh manufacturer Golden Fiber Crafts Limited.'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Jute Bags', 'Jute Baskets', 'Sustainability', 'Export Logistics', 'Material Guide'];

  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.primary_keyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-stone-900 text-stone-100 py-16 lg:py-20 relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium tracking-wide uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International B2B Sourcing Desk</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Manufacturing Insights & Global Export Guides
            </h1>
            
            <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Authoritative industry perspectives on handcrafted natural fiber housewares, OEM/ODM development, CBM freight optimization, and sustainable production in Bangladesh.
            </p>
            
            {/* Search & Filter Bar */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search articles, manufacturing guides, or materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-stone-800/90 border border-stone-700 rounded-lg text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                />
              </div>
              {onOpenQuoteModal && (
                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-sm font-medium transition shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request Factory Quote</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm">
            <span className="text-stone-400 font-medium mr-2 flex items-center gap-1 shrink-0">
              <Tag className="w-3.5 h-3.5" /> Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full capitalize font-medium transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-amber-400 shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Section (Desktop: 3 per row, Mobile: 2 per row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-stone-200 p-8">
            <BookOpen className="w-12 h-12 text-stone-400 mx-auto mb-3 stroke-1" />
            <h3 className="text-lg font-medium text-stone-800">No articles found</h3>
            <p className="text-sm text-stone-500 mt-1">Try refining your search keyword or clearing the category filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 text-xs font-medium text-amber-700 bg-amber-50 rounded-lg hover:bg-amber-100 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-amber-300/80"
              >
                {/* Article Card Image */}
                <Link
                  to={`/${article.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-stone-100"
                >
                  <img
                    src={article.featured_image}
                    alt={article.featured_image_alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-stone-900/85 backdrop-blur-xs text-[10px] sm:text-xs font-medium text-amber-300 uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Article Card Content */}
                <div className="p-3.5 sm:p-5 flex flex-col flex-grow">
                  {/* Meta: Date & Read Time */}
                  <div className="flex items-center gap-3 text-[11px] sm:text-xs text-stone-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {article.published_date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {article.reading_time_minutes} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-sm sm:text-base lg:text-lg font-serif font-bold text-stone-900 group-hover:text-amber-700 transition line-clamp-2 leading-snug">
                    <Link to={`/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-light flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More Action */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-800 group-hover:text-amber-600 transition"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-[10px] sm:text-xs text-stone-400 font-mono">
                      {article.word_count}+ words
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Sourcing Banner */}
        <div className="mt-16 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Manufacturer Advantage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              Ready to Manufacture Your Custom Natural Fiber Line?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Golden Fiber Crafts Limited works directly with global homeware retailers, department stores, and wholesale distributors. We engineer custom dimensions, nesting packaging, and complete private labeling.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              {onOpenQuoteModal ? (
                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-sm transition shadow-sm"
                >
                  Request Bulk Sourcing Quote
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-sm transition shadow-sm"
                >
                  Contact Sourcing Desk
                </Link>
              )}
              <Link
                to="/products"
                className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white font-medium rounded-lg text-sm transition border border-stone-700"
              >
                Browse Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
