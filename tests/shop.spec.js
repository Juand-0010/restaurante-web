const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const url = pathToFileURL(path.resolve(__dirname, '../index.html')).href;

test('recovers corrupt storage and combines search with categories', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('brasaNorteCart', '{broken'));
  await page.goto(url);
  await expect(page.locator('.menu-card')).toHaveCount(26);
  await page.locator('#menuSearch').fill('limón');
  await page.getByRole('button', { name: 'Bebidas', exact: true }).click();
  await expect(page.locator('#resultCount')).toHaveText('3 opciones');
  await page.locator('#menuSearch').fill('no existe');
  await expect(page.locator('#menuGrid')).toContainText('No encontramos coincidencias');
});

test('rejects invalid saved quantities and caps valid quantities', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('brasaNorteCart', JSON.stringify({ brisket: 200, pollo: -3, bowl: '2', unknown: 10 })));
  await page.goto(url);
  await expect(page.locator('#cartCount')).toHaveText('99');
  await page.locator('#openCart').click();
  await expect(page.locator('[data-increase="brisket"]')).toBeDisabled();
  await page.keyboard.press('Escape');
  await expect(page.locator('#openCart')).toBeFocused();
});

for (const method of ['domicilio', 'mesa', 'recoger']) {
  test(`checkout ${method} reviews totals and clears cart`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url);
    await page.locator('[data-add="brisket"]').click();
    await page.locator('#closeCart').click();
    await page.locator('#customerName').fill('<img src=x onerror=alert(1)>');
    await page.locator('#deliveryMethod').selectOption(method);
    if (method === 'domicilio') await page.locator('#customerAddress').fill('Calle de ejemplo 12');
    if (method === 'mesa') await page.locator('#tableNumber').fill('3');
    await page.locator('#submitOrderButton').click();
    await expect(page.locator('#confirmModal')).toBeVisible();
    await expect(page.locator('#confirmSummary')).toContainText(method === 'domicilio' ? '44.500' : '38.500');
    await expect(page.locator('#confirmSummary img')).toHaveCount(0);
    await page.locator('#editOrder').click();
    await expect(page.locator('#cartCount')).toHaveText('1');
    await page.locator('#submitOrderButton').click();
    await page.locator('#confirmOrderButton').click();
    await expect(page.locator('#orderModal')).toBeVisible();
    await expect(page.locator('#orderTitle')).toContainText('Simulación');
    await expect(page.locator('#cartCount')).toHaveText('0');
    await page.keyboard.press('Escape');
    await page.reload();
    await expect(page.locator('#cartCount')).toHaveText('0');
    expect(errors).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
