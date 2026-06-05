
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
