import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleBySlug, ARTICLES_DATA } from '../data/articles';
import { usePageTitle } from '../utils/usePageTitle';
import { 
  Calendar, Clock, CheckCircle2, ChevronDown, ChevronUp, 
  ArrowRight, ShieldCheck, Mail, Sparkles, Tag, 
  Layers, Package, Compass, Check, AlertCircle, Share2, Printer
} from 'lucide-react';

interface ArticleDetailPageProps {
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug, articleSlug } = useParams<{ slug?: string; articleSlug?: string }>();
  const currentSlug = slug || articleSlug || 'jute-basket-manufacturer-bangladesh';
  const article = getArticleBySlug(currentSlug) || ARTICLES_DATA[0];

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
          "@type": "Organization",
          "@id": "https://goldenfibercraftsltd.com/#organization",
          "name": "Golden Fiber Crafts Limited",
          "url": "https://goldenfibercraftsltd.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://goldenfibercraftsltd.com/logo.png"
          },
          "description": "Manufacturer and exporter of handcrafted natural jute baskets and housewares from Bangladesh to global B2B buyers."
        },
        {
          "@type": "Article",
          "@id": `https://goldenfibercraftsltd.com/${article.slug}#article`,
          "headline": article.h1,
          "description": article.meta_description,
          "image": `https://goldenfibercraftsltd.com${article.featured_image}`,
          "datePublished": "2026-09-08T01:25:00Z",
          "dateModified": "2026-09-08T01:25:00Z",
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
            { "@type": "ListItem", "position": 2, "name": "Baskets", "item": "https://goldenfibercraftsltd.com/categories/baskets" },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://goldenfibercraftsltd.com/${article.slug}` }
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
            <span>B2B Sourcing Guide & Technical Overview</span>
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
                onClick={() => onOpenQuoteModal({ productCode: 'JUTE-BASKET-OEM' })}
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
                  Need Custom Jute Basket Samples?
                </h4>
                <p className="mt-2 text-xs text-amber-100/90 leading-relaxed">
                  We supply OEM sample kits, custom nesting sets, and direct FOB Chattogram container quotes in 24 hours.
                </p>
                <button
                  onClick={() => onOpenQuoteModal({ productCode: 'OEM-JUTE-BASKETS' })}
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
                  <span className="font-medium text-stone-900">200 Sets (Flexible)</span>
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
                  <span>Port of Export:</span>
                  <span className="font-medium text-stone-900">Chattogram (BDCGP)</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Long-Form Article Editorial */}
          <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            
            {/* Section 1: Natural Fiber Engineering */}
            <section id="natural-fiber-engineering" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                1. What Is a Jute Basket? Natural Fiber Engineering & Anatomy
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                At its foundation, a commercial jute basket is an engineered three-dimensional storage or decorative vessel constructed from the bast fiber of the <em>Corchorus</em> plant—principally <em>Corchorus olitorius</em> (Tosha jute) and <em>Corchorus capsularis</em> (White jute). Unlike synthetic polypropylene bins or fragile paper-rope imitations, genuine jute baskets are renewable, 100% biodegradable, and possess inherently high tensile strength.
              </p>
              
              <div className="my-6 p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-sm font-bold text-amber-900 font-serif flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  The Raw Fiber Advantage: Bangladeshi Tosha Jute
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                  Bangladesh produces the world's most prized natural bast fibers. Grown in the nutrient-rich alluvial floodplains of the Ganges-Brahmaputra delta, Bangladeshi Tosha jute features long, silky, golden filaments with high cellular density. This enables coiled cords to resist repeated mechanical tension, breathe naturally without trapping stale odors, and maintain structural elasticity for years.
                </p>
              </div>

              {/* Material photo */}
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

            {/* Section 2: Why International Retailers Are Transitioning */}
            <section id="why-retailers-switch" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                2. Why International Retailers Are Transitioning to Natural Jute Storage
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                The global transition toward natural jute housewares is accelerated by strong commercial and regulatory drivers across North America, the United Kingdom, and the European Union:
              </p>
              <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-stone-700 list-disc pl-5">
                <li>
                  <strong>Regulatory Compliance:</strong> Under the European Corporate Sustainability Due Diligence Directive (CSDDD) and single-use plastic curtailments, international brands are actively replacing synthetic poly-containers with circular, compostable fibers.
                </li>
                <li>
                  <strong>Higher Value Perception:</strong> Consumers in the US, UK, and Europe willingly pay a retail premium for tactile, handwoven artisan storage that complements hardwood floors, linen drapery, and neutral minimalist interiors.
                </li>
                <li>
                  <strong>Mechanical Durability:</strong> High-density stitched jute rope retains structural elasticity under load, absorbing weight without the brittleness common to cardboard or paper-rope bins.
                </li>
              </ul>
            </section>

            {/* Section 3: Commercial Classifications */}
            <section id="structural-styles" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                3. Commercial Classifications & Structural Styles of Jute Baskets
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <h4 className="text-sm font-bold text-stone-900 font-serif">1. Stitched Coiled Jute Baskets</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    Continuous braided cord (6mm to 12mm) wound spirally and bound with reinforced zig-zag lock-stitching. Yields semi-rigid, self-standing cylindrical and tapered baskets for laundry, toys, and firewood.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <h4 className="text-sm font-bold text-stone-900 font-serif">2. Handwoven Frame Baskets</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    Woven over rigid bamboo or electroplated anti-rust iron skeletons. Delivers crisp, dimensional square geometry ideal for modular 13" x 13" shelf cubbies.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <h4 className="text-sm font-bold text-stone-900 font-serif">3. Flat-Braid Strip Totes</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    Woven from 20mm–35mm flat plaited jute tapes. Soft-sided, lightweight, and completely collapsible for minimal shipping volume.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <h4 className="text-sm font-bold text-stone-900 font-serif">4. Hybrid Fiber Baskets</h4>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                    Tosha jute interwoven with indigenous wild kaisa grass, date palm leaves, or river seagrass for structural firmness and rustic contrast.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Manufacturing Process */}
            <section id="manufacturing-process" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                4. The Complete Manufacturing Process: From Field to Master Carton
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                Producing export-grade jute baskets requires synchronized craft execution across seven distinct phases:
              </p>

              {/* Artisan In-Line Image */}
              <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                <img
                  src="/images/blog/bangladeshi-artisan-stitching-coiled-jute-basket.jpg"
                  alt="Bangladeshi artisan guiding braided golden jute rope through an industrial sewing machine"
                  className="w-full h-80 object-cover"
                />
                <figcaption className="p-3 text-xs text-stone-500 bg-stone-50">
                  Artisans at Golden Fiber Crafts Limited assembling coiled storage baskets using industrial zig-zag lock-stitching.
                </figcaption>
              </figure>

              <ol className="mt-4 space-y-3 text-xs sm:text-sm text-stone-700 list-decimal pl-5 leading-relaxed">
                <li><strong>Fiber Grading:</strong> Selection of high-staple, clean Tosha jute; removal of hard roots and inclusions.</li>
                <li><strong>Spinning & Braiding:</strong> Raw fiber is spun into yarn and braided into high-tensile 8mm–12mm round cords or 3-strand flat tapes.</li>
                <li><strong>Eco-Reactive Dyeing:</strong> Formulated strictly with certified AZO-free, heavy-metal-free reactive dyes compliant with EU REACH.</li>
                <li><strong>Spiral Coiling & Zig-Zag Stitching:</strong> Artisans pivot the base on industrial sewing machines, fusing coils with high-tenacity thread.</li>
                <li><strong>Handle Fabrication:</strong> Integration of braided cord loops, genuine vegetable-tanned leather tabs, or cotton rope knots.</li>
                <li><strong>Hot-Air Dehumidification:</strong> Completed baskets are dried in hot-air circulation chambers until moisture registers strictly below 10%–12%.</li>
                <li><strong>Nesting & Export Packaging:</strong> Baskets are nested in Sets of 3, poly-lined, desiccant-packed, and sealed in 5-ply double-wall cartons.</li>
              </ol>
            </section>

            {/* Section 5: OEM Customization */}
            <section id="oem-customization" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                5. OEM / ODM Customization Options for Private-Label Brands
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                We empower private-label lifestyle brands, hotel chains, and retail buyers to realize custom collections with complete branding support:
              </p>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Custom Geometry:</strong> Cylinders, cubes, tapered laundry bins, oval trays, and nursery organizers.</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Color & Dyeing:</strong> Natural golden, bleached ivory cream, or custom Pantone matched shades.</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Hardware Options:</strong> Top-grain leather loops, antique brass screw rivets, cotton rope macramé.</span>
                </div>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-stone-200">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Brand Identity:</strong> Debossed leather patches, woven damask brand tags, and barcode/UPC stickers.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Quality Control */}
            <section id="quality-control" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                6. Quality Control & Defect Prevention: The AQL 2.5 Standard
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                Every production run at Golden Fiber Crafts Limited is governed by strict <strong>AQL 2.5 General Inspection Level II</strong> criteria:
              </p>

              {/* Quality inspection image */}
              <figure className="my-6 rounded-xl overflow-hidden border border-stone-200">
                <img
                  src="/images/blog/jute-basket-quality-control-moisture-inspection.jpg"
                  alt="Quality control inspection of handcrafted jute baskets at Bangladesh factory"
                  className="w-full h-72 object-cover"
                />
                <figcaption className="p-3 text-xs text-stone-500 bg-stone-50">
                  Our quality team performs digital moisture checks, stitch integrity tests, and conveyor needle detection on 100% of finished cartons.
                </figcaption>
              </figure>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-3">
                <div className="p-3 bg-stone-100 rounded-lg">
                  <span className="font-bold text-stone-900 block mb-1">1. Dimensional Tolerance</span>
                  <span>Strict ±1.0 cm variance; level bottoms that do not wobble or deform.</span>
                </div>
                <div className="p-3 bg-stone-100 rounded-lg">
                  <span className="font-bold text-stone-900 block mb-1">2. Needle Safety Check</span>
                  <span>100% industrial metal detection eliminates broken needle risks.</span>
                </div>
                <div className="p-3 bg-stone-100 rounded-lg">
                  <span className="font-bold text-stone-900 block mb-1">3. Moisture &lt;10%–12%</span>
                  <span>Calibrated probe testing safeguards against mold inside ocean containers.</span>
                </div>
              </div>
            </section>

            {/* Section 7: Packaging Logistics & Nesting */}
            <section id="packaging-logistics" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                7. Packaging Logistics & Freight Optimization: The Power of Nesting
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                Ocean freight is billed on volumetric cubic meters (CBM), not physical weight. By engineering <strong>Set of 3 (S/3)</strong> nesting configurations, small and medium baskets nest flush inside the large unit, slashing international shipping costs per basket by up to 65%.
              </p>

              {/* Nested photo */}
              <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
                <img
                  src="/images/blog/nested-set-of-3-jute-storage-baskets-wholesale.jpg"
                  alt="Nested set of 3 cylindrical coiled golden jute storage baskets with leather handles"
                  className="w-full h-80 object-cover"
                />
                <figcaption className="p-3 text-xs text-stone-500 bg-stone-50">
                  Precision nesting: Set of 3 handcrafted jute baskets engineered to occupy the freight volume of a single basket.
                </figcaption>
              </figure>
            </section>

            {/* Section 8: Why Bangladesh */}
            <section id="why-bangladesh" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                8. Why Source Jute Baskets Directly From Bangladesh?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                Sourcing factory-direct from Bangladesh eliminates third-party trading broker fees and grants access to the world’s most competitive natural fiber supply chain:
              </p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-stone-700 list-disc pl-5">
                <li><strong>Local Raw Fiber Origin:</strong> Zero import tariffs or currency overhead on raw jute fiber.</li>
                <li><strong>Generational Artisan Skill:</strong> Authentic muscle memory for cord tension, braiding, and clean coiling.</li>
                <li><strong>Duty-Free Trade Access:</strong> Preferential tariff access under EU Everything But Arms (EBA) / GSP and UK trade agreements.</li>
                <li><strong>Direct Export Seaport:</strong> Direct container vessel departures from Chattogram (Chittagong) Seaport.</li>
              </ul>
            </section>

            {/* Section 9: Sustainability & Ethics */}
            <section id="sustainable-ethics" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                9. Sustainable Manufacturing, Social Impact & Artisan Ethics
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
                Over 80% of our weaving and coiling artisans are rural women. Through fair compensation, flexible village craft hubs, and safe workplace environments, Golden Fiber Crafts Limited fosters real socio-economic independence while preserving Bangladesh's cultural craft heritage. Fiber offcuts are recycled into paper pulp or felt insulation, maintaining zero landfill waste.
              </p>
            </section>

            {/* Section 10: Buyer Due Diligence */}
            <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                10. How to Choose a Reliable Jute Basket Manufacturer
              </h2>
              <div className="mt-3 p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs sm:text-sm space-y-2 font-mono">
                <div className="flex items-center gap-2 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verify direct factory premises (avoid unverified trading brokers)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Confirm digital moisture meter protocols (&lt;10%–12% mandatory)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Review pre-shipment AQL 2.5 third-party inspection readiness</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Require certified AZO-free and heavy-metal-free dye formulation</span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Audit export packaging specifications (5-ply cartons, CBM accuracy)</span>
                </div>
              </div>
            </section>

            {/* Section 11: Procurement Guide */}
            <section id="procurement-guide" className="prose prose-stone max-w-none">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                11. Step-by-Step International Procurement Guide
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">1</span>
                  <span className="font-bold text-stone-900 block">Inquiry & Spec</span>
                  <span className="text-stone-500">Share target dimensions, quantities, and destination port.</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">2</span>
                  <span className="font-bold text-stone-900 block">Sample Prototyping</span>
                  <span className="text-stone-500">Physical prototypes couriered within 7–10 days via DHL/FedEx.</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">3</span>
                  <span className="font-bold text-stone-900 block">Order Sign-Off</span>
                  <span className="text-stone-500">Production schedule locked with commercial deposit or L/C.</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">4</span>
                  <span className="font-bold text-stone-900 block">Bulk Production</span>
                  <span className="text-stone-500">30–45 days execution with continuous AQL 2.5 in-line checks.</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-stone-200">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-1">5</span>
                  <span className="font-bold text-stone-900 block">FOB Export</span>
                  <span className="text-stone-500">Container loading, fumigation, and Chattogram port clearance.</span>
                </div>
              </div>
            </section>

            {/* Section 12: Specifications & Logistics Tables */}
            <section id="specifications-tables" className="space-y-8">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                12. Export Specifications & Packaging Tables
              </h2>

              {article.tables.map((table, tIdx) => (
                <div key={tIdx} className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
                  <div className="px-4 py-3 bg-stone-100/80 border-b border-stone-200">
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900">{table.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-stone-50 text-stone-700 border-b border-stone-200">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-2.5 px-3 font-semibold whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        {table.rows.map((r, rIdx) => (
                          <tr key={rIdx} className="hover:bg-amber-50/40 transition">
                            {r.map((cell, cIdx) => (
                              <td key={cIdx} className={`py-2 px-3 ${cIdx === 0 ? 'font-bold text-stone-900' : ''}`}>
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

            {/* RELATED PRODUCTS SHOWCASE (Interactive from Golden Fiber Crafts Catalog) */}
            <section className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                <div>
                  <span className="text-amber-700 text-xs font-semibold uppercase tracking-wider block mb-1">Catalog Spotlight</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Featured Jute Basket Export Models</h3>
                </div>
                <Link
                  to="/categories/baskets"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800"
                >
                  <span>View All 42 Models</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { code: 'DJB-01', name: 'Storage Jute Basket (Set of 3)', img: '/products/djb_01_hd.jpg' },
                  { code: 'DJB-03', name: 'Round Basket w/ Black Rim', img: '/products/djb_03_hd.jpg' },
                  { code: 'DJB-11', name: 'Jute Round Cylinder Bins', img: '/products/djb_11_hd.jpg' },
                  { code: 'DJB-13', name: 'Lidded Storage Canisters', img: '/products/djb_13_hd.jpg' },
                  { code: 'DJB-28', name: 'Two-Tone Cylinder Planters', img: '/products/djb_28_hd.jpg' },
                  { code: 'DJB-38', name: 'Striped Storage w/ Leather', img: '/products/djb_38_hd.jpg' }
                ].map((prod) => (
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
                      <p className="text-[10px] text-stone-500 mt-0.5">Unit: Set of 3 (S/3)</p>
                    </div>
                    <button
                      onClick={() => onOpenQuoteModal({ productCode: prod.code, productName: prod.name })}
                      className="mt-3 w-full py-1.5 bg-stone-900 hover:bg-amber-600 text-white rounded text-[11px] font-medium transition"
                    >
                      Inquire Quote
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 13: Frequently Asked Questions (Accordion) */}
            <section id="faq-section" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
                13. Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-3 mt-4">
                {article.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs transition"
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

            {/* Content Cluster: Future Related Topics */}
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

            {/* Bottom Conversion CTA */}
            <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
                  Direct Factory Export Partner
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
                  Launch Your Custom Jute Basket Collection with Golden Fiber Crafts
                </h3>
                <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                  Partner directly with an authentic manufacturer in Bangladesh. We provide tailored nesting solutions, custom Pantone reactive dyeing, sample kits within 10 days, and full container export.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenQuoteModal({ productCode: 'JUTE-BASKET-CONTAINER-RFQ' })}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-sm transition shadow-sm"
                  >
                    Submit Request for Quotation (RFQ)
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
