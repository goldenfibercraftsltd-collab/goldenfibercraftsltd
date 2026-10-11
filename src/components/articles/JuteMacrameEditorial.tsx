import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Box, Compass, HeartHandshake, Scissors, Flame, RefreshCw
} from 'lucide-react';

interface JuteMacrameEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const JuteMacrameEditorial: React.FC<JuteMacrameEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Bast Fiber Anatomy & Macrame Knot Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Jute Bast Fiber Anatomy & Macrame Knot Engineering: Tensile Endurance & Tactile Warmth
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted jute macrame (or knotted jute wall hanging and plant hanger) is an artisanal, plant-based textile home accent constructed by hand-knotting high-grade Bangladeshi golden Tosha jute yarn (<em>Corchorus olitorius</em>) twisted into 3-ply and 4-ply high-tensile cords (3mm to 6mm caliber). Engineered with superior linear knot tenacity exceeding 45 kg per strand, natural moisture breathability, zero synthetic microplastic shedding, and 100% biodegradable circularity, genuine jute macrame products offer North American and European home decor brands a tactile, eco-luxury alternative to synthetic polyester, acrylic, or bleached chemical cotton cordings.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In architectural interior decor and commercial botanic merchandising, macrame accessories must bridge organic boho charm with uncompromising physical strength. Unlike basic decorative ribbons, an export-grade macrame plant hanger or suspended wall shelf must reliably carry sustained deadweight—often holding 5kg to 10kg ceramic pots, wet potting soil, and lush foliage over years of suspension. Bangladeshi Tosha jute delivers these structural properties through its distinct bast fiber lignocellulosic cellular matrix:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">45+ kg Break Tensile Strength</span>
            <span>High-tenacity 3-ply twisted Tosha jute cords endure heavy ceramic flowerpots without cord stretching, knot distortion, or fiber rupture.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural High-Friction Grip</span>
            <span>Microscopic surface scales of natural jute bast fibers lock square knots and spiral hitches tightly, eliminating gravity slippage over time.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Zero Microplastic Shedding</span>
            <span>Pure plant-based lignocellulose avoids petroleum-derived polypropylene shedding, safeguarding indoor air quality and home hygiene.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Hand-Knotting Jute Macrame */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-knotting-jute-macrame.jpg"
            alt="Bangladeshi woman artisan hand-knotting golden Tosha jute macrame wall hanging in rural cottage handicraft workshop in Bangladesh"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
            loading="lazy"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Skilled artisan tying precision geometric chevron square knots with golden Tosha jute twine in rural Kishoreganj, Bangladesh.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">ARTISAN HAND-KNOTTING</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Global Retailers Are Switching */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Home Decor Brands & Plant Boutiques Are Transitioning to Natural Jute Macrame
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
          Home decor chains, boutique garden centers, and lifestyle retailers across the United States, United Kingdom, Netherlands, Germany, and Scandinavia are expanding their natural jute macrame lines. This commercial transition is driven by four key factors: (1) surging consumer affinity for Japandi, Wabi-Sabi, and Urban Jungle biophilic interior styles; (2) consumer fatigue against bleached synthetic polyester ropes; (3) stringent European ESG and PPWR directives incentivizing natural bio-fibers; and (4) superior commercial profit margins exceeding 70% enabled by factory-direct sourcing from Bangladesh under 0% preferential tariffs.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In European and North American retail merchandising, consumers increasingly seek organic, textured materials that create calm, restorative sanctuary environments. Mass-produced plastic wall art and synthetic wall hangings lack tactile authenticity. Hand-knotted golden jute macrame fulfills this market appetite with tremendous visual authority:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2.5 mt-3 list-disc pl-5">
          <li><strong>The Biophilic & Urban Jungle Movement:</strong> Urban homeowners and apartment dwellers maximize vertical living spaces. Multi-tier hanging jute macrame plant holders enable plant enthusiasts to create lush indoor green walls without consuming valuable floor or tabletop real estate.</li>
          <li><strong>Japandi & Mediterranean Bohemian Aesthetics:</strong> The fusion of Scandinavian clean functionality and Japanese rustic minimalism prioritizes unvarnished wood, raw earthy bast fibers, and artisanal imperfections. Tosha jute’s warm honey-golden hue harmonizes flawlessly with white limewash walls and neutral oak furnishings.</li>
          <li><strong>Superior Sustainability Over Chemically Bleached Cotton:</strong> Conventional cotton macrame cord demands intensive freshwater irrigation and chemical chlorine bleaching agents. Natural golden jute requires minimal synthetic fertilizers, zero chemical bleaches, and grows rapidly within 120 days nourished solely by Bangladesh’s monsoon rainfall.</li>
          <li><strong>Zero Microplastic Pollution:</strong> Unlike polyester and nylon macrame products that shed non-degradable microfibers during cleaning, natural jute is 100% home-compostable and circular at its end-of-life cycle.</li>
        </ul>
      </section>

      {/* Section 3: Commercial Classifications & Structural Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Structural Styles of Jute Macrame Decor
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited manufactures six primary commercial silhouettes of export-grade jute macrame home decor, engineered for international retail shelves and optimized for compact flat-pack ocean container logistics:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Package className="w-4 h-4" />
              <h4>1. Multi-Tier & Single Jute Plant Hangers (BCC-05 / BCC-03)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Engineered with 4 heavy-duty braided suspension arms connected by diamond gathering knots. Available in single-tier (100 cm) and vertical dual-tier (120–140 cm) formats, accommodating ceramic or terracotta pots from 12 cm to 28 cm diameter with weight ratings up to 10 kg.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Sparkles className="w-4 h-4" />
              <h4>2. Statement Geometric Wall Tapestries (BCC-01)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Grand artisanal statement tapestries (60x80 cm up to 120x150 cm) hand-knotted on solid natural mango wood, teak, or bamboo dowels. Features intricate chevron diagonals, layered berry knots, and cascading unraveled fringe hems.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <RefreshCw className="w-4 h-4" />
              <h4>3. Circular Boho Macrame Fringe Mirrors (BCC-08)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Center premium high-definition silver float glass mirror surrounded by a sunburst perimeter of hand-knotted floral jute motifs and dense brushed fringe (Total Dia 45–60 cm). Mounted on rigid rustproof powder-coated internal wire backing.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Layers className="w-4 h-4" />
              <h4>4. Suspended Floating Wood Macrame Shelves (BCC-12)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Dual functional decor merging knotted 5mm high-tensile jute cord suspension with kiln-dried pine or mango wood shelves (45x15 cm). Provides balanced support for small potted succulents, books, and artisan candles up to 8 kg load.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Compass className="w-4 h-4" />
              <h4>5. Modern Geometric Room Dividers & Curtains (BCC-15)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Full-length bohemian doorway portières and window valances (90x180 cm up to 120x220 cm). Knot density balances airy light transmission with natural privacy partitioning, fitted with integrated top rod sleeves.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Box className="w-4 h-4" />
              <h4>6. Miniature Giftware & Car Charm Accessories</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              High-velocity impulse retail products including miniature succulent hanging charms, macrame keychains with brass lobster clasps, and wooden bead car diffuser pendants engineered for boutique counter checkout displays.
            </p>
          </div>
        </div>

        {/* Embedded Image: Wholesale Showroom Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-jute-macrames-wholesale-display.jpg"
            alt="Wholesale commercial showroom display of handcrafted jute macrame wall hangings, plant hangers, and fringe circular mirrors for export"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
            loading="lazy"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Export-ready jute macrame collection featuring plant hangers, chevron tapestries, and circular fringe mirrors at Golden Fiber Crafts showroom.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">WHOLESALE DISPLAY</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 4: 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Raw Tosha Fiber to Master Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          At Golden Fiber Crafts Limited, every macrame piece undergoes an audited, standardized 7-phase production sequence combining artisan hand-knotting mastery with modern industrial quality control:
        </p>

        <div className="space-y-3.5 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">1</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Tosha Fiber Grading & Batching:</strong>
              Procuring premium unbleached grade TD-3/TD-4 golden Tosha jute from the alluvial Brahmaputra river basin. Reeds undergo sorting to eliminate root bark, coarse sprigs, and dark spots before spinning.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">2</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Precision Rope Twisting & Ply Calibration:</strong>
              Yarns are spooled and twisted into uniform 3-ply and 4-ply macrame cords (3.0mm, 4.0mm, or 5.0mm) with calibrated twists per meter (TPM) to prevent strand untwisting or excessive kinking during knotting.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">3</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Dowel Preparation & Frame Loom Mounting:</strong>
              Hardwood dowels (mango wood, teak, or pine) are kiln-dried to &lt;10% moisture, sanded smooth to 240-grit, and checked for straightness. Cords are measured with laser cut-guides and pre-mounted via lark's head hitches.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">4</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Artisanal Hand-Knotting & Tension Symmetry:</strong>
              Master craftswomen execute complex node sequences: half-square spiral knots, double half hitches, diamond berry loops, and gathering wraps. Tension is checked continuously against physical metal master gauges.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">5</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Precision Tassel Trimming & Organic Steam Setting:</strong>
              Cascading bottom fringes are aligned against rotary acrylic rulers and cut with surgical shears. Finished items pass through low-temperature organic steam tunnels to relax fiber memory and eliminate shipping wrinkles.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">6</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Hot-Air Kiln Dehumidification (&lt;10%–12% Moisture):</strong>
              Every piece is placed in dedicated hot-air circulation rooms at 42°C for 6 to 8 hours until electrical pin meters register below 11.0% moisture, eliminating mold spores and bacteria before packing.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">7</div>
            <div>
              <strong className="text-stone-900 block font-semibold mb-0.5">Flat-Pack Anti-Tangle Packaging & Container Stacking:</strong>
              Wall hangings are rolled with protective tissue around cardboard tubes. Master cartons (5-ply heavy kraft) are sealed with internal 0.05mm polyethylene moisture barrier liners and high-absorption silica desiccants.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited operates as a dedicated B2B manufacturing partner. We convert CAD blueprints, Pinterest mood boards, and physical samples into high-volume export lines with end-to-end bespoke flexibility:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Custom Wooden Hardware & Dowels</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Selection of natural turned mango wood, sustainable pine, wild driftwood, or polished bamboo dowels. Choice of natural sanded, matte clear varnish, or stained espresso/ebony finishes with pre-drilled wall hanging notches.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Decorative Accents & Metal Rings</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Integration of unfinished wooden beads (12mm–30mm), ceramic accent beads, brass or copper suspension rings, and powder-coated matte black iron hardware compliant with international anti-rust standards.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">AZO-Free Custom Colorways</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              In addition to unbleached natural golden Tosha, we provide certified AZO-free dyed cords in terracotta, charcoal, sage green, mustard ochre, and warm ivory, compliant with EU REACH and US CPSIA guidelines.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Full Private Label & Retail Packaging</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Laser-engraved wooden brand tags, woven satin brand labels, custom printed kraft paper hangtags with EAN/UPC barcodes, branded belly bands, and individual retail gift boxes printed with client artwork.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Control & Defect Prevention */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Control & Defect Prevention: The AQL 2.5 Standard
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Quality Policy:</strong>
          Every production run adheres strictly to ISO 2859-1 (AQL 2.5 Major / 4.0 Minor) inspection standards. Zero tolerance is enforced for fiber mildew, mold spores, knot slippage, missing dowel screws, and moisture levels exceeding 12.0%.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Exporting handcrafted textile home goods across oceans demands rigorous quality control. Our Dhaka and regional warehouse teams execute five mandatory checkpoint protocols:
        </p>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">1. Digital Pin Moisture Meter Testing (&lt;10.0%–11.5%)</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">PASS: &lt;11.5%</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">2. Plant Hanger Static Load Test (15 kg Sustained 48h)</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">ZERO DEFORMATION</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">3. Knot Pattern & Dimensional Symmetry (±1.5 cm Tolerance)</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">LASER VERIFIED</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">4. Hardware Anti-Corrosion Salt Spray Test</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">48H NO RUST</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">5. Phytosanitary & ISPM-15 Wood Quarantine Inspection</span>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">GOVT CERTIFIED</span>
          </div>
        </div>

        {/* Embedded Image: QC Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/jute-macrame-quality-control-moisture-inspection.jpg"
            alt="Quality control inspector testing moisture content under 11 percent on handcrafted jute macrame wall hanging in Bangladesh export warehouse"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
            loading="lazy"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Quality control specialist performing electrical pin moisture meter calibration (10.4% reading) at Golden Fiber Crafts export facility.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">QC VERIFICATION</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 7: Packaging Logistics & Ocean Freight Optimization */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Packaging Logistics & Ocean Freight Optimization (CBM Calculations)
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">CBM Freight Advantage:</strong>
          Unlike rigid furniture or large hollow planters, hand-knotted jute macrame is intrinsically flexible and compactable. By utilizing protective flat-folding sleeves and core-rolled tube packs, export cartons achieve extraordinary packing densities—allowing up to 17,000 units in a 20ft container and over 40,000 units in a 40ft HQ container, slashing landed shipping costs per unit to pennies.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          To ensure items arrive at retail destination distribution centers in pristine, ready-to-hang condition, our export packaging engineers implement strict cartonization rules:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2.5 mt-3 list-disc pl-5">
          <li><strong>Anti-Tangle Cardboard Core Support:</strong> Wall hangings are rolled around sturdy 2.5-inch recycled cardboard cores with soft inner tissue sheets. This prevents fringe entanglement, dowel abrasion, and cord creasing during 30–45 days of ocean transit.</li>
          <li><strong>5-Ply Heavy Duty Kraft Master Cartons:</strong> Cartons utilize 250 GSM kraft outer and inner liners with reinforced fluting, rated for 200+ lbs edge crush test (ECT) to resist stacking pressure in maritime container holds.</li>
          <li><strong>Hermetically Sealed Polyethylene Barrier Bags:</strong> Every master carton is lined with a sealed 0.05mm polyethylene barrier bag containing four 50g activated clay/silica desiccant sachets to absorb residual maritime ambient humidity.</li>
          <li><strong>Palletization & Forklift Ready:</strong> Goods are loaded onto heat-treated, ISPM 15-stamped Euro-pallets (120x80 cm) or standard US GMA pallets (120x100 cm) wrapped in UV-resistant stretch film with corner edge protectors.</li>
        </ul>
      </section>

      {/* Section 8: Why Source From Bangladesh */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Why Source Jute Macrame Directly From Bangladesh?
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Bangladesh produces over 70% of the world’s premium export-grade raw Tosha jute fiber. Sourcing directly from Bangladesh provides unmatched structural and commercial advantages over re-exporters and trading intermediaries:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Direct Origin Fiber Cost Efficiency</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Eliminating multi-country freight and middleman markups allows factory-direct FOB pricing 25% to 40% lower than regional traders in China or India who import raw jute fiber from Bangladesh before knotting.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">0% Duty-Free Market Access (GSP & EBA)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Importers in the UK, EU, Canada, Japan, and Australia enjoy 0% import customs duties under Generalized System of Preferences (GSP) and Everything But Arms (EBA) trade pacts with REX documentation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Generational Knotting & Weaving Heritage</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Bangladeshi artisans inherit centuries-old hand-twisting and knotting techniques passed down through rural cottage cooperatives, guaranteeing superior stitch precision and knot uniformity.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <h4 className="font-bold text-stone-900 text-sm mb-1 text-amber-900">Integrated Export Logistics via Chattogram Port</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Direct highway and feeder rail links connect our Dhaka packing facilities to Chattogram Seaport (CTG), ensuring swift weekly container sailings to Singapore, Colombo, Rotterdam, Felixstowe, and New York.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Sustainable Manufacturing & Women Empowerment */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Sustainable Manufacturing, Social Ethics & Women Empowerment
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Social Mission:</strong>
          Over 85% of Golden Fiber Crafts Limited’s macrame artisans are rural Bangladeshi women from Kishoreganj, Faridpur, and Rangpur. By establishing decentralized community cottage craft hubs, we provide dignified fair-trade livelihoods, financial autonomy, and direct healthcare coverage in rural villages.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          For international retail brands, authentic ethical provenance is a decisive consumer differentiator. When your customers purchase a Golden Fiber Crafts macrame piece, they support a transparent, fair-wage craft ecosystem:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2.5 mt-3 list-disc pl-5">
          <li><strong>Fair Living Wages & Economic Security:</strong> All craftswomen receive compensation substantially above national minimum handicraft wage rates, paid directly via secure mobile banking (bKash/Nagad) ensuring financial independence.</li>
          <li><strong>Zero Child Labor Guarantee:</strong> Strictly audited under international SEDEX and SMETA 4-Pillar labor standards, completely prohibiting child labor and ensuring safe, ergonomic working spaces.</li>
          <li><strong>Decentralized Cottage Village Clusters:</strong> Artisans work within flexible village centers near their homes, allowing them to balance family care and agricultural harvests without migrating to overcrowded urban industrial slums.</li>
          <li><strong>100% Zero-Carbon Organic Materiality:</strong> Natural Tosha jute absorbs 15 tons of carbon dioxide and releases 11 tons of oxygen per hectare within its 120-day growth cycle, enriching local soil fertility naturally.</li>
        </ul>
      </section>

      {/* Section 10: Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Buyer Due Diligence Audit Checklist for Macrame Sourcing
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Before finalizing a commercial purchase contract with any overseas macrame supplier, corporate procurement directors should execute this 8-point due diligence audit:
        </p>

        <div className="space-y-2.5 my-4 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Fiber Purity Verification:</strong> Confirm 100% natural Tosha jute without hidden synthetic polypropylene core fillers.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Moisture Content Calibration:</strong> Mandate verified digital pin moisture readings &lt;12% at the final loading dock.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Knot Tenacity Testing:</strong> Demand certified 10kg–15kg static pull test reports for all suspended plant hangers and shelves.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Wood Fumigation Compliance:</strong> Verify ISPM 15 phytosanitary treatment certificates for all hardwood dowels and wooden beads.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>AZO-Free Dye Certification:</strong> Require independent lab test reports confirming compliance with EU REACH and CPSIA standards.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Anti-Tangle Cartonization:</strong> Ensure wall tapestries are individually rolled on rigid cardboard tubes to eliminate transit creasing.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Social Compliance Audit:</strong> Review factory audit records ensuring fair living wages and complete prohibition of child labor.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Preferential Tariff Documentation:</strong> Confirm supplier issuance of REX origin statements for 0% duty entry into the UK and EU.</span>
          </div>
        </div>
      </section>

      {/* Section 11: Step-by-Step International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-amber-900 text-sm block mb-1">Step 1: Inquiry & Specs</span>
            <span>Submit target dimensions, rope caliber, dowel wood type, and estimated order quantities. Receive formal FOB quote within 24 hours.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-amber-900 text-sm block mb-1">Step 2: Rapid Prototyping</span>
            <span>Artisans produce physical golden samples within 5 to 7 days. Shipped worldwide via DHL Express for final touch-and-feel sign-off.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-amber-900 text-sm block mb-1">Step 3: Mass Production</span>
            <span>Cottage clusters weave batch orders under strict AQL 2.5 QC oversight. Weekly photo updates shared directly with the buyer's desk.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-amber-900 text-sm block mb-1">Step 4: FOB Export & Customs</span>
            <span>Goods are trucked to Chattogram Seaport, phytosanitary fumigated, custom-cleared, and loaded onto ocean container vessels.</span>
          </div>
        </div>
      </section>

      {/* Section 12: Technical Specifications & Container Packing Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Export Specifications, Customization Matrix & Container Logistics Tables
        </h2>

        {article.tables.map((tbl, idx) => (
          <div key={idx} className="my-6">
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mb-2.5 text-amber-950">
              {tbl.title}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 font-semibold border-b border-stone-200">
                    {tbl.headers.map((h, hIdx) => (
                      <th key={hIdx} className="p-2.5 sm:p-3 border-r border-stone-200 last:border-r-0 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {tbl.rows.map((r, rIdx) => (
                    <tr key={rIdx} className="hover:bg-amber-50/40 transition-colors">
                      {r.map((c, cIdx) => (
                        <td key={cIdx} className="p-2.5 sm:p-3 text-stone-700 border-r border-stone-100 last:border-r-0">
                          {c}
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

      {/* Section 13: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-700" />
          13. Frequently Asked Questions (FAQ) for B2B Retail & Wholesale Importers
        </h2>

        <div className="space-y-3 mt-4">
          {article.faqs.map((faq, fIdx) => {
            const isOpen = activeFaqIndex === fIdx;
            return (
              <div 
                key={fIdx} 
                className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : fIdx)}
                  className="w-full p-4 text-left font-semibold text-stone-900 flex items-center justify-between gap-3 text-sm sm:text-base hover:bg-stone-50 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center shrink-0">
                      {fIdx + 1}
                    </span>
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-amber-800 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* B2B Call To Action Box */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-white shadow-xl text-center relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full uppercase tracking-wider border border-amber-500/30">
            Factory Direct B2B Wholesale
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Ready to Launch Custom Handcrafted Jute Macrame for Your Brand?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Request our complete wholesale macrame catalog, custom OEM tech pack assistance, or rapid physical prototype samples delivered to your office in 5 to 7 business days.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal({ productCode: 'OEM-JUTE-MACRAME' })}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Request B2B Quote & Samples
            </button>
            <a
              href="mailto:info@goldenfibercraftsltd.com?subject=Wholesale%20Jute%20Macrame%20Inquiry"
              className="w-full sm:w-auto px-6 py-3 bg-stone-800/80 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Email Export Desk Directly
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
