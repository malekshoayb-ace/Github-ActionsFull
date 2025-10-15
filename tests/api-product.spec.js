// @ts-check
import { test, expect } from '@playwright/test';

test('GET product API - validate response and schema', async ({ request }) => {
  // Step 1: Define API endpoint
  const apiUrl = 'https://fakestoreapi.com/products/1';
  
  // Step 2: Send GET request
  const response = await request.get(apiUrl, { timeout: 30000 });
  
  // Step 3: Verify response status is 200
  expect(response.status()).toBe(200);
  
  // Parse response body
  const responseBody = await response.json();
  
  // Step 4: Validate required keys exist
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('price');
  expect(responseBody).toHaveProperty('category');
  expect(responseBody).toHaveProperty('description');
  
  // Step 5: Validate data types
  expect(typeof responseBody.id).toBe('number');
  expect(typeof responseBody.title).toBe('string');
  expect(typeof responseBody.price).toBe('number');
  expect(typeof responseBody.category).toBe('string');
  expect(typeof responseBody.description).toBe('string');
  
  // Step 6: Log product title and price
  console.log(`Product Title: ${responseBody.title}`);
  console.log(`Product Price: $${responseBody.price}`);
});