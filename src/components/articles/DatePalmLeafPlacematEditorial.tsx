import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle,
  Box, Compass, HeartHandshake, Scissors, Flame, RefreshCw, Sun, Utensils
} from 'lucide-react';

interface DatePalmLeafPlacematEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const DatePalmLeafPlacematEditorial: React.FC<DatePalmLeafPlacematEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Date Palm Leaf Frond Anatomy & Fiber Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Date Palm Leaf Frond Anatomy & Fiber Engineering: The Lightweight Heat-Resistant Shield
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial handcrafted date palm leaf placemat (or dining charger plate) is an artisanal, 100% plant-based tabletop protective mat handwoven from the sun-cured leaflets of wild date palm trees (<em>Phoenix sylvestris</em>) indigenous to the southwestern river basins of Bangladesh (Jessore, Faridpur, and Khulna). Engineered with a natural cuticular bio-wax barrier, dense vascular bundle cellulose (48%–52%), and sustained thermal tolerance up to 110°C (230°F), genuine date palm leaf placemats deliver natural heat insulation, wipe-clean resilience, and zero microplastic or fiber shedding—providing international hospitality chains and eco-luxury home decor brands an organic, plastic-free alternative to vinyl, polypropylene mesh, and synthetic chargers.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In commercial tabletop presentation and residential hospitality design, dining mats must withstand abrasive plate contact, scalding dishware, and liquid splashes without blistering or losing architectural flatness. Unlike soft woven cotton or open burlap that readily absorb grease and food stains, wild date palm leaves possess unique morpho-anatomical advantages cultivated by Bangladesh’s subtropical delta climate:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">110°C Thermal Insulation</span>
            <span>Natural vascular fiber density absorbs high conductive heat from boiling ceramic soup bowls and hot porcelain plates without scorching or warping.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural Cutin Bio-Wax Barrier</span>
            <span>Hydrophobic leaf epidermis naturally sheds liquid droplets, gravies, and condensation, enabling fast wipe-clean maintenance with a damp sponge.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Zero Microfiber Shedding</span>
            <span>Smooth, tightly braided palm leaflets eliminate surface fuzz or lint transfer onto clean dinnerware and delicate linen tablecloths.</span>
          </div>
        </div>

        {/* Embedded Image: Artisan Weaving Date Palm Leaf Placemat */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-date-palm-leaf-placemat.jpg"
            alt="Bangladeshi woman artisan hand-weaving date palm leaf placemat in rural cottage workshop in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 1: Master artisan in rural Jessore, Bangladesh, hand-braiding sun-cured date palm leaf leaflets into concentric spiral dining charger mats with precise tension control.
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Global Tableware & Hospitality Brands Are Transitioning to Date Palm Leaf */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Global Tableware & Hospitality Brands Are Transitioning to Natural Date Palm Leaf Placemats
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Over the past three procurement cycles, multinational home retail brands (such as Zara Home, IKEA, Target, H&M Home, and West Elm) alongside boutique hotel groups across North America, the UK, Germany, and the Netherlands have accelerated their transition toward wild date palm leaf tabletop accents. This commercial demand is propelled by four distinct strategic catalysts:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Phasing Out Petroleum Vinyl & PVC Table Mats</span>
            </div>
            <p>
              Tightening European packaging and household textile regulations (including EU Extended Producer Responsibility and microplastic discharge mandates) penalize synthetic PVC and polyester placemats. Date palm leaf offers 100% compostable circularity without single-use chemical residues.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Sun className="w-4 h-4 text-amber-700" />
              <span>Radiant Warm Honey-Beige Aesthetic</span>
            </div>
            <p>
              Unlike stark bleached cotton or dull grey synthetics, sun-cured date palm leaves exhibit a radiant honey-blonde patina with subtle natural tonal variegation. This organic hue complements modern Scandinavian, Coastal, Mediterranean, and Japandi dining table styling.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Utensils className="w-4 h-4 text-amber-700" />
              <span>Superior Flat Table Stability & Dish Weight Support</span>
            </div>
            <p>
              Lightweight yet structurally rigid, date palm leaf chargers provide a solid, level footing for ceramic plates, wine stemware, and heavy cutlery. They do not curl at the edges or buckle when exposed to moderate ambient moisture.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm sm:text-base">
              <Package className="w-4 h-4 text-amber-700" />
              <span>High Packing Density & Ocean Freight Savings</span>
            </div>
            <p>
              Date palm leaf placemats nest flat with negligible air void. A standard 40ft High Cube container loads up to 45,600 sets (273,600 placemats), reducing sea freight to mere pennies per piece compared to bulky hollow home accents.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Classifications & Weaving Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Weaving Styles of Date Palm Leaf Placemats & Chargers
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          At Golden Fiber Crafts Limited, our master artisan workshops in Jessore produce eight flagship export models engineered for commercial tabletop durability, visual sophistication, and precise dimensional consistency:
        </p>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6 not-prose">
          {[
            {
              code: 'GFC-DLPM-001',
              name: 'Spiral Ribbed Placemat Set',
              desc: 'Concentric braided spiral coils hand-stitched for heavy dining and hot plate protection.',
              size: '38 cm (15") Round',
              unit: 'Set of 6 (24 sets/ctn)',
              cbm: '0.035 CBM'
            },
            {
              code: 'GFC-DLPM-002',
              name: 'Scalloped Petal Rim Placemat Set',
              desc: 'Solid flat-woven center medallion accented by hand-scalloped petal wave borders.',
              size: '38 cm (15") Round',
              unit: 'Set of 6 (24 sets/ctn)',
              cbm: '0.036 CBM'
            },
            {
              code: 'GFC-DLPM-003',
              name: 'Sunburst Spoke Placemat Set',
              desc: 'Radial openwork palm ribs creating a modern architectural sunburst effect on wood surfaces.',
              size: '38 cm (15") Round',
              unit: 'Set of 6 (24 sets/ctn)',
              cbm: '0.038 CBM'
            },
            {
              code: 'GFC-DLPM-004',
              name: 'Oval Dining Charger Set',
              desc: 'Elongated oval silhouette tailored for formal dinner settings with side silverware space.',
              size: '45 x 30 cm (17.7" x 11.8")',
              unit: 'Set of 6 (20 sets/ctn)',
              cbm: '0.040 CBM'
            },
            {
              code: 'GFC-DLPM-005',
              name: 'Floral Mandala Openwork Set',
              desc: 'Artisanal geometric floral lattice combining tight center weave with openwork lace airiness.',
              size: '38 cm (15") Round',
              unit: 'Set of 6 (24 sets/ctn)',
              cbm: '0.037 CBM'
            },
            {
              code: 'GFC-DLPM-006',
              name: 'Rectangular Ribbed Mat Set',
              desc: 'Orthogonal braided ribs crafted for contemporary rectangular tables and runner pairings.',
              size: '45 x 30 cm (17.7" x 11.8")',
              unit: 'Set of 6 (20 sets/ctn)',
              cbm: '0.039 CBM'
            },
            {
              code: 'GFC-DLPM-007',
              name: 'Fringed Boho Round Placemat Set',
              desc: 'Dense ribbed center ring framed by a raw natural date leaf combed fringe border (4cm).',
              size: '38 cm + 4cm Fringe',
              unit: 'Set of 6 (20 sets/ctn)',
              cbm: '0.042 CBM'
            },
            {
              code: 'GFC-DLPM-008',
              name: 'Looped Lace Border Placemat Set',
              desc: 'Continuous interlocking palm ribbon loops encircling a tightly bound core.',
              size: '38 cm (15") Round',
              unit: 'Set of 6 (24 sets/ctn)',
              cbm: '0.036 CBM'
            }
          ].map((prod, pIdx) => (
            <div key={pIdx} className="bg-white border border-stone-200 rounded-xl p-4 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-mono font-bold text-amber-800">{prod.code}</span>
                  <span className="bg-stone-100 px-2 py-0.5 rounded text-[11px]">{prod.cbm}</span>
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-sm mb-1.5">{prod.name}</h4>
                <p className="text-xs text-stone-600 line-clamp-2 mb-2">{prod.desc}</p>
                <div className="text-[11px] text-stone-500 space-y-0.5 border-t border-stone-100 pt-2 mb-3">
                  <div><strong>Size:</strong> {prod.size}</div>
                  <div><strong>Standard:</strong> {prod.unit}</div>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal({ productCode: prod.code, productName: prod.name })}
                className="w-full py-2 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                Request Quote
              </button>
            </div>
          ))}
        </div>

        {/* Embedded Image: Wholesale Catalog Display */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-date-palm-leaf-placemats-wholesale-display.jpg"
            alt="Wholesale date palm leaf placemat collections displayed on export showroom shelving in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 2: Export showroom display of finished date palm leaf placemats and chargers packed in sets of six with eco-friendly kraft paper branding bands for international retail buyers.
          </figcaption>
        </figure>
      </section>

      {/* Section 4: The 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Wild Palm Groves to Export Master Carton
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Every export-grade date palm leaf placemat produced by Golden Fiber Crafts Limited follows a rigorous, non-chemical seven-stage processing pipeline ensuring caliper uniformity, clean edges, and long-term biological stability:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              step: '01',
              title: 'Sustainable Seasonal Frond Pruning & Collection',
              desc: 'During the dry winter and pre-monsoon seasons, mature palm fronds are carefully pruned from wild Phoenix sylvestris trees in Jessore without damaging the core apical bud. This non-destructive pruning supports tree health while yielding strong, mature leaf blades.'
            },
            {
              step: '02',
              title: 'Spine Stripping, Rib Slicing & Width Calibration',
              desc: 'Artisans strip the individual leaflets from the thorny woody midrib using specialized hand-draw blades. Leaflets are mechanically graded by width (4mm to 8mm caliber) and thickness, sorting prime supple strands for fine tabletop braids.'
            },
            {
              step: '03',
              title: '5-Day Solar Curing & Low-Heat Dehydration',
              desc: 'Split leaf ribbons are laid out evenly on raised bamboo racks under direct delta sunshine for 100 to 120 hours. Solar UV light naturally bleaches chlorophyll into a lustrous golden honey hue while reducing internal vegetative moisture below 11%.'
            },
            {
              step: '04',
              title: 'Artisanal Hand-Braiding & Coil Stitching',
              desc: 'Skilled women artisans braid multiple leaf strands into continuous flat ribbons, then coil them tightly from the center outward around wooden sizing templates. Concealed stitches of fine natural cotton or unbleached jute yarn lock each row securely.'
            },
            {
              step: '05',
              title: 'Caliper Trimming, Edge Binding & Surface Shaving',
              desc: 'Placemat perimeters undergo ultrasonic blade trimming to eliminate loose tips. The final binding stitch is locked with a reverse knot, and micro-shears trim any tiny leaf spurs to ensure a completely smooth handfeel.'
            },
            {
              step: '06',
              title: 'Low-Heat Hydraulic Flattening & Leveling',
              desc: 'Finished placemats are transferred to temperature-controlled flat platen presses (65°C for 8 seconds under light pneumatic pressure). This relaxes residual fiber tension and guarantees dead-flat contact with table surfaces without rocking.'
            },
            {
              step: '07',
              title: 'Digital Moisture Pin QC (<11%), Silica Gel Packing & Fumigation',
              desc: 'Every batch is verified with pin-type electrical resistance meters. Placemat sets of six are banded with unbleached kraft paper, packed inside poly moisture-barrier bags with clay desiccants, and container-fumigated (ISPM 15 compliant) before port dispatch.'
            }
          ].map((s, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="font-serif font-bold text-amber-800 text-lg sm:text-xl shrink-0 w-8">{s.step}</span>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base mb-1">{s.title}</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Image: Raw Palm Leaves Sun Curing */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/raw-date-palm-leaf-fronds-sun-curing-bangladesh.jpg"
            alt="Natural wild date palm leaves sun-curing on raised bamboo racks in rural village courtyard in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 3: Solar curing and natural dehydrating of wild date palm leaf ribbons on elevated bamboo drying racks in rural Jessore, Bangladesh.
          </figcaption>
        </figure>
      </section>

      {/* Section 5: OEM / ODM Customization Options for Private-Label Brands */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for Private-Label Tableware Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Golden Fiber Crafts Limited operates as a direct OEM and private-label manufacturing partner. We engineer bespoke tableware collections tailored to our clients' precise retail packaging, dimensional tolerances, and aesthetic guidelines:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-serif font-bold text-stone-900 text-base block text-amber-950">
              Dimensional & Silhouette Tailoring
            </span>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              <li><strong>Standard Placemats:</strong> 35 cm, 38 cm, and 40 cm circular diameters.</li>
              <li><strong>Coasters & Trivets:</strong> 10 cm mug coasters and 20 cm kettle trivets.</li>
              <li><strong>Dining Chargers:</strong> 45 x 30 cm oval and rectangular table formats.</li>
              <li><strong>Matching Table Runners:</strong> 120 x 35 cm and 150 x 35 cm coordinated runners.</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-serif font-bold text-stone-900 text-base block text-amber-950">
              Branding, Tagging & Retail Ready Packaging
            </span>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              <li><strong>Belly Bands:</strong> 100% recycled unbleached kraft bands with 4C soy-ink printing.</li>
              <li><strong>Embossed Badges:</strong> Genuine vegetable-tanned or vegan apple leather logo rivets.</li>
              <li><strong>Sewn Labels:</strong> Woven organic cotton interior care and origin labels.</li>
              <li><strong>FSC Hangtags & Barcodes:</strong> Pre-applied EAN-13, UPC, and Amazon FBA carton labels.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6: Food-Contact Safety & Heat Tolerance (110°C) */}
      <section id="food-contact-compliance" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Food-Contact Safety, Heat Tolerance (110°C) & Chemical-Free Curing Standards
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Because placemats live in intimate proximity to dining utensils, glassware, and hot food dishes, chemical inertness and non-toxicity are non-negotiable. Golden Fiber Crafts Limited adheres to the strictest international food-contact safety standards:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">EU 1935/2004 & LFGB</span>
            <span>Tested for overall and specific chemical migration, ensuring zero transfer of volatile substances onto bread or food items.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">FDA 21 CFR 176.170</span>
            <span>Complies with US Food and Drug Administration guidelines for dry and aqueous food contact surfaces without synthetic leachables.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Zero Synthetic Lacquers</span>
            <span>No polyurethane, polyurethane clear-coats, formaldehyde glues, or toxic heavy-metal sealants applied to the fibers.</span>
          </div>
        </div>
      </section>

      {/* Section 7: Quality Control, Caliper Flatness & Moisture Defense (<11%) */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Quality Control, Caliper Flatness & Moisture Defense (&lt;11%): The AQL 2.5 Standard
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          All production orders are audited under strict ISO 2859-1 (AQL 2.5 Major / 4.0 Minor) inspection regimes. Our QA protocols target five critical checkpoints:
        </p>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">Pin-Meter Moisture Threshold</span>
            <span className="font-mono text-amber-800 font-bold">Strictly &le; 10% – 11% RH</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">Dimensional Tolerance (Diameter & Width)</span>
            <span className="font-mono text-amber-800 font-bold">&plusmn; 0.5 cm Caliper Max</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">Flat Surface Rocking Variance</span>
            <span className="font-mono text-amber-800 font-bold">&le; 2 mm on Granite Flatbed</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between">
            <span className="font-semibold text-stone-900">Color Grading & Homogeneity</span>
            <span className="font-mono text-amber-800 font-bold">Natural Honey-Beige (&le;5% tonal variation)</span>
          </div>
        </div>

        {/* Embedded Image: Quality Control Moisture Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/date-palm-leaf-placemat-quality-control-moisture-inspection.jpg"
            alt="Quality control inspector testing date palm leaf placemat moisture with digital pin meter in clean export facility in Bangladesh"
            className="w-full h-auto object-cover max-h-[460px]"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 text-center bg-stone-100/70 w-full border-t border-stone-200">
            Figure 4: Quality control inspector in our Chattogram export facility testing finished date palm leaf placemats with a calibrated pin-type moisture meter, ensuring moisture levels remain strictly below 11% before hermetic packaging.
          </figcaption>
        </figure>
      </section>

      {/* Section 8: Packaging Logistics & Ocean Freight Optimization */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Packaging Logistics & Ocean Freight Optimization: The Nested Stacking Matrix (CBM Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Because date palm leaf placemats are thin and completely planar, they offer some of the highest volumetric container efficiencies in the home decor category. Each master carton of 40 x 40 x 22 cm accommodates 24 sets (144 individual placemats) with zero dead space:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs text-center">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">20ft Container (FCL)</span>
            <span className="text-lg font-serif font-bold text-stone-900 block my-1">18,000 Sets</span>
            <span className="text-stone-500">108,000 Placemats | 750 Cartons</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs text-center">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">40ft GP Container</span>
            <span className="text-lg font-serif font-bold text-stone-900 block my-1">37,200 Sets</span>
            <span className="text-stone-500">223,200 Placemats | 1,550 Cartons</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs text-center">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">40ft High Cube (HQ)</span>
            <span className="text-lg font-serif font-bold text-stone-900 block my-1">45,600 Sets</span>
            <span className="text-stone-500">273,600 Placemats | 1,900 Cartons</span>
          </div>
        </div>
      </section>

      {/* Section 9: Why Source Date Palm Leaf Directly From Bangladesh */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Why Source Date Palm Leaf Placemats Directly From Bangladesh (0% Duty GSP Advantage)?
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Bangladesh offers distinct structural advantages for international tabletop importers compared to other sourcing hubs in China, Vietnam, or India:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-serif font-bold text-stone-900 text-base block text-amber-950">
              0% Tariff Duty Under GSP & UK DCTS
            </span>
            <p className="text-stone-600">
              Imports of handcrafted palm leaf table accessories into the European Union, United Kingdom, Canada, and Japan enter with 0% customs duty under Generalized Scheme of Preferences (GSP / EBA / DCTS), creating immediate 6% to 12% margin savings over competing Asian suppliers.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-serif font-bold text-stone-900 text-base block text-amber-950">
              Generational Jessore Weaving Clusters
            </span>
            <p className="text-stone-600">
              Jessore and Khulna are globally renowned for their historic date palm cottage handicrafts. Generations of rural artisans possess unmatched mastery of hand-braiding tension, ensuring flawless concentric geometry and knot durability that cannot be replicated by automated machines.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Sustainable Pruning & Rural Women Empowerment */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Sustainable Pruning, Zero Deforestation & Rural Women Artisan Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Date palm leaf harvesting is fundamentally sustainable and non-destructive. Palm trees are never felled or stripped bare; local farmers selectively prune only lower, mature outer fronds during the annual winter sap tapping cycle. This practice stimulates vigorous new central leaf growth while converting what was historically agricultural waste into high-value export handicrafts.
        </p>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
          Over 85% of our weaving workforce comprises rural women in decentralized cottage cooperatives across Jessore and Faridpur. By establishing local collection points and providing fair, transparent piece-rate wages directly to artisan bank accounts, Golden Fiber Crafts Limited empowers rural women with financial independence, healthcare funds, and children’s education support without uprooting them from their village communities.
        </p>
      </section>

      {/* Section 11: Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Buyer Due Diligence Audit Checklist for Tableware & Tabletop Procurement Teams
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          When qualifying a manufacturing supplier for natural date palm leaf dining accessories, procurement teams should verify the following audit parameters:
        </p>

        <div className="space-y-2.5 my-5 text-xs sm:text-sm text-stone-700">
          {[
            'Verified leaf moisture under 11% using calibrated digital electrical pin resistance meters.',
            'Documented compliance with EU 1935/2004, LFGB, and FDA 21 CFR 176.170 indirect food contact safety.',
            'Flatness testing on precision granite surface tables: zero edge curl, wobble, or rocking variance exceeding 2mm.',
            'Pre-shipment phytosanitary fumigation certification compliant with international ISPM 15 standards.',
            'Heavy-duty 5-ply double-wall export master cartons with inner polyethylene vapor barrier liners.',
            'Complete social ethics audit compliance: zero child labor, transparent fair wages, and safe artisan working conditions.'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-stone-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12: Step-by-Step International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Step-by-Step International Procurement Guide (Inquiry to FOB Chattogram)
        </h2>

        <div className="space-y-3 my-5 text-xs sm:text-sm text-stone-700">
          {[
            {
              phase: 'Step 1: Product Selection & Tech Pack Inquiry',
              details: 'Select models from our GFC-DLPM catalog or submit your bespoke dimensions, custom weave styles, packaging specifications, and target order volumes.'
            },
            {
              phase: 'Step 2: Rapid Counter-Sample Development (5–7 Days)',
              details: 'Our artisan studio crafts physical counter-samples for your tactile evaluation, dispatched via DHL / FedEx Express with full door-to-door tracking.'
            },
            {
              phase: 'Step 3: Commercial Contract & Proforma Sign-Off',
              details: 'Review and approve formal proforma invoice with locked FOB Chattogram / CIF pricing, production timeline, and payment terms (standard 30% T/T deposit, 70% against B/L copy or Irrevocable L/C at sight).'
            },
            {
              phase: 'Step 4: Mass Production & In-Line QC Audits',
              details: 'Artisan weaving commences under strict in-line supervision. Digital moisture checks, caliper checks, and visual grading occur continuously throughout the 25–35 day production window.'
            },
            {
              phase: 'Step 5: Final Pre-Shipment Inspection (AQL 2.5)',
              details: 'Our QA team conducts comprehensive final inspection. Buyer-appointed third-party inspection agencies (SGS, Bureau Veritas, Intertek) are warmly welcomed.'
            },
            {
              phase: 'Step 6: Ocean Freight Dispatch & Customs Document Handover',
              details: 'Containers are loaded at our export depot, sealed, fumigated, and dispatched from Chattogram Seaport (BDCGP) with complete original documentation (B/L, GSP Form A / REX, Phytosanitary, Packing List).'
            }
          ].map((st, idx) => (
            <div key={idx} className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
              <span className="font-serif font-bold text-amber-900 block mb-1 text-sm">{st.phase}</span>
              <p className="text-stone-600">{st.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 13: Export Specifications, Customization Matrix & Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Export Specifications, Customization Matrix & Container Logistics Tables
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

      {/* Section 14: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-700" />
          14. Frequently Asked Questions (FAQ) for B2B Retail & Wholesale Importers
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
                  className="w-full p-4 text-left font-semibold text-stone-900 flex items-center justify-between gap-3 text-sm sm:text-base hover:bg-stone-50 transition-colors cursor-pointer"
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
            Ready to Source Custom Date Palm Leaf Placemats Directly from Bangladesh?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Request our complete wholesale tableware catalog, custom OEM tech pack assistance, or rapid physical prototype samples delivered to your office in 5 to 7 business days.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal({ productCode: 'OEM-DATE-PALM-PLACEMAT' })}
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Request B2B Quote & Samples
            </button>
            <a
              href="mailto:info@goldenfibercraftsltd.com?subject=Wholesale%20Date%20Palm%20Leaf%20Placemats%20Inquiry"
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
