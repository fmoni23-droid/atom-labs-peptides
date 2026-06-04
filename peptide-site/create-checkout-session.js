const Stripe = require("stripe");

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
  "price_1TeRXb082HX8pjNoiHdx7Zt9",
  "price_1TeRY5082HX8pjNoSpW0zVzg"
]);

function getSiteUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  if (req.headers.origin) return req.headers.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: "Stripe is not configured yet." });
  }

  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  if (!items.length) {
    return res.status(400).json({ error: "Your cart is empty." });
  }

  const lineItems = items.map((item) => {
    const price = String(item.priceId || "");
    const quantity = Math.max(1, Math.min(20, Number.parseInt(item.quantity, 10) || 1));

    if (!allowedPrices.has(price)) {
      throw new Error("Invalid checkout item.");
    }

    return { price, quantity };
  });

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const siteUrl = getSiteUrl(req);
    const customerEmail = typeof req.body?.customer?.email === "string"
      ? req.body.customer.email.trim()
      : undefined;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      customer_email: customerEmail || undefined,
      phone_number_collection: { enabled: true },
      shipping_address_collection: {
        allowed_countries: ["US"]
      },
      metadata: {
        source: "atomlabs-peptides-site"
      },
      success_url: `${siteUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/index.html#checkout`
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(400).json({ error: error.message || "Unable to start checkout." });
  }
};
