# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

"Brasa Norte" — a static restaurant website with a menu, shopping cart, and order checkout. No build tools, no package manager, no dependencies: just `index.html`, `app.js`, and `styles.css` loaded directly by the browser.

## Running the site

Open `index.html` directly in a browser. There is no dev server, build step, or test suite — changes to `app.js`/`styles.css`/`index.html` are reflected on browser refresh.

## Architecture

Everything lives in three files at the repo root, wired together via `index.html`:

- **`app.js`** — all application logic in one file, structured around a single `menuItems` array (id, name, category, price, image, description) that drives both menu rendering and cart lookups. Key pieces:
  - `cart` is a plain object keyed by item id → quantity, persisted to `localStorage` under the key `brasaNorteCart` via `saveCart()`.
  - Rendering is done by rebuilding `innerHTML` from template strings (`renderMenu()`, `renderCart()`) rather than a framework/virtual DOM — there is no diffing, so re-render = full re-paint of that section.
  - Category filtering (`activeCategory`) just filters `menuItems` client-side before rendering.
  - Checkout has two steps: submitting `#checkoutForm` opens a review `<dialog>` (`#confirmModal`) summarizing the entered data (built by `describeDelivery()`) instead of placing the order immediately — "Editar datos" just closes that dialog so the user can fix the still-filled form, "Confirmar y enviar" calls `placeOrder()` with the held `pendingOrderData` (a `FormData`). `placeOrder()` generates a random order number and animates through the `#statusList` steps (Recibido → En cocina → En camino → Entregado) on a `setInterval`. There is no backend — no real payment processing or server-side persistence of orders — so this is a front-end-only demo flow even though the copy presents it as a real order confirmation.
  - Delivery method (`#deliveryMethod`: `domicilio` / `mesa` / `recoger`) drives which extra field is shown via `updateDeliveryFields()` — it toggles `hidden`/`required`/`disabled` together on `#addressField`/`#tableField` so hidden fields are excluded from both native form validation and `FormData`. Only `domicilio` incurs the `deliveryPrice` fee in `getDeliveryCost()`.
  - DOM elements are looked up once at the top of the file into `const` references and reused throughout — when adding new interactive elements, follow this pattern rather than re-querying the DOM.
- **`index.html`** — single page with anchor-based sections (`#inicio`, `#menu`, `#pedido`, `#contacto`), a slide-out cart panel (`#cartPanel`), and two `<dialog>` elements: the review step (`#confirmModal`) and the final order confirmation (`#orderModal`).
- **`assets/`** — SVG images for menu items and the hero dish, referenced by path from `menuItems` entries in `app.js`.

## Adding/editing menu items

Edit the `menuItems` array in `app.js` directly — add an SVG to `assets/` and reference it via the `image` field. `category` must match one of the filter button values in `index.html` (`principales`, `bebidas`, `postres`) or `todos`.

## Currency formatting

Prices are stored as plain numbers (COP, no decimals) and formatted for display via `Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })` in `formatPrice()`. Use this helper rather than formatting prices manually.
