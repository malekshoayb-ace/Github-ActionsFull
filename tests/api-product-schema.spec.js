// @ts-check
import { test, expect } from '@playwright/test';
import Ajv from 'ajv';

test('GET product API - with JSON Schema validation', async ({ request }) => {
  const apiUrl = 'https://fakestoreapi.com/products/1';
  
  // JSON Schema definition
  const productSchema = {
    type: 'object',
    required: ['id', 'title', 'price', 'category', 'description'],
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' }
    }
  };
  
  const response = await request.get(apiUrl);
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  
  // Validate with Ajv
  const ajv = new Ajv();
  const validate = ajv.compile(productSchema);
  const isValid = validate(responseBody);
  
  expect(isValid).toBe(true);
  if (!isValid) console.log('Schema errors:', validate.errors);
  
  console.log(`Product Title: ${responseBody.title}`);
  console.log(`Product Price: $${responseBody.price}`);
});