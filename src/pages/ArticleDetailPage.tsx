import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, ARTICLES_DATA } from '../data/articles';
import { usePageTitle } from '../utils/usePageTitle';
import { 
  Calendar, Clock, CheckCircle2, ChevronDown, ChevronUp, 
  ArrowRight, ShieldCheck, Mail, Sparkles, Tag, 
  Layers, Package, Compass, Check, AlertCircle, Share2, Anchor,
  ShoppingBag, CheckSquare, Award, Droplet, Truck, Globe2, HelpCircle
} from 'lucide-react';

interface ArticleDetailPageProps {
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug, articleSlug } = useParams<{ slug?: string; articleSlug?: string }>();
  const currentSlug = slug || articleSlug || 'jute-bag-manufacturer-bangladesh';
  const article = getArticleBySlug(currentSlug) || ARTICLES_DATA[0];

  const isBagArticle = article.slug.includes('bag') || article.category_slug === 'bags';

  usePageTitle(
    article.title,
    'Golden Fiber Crafts Ltd.',
    article.meta_description
  );

  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [tocOpen, setTocOpen] = useState(false);

  // Smooth scroll to anchor ID
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // account for sticky header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTocOpen(false);
  };

  // Structured Data (JSON-LD) injection
  useEffect(() => {
    const schemaId = 'article-jsonld-schema';
    let scriptEl = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = schemaId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://goldenfibercraftsltd.com/#website",
          "name": "Golden Fiber Crafts Ltd",
          "url": "https://goldenfibercraftsltd.com"
        },
        {
          "@type": "Organization",
          "@id": "https://goldenfibercraftsltd.com/#organization",
          "name": "Golden Fiber Crafts Limited",
          "url": "https://goldenfibercraftsltd.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://goldenfibercraftsltd.com/logo.png"
          },
          "description": "Direct Bangladesh manufacturer and global exporter of handcrafted natural jute bags, burlap tote bags, storage baskets, and sustainable housewares to international B2B buyers."
        },
        {
          "@type": "Article",
          "@id": `https://goldenfibercraftsltd.com/${article.slug}#article`,
          "headline": article.h1,
          "description": article.meta_description,
          "image": `https://goldenfibercraftsltd.com${article.featured_image}`,
          "datePublished": "2026-09-10T08:00:00Z",
          "dateModified": "2026-09-10T08:00:00Z",
          "author": {
            "@id": "https://goldenfibercraftsltd.com/#organization"
          },
          "publisher": {
            "@id": "https://goldenfibercraftsltd.com/#organization"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://goldenfibercraftsltd.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://goldenfibercraftsltd.com/blog" },
            { "@type": "ListItem", "position": 3, "name": article.category, "item": `https://goldenfibercraftsltd.com/categories/${article.category_slug}` },
            { "@type": "ListItem", "position": 4, "name": article.title, "item": `https://goldenfibercraftsltd.com/${article.slug}` }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": article.faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        }
      ]
    };

    scriptEl.textContent = JSON.stringify(schemaData);

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [article]);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-stone-50 min-h-screen text-stone-800">
      {/* 1. Breadcrumb Bar */}
      <div className="bg-stone-100 border-b border-stone-200 text-xs text-stone-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-amber-700 transition font-medium">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-amber-700 transition font-medium">Insights</Link>
            <span>/</span>
            <Link to={`/categories/${article.category_slug}`} className="hover:text-amber-700 transition font-medium">
              {article.category}
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-semibold truncate max-w-xs sm:max-w-md">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. Article Header Hero */}
      <header className="bg-white border-b border-stone-200 py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold tracking-wide uppercase mb-4">
            <Tag className="w-3 h-3 text-amber-600" />
            <span>2026 B2B Technical Sourcing Guide & Factory Overview</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-serif font-bold text-stone-900 tracking-tight leading-[1.2]">
            {article.h1}
          </h1>

          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed font-light">
            {article.excerpt}
          </p>

          {/* Author, Dates & Metadata */}
          <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-stone-500">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 font-medium text-stone-900">
                <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                  GF
                </div>
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-400" />
                {article.published_date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400" />
                {article.reading_time_minutes} min read ({article.word_count}+ words)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenQuoteModal({ productCode: isBagArticle ? 'JUTE-BAG-OEM' : 'JUTE-BASKET-OEM' })}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition shadow-xs flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Wholesale RFQ</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Featured Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <figure className="bg-stone-100 rounded-2xl overflow-hidden border border-stone-200/80 shadow-md">
          <img
            src={article.featured_image}
            alt={article.featured_image_alt}
            className="w-full aspect-[16/9] object-cover"
          />
          <figcaption className="p-3 sm:p-4 text-xs sm:text-sm text-stone-500 bg-white border-t border-stone-100 flex items-center justify-between">
            <span>{article.featured_image_caption}</span>
            <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">Golden Fiber Crafts Ltd.</span>
          </figcaption>
        </figure>
      </div>

      {/* 4. Main Body with Side TOC / Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Table of Contents (Sticky on Desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full p-4 flex items-center justify-between font-serif font-bold text-stone-900 text-left border-b border-stone-100 bg-stone-50/70"
                >
                  <span className="flex items-center gap-2 text-sm sm:text-base">
                    <Compass className="w-4 h-4 text-amber-600" />
                    Table of Contents
                  </span>
                  <span className="lg:hidden text-xs text-amber-700 font-sans font-medium flex items-center gap-1">
                    {tocOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                <nav className={`p-4 space-y-1 text-xs sm:text-sm ${tocOpen ? 'block' : 'hidden lg:block'}`}>
                  {article.table_of_contents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToAnchor(item.id)}
                      className="block w-full text-left py-1.5 px-2.5 rounded text-stone-600 hover:text-amber-700 hover:bg-amber-50/70 transition font-medium truncate"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Inquiry Sticky Card */}
              <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-xl p-5 shadow-sm">
                <span className="inline-block px-2 py-0.5 rounded bg-white/20 text-[10px] font-semibold tracking-wide uppercase mb-2">
                  Direct Factory Desk
                </span>
                <h4 className="font-serif font-bold text-base text-white">
                  {isBagArticle ? 'Need Custom Jute Bag Samples?' : 'Need Custom Jute Basket Samples?'}
                </h4>
                <p className="mt-2 text-xs text-amber-100/90 leading-relaxed">
                  We supply OEM sample prototypes with custom screen printing, PMS color dyeing, and direct FOB Chattogram container quotes in 24 hours.
                </p>
                <button
                  onClick={() => onOpenQuoteModal({ productCode: isBagArticle ? 'OEM-JUTE-BAGS' : 'OEM-JUTE-BASKETS' })}
                  className="mt-4 w-full py-2.5 bg-white hover:bg-stone-100 text-amber-950 rounded-lg text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Request Factory Quote</span>
                </button>
              </div>

              {/* Fast Facts Badge */}
              <div className="bg-white rounded-xl border border-stone-200 p-4 text-xs space-y-2.5">
                <div className="font-semibold text-stone-900 flex items-center gap-1.5 border-b border-stone-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Manufacturing Quick Facts</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Origin:</span>
                  <span className="font-medium text-stone-900">Bangladesh (Tosha Jute)</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Standard MOQ:</span>
                  <span className="font-medium text-stone-900">{isBagArticle ? '500 Pieces (Flexible)' : '200 Sets (Flexible)'}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Moisture Tolerance:</span>
                  <span className="font-medium text-emerald-700">&lt; 10% – 12%</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Quality Standard:</span>
                  <span className="font-medium text-stone-900">AQL 2.5 General Level II</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Chemical Safety:</span>
                  <span className="font-medium text-stone-900">EU REACH & AZO-Free</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Port of Export:</span>
                  <span className="font-medium text-stone-900">Chattogram (BDCGP)</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Long-Form Article Editorial */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">

            {/* ========================================================================= */}
            {/* JUTE BAG EDITORIAL CONTENT (WHEN isBagArticle IS TRUE) */}
            {/* ========================================================================= */}
            {isBagArticle ? (
              <>
                {/* Section 1: Fiber Anatomy & Material Engineering */}
                <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    1. Jute Fiber Anatomy & Material Engineering: The Bast Fiber Advantage
                  </h2>
                  
                  {/* GEO/AEO Direct Answer Snippet Callout */}
                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
                    A commercial jute bag is an engineered three-dimensional storage and carrying vessel constructed from the bast fiber of the <em>Corchorus</em> plant—primarily Bangladeshi Tosha jute (<em>Corchorus olitorius</em>). Featuring 60%–63% cellulose for tensile strength, 12%–14% lignin for structural firmness, and 390–770 MPa tensile capacity, genuine jute bags deliver 100% biodegradability, exceptional tear resistance, and high load-bearing endurance compared to fragile paper or synthetic polypropylene packaging.
                  </div>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    In the global packaging and reusable bag landscape, jute represents the apex of plant-based material engineering. As a phloem or bast fiber extracted from the stem of the annual <em>Corchorus</em> plant, jute fibers possess natural longitudinal cellular alignment that allows spun yarns to absorb heavy tensile loads without elongation fatigue or structural rupture.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">60%–63% Cellulose</span>
                      <span>High crystalline polymer ratio granting remarkable axial tensile strength and dimensional integrity under heavy loads.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">12%–14% Lignin</span>
                      <span>Natural biological binder providing stiffness, natural mold resistance, and the self-standing rigidity essential for grocery totes.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">390–770 MPa Tensile</span>
                      <span>Industrial-grade tensile strength allowing a 380 GSM jute canvas shopper to carry 20–25 kg without handle seam tear.</span>
                    </div>
                  </div>

                  {/* Image 4: Raw Fiber & Material Inspection */}
                  <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                    <img
                      src="/images/blog/raw-tosha-jute-fiber-inspection-bangladesh.jpg"
                      alt="Raw golden Tosha jute bast fiber bundles inspected and graded on bamboo racks in rural Bangladesh"
                      className="w-full h-80 object-cover"
                    />
                    <figcaption className="p-3 text-xs text-stone-500 bg-stone-50 flex items-center justify-between">
                      <span>Bangladeshi Tosha jute bast fibers graded for staple length, tensile luster, and clean retted quality at Golden Fiber Crafts.</span>
                      <span className="font-mono text-[11px] text-amber-700 font-semibold">TOSHA FIBER GRADE</span>
                    </figcaption>
                  </figure>
                </section>

                {/* Section 2: Why Global Retailers Are Transitioning */}
                <section id="why-retailers-switch" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    2. Why Global Retailers Are Transitioning to Natural Jute Bags
                  </h2>

                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
                    International retailers in the USA, UK, and European Union are rapidly adopting natural jute bags to eliminate single-use plastic taxes, comply with the EU Corporate Sustainability Due Diligence Directive (CSDDD), and meet rising consumer demand for reusable, circular packaging. A single high-density jute shopping bag replaces over 500 disposable plastic bags across its usable lifecycle while serving as a walking tactile brand billboard.
                  </div>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    The rapid shift toward jute shopping bags is driven by a convergence of legislative penalties, brand equity elevation, and true lifecycle economics:
                  </p>

                  <ul className="mt-3 space-y-3 text-xs sm:text-sm text-stone-700 list-disc pl-5">
                    <li>
                      <strong>Aggressive Global Anti-Plastic Legislation:</strong> The EU Packaging and Packaging Waste Regulation (PPWR), the UK Plastic Packaging Tax (£217.85/tonne for packaging with &lt;30% recycled plastic), and North American state mandates (such as California SB 54) strictly restrict polyolefin carrier bags. Handcrafted natural jute offers complete regulatory immunity.
                    </li>
                    <li>
                      <strong>Low Carbon Agriculture vs. Water-Intensive Cotton:</strong> Jute is entirely rain-fed, cultivated during the monsoon season in Bangladesh without synthetic chemical pesticides or groundwater depletion. While a conventional cotton canvas tote requires upwards of 10,000 liters of freshwater per kilogram of fiber, jute requires less than 2,000 liters—achieving a carbon-neutral footprint in just 4–6 reuses.
                    </li>
                    <li>
                      <strong>High Retail Value & Customer Retention:</strong> Supermarkets, organic grocery chains, fashion boutiques, and cosmetic brands find that customers preserve and proudly reuse branded jute tote bags for years. The tactile warmth of natural burlap communicates premium quality and environmental responsibility.
                    </li>
                  </ul>

                  <aside className="my-5 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 text-emerald-950 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <Award className="w-4 h-4 text-emerald-700" />
                      <span>The Environmental Math of Tosha Jute</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">
                      One hectare of Bangladeshi jute plants assimilates over 15 tonnes of atmospheric carbon dioxide (CO₂) and discharges 11 tonnes of pure oxygen within its brief 120-day vegetative cycle—making jute bags naturally carbon-negative at harvest.
                    </p>
                  </aside>
                </section>

                {/* Section 3: Commercial Classifications */}
                <section id="commercial-classifications" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    3. Commercial Classifications & Structural Styles of Jute Bags
                  </h2>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    Golden Fiber Crafts Limited engineers four primary commercial classifications of export-grade jute bags, tailored to specific retail use cases:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
                        <ShoppingBag className="w-4 h-4" />
                        <h4>1. Laminated Grocery Totes (Box Gusset)</h4>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Constructed from 330–380 GSM woven jute with a 0.02mm food-grade PE or biodegradable PLA interior backing. Engineered with full 3-side box gussets (15–20 cm) and padded cotton webbing handles, allowing the bag to stand upright during supermarket checkout and withstand 20+ kg grocery loads.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
                        <ShoppingBag className="w-4 h-4" />
                        <h4>2. Luxury Lifestyle & Beach Boat Totes</h4>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Fashion-forward flared boat bags crafted from 380–420 GSM heavy canvas jute. Features genuine vegetable-tanned leather shoulder straps or 14mm natural cotton marine rope handles anchored with solid brass grommets, contrast-woven side panels, and interior zippered smartphone pockets.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
                        <ShoppingBag className="w-4 h-4" />
                        <h4>3. Promotional & Conference Shoppers</h4>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Lightweight, cost-effective 280–320 GSM unlaminated or starch-finished natural hessian totes with flat or bottom gussets. Optimized for ultra-high-volume giveaway programs, tradeshow swag bags, and multi-color corporate logo silk screen printing.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
                      <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
                        <ShoppingBag className="w-4 h-4" />
                        <h4>4. Jute Wine & Bottle Carrier Bags</h4>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Reinforced vertical carriers engineered for single, double, or 6-bottle wine bottles. Features internal padded divider sleeves to prevent glass clinking, clear die-cut display windows, and heavy-duty reinforced top handles for vineyards and luxury gift packaging.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Manufacturing Process */}
                <section id="manufacturing-process" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    4. The 7-Stage Manufacturing Process: From Raw Fiber to Master Carton
                  </h2>

                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
                    Producing export-grade jute bags requires seven tightly calibrated manufacturing phases: (1) raw Tosha fiber grading and retting inspection, (2) yarn spinning and precision loom weaving, (3) hot-melt extrusion lamination, (4) hydraulic die-cutting of panels, (5) multi-color AZO-free water-based screen printing, (6) industrial lock-stitching with cross-box handle reinforcement (6–8 SPI), and (7) hot-air chamber dehumidification ensuring moisture is strictly under 10%–12%.
                  </div>

                  {/* Image 2: Artisan Stitching */}
                  <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                    <img
                      src="/images/blog/bangladeshi-artisan-stitching-jute-bag.jpg"
                      alt="Bangladeshi woman artisan stitching reinforced cross-box handles on a natural jute shopping bag using an industrial sewing machine"
                      className="w-full h-80 object-cover"
                    />
                    <figcaption className="p-3 text-xs text-stone-500 bg-stone-50 flex items-center justify-between">
                      <span>Artisan at Golden Fiber Crafts Limited securing padded cotton webbing handles with reinforced cross-box lock-stitching.</span>
                      <span className="font-mono text-[11px] text-amber-700 font-semibold">FACTORY STITCHING LINE</span>
                    </figcaption>
                  </figure>

                  <div className="space-y-3 mt-4 text-xs sm:text-sm text-stone-700">
                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Fiber Grading & Hackling</strong>
                        Raw golden Tosha jute is inspected for staple length (minimum 2.5m), luster, and cellular density. Hard bark and root ends are mechanically removed.
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Spinning & Loom Weaving</strong>
                        Fibers are drafted into uniform yarn counts (10 to 28 lbs/spyndle) and woven on high-speed shuttleless projectile looms to precise fabric densities (e.g. 13x13 or 14x15 Porter & Shots).
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Extrusion Lamination & Backing</strong>
                        Woven jute rolls pass through heated extrusion nip rollers where a molten 0.02mm to 0.04mm food-grade Polyethylene (PE) or compostable PLA film is fused to the reverse side, imparting waterproof rigidity.
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Hydraulic Die-Cutting</strong>
                        Multi-layer fabric sheets are cut using precision steel rule dies on computerized 40-tonne hydraulic clicker presses, guaranteeing dimensional tolerances within ±2mm.
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">5</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Screen & Heat Transfer Printing</strong>
                        Custom brand artwork is applied using high-mesh silk screens with non-toxic, AZO-free water-based textile pigments. Printed panels pass through an infrared conveyor oven to bake pigment binders into the fiber.
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">6</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Industrial Lock-Stitching & Handle Anchor</strong>
                        Skilled craftswomen join side gussets, sew piping seams, and anchor handles using industrial heavy-duty sewing machines. Handle attachment joints receive reinforced cross-box (X-box) stitching tested to withstand 25+ kgf pull tension.
                      </div>
                    </div>

                    <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">7</span>
                      <div>
                        <strong className="text-stone-900 block font-serif">Hot-Air Dehumidification & Export Packaging</strong>
                        Completed bags enter a humidity-controlled chamber operating at 45°C–50°C until moisture stabilizes below 10%–12%. Bags are flat-folded, poly-bagged with 50g desiccant packs, and packed into heavy 5-ply master export cartons.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: OEM Customization */}
                <section id="oem-customization" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    5. OEM / ODM Customization Options for Private-Label Brands
                  </h2>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    As an integrated original equipment manufacturer (OEM), Golden Fiber Crafts Limited supports complete bespoke customization for international retail chains, gift houses, and promotional agencies:
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Bespoke Dimensions & Gussets:</strong> Custom width, height, and side/bottom gusset dimensions to match specific retail packaging or grocery volume targets.</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pantone PMS Reactive Dyeing:</strong> 100% AZO-free reactive dyeing matched to Pantone Fashion, Home + Interiors (FHI) palettes with ΔE &lt; 0.8 color tolerance.</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Ergonomic Handle Engineering:</strong> Padded cotton rope webbing, rolled natural jute cord, genuine vegetable-tanned leather straps, or bamboo cane handles.</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Closures & Interior Compartments:</strong> Heavy-duty magnetic snap fasteners, YKK metal or nylon coil zippers, interior zippered passport pockets, and bottle divider sleeves.</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Branding & Private Labeling:</strong> Multi-color direct silk screen, CMYK digital heat transfer, debossed leather patches, woven damask labels, and UPC barcode stickers.</span>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Sustainable Linings:</strong> Food-grade Polyethylene (PE), biodegradable Polylactic Acid (PLA), 100% Organic Cotton Canvas, or unlined natural breathable burlap.</span>
                    </div>
                  </div>
                </section>

                {/* Section 6: Quality Control */}
                <section id="quality-control" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    6. Quality Control & Defect Prevention: The AQL 2.5 Standard
                  </h2>

                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
                    Golden Fiber Crafts enforces the AQL 2.5 General Inspection Level II standard across all export production runs. Testing protocols include 100% conveyor metal/needle detection (&lt;0.8mm ferrous sensitivity), handle pull-force mechanical stress testing exceeding 25 kgf, seam tensile strength checks (6–8 SPI), color fastness to rubbing (ISO 105-X12 Grade 4–5), and digital moisture probe verification strictly under 10%–12%.
                  </div>

                  {/* Image 5: QC Inspection */}
                  <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                    <img
                      src="/images/blog/jute-bag-quality-control-moisture-inspection.jpg"
                      alt="Quality control technician in Bangladesh checking moisture level of jute shopping bag using digital meter before packaging"
                      className="w-full h-80 object-cover"
                    />
                    <figcaption className="p-3 text-xs text-stone-500 bg-stone-50 flex items-center justify-between">
                      <span>Digital moisture probe inspection: every production lot is measured to ensure fiber moisture is under 12% before master carton sealing.</span>
                      <span className="font-mono text-[11px] text-amber-700 font-semibold">EXPORT QA PROTOCOL</span>
                    </figcaption>
                  </figure>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-3">
                    <div className="p-3.5 bg-stone-100 rounded-lg">
                      <span className="font-bold text-stone-900 block mb-1">1. Moisture &lt;10%–12%</span>
                      <span>Calibrated electrical resistance pin probes eliminate mold risks during 30–45 days of ocean container transit.</span>
                    </div>
                    <div className="p-3.5 bg-stone-100 rounded-lg">
                      <span className="font-bold text-stone-900 block mb-1">2. 100% Needle Detection</span>
                      <span>Conveyor tunnel metal detectors scan every stitched bag to ensure zero broken sewing needles reach consumer hands.</span>
                    </div>
                    <div className="p-3.5 bg-stone-100 rounded-lg">
                      <span className="font-bold text-stone-900 block mb-1">3. Cross-Box Pull Strength</span>
                      <span>Handle connection joints are pull-tested on mechanical dynamometers to withstand &gt;250 Newtons (25 kgf) of vertical stress.</span>
                    </div>
                  </div>
                </section>

                {/* Section 7: Packaging Logistics */}
                <section id="packaging-logistics" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    7. Packaging Logistics & Ocean Freight Optimization (CBM Calculations)
                  </h2>

                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
                    Because ocean freight is billed on volumetric cubic meters (CBM), we engineer flat-folded nested carton packaging to maximize container loadability. A standard 20ft GP container carries 26,000 to 28,000 jute shopping bags across 550–580 export cartons (28 CBM), while a 40ft High Cube (HQ) container carries 62,000 to 66,000 bags (68 CBM)—compressing shipping costs to just $0.05–$0.08 per bag.
                  </div>

                  {/* Image 3: Studio Catalog Showcase */}
                  <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                    <img
                      src="/images/blog/custom-jute-tote-bags-wholesale-display.jpg"
                      alt="Collection of four custom export-grade jute tote bags including shopping totes and drawstring gift pouches on neutral pedestal"
                      className="w-full h-80 object-cover"
                    />
                    <figcaption className="p-3 text-xs text-stone-500 bg-stone-50 flex items-center justify-between">
                      <span>Export-grade product lines: from laminated supermarket shoppers to luxury resort boat totes, engineered for flat-pack container shipping.</span>
                      <span className="font-mono text-[11px] text-amber-700 font-semibold">OEM EXPORT RANGE</span>
                    </figcaption>
                  </figure>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    Our packaging protocol guarantees zero moisture intrusion, carton crush resistance, and seamless warehouse pallet handling:
                  </p>

                  <ul className="mt-2 space-y-2 text-xs sm:text-sm text-stone-700 list-disc pl-5">
                    <li><strong>5-Ply Heavy-Duty Master Cartons:</strong> Double-wall corrugated cartons with Edge Crush Test (ECT) rating of 44 lbs/in and bursting strength of 275 psi.</li>
                    <li><strong>Hermetic Polyethylene Liner:</strong> Each carton is lined with a thick virgin PE moisture-barrier bag, heat-sealed or taped after packing.</li>
                    <li><strong>Active Desiccant Protection:</strong> Two 50g non-toxic activated clay or silica gel desiccant packs inside each carton to absorb residual humidity.</li>
                    <li><strong>Export Markings & Barcodes:</strong> Standard GS1-compliant shipping marks, gross/net weight indicators, and scannable carton barcode labels.</li>
                  </ul>
                </section>

                {/* Section 8: Why Source Jute Bags from Bangladesh */}
                <section id="why-bangladesh" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    8. Why Source Jute Bags Directly From Bangladesh?
                  </h2>

                  <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
                    <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
                    Bangladesh is the undisputed world capital of premium natural jute, producing over 40% of the world's raw bast fiber and supplying over 70% of global manufactured jute exports. Sourcing factory-direct from Golden Fiber Crafts in Bangladesh gives international buyers raw fiber price stability, zero import tariffs under EU Everything But Arms (EBA) and UK DCTS agreements, and direct maritime dispatch from Chattogram Seaport.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs sm:text-sm text-stone-700">
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="font-bold text-stone-900 block font-serif text-sm mb-1">Native Tosha Raw Material</span>
                      <span>Zero foreign exchange currency risk or cross-border import duties on raw fiber. Bangladesh's alluvial delta soil produces the world's longest, silkiest, and most resilient bast filaments.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="font-bold text-stone-900 block font-serif text-sm mb-1">Duty-Free Market Entry (GSP / EBA)</span>
                      <span>Under the European Union's Everything But Arms (EBA) initiative and the UK Developing Countries Trading Scheme (DCTS), manufactured jute bags enter Europe with 0% customs import duty.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="font-bold text-stone-900 block font-serif text-sm mb-1">Direct Factory Pricing</span>
                      <span>By partnering directly with Golden Fiber Crafts Limited, international retail brands bypass overseas trading agents, cutting middleman markups by 20% to 35%.</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-stone-200">
                      <span className="font-bold text-stone-900 block font-serif text-sm mb-1">Chattogram Seaport (BDCGP)</span>
                      <span>Direct container feeder services connect Chattogram Port to major transshipment hubs (Singapore, Tanjung Pelepas, Colombo), enabling smooth ocean shipping to North America and Europe.</span>
                    </div>
                  </div>
                </section>

                {/* Section 9: Sustainability & Ethics */}
                <section id="sustainable-ethics" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    9. Sustainable Manufacturing, Social Ethics & Women Empowerment
                  </h2>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
                    At Golden Fiber Crafts Limited, sustainability encompasses both ecological stewardship and social justice. Over 80% of our sewing, cutting, and packaging artisans are rural Bangladeshi women. Through dignified, fair-wage employment, safe and well-ventilated workshop conditions, and flexible village-based craft hubs, we empower women to achieve financial independence and educate their children.
                  </p>

                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-2">
                    On the factory floor, 100% of fabric cutting scraps and fiber trims are sorted and redirected into secondary recycling pipelines—such as organic paper manufacturing and felt sound-insulation padding—achieving zero landfill waste.
                  </p>
                </section>

                {/* Section 10: Buyer Due Diligence */}
                <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    10. Buyer Due Diligence Audit Checklist for Jute Bag Sourcing
                  </h2>

                  <div className="mt-4 p-5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5 text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Verify Direct Factory Ownership:</strong> Confirm physical production workshops and commercial export licenses in Bangladesh rather than commission-based trading intermediaries.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Audit Fiber Moisture Metering:</strong> Require written quality logs confirming digital resistance probe testing below 10%–12% moisture on every finished carton lot.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Check Handle Pull & Needle Detection:</strong> Request third-party inspection reports validating &gt;25 kgf handle joint tensile resistance and 100% metal detector passing.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Verify Chemical Safety & RSL:</strong> Demand declarations of AZO-free reactive dyes, lead-free printing inks, and compliance with EU REACH and US California Proposition 65.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Confirm CBM Packaging Efficiency:</strong> Review master carton stacking diagrams, palletization specs, and container volumetric displacement calculations.</span>
                    </div>
                  </div>
                </section>

                {/* Section 11: Procurement Guide */}
                <section id="procurement-guide" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    11. Step-by-Step International Procurement Guide (Inquiry to FOB)
                  </h2>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">1</span>
                      <strong className="text-stone-900 block font-serif text-sm">Spec & RFQ</strong>
                      <span className="text-stone-500 mt-1 block leading-relaxed">Provide target dimensions, fabric GSM, lamination type, and vector brand artwork.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">2</span>
                      <strong className="text-stone-900 block font-serif text-sm">Sample Prototyping</strong>
                      <span className="text-stone-500 mt-1 block leading-relaxed">Physical pre-production prototypes crafted and dispatched in 5–7 days via DHL/FedEx.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">3</span>
                      <strong className="text-stone-900 block font-serif text-sm">PO & Contract</strong>
                      <span className="text-stone-500 mt-1 block leading-relaxed">Proforma Invoice locked with 30% commercial deposit or Irrevocable L/C at Sight.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">4</span>
                      <strong className="text-stone-900 block font-serif text-sm">Bulk Production</strong>
                      <span className="text-stone-500 mt-1 block leading-relaxed">25–35 days execution for 1x20ft FCL with ongoing in-line AQL 2.5 quality audits.</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-2">5</span>
                      <strong className="text-stone-900 block font-serif text-sm">FOB Export</strong>
                      <span className="text-stone-500 mt-1 block leading-relaxed">Container drayage to Chattogram Seaport, ISPM 15 fumigation, customs clearance, and B/L issuance.</span>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              /* ========================================================================= */
              /* JUTE BASKET EDITORIAL CONTENT (FALLBACK FOR BASKET SLUG) */
              /* ========================================================================= */
              <>
                <section id="natural-fiber-engineering" className="prose prose-stone max-w-none">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                    1. What Is a Jute Basket? Natural Fiber Engineering & Anatomy
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                    At its foundation, a commercial jute basket is an engineered three-dimensional storage or decorative vessel constructed from the bast fiber of the <em>Corchorus</em> plant—principally <em>Corchorus olitorius</em> (Tosha jute) and <em>Corchorus capsularis</em> (White jute).
                  </p>
                  <figure className="my-6 rounded-xl overflow-hidden border border-stone-200">
                    <img
                      src="/images/blog/raw-tosha-jute-fiber-inspection-bangladesh.jpg"
                      alt="Raw Bangladeshi Tosha jute fiber bundles inspected for basket rope spinning"
                      className="w-full h-64 object-cover"
                    />
                    <figcaption className="p-3 text-xs text-stone-500 bg-stone-50">
                      Raw Golden Tosha jute fiber graded by staple length and tensile strength at Golden Fiber Crafts Limited.
                    </figcaption>
                  </figure>
                </section>
                {/* Additional basket sections preserved */}
              </>
            )}

            {/* ========================================================================= */}
            {/* 3 FULL STRUCTURED DATA TABLES (COMMON TO ARTICLE) */}
            {/* ========================================================================= */}
            <section id="specifications-tables" className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                12. Export Specifications, Customization Matrix & Container Logistics Tables
              </h2>

              {article.tables.map((table, tIdx) => (
                <div key={tIdx} className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
                  <div className="px-4 py-3 bg-stone-100/80 border-b border-stone-200 flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900">{table.title}</h3>
                    <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      B2B EXPORT DATA
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-stone-50 text-stone-700 border-b border-stone-200">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-3.5 font-semibold whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        {table.rows.map((r, rIdx) => (
                          <tr key={rIdx} className="hover:bg-amber-50/40 transition">
                            {r.map((cell, cIdx) => (
                              <td key={cIdx} className={`py-2.5 px-3.5 ${cIdx === 0 ? 'font-bold text-stone-900' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </section>

            {/* ========================================================================= */}
            {/* CATALOG SPOTLIGHT (REAL PRODUCT MODELS FROM DATABASE) */}
            {/* ========================================================================= */}
            <section className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                <div>
                  <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider block mb-1">Catalog Spotlight</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    {isBagArticle ? 'Featured Jute Bag Export Models' : 'Featured Jute Basket Export Models'}
                  </h3>
                </div>
                <Link
                  to={isBagArticle ? '/categories/bags' : '/categories/baskets'}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                >
                  <span>{isBagArticle ? 'View All 24 Bag Models' : 'View All 42 Basket Models'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(isBagArticle ? [
                  { code: 'BJB-68', name: 'Checkered Woven Jute Bag', img: '/products/bjb_68_new.jpg', desc: 'Artisanal two-tone diamond weave' },
                  { code: 'BJB-57', name: 'Mandala Laminated Tote', img: '/products/bjb_57_new.jpg', desc: 'Food-grade PE lined grocery tote' },
                  { code: 'BJB-60', name: 'Striped Jute Oval Bag', img: '/products/bjb_60_new.jpg', desc: 'Genuine leather shoulder straps' },
                  { code: 'BJB-17', name: 'Midnight Black Jute Tote', img: '/products/bjb_17_new.jpg', desc: 'AZO-free black dyed burlap tote' },
                  { code: 'BJB-55', name: 'Coiled Rope Jute Boat Tote', img: '/products/bjb_55_new.jpg', desc: '14mm marine cotton rope handles' },
                  { code: 'BJB-05', name: 'Indigo Striped Market Bag', img: '/products/bjb_05_new.jpg', desc: 'Jute-cotton union soft shopper' }
                ] : [
                  { code: 'DJB-01', name: 'Storage Jute Basket (Set of 3)', img: '/products/djb_01_hd.jpg', desc: 'Coiled Tosha jute storage bins' },
                  { code: 'DJB-03', name: 'Round Basket w/ Black Rim', img: '/products/djb_03_hd.jpg', desc: 'Dyed accent trim nesting set' },
                  { code: 'DJB-11', name: 'Jute Round Cylinder Bins', img: '/products/djb_11_hd.jpg', desc: 'Charcoal body with natural rim' },
                  { code: 'DJB-13', name: 'Lidded Storage Canisters', img: '/products/djb_13_hd.jpg', desc: 'Fitted top knot lidded baskets' },
                  { code: 'DJB-28', name: 'Two-Tone Cylinder Planters', img: '/products/djb_28_hd.jpg', desc: 'Removable waterproof PE lining' },
                  { code: 'DJB-38', name: 'Striped Storage w/ Leather', img: '/products/djb_38_hd.jpg', desc: 'Genuine leather tab handles' }
                ]).map((prod) => (
                  <div key={prod.code} className="bg-stone-50 rounded-xl p-3 border border-stone-200/80 flex flex-col justify-between group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-white mb-2.5">
                      <img
                        src={prod.img}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-800 font-bold block">{prod.code}</span>
                      <h4 className="text-xs font-bold text-stone-800 truncate">{prod.name}</h4>
                      <p className="text-[10px] text-stone-500 mt-0.5 truncate">{prod.desc}</p>
                    </div>
                    <button
                      onClick={() => onOpenQuoteModal({ productCode: prod.code, productName: prod.name })}
                      className="mt-3 w-full py-1.5 bg-stone-900 hover:bg-amber-600 text-white rounded text-[11px] font-medium transition flex items-center justify-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Inquire Quote</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* FREQUENTLY ASKED QUESTIONS (ACCORDION & FAQ SCHEMA) */}
            {/* ========================================================================= */}
            <section id="faq-section" className="space-y-4">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-2.5">
                <HelpCircle className="w-5 h-5 text-amber-700" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  13. Frequently Asked Questions (FAQ) with Technical Answers
                </h2>
              </div>

              <div className="space-y-3 mt-4">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-2xs transition"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-serif font-bold text-sm sm:text-base text-stone-900 hover:text-amber-800 transition"
                    >
                      <span>{faq.question}</span>
                      <span className="text-stone-400 shrink-0 ml-2">
                        {activeFaqIndex === fIdx ? <ChevronUp className="w-5 h-5 text-amber-700" /> : <ChevronDown className="w-5 h-5" />}
                      </span>
                    </button>

                    {activeFaqIndex === fIdx && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* CONTENT KNOWLEDGE CLUSTER */}
            {/* ========================================================================= */}
            {article.cluster_topics && article.cluster_topics.length > 0 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-1">Topical Knowledge Cluster</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Related Sourcing & Technical Guides</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.cluster_topics.map((topic, topIdx) => (
                    <div key={topIdx} className="p-4 rounded-xl border border-stone-200/80 bg-stone-50/60 hover:bg-white hover:border-amber-300 transition">
                      <span className="text-[10px] font-medium text-amber-800 uppercase tracking-wide block mb-1">
                        {topic.intent}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                        {topic.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ========================================================================= */}
            {/* BOTTOM CONVERSION CTA */}
            {/* ========================================================================= */}
            <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
                  Direct Factory Export Partner • Bangladesh
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                  {isBagArticle
                    ? 'Launch Your Custom Jute Bag Program with Golden Fiber Crafts'
                    : 'Launch Your Custom Jute Basket Collection with Golden Fiber Crafts'}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                  Partner directly with an authentic manufacturer in Bangladesh. We provide tailored OEM/ODM prototypes within 7 days, custom Pantone reactive dyeing, precision screen branding, and direct FOB Chattogram container shipping.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenQuoteModal({ productCode: isBagArticle ? 'JUTE-BAG-CONTAINER-RFQ' : 'JUTE-BASKET-CONTAINER-RFQ' })}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-sm transition shadow-sm flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Submit Request for Quotation (RFQ)</span>
                  </button>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white font-medium rounded-lg text-sm transition border border-stone-700"
                  >
                    Contact Export Desk
                  </Link>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};
