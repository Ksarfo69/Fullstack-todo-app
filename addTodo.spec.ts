import { test, expect } from '@playwright/test';

test('User is able to create an account and add todo', async ({ page }) => {


  // Go to http://the-todoapp.herokuapp.com/
  await page.goto('http://the-todoapp.herokuapp.com/');

  // Go to http://the-todoapp.herokuapp.com/login
  await page.goto('http://the-todoapp.herokuapp.com/login');

  // Click text=Create Account
  await page.locator('text=Create Account').click();

  // Click text=Username: >> input
  await page.locator('text=Username: >> input').click();

  // Fill text=Username: >> input
  await page.locator('text=Username: >> input').fill('testuser');

  // Click text=Email: >> input
  await page.locator('text=Email: >> input').click();

  // Fill text=Email: >> input
  await page.locator('text=Email: >> input').fill('testuser@gmail.com');

  // Click input[type="password"] >> nth=0
  await page.locator('input[type="password"]').first().click();

  // Fill input[type="password"] >> nth=0
  await page.locator('input[type="password"]').first().fill('testuser');

  // Fill text=Confirm Password: >> input[type="password"]
  await page.locator('text=Confirm Password: >> input[type="password"]').fill('t');

  // Click text=Confirm Password: >> input[type="password"]
  await page.locator('text=Confirm Password: >> input[type="password"]').click();

  // Fill text=Confirm Password: >> input[type="password"]
  await page.locator('text=Confirm Password: >> input[type="password"]').fill('testuser');

  // Click text=Create Account
  await page.locator('text=Create Account').click();

  // Click text=Login
  await page.locator('text=Login').click();

  // Click text=Email: >> input
  await page.locator('text=Email: >> input').click();

  // Fill text=Email: >> input
  await page.locator('text=Email: >> input').fill('testuser@gmail.com');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('testuser');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('http://the-todoapp.herokuapp.com/');

  // Click [placeholder="Add new todo here\.\.\."]
  await page.locator('[placeholder="Add new todo here\\.\\.\\."]').click();

  // Fill [placeholder="Add new todo here\.\.\."]
  await page.locator('[placeholder="Add new todo here\\.\\.\\."]').fill('This is a new todo for the test user');

  // Click path
  await page.locator('data-test-id=AddCircleOutlineOutlinedIcon').click();

  
  // Click [data-testid="DoNotDisturbOnOutlinedIcon"]
  await page.locator('[data-testid="DoNotDisturbOnOutlinedIcon"]').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('http://the-todoapp.herokuapp.com/login');

});