// @ts-check
import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts', async ({ page }) => {
  // Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');
  
  // Search for "T-shirts"
  await page.fill('#search_query_top', 'T-shirts');
  await page.click('#searchbox button[name="submit_search"]');
  
  // Verify "Faded Short Sleeve T-shirts" is in the search results
  await expect(page.locator('#center_column').getByText('Faded Short Sleeve T-shirts')).toBeVisible();
});