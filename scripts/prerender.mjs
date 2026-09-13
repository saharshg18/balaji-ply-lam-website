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

function extractHeadTags(html) {
  const headTags = [];
  let bodyHtml = html;

  const patterns = [
    /<title\b[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\b[^>]*\/?>/gi,
    /<link\b[^>]*\/?>/gi,
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
  ];

  for (const pattern of patterns) {
    const matches = bodyHtml.match(pattern) || [];

    for (const match of matches) {
      headTags.push(match);
      bodyHtml = bodyHtml.replace(match, "");
    }
  }

  return {
    head: headTags.join("\n"),
    body: bodyHtml,
  };
}

function cleanTemplateHead(html) {
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(
      /<meta\s+name=["']description["'][^>]*\/?>/gi,
      ""
    )
    .replace(
      /<link\s+rel=["']canonical["'][^>]*\/?>/gi,
      ""
    )
    .replace(
      /<meta\s+property=["']og:[^"']+["'][^>]*\/?>/gi,
      ""
    )
    .replace(
      /<meta\s+name=["']twitter:[^"']+["'][^>]*\/?>/gi,
      ""
    )
    .replace(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
      ""
    );
}

for (const route of routes) {
  const rendered = render(route);
  const extracted = extractHeadTags(rendered.html);

  const cleanedTemplate = cleanTemplateHead(template);

  const finalHtml = cleanedTemplate
    .replace(
      "</head>",
      `${extracted.head}\n</head>`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${extracted.body}</div>`
    );

  const outputPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.writeFileSync(outputPath, finalHtml, "utf8");

  console.log(`Pre-rendered ${route} → ${outputPath}`);
}
