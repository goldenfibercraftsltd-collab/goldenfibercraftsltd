import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Box, Compass, HeartHandshake, Scissors, Flame, RefreshCw, Sun, Home,
  FolderDown
} from 'lucide-react';

interface SeagrassBasketEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const SeagrassBasketEditorial: React.FC<SeagrassBasketEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Fiber Anatomy & Material Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Coastal Seagrass Anatomy & Material Engineering: The Resilient Bio-Silica Core
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted seagrass storage basket is an artisanal, 100% plant-based organizational container handwoven from the sun-cured saline marsh grass fibers (<em>Schoenoplectus / Cyperus</em> species) indigenous to the coastal delta estuaries of Bangladesh (Noakhali, Barishal, and the Bay of Bengal periphery). Engineered with an organic hydrophobic waxy cuticle (cutin), 52%–56% cellular cellulose reinforced by microscopic plant bio-silica, and high tensile hand-twisted cordage, genuine seagrass storage baskets deliver superior weight-bearing rigidity, natural humidity resilience, and complete circular biodegradability—providing international home goods retailers an eco-friendly, plastic-free alternative to synthetic polymer storage bins and wire hampers.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In commercial home organization and retail interior decor, storage baskets must balance rigid structural integrity with flexible tactile warmth. Unlike freshwater reeds or soft rush grasses that become brittle and fracture under cyclic loading, wild coastal seagrass harvested from the brackish tidal zones of southern Bangladesh develops unique structural adaptations designed by nature to resist saline tidal surges:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural Cutin Wax Sheen</span>
            <span>Hydrophobic epidermic waxy coating naturally repels surface dust, ambient moisture splashes, and mold spores while providing a smooth tactile luster.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Bio-Silica Reinforced Cells</span>
            <span>Cell walls are naturally embedded with micro-silica crystals, ensuring exceptional crush resistance and shape memory when loaded with 20+ kg of textiles or books.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Multi-Ply Twisted Cord Tensile</span>
            <span>Hand-twisted 2-ply and 3-ply seagrass cordage yields longitudinal tensile strength surpassing 320 N, eliminating breakage at critical handle stress points.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Weaving Seagrass Basket */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-seagrass-basket.jpg"
            alt="Bangladeshi woman artisan hand-weaving seagrass storage basket in rural cottage workshop in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 1: Master artisan in rural coastal Noakhali, Bangladesh, hand-coiling and weaving sun-cured seagrass fiber into a heavy-duty laundry and storage basket with braided side handles.
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Global Retailers Are Transitioning to Seagrass Storage Baskets */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Retailers Are Transitioning to Handwoven Seagrass Storage Baskets
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Over the past three retail procurement cycles, global home organization chains, department store brands, and lifestyle catalog retailers across North America, the UK, Germany, France, the Netherlands, and Scandinavia have aggressively expanded their natural seagrass basket inventories. This commercial expansion is driven by four structural market drivers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Phasing Out Petroleum Plastic Storage Totes</span>
            </div>
            <p>
              Triclosan-treated plastics, polypropylene storage bins, and toxic phthalate polymers face intensifying retail consumer backlash and legislative container recycling mandates in the EU and North America. Seagrass baskets provide 100% renewable, carbon-sequestering, home-compostable home organization.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Sun className="w-4 h-4 text-amber-700" />
              <span>Radiant Warm Sage-to-Golden Patina</span>
            </div>
            <p>
              Freshly harvested seagrass displays a soothing olive-sage tint that cures under gentle tropical sunshine into a rich honey-beige patina. This organic tonal spectrum seamlessly complements modern Japandi, Scandinavian Hygge, Coastal, and Bohemian interior aesthetics.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Box className="w-4 h-4 text-amber-700" />
              <span>Engineered Dimensional Stability & Rigidity</span>
            </div>
            <p>
              When built around a concealed electroplated steel wire skeleton or woven via dense coiled rope construction, seagrass baskets do not sag, collapse, or bow outward under the weight of folded blankets, books, firewood, or children's toys.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Package className="w-4 h-4 text-amber-700" />
              <span>High Nesting Ratio & Freight Cost Efficiency</span>
            </div>
            <p>
              By designing graduated 3-piece and 4-piece nesting sets (Small fits into Medium, Medium into Large), export packing volume is compressed by up to 68%. A single 40ft High Cube container carries up to 16,800 nested basket sets (50,400 individual units).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Classifications & Structural Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Structural Styles of Seagrass Baskets
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          At Golden Fiber Crafts Ltd., our artisan clusters engineer five distinct structural classifications of commercial seagrass baskets tailored for residential closet systems, retail merchandising displays, and hospitality housekeeping:
        </p>

        <div className="space-y-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs">A</span>
              Rectangular Wire-Framed Shelf Organizers & Closet Bins (Model GFC-SB-015 / GFC-SB-025)
            </h3>
            <p className="mb-2">
              Constructed by tightly weaving 2-ply twisted seagrass cord around an anti-rust powder-coated iron frame. Features integrated cutout side handles sized to fit standard modular cube shelving (such as IKEA Kallax / Target Brightroom, 33 x 38 x 33 cm). Delivers razor-sharp right angles, flat level bases, and 18 kg load capacity.
            </p>
            <div className="text-2xs sm:text-xs text-stone-500 font-mono">Standard Sizes: S (30x20x15cm), M (35x25x18cm), L (40x30x20cm) | Primary Use: Wardrobe closet storage, pantry organizers, bathroom linens.</div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs">B</span>
              Collapsible Two-Tone Seagrass Belly Baskets with Loop Handles (Model GFC-SB-018)
            </h3>
            <p className="mb-2">
              Traditional Vietnamese-inspired bulbous belly silhouette mastered by Bangladeshi coastal weavers. Freeform soft-weave construction allows the top half to fold inward, transforming an upright 40 cm tall handled storage basket into a wide shallow decorative bowl. Often dip-dyed in charcoal black, forest green, or bleached white base.
            </p>
            <div className="text-2xs sm:text-xs text-stone-500 font-mono">Standard Sizes: Dia 28cm (S), Dia 35cm (M), Dia 42cm (L) | Primary Use: Living room throw blankets, plant pot covers, children's toy tote.</div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs">C</span>
              Lidded Laundry Hampers & Tall Storage Cylinders (Model GFC-SB-014 / GFC-SB-017)
            </h3>
            <p className="mb-2">
              High-capacity standing hampers engineered with heavy-gauge wire reinforcement or dense thick coiled seagrass rope. Includes a precision-fitted removable flat or cone lid with woven center knob, preventing odor escape and concealing soiled garments. Available with removable, washable unbleached cotton canvas liner bags.
            </p>
            <div className="text-2xs sm:text-xs text-stone-500 font-mono">Standard Sizes: 45 x 35 x 55 cm (Rectangular), Dia 40 x H 60 cm (Round) | Primary Use: Luxury master bedroom laundry hamper, boutique hotel towel return.</div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs">D</span>
              Shallow Nesting Vanity Trays & Scalloped Rim Bowls (Model GFC-SB-020 / GFC-SB-026)
            </h3>
            <p className="mb-2">
              Decorative tabletop catch-alls handwoven with intricate spiral coils or scalloped wavy openwork borders. Designed for dining room centerpieces, bathroom vanity cosmetic holders, bedside catch-all bowls, or rustic bread and fruit presentation platters.
            </p>
            <div className="text-2xs sm:text-xs text-stone-500 font-mono">Standard Sizes: Dia 25cm, 30cm, 35cm (Set of 3 nesting bowls) | Primary Use: Coffee table styling, retail merchandising display, artisanal gift hampers.</div>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs">E</span>
              Artisan Seagrass Pet Lounger Beds & Cat Baskets (Model GFC-SB-027 / GFC-SB-028)
            </h3>
            <p className="mb-2">
              Naturally breathable, chew-resistant pet beds featuring low-entry front cutouts and charming bear-ear or oval silhouettes. Seagrass naturally resists pet odors and flea nesting. Supplied either frame-only or with plush organic cotton sherpa cushions for specialty pet retail chains.
            </p>
            <div className="text-2xs sm:text-xs text-stone-500 font-mono">Standard Sizes: 50 x 40 x 18 cm, 60 x 50 x 20 cm | Primary Use: Premium eco-friendly pet boutiques and luxury cat/dog furniture.</div>
          </div>
        </div>
      </section>

      {/* Section 4: The 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Tidal Harvest to Export Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Every seagrass basket produced at Golden Fiber Crafts Ltd. passes through a rigorous 7-stage industrial handicraft protocol that guarantees dimensional consistency, seam integrity, and mold-free ocean transit:
        </p>

        <div className="space-y-3 my-5">
          {[
            {
              num: '1',
              title: 'Estuarine Tidal Wild Harvesting',
              desc: 'Mature seagrass stalks measuring 1.2 to 1.8 meters in length are hand-reaped by coastal harvesting cooperatives along the river mouths of Noakhali and Barishal during low tide between October and April.'
            },
            {
              num: '2',
              title: 'Controlled Solar Sun-Drying & Curing',
              desc: 'Freshly harvested green stalks are spread evenly on elevated bamboo drying racks for 4 to 6 days of intensive delta sunshine. Moisture is gradually reduced from 70% to under 12%, curing the fiber to an elastic golden-sage sheen.'
            },
            {
              num: '3',
              title: 'Sorting, Grading & Blade Splitting',
              desc: 'Stalks undergo mechanical cleaning and manual diameter sorting. Prime Grade-A uniform fibers are selected for exterior decorative weaving; heavier coarser stalks form the structural core coil.'
            },
            {
              num: '4',
              title: '2-Ply & 3-Ply High-Torque Cord Twisting',
              desc: 'Artisans hand-spin fiber bundles into continuous, uniform cords using traditional wooden spindle wheels, establishing consistent gauge thickness (2.5mm, 3.5mm, or 5.0mm) according to product specifications.'
            },
            {
              num: '5',
              title: 'Frame Preparation & Precision Handweaving',
              desc: 'For rigid bins, iron frames receive anti-corrosion zinc phosphate treatment and electrostatic powder coating. Skilled women artisans weave the twisted cord over the frame or build self-supporting coiled walls utilizing high-tensile jute binding thread.'
            },
            {
              num: '6',
              title: 'Trimming, Handle Anchor Reinforcement & Singeing',
              desc: 'Excess blade ends are trimmed flush with surgical shears. Handle attachment points receive reinforced double-anchor cross stitches. Baskets undergo controlled micro-flame singeing to eliminate stray fiber fuzz without scorching.'
            },
            {
              num: '7',
              title: 'Dehumidification, Desiccant Barrier & Master Carton Packing',
              desc: 'Finished baskets spend 24 hours in our hot-air circulating drying chamber. Moisture levels are verified with digital pin meters (<11.5%). Products are nested in poly-lined 5-ply double-wall export master cartons with industrial activated clay desiccants.'
            }
          ].map(stage => (
            <div key={stage.num} className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-amber-900 text-amber-100 flex items-center justify-center font-bold text-xs shrink-0">
                {stage.num}
              </span>
              <div>
                <strong className="text-stone-900 text-sm block mb-0.5">{stage.title}</strong>
                <span className="text-xs text-stone-600 leading-relaxed">{stage.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Image: Wholesale Seagrass Baskets Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-seagrass-storage-baskets-wholesale-display.jpg"
            alt="Custom handwoven seagrass storage baskets, lidded laundry hampers, and belly baskets wholesale display in Bangladesh export showroom"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 2: Export showroom collection of handwoven seagrass rectangular closet organizers, cylindrical laundry hampers, and two-tone belly baskets engineered for European and American retail chains.
          </figcaption>
        </figure>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Ltd. operates as a full-service OEM/ODM manufacturing partner for global department stores, boutique home decor labels, and Amazon Brand Registry leaders. We offer custom engineered specifications across five parameters:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Weave Patterns & Textures</span>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Tight Coiled Rope:</strong> Dense horizontal ridges for heavy load stability.</li>
              <li><strong>Herringbone / Diagonal Twill:</strong> Elegant zigzag visual texture.</li>
              <li><strong>Open Checkered Weave:</strong> Breathable openwork ideal for laundry aeration.</li>
              <li><strong>Braided Flat Braid:</strong> Wide, smooth surface ribbon weave.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Color Dyeing & Finishes</span>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Natural Sun-Cured:</strong> Organic golden-sage and warm honey tones.</li>
              <li><strong>AZO-Free Reactive Dyes:</strong> Pantone-matched saturated hues (Charcoal, Navy, Terracotta).</li>
              <li><strong>Dip-Dye Two-Tone:</strong> Modern half-and-half contrast coloring.</li>
              <li><strong>Eco-White Lime Wash:</strong> Distressed coastal farmhouse aesthetic.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Handle Ergonomics & Hardware</span>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Integrated Cutout Handles:</strong> Wire-reinforced flush grips for cube shelves.</li>
              <li><strong>Braided Seagrass Loop Ears:</strong> Soft, tactile top loop handles.</li>
              <li><strong>Top-Grain Leather Straps:</strong> Genuine vegetable-tanned leather with brass rivets.</li>
              <li><strong>Natural Wooden Dowel Bars:</strong> Solid polished acacia or beechwood handles.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Liners, Lids & Private Branding</span>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Removable Fabric Liners:</strong> Unbleached cotton canvas or linen with tie strings.</li>
              <li><strong>Fitted Flat / Hinged Lids:</strong> Seagrass woven lids with elastic loops or wood toggles.</li>
              <li><strong>Brand Identity:</strong> Debossed leather patches, woven damask labels, custom hangtags, barcoded FSC master carton labels.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Control & Moisture Mitigation */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Control & Defect Prevention: The Strict AQL 2.5 & Moisture Protocol
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Because natural seagrass is an organic hygroscopic plant fiber, maritime ocean shipping (30 to 45 days through equatorial waters from Chattogram Port to Rotterdam, Hamburg, Los Angeles, or New York) presents humidity challenges if moisture control is neglected. Golden Fiber Crafts enforces an uncompromising quality management framework:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
            <strong className="text-amber-950 font-semibold block mb-1">Calibrated Pin Moisture Inspection (&lt;11.5%)</strong>
            <span>Every single production batch is probed using Delmhorst electrical resistance moisture meters. No basket exceeding 11.5% fiber humidity is permitted into the packing queue.</span>
          </div>
          <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
            <strong className="text-amber-950 font-semibold block mb-1">Anti-Corrosion Salt-Spray Tested Frames</strong>
            <span>Wire skeletons undergo 48-hour ASTM B117 salt-spray exposure testing to verify 100% rust prevention in high-humidity coastal bathrooms.</span>
          </div>
          <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
            <strong className="text-amber-950 font-semibold block mb-1">Drop & Load-Bearing Stress Testing</strong>
            <span>Handle connections and basket bases are tested under static weight (15–25 kg for 24 hours) and dynamic 1-meter drop testing to ensure zero frame distortion or seam unraveling.</span>
          </div>
          <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200">
            <strong className="text-amber-950 font-semibold block mb-1">Phytosanitary Certification & ISPM 15 Fumigation</strong>
            <span>All export consignments undergo government-supervised phosphine or methyl bromide fumigation and receive official phytosanitary inspection certificates before ocean container sealing.</span>
          </div>
        </div>

        {/* Embedded Image: Quality Control Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/seagrass-basket-quality-control-moisture-inspection.jpg"
            alt="Professional quality control inspector using calibrated digital pin moisture meter to test handwoven seagrass laundry hamper in Bangladesh export warehouse"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 3: Quality assurance engineer measuring 11.6% internal fiber moisture content on a finished seagrass laundry hamper in our Gazipur export packing facility prior to container stuffing.
          </figcaption>
        </figure>
      </section>

      {/* Section 7: Ocean Freight Packaging & Container Logistics */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Ocean Freight Packaging & Container Logistics (CBM Nesting Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Freight economics dictate the commercial profitability of bulky home goods. By engineering graduated nestable dimensions where basket sizes fit precisely into one another with under 8mm clearance, we dramatically minimize volumetric dead air:
        </p>

        <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs my-5 text-xs sm:text-sm text-stone-700 space-y-2">
          <div className="font-bold text-stone-900 flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-800" />
            Nesting Mathematics & Container Load Comparison:
          </div>
          <p>
            For a standard 3-piece rectangular shelf basket set (Small 30x20x15cm, Medium 35x25x18cm, Large 40x30x20cm):
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><strong>Non-Nested Shipping:</strong> Requires 0.052 CBM per 3 baskets &rarr; 40ft HQ loads only ~1,300 sets (3,900 baskets total). High shipping cost of ~$4.20/basket.</li>
            <li><strong>Precision Nested Shipping (Set of 3):</strong> Packaged inside the large basket into a single carton of 42 x 32 x 22 cm (0.029 CBM) &rarr; 40ft HQ loads ~2,340 cartons (7,020 baskets total). Freight drops to ~$1.15/basket!</li>
            <li><strong>Collapsible Belly Baskets:</strong> Folded in half into flat discs (8cm depth vs 38cm height) &rarr; 40ft HQ loads up to 18,500 belly baskets!</li>
          </ul>
        </div>
      </section>

      {/* Section 8: Why Source Directly From Bangladesh? */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Why Source Seagrass Baskets Directly From Bangladesh?
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          While Vietnam and China historically dominated the woven seagrass trade, rising manufacturing wages and resource exhaustion have shifted premier global retail sourcing to Bangladesh. Sourcing directly from Golden Fiber Crafts Ltd. provides three distinct competitive advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Abundant Delta Estuary Supply</span>
            <span>Bangladesh's 700-river estuarine coastline naturally generates millions of tons of wild saline seagrass without fertilizer, synthetic irrigation, or pesticide inputs.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">20–30% Commercial Cost Advantage</span>
            <span>Competitive artisan labor economics combined with localized raw fiber access yield 20% to 30% lower FOB unit prices compared to Chinese or Vietnamese suppliers.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Duty-Free Preferential Tariffs</span>
            <span>Bangladesh benefits from duty-free GSP / Everything But Arms (EBA) trade access into the EU, UK, Canada, Australia, and Japan, reducing landed customs duty to 0%.</span>
          </div>
        </div>
      </section>

      {/* Section 9: Ethical Manufacturing & Women Empowerment */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Sustainable Manufacturing, Social Ethics & Women Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          At Golden Fiber Crafts Ltd., our production model bridges remote coastal artisan clusters with high-volume global consumer markets. Over 85% of our 10,000 direct and affiliated artisans are rural women residing in coastal villages:
        </p>

        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 my-5 text-xs sm:text-sm text-stone-800 space-y-2">
          <div className="font-bold text-emerald-950 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            Social Compliance & Fair Living Wages:
          </div>
          <p>
            Artisans work in flexible decentralized village cottage weaving centers, allowing them to balance home responsibilities while earning sustainable living wages that are 25% above statutory regional minimums. We maintain zero tolerance for child labor, provide free ergonomic training, and subsidize healthcare and clean drinking water filtration for artisan families.
          </p>
        </div>
      </section>

      {/* Section 10: Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Buyer Due Diligence Audit Checklist for Seagrass Basket Sourcing
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Before issuing an international Purchase Order (PO) to any natural fiber basket exporter, professional retail procurement executives should verify the following 6 technical compliance points:
        </p>

        <div className="space-y-2 my-5 text-xs sm:text-sm text-stone-700">
          {[
            'Moisture Calibration Certificate: Confirm factory utilizes calibrated pin moisture meters with batch records strictly &le; 12% at the time of packing.',
            'Frame Anti-Rust Treatment: For wire-frame bins, request salt-spray rust inspection reports and verify zinc powder coating thickness (&ge; 45 microns).',
            'Handle Tensile Load Rating: Ensure static load certification verifies at least 15 kg continuous suspended weight without handle separation.',
            'Nesting Dimensional Verification: Review 3D CAD nesting clearances to ensure nested baskets do not scuff, stretch, or deform outer units during transit.',
            'Phytosanitary & Fumigation Protocol: Verify shipping line bookings include ISPM 15 certified container fumigation and government phytosanitary clearance.',
            'Social Compliance & Ethical Audits: Confirm factory conforms with BSCI, SEDEX SMETA, or equivalent international fair labor auditing standards.'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-lg border border-stone-200">
              <CheckSquare className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 11: International Procurement Workflow */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-amber-900 text-xs block">Step 1: SKU & Spec Sheet</span>
            <span>Submit dimensions, weave preference, wire frame vs soft coil, and estimated container volume.</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-amber-900 text-xs block">Step 2: Prototyping</span>
            <span>Receive counter-sample prototypes within 7 to 10 days via DHL/FedEx Express for buyer sign-off.</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-amber-900 text-xs block">Step 3: Mass Production</span>
            <span>Artisan weaving, hot-air dehumidification, and AQL 2.5 inline inspection within 30 to 45 days.</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-amber-900 text-xs block">Step 4: FOB Export</span>
            <span>Fumigated container loading and sea shipment dispatch from Chattogram Seaport (BDCGP).</span>
          </div>
        </div>
      </section>

      {/* Section 12: Technical Specifications & Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Export Specifications, Customization Matrix & Container Logistics Tables
        </h2>

        {article.tables && article.tables.map((table, tIdx) => (
          <div key={tIdx} className="my-6">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2">
              {table.title}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 font-semibold border-b border-stone-200">
                    {table.headers.map((h, hIdx) => (
                      <th key={hIdx} className="p-2.5 sm:p-3 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-amber-50/30 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-2.5 sm:p-3 text-stone-600 font-mono text-2xs sm:text-xs">{cell}</td>
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
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Frequently Asked Questions (FAQ) with Technical Answers
        </h2>

        <div className="space-y-3 my-5">
          {article.faqs.map((faq, fIdx) => {
            const isOpen = activeFaqIndex === fIdx;
            return (
              <div 
                key={fIdx} 
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : fIdx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-xs sm:text-sm hover:text-amber-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Commercial Call to Action Banner */}
      <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-2xs uppercase tracking-wider font-bold rounded-full border border-amber-400/30">
            Factory Direct B2B Export Inquiries
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
            Ready to Source Custom Seagrass Storage Baskets Directly from Bangladesh?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Connect directly with Golden Fiber Crafts Limited. Receive physical pre-production sample prototypes within 7 days, complete CBM container packing simulations, and direct FOB Chattogram wholesale pricing.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenQuoteModal({ productCode: 'GFC-SB-015', name: 'Handwoven Seagrass Storage Baskets' })}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Request Wholesale Container Quote</span>
            </button>
            <a
              href="mailto:shafiq@goldenfibercraftsltd.com?subject=Wholesale%20Seagrass%20Baskets%20Inquiry"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-xl font-medium border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Email Export Desk Directly</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
