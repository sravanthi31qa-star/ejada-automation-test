import { test, expect } from '@playwright/test';

const BASE_URL = 'https://simple-books-api.click';
const TOKEN = 'YOUR_API_TOKEN';

test('GET books', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/books`);
  expect(response.status()).toBe(200);
  const books = await response.json();
  expect(books.length).toBeGreaterThan(0);
  //https://simple-books-api.click/books
});

test('POST order', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    data: { bookId: 1, customerName: 'John' }
  

  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.created).toBeTruthy();
  //https://simple-books-api.click/orders
});

test('PATCH order', async ({ request }) => {
  const response = await request.patch(`${BASE_URL}/orders/123`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    data: { customerName: 'JohnS' }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.customerName).toBe('John');
  //https://simple-books-api.click/orders/123
});

test('DELETE order', async ({ request }) => {
  const response = await request.delete(`${BASE_URL}/orders/123`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  expect(response.status()).toBe(204);
  //https://simple-books-api.click/orders/123
});
