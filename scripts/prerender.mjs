// Prerenders each route to static HTML after `vite build`.
//
// Why this exists: the app is a client-side-rendered React SPA. Search
// engine bots (Googlebot) can execute JavaScript, but most AI-answer-engine
// crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.)
// do not. Without this step, everything the app renders client-side --
// page copy, per-page <title>/meta description, canonical URL, and the
// entire JSON-LD schema graph built in components/SEO.tsx -- is invisible
// to those crawlers.
//
// This script launches a real headless browser against the built app,
// visits every route, waits for React (and the SEO effect) to finish, and
// writes the fully-rendered HTML to disk so Vercel serves complete content
// on the very first byte, before any JavaScript runs. The app still
// hydrates on top for interactivity in real browsers.

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Add a new route here any time a new page is added to the app.
const routes = ['/', '/products', '/about-us'];

async function main() {
  const server = await preview({ preview: { port: 4174, strictPort: true } });
  const base = 'http://localhost:4174';

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    for (const route of routes) {
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle0' });

      // components/SEO.tsx injects the JSON-LD schema in a useEffect once
      // React has mounted -- waiting for it confirms the page is fully
      // rendered (title, meta tags, schema, and body copy all included)
      // before we snapshot the HTML.
      await page
        .waitForSelector('#site-structured-data', { timeout: 5000 })
        .catch(() => {
          console.warn(`  ! #site-structured-data not found for ${route} -- continuing anyway`);
        });

      const html = await page.content();

      const outDir = route === '/' ? distDir : path.join(distDir, route.replace(/^\//, ''));
      await mkdir(outDir, { recursive: true });
      const outFile = path.join(outDir, 'index.html');
      await writeFile(outFile, html, 'utf-8');
      console.log(`Prerendered ${route.padEnd(12)} -> ${path.relative(distDir, outFile)}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
