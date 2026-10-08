import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Armchair, RefreshCw, Box
} from 'lucide-react';

interface JutePoufEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const JutePoufEditorial: React.FC<JutePoufEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Jute Pouf Anatomy & Structural Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Jute Pouf Anatomy & Structural Engineering: The Bast Fiber Seating Advantage
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted jute pouf (or braided jute ottoman) is an artisanal, heavy-duty floor seating and footrest furniture piece constructed from spiral-coiled or interlocked high-tensile Bangladeshi golden Tosha jute braided cords (10mm to 14mm caliper) enclosing a reinforced core structure. Offering 130–150 kg static load capacity, natural thermal insulation, zero static electricity, and 100% biodegradable circularity, genuine jute poufs provide global homeware and furniture retailers an eco-luxe alternative to petroleum-based polyurethane and synthetic leather seating.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In contemporary sustainable interior architecture, floor poufs and ottomans occupy a distinct intersection between textile craft and structural furniture engineering. Unlike lightweight throw pillows or basic woven baskets, an upholstered floor pouf must endure multi-directional torsional stresses, continuous localized compression from adult human bodyweight, and abrasive friction against hardwood and tile flooring. Bangladeshi Tosha jute (<em>Corchorus olitorius</em>) stands as the premier botanical bast fiber for this demanding application due to its cellular composition: 60%–65% crystalline cellulose bound by 12%–14% lignin, yielding tensile single-fiber strengths exceeding 450–600 MPa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">130–150 kg Weight Bearing</span>
            <span>Reinforced multi-ply braided cords interlocked with double-lock nylon threads prevent structural blowout or seam slippage under adult seating.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">High-Friction Abrasion Defense</span>
            <span>Thick 12mm coiled cord exterior withstands over 25,000 Martindale rub cycles without fiber fraying or surface pilling.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Breathable Micro-Climate</span>
            <span>Natural hygroscopic bast fibers absorb ambient humidity without becoming clammy, offering comfortable year-round tactile seating.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Stitching Jute Pouf */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-jute-pouf.jpg"
            alt="Bangladeshi woman artisan hand-stitching a cylindrical braided golden jute floor pouf ottoman in rural cottage workshop"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Artisan hand-stitching continuous 12mm helical braided golden jute cords to build a high-resilience cylindrical pouf shell at Golden Fiber Crafts.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">ARTISAN HAND-COILING</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Retailers Are Switching */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Furniture & Decor Brands Are Transitioning to Natural Jute Poufs
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
          Major international lifestyle retailers across North America and Europe (including West Elm, Crate & Barrel, Zara Home, Target, and Maisons du Monde) are rapidly expanding natural jute pouf assortments due to three market drivers: (1) stringent consumer pushback against toxic VOC-offgassing bonded leather and vinyl; (2) booming consumer adoption of organic Japandi, Coastal Living, and Bohemian interior aesthetics; and (3) exceptional retail markup margins of 60%–75% when sourcing factory-direct from Bangladesh.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          The global indoor casual furniture market has experienced a decisive structural shift away from rigid wooden chairs and petroleum-based faux-leather ottomans. Today’s residential and hospitality spaces prioritize modularity, informal gathering zones, and earthy biophilic textures. Handcrafted jute poufs serve multi-functional purposes: as auxiliary footrests, accent coffee tables when paired with wooden trays, meditation perches, and nursery room floor seating.
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2.5 mt-3 list-disc pl-5">
          <li><strong>Zero Toxic Chemical Off-Gassing:</strong> Unlike synthetic foam furniture treated with chlorinated flame retardants (Tris) and PVC upholstery that emits volatile organic compounds (VOCs), natural unbleached jute poufs are processed with AZO-free botanical treatments, ensuring hypoallergenic safety in family spaces.</li>
          <li><strong>Exceptional Retail Margin Density:</strong> At factory FOB Chattogram rates of US$9.50 to $18.50 for filled poufs (or US$3.80 to $7.20 for flat-packed unfilled covers), Western home decor retailers routinely price these pieces between $79.00 and $189.00 MSRP, capturing substantial gross margins.</li>
          <li><strong>Durability and Pet-Resistant Texture:</strong> The dense, firm braid profile of golden jute resists cat scratching and dog paw friction far better than delicate woven linen or velvet, making jute poufs a top-selling category in pet-friendly household marketing.</li>
          <li><strong>EU PPWR & Anti-Plastic Compliance:</strong> For European retailers facing escalating carbon border tariffs and strict packaging waste regulations, plant-based jute furniture provides certified sustainable credentials with zero synthetic polymer exposure.</li>
        </ul>
      </section>

      {/* Section 3: Commercial Classifications & Geometric Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Geometric Styles of Jute Poufs
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited manufactures six primary commercial silhouettes of jute poufs, engineered to meet specific retail merchandising briefs and spatial requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Armchair className="w-4 h-4 text-amber-700" />
              1. Cylindrical Drum Poufs (BJP-01, BJP-02)
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Continuous spiral-coiled cylinders measuring 45cm to 50cm in diameter and 35cm to 40cm in height. The top surface features concentric target rings, while sidewalls exhibit vertical or horizontal dyed accent stripes (black, charcoal, indigo). The industry benchmark for classic boho living rooms.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-700" />
              2. Architectural Square Cubes (BJP-05, BJP-07)
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Structured 40cm or 45cm cubes crafted with flat-woven or ribbed braided panel sections joined with reinforced French welt seams. Retains clean 90-degree orthogonal edges over years of use, ideal for minimalist Scandinavian and modern Japandi layouts.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              3. Pyramidal Capsule Poufs (BJP-06)
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Tapered geometric poufs featuring a wide 50x50cm base ascending to a contoured 40x40cm seating pad. This trapezoidal contour provides an ultra-stable foundation that prevents tipping during enthusiastic family use or child play.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-700" />
              4. Low-Profile Floor Discs & Meditation Cushions (BJP-08)
            </h4>
            <p className="text-stone-600 leading-relaxed">
              Extra-wide (60cm to 80cm diameter) low-profile cushions with 18cm to 25cm height. Filled with high-density natural coconut coir pads, these units deliver firm, grounded ergonomics for yoga studios, tea ceremonies, and relaxed patio floor lounges.
            </p>
          </div>
        </div>

        {/* Embedded Image: Wholesale Catalog Showroom Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-jute-poufs-wholesale-display.jpg"
            alt="Export showroom display in Bangladesh showing assortment of finished handcrafted jute poufs, striped ottomans, and floor cushions"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Wholesale display of cylindrical, cube, and low-drum braided jute poufs and floor cushions at Golden Fiber Crafts export facility.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">WHOLESALE CATALOG ASSORTMENT</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 4: The 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Raw Fiber to Master Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited executes a rigorous 7-stage quality-controlled manufacturing cycle designed specifically for heavy-duty furniture upholstery:
        </p>

        <div className="my-6 space-y-3 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">1</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Raw Tosha Jute Grading & Hackling:</strong>
              Grade A and B long-staple Tosha jute fibers are mechanically hackled and carded to eliminate root stalks, impurities, and weak splinters, ensuring uniform tensile strength across every spun yarn.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">2</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Heavy Rope Braiding & AZO-Free Dyeing:</strong>
              Fibers are spun into 3-ply and 4-ply braided cords (calipers from 10mm to 16mm). Contrast threads and accent bands undergo certified AZO-free reactive vat dyeing matched to buyer Pantone FHI specifications.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">3</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Artisanal Spiral Coiling & Lock-Stitching:</strong>
              Master craftswomen coil braided cords on precision circular and square wooden form jigs. Heavy industrial curved-needle sewing machines interlock neighboring braid ribs with high-tenacity nylon thread at 8 stitches per inch.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">4</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Lining Integration & Zipper Enclosure Engineering:</strong>
              A dense 100% natural cotton canvas inner lining is tailored to match the exact shell geometry. A heavy-duty bottom nylon zipper with an overlapping protective textile lip and child-safe zipper pull is installed for safety.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">5</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Core Insertion (For Filled Orders):</strong>
              Virgin high-density EPS micro-beads, recycled coir cores, or bonded polyurethane foam blocks are encased in an inner cotton bladder and sealed inside the shell under calibrated pneumatic tampers.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">6</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">Hot-Air Dehumidification Chamber:</strong>
              Every finished pouf or flat cover undergoes 12–16 hours of continuous hot-air dehumidification at 45°C–50°C, stabilizing moisture content strictly below 10%–12%.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center text-xs">7</span>
            <div>
              <strong className="text-stone-900 block mb-0.5">5-Ply Master Carton Packaging & Desiccant Sealing:</strong>
              Units are placed inside virgin polyethylene moisture-barrier liners containing 50g–100g industrial silica desiccants, packed into 275 lb/in² burst-test 5-ply cartons.
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: OEM Customization */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Furniture Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          As a full OEM/ODM manufacturing facility, Golden Fiber Crafts Limited translates proprietary retailer CAD drawings and technical sketch sheets into production-grade physical prototypes. Our customization matrix encompasses:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2 mt-3 list-disc pl-5">
          <li><strong>Braid Profiles & Textures:</strong> Select from 3-strand standard round braids, 4-strand chunky flat plaiting, diamond herringbone weaves, or union blends intertwining golden jute with bleached white recycled cotton.</li>
          <li><strong>Integrated Handles & Hardware:</strong> Equip poufs with genuine full-grain vegetable-tanned leather carry straps, riveted vegan cork loops, thick marine cotton cords, or reinforced jute ears for effortless room repositioning.</li>
          <li><strong>Custom Pantone Dye Formulations:</strong> We match buyer color swatches to Pantone FHI textile standards using non-toxic reactive dyes that resist light oxidation and crocking rub-off.</li>
          <li><strong>Private Branding & Labeling:</strong> Blind-debossed leather corner labels, brass logo tags, woven satin seam tags, FSC-certified recycled kraft belly wraps, and pre-applied GS1 UPC/EAN barcodes.</li>
        </ul>
      </section>

      {/* Section 6: Filled vs Unfilled Economics */}
      <section id="filled-vs-unfilled" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Filled vs. Unfilled (Cover-Only) Export Economics: The Freight Saving Matrix
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Strategic Procurement Insight:</strong>
          The single most critical commercial decision in international pouf procurement is deciding between shipping <strong>Turnkey Filled Poufs</strong> versus <strong>Flat-Packed Unfilled Covers</strong>. Because ocean container freight is billed on volumetric displacement (CBM) rather than gross cargo weight, shipping hollow filled poufs effectively pays ocean carriers to transport compressed air. Importing flat-packed unfilled covers cuts cubic shipping volume by up to <strong>75%</strong>, allowing a single 40ft High Cube container to carry over <strong>10,500 pouf covers</strong> instead of 1,400 filled units.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          To help B2B buyers evaluate their supply chain strategy, our factory supports both production formats:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-stone-900 mb-2">
              <Package className="w-4 h-4 text-emerald-700" />
              <span>Option A: Turnkey Filled Poufs (Direct Retail Ready)</span>
            </div>
            <ul className="space-y-1.5 text-stone-600 list-disc pl-4 text-xs">
              <li><strong>Container Capacity:</strong> Approx. 560–600 units in 20ft GP; 1,360–1,440 units in 40ft HQ.</li>
              <li><strong>Best Suited For:</strong> Boutique retailers, luxury resort fit-outs, and brands lacking domestic warehouse stuffing infrastructure.</li>
              <li><strong>Advantages:</strong> Arrives 100% floor-ready. Zero labor required in destination country. Instant retail display.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-stone-900 mb-2">
              <RefreshCw className="w-4 h-4 text-amber-700" />
              <span>Option B: Flat-Packed Unfilled Covers (Max Freight ROI)</span>
            </div>
            <ul className="space-y-1.5 text-stone-600 list-disc pl-4 text-xs">
              <li><strong>Container Capacity:</strong> Approx. 4,200–4,500 covers in 20ft GP; 10,200–10,800 covers in 40ft HQ.</li>
              <li><strong>Best Suited For:</strong> High-volume retail chains (Target, IKEA, Zara Home), e-commerce drop-shippers, and furniture distributors.</li>
              <li><strong>Advantages:</strong> Reduces ocean freight cost per unit by 70%–75%. Covers are stuffed locally with low-cost domestic EPS beads or recycled textiles.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Quality Control & Drop Testing */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Quality Control, Drop Impact Testing & Moisture Defense: The AQL 2.5 Standard
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
          Every production batch of jute poufs manufactured at Golden Fiber Crafts Limited undergoes inspection under the internationally recognized ISO 2859-1 (AQL 2.5 General Level II) standard. Each piece is subjected to four rigorous physical audits: (1) 100 kg pneumatic vertical drop cycling; (2) seam tensile pull testing exceeding 150 N/cm; (3) calibrated digital pin-probe moisture verification strictly under 10%–12%; and (4) full metal detection auditing.
        </div>

        {/* Embedded Image: Quality Control Moisture Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/jute-pouf-quality-control-moisture-inspection.jpg"
            alt="Quality control inspector testing moisture content below 10.4 percent on finished jute pouf using digital pin meter in Bangladesh factory"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Golden Fiber Crafts QC technician verifying fiber moisture strictly at 10.4% using electrical resistance pin-meter prior to container polybag sealing.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">AQL 2.5 QC & MOISTURE AUDIT</span>
          </figcaption>
        </figure>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Because natural jute fibers are organic plant materials, controlling moisture is essential to eliminate the risk of mildew germination during 30 to 45 days of humid ocean container transit across tropical maritime routes. Our heated chamber protocols guarantee that goods depart Chattogram Seaport in pristine, showroom-fresh condition.
        </p>
      </section>

      {/* Section 8: Packaging Logistics & CBM */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Packaging Logistics & Ocean Freight Optimization (CBM Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          CBM (Cubic Meter) displacement governs the total landed cost of imported furniture. In our factory, master cartons are engineered with precise dimensional ratios to eliminate dead air inside standardized ISO ocean shipping containers:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2 mt-3 list-disc pl-5">
          <li><strong>Filled Pouf Master Carton:</strong> 48 x 48 x 42 cm (0.095 CBM holding 2 cylindrical poufs BJP-01). Exactly 280 cartons stack snugly inside a 20ft GP (28 usable CBM), delivering 560 filled units.</li>
          <li><strong>Unfilled Cover Master Carton:</strong> 52 x 42 x 38 cm (0.083 CBM holding 12 flat-packed pouf shells). Exactly 820 cartons pack inside a 40ft HQ (68 usable CBM), delivering 9,840 to 10,200 unfilled shells.</li>
          <li><strong>Carton Board Specifications:</strong> 275 lb burst-test, double-wall 5-ply corrugated kraft paper with water-resistant external starch adhesives that will not soften under container humidity.</li>
        </ul>
      </section>

      {/* Section 9: Why Source From Bangladesh */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Why Source Jute Poufs Directly From Bangladesh (0% Duty GSP Advantage)?
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
          Bangladesh produces over 70% of the world’s premium export-grade Tosha jute fibers, granting direct factory manufacturers unmediated access to superior raw material at ground-level farmgate pricing. Crucially, under the European Union’s Generalized Scheme of Preferences (GSP / EBA) and UK Trade Preference schemes, handcrafted natural fiber furniture items (HS Code 9404.90 / 6304.99) manufactured in Bangladesh enter Europe and Britain with <strong>0% customs import duty</strong>, granting buyers a direct 4.5% to 6.5% tariff advantage over competing sourcing hubs.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Beyond tariff exemptions, Bangladesh offers unbroken generational hand-weaving heritage. Hand-stitching a cylindrical jute pouf requires seasoned hand dexterity, ergonomic tension balance, and structural rhythm that automated machines cannot replicate. Sourcing direct from Golden Fiber Crafts Limited bridges this rural craft mastery with modern corporate trade standards.
        </p>
      </section>

      {/* Section 10: Sustainable Ethics */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Sustainable Craftsmanship, Zero Waste & Rural Artisan Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          At Golden Fiber Crafts Limited, sustainability is an operational reality rather than a corporate marketing veneer. Jute crops absorb up to 15 metric tons of carbon dioxide per hectare during their 120-day growth cycle while replenishing agricultural topsoil with organic biomass. Our production model incorporates:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Women Artisan Independence</span>
            <span>Over 85% of our braiding and stitching workforce comprises rural craftswomen who earn fair, dignified living wages above national minimum standards.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Zero Fiber Waste</span>
            <span>Trimming offcuts and leftover braid ends are shredded and re-spun into coarse binding cords or repurposed as internal cushioning fillers.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Clean Renewable Materials</span>
            <span>Natural golden jute, unbleached cotton lining, coconut coir, and vegetable-tanned leather combine to form completely circular furniture items.</span>
          </div>
        </div>
      </section>

      {/* Section 11: Buyer Due Diligence */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Buyer Due Diligence Audit Checklist for Furniture & Pouf Importers
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Before issuing an irrevocable Letter of Credit or wire deposit to any offshore furniture manufacturer, international procurement directors should verify these five non-negotiable operational checkpoints:
        </p>

        <div className="my-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Fiber Moisture Verification:</strong> Require digital pin-probe readings certified strictly below 10%–12% before carton loading.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Zipper Enclosure & Inner Liner Construction:</strong> Confirm double-stitched inner liner to prevent loose EPS bead shedding.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Seam Tensile Strength:</strong> Request proof of heavy nylon lock-stitching at 8 stitches/inch to withstand 130+ kg adult drop impact.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Fumigation Certification:</strong> Verify official government phytosanitary fumigation compliant with ISPM 15 standards prior to port dispatch.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-center gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Transparent Ownership & Facilities:</strong> Ensure direct factory ownership in Bangladesh rather than third-party middleman commission agents.</span>
          </div>
        </div>
      </section>

      {/* Section 12: Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Executing a wholesale export contract with Golden Fiber Crafts Limited proceeds through six predictable stages:
        </p>

        <ol className="text-sm sm:text-base text-stone-700 space-y-2.5 mt-3 list-decimal pl-5">
          <li><strong>Initial RFQ & Specification Review:</strong> Buyer submits desired geometries (cylinders, cubes), dimensions, target FOB price, and preferred shipping format (filled vs. unfilled covers).</li>
          <li><strong>Prototyping & Physical Sample Sign-Off:</strong> Counter-sample prototypes are crafted and dispatched via DHL/FedEx Express within 7 to 10 working days for buyer physical tactile approval.</li>
          <li><strong>Proforma Invoice & Purchase Agreement:</strong> Formal order confirmation establishing FOB Chattogram or CFR/CIF pricing, delivery windows, and payment milestones (30% T/T deposit or Irrevocable L/C at sight).</li>
          <li><strong>Batch Manufacturing & Mid-Line Audits:</strong> Bulk weaving commences. Digital video and photo updates of braided coils, inner liners, and seam testing are shared weekly.</li>
          <li><strong>Pre-Shipment Inspection (PSI):</strong> Buyer or nominated third-party inspection agency (e.g., SGS, Bureau Veritas, Intertek) performs final AQL 2.5 random sampling.</li>
          <li><strong>Container Drayage & Bill of Lading Release:</strong> Sealed cargo is dispatched to Chattogram Seaport (BDCGP) for ocean vessel loading. Original commercial invoice, packing list, certificate of origin, and B/L are promptly transferred.</li>
        </ol>
      </section>

      {/* Section 13: Export Specifications, Customization Matrix & Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Export Specifications, Customization Matrix & Container Logistics Tables
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          The following reference tables detail our standard export product catalog, OEM customization capabilities, and container freight economics:
        </p>

        {article.tables.map((table, tIdx) => (
          <div key={tIdx} className="my-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs">
            <div className="bg-amber-900/90 px-4 py-3 text-white">
              <h4 className="font-serif font-bold text-xs sm:text-sm tracking-wide m-0">
                {table.title}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse m-0">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-200 text-stone-800 font-semibold">
                    {table.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-3 py-2.5 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-amber-50/40 transition">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-3 py-2.5 text-stone-700 whitespace-nowrap">
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

      {/* Section 14: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          14. Frequently Asked Questions (FAQ) with Technical Answers
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Direct engineering and procurement answers to the most common questions submitted by international furniture retailers and sourcing directors:
        </p>

        <div className="mt-6 space-y-3">
          {article.faqs.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs transition"
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-stone-900 hover:text-amber-800 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-stone-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p className="m-0 mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Banner */}
      <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-2">
            Direct Factory Procurement Desk
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Request Custom Jute Pouf Samples & Container Quote
          </h3>
          <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl leading-relaxed m-0">
            Submit your target dimensions, filled vs. unfilled cover preferences, and private branding specifications. We deliver physical counter-samples in 7–10 days and competitive FOB Chattogram container quotes in 24 hours.
          </p>
        </div>
        <button
          onClick={() => onOpenQuoteModal({ productCode: 'BJP-01-POUF-OEM' })}
          className="flex-shrink-0 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Inquire for Wholesale RFQ</span>
        </button>
      </div>
    </>
  );
};
