const fs = require('fs');
const { defineConfig, devices } = require('@playwright/test');

const localLibraryPaths = [
  '/tmp/pwlibs/root/usr/lib/x86_64-linux-gnu',
  '/tmp/pwlibs/root/lib/x86_64-linux-gnu',
].filter((libraryPath) => fs.existsSync(libraryPath));

if (localLibraryPaths.length > 0) {
  process.env.LD_LIBRARY_PATH = [
    ...localLibraryPaths,
    process.env.LD_LIBRARY_PATH,
  ]
    .filter(Boolean)
    .join(':');
}

const viewports = [
  { name: 'mobile-360x800', viewport: { width: 360, height: 800 } },
  { name: 'mobile-375x812', viewport: { width: 375, height: 812 } },
  { name: 'mobile-390x844', viewport: { width: 390, height: 844 } },
  { name: 'tablet-768x1024', viewport: { width: 768, height: 1024 } },
  { name: 'tablet-820x1180', viewport: { width: 820, height: 1180 } },
  { name: 'tablet-1024x768', viewport: { width: 1024, height: 768 } },
];

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  timeout: 30 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 300 * 1000,
  },
  projects: viewports.map(({ name, viewport }) => ({
    name,
    use: {
      ...devices['Desktop Chrome'],
      viewport,
    },
  })),
});
