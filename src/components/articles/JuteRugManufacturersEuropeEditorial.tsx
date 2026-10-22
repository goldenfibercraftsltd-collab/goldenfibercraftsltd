import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, 
  AlertCircle, Leaf, Shield, Check, DollarSign, Clock, RefreshCw
} from 'lucide-react';

interface JuteRugManufacturersEuropeEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const JuteRugManufacturersEuropeEditorial: React.FC<JuteRugManufacturersEuropeEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Fiber Anatomy & Tosha Jute Engineering */}
      <section id="natural-fiber-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. What Makes Bangladeshi Jute Rug Manufacturers the Global Benchmark? Fiber Anatomy & High-Twist Braiding
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          Premier <strong>jute rug manufacturers</strong> in Bangladesh engineer commercial area rugs, circular braided mats, and heavy flatweave floor coverings from 100% genuine Corchorus olitorius (Tosha golden jute) bast fiber. Utilizing high-twist multi-ply yarn cores (28 to 36 lbs/spyndle) and computerized industrial zig-zag lock-stitching, Bangladeshi manufacturers produce heavy-duty floor coverings with surface densities ranging from 1,800 to 2,800 GSM. Sourced directly from Bangladesh, these natural rugs offer European homeware retailers 100% circular biodegradability, anti-static acoustic dampening, certified moisture control under 10%–12%, and complete <strong>0% customs duty access</strong> under the European Union’s Everything But Arms (EBA/GSP) preferential trade agreement.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          For European department store chains, boutique interior houses, and sustainable home decor importers across Germany, the Netherlands, France, Spain, and the United Kingdom, finding certified <strong>jute rug manufacturers</strong> is vital to fulfilling corporate circularity goals. Unlike synthetic polypropylene (PP) or nylon floor coverings that shed hazardous microplastics and release volatile organic compounds (VOCs), handcrafted natural jute rugs deliver robust mechanical durability paired with rich tactile warmth. Tosha golden jute cultivated along the fertile Brahmaputra alluvial basin in Bangladesh possesses unmatched crystalline alpha-cellulose (61%–63%) and cohesive lignin polymers (12%–13%), giving Bangladeshi jute rugs distinct structural advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">61%–63% Alpha-Cellulose</span>
            <span>High molecular tensile strength resisting high foot-traffic abrasion in European living rooms, hallways, and commercial hospitality lobbies.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural Acoustic Absorption</span>
            <span>Porous vegetative cellular matrix absorbs ambient reverberation (NRC 0.35–0.45), creating peaceful acoustic balance in modern minimalist interiors.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Zero Synthetic Microplastics</span>
            <span>Pure annual bast plant crop: 100% biodegradable and home-compostable, zero synthetic microplastics, zero petroleum chemical backing.</span>
          </div>
        </div>

        {/* Embedded Image 1: Artisan Hand-Weaving */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-braided-jute-rug.jpg"
            alt="Bangladeshi woman artisan hand-stitching a large circular braided golden jute rug inside a rural cottage workshop in Bangladesh"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Bangladeshi craftswoman precision-stitching a spiral circular braided jute rug with reinforced natural twine in a rural cottage shed.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">AUTHENTIC HANDMADE PRODUCTION</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why European Retailers Are Sourcing from Bangladesh */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why European Retailers & Wholesalers Source Jute Rugs Directly from Bangladesh
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Commercial Sourcing Advantage:</strong>
          European homeware chains (such as Zara Home, IKEA, H&M Home, Dille & Kamille, Maisons du Monde, Sostrene Grene, and JYSK) prioritize <strong>jute rug manufacturers in Bangladesh</strong> over Indian, Chinese, or Vietnamese suppliers for three decisive commercial reasons: (1) <strong>0% Customs Tariff</strong> under EU GSP/EBA (saving 4% to 8% import duty on HS Code 5702.39); (2) <strong>direct raw fiber origin</strong> (Bangladesh produces over 80% of the world’s finest export-grade Tosha jute, eliminating cross-border raw material markups); and (3) <strong>unmatched artisanal competitiveness</strong> coupled with strict European compliance.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In European commercial centers—from Rotterdam, Hamburg, and Antwerp to Le Havre, Valencia, and Felixstowe—home textile procurement is shifting heavily toward verifiable sustainable origins. Accelerated by the <em>EU Corporate Sustainability Due Diligence Directive (CSDDD)</em> and anti-greenwashing mandates, retailers require certified chemical safety, transparent artisan supply chains, and superior ocean logistics:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2 mt-3 list-disc pl-5">
          <li><strong>0% European Customs Tariff (GSP/EBA REX System):</strong> Handcrafted floor coverings under HS Code 5702.39 and 5705.00 exported from Bangladesh enter the European Union duty-free. Importers save €3,000 to €6,500 per 40ft container compared to non-GSP sourcing origins.</li>
          <li><strong>EU REACH & Zero Formaldehyde:</strong> All raw fibers, natural latex backing compounds, and reactive dyes comply strictly with Regulation (EC) No 1907/2006 (REACH). Guaranteed free of banned AZO aromatic amines, lead, and hazardous phthalates.</li>
          <li><strong>High Retail Margin Multipliers:</strong> Direct factory FOB pricing in Bangladesh ranges from US$4.50 to $38.00 per rug (depending on diameter and GSM). European retailers merchandise these rugs at €29.00 to €199.00 ($32 to $220), achieving gross commercial margins of 65% to 75%.</li>
          <li><strong>Decentralized Social Impact:</strong> Golden Fiber Crafts Limited operates decentralized artisan centers across rural Bangladesh, empowering over 300 skilled women artisans with fair living wages, hygienic work conditions, and ethical community dividends.</li>
        </ul>

        {/* Embedded Image 2: Wholesale Collection Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/wholesale-braided-jute-rugs-collection-europe.jpg"
            alt="Wholesale collection of handcrafted natural Tosha jute floor rugs including circular spiral braided rug, oval runner, and rectangular flatweave rug"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Showroom line for European buyers: round braided spiral mats (120–200cm), oval hallway runners, and punja handloom flatweave area rugs.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">EUROPEAN SHOWROOM COLLECTION</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 3: Commercial Rug Classifications */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Jute Rug Classifications & Weaving Styles for European Retailers
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited engineers five flagship commercial classifications of export-grade jute floor coverings, manufactured to exact European retail specifications:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Layers className="w-4 h-4" />
              <h4>1. Circular Braided Spiral Jute Rugs (BJM-10 / GFC-FM-017)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Crafted from 10mm to 14mm high-density 3-ply braided Tosha jute ropes, wound outward in concentric spirals and joined with heavy industrial zig-zag lock-stitching (1,900–2,400 GSM). Completely reversible, lie-flat edge construction, available in diameters: 90 cm, 120 cm, 150 cm, 180 cm, 200 cm, and 240 cm.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Layers className="w-4 h-4" />
              <h4>2. Heavy Punja Handloom Flatweave Rugs (BJM-12)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Traditional pit-loom and frame-loom flatweaves featuring high-twist 3-ply warp and thick unbleached weft yarns (2,000–2,500 GSM). Features reinforced selvedges and turned-back hemmed ends. Ideal for dining rooms, high-traffic corridors, and Scandinavian living spaces (Sizes: 120x180 cm, 160x230 cm, 200x300 cm).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Layers className="w-4 h-4" />
              <h4>3. Scalloped & Openwork Mandala Rugs (BJM-31 / BJM-32)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Artisan statement pieces featuring hand-coiled concentric rings, teardrop petals, and openwork lace borders. High perceived value in boutique lifestyle boutiques, children’s nurseries, and bohemian European interiors.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white shadow-2xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold font-serif text-sm">
              <Layers className="w-4 h-4" />
              <h4>4. Oval Hallway Runners & Semicircle Doormats (BJM-26 / BJM-27)</h4>
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Elongated braided oval runners (80x200 cm, 80x250 cm, 80x300 cm) and half-moon entryway doormats. Engineered with optional natural vulcanized latex spray backing to provide non-slip traction on polished European hardwood and ceramic tile flooring.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Raw Bast Fiber to Master Roll
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Technical Summary:</strong>
          Producing export-grade jute rugs requires seven controlled manufacturing phases: (1) raw Tosha fiber grading and retting moisture inspection, (2) sliver carding and precision spinning (28–36 lbs yarn count), (3) 3-strand mechanical rope braiding, (4) artisan spiral coiling and industrial zig-zag lock-stitching (4–6 SPI), (5) ultrasonic trimming and optional natural latex spray backing, (6) 48-hour hot-air chamber dehumidification ensuring fiber moisture is strictly under 10%–12%, and (7) heavy polyethylene waterproof roll packaging with desiccants.
        </div>

        <div className="space-y-3 mt-4 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
            <div>
              <strong className="text-stone-900 block font-serif">Fiber Sourcing & Hackling</strong>
              Grade A Tosha jute fibers are harvested from the Faridpur and Tangail riverine belts, inspected for natural luster, strength, and staple length (&gt;2.5m). Root ends and hard bark are hand-hackled away.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
            <div>
              <strong className="text-stone-900 block font-serif">Spinning & Yarn Multi-Plying</strong>
              Fibers are drafted into uniform high-twist heavy yarns (28 to 36 lbs/spyndle). Yarns are multi-plied (3-ply or 4-ply) to achieve the high tensile foundation required for floor rugs.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
            <div>
              <strong className="text-stone-900 block font-serif">Precision Rope Braiding</strong>
              Plied yarns pass through high-speed rotary braiding machines, forming smooth, high-density 3-strand ropes (10mm to 14mm diameter) with uniform core compaction to eliminate hollow voids.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
            <div>
              <strong className="text-stone-900 block font-serif">Spiral Coiling & Industrial Lock-Stitching</strong>
              Master artisans coil the braided rope on flat turntable worktables, feeding edges through industrial heavy-duty walking-foot sewing machines with high-tenacity nylon or bonded polyester threads (4 to 6 stitches per inch) to prevent unraveling under heavy tension.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">5</span>
            <div>
              <strong className="text-stone-900 block font-serif">Surface Shearing & Anti-Slip Latex Backing (Optional)</strong>
              Surface stray fibers are trimmed using automated shearing blades. For European buyers requesting non-skid features, an ultra-thin spray coating of 100% natural, odorless vulcanized rubber latex is applied to the reverse face.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">6</span>
            <div>
              <strong className="text-stone-900 block font-serif">Hot-Air Dehumidification (&lt;10%–12% Moisture)</strong>
              Rugs are racked in temperature-controlled dehumidification chambers (42°C–48°C) for 36–48 hours until internal fiber moisture tests strictly under 10%–12% on calibrated pin meters.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200 flex gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0 text-xs">7</span>
            <div>
              <strong className="text-stone-900 block font-serif">Moisture-Barrier Roll Packaging & Palletizing</strong>
              Finished rugs are rolled face-out around sturdy cardboard cores, sealed in heavy 100-micron polyethylene bags with active silica gel desiccant pouches, and packed into 5-ply export master cartons or woven burlap outer bales.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Moisture Mitigation & Mold Prevention */}
      <section id="moisture-mitigation" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. Moisture Mitigation Protocol: Zero Mold Risk During 35-Day Ocean Shipping to Europe
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Critical Quality Challenge:</strong>
          Natural bast fibers are hygroscopic. During 30 to 40 days of ocean freight across equatorial waters and through the Suez Canal to Northern European seaports (Rotterdam, Hamburg, Felixstowe), container temperature fluctuations can trigger "container sweat" (condensation rain). Without scientific pre-treatment, unmanaged moisture above 14% creates black mold and musty odors upon container unstuffing.
        </div>

        {/* Embedded Image 3: Factory Moisture Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/jute-rug-factory-quality-inspection-bangladesh.jpg"
            alt="Bangladeshi quality control inspector testing fiber moisture of a rolled braided jute rug with a digital pin meter in an export warehouse"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Golden Fiber Crafts QC specialist measuring fiber moisture (11.2%) on a rolled export jute rug prior to European container loading.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">FACTORY QC MOISTURE INSPECTION</span>
          </figcaption>
        </figure>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited implements a rigorous four-layer anti-mold containment protocol guaranteeing 100% dry, pristine arrival in European distribution centers:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs sm:text-sm text-stone-700">
          <div className="p-4 rounded-xl border border-stone-200 bg-white">
            <h4 className="font-bold text-stone-900 font-serif mb-1 flex items-center gap-1.5 text-amber-800">
              <Droplet className="w-4 h-4 text-emerald-600" />
              1. Electrical Resistance Moisture Pin Testing
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Every production lot undergoes 100% individual testing with calibrated digital 4-pin resistance moisture meters. No rug leaves the hot-air drying facility if moisture exceeds 11.5%.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white">
            <h4 className="font-bold text-stone-900 font-serif mb-1 flex items-center gap-1.5 text-amber-800">
              <Package className="w-4 h-4 text-emerald-600" />
              2. 100-Micron Sealed Polyethylene Shield
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Each rolled rug is vacuum-wrapped in heavy-duty 100-micron virgin LDPE waterproof plastic sleeves, heat-sealed at both ends to create an airtight microclimate.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white">
            <h4 className="font-bold text-stone-900 font-serif mb-1 flex items-center gap-1.5 text-amber-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              3. Activated Clay & Silica Desiccants
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Every individual rug roll includes two 50g activated bentonite clay desiccant packs. Additionally, 16 to 24 hanging container dry-poles (1.0 kg each) are installed inside the ocean container walls.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-white">
            <h4 className="font-bold text-stone-900 font-serif mb-1 flex items-center gap-1.5 text-amber-800">
              <Truck className="w-4 h-4 text-emerald-600" />
              4. Fumigation & Dry-Van Container Selection
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Containers departing Chattogram Seaport undergo government phytosanitary inspection and ISPM 15 fumigation. Containers are pre-inspected for floor plank dryness, zero rust holes, and intact door gaskets.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. OEM & Private Label Customization for European Homeware Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited operates full private label OEM / ODM manufacturing lines for European retail collections, bespoke interior catalogs, and e-commerce brands:
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Bespoke Diameters & Geometries:</strong> Round rugs (90cm to 300cm), rectangular area rugs (up to 300x400cm), oval runners, and custom square hallway mats.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Pantone PMS Reactive Yarn Dyeing:</strong> 100% AZO-free fiber dyeing matched to Pantone Fashion, Home + Interiors (FHI) palettes (charcoal, sage, indigo, terracotta).</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Edge Hemming & Binding:</strong> Turned-and-stitched clean selvedges, thick organic cotton twill tape binding (5cm–8cm width), or hand-tied knotted jute fringe tassels.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Anti-Slip Natural Latex Backing:</strong> Spray-applied liquid natural Hevea rubber backing vulcanized onto reverse loops for slip-resistant grip on slick hardwood floors.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Branded Packaging & Retail Labeling:</strong> Woven jacquard brand labels, FSC-certified recycled kraft paper hangtags with EAN-13 barcodes, and retail master cartons.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Multi-SKU Container Consolidation:</strong> Consolidate round rugs, flatweaves, runners, and jute storage baskets within a single 20ft or 40ft High Cube container.</span>
          </div>
        </div>
      </section>

      {/* Section 7: EU Regulatory Compliance, REACH & Fire Standards */}
      <section id="regulatory-compliance" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. European Regulatory Compliance: REACH, Chemical Safety & Fire Standards
        </h2>

        <div className="my-4 p-4 rounded-xl border border-stone-200 bg-white p-5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-700">
            <div className="p-3 bg-stone-50 rounded-lg">
              <strong className="text-stone-900 block font-serif text-sm mb-1 text-amber-800">EU REACH Regulation (EC) 1907/2006</strong>
              <span>Zero banned carcinogenic AZO aromatic amines (&lt;30 ppm), zero formaldehyde, zero alkylphenol ethoxylates (APEO), and zero SVHC candidates.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg">
              <strong className="text-stone-900 block font-serif text-sm mb-1 text-amber-800">Fire Safety: BS 4790 & EN 13501-1</strong>
              <span>Tested under BS 4790 (Hot Metal Nut method) achieving low radius of char. Natural vegetative fibers char slowly rather than melting into synthetic toxic flares.</span>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg">
              <strong className="text-stone-900 block font-serif text-sm mb-1 text-amber-800">EUDR Exemption Status</strong>
              <span>Jute is an annual herbaceous bast crop (Corchorus), officially exempt from the European Union Deforestation Regulation (EUDR) wood certification hurdles.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quality Control Protocol (AQL 2.5) */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Quality Control Protocol: AQL 2.5 General Inspection Level II
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Every export consignment destined for European ports undergoes three-stage quality audits conforming to ISO 2859-1 / ANSI/ASQ Z1.4 standards:
        </p>

        <div className="mt-4 space-y-3 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">Pre-Production Inspection (PPI):</strong>
              Verification of raw Tosha fiber moisture (&lt;12%), yarn tensile elongation, and color fastness to rubbing (ISO 105-X12 Grade 4+).
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">During Production Inspection (DUPRO):</strong>
              Continuous monitoring of braid diameter consistency, stitch density (4–6 SPI), dimensional tolerances (±1.5% maximum deviation), and flatness verification (ensuring rugs lie perfectly flat with zero edge curling).
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900">Final Random Inspection (FRI):</strong>
              Conducted when at least 80% of consignment is packed. Includes drop testing of master packaging, roll tightness inspection, barcode scanning readability, and mandatory moisture re-testing.
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Packaging Economics & Container Loading */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Packaging Logistics & Ocean Freight Optimization (CBM Calculations)
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Ocean Freight Economics:</strong>
          Jute floor rugs are packaged either in <strong>cylindrical rolls</strong> (recommended for braided spiral rugs to preserve flatness) or <strong>flat-folded master cartons</strong> (for punja flatweaves). Rolling around high-strength cardboard cores preserves rug geometry while maximizing container volume. A standard 40ft High Cube container accommodates between 3,500 and 4,800 medium-sized jute rugs (approx. 65 CBM).
        </div>
      </section>

      {/* Section 10: Step-by-Step International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
            <strong className="text-stone-900 block font-serif mb-1">RFQ & Tech-Pack Review</strong>
            <span>Buyer submits desired dimensions, shape (round, oval, flatweave), GSM target, and custom branding requirements.</span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
            <strong className="text-stone-900 block font-serif mb-1">Physical Sampling (7–10 Days)</strong>
            <span>Counter-samples dispatched via DHL/FedEx Express for buyer touch-and-feel approval, tensile review, and color sign-off.</span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
            <strong className="text-stone-900 block font-serif mb-1">Mass Production (25–35 Days)</strong>
            <span>Artisan braiding, sewing, and dehumidification. Weekly photographic progress reports provided to the buyer’s merchandising team.</span>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs mb-2">4</span>
            <strong className="text-stone-900 block font-serif mb-1">Export Loading & Clearance</strong>
            <span>FOB Chattogram (BDCGP) dispatch or CIF delivery to European ports. GSP Form A / REX statement issued for 0% duty clearance.</span>
          </div>
        </div>
      </section>

      {/* Section 11: Export Specifications & Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Export Specifications, Customization Matrix & Container Logistics Tables
        </h2>

        {/* Table 1: Standard Models */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mb-3">
            Table 1: Standard Export Jute Rug Specifications (Flagship European Models)
          </h3>
          <table className="min-w-full text-xs text-left border border-stone-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-semibold uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="py-2.5 px-3">Model Code</th>
                <th className="py-2.5 px-3">Model Name</th>
                <th className="py-2.5 px-3">Weave Construction</th>
                <th className="py-2.5 px-3">Fiber Grade & GSM</th>
                <th className="py-2.5 px-3">Standard Dimensions</th>
                <th className="py-2.5 px-3">Anti-Slip Backing</th>
                <th className="py-2.5 px-3">Export Packaging</th>
                <th className="py-2.5 px-3">Indicative FOB Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-10</td>
                <td className="py-2.5 px-3 font-medium">Natural Unbleached Round Jute Area Mat</td>
                <td className="py-2.5 px-3">Concentric Spiral Braid</td>
                <td className="py-2.5 px-3">100% Tosha Jute (2,100 GSM)</td>
                <td className="py-2.5 px-3">Dia: 120 cm / 150 cm / 180 cm</td>
                <td className="py-2.5 px-3">Optional Natural Latex</td>
                <td className="py-2.5 px-3">Rolled in LDPE / 4 Pcs per Master Bale</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$7.20 – $14.50</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">GFC-FM-017</td>
                <td className="py-2.5 px-3 font-medium">Braided Jute Floor Rug & Large Area Carpet</td>
                <td className="py-2.5 px-3">Heavy 12mm 3-Ply Braided Spiral</td>
                <td className="py-2.5 px-3">Export Grade Tosha (2,400 GSM)</td>
                <td className="py-2.5 px-3">Dia: 180 cm / 200 cm / 240 cm</td>
                <td className="py-2.5 px-3">Reversible (or Latex Backed)</td>
                <td className="py-2.5 px-3">Rolled on Core / Individual LDPE</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$16.50 – $32.00</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-12</td>
                <td className="py-2.5 px-3 font-medium">Classic Flatweave Rectangular Jute Rug</td>
                <td className="py-2.5 px-3">Heavy Punja Handloom Weave</td>
                <td className="py-2.5 px-3">100% Raw Tosha Jute (2,200 GSM)</td>
                <td className="py-2.5 px-3">120 x 180 cm / 160 x 230 cm</td>
                <td className="py-2.5 px-3">Turned & Bound End Hem</td>
                <td className="py-2.5 px-3">Rolled / 2 Pcs per 5-Ply Carton</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$14.80 – $26.50</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-31</td>
                <td className="py-2.5 px-3 font-medium">Openwork Lattice Ring Jute Mandala Mat</td>
                <td className="py-2.5 px-3">Hand-Coiled Openwork Rings</td>
                <td className="py-2.5 px-3">Tosha Golden Jute (1,850 GSM)</td>
                <td className="py-2.5 px-3">Dia: 100 cm / 120 cm / 150 cm</td>
                <td className="py-2.5 px-3">Natural Fiber Reversible</td>
                <td className="py-2.5 px-3">Flat in Master Carton (6 Pcs)</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$8.50 – $15.80</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-32</td>
                <td className="py-2.5 px-3 font-medium">Scalloped Petal Openwork Jute Floor Rug</td>
                <td className="py-2.5 px-3">Scalloped Petal Outer Rim</td>
                <td className="py-2.5 px-3">Tosha Fine Bast Fiber (1,950 GSM)</td>
                <td className="py-2.5 px-3">Dia: 120 cm / 150 cm</td>
                <td className="py-2.5 px-3">Natural Reversible</td>
                <td className="py-2.5 px-3">Flat in Master Carton (5 Pcs)</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$10.20 – $18.50</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-26</td>
                <td className="py-2.5 px-3 font-medium">Half-Moon Semicircle Braided Doormat</td>
                <td className="py-2.5 px-3">Dense Semicircular Braid</td>
                <td className="py-2.5 px-3">Heavy Tosha Jute (2,500 GSM)</td>
                <td className="py-2.5 px-3">50 x 80 cm / 60 x 90 cm</td>
                <td className="py-2.5 px-3">Natural Latex Spray Backing</td>
                <td className="py-2.5 px-3">Flat Packed (12 Pcs / Carton)</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$3.80 – $6.20</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-mono font-bold text-amber-900">BJM-27</td>
                <td className="py-2.5 px-3 font-medium">Concentric Ring Mottled Jute Doormat</td>
                <td className="py-2.5 px-3">Dual-Tone Braided Ring Braid</td>
                <td className="py-2.5 px-3">Tosha + Charcoal Dyed (2,300 GSM)</td>
                <td className="py-2.5 px-3">60 x 90 cm / 70 x 120 cm</td>
                <td className="py-2.5 px-3">Natural Latex Anti-Slip</td>
                <td className="py-2.5 px-3">Flat Packed (10 Pcs / Carton)</td>
                <td className="py-2.5 px-3 text-stone-900 font-medium">US$4.50 – $7.50</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-[11px] text-stone-500 italic">
            * Note: Prices are indicative FOB Chattogram (BDCGP) and may change depending on diameter, GSM density, latex backing, order volume, and raw fiber market fluctuations. Please contact our export desk for formal quotations.
          </p>
        </div>

        {/* Table 2: Customization Matrix */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mb-3">
            Table 2: Customization & OEM / ODM Private Label Matrix
          </h3>
          <table className="min-w-full text-xs text-left border border-stone-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-semibold uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="py-2.5 px-3">Parameter</th>
                <th className="py-2.5 px-3">Standard Factory Baseline</th>
                <th className="py-2.5 px-3">Custom / OEM Capability</th>
                <th className="py-2.5 px-3">Buyer Minimum / Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Minimum Order Quantity (MOQ)</td>
                <td className="py-2.5 px-3">200 Pieces per standard size</td>
                <td className="py-2.5 px-3">100 Pieces for trial boutique orders</td>
                <td className="py-2.5 px-3 text-stone-600">Flexible for multi-SKU consolidated container orders</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Diameter / Dimensions</td>
                <td className="py-2.5 px-3">Dia: 120cm, 150cm; Rect: 120x180cm</td>
                <td className="py-2.5 px-3">Any custom diameter up to 300cm; runners up to 400cm</td>
                <td className="py-2.5 px-3 text-stone-600">CAD pattern sign-off prior to mass braiding</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Fiber Color & Dyeing</td>
                <td className="py-2.5 px-3">100% Unbleached Golden Tosha</td>
                <td className="py-2.5 px-3">Pantone PMS custom reactive dyeing (AZO-free)</td>
                <td className="py-2.5 px-3 text-stone-600">Charcoal, olive, sage, terracotta, indigo, washed black</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Anti-Slip Backing</td>
                <td className="py-2.5 px-3">Unbacked (Double-sided reversible)</td>
                <td className="py-2.5 px-3">Natural vulcanized liquid rubber latex spray</td>
                <td className="py-2.5 px-3 text-stone-600">Compliant with EU REACH, odorless, non-yellowing</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Edge Binding & Borders</td>
                <td className="py-2.5 px-3">Self-stitched jute selvedge</td>
                <td className="py-2.5 px-3">Cotton canvas twill tape (5–8cm), knotted fringe tassels</td>
                <td className="py-2.5 px-3 text-stone-600">Color-matched or contrast framing</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Sampling Lead Time</td>
                <td className="py-2.5 px-3">5 to 7 business days</td>
                <td className="py-2.5 px-3">7 to 10 days for custom Pantone dyeing</td>
                <td className="py-2.5 px-3 text-stone-600">Dispatched via DHL / FedEx Express with tracking</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-medium">Mass Production Lead Time</td>
                <td className="py-2.5 px-3">25 to 30 days for 20ft FCL</td>
                <td className="py-2.5 px-3">35 to 45 days for 40ft HQ FCL</td>
                <td className="py-2.5 px-3 text-stone-600">Begins upon formal counter-sample approval</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 3: Ocean Logistics Matrix */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mb-3">
            Table 3: Ocean Freight Logistics & Container Loading Matrix (Rolled vs. Flat)
          </h3>
          <table className="min-w-full text-xs text-left border border-stone-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-stone-100 text-stone-800 font-semibold uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="py-2.5 px-3">Container Size</th>
                <th className="py-2.5 px-3">Usable Volume</th>
                <th className="py-2.5 px-3">Packing Format</th>
                <th className="py-2.5 px-3">Estimated Total Rugs</th>
                <th className="py-2.5 px-3">Est. Gross Weight</th>
                <th className="py-2.5 px-3">Transit Time to Rotterdam/Hamburg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-semibold">20ft General Purpose (GP)</td>
                <td className="py-2.5 px-3">28.0 CBM</td>
                <td className="py-2.5 px-3">Rolled in Poly & Burlap Outer</td>
                <td className="py-2.5 px-3 font-medium">1,400 – 1,800 Rugs</td>
                <td className="py-2.5 px-3">~7,500 – 9,000 kg</td>
                <td className="py-2.5 px-3">28 – 32 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-semibold">40ft Standard (GP)</td>
                <td className="py-2.5 px-3">58.0 CBM</td>
                <td className="py-2.5 px-3">Rolled in Poly & Burlap Outer</td>
                <td className="py-2.5 px-3 font-medium">2,900 – 3,600 Rugs</td>
                <td className="py-2.5 px-3">~15,500 – 18,000 kg</td>
                <td className="py-2.5 px-3">28 – 35 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-semibold">40ft High Cube (HQ)</td>
                <td className="py-2.5 px-3">68.0 CBM</td>
                <td className="py-2.5 px-3">Rolled on Core / Flatweave Folded</td>
                <td className="py-2.5 px-3 font-medium">3,500 – 4,500 Rugs</td>
                <td className="py-2.5 px-3">~19,000 – 22,000 kg</td>
                <td className="py-2.5 px-3">28 – 35 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="py-2.5 px-3 font-semibold">Less than Container Load (LCL)</td>
                <td className="py-2.5 px-3">2.0 – 15.0 CBM</td>
                <td className="py-2.5 px-3">Palletized Euro-Pallets (ISPM 15)</td>
                <td className="py-2.5 px-3 font-medium">Per Pallet Booking (100–500 Pcs)</td>
                <td className="py-2.5 px-3">Per Booking</td>
                <td className="py-2.5 px-3">32 – 38 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Frequently Asked Questions (FAQ) for European B2B Buyers
        </h2>

        <div className="mt-6 space-y-3">
          {article.faqs.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-stone-900 text-sm sm:text-base hover:bg-stone-50/70 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700/60 text-amber-200 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            European Retail & Private Label Sourcing
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Request Factory-Direct Jute Rug Quotation & Swatch Kit
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-xl">
            Partner with Bangladesh’s premier natural bast fiber manufacturer. Access 0% EU GSP/EBA customs tariff, certified AQL 2.5 quality, and rapid sample prototyping.
          </p>
        </div>

        <button
          onClick={() => onOpenQuoteModal({ productCode: 'JUTE-RUG-OEM-EU' })}
          className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-sm transition shadow-lg shrink-0 flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Request Wholesale RFQ</span>
        </button>
      </div>
    </>
  );
};
