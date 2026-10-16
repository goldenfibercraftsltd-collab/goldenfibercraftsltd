import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Box, Compass, HeartHandshake, Scissors, Flame, RefreshCw, Sun, Home,
  FolderDown
} from 'lucide-react';

interface WaterHyacinthBasketEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const WaterHyacinthBasketEditorial: React.FC<WaterHyacinthBasketEditorialProps> = ({
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
          1. Water Hyacinth Anatomy & Material Engineering: The Aquatic Bast Core Advantage
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted water hyacinth storage basket is an artisanal, 100% biodegradable organizational container handwoven from the sun-cured petiole stalks of the fast-growing aquatic plant (<em>Eichhornia crassipes</em>), harvested sustainably from the riverine floodplains and freshwater wetlands of Bangladesh. Structured around an electro-galvanized, powder-coated anti-rust iron wire framework (or densely braided into free-standing coils), water hyacinth storage baskets deliver a thick, soft-touch chunky braid texture, lightweight cellular rigidity, and natural golden-honey aesthetic—providing international homeware retailers and private-label brands with a sustainable, plastic-free alternative to petroleum storage bins.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In commercial home organization, retail storage solutions must withstand frequent handling, stackable weight, and shifting indoor humidity without brittle fiber fracturing. Unlike terrestrial rush grasses or hollow reed straws, the petiole stem of the water hyacinth possesses an intricate interior microscopic honeycomb of air pockets (aerenchyma tissue). When dried under controlled tropical sunlight, this cellular structure undergoes natural bio-compression:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Spongy Aerenchyma Core</span>
            <span>Microscopic longitudinal air channels provide natural impact cushioning, tactile warmth, and an ultra-lightweight volumetric profile without sacrificing wall density.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Fibrous Outer Epidermis</span>
            <span>Tough exterior cellulosic skin provides abrasion resistance, smooth snag-free surfaces for delicate apparel storage, and an organic warm caramel patina.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Internal Wire Skeleton</span>
            <span>Precision-welded 3.5mm–5.0mm anti-rust electro-galvanized iron wire frame prevents outward bulging, sagging under heavy loads, and ensures long-term vertical stackability.</span>
          </div>
        </div>

        {/* Embedded Image 1: Artisan Weaving Water Hyacinth Basket */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-water-hyacinth-basket.jpg"
            alt="Bangladeshi woman artisan hand-weaving golden water hyacinth storage basket on iron wire frame in rural cottage workshop in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 1: Skilled Bangladeshi artisan in a rural weaving workshop hand-weaving sun-cured golden water hyacinth braids tightly onto an electro-galvanized iron wire basket frame.
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Global Retailers Are Transitioning to Water Hyacinth Storage Baskets */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Retailers Are Transitioning to Handcrafted Water Hyacinth Storage Baskets
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Over the past three retail buying seasons, international department store chains, boutique lifestyle brands, and e-commerce home organizers across North America, the UK, Germany, France, the Netherlands, and Scandinavia have aggressively increased their water hyacinth storage collections. Four commercial and ecological market realities drive this procurement surge:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Phasing Out Petrochemical Plastic Storage Totes</span>
            </div>
            <p>
              Polypropylene bins, BPA-laden plastic organizers, and wire mesh crates face growing consumer rejection and strict EU Corporate Sustainability Due Diligence Directive (CSDDD) compliance mandates. Water hyacinth baskets offer 100% renewable, plant-based home organization with zero microplastic footprint.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Sun className="w-4 h-4 text-amber-700" />
              <span>Japandi & Warm Minimalist Aesthetic Demand</span>
            </div>
            <p>
              Interior design trends overwhelmingly favor biophilic, textural warmth. The chunky braided rope weave of water hyacinth introduces visual depth, organic symmetry, and soft honey tones that complement hardwood shelving, white linen, and modern Nordic interiors.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Box className="w-4 h-4 text-amber-700" />
              <span>Heavy-Duty Load-Bearing Rigidity</span>
            </div>
            <p>
              Because each basket is woven over welded structural iron wire, it supports 15 to 25 kg of contents (pantry canned goods, heavy winter blankets, ceramic bathroom accessories) without warping, buckling, or losing structural symmetry.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Package className="w-4 h-4 text-amber-700" />
              <span>High Nesting Ratio & Freight Cost Efficiency</span>
            </div>
            <p>
              Graduated 3-piece and 4-piece nesting configurations (Small fits into Medium, Medium into Large) compress export shipping volume by up to 65%. A single 40ft High Cube container carries up to 14,500 nested sets (over 43,500 individual baskets).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Classifications & Structural Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Structural Styles of Water Hyacinth Baskets
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited manufactures four primary structural categories of water hyacinth baskets engineered for distinct retail merchandising and lifestyle functional purposes:
        </p>

        <div className="space-y-4 my-5 text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-base mb-1 text-amber-900">A. Rectangular Wire-Framed Shelf Storage Bins</h3>
            <p className="text-xs sm:text-sm">
              Engineered with straight vertical walls and 90-degree corners to fit standard modular cube shelving (such as 11" x 11" and 13" x 13" cubbies). Features built-in recessed cutout handles for easy pull-out access in closets, kitchen pantries, and living room media consoles.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-base mb-1 text-amber-900">B. Round & Oval Nested Laundry Hampers with Wooden Lids</h3>
            <p className="text-xs sm:text-sm">
              Tall cylindrical silhouette designed for bed linen, laundry, and nursery storage. Can be accessorized with fitted water hyacinth woven lids, removable 100% natural cotton canvas drawstring liners, and genuine vegetable-tanned leather handle straps.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-base mb-1 text-amber-900">C. Woven Decorative Trays & Shallow Tabletop Organizers</h3>
            <p className="text-xs sm:text-sm">
              Shallow rectangular and circular woven vanity trays (height 6 cm to 10 cm) featuring braided rims and reinforced plywood or dense woven bases. Popular for coffee table centerpieces, bathroom vanity amenity displays, and dining tabletop bread baskets.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-base mb-1 text-amber-900">D. Two-Tone Botanical Planter Baskets with Leakproof Liners</h3>
            <p className="text-xs sm:text-sm">
              Cylindrical and tapered indoor plant pot covers combining natural golden water hyacinth tops with charcoal-dyed or bleached white jute bottom bases. Internal surfaces are equipped with removable thermo-welded transparent PE lining to protect surfaces from water seepage.
            </p>
          </div>
        </div>

        {/* Embedded Image 2: Raw Fiber Harvest & Sun Curing */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/water-hyacinth-fiber-harvest-drying-bangladesh.jpg"
            alt="Long golden sun-dried raw water hyacinth stems sun-curing on raised bamboo racks along rural riverbank in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 2: Sustainable riverine harvesting: Long, mature water hyacinth stalks sun-curing on elevated bamboo drying racks along the riverbanks of southern Bangladesh under natural tropical sunlight.
          </figcaption>
        </figure>
      </section>

      {/* Section 4: The 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Riverine Harvesting to Master Export Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Producing export-grade water hyacinth baskets that withstand 30 to 45 days of ocean container transit without moisture damage requires stringent process engineering at every production stage:
        </p>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Selective Riverine Harvest:</strong>
              Mature aquatic plants with long, thick petiole stems (minimum 50 cm to 80 cm in length) are hand-cut from freshwater river deltas. Removing invasive water hyacinth also clears clogged waterways and improves aquatic oxygen levels.
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Washing & Multi-Day Sun Curing:</strong>
              Harvested stalks are washed in clean water to eliminate sediment, de-leafed, and laid out across raised slatted bamboo racks for 7 to 10 days of natural solar dehumidification until baseline moisture drops below 14%.
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Sorting, Splitting & Braid Twisting:</strong>
              Sun-cured stems are sorted by thickness and color uniformity. Skilled artisans hand-braid 3-ply and 4-ply flat ropes or twisted cords to create uniform weaving strands of consistent diameter.
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Iron Frame Fabrication & Powder Coating:</strong>
              High-tensile Q235 steel wire (3.5mm–5.0mm main rim, 2.0mm cross-ribs) is cut, welded, and treated with electro-galvanized anti-rust powder coating (matte black or clear anti-corrosion primer).
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">5</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Tight Master Hand-Weaving:</strong>
              Artisans hand-weave the braided water hyacinth cords onto the iron frame stakes using interlocking arrow, plain, or coiled techniques, seamlessly incorporating cutout carrying handles.
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">6</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Controlled Kiln Chamber Dehumidification:</strong>
              Finished baskets enter industrial forced-hot-air drying rooms maintained at 45°C–50°C for 24 to 36 hours, driving internal core fiber moisture down to strictly 10%–12%.
            </div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">7</span>
            <div>
              <strong className="text-stone-900 block font-semibold">Quality Inspection, Desiccant Packing & Master Cartons:</strong>
              Every basket undergoes 100% digital pin probe moisture testing, dimensional tolerance checking (+/- 1.5%), and is nested into heavy-duty 5-ply export master cartons lined with sealed polyethylene moisture barrier bags and 50g silica gel desiccant packs.
            </div>
          </div>
        </div>

        {/* Embedded Image 3: Quality Control & Moisture Testing */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/water-hyacinth-basket-quality-control-moisture-inspection.jpg"
            alt="Bangladeshi female quality control technician inspecting moisture content of water hyacinth storage basket with digital pin probe in export factory"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 3: Rigorous factory quality control: Quality technician in our clean export facility measuring the moisture content of finished water hyacinth baskets with a digital pin probe to ensure levels remain strictly below 12%.
          </figcaption>
        </figure>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited operates full contract manufacturing and OEM/ODM private labeling for commercial retail chains, mail-order catalogs, and interior design brands. Customization capabilities include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <strong className="text-stone-900 font-semibold block mb-1">Handle Construction:</strong>
            Integrated cutout handles, top-grain vegetable-tanned leather loops secured with antique brass rivets, twisted natural jute rope cords, or solid carved wooden dowel handles.
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <strong className="text-stone-900 font-semibold block mb-1">Removable Fabric Liners:</strong>
            Unbleached 100% organic cotton muslin liners, heavy canvas inserts, or GOTS-certified linen bags with tailored elastic hems or decorative tie ribbons for easy machine washing.
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <strong className="text-stone-900 font-semibold block mb-1">Custom Pantone & Two-Tone Dyes:</strong>
            AZO-free color dyeing matching Pantone Fashion, Home + Interiors (FHI) standards, dipped two-tone bottom bases, matte black accents, or whitewashed coastal finishes.
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <strong className="text-stone-900 font-semibold block mb-1">Private Branding & Retail Packaging:</strong>
            Debossed genuine leather corner logo patches, laser-etched wooden tags, woven satin brand labels, FSC-certified hangtags, and GS1-compliant EAN/UPC master barcode labels.
          </div>
        </div>
      </section>

      {/* Section 6: Quality Control & Defect Prevention: The AQL 2.5 Standard */}
      <section id="quality-control" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Control & Defect Prevention: The AQL 2.5 Standard
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          All export consignments from Golden Fiber Crafts Limited adhere strictly to ISO 2859-1 (AQL 2.5 Major / 4.0 Minor) pre-shipment inspection benchmarks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 block mb-1 text-amber-800">Moisture Threshold &lt; 12%</span>
            <span>Every production batch is sampled with calibrated dual-pin electrical resistance hygrometers. Any unit measuring above 13% is immediately rejected and returned to the dehumidification kiln.</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 block mb-1 text-amber-800">Anti-Rust 48-Hour Salt Spray</span>
            <span>Iron wire frame coatings undergo ASTM B117 salt spray testing to verify zero oxidation, preventing orange rust bleed from discolouring the plant fiber in humid storage environments.</span>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 block mb-1 text-amber-800">Dynamic Load & Drop Testing</span>
            <span>Filled with 20 kg of weighted ballast and lifted by handles 50 times repeatedly; cartons endure ISTA-1A drop testing from 76 cm height to confirm zero frame deformation during ocean transit.</span>
          </div>
        </div>
      </section>

      {/* Section 7: Export Logistics & Container Packing Optimization */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Export Logistics & Ocean Freight Optimization (CBM Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In international maritime container shipping, freight costs are calculated based on volumetric displacement (CBM) rather than gross weight. Shipping rigid baskets individually wastes up to 70% of ocean container space. By engineering graduated dimensional steps, our nested Set of 3 (S/3: Small inside Medium inside Large) takes up the volumetric footprint of only the largest single basket:
        </p>

        <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs sm:text-sm text-stone-800 my-4 space-y-2">
          <strong className="text-amber-950 font-semibold block text-sm">Container Loadability Economics:</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>20ft GP Container (28 CBM usable):</strong> Accommodates approx. 480 – 520 Master Cartons = 1,920 – 2,080 Nested Sets (5,760 – 6,240 individual baskets).</li>
            <li><strong>40ft High Cube Container (68 CBM usable):</strong> Accommodates approx. 1,180 – 1,250 Master Cartons = 4,720 – 5,000 Nested Sets (14,160 – 15,000 individual baskets).</li>
            <li><strong>FOB Chattogram Seaport:</strong> Direct vessel feeder connections to Singapore, Colombo, Tanjung Pelepas, and Port Klang, with transit times to European base ports (Rotterdam, Hamburg, Felixstowe) of 28 to 34 days, and US East Coast of 32 to 38 days.</li>
          </ul>
        </div>
      </section>

      {/* Section 8: Why Source Water Hyacinth Baskets Directly From Bangladesh? */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Why Source Water Hyacinth Baskets Directly From Bangladesh?
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          While Vietnam and China historically dominated natural fiber handicraft exports, international buyers are rapidly shifting sourcing volumes to Bangladesh due to four decisive economic and geopolitical advantages:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1 text-amber-800">Abundant Riverine Raw Material</h3>
            <p>
              The vast river networks of the Ganges-Brahmaputra-Meghna delta produce massive, replenishable wild water hyacinth biomass year-round. This local raw material abundance eliminates reliance on imported fibers and protects buyers from sudden raw material price shocks.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1 text-amber-800">Duty-Free Market Access (GSP / EBA)</h3>
            <p>
              Handicrafts and natural plant-fiber products exported from Bangladesh enter the European Union, United Kingdom, Canada, Australia, and Japan completely duty-free under Generalized Scheme of Preferences (GSP / Everything But Arms) status, saving buyers 4% to 9% in customs duties compared to China.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1 text-amber-800">Generational Delta Handcrafting</h3>
            <p>
              Bangladeshi rural artisan communities possess centuries of heritage in natural grass, cane, and aquatic reed plaiting. This artisan heritage delivers tighter knots, cleaner handle transitions, and far fewer loose fiber ends than automated machine simulations.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-1 text-amber-800">Competitive Cost Structure</h3>
            <p>
              Lower overheads and decentralized rural cottage weaving collectives allow Golden Fiber Crafts Limited to offer FOB unit prices 15% to 25% lower than comparable Vietnamese and Chinese factories while maintaining ethical fair-wage employment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Ethical Manufacturing & Sustainability */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Sustainable Manufacturing, Social Ethics & Women Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Harvesting water hyacinth transforms an environmental hazard into economic empowerment. In Bangladesh's waterways, unchecked water hyacinth proliferation blocks river navigation, suffocates fish populations, and impedes agricultural irrigation. Harvesting it for handicrafts clears waterways and provides dignified, sustainable livelihoods:
        </p>

        <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs my-4 space-y-2 text-xs sm:text-sm text-stone-700">
          <p>
            • <strong>Fair-Trade Decentralized Weaving:</strong> Over 85% of our weaving artisans are rural women who work in flexible community workshop sheds, enabling them to earn sustainable household income while caring for their families.
          </p>
          <p>
            • <strong>Zero Toxic Chemicals:</strong> Fibers are washed in natural freshwater and sun-cured without synthetic bleaching agents, chlorine, or sulfur fumigation, preserving the organic natural integrity of the plant stalk.
          </p>
          <p>
            • <strong>Complete Circularity:</strong> At the end of its multi-year domestic lifecycle, unlined water hyacinth fiber decomposes organically in home compost within 90 to 120 days, returning organic matter to the soil.
          </p>
        </div>
      </section>

      {/* Section 10: Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Buyer Due Diligence Audit Checklist for Water Hyacinth Sourcing
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          When qualifying a South Asian natural fiber basket manufacturer, international commercial buyers should systematically audit seven technical benchmarks:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">1. Moisture Verification Equipment</span>
            <span>Does the factory utilize calibrated electrical pin probe meters with temperature compensation, recording batch logs below 12% prior to carton sealing?</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">2. Anti-Rust Coating Specification</span>
            <span>Is the internal metal frame electro-galvanized or powder-coated to prevent rust bleed through humid ocean voyages?</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">3. Frame Weld Integrity</span>
            <span>Are wire intersections spot-welded cleanly without sharp protruding wire ends that could snag fingers or linen?</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">4. Chemical & REACH Compliance</span>
            <span>Are all dyes, lacquers, and adhesives certified 100% free from restricted AZO dyes, formaldehyde, and heavy metals?</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">5. Master Carton Mullen Burst Test</span>
            <span>Are shipping cartons minimum 5-ply heavy-duty corrugated board (200+ lbs/sq. inch burst test) with inner poly liners?</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">6. Phytosanitary & Fumigation</span>
            <span>Can the exporter provide an official Bangladesh Department of Agricultural Extension Phytosanitary Certificate & ISPM 15 fumigation?</span>
          </div>
        </div>
      </section>

      {/* Section 11: Step-by-Step International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <span className="font-bold text-amber-800 text-sm shrink-0">Step 1:</span>
            <div><strong>Inquiry & Specification Submission:</strong> Buyer shares desired dimensions (or nested set configuration), target frame gauge, handle details, and estimated order quantity.</div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <span className="font-bold text-amber-800 text-sm shrink-0">Step 2:</span>
            <div><strong>Commercial Proforma & Engineering Review:</strong> We provide detailed FOB Chattogram pricing tiers, CBM calculations, master carton counts, and prototype timeline.</div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <span className="font-bold text-amber-800 text-sm shrink-0">Step 3:</span>
            <div><strong>Rapid Sample Prototyping:</strong> Physical counter-sample is hand-woven and dispatched within 7 to 10 working days via DHL or FedEx Express for buyer touch-and-feel approval.</div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <span className="font-bold text-amber-800 text-sm shrink-0">Step 4:</span>
            <div><strong>Purchase Order & Production Initiation:</strong> Upon signed approval and 30% T/T deposit (or L/C at Sight), full bulk weaving, frame fabrication, and kiln dehumidification commence.</div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <span className="font-bold text-amber-800 text-sm shrink-0">Step 5:</span>
            <div><strong>AQL 2.5 Inspection & Ocean Dispatch:</strong> Pre-shipment digital photo/video audit and moisture test logs shared; goods loaded into sealed ocean containers at Chattogram Seaport.</div>
          </div>
        </div>
      </section>

      {/* Section 12: Export Specifications, Customization Matrix & Container Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Export Specifications, Customization Matrix & Logistics Tables
        </h2>

        {/* Table 1 */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-sm font-bold text-stone-900 mb-2">{article.tables[0].title}</h3>
          <table className="min-w-full text-xs text-left border-collapse border border-stone-200">
            <thead>
              <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
                {article.tables[0].headers.map((h, i) => (
                  <th key={i} className="p-2.5 border-r border-stone-200 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.tables[0].rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 border-b border-r border-stone-200 text-stone-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-sm font-bold text-stone-900 mb-2">{article.tables[1].title}</h3>
          <table className="min-w-full text-xs text-left border-collapse border border-stone-200">
            <thead>
              <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
                {article.tables[1].headers.map((h, i) => (
                  <th key={i} className="p-2.5 border-r border-stone-200 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.tables[1].rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 border-b border-r border-stone-200 text-stone-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 3 */}
        <div className="my-6 overflow-x-auto">
          <h3 className="text-sm font-bold text-stone-900 mb-2">{article.tables[2].title}</h3>
          <table className="min-w-full text-xs text-left border-collapse border border-stone-200">
            <thead>
              <tr className="bg-stone-100 text-stone-900 border-b border-stone-200">
                {article.tables[2].headers.map((h, i) => (
                  <th key={i} className="p-2.5 border-r border-stone-200 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.tables[2].rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-2.5 border-b border-r border-stone-200 text-stone-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mandatory Price Information Rule Disclaimer */}
        <div className="p-3.5 bg-stone-100 rounded-lg border border-stone-300 text-xs text-stone-600 my-4">
          <em><strong>Note on Indicative Pricing:</strong> Prices mentioned in the tables above are indicative and may change depending on raw material harvest conditions, exact technical specifications, custom frame dimensions, order volume, packaging requirements, and foreign exchange fluctuations. Please contact our export team directly for an official, binding commercial quotation tailored to your tech pack.</em>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none mt-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Frequently Asked Questions (FAQ) for International B2B Buyers
        </h2>

        <div className="space-y-3 my-5">
          {article.faqs.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div key={index} className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:bg-stone-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-stone-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: B2B Quote & RFQ Call to Action */}
      <section className="my-10 p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Bangladesh Manufacturer & Exporter</span>
          </div>
          
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-white">
            Ready to Develop Your Custom Water Hyacinth Storage Basket Collection?
          </h2>
          
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
            Partner directly with Golden Fiber Crafts Limited for custom OEM/ODM private labeling, competitive factory-direct pricing, guaranteed moisture control under 12%, and reliable full-container export deliveries from Chattogram Seaport.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal({ 
                title: 'Water Hyacinth Storage Baskets Wholesale RFQ', 
                category: 'Water Hyacinth', 
                code: 'GFC-WH-BASKET' 
              })}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-colors shadow-md flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Request Wholesale Quotation / RFQ</span>
            </button>
            <Link
              to="/products"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-sm transition-colors border border-white/15 flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span>Browse Full Product Catalog</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
