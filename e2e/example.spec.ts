import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pizzaparty/);

  await expect(page.getByText('Pizza Party')).toBeVisible();
});

test('has error', async ({ page }) => {
  await page.goto('/login');

  await page.getByText('Register').click();

  await expect(page.getByText('Username is required')).toBeVisible();
});
