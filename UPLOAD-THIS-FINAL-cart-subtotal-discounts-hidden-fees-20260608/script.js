const categories = [
  {
    id: "metabolic-signaling",
    name: "Metabolic Signaling",
    summary: "Research catalog grouping for incretin-pathway and metabolic-signaling compounds.",
    items: ["GLP3 RT", "GLP2 TZ", "GLP1 SM"]
  },
  {
    id: "endocrine-signaling",
    name: "Endocrine Signaling",
    summary: "Reference materials organized for controlled endocrine-signaling research models.",
    items: ["CJC1295 No DAC", "CJC1295 With DAC", "Ipamorelin", "CJC1295 No DAC + Ipamorelin", "Tesamorelin", "IGF1-LR3"]
  },
  {
    id: "cellular-signaling",
    name: "Cellular Signaling",
    summary: "Reference materials organized for controlled cellular-signaling research models.",
    items: ["BPC157", "TB-500", "BPC157 + TB-500"]
  },
  {
    id: "neurochemical-research",
    name: "Neurochemical Research",
    summary: "Reference materials organized for controlled neurochemical research models.",
    items: ["Semax", "Selank"]
  },
  {
    id: "cellular-mitochondrial",
    name: "Mitochondrial Research",
    summary: "Catalog grouping for mitochondrial, cellular-energy, and oxidative-stress research themes.",
    items: ["SS31", "MOTS-c", "NAD+"]
  },
  {
    id: "analytical-reference",
    name: "Analytical & Reference Compounds",
    summary: "Analytical materials and reference compounds listed for controlled laboratory research.",
    items: ["GHK-Cu", "Glutathione", "Melanotan 2", "GLOW", "KLOW"]
  },
  {
    id: "supplies",
    name: "Laboratory Supplies",
    summary: "Supporting lab supplies listed separately from research compounds.",
    items: ["BAC Water"]
  }
];

const products = [
  {
    id: "glp3-rt",
    name: "GLP3 RT",
    category: "Metabolic Signaling",
    image: "assets/products/glp3-rt.jpg",
    sizes: ["10mg", "20mg"],
    prices: { "10mg": 118.50, "20mg": 157.50 },
    stripePrices: { "10mg": "price_1TebX7082HX8pjNo8xZBzGET", "20mg": "price_1TebY0082HX8pjNoEWm9gkOs" },
    description: "Research reference material cataloged for controlled incretin-pathway studies. Documentation focuses on identity, vial size, lot information, and storage."
  },
  {
    id: "glp2-tz",
    name: "GLP2 TZ",
    category: "Metabolic Signaling",
    image: "assets/products/glp2-tz.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 112.00, "10mg": 151.00 },
    stripePrices: { "5mg": "price_1TebYa082HX8pjNoHJRzgAkl", "10mg": "price_1TebZ5082HX8pjNokqGt8eZp" },
    description: "Research reference material cataloged for controlled metabolic-signaling studies, with laboratory documentation and handling information."
  },
  {
    id: "glp1-sm",
    name: "GLP1 SM",
    category: "Metabolic Signaling",
    image: "assets/products/glp1-sm.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 105.50 },
    stripePrices: { "5mg": "price_1TebZu082HX8pjNo8jsNVLGP" },
    description: "Research reference material cataloged for controlled GLP-pathway model work, with vial size, lot, and handling details."
  },
  {
    id: "cjc1295-no-dac",
    name: "CJC1295 No DAC",
    category: "Endocrine Signaling",
    image: "assets/products/cjc1295-no-dac.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeREt082HX8pjNokl3ghlAY" },
    description: "Synthetic GHRH analog cataloged as a reference material for controlled endocrine-signaling research."
  },
  {
    id: "cjc1295-with-dac",
    name: "CJC1295 With DAC",
    category: "Endocrine Signaling",
    image: "assets/products/cjc1295-with-dac.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeT1b082HX8pjNov9eMaXiQ" },
    description: "DAC-modified CJC1295 cataloged as a reference material for controlled analog and endocrine-signaling research."
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    category: "Endocrine Signaling",
    image: "assets/products/ipamorelin.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRGq082HX8pjNosOHqtrAE" },
    description: "Synthetic reference compound cataloged for controlled ghrelin-receptor and endocrine-signaling research."
  },
  {
    id: "cjc1295-ipamorelin",
    name: "CJC1295 No DAC + Ipamorelin",
    category: "Endocrine Signaling",
    image: "assets/products/cjc1295-ipamorelin.jpg",
    sizes: ["5mg/5mg"],
    prices: { "5mg/5mg": 112.00 },
    stripePrices: { "5mg/5mg": "price_1TeRHN082HX8pjNovMm1QuKG" },
    description: "Two-compound reference blend cataloged for controlled endocrine-pathway research. Blend composition is listed by vial size."
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: "Endocrine Signaling",
    image: "assets/products/tesamorelin.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 118.50 },
    stripePrices: { "10mg": "price_1TeRHk082HX8pjNoPVd88Ljh" },
    description: "Synthetic GHRH analog listed as a reference material for controlled laboratory research, with handling and vial information."
  },
  {
    id: "igf1-lr3",
    name: "IGF1-LR3",
    category: "Endocrine Signaling",
    image: "assets/products/igf1-lr3.jpg",
    sizes: ["1mg"],
    prices: { "1mg": 118.50 },
    stripePrices: { "1mg": "price_1TeRI9082HX8pjNoezDJLpw5" },
    description: "IGF-1 analog reference material cataloged for controlled receptor-signaling and cell-culture research."
  },
  {
    id: "bpc157",
    name: "BPC157",
    category: "Cellular Signaling",
    image: "assets/products/bpc157.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 79.50, "10mg": 95.75 },
    stripePrices: { "5mg": "price_1TeRIb082HX8pjNoKGNG1ctz", "10mg": "price_1TeRJ4082HX8pjNo8CDW3Y7f" },
    description: "Synthetic reference compound cataloged for controlled cell-signaling and preclinical laboratory research models."
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: "Cellular Signaling",
    image: "assets/products/tb-500.jpg",
    sizes: ["5mg", "10mg"],
    prices: { "5mg": 86.00, "10mg": 105.50 },
    stripePrices: { "5mg": "price_1TeRJS082HX8pjNoPOF1IPdr", "10mg": "price_1TeRKd082HX8pjNoADMiyQLh" },
    description: "Synthetic fragment cataloged as a reference material for controlled thymosin beta-4 and cell-signaling research."
  },
  {
    id: "bpc157-tb500",
    name: "BPC157 + TB-500",
    category: "Cellular Signaling",
    image: "assets/products/bpc157-tb500.jpg",
    sizes: ["5mg/5mg", "10mg/10mg"],
    prices: { "5mg/5mg": 102.25, "10mg/10mg": 138.00 },
    stripePrices: { "5mg/5mg": "price_1TeRQU082HX8pjNolRUxJAfp", "10mg/10mg": "price_1TeRS2082HX8pjNoxC0EQnwB" },
    description: "Two-compound reference blend cataloged for controlled cell-signaling model work. Blend composition is listed by vial size."
  },
  {
    id: "semax",
    name: "Semax",
    category: "Neurochemical Research",
    image: "assets/products/semax.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRSh082HX8pjNoChr1Vdmx" },
    description: "Synthetic reference compound cataloged for controlled neurochemical laboratory research models."
  },
  {
    id: "selank",
    name: "Selank",
    category: "Neurochemical Research",
    image: "assets/products/selank.jpg",
    sizes: ["5mg"],
    prices: { "5mg": 82.75 },
    stripePrices: { "5mg": "price_1TeRT0082HX8pjNoVMvxlAXH" },
    description: "Synthetic reference compound cataloged for controlled neurochemical laboratory research."
  },
  {
    id: "ss31",
    name: "SS31",
    category: "Mitochondrial Research",
    image: "assets/products/ss31.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRTL082HX8pjNoQ5QHgU4Y" },
    description: "Mitochondrial-targeted compound listing for cellular-energy and oxidative-stress research themes. Include purity, lot, and storage notes."
  },
  {
    id: "mots-c",
    name: "MOTS-c",
    category: "Mitochondrial Research",
    image: "assets/products/mots-c.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRTp082HX8pjNo5pPE2PHW" },
    description: "Mitochondrial-derived reference compound cataloged for controlled cellular stress-response research."
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Mitochondrial Research",
    image: "assets/products/nad.jpg",
    sizes: ["500mg"],
    prices: { "500mg": 108.75 },
    stripePrices: { "500mg": "price_1TeRUE082HX8pjNo0bZ6LHwY" },
    description: "Nicotinamide adenine dinucleotide listing for cellular metabolism and redox research contexts. Present with clear storage and handling details."
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    category: "Analytical & Reference Compounds",
    image: "assets/products/ghk-cu.jpg",
    sizes: ["50mg", "100mg"],
    prices: { "50mg": 82.75, "100mg": 92.50 },
    stripePrices: { "50mg": "price_1TeRUs082HX8pjNosMSwDk4e", "100mg": "price_1TeRVV082HX8pjNodODkPPRZ" },
    description: "Copper-binding reference compound cataloged for controlled extracellular-matrix and analytical research."
  },
  {
    id: "glutathione",
    name: "Glutathione",
    category: "Analytical & Reference Compounds",
    image: "assets/products/glutathione.jpg",
    sizes: ["1500mg"],
    prices: { "1500mg": 112.00 },
    stripePrices: { "1500mg": "price_1TeRVn082HX8pjNoijZ4F52s" },
    description: "Antioxidant compound listed for research and lab reference use. Keep copy focused on compound identity, size, storage, and purity."
  },
  {
    id: "melanotan-2",
    name: "Melanotan 2",
    category: "Analytical & Reference Compounds",
    image: "assets/products/melanotan-2.jpg",
    sizes: ["10mg"],
    prices: { "10mg": 86.00 },
    stripePrices: { "10mg": "price_1TeRWN082HX8pjNo632EB8fu" },
    description: "Melanocortin analog reference material cataloged for controlled pigment-pathway laboratory research."
  },
  {
    id: "glow",
    name: "GLOW",
    category: "Analytical & Reference Compounds",
    image: "assets/products/glow.jpg",
    sizes: ["70mg"],
    prices: { "70mg": 131.50 },
    stripePrices: { "70mg": "price_1TeRWo082HX8pjNouIEz6kEi" },
    description: "Multi-compound reference blend cataloged for controlled analytical laboratory research."
  },
  {
    id: "klow",
    name: "KLOW",
    category: "Analytical & Reference Compounds",
    image: "assets/products/klow.jpg",
    sizes: ["80mg"],
    prices: { "80mg": 138.00 },
    stripePrices: { "80mg": "price_1TeRXC082HX8pjNos0AvZlr3" },
    description: "Multi-compound reference blend cataloged for controlled analytical laboratory research."
  },
  {
    id: "bac-water",
    name: "BAC Water",
    category: "Laboratory Supplies",
    image: "assets/products/bac-water.jpg",
    sizes: ["5mL", "10mL"],
    prices: { "5mL": 20.00, "10mL": 30.00 },
    stripePrices: { "5mL": "price_1Texf0082HX8pjNojpzcL51n", "10mL": "price_1TexfQ082HX8pjNot1YmZpWZ" },
    description: "Bacteriostatic water supply item for catalog completeness. Include manufacturer, sterility, expiration, and handling documentation."
  }
];

let activeCategory = "all";
let catalogSearchQuery = "";
const cart = new Map();

const categoryTabs = document.querySelector("#categoryTabs");
const categoryList = document.querySelector("#categoryList");
const catalogCount = document.querySelector("#catalogCount");
const catalogSearch = document.querySelector("#catalogSearch");
const catalogSearchClear = document.querySelector("#catalogSearchClear");
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
const handling = document.querySelector("#handling");
const processing = document.querySelector("#processing");
const total = document.querySelector("#total");
const checkoutJump = document.querySelector("#checkoutJump");
const checkoutSummary = document.querySelector("#checkoutSummary");
const checkoutForm = document.querySelector("#checkoutForm");

if (!document.querySelector("#verificationGate")) {
  document.body.insertAdjacentHTML("afterbegin", `
    <div class="verification-gate" id="verificationGate" role="dialog" aria-modal="true" aria-labelledby="verificationTitle">
      <div class="verification-backdrop" aria-hidden="true"></div>
      <section class="verification-panel">
        <img class="verification-logo" src="atomlabs-research-logo.png" alt="AtomLabs Research">
        <p class="verification-kicker">Research use only</p>
        <h2 id="verificationTitle">Researcher verification</h2>
        <p class="verification-intro">
          AtomLabs sells research compounds exclusively to qualified researchers and laboratories
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

if (!document.querySelector("#updates")) {
  const faqSection = document.querySelector("#faq");
  const categoriesSection = document.querySelector("#categories");
  const updatesMarkup = `
    <section class="updates-section" id="updates">
      <div class="updates-copy">
        <img class="section-logo" src="atomlabs-research-logo.png" alt="AtomLabs Research">
        <p class="eyebrow">AtomLabs updates</p>
        <h2>Be first to hear what is next</h2>
        <p>Join the AtomLabs email list for research catalog additions, inventory notices, documentation updates, and bulk-order information.</p>
        <div class="updates-points" aria-label="Member update benefits">
          <span>Bulk-order notices</span><span>New catalog arrivals</span><span>Restock alerts</span>
        </div>
      </div>
      <form class="updates-form" id="updatesForm">
        <label>Email address<input required name="updatesEmail" type="email" autocomplete="email" placeholder="name@example.com"></label>
        <fieldset>
          <legend>Send me</legend>
          <label class="updates-choice"><input checked type="checkbox" name="sales"><span>Bulk-order and account notices</span></label>
          <label class="updates-choice"><input checked type="checkbox" name="catalog"><span>New compounds and inventory updates</span></label>
        </fieldset>
        <label class="updates-consent"><input required type="checkbox" name="updatesConsent"><span>I agree to receive AtomLabs email updates. I can unsubscribe at any time.</span></label>
        <button class="updates-submit" type="submit">Join AtomLabs updates</button>
        <p class="updates-status" id="updatesStatus" role="status"></p>
      </form>
    </section>
  `;
  if (faqSection) faqSection.insertAdjacentHTML("beforebegin", updatesMarkup);
  else categoriesSection?.insertAdjacentHTML("afterend", updatesMarkup);
}

if (!document.querySelector("#updatesFallbackStyles")) {
  const updatesStyles = document.createElement("style");
  updatesStyles.id = "updatesFallbackStyles";
  updatesStyles.textContent = `
    .updates-section{display:grid;grid-template-columns:minmax(260px,.9fr) minmax(300px,1.1fr);gap:clamp(30px,6vw,82px);align-items:center;padding:clamp(48px,8vw,94px) clamp(18px,5vw,72px);background:#eff6f5;border-block:1px solid #d9e2e5}.updates-copy h2{max-width:11ch;margin:8px 0 14px;font-size:clamp(2.1rem,5vw,4rem);line-height:1}.updates-copy>p:last-of-type{max-width:600px;color:#65717f}.updates-points{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}.updates-points span{padding:8px 11px;color:#075665;background:#fff;border:1px solid #cde4df;border-radius:999px;font-size:.8rem;font-weight:800}.updates-form{display:grid;gap:15px;padding:clamp(20px,4vw,34px);background:#fff;border:1px solid #d9e2e5;border-radius:8px;box-shadow:0 18px 50px rgba(24,33,43,.12)}.updates-form fieldset{display:grid;gap:8px;margin:0;padding:14px;border:1px solid #d9e2e5;border-radius:8px}.updates-form legend{padding:0 6px;color:#65717f;font-size:.82rem;font-weight:800}.updates-choice,.updates-consent{display:grid;grid-template-columns:20px 1fr;gap:10px;align-items:start;color:#18212b;font-size:.88rem}.updates-choice input,.updates-consent input{width:18px;min-height:18px;height:18px;margin:1px 0 0;accent-color:#075665}.updates-submit{min-height:48px;color:#fff;background:#075665;border:0;border-radius:8px;font-weight:900;cursor:pointer}.updates-status{min-height:22px;margin:0;color:#075665;font-size:.88rem;font-weight:800}@media(max-width:920px){.updates-section{grid-template-columns:1fr}}
  `;
  document.head.appendChild(updatesStyles);
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
        <span>Free shipping on $150+ orders</span>
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
      <div class="contact-actions">
        <a class="contact-email" href="mailto:atomlabsresearch@gmail.com">atomlabsresearch@gmail.com</a>
        <a class="terms-link" href="terms.html">Terms of Service</a>
      </div>
    </section>
  `);
}

if (!document.querySelector("#contactFallbackStyles")) {
  const contactStyles = document.createElement("style");
  contactStyles.id = "contactFallbackStyles";
  contactStyles.textContent = `
    .contact-band{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:28px;align-items:center;padding:clamp(38px,6vw,66px) clamp(18px,4vw,56px);color:#18212b;background:#eff6f5;border-top:1px solid #d9e2e5}
    .contact-band h2{margin:6px 0 10px}.contact-band p:last-child{max-width:680px;margin:0;color:#65717f}.contact-email{padding:14px 18px;color:#fff;background:#075665;border-radius:8px;font-weight:800;overflow-wrap:anywhere}.contact-actions{display:grid;gap:10px}.terms-link{padding:10px 14px;color:#075665;border:1px solid #cde4df;border-radius:8px;font-weight:800;text-align:center}
    @media(max-width:920px){.contact-band{grid-template-columns:1fr}}
  `;
  document.head.appendChild(contactStyles);
}

if (!Array.from(document.querySelectorAll(".nav-links a")).some((link) => link.getAttribute("href") === "terms.html")) {
  const checkoutNavLink = Array.from(document.querySelectorAll(".nav-links a")).find((link) => link.getAttribute("href") === "#checkout");
  checkoutNavLink?.insertAdjacentHTML("beforebegin", '<a href="terms.html">Terms</a>');
}

if (!Array.from(document.querySelectorAll(".nav-links a")).some((link) => link.getAttribute("href") === "#updates")) {
  const termsNavLink = Array.from(document.querySelectorAll(".nav-links a")).find((link) => link.getAttribute("href") === "terms.html");
  termsNavLink?.insertAdjacentHTML("beforebegin", '<a href="#updates">Updates</a>');
}

const liveContactActions = document.querySelector(".contact-actions");
if (!liveContactActions && document.querySelector(".contact-email")) {
  const liveContactEmail = document.querySelector(".contact-email");
  liveContactEmail.insertAdjacentHTML("afterend", '<a class="terms-link" href="terms.html">Terms of Service</a>');
}

if (!document.querySelector(".terms-acceptance")) {
  const checkoutSubmitButton = document.querySelector(".checkout-button");
  checkoutSubmitButton.insertAdjacentHTML("beforebegin", `
    <label class="terms-acceptance">
      <input required type="checkbox" name="termsAccepted">
      <span>I confirm that I am at least 21 years old and agree to the <a href="terms.html" target="_blank" rel="noopener">AtomLabs Terms of Service</a>.</span>
    </label>
  `);
}

if (!document.querySelector("#termsLinkFallbackStyles")) {
  const termsLinkStyles = document.createElement("style");
  termsLinkStyles.id = "termsLinkFallbackStyles";
  termsLinkStyles.textContent = `
    .contact-actions{display:grid;gap:10px}.terms-link{padding:10px 14px;color:#075665;border:1px solid #cde4df;border-radius:8px;font-weight:800;text-align:center}
    .terms-acceptance{display:grid;grid-template-columns:22px 1fr;gap:10px;align-items:start;padding:14px;background:#eff6f5;border:1px solid #cde4df;border-radius:8px}.terms-acceptance input{width:20px;min-height:20px;height:20px;margin:1px 0 0;accent-color:#075665}.terms-acceptance a{color:#075665;text-decoration:underline;text-underline-offset:3px}
  `;
  document.head.appendChild(termsLinkStyles);
}

if (!document.querySelector(".shipping-announcement")) {
  const siteWatermark = document.querySelector(".site-watermark");
  siteWatermark.insertAdjacentHTML("afterend", `
    <div class="shipping-announcement">
      <strong>Free shipping on $150+ orders</strong>
      <span>Fast fulfillment from AtomLabs Research</span>
      <a href="#catalog">View catalog</a>
    </div>
  `);
}

if (!document.querySelector(".bulk-shipping-callout")) {
  const catalogToolbar = document.querySelector(".catalog-toolbar");
  catalogToolbar.insertAdjacentHTML("afterend", `
    <div class="bulk-shipping-callout" style="display: none;">
      <strong>Cart fees</strong>
      <span>$10 shipping, $5 handling per vial, and $2 processing per vial. Cart discounts combine across all vials. Shipping is free on orders $150+.</span>
      <a href="mailto:atomlabsresearch@gmail.com?subject=Bulk%20order%20request">Contact us</a>
    </div>
  `);
}

const standardsShippingBadge = Array.from(document.querySelectorAll(".standards-badges span"))
  .find((item) => item.textContent.toLowerCase().includes("free"));
if (standardsShippingBadge) standardsShippingBadge.textContent = "Free shipping on $150+ orders";

const bulkPerk = Array.from(document.querySelectorAll(".perk-card"))
  .find((item) => item.textContent.toLowerCase().includes("bulk order"));
if (bulkPerk) {
  bulkPerk.querySelector("h3").textContent = "Free $150+ shipping";
  bulkPerk.querySelector("p").textContent = "Orders of $150 or more receive free shipping and can be reviewed for preferred pricing before checkout is finalized.";
}

const checkoutNote = document.querySelector(".checkout-note");
if (checkoutNote) {
  checkoutNote.textContent = "Same-day Miami-area fulfillment may be available. Orders of $150 or more receive free shipping. Returning qualified research accounts may receive preferred terms.";
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

if (!document.querySelector("#volumeOfferFallbackStyles")) {
  const volumeOfferStyles = document.createElement("style");
  volumeOfferStyles.id = "volumeOfferFallbackStyles";
  volumeOfferStyles.textContent = `
    .volume-offers{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.volume-offers-label{grid-column:1/-1;color:#65717f;font-size:.75rem;font-weight:800;text-transform:uppercase}
    .volume-offers button{display:grid;gap:1px;min-width:0;padding:7px 3px;color:#075665;background:#eff6f5;border:1px solid #cde4df;border-radius:6px;cursor:pointer}.volume-offers button:hover{color:#fff;background:#075665}.volume-offers button strong{font-size:.82rem}.volume-offers button span{font-size:.62rem;font-weight:800}
  `;
  document.head.appendChild(volumeOfferStyles);
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
const updatesForm = document.querySelector("#updatesForm");
const updatesStatus = document.querySelector("#updatesStatus");

updatesForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(updatesForm);
  const email = String(data.get("updatesEmail") || "").trim();
  const interests = [];
  if (data.get("sales")) interests.push("bulk-order and account notices");
  if (data.get("catalog")) interests.push("new compounds and inventory updates");
  const subject = encodeURIComponent("Join AtomLabs updates");
  const body = encodeURIComponent(`Please add ${email} to AtomLabs updates.\n\nInterests: ${interests.join(", ") || "all updates"}.`);
  updatesStatus.textContent = "Opening your email app to confirm your update request.";
  window.location.href = `mailto:atomlabsresearch@gmail.com?subject=${subject}&body=${body}`;
});
const formNote = document.querySelector("#formNote");
const checkoutButton = checkoutForm.querySelector(".checkout-button");

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const PRICE_REDUCTION = 17;
const SHIPPING_FEE = 10;
const HANDLING_FEE = 5;
const PROCESSING_FEE = 2;
const FREE_SHIPPING_SUBTOTAL = 150;

function itemKey(productId, size) {
  return `${productId}__${size}`;
}

function formatPrice(value) {
  return money.format(value);
}

function getVolumeDiscount(quantity) {
  if (quantity >= 10) return 0.20;
  if (quantity >= 5) return 0.15;
  if (quantity >= 3) return 0.10;
  if (quantity >= 2) return 0.05;
  return 0;
}

function getDiscountedUnitPrice(price, quantity) {
  return Math.round(price * (1 - getVolumeDiscount(quantity)) * 100) / 100;
}

function formatDiscountLabel(discount) {
  return discount ? `${Math.round(discount * 100)}% off` : "";
}

function getAdjustedUnitPrice(price) {
  return Math.max(0, Math.round((price - PRICE_REDUCTION) * 100) / 100);
}

function getStartingPrice(product) {
  return getAdjustedUnitPrice(product.prices[product.sizes[0]]);
}

function getCartTotals(entries) {
  const itemCount = entries.reduce((sum, item) => sum + item.quantity, 0);
  const cartDiscount = getVolumeDiscount(itemCount);
  const originalSubtotalValue = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountValue = Math.round(originalSubtotalValue * cartDiscount * 100) / 100;
  const subtotalValue = originalSubtotalValue - discountValue;
  const savingsValue = originalSubtotalValue - subtotalValue;
  const shippingValue = subtotalValue > 0 && subtotalValue < FREE_SHIPPING_SUBTOTAL ? SHIPPING_FEE : 0;
  const handlingValue = itemCount * HANDLING_FEE;
  const processingValue = itemCount * PROCESSING_FEE;
  const totalValue = subtotalValue + shippingValue + handlingValue + processingValue;

  return {
    itemCount,
    cartDiscount,
    subtotalValue,
    savingsValue,
    shippingValue,
    handlingValue,
    processingValue,
    totalValue
  };
}

function getProductsForCategory() {
  const categoryProducts = activeCategory === "all"
    ? products
    : products.filter((product) => product.category === activeCategory);

  const query = catalogSearchQuery.trim().toLowerCase();
  if (!query) return categoryProducts;

  return categoryProducts.filter((product) => {
    const searchText = [
      product.name,
      product.category,
      product.description,
      ...product.sizes
    ].join(" ").toLowerCase();

    return searchText.includes(query);
  });
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
  const hasSearch = Boolean(catalogSearchQuery.trim());
  catalogCount.textContent = `${visibleProducts.length} item${visibleProducts.length === 1 ? "" : "s"} shown${hasSearch ? " for your search" : ""}`;

  productGrid.innerHTML = visibleProducts.length ? visibleProducts.map((product) => `
    <article class="product-card">
      <img class="card-watermark" src="atomlabs-research-logo.png" alt="">
      <div class="product-image-frame ${product.image ? "" : "fallback"}">
        <img src="${product.image || "atomlabs-research-logo.png"}" alt="${product.name} product image" loading="lazy" decoding="async">
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
          ${product.sizes.map((size) => `<option value="${size}">${size} - ${formatPrice(getAdjustedUnitPrice(product.prices[size]))}</option>`).join("")}
        </select>
      </div>
      <div class="volume-offers" aria-label="Volume discounts for ${product.name}">
        <span class="volume-offers-label">Buy more, save more</span>
        <button type="button" data-product="${product.id}" data-quantity="2"><strong>2</strong><span>5% off</span></button>
        <button type="button" data-product="${product.id}" data-quantity="3"><strong>3+</strong><span>10% off</span></button>
        <button type="button" data-product="${product.id}" data-quantity="5"><strong>5+</strong><span>15% off</span></button>
        <button type="button" data-product="${product.id}" data-quantity="10"><strong>10+</strong><span>20% off</span></button>
      </div>
      <div class="product-actions">
        <span class="price">From ${formatPrice(getStartingPrice(product))}</span>
        <button class="add-button" type="button" data-product="${product.id}">Add to cart</button>
      </div>
    </article>
  `).join("") : `
    <div class="catalog-empty">
      <strong>No matching compounds found</strong>
      <span>Try a different name, category, size, or clear the current search.</span>
    </div>
  `;
}

function renderCategories() {
  categoryList.innerHTML = categories.map((category) => `
    <article class="blend-card">
      <img class="card-watermark category-watermark" src="atomlabs-research-logo.png" alt="">
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
  const {
    itemCount,
    cartDiscount,
    subtotalValue,
    savingsValue,
    shippingValue,
    handlingValue,
    processingValue,
    totalValue
  } = getCartTotals(entries);

  cartCount.textContent = itemCount;
  cartEmpty.hidden = entries.length > 0;
  subtotal.textContent = formatPrice(subtotalValue);
  shipping.textContent = entries.length > 0 && shippingValue === 0 ? "Free" : formatPrice(shippingValue);
  if (handling) handling.textContent = formatPrice(handlingValue);
  if (processing) processing.textContent = formatPrice(processingValue);
  total.textContent = formatPrice(totalValue);

  cartItems.innerHTML = entries.map((item) => `
    <div class="cart-item">
      <img class="cart-item-logo" src="atomlabs-research-logo.png" alt="">
      <div>
        <strong>${item.name}</strong>
        <p>${item.size} · ${item.category} · ${formatPrice(item.price)}/ea${cartDiscount ? ` · ${formatDiscountLabel(cartDiscount)} applied to cart subtotal` : ""}</p>
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
      <span>${itemCount} item${itemCount === 1 ? "" : "s"} selected.${cartDiscount ? ` Cart discount: ${formatDiscountLabel(cartDiscount)} after subtotal.` : ""} Shipping: ${shippingValue === 0 ? "Free" : formatPrice(shippingValue)}. Handling: ${formatPrice(handlingValue)}. Processing: ${formatPrice(processingValue)}. Total: ${formatPrice(totalValue)}.${savingsValue > 0 ? ` You save ${formatPrice(savingsValue)}.` : ""}</span>
    `;
}

function addToCart(productId, quantity = 1) {
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
    price: getAdjustedUnitPrice(product.prices[selectedSize]),
    stripePriceId,
    quantity: Math.min(20, existing ? existing.quantity + quantity : quantity)
  });

  renderCart();
  setCartOpen(true);
}

function updateQuantity(key, direction) {
  const item = cart.get(key);
  if (!item) return;

  const nextQuantity = direction === "increase" ? Math.min(20, item.quantity + 1) : item.quantity - 1;
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

catalogSearch.addEventListener("input", () => {
  catalogSearchQuery = catalogSearch.value;
  catalogSearchClear.classList.toggle("visible", Boolean(catalogSearchQuery));
  renderProducts();
});

catalogSearchClear.addEventListener("click", () => {
  catalogSearch.value = "";
  catalogSearchQuery = "";
  catalogSearchClear.classList.remove("visible");
  catalogSearch.focus();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  addToCart(button.dataset.product, Number.parseInt(button.dataset.quantity, 10) || 1);
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
