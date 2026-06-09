const Stripe = require("stripe");

const PRICE_REDUCTION_CENTS = 1700;
const SHIPPING_FEE_CENTS = 1000;
const HANDLING_FEE_CENTS = 500;
const PROCESSING_FEE_CENTS = 200;
const FREE_SHIPPING_SUBTOTAL_CENTS = 15000;

const allowedPrices = new Set([
  "price_1TebX7082HX8pjNo8xZBzGET",
  "price_1TebY0082HX8pjNoEWm9gkOs",
  "price_1TebYa082HX8pjNoHJRzgAkl",
  "price_1TebZ5082HX8pjNokqGt8eZp",
  "price_1TebZu082HX8pjNo8jsNVLGP",
  "price_1TeREt082HX8pjNokl3ghlAY",
  "price_1TeT1b082HX8pjNov9eMaXiQ",
  "price_1TeRGq082HX8pjNosOHqtrAE",
  "price_1TeRHN082HX8pjNovMm1QuKG",
  "price_1TeRHk082HX8pjNoPVd88Ljh",
  "price_1TeRI9082HX8pjNoezDJLpw5",
  "price_1TeRIb082HX8pjNoKGNG1ctz",
  "price_1TeRJ4082HX8pjNo8CDW3Y7f",
  "price_1TeRJS082HX8pjNoPOF1IPdr",
  "price_1TeRKd082HX8pjNoADMiyQLh",
  "price_1TeRQU082HX8pjNolRUxJAfp",
  "price_1TeRS2082HX8pjNoxC0EQnwB",
  "price_1TeRSh082HX8pjNoChr1Vdmx",
  "price_1TeRT0082HX8pjNoVMvxlAXH",
  "price_1TeRTL082HX8pjNoQ5QHgU4Y",
  "price_1TeRTp082HX8pjNo5pPE2PHW",
  "price_1TeRUE082HX8pjNo0bZ6LHwY",
  "price_1TeRUs082HX8pjNosMSwDk4e",
  "price_1TeRVV082HX8pjNodODkPPRZ",
  "price_1TeRVn082HX8pjNoijZ4F52s",
  "price_1TeRWN082HX8pjNo632EB8fu",
  "price_1TeRWo082HX8pjNouIEz6kEi",
  "price_1TeRXC082HX8pjNos0AvZlr3",
  "price_1Texf0082HX8pjNojpzcL51n",
  "price_1TexfQ082HX8pjNot1YmZpWZ"
]);

function getSiteUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  if (req.headers.origin) return req.headers.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

function getVolumeDiscount(quantity) {
  if (quantity >= 10) return 0.20;
  if (quantity >= 5) return 0.15;
  if (quantity >= 3) return 0.10;
  if (quantity >= 2) return 0.05;
  return 0;
}

function makeFeeLineItem(name, unitAmount, currency) {
  return {
    price_data: {
      currency,
      product_data: { name },
      unit_amount: unitAmount
    },
    quantity: 1
  };
}

function allocateCartDiscount(unitItems, discountRate) {
  const originalSubtotal = unitItems.reduce((sum, item) => sum + item.unitAmount, 0);
  const discountTotal = Math.round(originalSubtotal * discountRate);
  const allocations = unitItems.map((item, index) => {
    const exactDiscount = item.unitAmount * discountRate;
    const floorDiscount = Math.floor(exactDiscount);

    return {
      index,
      floorDiscount,
      remainder: exactDiscount - floorDiscount
    };
  });
  let allocated = allocations.reduce((sum, item) => sum + item.floorDiscount, 0);
  let remaining = discountTotal - allocated;

  allocations
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((item) => {
      if (remaining <= 0) return;
      item.floorDiscount += 1;
      remaining -= 1;
    });

  allocations
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      unitItems[item.index].unitAmount = Math.max(0, unitItems[item.index].unitAmount - item.floorDiscount);
    });

  return originalSubtotal - discountTotal;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.trim() : "";

  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured yet." });
  }

  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  if (!items.length) {
    return res.status(400).json({ error: "Your cart is empty." });
  }

  const checkoutItems = items.map((item) => {
    const price = String(item.priceId || "");
    const quantity = Math.max(1, Math.min(20, Number.parseInt(item.quantity, 10) || 1));

    if (!allowedPrices.has(price)) {
      throw new Error("Invalid checkout item.");
    }

    return { price, quantity };
  });

  try {
    const stripe = new Stripe(secretKey);
    const siteUrl = getSiteUrl(req);
    const itemCount = checkoutItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartDiscount = getVolumeDiscount(itemCount);
    const productData = await Promise.all(checkoutItems.map(async (item) => {
      const price = await stripe.prices.retrieve(item.price, { expand: ["product"] });

      if (!price.unit_amount || !price.currency || typeof price.product !== "object") {
        throw new Error("This item cannot use volume pricing.");
      }

      return {
        currency: price.currency,
        product: price.product.id,
        quantity: item.quantity,
        unitAmount: Math.max(0, price.unit_amount - PRICE_REDUCTION_CENTS)
      };
    }));
    const currency = productData[0]?.currency || "usd";
    const unitItems = productData.flatMap((item) => (
      Array.from({ length: item.quantity }, () => ({
        currency: item.currency,
        product: item.product,
        unitAmount: item.unitAmount
      }))
    ));
    const subtotal = allocateCartDiscount(unitItems, cartDiscount);
    const groupedItems = Array.from(unitItems.reduce((groups, item) => {
      const key = `${item.currency}:${item.product}:${item.unitAmount}`;
      const existing = groups.get(key);
      if (existing) {
        existing.quantity += 1;
      } else {
        groups.set(key, { ...item, quantity: 1 });
      }
      return groups;
    }, new Map()).values());
    const lineItems = groupedItems.map((item) => ({
      price_data: {
        currency: item.currency,
        product: item.product,
        unit_amount: item.unitAmount
      },
      quantity: item.quantity
    }));

    if (subtotal > 0 && subtotal < FREE_SHIPPING_SUBTOTAL_CENTS) {
      lineItems.push(makeFeeLineItem("Shipping Fee", SHIPPING_FEE_CENTS, currency));
    }

    lineItems.push(
      { ...makeFeeLineItem("Handling Fee", HANDLING_FEE_CENTS, currency), quantity: itemCount },
      { ...makeFeeLineItem("Processing Fee", PROCESSING_FEE_CENTS, currency), quantity: itemCount }
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      metadata: {
        source: "atomlabs-research-site"
      },
      success_url: `${siteUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/index.html#checkout`
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    const message = error.raw?.message || error.message || "Unable to start checkout.";
    return res.status(400).json({ error: message });
  }
};
