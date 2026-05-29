# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Api_Test.spec.ts >> PATCH order
- Location: tests\Api_Test.spec.ts:27:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const BASE_URL = 'https://simple-books-api.click';
  4  | const TOKEN = 'YOUR_API_TOKEN';
  5  | 
  6  | test('GET books', async ({ request }) => {
  7  |   const response = await request.get(`${BASE_URL}/books`);
  8  |   expect(response.status()).toBe(200);
  9  |   const books = await response.json();
  10 |   expect(books.length).toBeGreaterThan(0);
  11 |   //https://simple-books-api.click/books
  12 | });
  13 | 
  14 | test('POST order', async ({ request }) => {
  15 |   const response = await request.post(`${BASE_URL}/orders`, {
  16 |     headers: { Authorization: `Bearer ${TOKEN}` },
  17 |     data: { bookId: 1, customerName: 'Sravanthikodavaluru' }
  18 |         
  19 | 
  20 |   });
  21 |   expect(response.status()).toBe(201);
  22 |   const body = await response.json();
  23 |   expect(body.created).toBeTruthy();
  24 |   //https://simple-books-api.click/orders
  25 | });
  26 | 
  27 | test('PATCH order', async ({ request }) => {
  28 |   const response = await request.patch(`${BASE_URL}/orders/123`, {
  29 |     headers: { Authorization: `Bearer ${TOKEN}` },
  30 |     data: { customerName: 'sravanthiisnakula' }
  31 |   });
> 32 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |   const body = await response.json();
  34 |   expect(body.customerName).toBe('sravanthiisnakula');
  35 |   //https://simple-books-api.click/orders/123
  36 | });
  37 | 
  38 | test('DELETE order', async ({ request }) => {
  39 |   const response = await request.delete(`${BASE_URL}/orders/123`, {
  40 |     headers: { Authorization: `Bearer ${TOKEN}` }
  41 |   });
  42 |   expect(response.status()).toBe(204);
  43 |   //https://simple-books-api.click/orders/123
  44 | });
  45 | 
```