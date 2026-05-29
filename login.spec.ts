import { test, expect } from '@playwright/test';
import LoginPage from '../src/pages/LoginPage';

test.describe('Login scenarios', () => {
  test('valid credentials should navigate to products', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
     await page.screenshot({ path: 'C:/Users/Sravs/Pictures/standard_user_success.png' });
    console.log('Screenshot taken for standard_user login success');
  });
  test('other credentials should navigate to products', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('performance_glitch_user', 'secret_sauce');
   // await page.screenshot({ path: 'C:/Users/Sravs/Pictures/performance_glitch_user_success.png' })
   // console.log(' performance_glitch_user login success');
    await expect(page).toHaveURL(/inventory.html/);
    console.log(' performance_glitch_user login success');
  });

   test('problem credentials should navigate to products', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('problem_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
    console.log('problem_user login success');
    })
    test('visual credentials should navigate to products', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('visual_user', 'secret_sauce');
     await expect(page).toHaveURL(/inventory.html/);
     console.log('Screenshot taken for visual_user login success');
    });
   
 test('invalid credentials should show error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('error_user', 'bad_pass');
    await page.screenshot({ path: 'C:/Users/Sravs/Pictures/invalid_credentials_error.png' });
     console.log('Screenshot taken for invalid credentials error');
    await login.expectErrorVisible();
  });


  test('locked out user shows locked error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');
    await page.screenshot({ path: 'C:/Users/Sravs/Pictures/locked_out_error.png' });
    console.log('Screenshot taken for locked out user error');
    await login.expectErrorVisible();
  });

});
