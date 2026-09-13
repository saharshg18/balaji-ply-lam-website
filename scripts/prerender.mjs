import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");

const template = fs.readFileSync(
  path.join(distDir, "index.html"),
  "utf8"
);

const { render } = await import(pathToFileURL(serverEntry).href);

const routes = [
  "/",
  "/products",
  "/about-us",
];

function injectRoute(templateHtml, renderedHtml, helmet) {
  let html = templateHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedHtml}</div>`
  );

  const helmetHead = [
    helmet.title?.toString?.() || "",
    helmet.meta?.toString?.() || "",
    helmet.link?.toString?.() || "",
    helmet.script?.toString?.() || "",
  ].join("\n");

  html = html.replace("</head>", `${helmetHead}\n</head>`);

  return html;
}

for (const route of routes) {
  const result = render(route);

  const outputPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const finalHtml = injectRoute(
    template,
    result.html,
    result.helmet
  );

  fs.writeFileSync(outputPath, finalHtml, "utf8");

  console.log(`Pre-rendered ${route} → ${outputPath}`);
}
