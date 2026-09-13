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

function extractMetadata(html) {
  const metadata = [];
  let body = html;

  const patterns = [
    /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    /<title\b[^>]*>[\s\S]*?<\/title>/gi,
    /<meta\b[^>]*(?:name=["']description["']|name=["']robots["']|property=["']og:[^"']+["']|name=["']twitter:[^"']+["'])[^>]*\/?>/gi,
    /<link\b[^>]*rel=["']canonical["'][^>]*\/?>/gi,
  ];

  for (const pattern of patterns) {
    body = body.replace(pattern, (match) => {
      metadata.push(match);
      return "";
    });
  }

  return {
    metadata: metadata.join("\n"),
    body,
  };
}

function cleanHead(html) {
  return html
    .replace(/<title\b[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*name=["']description["'][^>]*\/?>/gi, "")
    .replace(/<meta\b[^>]*name=["']robots["'][^>]*\/?>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*\/?>/gi, "")
    .replace(/<meta\b[^>]*property=["']og:[^"']+["'][^>]*\/?>/gi, "")
    .replace(/<meta\b[^>]*name=["']twitter:[^"']+["'][^>]*\/?>/gi, "")
    .replace(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
      ""
    );
}

for (const route of routes) {
  const rendered = render(route);
  const extracted = extractMetadata(rendered.html);
  const cleanedTemplate = cleanHead(template);

  const finalHtml = cleanedTemplate
    .replace(
      "</head>",
      `${extracted.metadata}\n</head>`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${extracted.body}</div>`
    );

  const outputPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outputPath), {
    recursive: true,
  });

  fs.writeFileSync(
    outputPath,
    finalHtml,
    "utf8"
  );

  console.log(
    `Pre-rendered ${route} → ${outputPath}`
  );
}
