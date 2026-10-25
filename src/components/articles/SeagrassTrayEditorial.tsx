import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, 
  AlertCircle, Utensils, Coffee, Eye, HeartHandshake, Leaf,
  ShoppingBag, ShieldAlert, Sun, Compass
} from 'lucide-react';

interface SeagrassTrayEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const SeagrassTrayEditorial: React.FC<SeagrassTrayEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Coastal Seagrass Fiber Anatomy & Flat-Base Tray Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Coastal Seagrass Fiber Anatomy & Flat-Base Tray Engineering: The Structural Core Advantage
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-emerald-700 bg-emerald-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-emerald-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted seagrass serving tray is an eco-friendly, load-bearing food, vanity, and home decor organizer crafted from sustainably harvested wild coastal and estuarine seagrass fibers (botanically predominantly <em>Zostera marina</em> and brackish sedges native to the Bay of Bengal coastline in Bangladesh). Handwoven or tightly coiled over precision galvanized iron wireframes or thick braided cord bases, seagrass trays deliver superior tensile strength, natural moisture and grease resistance due to their waxy outer cuticle, certified food-contact suitability under European LFGB and EC 1935/2004 frameworks, and 100% biological biodegradability—offering global hospitality venues, department stores, and homeware retailers a premium, plastic-free alternative to synthetic rattan, melamine, and MDF trays.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          For European B2B buyers and product developers, manufacturing a flat serving tray presents fundamentally distinct engineering challenges compared to deep utility baskets. While the cylindrical or oval curved walls of a laundry basket naturally distribute lateral stress, a tabletop serving tray must support downward point loads—such as full ceramic teapots, stoneware dinner plates, and glass carafes weighing up to 10–12 kg—across a completely flat, unsupported horizontal plane without warping, sagging, or wobbling.
        </p>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          At Golden Fiber Crafts Ltd., our artisan engineering pairs indigenous Bangladeshi weaving traditions with precision structural standards to eliminate center deflection and surface distortion:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Hydrophobic Cuticle Layer</span>
            <span>Naturally rich in plant silica and non-polar waxes, raw coastal seagrass exhibits organic water-repellent properties, resisting beverage splashes and food crumb moisture absorption without toxic varnishes.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">High-Tensile Bast Fibers</span>
            <span>Seagrass strands possess exceptional longitudinal tensile rigidity and flexural memory, allowing woven trays to absorb dynamic carrying vibrations without cracking or splitting.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Rust-Proof Internal Skeleton</span>
            <span>For heavy-duty hospitality serving trays, we integrate 2.5mm–3.5mm zinc-electroplated galvanized iron wire skeletons completely encapsulated inside high-density seagrass braids to maintain permanent structural flatness.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Weaving */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-seagrass-tray.jpg"
            alt="Skilled Bangladeshi female artisan weaving a coastal seagrass serving tray with integrated wireframe in a clean rural workshop"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Artisan weaving a round coastal seagrass serving tray over a zinc-coated iron skeleton inside our fair-trade rural workshop in Bangladesh.</span>
            <span className="font-mono text-[11px] text-emerald-700 font-semibold">ARTISAN HAND-COILING</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why European Retailers & Hospitality Chains Are Sourcing Seagrass Trays */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why European Retailers & Hospitality Chains Are Sourcing Seagrass Trays
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-emerald-700 bg-emerald-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-emerald-950 font-semibold block mb-1">European Market Sourcing Summary:</strong>
          European homeware chains, department stores, luxury eco-resorts, and boutique hotel groups across Germany, the Netherlands, the UK, France, Spain, and Scandinavia are accelerating direct manufacturer imports of handwoven seagrass trays. Sourcing demand is driven by three irreversible forces: (1) stringent EU Packaging and Packaging Waste Regulations (PPWR) and Single-Use Plastic directives banning petrochemical polymers; (2) surging consumer desire for warm, organic, tactile coastal living aesthetics (Japandi, Scandinavian minimalism, and Mediterranean coastal dining); and (3) superior commercial retail margins exceeding 68%–75% over direct Bangladesh FOB container pricing.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          From luxury breakfast-in-bed room service in Paris and Munich boutique hotels to decorative coffee table ottoman trays sold in Amsterdam lifestyle boutiques, seagrass trays provide immediate sensory value that synthetic materials cannot duplicate:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2 mt-3 list-disc pl-5">
          <li><strong>100% Food-Safe & Chemical-Free Dining:</strong> European consumers are hypersensitive to synthetic off-gassing and microplastics. Golden Fiber Crafts seagrass trays undergo zero chemical bleaching and zero formaldehyde sealing, ensuring complete food safety when serving crusty sourdough breads, fresh fruit pastries, and beverage glassware.</li>
          <li><strong>Acoustic & Vibration Damping:</strong> In high-paced boutique restaurants, cafes, and hotel buffets, ceramic and glass tableware clatter loudly against metal or melamine trays. The fibrous, air-cushioned cellular structure of seagrass absorbs contact shocks, dramatically lowering dining room noise pollution.</li>
          <li><strong>Thermal Protection for High-End Furniture:</strong> The natural insulating pockets within dried seagrass reeds provide superior heat resistance up to 90°C–95°C, safely shielding polished teak dining tables, marble kitchen islands, and upholstered linen ottomans from scorching coffee mugs or heated fondue dishes.</li>
          <li><strong>Compelling Commercial Retail Economics:</strong> Sourced at direct factory FOB Chattogram rates ranging from US$1.60 to US$3.80 per unit (or $4.20–$8.50 for nested sets of 2 or 3), European homeware retailers comfortably merchandise these products at €18.00 to €45.00, securing lucrative gross profit margins while providing consumers with accessible luxury.</li>
        </ul>
      </section>

      {/* Section 3: Commercial Classifications & Structural Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Structural Styles of Handwoven Seagrass Trays
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Ltd. manufactures an extensive export collection of seagrass trays categorized into six core structural geometries, each calibrated for specific retail, hospitality, and interior styling functions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">1. Rectangular Herringbone Serving & Vanity Tray</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-ST-003</span>
            </div>
            <p>Engineered with perpendicular 6cm raised sidewalls woven in an intricate tight herringbone pattern over an internal 3mm wire skeleton. Features flush cutout handles along both ends. Perfect for cocktail service, desk paperwork organization, and luxury hotel bathroom vanity amenities.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">2. Round Braided Ottoman Tray with Cutout Handles</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-ST-002</span>
            </div>
            <p>A continuous concentric spiral braid measuring 38cm to 45cm diameter with a low-profile 5cm perimeter rim. Specifically proportioned to convert soft upholstered living room ottomans into stable, firm drink and book staging surfaces.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">3. Oval Coastal Breakfast-in-Bed Tray with Upright Handles</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-ST-004</span>
            </div>
            <p>An elongated 48x32cm oval silhouette featuring arched, ergonomic upright wrapped handles designed for comfortable two-handed morning breakfast carrying. Accommodates standard dinner plates, juice tumblers, and cutlery sets.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">4. Heavy-Duty Serving Tray with Integrated Wood Handles</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-STH-008</span>
            </div>
            <p>Combines dense handwoven seagrass body with solid acacia or mango wood handle grips anchored by high-tensile copper-plated rivets. Built for high-frequency commercial catering and restaurant buffet stations.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">5. Two-Tone Seagrass Tray with Cream Cotton Cord Rim</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-ST-005</span>
            </div>
            <p>Features natural greenish-golden coastal seagrass base paired with an unbleached organic cream cotton macrame braided top border, catering directly to Scandinavian and coastal Hampton design sensibilities.</p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-stone-900 text-sm text-emerald-900">6. Square Deep Braided Ottoman Organizer Tray</span>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">SKU: GFC-ST-006</span>
            </div>
            <p>A symmetrical 35x35cm or 40x40cm square format with 7cm extra-deep protective sidewalls. Ideal for holding media remote controls, magazines, candles, and decorative tabletop accents in modern European living rooms.</p>
          </div>
        </div>
      </section>

      {/* Section 4: 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Tidal Estuary Harvest to Master Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Ltd. operates a vertically integrated handicraft production ecosystem that links coastal harvesting communities in southern Bangladesh with our state-of-the-art export finishing and quality control headquarters in Gazipur:
        </p>

        <div className="my-5 space-y-3 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 1: Sustainable Coastal Harvesting & Seasonal Curing</strong>
            <span>Raw seagrass reeds are wild-harvested at seasonal maturity along the tidal marshlands of Noakhali and Barishal. Only mature stalks exceeding 80cm length are gathered, preserving root systems for regenerative growth. Stalks undergo immediate outdoor sun-drying on raised bamboo platforms for 5 to 7 days, curing fibers from fresh green to a rich, resilient olive-amber hue.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 2: Caliper Grading & Fiber Braiding</strong>
            <span>Dry seagrass is sorted by diameter and tensile strength. Damaged or discolored stalks are rejected. Graded fibers are hand-twisted into continuous 2-ply or 3-ply braided cords (4mm to 8mm thickness) with uniform gauge control, producing uniform yarn bundles for the weaving masters.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 3: Galvanized Wireframe Fabrication</strong>
            <span>For structured rectangular and handled trays, our metal shop fabricates 2.5mm–3.5mm low-carbon iron wire skeletons. Every frame is electro-galvanized with a zinc layer exceeding 15 microns, guaranteeing zero oxidation, rust bleed, or discoloration even when shipped across humid tropical seas.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 4: Precision Hand-Weaving & Structural Coiling</strong>
            <span>Master female artisans hand-coil and tightly weave the seagrass cords over the wire skeletons or form flat-bottom spiral braids using high-tensile 3-ply Tosha jute sewing twine. Weaving tension is tightly monitored so tray bases remain flat with less than 1.5mm deviation across a 40cm diagonal.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 5: Singeing, Trimming & Organic Cleaning</strong>
            <span>Finished trays are manually inspected to trim stray fiber ends. Trays pass through a rapid micro-flame singeing tunnel to remove loose surface fuzz, yielding a smooth, snag-free exterior that will not catch on fine linen tablecloths or delicate silk napkins.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 6: Dehumidification & Hot-Air Kiln Baking (Moisture &lt; 10%)</strong>
            <span>Trays enter our computerized hot-air dehumidification kilns set at 55°C–60°C for 8 to 12 hours. This critical thermal baking reduces internal moisture content to strictly 8%–10%—far below the 14% threshold required for fungal spore germination—guaranteeing mold-free ocean transit to Europe.</span>
          </div>

          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
            <strong className="text-stone-900 block mb-1">Stage 7: AQL 2.5 Audit, Nesting & Export Packaging</strong>
            <span>Every batch undergoes 100% digital pin moisture verification and dimension auditing under AQL 2.5 criteria. Trays are nested in sets of 2 or 3, wrapped in breathable tissue paper, sealed inside moisture-barrier polybags with activated silica gel, and packed into heavy-duty 5-ply double-wall export master cartons (250 lbs/sq.in burst test).</span>
          </div>
        </div>

        {/* Embedded Image: QC Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/seagrass-tray-quality-control-moisture-inspection.jpg"
            alt="Quality assurance inspector using digital moisture meter to test seagrass trays before export packing to Europe in Bangladesh factory"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Quality control inspector testing moisture levels (&lt;10%) on seagrass trays destined for European retailers at our Gazipur export factory.</span>
            <span className="font-mono text-[11px] text-emerald-700 font-semibold">DIGITAL MOISTURE QC</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for European Private-Label Retailers
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Ltd. operates as a specialized full-service OEM / ODM contract manufacturer for private-label European brands, mail-order lifestyle catalogs, and hospitality groups. We offer extensive custom tailoring across every structural parameter:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Custom Dimensions & Form Factors</span>
            <p>From mini 20x15cm bedside trinket trays to grand 60x45cm breakfast-in-bed platters and 50cm oversized coffee table ottoman rounds. Full custom molds and wireframes fabricated within 5 to 7 days.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Handle Ergonomics & Materials</span>
            <p>Integrated woven cutout handles, arched seagrass loops, vegetable-tanned genuine leather straps with brass rivets, natural split rattan cane handles, or solid turned mango wood grips.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">AZO-Free & Food-Contact Finishes</span>
            <p>Natural unbleached sun-cured olive-amber baseline, two-tone dip-dyed borders using certified non-toxic AZO-free reactive dyes matched to Pantone FHI color standards, or wipe-clean organic beeswax food-grade sealing.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Retail Branding & Packaging Integration</span>
            <p>Debossed genuine or faux leather brand patches, FSC-certified recycled kraft swing tags with GS1 EAN-13 barcodes, custom single-item retail gift boxes, and European supermarket shelf-ready master cartons.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Assurance, Moisture Control & Anti-Mold Safeguards */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Assurance, Moisture Control (&lt;12%) & Anti-Mold Safeguards (AQL 2.5 Standard)
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">The Critical Ocean Transit Challenge:</strong>
          Natural plant fibers like seagrass and jute naturally absorb atmospheric humidity. Ocean freight from Chattogram Port to major European container hubs (Rotterdam, Hamburg, Antwerp, Felixstowe) takes 28 to 35 days across fluctuating equatorial climates. If trays are packed with moisture above 13%–14%, condensation cycles inside sealed shipping containers ("container rain") cause catastrophic mold and mildew outbreaks. Golden Fiber Crafts eliminates this risk through rigorous multi-barrier engineering.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Our factory enforces strict Quality Assurance protocols aligned with international ISO 2859-1 (AQL 2.5 General Inspection Level II) inspection standards:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Dual-Pin Digital Resistance Probing</span>
            <p>Every single tray batch is probed across four quadrants (rim, base center, and handle junctions) using calibrated pin moisture meters. Any unit registering above 11.0% is automatically routed back to secondary hot-air kiln drying.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Triple-Barrier Master Carton Packaging</span>
            <p>Trays are sealed inside an inner 0.05mm heavy-gauge virgin LDPE barrier liner bag containing 50g–100g non-toxic calcium chloride and activated clay desiccants capable of absorbing up to 250% of their weight in moisture.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">Container Desiccant Pole Arrays</span>
            <p>Prior to container stuffing in Chittagong, full container loads (FCL) are outfitted with 8 to 12 industrial hanging moisture poles (1 kg active absorption capacity each) suspended in container wall corrugations to neutralize ambient container moisture.</p>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
            <span className="font-bold text-stone-900 text-sm text-emerald-900 block">European Regulatory Compliance Testing</span>
            <p>We provide full laboratory test documentation through independent verification partners (SGS, TÜV Rheinland, Bureau Veritas) certifying zero heavy metals (Lead, Cadmium), zero banned AZO aromatic amines, zero pesticide residue, and compliance with EU REACH and German LFGB food contact standards.</p>
          </div>
        </div>
      </section>

      {/* Section 7: Ocean Freight Logistics & Nesting Optimization */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Ocean Freight Logistics, Master Carton Nesting & Container Optimization Matrix
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          International freight costs represent a significant percentage of landed retail cost. Shipping un-nested, hollow handicraft trays wastes costly container volume. Golden Fiber Crafts designs all flagship seagrass tray collections in precisely graduated dimensional ratios that allow complete, seamless nesting (Set of 2 or Set of 3):
        </p>

        <div className="my-5 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-stone-800 text-xs sm:text-sm leading-relaxed">
          <strong className="text-emerald-950 font-bold block mb-1">Nesting Efficiency Gains:</strong>
          A standard 40ft High Cube container accommodates approximately 3,600 non-nested single trays. By engineering a calibrated 3-piece nesting set (Small inside Medium inside Large), the exact same 40ft HQ container accommodates over 3,200 <em>Sets</em> (totalling 9,600 individual trays)—slashing per-unit ocean freight charges by an astonishing 62% for European importers!
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          We maintain dedicated shipping partnerships with major container ocean carriers (Maersk, MSC, Hapag-Lloyd, CMA CGM) operating direct feeder services from Chattogram Seaport (BDCGP) connecting to primary European hubs:
        </p>

        <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1.5 my-3">
          <li><strong>Rotterdam, Netherlands:</strong> 28–32 days transit (Direct distribution hub for Germany, Benelux, and Central Europe).</li>
          <li><strong>Hamburg / Bremerhaven, Germany:</strong> 30–34 days transit (Direct rail connectivity to Austrian and Swiss retail centers).</li>
          <li><strong>Felixstowe / Southampton, UK:</strong> 29–33 days transit (Serving British department stores and high-street homeware retailers).</li>
          <li><strong>Le Havre / Marseille, France:</strong> 31–35 days transit (Serving French and Southern European distribution chains).</li>
        </ul>
      </section>

      {/* Section 8: Sourcing from Bangladesh vs Vietnam & China */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Sourcing Seagrass Trays From Bangladesh vs. Vietnam & China: The Strategic Sourcing Advantage
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          For decades, Vietnam and Southern China dominated natural fiber tray production. However, sharp wage increases, rising land costs, export duties, and factory automation have eroded their competitive advantage for labor-intensive handcrafts. Savvy European procurement directors are actively diversifying their supply chains to Bangladesh:
        </p>

        <div className="overflow-x-auto my-5">
          <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden shadow-2xs">
            <thead className="bg-stone-100 text-stone-900 font-serif uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="p-3">Sourcing Parameter</th>
                <th className="p-3 bg-emerald-50/80 text-emerald-950 font-bold">Bangladesh (Golden Fiber Crafts)</th>
                <th className="p-3">Vietnam</th>
                <th className="p-3">China</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Direct Labor & FOB Pricing</td>
                <td className="p-3 bg-emerald-50/40 font-bold text-emerald-900">20%–35% more cost-effective due to abundant generational artisan clusters</td>
                <td className="p-3">Rising minimum wage pressures; increasing export prices</td>
                <td className="p-3">High manufacturing costs; heavy reliance on synthetic materials</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Raw Fiber Proximity</td>
                <td className="p-3 bg-emerald-50/40 font-bold text-emerald-900">Native coastal saltmarsh seagrass & indigenous Tosha jute in immediate vicinity</td>
                <td className="p-3">Strong local sedge grass; seasonal weather disruptions</td>
                <td className="p-3">Diminishing natural wetland harvest; high domestic transport</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">EU Tariff & Duty Status</td>
                <td className="p-3 bg-emerald-50/40 font-bold text-emerald-900">Duty-free access to European Union under EBA / GSP trade agreements</td>
                <td className="p-3">EVFTA duty reductions; complex rules of origin documentation</td>
                <td className="p-3">Subject to standard MFN tariffs and trade defense duties</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-3 font-semibold text-stone-900">Ethical Audit Transparency</td>
                <td className="p-3 bg-emerald-50/40 font-bold text-emerald-900">BSCI & Sedex audited cooperative networks; strong women empowerment focus</td>
                <td className="p-3">Varying compliance transparency in sub-contractor clusters</td>
                <td className="p-3">Rigid commercial factory settings; high environmental scrutiny</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Sustainable Manufacturing, Social Ethics & Fair Trade */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Sustainable Manufacturing, Social Ethics, Fair Trade & Artisan Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          In European retail markets, sustainability is no longer a marketing buzzword—it is an enforceable regulatory compliance requirement under the EU Corporate Sustainability Due Diligence Directive (CSDDD). At Golden Fiber Crafts Ltd., social and environmental responsibility is woven into the very fabric of our business model:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">85%+ Female Artisan Base</span>
            <span>We employ and partner with over 10,000 rural artisans, the vast majority being village women. Our decentralized weaving centers allow mothers to generate vital, independent income while working in dignified local village cooperatives.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Fair Living Wages & Healthcare</span>
            <span>We strictly enforce compensation rates 30%–45% above regional minimum wage standards, providing artisan families with clean drinking water filtration systems, health checkups, and educational stipends for children.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Zero-Waste & Circularity</span>
            <span>All post-weaving seagrass clippings and jute offcuts are composted or repurposed into organic packaging shreds, achieving a 99.4% circular material recovery rate in our central production facilities.</span>
          </div>
        </div>
      </section>

      {/* Section 10: European Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. European Buyer Due Diligence Audit Checklist for Seagrass Tray Procurement
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Before finalizing purchase orders with any natural fiber tray supplier in South Asia, procurement managers should verify the following five critical due-diligence benchmarks:
        </p>

        <div className="my-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">1. Structural Frame Flatness & Weight Bearing Verification</strong>
              <span>Ensure the factory guarantees maximum center deflection under 2.0mm when loaded with a 10 kg distributed weight. Reject suppliers using un-galvanized mild steel wire that rusts upon ocean moisture contact.</span>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">2. Calibrated Moisture Meter Certification Under 12%</strong>
              <span>Demand written moisture inspection certificates with individual readings documented prior to container sealing. Never accept air-dried items shipped directly during Bangladesh monsoon months (June–September) without hot-air kiln treatment.</span>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">3. Food Contact Safety & Heavy Metal Documentation</strong>
              <span>Verify that all raw grasses and bindings comply with German LFGB Section 30 & 31 or EU Framework Regulation EC 1935/2004 for non-fatty dry food contact.</span>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">4. Exact Nesting Clearance Tolerances</strong>
              <span>Verify that nesting sets possess a minimum of 2.0cm to 3.0cm perimeter clearance between sizes so store staff and end-consumers can separate nested trays effortlessly without binding.</span>
            </div>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block font-semibold">5. Social Compliance Audit Validity (BSCI / Sedex)</strong>
              <span>Confirm active SMETA or amfori BSCI audit certificates proving ethical workplace standards, zero child labor, and fair worker remuneration.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Step-by-Step International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Step-by-Step International Procurement Guide (Inquiry to FOB Chittagong)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          We streamline the B2B direct import journey for international retail buyers into a transparent, dependable 5-step pathway:
        </p>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs text-stone-700">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="font-mono text-[10px] text-emerald-800 font-bold block mb-1">STEP 01</span>
            <strong className="text-stone-900 block mb-1 text-xs">RFQ & Specification Review</strong>
            <span>Submit target dimensions, handle styling, branding specs, and estimated annual container volume to our export desk.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="font-mono text-[10px] text-emerald-800 font-bold block mb-1">STEP 02</span>
            <strong className="text-stone-900 block mb-1 text-xs">Prototype Sampling</strong>
            <span>Pre-production prototypes are handwoven, moisture-calibrated, and dispatched via DHL/FedEx Express in 5 to 7 business days.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="font-mono text-[10px] text-emerald-800 font-bold block mb-1">STEP 03</span>
            <strong className="text-stone-900 block mb-1 text-xs">Commercial Sign-Off</strong>
            <span>Proforma Invoice (PI) issued under FOB Chittagong or CIF European port terms. Payment confirmed via 30% T/T deposit or Irrevocable L/C at Sight.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="font-mono text-[10px] text-emerald-800 font-bold block mb-1">STEP 04</span>
            <strong className="text-stone-900 block mb-1 text-xs">Mass Manufacturing</strong>
            <span>Production completed within 35 to 50 days. In-line and final AQL 2.5 random quality audits conducted with high-res photo reports sent to the client.</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <span className="font-mono text-[10px] text-emerald-800 font-bold block mb-1">STEP 05</span>
            <strong className="text-stone-900 block mb-1 text-xs">Ocean Stuffing & Clearance</strong>
            <span>Desiccant-equipped container stuffing in Gazipur, direct bonded transit to Chittagong Port, and complete export document pack (Bill of Lading, COO, Fumigation Cert, Commercial Invoice) dispatched.</span>
          </div>
        </div>
      </section>

      {/* Section 12: Export Specifications, Product Showcase & Technical Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Export Specifications, Product Showcase & Technical Logistics Tables
        </h2>

        {/* Pricing Disclaimer */}
        <div className="my-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs leading-relaxed italic">
          <strong>Note:</strong> Prices are indicative and may change depending on specifications, quantity, supplier, market conditions, and availability. Please contact us for the latest official commercial quotation.
        </div>

        {/* Table 1: Standard Flagship Models */}
        <h3 className="text-lg font-serif font-bold text-stone-900 mt-6 mb-2">
          Table 1: Standard Export Seagrass Tray Specifications (Flagship Models)
        </h3>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden shadow-2xs">
            <thead className="bg-stone-100 text-stone-900 font-serif uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="p-2.5">Model Code</th>
                <th className="p-2.5">Model Name</th>
                <th className="p-2.5">Construction Style</th>
                <th className="p-2.5">Set Config</th>
                <th className="p-2.5">Dimensions (cm)</th>
                <th className="p-2.5">Primary Materials</th>
                <th className="p-2.5">Master Carton Packing</th>
                <th className="p-2.5">Indicative FOB Chittagong</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-STH-008</td>
                <td className="p-2.5 font-medium text-stone-900">Seagrass Serving Tray with Handles</td>
                <td className="p-2.5">Heavy-Duty Wireframe Weave</td>
                <td className="p-2.5">Set of 2 (S/2)</td>
                <td className="p-2.5">M: 38x26x6, L: 44x32x7</td>
                <td className="p-2.5">Natural Seagrass, Wood Handles</td>
                <td className="p-2.5">12 Sets / 0.068 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$4.50 – $6.20 / Set</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-ST-002</td>
                <td className="p-2.5 font-medium text-stone-900">Round Braided Ottoman Tray</td>
                <td className="p-2.5">Concentric Coiled Braid</td>
                <td className="p-2.5">Set of 2 (S/2)</td>
                <td className="p-2.5">M: Dia 35x5, L: Dia 42x6</td>
                <td className="p-2.5">100% Coastal Seagrass, Jute Core</td>
                <td className="p-2.5">10 Sets / 0.072 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$3.80 – $5.40 / Set</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-ST-003</td>
                <td className="p-2.5 font-medium text-stone-900">Rectangular Herringbone Vanity Tray</td>
                <td className="p-2.5">Perpendicular Wire Skeleton</td>
                <td className="p-2.5">Set of 3 (S/3)</td>
                <td className="p-2.5">S: 30x20x5, M: 36x25x6, L: 42x30x7</td>
                <td className="p-2.5">Coastal Seagrass, Galvanized Iron</td>
                <td className="p-2.5">8 Sets / 0.065 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$5.80 – $7.90 / Set</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-ST-004</td>
                <td className="p-2.5 font-medium text-stone-900">Oval Coastal Breakfast Tray</td>
                <td className="p-2.5">Upright Handled Silhouette</td>
                <td className="p-2.5">Single (S/1)</td>
                <td className="p-2.5">48 x 32 x 8 (Rim)</td>
                <td className="p-2.5">Braided Seagrass, Iron Skeleton</td>
                <td className="p-2.5">16 Pcs / 0.082 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$3.20 – $4.60 / Pc</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-ST-005</td>
                <td className="p-2.5 font-medium text-stone-900">Two-Tone Seagrass Tray w/ Cotton Rim</td>
                <td className="p-2.5">Mixed Fiber Coiling</td>
                <td className="p-2.5">Set of 2 (S/2)</td>
                <td className="p-2.5">M: Dia 34x5, L: Dia 40x6</td>
                <td className="p-2.5">Seagrass & Organic Cotton Rope</td>
                <td className="p-2.5">12 Sets / 0.070 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$4.10 – $5.70 / Set</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-mono font-semibold text-emerald-900">GFC-ST-006</td>
                <td className="p-2.5 font-medium text-stone-900">Square Deep Ottoman Organizer Tray</td>
                <td className="p-2.5">High-Walled Box Weave</td>
                <td className="p-2.5">Single (S/1)</td>
                <td className="p-2.5">38 x 38 x 8 (Depth)</td>
                <td className="p-2.5">Reinforced Seagrass & Jute Cord</td>
                <td className="p-2.5">14 Pcs / 0.075 CBM</td>
                <td className="p-2.5 font-semibold text-stone-900">US$2.90 – $4.20 / Pc</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Product Showcase Gallery */}
        <div className="my-8 bg-stone-50 p-5 rounded-2xl border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-base font-serif font-bold text-stone-900">Featured Seagrass Tray Product Collection</h4>
              <p className="text-xs text-stone-600">Factory-direct SKUs ready for immediate wholesale production and private labeling</p>
            </div>
            <button
              onClick={() => onOpenQuoteModal({ productCode: 'SEAGRASS-TRAYS-WHOLESALE' })}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              Request S/P Catalog
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_001.jpg"
                  alt="Seagrass Serving Tray with Handles GFC-STH-008"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-STH-008</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Seagrass Serving Tray with Handles</h5>
                <p className="text-[11px] text-stone-500 mb-2">Set of 2 • Solid wood handle accents</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-STH-008', productName: 'Seagrass Serving Tray with Handles' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_002.jpg"
                  alt="Round Braided Seagrass Serving Tray GFC-ST-002"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-ST-002</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Round Braided Ottoman Tray</h5>
                <p className="text-[11px] text-stone-500 mb-2">Set of 2 • Cutout handles • Spiral weave</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-ST-002', productName: 'Round Braided Seagrass Serving Tray' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_003.jpg"
                  alt="Rectangular Herringbone Seagrass Serving & Vanity Tray GFC-ST-003"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-ST-003</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Rectangular Herringbone Tray</h5>
                <p className="text-[11px] text-stone-500 mb-2">Set of 3 • Galvanized wire skeleton</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-ST-003', productName: 'Rectangular Herringbone Seagrass Tray' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_004.jpg"
                  alt="Oval Coastal Seagrass Breakfast Tray GFC-ST-004"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-ST-004</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Oval Coastal Breakfast Tray</h5>
                <p className="text-[11px] text-stone-500 mb-2">48x32cm • Upright wrapped handles</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-ST-004', productName: 'Oval Coastal Seagrass Breakfast Tray' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_005.jpg"
                  alt="Two-Tone Seagrass Tray with Cream Cotton Rim GFC-ST-005"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-ST-005</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Two-Tone Cotton Rim Tray</h5>
                <p className="text-[11px] text-stone-500 mb-2">Set of 2 • Organic cream macrame border</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-ST-005', productName: 'Two-Tone Seagrass Tray with Cream Cotton Rim' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-stone-200 shadow-2xs group flex flex-col justify-between">
              <div className="aspect-4/3 overflow-hidden rounded-lg bg-stone-100 mb-2">
                <img
                  src="/products/gfc_st_006.jpg"
                  alt="Square Braided Seagrass Ottoman Organizer Tray GFC-ST-006"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="font-mono text-[10px] text-emerald-800 font-bold block">GFC-ST-006</span>
                <h5 className="font-semibold text-stone-900 text-xs line-clamp-1">Square Ottoman Organizer Tray</h5>
                <p className="text-[11px] text-stone-500 mb-2">38x38cm • Deep 8cm protective walls</p>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'GFC-ST-006', productName: 'Square Braided Seagrass Ottoman Organizer Tray' })}
                className="w-full py-1 text-[11px] bg-stone-100 hover:bg-emerald-800 hover:text-white rounded text-stone-800 font-medium transition-colors"
              >
                Inquire SKU
              </button>
            </div>
          </div>
        </div>

        {/* Table 2: Customization & OEM Matrix */}
        <h3 className="text-lg font-serif font-bold text-stone-900 mt-6 mb-2">
          Table 2: Customization & OEM / ODM Capability Matrix
        </h3>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden shadow-2xs">
            <thead className="bg-stone-100 text-stone-900 font-serif uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="p-2.5">Parameter</th>
                <th className="p-2.5">Standard Factory Baseline</th>
                <th className="p-2.5">Custom OEM / ODM Capability</th>
                <th className="p-2.5">Buyer Minimums / Technical Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Minimum Order Quantity (MOQ)</td>
                <td className="p-2.5">200 Sets or 500 Pcs per design</td>
                <td className="p-2.5">100 Sets for pilot boutique orders</td>
                <td className="p-2.5">Flexible consolidation across multiple multi-SKU container orders</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Internal Wireframe Material</td>
                <td className="p-2.5">2.5mm galvanized iron wire</td>
                <td className="p-2.5">2.0mm to 4.0mm heavy-gauge wire; stainless steel optional</td>
                <td className="p-2.5">Electro-galvanized with &gt;15µm zinc coating to prevent rust</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Handle Variations</td>
                <td className="p-2.5">Integrated cutout oval openings</td>
                <td className="p-2.5">Genuine leather, split rattan, turned mango wood, rope</td>
                <td className="p-2.5">Load tested to 15 kg dynamic vertical lift capacity</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Color Dyeing & Finishes</td>
                <td className="p-2.5">Natural unbleached sun-cured olive-amber</td>
                <td className="p-2.5">Pantone FHI dyed bands, white wash, dark walnut, beeswax</td>
                <td className="p-2.5">100% AZO-free reactive dyes compliant with EU REACH</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Sampling Lead Time</td>
                <td className="p-2.5">5 to 7 business days</td>
                <td className="p-2.5">7 to 10 days for custom tooling & wire bending</td>
                <td className="p-2.5">Air courier dispatch via DHL / FedEx with live tracking</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">Bulk Production Lead Time</td>
                <td className="p-2.5">30 to 40 days for 1x20ft FCL</td>
                <td className="p-2.5">45 to 60 days for 1x40ft HQ FCL</td>
                <td className="p-2.5">Production clock begins upon pre-production sample sign-off</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 3: Ocean Logistics Matrix */}
        <h3 className="text-lg font-serif font-bold text-stone-900 mt-6 mb-2">
          Table 3: Ocean Freight Logistics & Container Packing Optimization Matrix
        </h3>
        <div className="overflow-x-auto my-3">
          <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden shadow-2xs">
            <thead className="bg-stone-100 text-stone-900 font-serif uppercase tracking-wider text-[11px] border-b border-stone-200">
              <tr>
                <th className="p-2.5">Container Type</th>
                <th className="p-2.5">Usable Volume (CBM)</th>
                <th className="p-2.5">Est. Master Cartons</th>
                <th className="p-2.5">Est. Nested Sets (S/3)</th>
                <th className="p-2.5">Total Tray Units</th>
                <th className="p-2.5">Est. Gross Weight (kg)</th>
                <th className="p-2.5">Average Transit to Rotterdam/Hamburg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">20ft General Purpose (GP)</td>
                <td className="p-2.5">28.0 CBM</td>
                <td className="p-2.5">380 – 420 Cartons</td>
                <td className="p-2.5">1,140 – 1,260 Sets</td>
                <td className="p-2.5">3,420 – 3,780 Pcs</td>
                <td className="p-2.5">~6,500 kg</td>
                <td className="p-2.5 font-medium text-emerald-900">28 – 32 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">40ft Standard (GP)</td>
                <td className="p-2.5">58.0 CBM</td>
                <td className="p-2.5">800 – 850 Cartons</td>
                <td className="p-2.5">2,400 – 2,550 Sets</td>
                <td className="p-2.5">7,200 – 7,650 Pcs</td>
                <td className="p-2.5">~13,800 kg</td>
                <td className="p-2.5 font-medium text-emerald-900">30 – 34 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">40ft High Cube (HQ)</td>
                <td className="p-2.5">68.0 CBM</td>
                <td className="p-2.5">960 – 1,040 Cartons</td>
                <td className="p-2.5">2,880 – 3,120 Sets</td>
                <td className="p-2.5">8,640 – 9,360 Pcs</td>
                <td className="p-2.5">~16,900 kg</td>
                <td className="p-2.5 font-medium text-emerald-900">30 – 34 Days</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="p-2.5 font-semibold text-stone-900">LCL Consolidated Pallet</td>
                <td className="p-2.5">2.0 to 12.0 CBM</td>
                <td className="p-2.5">Per pallet booking</td>
                <td className="p-2.5">Per pallet booking</td>
                <td className="p-2.5">Shrink-wrapped standard</td>
                <td className="p-2.5">Standard Euro Pallet (120x80cm)</td>
                <td className="p-2.5 font-medium text-emerald-900">34 – 38 Days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Frequently Asked Questions (FAQ) with Technical Answers
        </h2>

        <div className="my-5 space-y-3">
          {article.faqs?.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                >
                  <span className="font-serif font-semibold text-stone-900 text-sm sm:text-base flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing B2B Sourcing Call To Action Box */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-stone-900 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold block">
                Direct Bangladesh Factory Export Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold">
                Partner with Golden Fiber Crafts for Handwoven Seagrass Trays
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                Request physical samples, review complete technical specification sheets, or receive a formal FOB Chattogram commercial quote tailored to your European retail distribution requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenQuoteModal({ productCode: 'SEAGRASS-TRAYS-B2B-INQUIRY' })}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all text-center"
              >
                Request Commercial Quotation
              </button>
              <a
                href="mailto:shafiq@goldenfibercraftsltd.com"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Export Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
