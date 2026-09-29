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
  },
  {
    id: "costillas",
    name: "Costillas BBQ ahumadas",
    category: "principales",
    price: 42000,
    image: "assets/costillas.svg",
    description: "Costillas de cerdo glaseadas en salsa BBQ ahumada, papas criollas y ensalada de repollo."
  },
  {
    id: "salmon",
    name: "Salmon a la parrilla",
    category: "principales",
    price: 45000,
    image: "assets/salmon.svg",
    description: "Salmon a la parrilla con costra de hierbas, pure de auyama y vegetales salteados."
  },
  {
    id: "lomo",
    name: "Lomo al trapo",
    category: "principales",
    price: 48000,
    image: "assets/lomo.svg",
    description: "Lomo de res cocido al trapo con sal de hierbas, papas doradas y chimichurri."
  },
  {
    id: "arepa",
    name: "Arepa rellena de queso y carne",
    category: "principales",
    price: 26000,
    image: "assets/arepa.svg",
    description: "Arepa de maiz blanco rellena de queso campesino y carne desmechada, con suero costeno."
  },
  {
    id: "carneasada",
    name: "Carne asada a la llanera",
    category: "principales",
    price: 39000,
    image: "assets/carneasada.svg",
    description: "Carne de res asada al carbon, yuca frita, ensalada fresca y aji casero."
  },
  {
    id: "trucha",
    name: "Trucha a la plancha",
    category: "principales",
    price: 36000,
    image: "assets/trucha.svg",
    description: "Trucha fresca a la plancha con limon, arroz de coco y patacones."
  },
  {
    id: "hamburguesa",
    name: "Hamburguesa Brasa Norte",
    category: "principales",
    price: 32000,
    image: "assets/hamburguesa.svg",
    description: "Hamburguesa de carne angus, queso cheddar, tocineta y salsa de la casa con papas."
  },
  {
    id: "fajitas",
    name: "Fajitas mixtas",
    category: "principales",
    price: 37000,
    image: "assets/fajitas.svg",
    description: "Tiras de pollo y res salteadas con pimentones, cebolla y tortillas de maiz."
  },
  {
    id: "jugomora",
    name: "Jugo de mora",
    category: "bebidas",
    price: 8000,
    image: "assets/jugomora.svg",
    description: "Mora fresca licuada con agua o leche, endulzada al gusto."
  },
  {
    id: "te",
    name: "Te helado de frutos rojos",
    category: "bebidas",
    price: 9000,
    image: "assets/te.svg",
    description: "Te negro infusionado en frio con frutos rojos y un toque de menta."
  },
  {
    id: "cerveza",
    name: "Cerveza artesanal",
    category: "bebidas",
    price: 12000,
    image: "assets/cerveza.svg",
    description: "Cerveza artesanal tipo ale, dorada y refrescante, servida bien fria."
  },
  {
    id: "agualimon",
    name: "Agua de panela con limon",
    category: "bebidas",
    price: 7000,
    image: "assets/agualimon.svg",
    description: "Agua de panela fria con limon natural, la bebida tradicional de la casa."
  },
  {
    id: "malteada",
    name: "Malteada de vainilla",
    category: "bebidas",
    price: 11000,
    image: "assets/malteada.svg",
    description: "Malteada cremosa de vainilla con un toque de canela."
  },
  {
    id: "soda",
    name: "Soda italiana de maracuya",
    category: "bebidas",
    price: 9500,
    image: "assets/soda.svg",
    description: "Soda italiana con jarabe de maracuya y un toque de limon."
  },
  {
    id: "flan",
    name: "Flan de cafe",
    category: "postres",
    price: 13000,
    image: "assets/flan.svg",
    description: "Flan casero de cafe con caramelo suave."
  },
  {
    id: "cheesecake",
    name: "Cheesecake de mora",
    category: "postres",
    price: 15500,
    image: "assets/cheesecake.svg",
    description: "Cheesecake cremoso con cobertura de mora silvestre."
  },
  {
    id: "helado",
    name: "Helado artesanal de vainilla",
    category: "postres",
    price: 9000,
    image: "assets/helado.svg",
    description: "Dos bolas de helado artesanal de vainilla con barquillo."
  },
  {
    id: "brownie",
    name: "Brownie con nuez",
    category: "postres",
    price: 12500,
    image: "assets/brownie.svg",
    description: "Brownie de chocolate tibio con nueces y helado de vainilla."
  },
  {
    id: "tresleches",
    name: "Torta tres leches",
    category: "postres",
    price: 14000,
    image: "assets/tresleches.svg",
    description: "Torta esponjosa banada en tres leches con un toque de canela."
  },
  {
    id: "arrozdeleche",
    name: "Arroz con leche",
    category: "postres",
    price: 8500,
    image: "assets/arrozdeleche.svg",
    description: "Arroz con leche cremoso con canela y pasas."
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
const customerName = document.querySelector("#customerName");
const methodField = document.querySelector("#methodField");
const deliveryMethod = document.querySelector("#deliveryMethod");
const addressField = document.querySelector("#addressField");
const customerAddress = document.querySelector("#customerAddress");
const tableField = document.querySelector("#tableField");
const tableNumber = document.querySelector("#tableNumber");
const noteField = document.querySelector("#noteField");
const submitOrderButton = document.querySelector("#submitOrderButton");
const confirmModal = document.querySelector("#confirmModal");
const confirmSummary = document.querySelector("#confirmSummary");
const orderModal = document.querySelector("#orderModal");
const orderSummary = document.querySelector("#orderSummary");
const orderTitle = document.querySelector("#orderTitle");
const statusList = document.querySelector("#statusList");

function sanitizeCart(value) {
  const result = {};
  if (!value || typeof value !== "object" || Array.isArray(value)) return result;
  for (const item of menuItems) {
    const qty = value[item.id];
    if (Number.isInteger(qty) && qty > 0) result[item.id] = Math.min(qty, 99);
  }
  return result;
}

function loadCart() {
  try { return sanitizeCart(JSON.parse(localStorage.getItem("brasaNorteCart") || "{}")); }
  catch { return {}; }
}

let cart = loadCart();
let searchTerm = "";
function announce(message) {
  document.querySelector("#feedback").textContent = message;
}
let activeCategory = "todos";
let statusTimer = null;
let pendingOrderData = null;
let deliveryFieldsUnlocked = false;

function formatPrice(value) {
  return currency.format(value).replace(/\s/g, " ");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function saveCart() {
  try { localStorage.setItem("brasaNorteCart", JSON.stringify(cart)); }
  catch { announce("No se pudo guardar el carrito. Puedes continuar en esta pestaña."); }
}

function renderMenu() {
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const visibleItems = menuItems.filter(item =>
    (activeCategory === "todos" || item.category === activeCategory) &&
    normalize(item.name + " " + item.description).includes(normalize(searchTerm)));
  document.querySelector("#resultCount").textContent = `${visibleItems.length} opciones`;

  if (!visibleItems.length) {
    menuGrid.innerHTML = '<p class="empty-cart">No encontramos coincidencias. Prueba otra búsqueda o categoría.</p>';
    return;
  }
  menuGrid.innerHTML = visibleItems.map((item, index) => `
    <article class="menu-card" style="animation-delay: ${index * 70}ms">
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="260" />
      <div class="menu-card-body">
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <div class="card-bottom">
          <span class="price">${formatPrice(item.price)}</span>
          <button class="add-button" type="button" data-add="${item.id}" aria-label="Agregar ${item.name}">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");
}

function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealEls.length) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));
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

function updateDeliveryFields() {
  const isDomicilio = deliveryMethod.value === "domicilio";
  const isMesa = deliveryMethod.value === "mesa";

  addressField.hidden = !deliveryFieldsUnlocked || !isDomicilio;
  customerAddress.required = deliveryFieldsUnlocked && isDomicilio;
  customerAddress.disabled = !deliveryFieldsUnlocked || !isDomicilio;

  tableField.hidden = !deliveryFieldsUnlocked || !isMesa;
  tableNumber.required = deliveryFieldsUnlocked && isMesa;
  tableNumber.disabled = !deliveryFieldsUnlocked || !isMesa;
}

function revealNoteField() {
  noteField.hidden = false;
  submitOrderButton.hidden = false;
  submitOrderButton.disabled = false;
}

function handleDeliveryMethodChange() {
  deliveryFieldsUnlocked = true;
  updateDeliveryFields();
  if (deliveryMethod.value === "recoger") revealNoteField();
}

function revealMethodField() {
  if (!customerName.value.trim()) return;
  methodField.hidden = false;
  handleDeliveryMethodChange();
}

function describeDelivery(formData) {
  const method = formData.get("deliveryMethod");
  if (method === "domicilio") return `domicilio en ${escapeHtml(formData.get("customerAddress"))}`;
  if (method === "mesa") return `la mesa ${escapeHtml(formData.get("tableNumber"))}`;
  return "recoger en restaurante";
}

function renderCart() {
  const entries = getCartEntries();
  const subtotal = getSubtotal();
  const delivery = getDeliveryCost();
  const totalItems = entries.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = totalItems;
  document.querySelector("#openCart").setAttribute("aria-label", `Abrir carrito: ${totalItems} productos`);
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
            <button class="qty-button" type="button" data-decrease="${item.id}" aria-label="Reducir ${item.name}">-</button>
            <strong>${item.qty}</strong>
            <button class="qty-button" type="button" data-increase="${item.id}" aria-label="Aumentar ${item.name}" ${item.qty >= 99 ? "disabled" : ""}>+</button>
          </div>
        </div>
        <button class="remove-button" type="button" data-remove="${item.id}">Quitar</button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  if (!menuItems.some((item) => item.id === id)) return;
  cart[id] = Math.min((cart[id] || 0) + 1, 99);
  saveCart();
  renderCart();
  bumpCartCount();
}

function bumpCartCount() {
  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");
}

function changeQty(id, amount) {
  if (!menuItems.some((item) => item.id === id)) return;
  cart[id] = Math.min((cart[id] || 0) + amount, 99);
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

let lastFocusedElement = null;

function getFocusableElements(container) {
  return [...container.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => el.offsetParent !== null);
}

function trapFocus(event) {
  if (event.key !== "Tab") return;
  const focusable = getFocusableElements(cartPanel);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openCart() {
  lastFocusedElement = document.activeElement;
  cartPanel.inert = false;
  document.querySelector("main").inert = true;
  document.querySelector(".site-header").inert = true;
  document.body.style.overflow = "hidden";
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.querySelector("#openCart").setAttribute("aria-expanded", "true");
  document.addEventListener("keydown", handleCartKeydown);
  const closeButton = document.querySelector("#closeCart");
  closeButton.focus();
}

function closeCart() {
  cartPanel.inert = true;
  document.querySelector("main").inert = false;
  document.querySelector(".site-header").inert = false;
  document.body.style.overflow = "";
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.querySelector("#openCart").setAttribute("aria-expanded", "false");
  document.removeEventListener("keydown", handleCartKeydown);
  if (lastFocusedElement) lastFocusedElement.focus();
}

function handleCartKeydown(event) {
  if (event.key === "Escape") {
    closeCart();
    return;
  }
  trapFocus(event);
}

function placeOrder(formData) {
  const entries = getCartEntries();
  if (!entries.length) return;
  const subtotal = getSubtotal();
  const delivery = getDeliveryCost();
  const orderNumber = Math.floor(10000 + Math.random() * 90000);
  const itemList = entries.map((item) => `${item.qty} x ${item.name}`).join("<br>");

  orderTitle.textContent = `Simulación #${orderNumber}`;
  orderSummary.innerHTML = `
    <strong>${escapeHtml(formData.get("customerName"))}</strong>, esta es tu simulación para
    <strong>${describeDelivery(formData)}</strong>.<br>
    ${itemList}<br>
    <strong>Total del pedido: ${formatPrice(subtotal + delivery)}</strong>
  `;

  [...statusList.children].forEach((item, index) => {
    item.classList.toggle("active", index === 0);
  });

  const labels = formData.get("deliveryMethod") === "domicilio"
    ? ["Simulado", "En preparación", "En camino", "Entregado"]
    : ["Simulado", "En preparación", "Listo", "Retirado"];
  [...statusList.children].forEach((item, index) => { item.textContent = labels[index]; });
  cart = {};
  saveCart();
  renderCart();
  checkoutForm.reset();
  updateDeliveryFields();
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
    filters.forEach((filter) => {
      filter.classList.toggle("active", filter === button);
      filter.setAttribute("aria-pressed", String(filter === button));
    });
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

customerName.addEventListener("input", revealMethodField);

deliveryMethod.addEventListener("change", () => {
  handleDeliveryMethodChange();
  renderCart();
});

customerAddress.addEventListener("input", () => {
  if (deliveryMethod.value === "domicilio" && customerAddress.value.trim()) revealNoteField();
});

tableNumber.addEventListener("input", () => {
  if (deliveryMethod.value === "mesa" && tableNumber.value.trim()) revealNoteField();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!getCartEntries().length) {
    openCart();
    return;
  }
  customerName.setCustomValidity(customerName.value.trim() ? "" : "Escribe un nombre.");
  customerAddress.setCustomValidity(customerAddress.disabled || customerAddress.value.trim() ? "" : "Escribe una dirección.");
  if (!checkoutForm.reportValidity()) return;

  pendingOrderData = new FormData(checkoutForm);
  const note = pendingOrderData.get("orderNote");
  confirmSummary.innerHTML = `
    <dl class="confirm-list">
      <div><dt>Productos</dt><dd>${getCartEntries().map(item => `${item.qty} × ${item.name} — ${formatPrice(item.price * item.qty)}`).join("<br>")}</dd></div>
      <div><dt>Envío</dt><dd>${formatPrice(getDeliveryCost())}</dd></div>
      <div><dt>Total</dt><dd>${formatPrice(getSubtotal() + getDeliveryCost())}</dd></div>
      <div><dt>Nombre</dt><dd>${escapeHtml(pendingOrderData.get("customerName"))}</dd></div>
      <div><dt>Entrega</dt><dd>${describeDelivery(pendingOrderData)}</dd></div>
      ${note ? `<div><dt>Nota</dt><dd>${escapeHtml(note)}</dd></div>` : ""}
    </dl>
  `;
  confirmModal.showModal();
});

document.querySelector("#editOrder").addEventListener("click", () => {
  confirmModal.close();
});

document.querySelector("#closeConfirm").addEventListener("click", () => {
  confirmModal.close();
});

document.querySelector("#confirmOrderButton").addEventListener("click", () => {
  if (!pendingOrderData) return;
  confirmModal.close();
  placeOrder(pendingOrderData);
  pendingOrderData = null;
});

document.querySelector("#closeModal").addEventListener("click", () => {
  clearInterval(statusTimer);
  orderModal.close();
});

document.querySelector("#menuSearch").addEventListener("input", event => {
  searchTerm = event.target.value;
  renderMenu();
});
orderModal.addEventListener("close", () => clearInterval(statusTimer));
confirmModal.addEventListener("cancel", () => { pendingOrderData = null; });
[customerName, customerAddress].forEach(input => input.addEventListener("input", () => input.setCustomValidity("")));
methodField.hidden = false;
deliveryFieldsUnlocked = true;
revealNoteField();
cartPanel.inert = true;
filters.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === activeCategory)));
updateDeliveryFields();
renderMenu();
renderCart();
initScrollReveal();
