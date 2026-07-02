const { test, expect } = require('@playwright/test');

const routes = [
  {
    path: '/',
    label: 'home',
    heading: /^i'?m alessandro pozzi$/i,
    ready: (page) => page.getByRole('heading', { name: /^i'?m alessandro pozzi$/i }),
  },
  {
    path: '/projects',
    label: 'projects',
    heading: /my recent works/i,
    ready: (page) => page.getByRole('heading', { name: /my recent works/i }),
  },
  {
    path: '/skills',
    label: 'skills',
    heading: /professional skillset/i,
    ready: (page) => page.getByRole('heading', { name: /tools i use/i }),
  },
  {
    path: '/chat',
    label: 'chat',
    heading: /chat with ai assistant/i,
    ready: (page) => page.getByPlaceholder(/write your prompt here/i),
  },
  {
    path: '/resume',
    label: 'resume',
    heading: /read and download my resume/i,
    ready: (page) => page.getByRole('heading', { name: /read and download my resume/i }),
  },
  {
    path: '/portfolio',
    label: 'portfolio',
    heading: /read and download my portfolio/i,
    ready: (page) => page.getByRole('heading', { name: /read and download my portfolio/i }),
  },
];

async function preparePage(page) {
  await page.emulateMedia({ reducedMotion: 'reduce' });
}

async function assertNoHorizontalOverflow(page) {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
}

async function openAndWait(page, path, readyLocator) {
  await page.goto(path);
  await page.addStyleTag({
    content: `
      #tsparticles,
      .wave {
        animation: none !important;
        transition: none !important;
      }

      #tsparticles {
        display: none !important;
      }

      .Typewriter__wrapper,
      .Typewriter__cursor {
        visibility: hidden !important;
      }
    `,
  });
  await expect(readyLocator(page)).toBeVisible();
  await assertNoHorizontalOverflow(page);
}

test.describe('responsive smoke', () => {
  for (const route of routes) {
    test(`${route.label} renders without horizontal overflow`, async ({ page }) => {
      await preparePage(page);
      await openAndWait(page, route.path, route.ready);
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
    });
  }
});

test.describe('mobile navigation', () => {
  test('hamburger opens and navigates on mobile', async ({ page }, testInfo) => {
    test.skip(!testInfo.project.name.startsWith('mobile'));

    await preparePage(page);
    await openAndWait(page, '/', (currentPage) =>
      currentPage.getByRole('heading', { name: /^i'?m alessandro pozzi$/i }),
    );

    const toggle = page.getByRole('button', { name: /toggle navigation/i });
    await expect(toggle).toBeVisible();
    await toggle.click();

    const projectLink = page.getByRole('link', { name: /projects/i });
    await expect(projectLink).toBeVisible();
    await projectLink.click();

    await expect(page).toHaveURL(/\/projects$/);
    await expect(page.getByRole('heading', { name: /my recent works/i })).toBeVisible();
    await assertNoHorizontalOverflow(page);
  });
});

test.describe('visual regressions', () => {
  test('home mobile screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'mobile-390x844');

    await preparePage(page);
    await openAndWait(page, '/', (currentPage) =>
      currentPage.getByRole('heading', { name: /^i'?m alessandro pozzi$/i }),
    );

    await expect(page).toHaveScreenshot('home-mobile.png', {
      fullPage: false,
      animations: 'disabled',
    });
  });

  test('home tablet screenshot', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'tablet-820x1180');

    await preparePage(page);
    await openAndWait(page, '/', (currentPage) =>
      currentPage.getByRole('heading', { name: /^i'?m alessandro pozzi$/i }),
    );

    await expect(page).toHaveScreenshot('home-tablet.png', {
      fullPage: false,
      animations: 'disabled',
    });
  });
});
