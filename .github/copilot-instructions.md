# Copilot instructions for this repository

## Repository purpose

This repo contains the source for Alessandro Pozzi's portfolio and resume site. It is a single-page React app built with Create React App (`react-scripts`), with route-based sections for the portfolio, skills, resume, and a chat experience. The repository is content-heavy and mostly UI composition: most page content is driven by reusable components and data objects rather than complex backend logic.

## Build, test, and validation commands

Use the scripts defined in `package.json`:

- `npm install`
- `npm start` — launches the development server on `http://127.0.0.1:3000`
- `npm run build` — creates the production bundle
- `npm test -- --watch=false` or `CI=true npm test -- --watch=false` — runs the React test runner in non-watch mode
- `npm run test:e2e` — runs the Playwright smoke and responsive suite across the configured viewports
- `npx playwright test tests/responsive.spec.js --project=mobile-390x844` — runs a single viewport configuration for the responsive suite
- `npx playwright test tests/responsive.spec.js --grep "mobile navigation"` — runs one named Playwright test case

There is no explicit `npm run lint` script in this repo. The project does include CRA's default ESLint config (`react-app` and `react-app/jest`), but linting is not exposed as a dedicated script.

## High-level architecture

- `src/App.jsx` is the app shell and router entry point. The main route structure is defined here and includes `/`, `/projects`, `/skills`, `/chat`, `/about`, `/resume`, and `/portfolio`.
- `src/components/*` holds the page sections and reusable UI blocks. Reusable sections like the navbar, footer, particle background, PDF viewer card, and project cards are kept as component modules instead of being embedded directly into page files.
- `src/data/portfolioContent.js` is the central data file for portfolio items, technology stacks, and tool stacks. This is the default place to add or update project metadata instead of hardcoding arrays into components.
- `src/components/PDFViewerCard/PDFViewerCard.jsx` renders the downloadable resume/portfolio PDFs with `react-pdf` and uses files served from `public/`.
- `src/components/Chat/ChatView.jsx` implements the AI assistant experience. It calls the Groq API and expects the client-side env variable `REACT_APP_GROQ_API_KEY` from `src/Constants/Constants.js`.
- `public/` stores static assets such as PDF files and other browser-served files.
- `src/Assets/` stores local image assets (avatars, project images, backgrounds, etc.) referenced by the app.
- Styling is a blend of Bootstrap and custom CSS modules / global styles, mostly under `src/` with a few component-level CSS modules.

## Repository conventions that matter here

- Prefer additions that match the existing component/data split: route definitions in `src/App.jsx`, reusable UI in `src/components`, and static content in `src/data/portfolioContent.js`.
- When adding new content to the portfolio or skills sections, keep the data-driven pattern; do not scatter hardcoded arrays across page components.
- Use `PUBLIC_URL` or file paths from `public/` when referencing PDF/media assets, instead of assuming a different asset base path.
- Keep responsive layout behavior in mind: the Playwright suite validates multiple mobile/tablet viewports and checks for horizontal overflow. Fixed widths, large absolute elements, and heavy animations are the most likely places for regressions.
- For the chat feature, follow the existing environment/config pattern (`Constants.GROQ`) rather than embedding API endpoints or keys directly in components.
- Keep the portfolio branding and tone factual and professional; the content is a personal professional website and not a generic app template.

## AI agent notes

- `AGENTS.md` exists but contains only minimal repository context; this file is the canonical guidance for Copilot in this repo.
- Do not assume there is a backend or service layer; this is primarily a frontend portfolio site with static assets and a client-side AI chat call.
