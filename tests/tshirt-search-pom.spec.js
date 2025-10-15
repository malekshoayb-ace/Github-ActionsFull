// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts using POM', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigate();
  await homePage.searchFor('T-shirts');
  await expect(await homePage.verifyProductInResults('Faded Short Sleeve T-shirts')).toBeVisible();
});