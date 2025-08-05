import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pensiunea Raul Galicea Mare - Cazare Premium Dolj",
    short_name: "Pensiunea Raul",
    description:
      "Cazare premium în Galicea Mare, Dolj, la doar 15 minute de Craiova. Camere confortabile, prețuri avantajoase.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["travel", "hospitality", "accommodation"],
    lang: "ro",
    scope: "/",
  };
}
