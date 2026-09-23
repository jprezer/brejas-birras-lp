import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import config from "../site.config.mjs";
import { resolveTheme, themes } from "../src/themes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function oklchToLinearSrgb(value) {
  const match = String(value).match(/oklch\(\s*([\d.]+)(%)?\s+([\d.]+)\s+([\d.]+)/i);
  if (!match) return null;
  const lightness = Number(match[1]) / (match[2] ? 100 : 1);
  const chroma = Number(match[3]);
  const hue = (Number(match[4]) * Math.PI) / 180;
  const a = chroma * Math.cos(hue);
  const b = chroma * Math.sin(hue);
  const lPrime = lightness + 0.3963377774 * a + 0.2158037573 * b;
  const mPrime = lightness - 0.1055613458 * a - 0.0638541728 * b;
  const sPrime = lightness - 0.0894841775 * a - 1.291485548 * b;
  const l = lPrime ** 3;
  const m = mPrime ** 3;
  const s = sPrime ** 3;

  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((channel) => Math.min(1, Math.max(0, channel)));
}

function contrastRatio(foreground, background) {
  const fg = oklchToLinearSrgb(foreground);
  const bg = oklchToLinearSrgb(background);
  if (!fg || !bg) return null;
  const luminance = ([red, green, blue]) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;
  const first = luminance(fg);
  const second = luminance(bg);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

const requiredStrings = [
  ["brand.name", config.brand?.name],
  ["seo.title", config.seo?.title],
  ["seo.description", config.seo?.description],
  ["seo.canonical", config.seo?.canonical],
  ["contact.primaryUrl", config.contact?.primaryUrl],
  ["contact.footerPrimaryLabel", config.contact?.footerPrimaryLabel],
  ["contact.socialLabel", config.contact?.socialLabel],
  ["hero.image", config.hero?.image],
  ["location.mapEmbedUrl", config.location?.mapEmbedUrl],
  ["location.address.street", config.location?.address?.street],
  ["location.address.city", config.location?.address?.city],
];

for (const [label, value] of requiredStrings) {
  if (!value || typeof value !== "string") failures.push(`${label} must be a non-empty string`);
}

function validateThemeContrast(themeName, theme) {
  const pairs = [
    ["paper on ink", theme.colors.paper, theme.colors.ink],
    ["muted copy on dark", theme.colors.mutedOnDark, theme.colors.inkSoft],
    ["muted copy on light", theme.colors.mutedOnLight, theme.colors.paper],
    ["ink on accent", theme.colors.ink, theme.colors.accent],
  ];
  for (const [label, foreground, background] of pairs) {
    const ratio = contrastRatio(foreground, background);
    if (ratio !== null && ratio < 4.5) {
      failures.push(`${themeName}: ${label} contrast is ${ratio.toFixed(2)}:1; expected at least 4.5:1`);
    }
  }
}

if (!themes[config.preset]) failures.push(`Unknown preset: ${config.preset}`);
for (const [themeName, theme] of Object.entries(themes)) {
  validateThemeContrast(themeName, theme);
}
validateThemeContrast("current configuration", resolveTheme(config));
if (!Array.isArray(config.services?.items) || config.services.items.length < 2) {
  failures.push("services.items must contain at least two services");
}

if (config.gallery?.items) {
  if (!Array.isArray(config.gallery.items) || config.gallery.items.length === 0) {
    failures.push("gallery.items must contain at least one item when gallery is configured");
  } else {
    for (const [index, item] of config.gallery.items.entries()) {
      for (const field of ["image", "alt", "caption"]) {
        if (!item?.[field] || typeof item[field] !== "string") {
          failures.push(`gallery.items[${index}].${field} must be a non-empty string`);
        }
      }
    }
  }
}
if (!Array.isArray(config.reviews?.items) || config.reviews.items.length < 1) {
  failures.push("reviews.items must contain at least one review");
}
if (!Array.isArray(config.location?.openingHours) || config.location.openingHours.length < 1) {
  failures.push("location.openingHours must contain at least one schedule");
}

try {
  new URL(config.seo.canonical);
} catch {
  failures.push("seo.canonical must be an absolute URL");
}

const configuredAssets = [
  config.brand?.logo,
  config.hero?.image,
  ...(config.gallery?.items ?? []).map((item) => item.image),
];

for (const asset of configuredAssets) {
  if (!asset?.startsWith("/assets/")) continue;
  try {
    await access(path.join(root, "public", asset));
  } catch {
    failures.push(`Missing local asset: public${asset}`);
  }
}

try {
  const html = await readFile(path.join(root, "dist", "index.html"), "utf8");
  const requiredFragments = ["<main", "<h1", "application/ld+json", "skip-link", "prefers-reduced-motion"];
  for (const fragment of requiredFragments) {
    if (!html.includes(fragment) && fragment !== "prefers-reduced-motion") {
      failures.push(`Built HTML is missing: ${fragment}`);
    }
  }
  const css = await readFile(path.join(root, "dist", "assets", "styles.css"), "utf8");
  if (!css.includes("prefers-reduced-motion")) failures.push("CSS lacks reduced-motion handling");
} catch {
  failures.push("Run npm run build before npm run check");
}

if (failures.length) {
  console.error("Validation failed:\n- " + failures.join("\n- "));
  process.exitCode = 1;
} else {
  console.log("Config, assets, semantic landmarks, SEO output, and motion fallback look good.");
}
