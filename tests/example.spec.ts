import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');

    // Check if the page title is correct
    await expect(page).toHaveTitle(/Portfolio/);
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');

    // Check if navigation links exist
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /projects/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to sections', async ({ page }) => {
    await page.goto('/');

    // Click on About link
    await page.getByRole('link', { name: /about/i }).click();

    // Wait for scroll animation
    await page.waitForTimeout(1000);

    // Check if About section is in viewport
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
  });

  test('should display hero section with gradient text', async ({ page }) => {
    await page.goto('/');

    // Check if hero section exists
    const heroHeading = page.getByRole('heading', { name: /creative developer/i });
    await expect(heroHeading).toBeVisible();
  });

  test('should have working contact form', async ({ page }) => {
    await page.goto('/');

    // Navigate to contact section
    await page.getByRole('link', { name: /contact/i }).click();
    await page.waitForTimeout(1000);

    // Check if form exists
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test('should have mobile menu button on small screens', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();
  });

  test('should display project cards', async ({ page }) => {
    await page.goto('/');

    // Navigate to projects section
    await page.getByRole('link', { name: /projects/i }).click();
    await page.waitForTimeout(1000);

    // Check if projects section exists
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeInViewport();
  });
});
