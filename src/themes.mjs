export const themes = {
  impact: {
    label: "Impacto",
    description: "Alto contraste e presença física para marcas energéticas.",
    colors: {
      ink: "oklch(17% 0.008 150)",
      inkSoft: "oklch(23% 0.009 150)",
      paper: "oklch(96% 0.006 95)",
      accent: "oklch(68% 0.2 42)",
      accentStrong: "oklch(74% 0.19 45)",
      mutedOnDark: "oklch(78% 0.008 95)",
      mutedOnLight: "oklch(45% 0.01 95)",
    },
    fonts: {
      display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      body: "Manrope, Arial, sans-serif",
      google:
        "https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;0,900;1,700&family=Manrope:wght@400;500;600;700;800&display=swap",
    },
    shape: { radius: "2px", buttonRadius: "2px" },
  },
  sober: {
    label: "Sóbrio",
    description: "Azul mineral e ritmo contido para serviços de alta confiança.",
    colors: {
      ink: "oklch(19% 0.035 258)",
      inkSoft: "oklch(25% 0.04 258)",
      paper: "oklch(97% 0.006 258)",
      accent: "oklch(63% 0.17 255)",
      accentStrong: "oklch(70% 0.15 250)",
      mutedOnDark: "oklch(80% 0.018 258)",
      mutedOnLight: "oklch(46% 0.025 258)",
    },
    fonts: {
      display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      body: "Manrope, Arial, sans-serif",
      google:
        "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap",
    },
    shape: { radius: "8px", buttonRadius: "4px" },
  },
  warm: {
    label: "Acolhedor",
    description: "Vermelho profundo e contraste humano para hospitalidade e bem-estar.",
    colors: {
      ink: "oklch(20% 0.035 20)",
      inkSoft: "oklch(27% 0.04 20)",
      paper: "oklch(97% 0.004 20)",
      accent: "oklch(62% 0.18 24)",
      accentStrong: "oklch(69% 0.17 28)",
      mutedOnDark: "oklch(81% 0.018 20)",
      mutedOnLight: "oklch(45% 0.025 20)",
    },
    fonts: {
      display: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      body: "Manrope, Arial, sans-serif",
      google:
        "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap",
    },
    shape: { radius: "12px", buttonRadius: "999px" },
  },
};

export function resolveTheme(config) {
  const preset = themes[config.preset] ?? themes.impact;
  const overrides = config.theme ?? {};

  return {
    ...preset,
    colors: {
      ...preset.colors,
      ...(overrides.accent ? { accent: overrides.accent } : {}),
      ...(overrides.ink ? { ink: overrides.ink } : {}),
      ...(overrides.paper ? { paper: overrides.paper } : {}),
    },
    fonts: {
      ...preset.fonts,
      ...(overrides.displayFont ? { display: overrides.displayFont } : {}),
      ...(overrides.bodyFont ? { body: overrides.bodyFont } : {}),
    },
  };
}
