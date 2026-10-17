import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Box, Compass, HeartHandshake, Scissors, Flame, RefreshCw, Sun, Home,
  FolderDown, Utensils, Coffee, Thermometer, Tag
} from 'lucide-react';

interface SeagrassPlacematEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const SeagrassPlacematEditorial: React.FC<SeagrassPlacematEditorialProps> = ({
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
          1. Coastal Seagrass Anatomy & Tableware Engineering: The Resilient Bio-Silica Core
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted seagrass placemat is an artisanal, 100% plant-based dining table charger handwoven from the sun-cured saline marsh rushes (<em>Schoenoplectus / Cyperus</em> species) native to the coastal delta wetlands of Bangladesh (Noakhali, Barishal, and the Bay of Bengal coastline). Formed with an organic waxy cutin cuticle, microscopic plant bio-silica reinforcement, and tight concentric spiral or basketweave cordage, genuine seagrass dining mats provide natural heat insulation up to 100°C, zero-rocking structural flatness, natural moisture repellency, and complete circular biodegradability—providing international tableware retailers and hospitality brands a plastic-free, luxury organic alternative to synthetic vinyl and polyester tabletop mats.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In commercial tabletop decor, dining placemats face rigorous functional demands: they must lie completely flat on dining surfaces, protect delicate timber and polished marble tables from hot cookware, resist food grease or beverage spills, and withstand repeated wiping without shedding fibers or warping. Unlike freshwater straw or brittle rush grass, coastal seagrass harvested from the brackish wetlands of southern Bangladesh develops unique biomechanical adaptations that make it the premier choice for luxury dining chargers:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural Cutin Wax Barrier</span>
            <span>The plant epidermis contains a dense cutin waxy layer that naturally repels liquid droplets, food stains, and dust, allowing effortless wipe-clean maintenance with a damp cloth.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Thermal Heat Shield (100°C)</span>
            <span>Cellular micro-cavities act as thermal barriers, easily withstanding piping-hot ceramic soup bowls, dinner plates, and teapots without scorching or transferring heat to table surfaces.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Zero-Rocking Flatness Memory</span>
            <span>High-density coiling combined with heavy mechanical calibration creates a uniform 6mm to 9mm profile that eliminates plate wobbling and edge curl over years of daily service.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Weaving Seagrass Placemat */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-seagrass-placemat.jpg"
            alt="Bangladeshi woman artisan hand-weaving coastal seagrass table placemat in rural cottage workshop in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 1: Master artisan in rural coastal Bangladesh hand-coiling and stitching sun-cured seagrass fiber into an export-grade spiral dining charger with precision tension control.
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Global Retailers Are Transitioning */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Retailers & Hospitality Brands Are Transitioning to Seagrass Placemats
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Over the past four procurement quarters, international homeware retailers, luxury boutique hotels, eco-resorts, and restaurant chains across Europe (Germany, France, Netherlands, UK), North America, and Australia have rapidly expanded their natural seagrass dining collection orders. This strong market shift is driven by five distinct commercial advantages:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Phasing Out Toxic Synthetic PVC & Vinyl Mats</span>
            </div>
            <p>
              Petroleum-derived plastic placemats emit microplastics, release plasticizer odors under hot tableware, and face strict EU non-recyclable polymer taxes. Seagrass placemats offer 100% renewable, carbon-neutral, food-safe dining aesthetics that resonate with eco-conscious consumers.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Sun className="w-4 h-4 text-amber-700" />
              <span>Timeless Warm Natural Patina</span>
            </div>
            <p>
              Freshly harvested seagrass exhibits a vibrant green-sage hue that cures under tropical sunshine into a glowing golden-tan patina. This organic aesthetic coordinates seamlessly with Japandi, Scandinavian Modern, Coastal Hampton, Farmhouse, and Mediterranean tabletop concepts.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Box className="w-4 h-4 text-amber-700" />
              <span>High-Density Shipping Economics (Flat-Pack)</span>
            </div>
            <p>
              Unlike bulky storage baskets, placemats stack completely flat with negligible void space. A single 40ft High Cube ocean container accommodates over 75,000 units, driving shipping logistics costs down to pennies per unit and maximizing importer operating margins.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Utensils className="w-4 h-4 text-amber-700" />
              <span>Acoustic Damping in Fine Dining Settings</span>
            </div>
            <p>
              Commercial hospitality venues value seagrass chargers for their sound-absorbing acoustic dampening. Clattering porcelain, heavy cutlery, and glassware noise is significantly muted, creating an intimate, serene dining atmosphere in restaurants and hotels.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Shapes, Styles & Structural Anatomy */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Shapes, Weaving Styles & Structural Anatomy
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          At Golden Fiber Crafts Ltd., our master artisans engineer four primary commercial silhouettes to satisfy diverse international dining settings, from casual family brunches to formal banquet dining:
        </p>

        <div className="space-y-4 my-5">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              A. Classic Spiral Braided Round Charger (Models: GFC-SPM-002 & GFC-SPM-010)
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Constructed from continuous 2-ply hand-twisted seagrass braids coiled tightly from the center outward and secured with transparent, high-strength monofilament or natural cotton lock-stitching. Standard 38cm (15 inch) diameter comfortably frames standard 26–28cm dinner plates with a generous 5cm organic braided rim showing.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              B. Ribbed Oval Table Placemat (Model: GFC-SPM-003)
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Engineered in an elongated 45cm x 30cm (18 x 12 inch) oval profile that provides dedicated space for both the dinner plate and flanking flatware and wine glasses. The longitudinal ribbing provides superior lateral flexibility while maintaining rigid dimensional memory.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              C. Openwork Radial Lattice Sunburst Charger (Model: GFC-SPM-005)
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Features an intricate botanical design with an openwork petal lattice surrounding a dense coiled center. This style doubles as high-end dining chargers and decorative bohemian wall hangings, capturing premium price points in boutique lifestyle catalogs.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              D. Fabric-Trimmed & Accent Border Placemats (Models: GFC-SPM-006, GFC-SPM-007, GFC-SPM-008, GFC-SPM-009)
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Combines rustic coastal seagrass centers with double-stitched cotton canvas or twill borders (navy blue, midnight black, cream ivory). The 1.5cm fabric binding protects edges against unraveling and provides crisp contemporary contrast popular in coastal European retail collections.
            </p>
          </div>
        </div>

        {/* Embedded Image: Wholesale Showroom Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-seagrass-placemats-wholesale-display.jpg"
            alt="Handcrafted coastal seagrass dining placemat wholesale samples displayed in Bangladesh export showroom"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 2: Export sample collection at Golden Fiber Crafts Ltd. showcasing spiral braided round chargers, ribbed oval mats, openwork sunburst chargers, and fabric-bound placemats ready for bulk container shipment.
          </figcaption>
        </figure>
      </section>

      {/* Section 4: The 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Tidal Estuary to Ocean Container
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          To achieve defect-free container loads that satisfy the rigorous AQL 2.5 quality standards of major retail chains, Golden Fiber Crafts Ltd. operates an integrated 7-stage quality-controlled production workflow:
        </p>

        <ol className="space-y-3 my-5 text-xs sm:text-sm text-stone-700 list-decimal list-inside">
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Sustainable Tidal Harvesting:</strong> Mature coastal wild seagrass reeds (1.2m to 1.8m length) are hand-cut at low tide along the saline marshlands of southern Bangladesh, preserving the root system for natural regeneration.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Sun-Curing & Deseeding:</strong> Stems are rinsed in fresh water to remove surface salt and silt, then laid on raised bamboo drying racks for 48–72 hours of tropical sun-curing until moisture drops from 75% to below 15%.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Strand Grading & Caliber Sorting:</strong> Dried reeds are sorted by hand according to diameter (fine 2mm, medium 3.5mm, thick 5mm), discarding blemished or discolored strands to guarantee uniform weave density.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Braiding & Concentric Coiling:</strong> Skilled artisans hand-plait 2-ply and 3-ply ropes, coiling them tightly onto calibrated rotary jigs while executing continuous lock-stitching to achieve rock-solid structural stability.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Edge Trimming & Fabric Binding:</strong> Edge tails are woven back into the body core and trimmed flush with hot wire or heavy shears. For trimmed models, pre-shrunk cotton canvas tape is stitched with heavy-duty twin-needle machines.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Controlled Chamber Dehumidification (&le; 12%):</strong> Finished mats pass through our temperature-controlled hot-air drying kilns (45°C–50°C) for 6–8 hours to eliminate deep-seated fiber moisture and neutralize biological spores.
          </li>
          <li className="p-3 bg-white rounded-lg border border-stone-200">
            <strong>Individual Barcoding & Moisture-Protected Packing:</strong> Placemats are tied in ribbon-banded retail sets of 4 or 6, packed in poly-sleeved inner bundles, and nested into heavy 5-ply export master cartons with micro-pore silica desiccants.
          </li>
        </ol>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Ltd. is a dedicated OEM/ODM manufacturer catering to private-label brands, hotel suppliers, and retail chains. We offer comprehensive customization across all physical and branding dimensions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-amber-700" />
              <span>Dimensional Specs & Thickness</span>
            </h4>
            <p>
              Custom diameters from 25cm (breakfast saucers) to 42cm (oversized charger plates). Custom thicknesses from sleek 5mm cafe profiles to ultra-heavy 12mm rustic hotel placemats.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Pantone-Matched Color Inlays & Trims</span>
            </h4>
            <p>
              AZO-free color dyeing allows brand-specific concentric bands, alternating spiral coils, or edge binding fabrics dyed to exact client Pantone PMS color codes.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Tag className="w-4 h-4 text-amber-700" />
              <span>Private-Label Branding & Hangtags</span>
            </h4>
            <p>
              Debossed genuine or vegan leather logo patches, laser-engraved wooden buttons, woven cotton fabric labels, and FSC-certified recycled kraft paper retail hangtags with EAN-13 barcodes.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <h4 className="font-bold text-stone-900 flex items-center gap-2">
              <Box className="w-4 h-4 text-amber-700" />
              <span>Retail Ready Packaging Formats</span>
            </h4>
            <p>
              Presentation gift belly-bands with client branding, kraft gift box packaging with die-cut preview windows, or bulk shrink-wrapped sets of 4, 6, or 8 with care instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Assurance & Moisture Testing */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Control, Defect Prevention & AQL 2.5 Standards
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          International maritime transit from Chittagong port to European and North American destination ports spans 25 to 45 days through tropical and temperate humidity shifts. Golden Fiber Crafts enforces rigorous AQL 2.5 General Inspection Level II protocols at every production junction:
        </p>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <Droplet className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block mb-0.5">Moisture Verification (&le; 12% Mandatory Threshold):</strong>
              Every production lot undergoes digital pin-probe moisture meter testing across 5 points (center, mid-ring, outer edge). Any batch exceeding 12.0% moisture is returned to the drying kiln prior to carton packing.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <Compass className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block mb-0.5">Granite Slab Flatness & Tabletop Stability Audit:</strong>
              Placemats are placed on a calibrated precision granite inspection slab. If any corner or edge lifts by more than 2mm, the mat is recalibrated under heated mechanical flat-presses.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <Flame className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block mb-0.5">Singed Fiber & Burr Finishing:</strong>
              Stray fiber ends and prickly burrs are cleanly trimmed and rapidly hot-flame singed to guarantee a silky smooth handfeel that will not snag silk dresses or scratch polished wood tables.
            </div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-stone-900 block mb-0.5">Metal Detection & Stitch Security:</strong>
              100% of finished placemats pass through automated 9-point conveyor metal detectors to ensure zero broken hand-stitching needles or staples are trapped within the dense fiber braids.
            </div>
          </div>
        </div>

        {/* Embedded Image: Quality Control Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/seagrass-placemat-quality-control-moisture-inspection.jpg"
            alt="Quality assurance inspector measuring moisture level and diameter on woven seagrass dining placemat in Bangladesh factory"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 3: Quality control technician measuring moisture content (10.8%) on a finished round seagrass placemat using a digital pin meter alongside dimensional calipers and AQL 2.5 inspection log.
          </figcaption>
        </figure>
      </section>

      {/* Section 7: Ocean Freight Logistics & CBM Economics */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Export Packaging Logistics & Ocean Freight Optimization (CBM Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Because placemats stack flat with zero dead space, container utilization is extraordinarily high. Below are our standard packing configurations for ocean container shipping:
        </p>

        <div className="overflow-x-auto my-5 border border-stone-200 rounded-xl bg-white shadow-2xs">
          <table className="w-full text-xs text-left text-stone-700">
            <thead className="bg-stone-100 text-stone-900 font-serif border-b border-stone-200">
              <tr>
                <th className="p-3">Container Type</th>
                <th className="p-3">Usable Volume (CBM)</th>
                <th className="p-3">Standard Master Cartons</th>
                <th className="p-3">Total Placemat Units</th>
                <th className="p-3">Typical FOB Gross Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-3 font-semibold text-stone-900">20ft Standard FCL</td>
                <td className="p-3">28 – 30 CBM</td>
                <td className="p-3">650 – 700 Cartons</td>
                <td className="p-3 font-bold text-amber-800">31,200 – 33,600 Pcs</td>
                <td className="p-3">~10,500 kg</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-stone-900">40ft Standard FCL</td>
                <td className="p-3">58 – 62 CBM</td>
                <td className="p-3">1,350 – 1,450 Cartons</td>
                <td className="p-3 font-bold text-amber-800">64,800 – 69,600 Pcs</td>
                <td className="p-3">~21,800 kg</td>
              </tr>
              <tr className="bg-amber-50/50">
                <td className="p-3 font-semibold text-stone-900">40ft High Cube (HQ)</td>
                <td className="p-3">68 – 72 CBM</td>
                <td className="p-3 font-bold text-stone-900">1,550 – 1,650 Cartons</td>
                <td className="p-3 font-bold text-emerald-800">74,400 – 79,200 Pcs</td>
                <td className="p-3 font-bold text-stone-900">~24,500 kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-stone-500 italic mt-2">
          Note: Master cartons are constructed from 5-ply double-wall heavy corrugated board (175/150/175 Kraft) with 200 lb/in burst strength, reinforced with plastic corner guards and interior silica moisture gel poles.
        </p>
      </section>

      {/* Section 8: Regulatory Compliance & Certifications */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. International Import Compliance: EU REACH, LFGB Food Safety & Social Ethics
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Because placemats come into close contact with dining utensils and food items, international customs authorities and retail compliance auditors require strict material safety certifications. Golden Fiber Crafts products comply with:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">LFGB Food-Contact Safe</span>
            <span>Tested in accredited laboratories (SGS / Intertek) for zero migration of toxic resins, heavy metals, or chemical plasticizers under German LFGB food contact standards.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">EU REACH & AZO-Free</span>
            <span>All dyeing pigments comply with EU REACH Regulation (EC No 1907/2006). Completely free of carcinogenic aromatic amines, phthalates, and formaldehyde.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Phytosanitary Certified</span>
            <span>Every container is officially fumigated and inspected by the Bangladesh Department of Agricultural Extension, providing certified phytosanitary clearance for swift customs entry.</span>
          </div>
        </div>
      </section>

      {/* Section 9: Ethical Production & Social Impact */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Ethical Artisan Production & Rural Women Empowerment in Bangladesh
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          By partnering with Golden Fiber Crafts Ltd., international brands directly support decentralized fair-trade handicraft clusters across rural Bangladesh:
        </p>

        <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-stone-700 list-disc list-inside">
          <li><strong>Over 85% Women Artisans:</strong> Our weaving decentralized centers empower over 2,500 rural women artisans, enabling financial independence while caring for their families in their native villages.</li>
          <li><strong>Fair Living Wages:</strong> Artisans receive piece-rate wages well above regional minimum standards, with annual festival bonuses and free healthcare camps.</li>
          <li><strong>Zero Waste Ecological Footprint:</strong> 100% of reed trimming offcuts are composted as organic fertilizer for coastal vegetable farmers, achieving zero factory landfill waste.</li>
        </ul>
      </section>

      {/* Section 10: Full Product Specifications Matrix Table */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Export Product Catalog: Seagrass Placemat & Charger Specifications Matrix
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Below is our current production catalog of handcrafted coastal seagrass dining chargers and placemats available for wholesale container export:
        </p>

        <div className="overflow-x-auto my-5 border border-stone-200 rounded-xl bg-white shadow-2xs">
          <table className="w-full text-xs text-left text-stone-700">
            <thead className="bg-stone-100 text-stone-900 font-serif border-b border-stone-200">
              <tr>
                <th className="p-2.5">Model Code</th>
                <th className="p-2.5">Product Name</th>
                <th className="p-2.5">Dimensions</th>
                <th className="p-2.5">Weave Style & Trim</th>
                <th className="p-2.5">Standard MOQ</th>
                <th className="p-2.5">Indicative FOB Price</th>
                <th className="p-2.5">Master Carton</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-002</td>
                <td className="p-2.5 font-medium text-stone-900">Classic Spiral Braided Round Placemat</td>
                <td className="p-2.5">Dia 38cm (15")</td>
                <td className="p-2.5">Tight Spiral Braided Coil</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.20 – $3.40</td>
                <td className="p-2.5">48 Pcs / 0.042 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-003</td>
                <td className="p-2.5 font-medium text-stone-900">Ribbed Oval Braided Seagrass Placemat</td>
                <td className="p-2.5">45 x 30cm (18 x 12")</td>
                <td className="p-2.5">Longitudinal Ribbed Oval</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.50 – $3.80</td>
                <td className="p-2.5">48 Pcs / 0.045 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-004</td>
                <td className="p-2.5 font-medium text-stone-900">Basketweave Rectangular Placemat</td>
                <td className="p-2.5">45 x 32cm (18 x 12.5")</td>
                <td className="p-2.5">Woven Seagrass + Kaisa Reed</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.70 – $3.90</td>
                <td className="p-2.5">48 Pcs / 0.046 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-005</td>
                <td className="p-2.5 font-medium text-stone-900">Openwork Radial Lattice Round Charger</td>
                <td className="p-2.5">Dia 38cm (15")</td>
                <td className="p-2.5">Botanical Radial Petal Lattice</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.60 – $3.80</td>
                <td className="p-2.5">48 Pcs / 0.042 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-006</td>
                <td className="p-2.5 font-medium text-stone-900">Black Accent Ring Round Placemat</td>
                <td className="p-2.5">Dia 38cm (15")</td>
                <td className="p-2.5">Dyed Black Accent Ring Inlay</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.80 – $4.00</td>
                <td className="p-2.5">48 Pcs / 0.042 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-007</td>
                <td className="p-2.5 font-medium text-stone-900">Oval Placemat with Navy Fabric Trim</td>
                <td className="p-2.5">46 x 33cm (18 x 13")</td>
                <td className="p-2.5">Navy Blue Cotton Twill Binding</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$3.10 – $4.50</td>
                <td className="p-2.5">48 Pcs / 0.045 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-008</td>
                <td className="p-2.5 font-medium text-stone-900">Oval Placemat with Cream Cotton Trim</td>
                <td className="p-2.5">46 x 33cm (18 x 13")</td>
                <td className="p-2.5">Cream Canvas Cotton Border</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$3.10 – $4.50</td>
                <td className="p-2.5">48 Pcs / 0.045 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-009</td>
                <td className="p-2.5 font-medium text-stone-900">Round Charger with Black Fabric Border</td>
                <td className="p-2.5">Dia 38cm (15")</td>
                <td className="p-2.5">Black Cotton Tape Hemmed Rim</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.90 – $4.20</td>
                <td className="p-2.5">48 Pcs / 0.042 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-SPM-010</td>
                <td className="p-2.5 font-medium text-stone-900">Artisan Braided Round Dining Charger</td>
                <td className="p-2.5">Dia 38cm (15")</td>
                <td className="p-2.5">Heavy Platted Organic Edge</td>
                <td className="p-2.5">300 Pcs</td>
                <td className="p-2.5 text-emerald-700 font-semibold">$2.60 – $3.70</td>
                <td className="p-2.5">48 Pcs / 0.042 CBM</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-amber-800">GFC-STP-007</td>
                <td className="p-2.5 font-medium text-stone-900">Round Placemat & Coaster Set</td>
                <td className="p-2.5">35cm Mat / 10cm Coaster</td>
                <td className="p-2.5">Matching Placemat + Drink Coaster</td>
                <td className="p-2.5">300 Sets</td>
                <td className="p-2.5 text-emerald-700 font-semibold">FOB Quote on Request</td>
                <td className="p-2.5">24 Sets / 0.038 CBM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[11px] text-stone-500 italic mt-1">
          *Note: Prices are indicative and may change depending on specifications, quantity, supplier, market conditions, and availability. Please contact us for the latest quotation.
        </p>
      </section>

      {/* Section 11: International B2B Buyer FAQ */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <span>11. Frequently Asked Questions (FAQ) for B2B Importers</span>
        </h2>

        <div className="space-y-3 my-6 not-prose">
          {article.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-stone-200 rounded-xl overflow-hidden bg-white transition hover:border-amber-300"
            >
              <button
                onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                className="w-full p-4 text-left font-semibold text-stone-900 flex items-center justify-between gap-4 bg-stone-50/50 hover:bg-stone-50"
              >
                <span className="text-xs sm:text-sm font-serif">{faq.question}</span>
                <span className="text-amber-700 shrink-0">
                  {activeFaqIndex === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {activeFaqIndex === idx && (
                <div className="p-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing CTA Box */}
        <div className="my-8 p-6 bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl shadow-md not-prose flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              Direct Factory Inquiry Desk
            </span>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Ready to Source Custom Seagrass Placemats & Table Chargers?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Receive free sample counter-prototypes, customized OEM catalog sheets, and instant FOB Chittagong container quotations within 24 business hours.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal({ productCode: 'SEAGRASS-PLACEMAT-OEM' })}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-sm shrink-0 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Request Container Quote</span>
          </button>
        </div>
      </section>
    </>
  );
};
