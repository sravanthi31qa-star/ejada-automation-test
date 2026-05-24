# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> SauceDemo Playwright Automation >> Complete checkout flow
- Location: tests\example.spec.ts:93:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.complete-header')
Expected: "THANK YOU FOR YOUR ORDER"
Received: "Thank you for your order!"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.complete-header')
    14 × locator resolved to <h2 class="complete-header" data-test="complete-header">Thank you for your order!</h2>
       - unexpected value "Thank you for your order!"

```

```yaml
- heading "Thank you for your order!" [level=2]
```

# Test source

```ts
  11  |   await page.locator('[data-test="item-4-title-link"]').click();
  12  |   await page.locator('[data-test="add-to-cart"]').click();
  13  |   await page.locator('[data-test="shopping-cart-link"]').click();
  14  |   await page.locator('[data-test="checkout"]').click();
  15  |   await page.locator('[data-test="firstName"]').click();
  16  |   await page.locator('[data-test="firstName"]').fill('sravanthi');
  17  |   await page.locator('[data-test="lastName"]').click();
  18  |   await page.locator('[data-test="lastName"]').fill('isank');
  19  |   await page.locator('[data-test="postalCode"]').click();
  20  |   await page.locator('[data-test="postalCode"]').fill('123456');
  21  |   await page.locator('[data-test="continue"]').click();
  22  |   await page.locator('[data-test="finish"]').click();
  23  |   await page.locator('[data-test="complete-header"]').click();
  24  |   await page.locator('[data-test="back-to-products"]').click();
  25  |   await page.locator('div').filter({ hasText: 'Swag Labs' }).nth(5).click();
  26  |   await page.goto('https://www.saucedemo.com/');
  27  |   await page.locator('[data-test="username"]').fill('error_user');
  28  |   await page.locator('[data-test="password"]').fill('sravanthi_sauce');
  29  |   await page.locator('[data-test="username"]').fill('locked_out_user');
  30  |   await page.locator('[data-test="password"]').fill('secret_sauce');
  31  | 
  32  |   
  33  | });
  34  | 
  35  | 
  36  | const BASE_URL = 'https://www.saucedemo.com/';
  37  | const VALID_USER = 'standard_user';
  38  | const VALID_PASS = 'secret_sauce';
  39  | const INVALID_USER = 'invalid_user';
  40  | const INVALID_PASS = 'wrong_pass';
  41  | 
  42  | test.describe('SauceDemo Playwright Automation', () => {
  43  | 
  44  |   // ✅ Positive Login
  45  |   test('Login with valid credentials', async ({ page }) => {
  46  |     await page.goto(BASE_URL);
  47  |     await page.fill('#user-name', VALID_USER);
  48  |     await page.fill('#password', VALID_PASS);
  49  |     await page.click('#login-button');
  50  | 
  51  |     await expect(page.locator('.title')).toHaveText('Products');
  52  |   });
  53  | 
  54  |   // ❌ Negative Login
  55  |   test('Login with invalid credentials', async ({ page }) => {
  56  |     await page.goto(BASE_URL);
  57  |     await page.fill('#user-name', INVALID_USER);
  58  |     await page.fill('#password', INVALID_PASS);
  59  |     await page.click('#login-button');
  60  | 
  61  |     await expect(page.locator('[data-test="error"]'))
  62  |       .toContainText('Username and password do not match');
  63  |   });
  64  | 
  65  |   // 🔓 Logout Flow
  66  |   test('Logout after login', async ({ page }) => {
  67  |     await page.goto(BASE_URL);
  68  |     await page.fill('#user-name', VALID_USER);
  69  |     await page.fill('#password', VALID_PASS);
  70  |     await page.click('#login-button');
  71  | 
  72  |     await page.click('#react-burger-menu-btn');
  73  |     await page.click('#logout_sidebar_link');
  74  | 
  75  |     await expect(page.locator('#login-button')).toBeVisible();
  76  |   });
  77  | 
  78  |   // 🛒 Add to Cart
  79  |   test('Add product to cart', async ({ page }) => {
  80  |     await page.goto(BASE_URL);
  81  |     await page.fill('#user-name', VALID_USER);
  82  |     await page.fill('#password', VALID_PASS);
  83  |     await page.click('#login-button');
  84  | 
  85  |     await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  86  |     await page.click('.shopping_cart_link');
  87  | 
  88  |     await expect(page.locator('.inventory_item_name'))
  89  |       .toHaveText('Sauce Labs Backpack');
  90  |   });
  91  | 
  92  |   // 💳 Checkout and Finish
  93  |   test('Complete checkout flow', async ({ page }) => {
  94  |     await page.goto(BASE_URL);
  95  |     await page.fill('#user-name', VALID_USER);
  96  |     await page.fill('#password', VALID_PASS);
  97  |     await page.click('#login-button');
  98  | 
  99  |     await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
  100 |     await page.click('.shopping_cart_link');
  101 |     await page.click('[data-test="checkout"]');
  102 | 
  103 |     await page.fill('[data-test="firstName"]', 'John');
  104 |     await page.fill('[data-test="lastName"]', 'Doe');
  105 |     await page.fill('[data-test="postalCode"]', '12345');
  106 |     await page.click('[data-test="continue"]');
  107 | 
  108 |     await page.click('[data-test="finish"]');
  109 | 
  110 |     await expect(page.locator('.complete-header'))
> 111 |       .toHaveText('THANK YOU FOR YOUR ORDER');
      |        ^ Error: expect(locator).toHaveText(expected) failed
  112 |   });
  113 | 
  114 | });
  115 | 
```