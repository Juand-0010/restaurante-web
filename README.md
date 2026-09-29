# Brasa Norte

Demo de restaurante construida con HTML, CSS y JavaScript. Permite explorar 26 productos, buscar por nombre o ingrediente, filtrar categorías y completar una compra simulada.

**No procesa pagos ni envía pedidos a un restaurante.** Los precios y estados son de ejemplo. Usa datos ficticios al probar el formulario.

## Ejecutar

Abre `index.html` en un navegador moderno. No necesitas instalar dependencias para usar la web.

## Flujo de compra

1. Busca productos o selecciona una categoría.
2. Añade productos al carrito y ajusta cantidades (máximo 99 por producto).
3. Elige domicilio, mesa o recogida.
4. Revisa productos, cantidades, envío y total.
5. Edita los datos o confirma la simulación. El carrito se vacía al confirmar.

El domicilio añade 6000 COP; mesa y recogida no tienen envío. Los campos dependen de la modalidad seleccionada.

## Persistencia y privacidad

Solo se guarda el carrito en `localStorage`, bajo `brasaNorteCart`. Los datos personales del formulario no se guardan ni transmiten. Si el almacenamiento está bloqueado, la compra simulada sigue disponible durante la sesión.

Los datos recuperados se validan: se descartan identificadores desconocidos, cantidades negativas, fracciones y valores que no sean números. Las cantidades mayores que 99 se limitan a 99.

## Accesibilidad

Incluye enlace para saltar al menú, nombres accesibles en controles de cantidad, foco de teclado visible, estado de filtros y soporte para movimiento reducido. El carrito impide interactuar con el contenido principal mientras está abierto y devuelve el foco al cerrarse. Los diálogos se pueden cerrar con Escape.

## Desarrollo y pruebas

Requiere Node.js 22 o posterior para ejecutar las pruebas:

```sh
npm ci
npx playwright install chromium
npm test
```

La suite prueba búsqueda con tildes, almacenamiento dañado, límites del carrito, escape de HTML y las tres modalidades de checkout en escritorio y móvil. También comprueba persistencia y ausencia de desbordamiento horizontal. GitHub Actions ejecuta las pruebas en cada push y pull request.

## Estructura

- `index.html`: catálogo, formulario, carrito y diálogos.
- `app.js`: catálogo de productos, estado, validación y eventos.
- `styles.css`: estilos y adaptación a pantallas pequeñas.
- `assets/`: ilustraciones SVG locales.
- `tests/`: pruebas de navegador con Playwright.

Para añadir un producto, edita `menuItems` en `app.js`. Usa un identificador único, una categoría existente y un precio entero en COP.

## Alcance

El seguimiento es una animación local, no un estado de entrega real. Convertir la demo en una tienda operativa requiere un backend que valide catálogo y precios, almacene pedidos y gestione pagos, autenticación y operación del restaurante.
