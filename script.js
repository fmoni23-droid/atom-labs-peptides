const categories = [
  {
    id: "weight-management",
    name: "Weight Management",
    summary: "Research catalog grouping for incretin-pathway and metabolic-signaling peptides.",
    items: ["GLP3 RT", "GLP2 TZ", "GLP1 SM"]
  },
  {
    id: "growth-hormone-recovery",
    name: "Growth Hormone & Recovery",
    summary: "Peptides commonly organized around endocrine signaling and recovery-model research.",
    items: ["CJC1295 No DAC", "CJC1295 With DAC", "Ipamorelin", "CJC1295 No DAC + Ipamorelin", "Tesamorelin", "IGF1-LR3"]
  },
  {
    id: "recovery-repair",
    name: "Recovery & Repair",
    summary: "Research-only peptides and blends associated with tissue, repair, and cell-signaling models.",
    items: ["BPC157", "TB-500", "BPC157 + TB-500"]
  },
  {
    id: "cognitive-support",
    name: "Cognitive Support",
    summary: "Peptides grouped for neurochemical, behavioral, and cognition-adjacent research models.",
    items: ["Semax", "Selank"]
  },
  {
    id: "cellular-mitochondrial",
    name: "Cellular & Mitochondrial Support",
    summary: "Catalog grouping for mitochondrial, cellular-energy, and oxidative-stress research themes.",
    items: ["SS31", "MOTS-c", "NAD+"]
  },
  {
    id: "wellness-beauty",
    name: "Wellness & Beauty",
    summary: "Research and cosmetic-adjacent catalog items focused on appearance, pigment, and antioxidant themes.",
    items: ["GHK-Cu", "Glutathione", "Melanotan 2", "GLOW", "KLOW"]
  },
  {
    id: "supplies",
    name: "Supplies",
    summary: "Supporting lab supplies listed separately from peptide compounds.",
    items: ["BAC Water"]
  }
];

const products = [
  {
    id: "glp3-rt",
    name: "GLP3 RT",
    category: "Weight Management",
    image: "assets/products/glp3-rt.jpg",
    sizes: ["10mg", "20mg"],
    prices: { "10mg": 118.50, "20mg": 157.50 },
    stripePrices: { "10mg": "price_1TebX7082HX8pjNo8xZBzGET", "20mg": "price_1TebY0082HX8pjNoEWm9gkOs" },
    description: "Catalog item for incretin-pathway research with a weight-management theme. Keep documentation focused on identity, purity, lot number, and storage."
  },
  {
    id: "glp2-tz",
    name: "GLP2 TZ",
    category: "Weight Management",
    image: "assets/products/glp2-tz.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 112.00, "10mg": 151.00 },
    stripePrices: { "5mg": "price_1TebYa082HX8pjNoHJRzgAkl", "10mg": "price_1TebZ5082HX8pjNokqGt8eZp" },
    description: "Metabolic-signaling catalog item positioned for research settings. Product copy should avoid human-use outcomes and emphasize lab documentation."
  },
  {
    id: "glp1-sm",
    name: "GLP1 SM",
    category: "Weight Management",
    image: "assets/products/glp1-sm.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 105.50 },
    stripePrices: { "5mg": "price_1TebZu082HX8pjNo8jsNVLGP" },
    description: "GLP-themed research peptide listing for metabolic model work. Present as research material only, with size, lot, and handling details."
  },
  {
    id: "cjc1295-no-dac",
    name: "CJC1295 No DAC",
    category: "Growth Hormone & Recovery",
    image: "assets/products/cjc1295-no-dac.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeREt082HX8pjNokl3ghlAY" },
    description: "Synthetic GHRH analog commonly discussed in endocrine research contexts. Avoid performance, body-composition, dosing, or administration claims."
  },
  {
    id: "cjc1295-with-dac",
    name: "CJC1295 With DAC",
    category: "Growth Hormone & Recovery",
    image: "assets/products/cjc1295-with-dac.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeT1b082HX8pjNov9eMaXiQ" },
    description: "DAC-modified CJC1295 listing for longer-acting analog research discussions. Keep copy factual and separate from any therapeutic positioning."
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    category: "Growth Hormone & Recovery",
    image: "assets/products/ipamorelin.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRGq082HX8pjNosOHqtrAE" },
    description: "Synthetic pentapeptide studied in ghrelin-receptor and growth-hormone signaling research. No dosing or cycling instructions are included."
  },
  {
    id: "cjc1295-ipamorelin",
    name: "CJC1295 No DAC + Ipamorelin",
    category: "Growth Hormone & Recovery",
    image: "assets/products/cjc1295-ipamorelin.jpg",
    sizes: ["5mg/5mg"],
    prices: { "5mg/5mg": 112.00 },
    stripePrices: { "5mg/5mg": "price_1TeRHN082HX8pjNovMm1QuKG" },
    description: "Two-compound blend organized for endocrine-pathway research. Display blend composition clearly and avoid implied medical or athletic outcomes."
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: "Growth Hormone & Recovery",
    image: "assets/products/tesamorelin.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 118.50 },
    stripePrices: { "10mg": "price_1TeRHk082HX8pjNoPVd88Ljh" },
    description: "Synthetic GHRH analog listed for controlled research and reference contexts. Product page should show testing, purity, and handling information."
  },
  {
    id: "igf1-lr3",
    name: "IGF1-LR3",
    category: "Growth Hormone & Recovery",
    image: "assets/products/igf1-lr3.jpg",
    sizes: ["1mg"],
    prices: { "1mg": 118.50 },
    stripePrices: { "1mg": "price_1TeRI9082HX8pjNoezDJLpw5" },
    description: "IGF-1 analog catalog item for receptor-signaling and cell-culture research themes. Keep language limited to lab and analytical documentation."
  },
  {
    id: "bpc157",
    name: "BPC157",
    category: "Recovery & Repair",
    image: "assets/products/bpc157.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 79.50, "10mg": 95.75 },
    stripePrices: { "5mg": "price_1TeRIb082HX8pjNoKGNG1ctz", "10mg": "price_1TeRJ4082HX8pjNo8CDW3Y7f" },
    description: "Synthetic pentadecapeptide commonly referenced in preclinical literature. Research themes include tissue signaling and inflammatory-pathway models."
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: "Recovery & Repair",
    image: "assets/products/tb-500.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 86.00, "10mg": 105.50 },
    stripePrices: { "5mg": "price_1TeRJS082HX8pjNoPOF1IPdr", "10mg": "price_1TeRKd082HX8pjNoADMiyQLh" },
    description: "Synthetic fragment associated with thymosin beta-4 research. Often described around cell migration, actin regulation, and repair-model signaling."
  },
  {
    id: "bpc157-tb500",
    name: "BPC157 + TB-500",
    category: "Recovery & Repair",
    image: "assets/products/bpc157-tb500.jpg",
    sizes: ["5mg/5mg", "10mg/10mg"],
    prices: { "5mg/5mg": 102.25, "10mg/10mg": 138.00 },
    stripePrices: { "5mg/5mg": "price_1TeRQU082HX8pjNolRUxJAfp", "10mg/10mg": "price_1TeRS2082HX8pjNoxC0EQnwB" },
    description: "Research blend pairing BPC157 and TB-500 for tissue-signaling model work. Composition and lot documentation should be shown clearly."
  },
  {
    id: "semax",
    name: "Semax",
    category: "Cognitive Support",
    image: "assets/products/semax.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRSh082HX8pjNoChr1Vdmx" },
    description: "Synthetic peptide analog studied in neurochemical and behavioral research models. Copy should avoid cognition, mood, or disease claims."
  },
  {
    id: "selank",
    name: "Selank",
    category: "Cognitive Support",
    image: "assets/products/selank.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRT0082HX8pjNoVMvxlAXH" },
    description: "Synthetic peptide analog used in neurochemical research discussions. Keep descriptions research-only and free of mental-health treatment claims."
  },
  {
    id: "ss31",
    name: "SS31",
    category: "Cellular & Mitochondrial Support",
    image: "assets/products/ss31.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRTL082HX8pjNoQ5QHgU4Y" },
    description: "Mitochondrial-targeted peptide listing for cellular-energy and oxidative-stress research themes. Include purity, lot, and storage notes."
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    category: "Cellular & Mitochondrial Support",
    image: "assets/products/mots-c.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRTp082HX8pjNo5pPE2PHW" },
    description: "Mitochondrial-derived peptide commonly organized around metabolic and cellular stress-response research. Avoid fitness or treatment promises."
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Cellular & Mitochondrial Support",
    image: "assets/products/nad.jpg",
    sizes: ["500mg"],
    prices: { "500mg": 108.75 },
    stripePrices: { "500mg": "price_1TeRUE082HX8pjNo0bZ6LHwY" },
    description: "Nicotinamide adenine dinucleotide listing for cellular metabolism and redox research contexts. Present with clear storage and handling details."
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    category: "Wellness & Beauty",
    image: "assets/products/ghk-cu.jpg",
    sizes: ["50mg", "100mg"],
    prices: { "50mg": 82.75, "100mg": 92.50 },
    stripePrices: { "50mg": "price_1TeRUs082HX8pjNosMSwDk4e", "100mg": "price_1TeRVV082HX8pjNodODkPPRZ" },
    description: "Copper-binding tripeptide used in cosmetic and extracellular-matrix research discussions. Avoid anti-aging promises and focus on documentation."
  },
  {
    id: "glutathione",
    name: "Glutathione",
    category: "Wellness & Beauty",
    image: "assets/products/glutathione.jpg",
    sizes: ["1500mg"],
    prices: { "1500mg": 112.00 },
    stripePrices: { "1500mg": "price_1TeRVn082HX8pjNoijZ4F52s" },
    description: "Antioxidant compound listed for research and lab reference use. Keep copy focused on compound identity, size, storage, and purity."
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    category: "Wellness & Beauty",
    image: "assets/products/melanotan-2.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRWN082HX8pjNo632EB8fu" },
    description: "Melanocortin analog catalog item for pigment-pathway research. Do not include tanning, appearance-outcome, or administration guidance."
  },
  {
    id: "glow",
    name: "GLOW",
    category: "Wellness & Beauty",
    image: "assets/products/glow.jpg",
    sizes: ["70mg"],
    prices: { "70mg": 131.50 },
    stripePrices: { "70mg": "price_1TeRWo082HX8pjNouIEz6kEi" },
    description: "Beauty-themed blend listing. Show exact blend composition on the final product page before launch and avoid cosmetic result claims."
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Wellness & Beauty",
    image: "assets/products/klow.jpg",
    sizes: ["80mg"],
    prices: { "80mg": 138.00 },
    stripePrices: { "80mg": "price_1TeRXC082HX8pjNos0AvZlr3" },
    description: "Wellness-and-beauty blend listing. Add exact ingredient breakdown before taking live orders and keep language research-oriented."
  },
  {
    id: "bac-water",
    name: "BAC Water",
    category: "Supplies",
    image: "assets/products/bac-water.jpg",
    sizes: ["5mL", "10mL"],
    prices: { "5mL": 20.00, "10mL": 30.00 },
    stripePrices: { "5mL": "price_1Texf0082HX8pjNojpzcL51n", "10mL": "price_1TexfQ082HX8pjNot1YmZpWZ" },
    description: "Bacteriostatic water supply item for catalog completeness. Include manufacturer, sterility, expiration, and handling documentation."
  }
];

let activeCategory = "all";
const cart = new Map();

const categoryTabs = document.querySelector("#categoryTabs");
const categoryList = document.querySelector("#categoryList");
const catalogCount = document.querySelector("#catalogCount");
const productGrid = document.querySelector("#productGrid");
const cartPanel = document.querySelector("#cartPanel");
const overlay = document.querySelector("#overlay");
const cartToggle = document.querySelector("#cartToggle");
const cartClose = document.querySelector("#cartClose");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartCount = document.querySelector("#cartCount");
const subtotal = document.querySelector("#subtotal");
const shipping = document.querySelector("#shipping");
const total = document.querySelector("#total");
const checkoutJump = document.querySelector("#checkoutJump");
const checkoutSummary = document.querySelector("#checkoutSummary");
const checkoutForm = document.querySelector("#checkoutForm");

if (!document.querySelector("#verificationGate")) {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="verification-gate" id="verificationGate" role="dialog" aria-modal="true" aria-labelledby="verificationTitle">
      <div class="verification-backdrop" aria-hidden="true"></div>
      <section class="verification-panel">
        <img class="verification-logo" src="assets/atomlabs-logo.png" alt="AtomLabs Peptides">
        <p class="verification-kicker">Research use only</p>
        <h2 id="verificationTitle">Researcher verification</h2>
        <p class="verification-intro">
          AtomLabs sells research peptides exclusively to qualified researchers and laboratories
          for in vitro and laboratory use. Please confirm before continuing.
        </p>
        <label class="verification-choice">
          <input type="checkbox" id="ageVerification">
          <span>I am at least <strong>21 years of age.</strong></span>
        </label>
        <label class="verification-choice">
          <input type="checkbox" id="researcherVerification">
          <span>
            I confirm I am a <strong>qualified researcher</strong> purchasing for
            <strong>in vitro or laboratory research</strong> only, not for human or veterinary use.
          </span>
        </label>
        <button class="verification-enter" type="button" id="enterSiteButton" disabled>
          <span>Enter AtomLabs</span><span aria-hidden="true">&rarr;</span>
        </button>
        <p class="verification-disclaimer">
          By proceeding you affirm the statements above are true. Products are not for human or
          veterinary use, not for use in diagnostic procedures, and have not been evaluated by the
          U.S. Food and Drug Administration.
        </p>
      </section>
    </div>
  `);
}

if (!document.querySelector("#verificationFallbackStyles")) {
  const verificationStyles = document.createElement("style");
  verificationStyles.id = "verificationFallbackStyles";
  verificationStyles.textContent = `
    body.verification-locked{overflow:hidden}
    .verification-gate{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:24px}
    .verification-gate.is-hidden{display:none}
    .verification-backdrop{position:absolute;inset:0;background:rgba(4,39,48,.78);backdrop-filter:blur(12px)}
    .verification-panel{position:relative;width:min(620px,100%);max-height:calc(100vh - 48px);overflow:auto;padding:clamp(26px,5vw,46px);background:#fff;border:1px solid #d9e2e5;border-radius:8px;box-shadow:0 28px 90px rgba(3,28,35,.34);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    .verification-logo{display:block;width:min(250px,70%);max-height:105px;margin:0 auto 20px;object-fit:contain}
    .verification-kicker{margin:0 0 4px;color:#0d7f8f;font-size:.78rem;font-weight:800;text-transform:uppercase}
    .verification-panel h2{margin:0 0 8px;color:#075665;font-size:clamp(1.8rem,5vw,2.5rem);line-height:1.1}
    .verification-intro,.verification-disclaimer{color:#65717f}
    .verification-intro{margin:0 0 24px;font-size:1.05rem}
    .verification-choice{display:grid;grid-template-columns:28px 1fr;gap:14px;align-items:start;margin-top:14px;padding:18px;color:#34414d;background:#fff;border:1px solid #d9e2e5;border-radius:8px;cursor:pointer}
    .verification-choice:has(input:checked){border-color:#0d7f8f;background:#eff6f5}
    .verification-choice input{width:24px;height:24px;margin:1px 0 0;accent-color:#075665;cursor:pointer}
    .verification-choice strong{color:#075665}
    .verification-enter{display:flex;width:100%;min-height:56px;align-items:center;justify-content:center;gap:12px;margin-top:24px;border:0;border-radius:8px;color:#fff;background:#075665;font:inherit;font-weight:800;cursor:pointer}
    .verification-enter:disabled{color:rgba(255,255,255,.8);background:#a9c6cc;cursor:not-allowed}
    .verification-disclaimer{margin:20px 0 0;font-size:.88rem}
    @media(max-width:620px){.verification-gate{align-items:end;padding:12px}.verification-panel{max-height:calc(100vh - 24px);padding:24px 20px}.verification-choice{grid-template-columns:24px 1fr;gap:12px;padding:15px;font-size:.94rem}}
  `;
  document.head.appendChild(verificationStyles);
}

if (!document.querySelector("#faq")) {
  const checkoutSection = document.querySelector("#checkout");
  checkoutSection.insertAdjacentHTML("beforebegin", `
    <section class="section faq-section" id="faq">
      <div class="section-heading">
        <p class="eyebrow">Frequently asked questions</p>
        <h2>Orders, shipping, and support</h2>
        <p>Quick answers about fulfillment, delivery, order changes, and research-use products.</p>
      </div>
      <div class="faq-list">
        <details class="faq-item"><summary>When will my order ship?</summary><p>Orders are prepared quickly and typically ship the same business day when placed before the daily carrier pickup and inventory is available. Orders placed later, on weekends, or on holidays generally ship the next business day.</p></details>
        <details class="faq-item"><summary>How long does shipping take?</summary><p>Most U.S. orders arrive within 1 to 3 business days after carrier pickup. Miami-area same-day fulfillment or local delivery may be available in select cases. Carrier delays can occasionally affect delivery estimates.</p></details>
        <details class="faq-item"><summary>Do you issue refunds?</summary><p>Because research products require careful handling, completed orders are generally final. Contact support promptly if an order arrives damaged, incorrect, or incomplete so the issue can be reviewed and resolved.</p></details>
        <details class="faq-item"><summary>Can I change or cancel my order after placing it?</summary><p>Contact support immediately. Changes or cancellations may be possible before an order is packed or transferred to the carrier, but they cannot be guaranteed once fulfillment has started.</p></details>
        <details class="faq-item"><summary>What if my package is missing products or contains the wrong items?</summary><p>Contact support within 48 hours of delivery with your order details and clear photos of the package and its contents. The fulfillment team will review the order and help correct verified issues.</p></details>
        <details class="faq-item"><summary>What if my package is lost, stolen, or delivered to the wrong address?</summary><p>First check the tracking details and contact the carrier. Then contact AtomLabs support so the shipment can be reviewed. Claims and replacement eligibility depend on the carrier investigation and delivery record.</p></details>
        <details class="faq-item"><summary>Do you offer package insurance or shipping protection?</summary><p>Available shipping protection options, when offered, will appear during checkout. Carrier claims may be required for packages reported lost or damaged in transit.</p></details>
        <details class="faq-item"><summary>What if I enter the wrong shipping address at checkout?</summary><p>Contact support immediately with the correct address. Address changes may be possible before fulfillment begins, but AtomLabs cannot guarantee changes or replacements after an order has shipped.</p></details>
        <details class="faq-item"><summary>Are AtomLabs products intended for human or veterinary use?</summary><p>No. AtomLabs products are sold exclusively for qualified in vitro and laboratory research. They are not intended for human or veterinary use, diagnosis, treatment, or consumption.</p></details>
      </div>
    </section>
  `);
}

if (!document.querySelector("#faqFallbackStyles")) {
  const faqStyles = document.createElement("style");
  faqStyles.id = "faqFallbackStyles";
  faqStyles.textContent = `
    .faq-section{display:grid;grid-template-columns:minmax(240px,.72fr) minmax(0,1.28fr);gap:clamp(30px,6vw,90px);align-items:start}
    .faq-section .section-heading{position:sticky;top:104px;display:block}.faq-section .section-heading h2{margin:8px 0 14px}
    .faq-list{border-top:1px solid #d9e2e5}.faq-item{border-bottom:1px solid #d9e2e5}
    .faq-item summary{position:relative;padding:22px 54px 22px 0;color:#18212b;font-size:clamp(1.05rem,2vw,1.28rem);font-weight:800;line-height:1.3;list-style:none;cursor:pointer}
    .faq-item summary::-webkit-details-marker{display:none}.faq-item summary::after{content:"+";position:absolute;top:50%;right:8px;color:#0d7f8f;font-size:2rem;font-weight:400;transform:translateY(-50%)}.faq-item[open] summary::after{content:"-"}
    .faq-item p{margin:-6px 54px 22px 0;color:#65717f}
    @media(max-width:920px){.faq-section{grid-template-columns:1fr}.faq-section .section-heading{position:static}}
  `;
  document.head.appendChild(faqStyles);
}

if (!document.querySelector("#standards")) {
  const trustBand = document.querySelector(".trust-band");
  trustBand.insertAdjacentHTML("afterend", `
    <section class="standards-band" id="standards" aria-label="Research and service standards">
      <div class="research-warning">
        <span class="warning-icon" aria-hidden="true">!</span>
        <p><strong>For research only.</strong> Not for human consumption, medical, veterinary, or diagnostic use.</p>
      </div>
      <div class="standards-badges" aria-label="Documentation and shipping">
        <span>Testing documentation</span>
        <span>COAs available where provided</span>
        <span>Free delivery on qualifying bulk orders</span>
      </div>
      <div class="standards-metrics">
        <div><strong>20+</strong><span>Catalog compounds</span></div>
        <div><strong>Fast</strong><span>Order fulfillment</span></div>
        <div><strong>Miami</strong><span>Local service</span></div>
      </div>
    </section>
  `);
}

if (!document.querySelector("#standardsFallbackStyles")) {
  const standardsStyles = document.createElement("style");
  standardsStyles.id = "standardsFallbackStyles";
  standardsStyles.textContent = `
    .standards-band{padding:clamp(38px,6vw,72px) clamp(18px,4vw,56px);color:#18212b;background:#eff6f5;border-block:1px solid #d9e2e5}
    .research-warning{display:flex;gap:14px;align-items:center;max-width:1040px;margin:0 auto 28px;padding:18px 20px;background:#fffaf0;border:1px solid rgba(197,137,34,.38);border-radius:8px}.research-warning p{margin:0}.research-warning strong{color:#c58922}
    .warning-icon{display:grid;flex:0 0 28px;width:28px;height:28px;place-items:center;color:#f0bb54;border:2px solid currentColor;border-radius:50%;font-weight:900}
    .standards-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:1040px;margin:0 auto 32px}.standards-badges span{padding:10px 14px;color:#075665;background:#fff;border:1px solid rgba(13,127,143,.28);border-radius:999px;font-size:.92rem}.standards-badges span::before{margin-right:9px;color:#0d7f8f;content:"•"}
    .standards-metrics{display:grid;grid-template-columns:repeat(3,1fr);max-width:1040px;margin:0 auto;border-top:1px solid #d9e2e5}.standards-metrics div{display:grid;gap:4px;padding:28px 20px 0;text-align:center}.standards-metrics strong{color:#0d7f8f;font-size:clamp(2rem,6vw,3.8rem);line-height:1}.standards-metrics span{color:#65717f;font-size:.78rem;font-weight:800;text-transform:uppercase}
    @media(max-width:620px){.research-warning{align-items:flex-start}.standards-badges{justify-content:flex-start}.standards-metrics{grid-template-columns:1fr}.standards-metrics div{padding-block:22px;border-bottom:1px solid #d9e2e5}}
  `;
  document.head.appendChild(standardsStyles);
}

if (!document.querySelector("#contact")) {
  const mainContent = document.querySelector("main");
  mainContent.insertAdjacentHTML("beforeend", `
    <section class="contact-band" id="contact">
      <div>
        <p class="eyebrow">Customer support</p>
        <h2>Contact us</h2>
        <p>Questions about an order, local fulfillment, or the research catalog? Email AtomLabs and our team will respond as soon as possible.</p>
      </div>
      <a class="contact-email" href="mailto:atomlabspeptides@gmail.com">atomlabspeptides@gmail.com</a>
    </section>
  `);
}

if (!document.querySelector("#contactFallbackStyles")) {
  const contactStyles = document.createElement("style");
  contactStyles.id = "contactFallbackStyles";
  contactStyles.textContent = `
    .contact-band{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:center;padding:clamp(38px,6vw,66px) clamp(18px,4vw,56px);color:#18212b;background:#eff6f5;border-top:1px solid #d9e2e5}
    .contact-band h2{margin:6px 0 10px}.contact-band p:last-child{max-width:680px;margin:0;color:#65717f}.contact-email{padding:14px 18px;color:#fff;background:#075665;border-radius:8px;font-weight:800;overflow-wrap:anywhere}
    @media(max-width:920px){.contact-band{grid-template-columns:1fr}}
  `;
  document.head.appendChild(contactStyles);
}

if (!document.querySelector(".shipping-announcement")) {
  const siteWatermark = document.querySelector(".site-watermark");
  siteWatermark.insertAdjacentHTML("afterend", `
    <div class="shipping-announcement">
      <strong>Free shipping on bulk orders</strong>
      <span>Fast fulfillment from AtomLabs Peptides</span>
      <a href="#catalog">Shop catalog</a>
    </div>
  `);
}

if (!document.querySelector(".bulk-shipping-callout")) {
  const catalogToolbar = document.querySelector(".catalog-toolbar");
  catalogToolbar.insertAdjacentHTML("afterend", `
    <div class="bulk-shipping-callout">
      <strong>Building a bulk order?</strong>
      <span>Receive free shipping plus preferred bulk-order pricing.</span>
      <a href="mailto:atomlabspeptides@gmail.com?subject=Bulk%20order%20request">Contact us</a>
    </div>
  `);
}

const standardsShippingBadge = Array.from(document.querySelectorAll(".standards-badges span"))
  .find((item) => item.textContent.toLowerCase().includes("free"));
if (standardsShippingBadge) standardsShippingBadge.textContent = "Free shipping on bulk orders";

const bulkPerk = Array.from(document.querySelectorAll(".perk-card"))
  .find((item) => item.textContent.toLowerCase().includes("bulk order"));
if (bulkPerk) {
  bulkPerk.querySelector("h3").textContent = "Free bulk-order shipping";
  bulkPerk.querySelector("p").textContent = "Bulk orders receive free shipping and can be reviewed for preferred pricing before checkout is finalized.";
}

const checkoutNote = document.querySelector(".checkout-note");
if (checkoutNote) {
  checkoutNote.textContent = "Same-day Miami-area fulfillment may be available. Bulk orders receive free shipping and can be reviewed for preferred pricing. Returning customers may receive a next-order discount.";
}

if (!document.querySelector("#shippingPromoFallbackStyles")) {
  const shippingPromoStyles = document.createElement("style");
  shippingPromoStyles.id = "shippingPromoFallbackStyles";
  shippingPromoStyles.textContent = `
    .shipping-announcement{display:flex;min-height:38px;align-items:center;justify-content:center;gap:12px;padding:8px 18px;color:#fff;background:#075665;font-size:.86rem;text-align:center}.shipping-announcement strong{color:#bff2e6}.shipping-announcement a{padding-left:12px;border-left:1px solid rgba(255,255,255,.32);font-weight:800;text-decoration:underline;text-underline-offset:3px}
    .bulk-shipping-callout{display:flex;align-items:center;gap:12px;margin-bottom:18px;padding:14px 16px;color:#075665;background:#eff6f5;border:1px solid #cde4df;border-radius:8px}.bulk-shipping-callout span{color:#65717f}.bulk-shipping-callout a{margin-left:auto;font-weight:800;text-decoration:underline;text-underline-offset:3px}
    @media(max-width:620px){.shipping-announcement{flex-wrap:wrap;gap:3px 10px}.shipping-announcement span{display:none}.bulk-shipping-callout{align-items:flex-start;flex-direction:column}.bulk-shipping-callout a{margin-left:0}}
  `;
  document.head.appendChild(shippingPromoStyles);
}

const verificationGate = document.querySelector("#verificationGate");
const ageVerification = document.querySelector("#ageVerification");
const researcherVerification = document.querySelector("#researcherVerification");
const enterSiteButton = document.querySelector("#enterSiteButton");

function updateVerificationButton() {
  enterSiteButton.disabled = !(ageVerification.checked && researcherVerification.checked);
}

function dismissVerificationGate() {
  if (enterSiteButton.disabled) return;
  verificationGate.classList.add("is-hidden");
  document.body.classList.remove("verification-locked");
}

document.body.classList.add("verification-locked");

ageVerification.addEventListener("change", updateVerificationButton);
researcherVerification.addEventListener("change", updateVerificationButton);
enterSiteButton.addEventListener("click", dismissVerificationGate);
const formNote = document.querySelector("#formNote");
const checkoutButton = checkoutForm.querySelector(".checkout-button");

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function itemKey(productId, size) {
  return `${productId}__${size}`;
}

function formatPrice(value) {
  return money.format(value);
}

function getStartingPrice(product) {
  return product.prices[product.sizes[0]];
}

function getProductsForCategory() {
  if (activeCategory === "all") return products;
  return products.filter((product) => product.category === activeCategory);
}

function renderCategoryTabs() {
  const tabData = [{ id: "all", name: "All", count: products.length }].concat(
    categories.map((category) => ({
      id: category.name,
      name: category.name,
      count: products.filter((product) => product.category === category.name).length
    }))
  );

  categoryTabs.innerHTML = tabData.map((tab) => `
    <button class="category-tab ${activeCategory === tab.id ? "active" : ""}" type="button" data-category="${tab.id}">
      <span>${tab.name}</span>
      <strong>${tab.count}</strong>
    </button>
  `).join("");
}

function renderProducts() {
  const visibleProducts = getProductsForCategory();
  catalogCount.textContent = `${visibleProducts.length} item${visibleProducts.length === 1 ? "" : "s"} shown`;

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <img class="card-watermark" src="assets/atomlabs-logo.png" alt="">
      <div class="product-image-frame ${product.image ? "" : "fallback"}">
        <img src="${product.image || "assets/atomlabs-logo.png"}" alt="${product.name} product image" loading="lazy" decoding="async">
      </div>
      <div class="product-top">
        <div>
          <span class="badge">${product.category}</span>
          <h3>${product.name}</h3>
        </div>
        <span class="availability">Available</span>
      </div>
      <p class="product-description">${product.description}</p>
      <div class="size-row">
        <label for="size-${product.id}">Size</label>
        <select id="size-${product.id}" data-size-for="${product.id}">
          ${product.sizes.map((size) => `<option value="${size}">${size} - ${formatPrice(product.prices[size])}</option>`).join("")}
        </select>
      </div>
      <div class="product-actions">
        <span class="price">From ${formatPrice(getStartingPrice(product))}</span>
        <button class="add-button" type="button" data-product="${product.id}">Add to cart</button>
      </div>
    </article>
  `).join("");
}

function renderCategories() {
  categoryList.innerHTML = categories.map((category) => `
    <article class="blend-card">
      <img class="card-watermark category-watermark" src="assets/atomlabs-logo.png" alt="">
      <div class="category-card-top">
        <h3>${category.name}</h3>
        <span>${category.items.length} item${category.items.length === 1 ? "" : "s"}</span>
      </div>
      <p>${category.summary}</p>
      <ul>
        ${category.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("open", isOpen);
  overlay.classList.toggle("open", isOpen);
  cartToggle.setAttribute("aria-expanded", String(isOpen));
}

function renderCart() {
  const entries = Array.from(cart.values());
  const itemCount = entries.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalValue = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingValue = subtotalValue > 0 ? 0 : 0;
  const totalValue = subtotalValue + shippingValue;

  cartCount.textContent = itemCount;
  cartEmpty.hidden = entries.length > 0;
  subtotal.textContent = formatPrice(subtotalValue);
  shipping.textContent = entries.length > 0 ? "Free" : "$0.00";
  total.textContent = formatPrice(totalValue);

  cartItems.innerHTML = entries.map((item) => `
    <div class="cart-item">
      <img class="cart-item-logo" src="assets/atomlabs-logo.png" alt="">
      <div>
        <strong>${item.name}</strong>
        <p>${item.size} · ${item.category} · ${formatPrice(item.price)}</p>
      </div>
      <div class="quantity" aria-label="Quantity for ${item.name} ${item.size}">
        <button class="qty-button" type="button" data-action="decrease" data-key="${item.key}" aria-label="Decrease ${item.name}">-</button>
        <strong>${item.quantity}</strong>
        <button class="qty-button" type="button" data-action="increase" data-key="${item.key}" aria-label="Increase ${item.name}">+</button>
      </div>
    </div>
  `).join("");

  checkoutSummary.innerHTML = entries.length === 0
    ? "<strong>Order summary</strong><span>Add catalog items to build the order.</span>"
    : `
      <strong>Order summary</strong>
      <span>${itemCount} item${itemCount === 1 ? "" : "s"} selected. Total: ${formatPrice(totalValue)}.</span>
    `;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const sizeControl = document.querySelector(`[data-size-for="${productId}"]`);
  const selectedSize = sizeControl ? sizeControl.value : product.sizes[0];
  const stripePriceId = product.stripePrices ? product.stripePrices[selectedSize] : "";
  const key = itemKey(productId, selectedSize);
  const existing = cart.get(key);

  cart.set(key, {
    key,
    id: product.id,
    name: product.name,
    category: product.category,
    size: selectedSize,
    price: product.prices[selectedSize],
    stripePriceId,
    quantity: existing ? existing.quantity + 1 : 1
  });

  renderCart();
  setCartOpen(true);
}

function updateQuantity(key, direction) {
  const item = cart.get(key);
  if (!item) return;

  const nextQuantity = direction === "increase" ? item.quantity + 1 : item.quantity - 1;
  if (nextQuantity <= 0) {
    cart.delete(key);
  } else {
    cart.set(key, { ...item, quantity: nextQuantity });
  }

  renderCart();
}

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategoryTabs();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  addToCart(button.dataset.product);
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  updateQuantity(button.dataset.key, button.dataset.action);
});

cartToggle.addEventListener("click", () => setCartOpen(!cartPanel.classList.contains("open")));
cartClose.addEventListener("click", () => setCartOpen(false));
overlay.addEventListener("click", () => setCartOpen(false));
checkoutJump.addEventListener("click", () => setCartOpen(false));

checkoutForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (cart.size === 0) {
    formNote.textContent = "Add at least one item before checkout.";
    return;
  }

  const entries = Array.from(cart.values());
  const missingStripeItem = entries.find((item) => !item.stripePriceId);
  if (missingStripeItem) {
    formNote.textContent = `${missingStripeItem.name} ${missingStripeItem.size} is not connected to Stripe yet.`;
    return;
  }

  const formData = new FormData(checkoutForm);
  const payload = {
    customer: {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || "")
    },
    items: entries.map((item) => ({
      priceId: item.stripePriceId,
      quantity: item.quantity
    }))
  };

  checkoutButton.disabled = true;
  formNote.textContent = "Opening secure Stripe checkout...";

  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();

    if (!response.ok || !data.url) {
      throw new Error(data.error || "Checkout could not start.");
    }

    window.location.href = data.url;
  } catch (error) {
    formNote.textContent = error.message || "Checkout could not start. Please try again.";
    checkoutButton.disabled = false;
  }
});

renderCategoryTabs();
renderProducts();
renderCategories();
renderCart();
