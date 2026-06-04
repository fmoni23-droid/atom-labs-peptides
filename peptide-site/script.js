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
    prices: { "5mL": 66.50, "10mL": 69.75 },
    stripePrices: { "5mL": "price_1TeRXb082HX8pjNoiHdx7Zt9", "10mL": "price_1TeRY5082HX8pjNoSpW0zVzg" },
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
