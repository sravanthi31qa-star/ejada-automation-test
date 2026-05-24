import { test, expect } from '@playwright/test';

const BASE_URL = 'https://simple-books-api.glitch.me';
const TOKEN = 'your_api_token_here'; 

test('GET all books', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/books`);
  expect(response.status()).toBe(200);
  const books = await response.json();
  expect(books.length).toBeGreaterThan(0);
});

test('POST create order', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    data: { bookId: 1, customerName: 'John Doe' }
  });
  expect(response.status()).toBe(201);
  const order = await response.json();
  expect(order.created).toBeTruthy();
});

test('PATCH update order', async ({ request }) => {
  const orderId = 'replace_with_order_id'; // Use an actual order ID
  const response = await request.patch(`${BASE_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    data: { customerName: 'Jane Doe' }
  });
  expect(response.status()).toBe(200);
  const updated = await response.json();
  expect(updated.customerName).toBe('Jane Doe');
});

test('DELETE cancel order', async ({ request }) => {
  const orderId = 'replace_with_order_id'; // Use an actual order ID
  const response = await request.delete(`${BASE_URL}/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  expect(response.status()).toBe(204);
});
