import { copyFile, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "../site.config.mjs";
import { renderPage } from "../src/template.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const assetsDir = path.join(dist, "assets");

async function copyDirectory(source, destination) {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = path.join(source, entry.name);
      const destinationPath = path.join(destination, entry.name);
      if (entry.isDirectory()) return copyDirectory(sourcePath, destinationPath);
      return copyFile(sourcePath, destinationPath);
    }),
  );
}

await mkdir(assetsDir, { recursive: true });
await copyDirectory(path.join(root, "public", "assets"), assetsDir);
await copyFile(path.join(root, "src", "styles.css"), path.join(assetsDir, "styles.css"));
await copyFile(path.join(root, "src", "client.js"), path.join(assetsDir, "client.js"));
await writeFile(path.join(dist, "index.html"), renderPage(config), "utf8");
await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", config.seo.canonical).href}\n`,
  "utf8",
);
await writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${config.seo.canonical}</loc>\n  </url>\n</urlset>\n`,
  "utf8",
);

console.log(`Built ${config.brand.name} with the “${config.preset}” preset → dist/`);
