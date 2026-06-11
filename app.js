const menuItems = [
  {
    id: "brisket",
    name: "Brisket ahumado",
    category: "principales",
    price: 38500,
    image: "assets/brisket.svg",
    description: "Carne lenta, papas rusticas, ensalada de la casa y salsa de panela picante."
  },
  {
    id: "pollo",
    name: "Pollo brasa norte",
    category: "principales",
    price: 32000,
    image: "assets/chicken.svg",
    description: "Medio pollo marinado en citricos, mazorca asada y chimichurri fresco."
  },
  {
    id: "bowl",
    name: "Bowl verde",
    category: "principales",
    price: 27500,
    image: "assets/bowl.svg",
    description: "Quinoa, aguacate, vegetales asados, garbanzos crocantes y aderezo de limon."
  },
  {
    id: "limonada",
    name: "Limonada de hierbabuena",
    category: "bebidas",
    price: 8500,
    image: "assets/lemonade.svg",
    description: "Limon natural, hierbabuena fresca y hielo picado."
  },
  {
    id: "cafe",
    name: "Cafe frio de panela",
    category: "bebidas",
    price: 9500,
    image: "assets/coffee.svg",
    description: "Cafe colombiano frio, leche cremosa y sirope suave de panela."
  },
  {
    id: "torta",
    name: "Torta tibia de chocolate",
    category: "postres",
    price: 14500,
    image: "assets/dessert.svg",
    description: "Bizcocho humedo, crema batida de vainilla y crocante de cacao."
  }
];

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});

const deliveryPrice = 6000;
const menuGrid = document.querySelector("#menuGrid");
const filters = document.querySelectorAll(".filter");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const subtotalEl = document.querySelector("#subtotal");
const deliveryFeeEl = document.querySelector("#deliveryFee");
const totalEl = document.querySelector("#total");
const checkoutForm = document.querySelector("#checkoutForm");
const deliveryMethod = document.querySelector("#deliveryMethod");
const orderModal = document.querySelector("#orderModal");
const orderSummary = document.querySelector("#orderSummary");
const orderTitle = document.querySelector("#orderTitle");
const statusList = document.querySelector("#statusList");

let cart = JSON.parse(localStorage.getItem("brasaNorteCart") || "{}");
let activeCategory = "todos";
let statusTimer = null;

function formatPrice(value) {
  return currency.format(value).replace(/\s/g, " ");
}

function saveCart() {
  localStorage.setItem("brasaNorteCart", JSON.stringify(cart));
}

function renderMenu() {
  const visibleItems = activeCategory === "todos"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  menuGrid.innerHTML = visibleItems.map((item) => `
    <article class="menu-card">
      <img src="${item.image}" alt="${item.name}" />
      <div class="menu-card-body">
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <div class="card-bottom">
          <span class="price">${formatPrice(item.price)}</span>
          <button class="add-button" type="button" data-add="${item.id}">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ ...menuItems.find((item) => item.id === id), qty }))
    .filter((item) => item.id);
}

function getSubtotal() {
  return getCartEntries().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getDeliveryCost() {
  return deliveryMethod.value === "domicilio" && getSubtotal() > 0 ? deliveryPrice : 0;
}

function renderCart() {
  const entries = getCartEntries();
  const subtotal = getSubtotal();
  const delivery = getDeliveryCost();
  const totalItems = entries.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = totalItems;
  subtotalEl.textContent = formatPrice(subtotal);
  deliveryFeeEl.textContent = delivery ? formatPrice(delivery) : "Gratis";
  totalEl.textContent = formatPrice(subtotal + delivery);

  if (!entries.length) {
    cartItems.innerHTML = `<p class="empty-cart">Tu carrito esta vacio. Agrega algo rico del menu.</p>`;
    return;
  }

  cartItems.innerHTML = entries.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h3>${item.name}</h3>
        <div class="cart-controls">
          <span>${formatPrice(item.price * item.qty)}</span>
          <div class="qty-controls" aria-label="Cantidad de ${item.name}">
            <button class="qty-button" type="button" data-decrease="${item.id}">-</button>
            <strong>${item.qty}</strong>
            <button class="qty-button" type="button" data-increase="${item.id}">+</button>
          </div>
        </div>
        <button class="remove-button" type="button" data-remove="${item.id}">Quitar</button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
}

function changeQty(id, amount) {
  cart[id] = (cart[id] || 0) + amount;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

function simulateOrder(formData) {
  const entries = getCartEntries();
  const subtotal = getSubtotal();
  const delivery = getDeliveryCost();
  const orderNumber = Math.floor(10000 + Math.random() * 90000);
  const itemList = entries.map((item) => `${item.qty} x ${item.name}`).join("<br>");

  orderTitle.textContent = `Orden #${orderNumber}`;
  orderSummary.innerHTML = `
    <strong>${formData.get("customerName")}</strong>, recibimos tu pedido para
    <strong>${formData.get("deliveryMethod") === "domicilio" ? "domicilio" : "recoger en restaurante"}</strong>.<br>
    ${itemList}<br>
    <strong>Total simulado: ${formatPrice(subtotal + delivery)}</strong>
  `;

  [...statusList.children].forEach((item, index) => {
    item.classList.toggle("active", index === 0);
  });

  orderModal.showModal();
  clearInterval(statusTimer);

  let step = 0;
  statusTimer = setInterval(() => {
    step += 1;
    [...statusList.children].forEach((item, index) => {
      item.classList.toggle("active", index <= step);
    });
    if (step >= statusList.children.length - 1) {
      clearInterval(statusTimer);
    }
  }, 1100);
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filters.forEach((filter) => filter.classList.toggle("active", filter === button));
    renderMenu();
  });
});

menuGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (!addButton) return;
  addToCart(addButton.dataset.add);
  openCart();
});

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) changeQty(increase.dataset.increase, 1);
  if (decrease) changeQty(decrease.dataset.decrease, -1);
  if (remove) {
    delete cart[remove.dataset.remove];
    saveCart();
    renderCart();
  }
});

document.querySelector("#openCart").addEventListener("click", openCart);
document.querySelector("#closeCart").addEventListener("click", closeCart);
document.querySelector("#closeCartBackdrop").addEventListener("click", closeCart);
document.querySelector("#goCheckout").addEventListener("click", closeCart);
document.querySelector("#clearCart").addEventListener("click", () => {
  cart = {};
  saveCart();
  renderCart();
});

deliveryMethod.addEventListener("change", renderCart);

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!getCartEntries().length) {
    openCart();
    return;
  }
  simulateOrder(new FormData(checkoutForm));
});

document.querySelector("#closeModal").addEventListener("click", () => {
  clearInterval(statusTimer);
  orderModal.close();
});

renderMenu();
renderCart();
