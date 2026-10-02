import React from 'react';
import { Article } from '../../types/article';
import { 
  CheckCircle2, ShieldCheck, Droplet, Truck, Globe2, 
  HelpCircle, ChevronDown, ChevronUp, Mail, FileText, 
  Sparkles, Package, Layers, Anchor, Award, CheckSquare, AlertCircle
} from 'lucide-react';

interface KaisaGrassBasketEditorialProps {
  article: Article;
  activeFaqIndex: number | null;
  setActiveFaqIndex: (index: number | null) => void;
  onOpenQuoteModal: (productCodeOrData?: string | any) => void;
}

export const KaisaGrassBasketEditorial: React.FC<KaisaGrassBasketEditorialProps> = ({
  article,
  activeFaqIndex,
  setActiveFaqIndex,
  onOpenQuoteModal
}) => {
  return (
    <>
      {/* Section 1: Fiber Anatomy & Botanical Material Engineering */}
      <section id="fiber-anatomy-engineering" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          1. Wild Riverbank Kaisa Grass Anatomy & Botanical Material Engineering: The Wild Bast Advantage
        </h2>
        
        {/* GEO/AEO Direct Answer Snippet Callout */}
        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Definition:</strong>
          A commercial kaisa grass basket (known in the Netherlands and Germany as <em>kaisa mand</em> or <em>kaisa-gras korb</em>) is a rigid, plant-based storage container hand-coiled from the resilient wild perennial riverbank grass (<em>Saccharum spontaneum</em>, locally termed Kans or Kaisa grass) indigenous to the alluvial floodplains of Bangladesh. Bound and interlocked with fine, high-tensile Bangladeshi Tosha jute twine, kaisa grass baskets provide unmatched structural upright firmness, a high strength-to-weight ratio, zero plastic additives, and natural honey-straw luster—offering European homeware retailers an EU PPWR-compliant circular home organization solution that eliminates synthetic plastic containers.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          In European homeware, fair-trade, and sustainable living retail markets, kaisa grass represents the highest benchmark for sturdy, self-supporting natural fiber baskets. Botanically classified as <em>Saccharum spontaneum</em>, kaisa is an indigenous wild reed grass that flourishes in dense clusters along the silt-rich sandbars and alluvial riverbanks of the Padma, Jamuna, and Meghna rivers across northern and central Bangladesh. Unlike soft, pliable bast fibers such as unspun jute or cotton that require internal metal wireframes to maintain cylindrical verticality, kaisa grass possesses thick, solid, cylindrical stalks reinforced with a dense natural siliceous epidermis and 58%–62% crystalline cellulose.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">58%–62% Cellulose & Bio-Silica</span>
            <span>Natural silica-rich outer sheath prevents sidewall buckling and structural sagging under heavy dry domestic storage loads up to 25 kg.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Riverbank Moisture Resilience</span>
            <span>Evolved on seasonal floodplains, dried kaisa fibers resist humidity fluctuations and fungal spore germination during sea voyages.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-amber-800">Natural Sun-Bleached Sheen</span>
            <span>Sun-cured honey-straw color that does not oxidize or yellow prematurely, creating a pristine Scandinavian & Japandi decor finish.</span>
          </div>
        </div>

        {/* Embedded Image: Raw Fiber Harvest & Bamboo Sun-Curing */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/raw-wild-kaisa-grass-fiber-harvest-bangladesh.jpg"
            alt="Raw wild riverbank kaisa grass stalks harvested in Bangladesh sun-drying on bamboo mats for export basket manufacturing"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Wild riverbank kaisa grass stalks harvested along northern riverbanks in Bangladesh, sun-drying on bamboo slats prior to artisan grading.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">WILD KAISA GRASS HARVEST</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 2: Why Dutch & European Retailers Are Switching */}
      <section id="why-retailers-switch" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          2. Why Dutch & European Sustainable Retailers Are Transitioning to Kaisa Grass
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Direct Answer:</strong>
          Retail buyers across the Netherlands (such as Dille & Kamille, Wereldwinkels, Fair Trade Original, CASA, and Blokker) and broader Western Europe are expanding their kaisa grass basket collections due to three major commercial drivers: (1) full compliance with EU Packaging and Packaging Waste Regulations (PPWR) banning single-use polymers; (2) consumer preference for authentic fair-trade, handmade circular decor; and (3) structural firmness that outperforms synthetic rope and soft seagrass baskets without plastic wire cores.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          The Netherlands has historically stood at the vanguard of ethical international trade, pioneering the fair-trade movement and importing authentic Bangladeshi natural fiber handicrafts since the 1970s. In contemporary Dutch interior design, the aesthetic movement known as <em>Rustiek Minimalisme</em> (Rustic Minimalism) and Japandi relies heavily on tactile natural materials with warm undertones. Kaisa grass baskets provide several critical competitive advantages for European retailers:
        </p>

        <ul className="text-sm sm:text-base text-stone-700 space-y-2 mt-3 list-disc pl-5">
          <li><strong>Structural Self-Support:</strong> Unlike soft coiled cotton cords or flatwoven seagrass baskets that slump when empty on retail shelves, kaisa grass coiled walls maintain crisp, architectural vertical lines that look immaculate in store displays.</li>
          <li><strong>Zero Chemical Resins or Glues:</strong> Traditional coiling uses only mechanical friction and tight binding with biodegradable Tosha jute yarn, ensuring zero VOC emission or formaldehyde exposure for baby nurseries and kitchen pantries.</li>
          <li><strong>EU PPWR & Circular Economy Immunity:</strong> As the European Union tightens bans on non-recyclable composite packaging and plastic organizers, 100% compostable wild kaisa grass shields retail chains from punitive eco-tariffs.</li>
          <li><strong>High Retail Margin Potential:</strong> Imported at direct factory FOB rates (typically US$1.35 to $5.20 per unit/set), European retail shelf prices routinely command €14.95 to €39.95, delivering healthy gross margins exceeding 60%–70%.</li>
        </ul>
      </section>

      {/* Section 3: Commercial Classifications & Structural Styles */}
      <section id="commercial-classifications" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          3. Commercial Classifications & Structural Weaving Styles of Kaisa Grass Baskets
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited manufactures five primary commercial classifications of kaisa grass storage products, engineered to meet specific retail room functions across European homes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">1. Lidded Cylindrical Canisters & Hampers (Set of 3)</span>
            <p>Featuring a flush drop-in lid with a hand-tied woven knot knob. Engineered with graduated diameters (S: 22x20cm, M: 28x25cm, L: 34x30cm) for seamless nesting. Designed for laundry, bathroom storage, and dry utility organization.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">2. Two-Tone Color-Dipped Storage Bins</span>
            <p>The lower 30%–40% of the basket base is dipped or bound with AZO-free reactive dyed white, sage green, or deep charcoal jute thread, creating a striking Scandinavian colorblock aesthetic popular in Dutch boutiques.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">3. Low-Profile Oval Bread & Fruit Trays</span>
            <p>Shallow, boat-shaped baskets with reinforced rim selvedges (e.g. 28x20x8 cm). Perfect for artisan bakeries, dining tables, and kitchen counters, safe for direct contact with dry bread rolls and whole fruits.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1.5">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">4. Tall Laundry Bins with Braided Ear Handles</span>
            <p>High-capacity upright cylindrical hampers standing up to 48 cm tall, equipped with thick, reinforced integrated ear handles capable of supporting 20+ kg of wet or dry linens without handle tear-out.</p>
          </div>
        </div>

        {/* Embedded Image: Artisan Hand-Weaving in Cottage Workshop */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/bangladeshi-artisan-weaving-kaisa-grass-basket.jpg"
            alt="Bangladeshi woman artisan skillfully hand-weaving a kaisa grass storage basket with natural jute twine in village workshop"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Artisanal hand-coiling technique: Bangladeshi artisan tightly wrapping wild kaisa grass bundles with fine Tosha jute twine in an open-air village workshop.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">ARTISAN CRAFTSMANSHIP</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 4: 7-Stage Manufacturing Process */}
      <section id="manufacturing-process" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          4. The 7-Stage Manufacturing Process: From Riverbank Harvest to Port of Rotterdam
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          At Golden Fiber Crafts Limited, every export-grade kaisa grass basket undergoes a disciplined 7-stage manufacturing process engineered for European retail reliability and zero-mold ocean transit:
        </p>

        <div className="space-y-3.5 my-6 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-stone-900 block text-sm">Post-Monsoon Riverbank Wild Harvesting (Sept–Nov)</strong>
              <span>Wild grass stalks are manually harvested at peak maturity when stalks reach 1.8–2.4 meters with maximum stalk density and tensile rigidity along the Padma and Jamuna sandbars.</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-stone-900 block text-sm">Open-Air Bamboo Rack Sun-Curing</strong>
              <span>Harvested stalks are spread across elevated horizontal bamboo drying platforms in direct rural sunlight for 5 to 7 days until core stalk moisture drops below 11%, hardening the outer siliceous shell.</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-stone-900 block text-sm">Diameter Sorting & Bundle Grading</strong>
              <span>Stalks are sorted by diameter (fine 3–5mm stalks for small baskets and table chargers; robust 6–9mm stalks for large structural hampers) ensuring consistent wall thickness across all production batches.</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-stone-900 block text-sm">Artisanal Hand-Coiling & Jute Twine Interlocking</strong>
              <span>Skilled rural artisan women wrap bundled kaisa stalks spirally, stitching every concentric coil to the preceding row with continuous, high-strength natural Tosha jute twine (or AZO-free dyed thread).</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
            <div>
              <strong className="text-stone-900 block text-sm">Trimming, Dimensional Calibration & Handle Attachment</strong>
              <span>Protruding grass fibers are micro-singed or hand-sheared. Graduated wooden molds ensure precise circumference tolerances (+/- 1.0%), and reinforced handles or fitted lids are integrated.</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">6</span>
            <div>
              <strong className="text-stone-900 block text-sm">Hot-Air Dehumidification Chambers & Digital Moisture Audit</strong>
              <span>Finished baskets spend 18–24 hours inside dedicated hot-air circulation chambers (45°C–50°C) until fiber moisture verifies strictly below 10%–12% via digital pin meters.</span>
            </div>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 mt-0.5">7</span>
            <div>
              <strong className="text-stone-900 block text-sm">Master Carton Packing & ISPM 15 Phytosanitary Fumigation</strong>
              <span>Baskets are nested into Sets of 3, sealed inside heavy-duty virgin polyethylene barrier liners with 100g industrial silica desiccants, and packed in heavy 5-ply cartons for ocean container stuffing.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: OEM / ODM Customization Options */}
      <section id="oem-customization" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          5. OEM / ODM Customization Options for European Private-Label Brands
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Golden Fiber Crafts Limited operates full contract manufacturing capabilities, allowing European homeware chains, department stores, and catalog retailers to develop bespoke, private-label collections:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 text-xs text-stone-700">
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Custom Dimensions & Modular Shelf Sizing</span>
            <p>We calibrate custom basket footprints to slide flush into standard European modular storage cubbies, including 33 x 33 x 38 cm IKEA Kallax systems and 30 x 30 cm shelving units, maximizing consumer adoption.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Pantone FHI Yarn Dyeing & Dipped Accents</span>
            <p>We match binding threads and half-dipped bottom bases to your seasonal Pantone Fashion, Home + Interiors (FHI) color standards using certified non-toxic AZO-free reactive dyes compliant with EU REACH regulations.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Fabric Liners & Hardware Variations</span>
            <p>Add removable, washable 100% GOTS-certified organic cotton muslin or linen drawstring liners. Handle options include genuine vegetable-tanned leather straps, vegan leather tabs, or coiled rope ear loops.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2">
            <span className="font-bold text-stone-900 text-sm block text-amber-900">Retail Packaging & GS1 EAN-13 Barcodes</span>
            <p>Every set can be pre-packaged with custom FSC-certified recycled kraft belly bands, debossed leather logo corner badges, and GS1-compliant EAN-13 barcode stickers pre-applied for direct placement on Dutch store shelves.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Quality Control, AQL 2.5 Standard & Strict Moisture Defense */}
      <section id="quality-control" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          6. Quality Control, AQL 2.5 Standard & Strict Moisture Defense (&lt;12%)
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-amber-600 bg-amber-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-amber-950 font-semibold block mb-1">Quality Assurance Protocol:</strong>
          Moisture defense is the single most critical quality benchmark when exporting natural plant fiber handicrafts from humid subtropical climates like Bangladesh across 22–26 maritime days to Northern Europe. At Golden Fiber Crafts, zero cartons are sealed without passing a calibrated 3-point digital electrical resistance pin-probe moisture test showing strictly below 10%–12% relative fiber moisture.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Our in-house Quality Assurance department executes comprehensive batch auditing governed by the international <strong>ISO 2859-1 (AQL 2.5 General Inspection Level II)</strong> standard:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Moisture Audit (&lt;12%)</span>
            <span>Digital probe testing across basket base, walls, and lid rim. Any unit exceeding 12% is routed back to dehumidification chambers.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">Conveyor Needle Detection</span>
            <span>All woven handicrafts pass through digital metal-detector tunnels, ensuring zero broken needle tips or wire fragments are embedded.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs">
            <span className="font-bold text-stone-900 text-sm block mb-1 text-emerald-800">ISPM 15 Fumigation</span>
            <span>Container drayage at Chattogram Seaport includes official phytosanitary fumigation certified under international ISPM 15 protocols.</span>
          </div>
        </div>

        {/* Embedded Image: Quality Control & Digital Moisture Inspection */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/kaisa-grass-basket-quality-control-moisture-inspection.jpg"
            alt="Quality control inspector testing moisture content of stacked kaisa grass baskets with a digital pin-probe moisture meter"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Rigorous moisture inspection: Quality control inspector inserting digital pin-probes into finished kaisa baskets to verify fiber moisture below 10%–12%.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">AQL 2.5 QC AUDIT</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 7: Packaging Logistics & Ocean Freight Optimization */}
      <section id="packaging-logistics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          7. Packaging Logistics & Ocean Freight Optimization to Port of Rotterdam (CBM Calculations)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Because ocean shipping from South Asia to Western Europe is billed primarily on volumetric cubic displacement (CBM) rather than deadweight, shipping hollow single baskets would inflate freight charges by over 200%. Golden Fiber Crafts engineers graduated nesting dimensions where three baskets fit inside one another like Russian matryoshka dolls:
        </p>

        <div className="my-5 p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs text-stone-700 space-y-2">
          <div className="font-bold text-stone-900 text-sm text-amber-900">The Power of Nesting Mathematics (Set of 3 vs Singles):</div>
          <p>• <strong>Single Pack:</strong> Small (0.015 CBM) + Medium (0.025 CBM) + Large (0.038 CBM) = <strong>0.078 CBM</strong> for 3 separate items.</p>
          <p>• <strong>Nested Set of 3:</strong> Small nests into Medium, Medium nests flush into Large = <strong>0.025 CBM</strong> total carton displacement.</p>
          <p className="text-emerald-800 font-semibold">Result: <strong>68% reduction in ocean freight CBM</strong>, cutting freight cost per individual basket to under US$0.18–$0.25 on full container loads departing for Rotterdam.</p>
        </div>

        {/* Embedded Image: Wholesale Display & Master Carton Packaging */}
        <figure className="my-6 rounded-xl overflow-hidden border border-stone-200 shadow-xs bg-stone-50 flex flex-col items-center">
          <img
            src="/images/blog/custom-kaisa-grass-baskets-wholesale-display.jpg"
            alt="Wholesale showroom display of finished handcrafted kaisa grass baskets with clean export packaging for European retailers"
            className="w-full h-auto max-h-[560px] object-contain mx-auto block"
          />
          <figcaption className="w-full p-3 text-xs text-stone-500 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
            <span>Wholesale export display of nested kaisa grass storage baskets with fitted lids, labeled with FSC kraft tags ready for container loading.</span>
            <span className="font-mono text-[11px] text-amber-700 font-semibold">EXPORT SHOWROOM DISPLAY</span>
          </figcaption>
        </figure>
      </section>

      {/* Section 8: Why Source Kaisa Grass Baskets Directly From Bangladesh (0% GSP Duty) */}
      <section id="why-bangladesh" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          8. Why Source Kaisa Grass Baskets Directly From Bangladesh (0% GSP Duty Advantage)
        </h2>

        <div className="my-4 p-4 rounded-xl border-l-4 border-emerald-600 bg-emerald-50/80 text-stone-800 text-sm leading-relaxed">
          <strong className="text-emerald-950 font-semibold block mb-1">0% European Customs Duty Benefit:</strong>
          Handcrafted natural fiber lifestyle crafts (HS Code 4602.19) manufactured in Bangladesh and imported into the Netherlands, Germany, France, or any EU member state enter with <strong>0% customs import duty</strong> under the European Union’s Generalized Scheme of Preferences (GSP) and Everything But Arms (EBA) agreement. Compared to suppliers from non-GSP nations (such as China or Vietnam, which incur 4.5% to 6.5% standard tariffs), sourcing directly from Golden Fiber Crafts Ltd. in Bangladesh provides European buyers with an automatic landed cost advantage.
        </div>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-4">
          Beyond trade tariff savings, Bangladesh holds a natural monopoly on wild kaisa grass. The plant thrives exclusively along the silt riverbanks created by the Himalayan meltwater and monsoon cycles. Artisans in northern districts have inherited specialized coiling techniques across generations, ensuring a level of tight weave symmetry and knot density that automated factories in other nations cannot replicate.
        </p>
      </section>

      {/* Section 9: Sustainable Harvesting & Rural Women Empowerment */}
      <section id="sustainable-ethics" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          9. Sustainable Harvesting, Zero Waste & Rural Women Artisan Empowerment
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Wild kaisa grass harvesting is fundamentally regenerative. As a perennial wild grass, cutting the mature stalks after the monsoon season actually promotes vigorous new root growth and soil stabilization, preventing riverbank erosion without requiring chemical fertilizers, synthetic pesticides, or artificial irrigation.
        </p>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
          Behind every basket manufactured by Golden Fiber Crafts Limited is our decentralized artisan cooperative network across rural Nilphamari, Rangpur, Bogura, and Kishoreganj. Over 10,000 rural women artisans—many of whom are primary household breadwinners—earn fair living wages above regional statutory minimums, with flexible cottage schedules that allow them to work within their community villages. By partnering directly with our export desk, European retailers contribute directly to United Nations Sustainable Development Goals (SDG 1: No Poverty, SDG 5: Gender Equality, and SDG 12: Responsible Consumption).
        </p>
      </section>

      {/* Section 10: Buyer Due Diligence Audit Checklist */}
      <section id="buyer-due-diligence" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          10. Buyer Due Diligence Audit Checklist for European Sourcing Teams
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Before issuing purchase orders for natural fiber handicrafts, European procurement teams should verify that prospective factory partners comply with these core operational benchmarks:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 text-xs text-stone-700">
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Fiber Moisture Guarantee:</strong> Calibrated digital pin-meter readings below 12% before carton closure.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Chemical Safety:</strong> Certified AZO-free reactive dyes with zero prohibited phthalates under EU REACH.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Conveyor Needle Tunnel:</strong> 100% metal detection for zero wire or broken needle fragments.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Nesting Dimensional Fit:</strong> Tight, graduated tolerance (+/- 1.0%) enabling flush nesting without carton bulging.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Phytosanitary Fumigation:</strong> Official ISPM 15 certificate issued at Chattogram Seaport before sailing.</span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5">
            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Social Compliance Auditing:</strong> Ethical fair-wage compensation and zero child or forced labor verification.</span>
          </div>
        </div>
      </section>

      {/* Section 11: International Procurement Guide */}
      <section id="procurement-guide" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          11. Step-by-Step International Procurement Guide (Inquiry to FOB Rotterdam/Chattogram)
        </h2>

        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Procuring container-load volume from Golden Fiber Crafts Limited is streamlined into six transparent milestones:
        </p>

        <div className="space-y-3 my-5 text-xs text-stone-700">
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 1: Technical RFQ & Target Sizing</strong>
            <span>Submit your target basket dimensions, set nesting requirements (Set of 2 or 3), accent color references (Pantone FHI), and projected container volume.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 2: Physical Counter-Sample Prototyping (5–7 Days)</strong>
            <span>Our master artisans hand-weave physical prototypes with your custom tags and dimensions, dispatched via DHL or FedEx Express directly to your European headquarters.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 3: Proforma Invoice (PI) & Commercial Sign-off</strong>
            <span>Upon physical sample sign-off, a formal Proforma Invoice is issued confirming FOB Chattogram or CIF Port of Rotterdam pricing, lead times, and payment terms (30% T/T deposit or Irrevocable L/C at Sight).</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 4: Mass Production & In-Line QC (25–35 Days)</strong>
            <span>Cottage artisan clusters execute weaving under strict in-line monitoring. Progress photos, video walkthroughs, and dimensional check logs are shared weekly.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 5: Final Dehumidification, FRI Inspection & Carton Sealing</strong>
            <span>Batches undergo hot-air chamber drying, pin-probe moisture verification (&lt;12%), AQL 2.5 FRI inspection, and palletized export packing.</span>
          </div>
          <div className="p-3.5 bg-white rounded-xl border border-stone-200">
            <strong className="text-stone-900 block text-sm mb-1">Step 6: Vessel Loading & Port of Rotterdam Clearance</strong>
            <span>Containers are drayaged to Chattogram Seaport (BDCGP) for ISPM 15 fumigation and ocean transit (22–26 days) to the Port of Rotterdam (NLRTM) with full GSP Form A origin documents for 0% duty entry.</span>
          </div>
        </div>
      </section>

      {/* Section 12: Export Specifications, Customization Matrix & Container Logistics Tables */}
      <section id="specifications-tables" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          12. Export Specifications, Customization Matrix & Container Logistics Tables
        </h2>

        <div className="space-y-8 my-6">
          {article.tables.map((table, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-stone-50 border-b border-stone-200 font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center justify-between">
                <span>{table.title}</span>
                <span className="text-[11px] font-sans font-normal text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">Verified B2B Export Data</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-stone-700">
                  <thead className="bg-stone-100/80 text-stone-900 font-semibold border-b border-stone-200">
                    <tr>
                      {table.headers.map((h, i) => (
                        <th key={i} className="p-3 whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-amber-50/40 transition">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 whitespace-nowrap">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions (FAQ) */}
      <section id="faq-section" className="prose prose-stone max-w-none">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 border-b border-stone-200 pb-2.5">
          13. Frequently Asked Questions (FAQ) with Technical Answers for European Buyers
        </h2>

        <div className="space-y-3 my-6">
          {article.faqs.map((faq, idx) => {
            const isOpen = activeFaqIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-stone-50 transition"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    {faq.question}
                  </span>
                  <span className="text-stone-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
