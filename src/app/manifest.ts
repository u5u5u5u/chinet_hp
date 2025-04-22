import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "地球っ子ネットワーク 公式サイト",
    short_name: "地球っ子ネットワークHP",
    description: "地球っ子ネットワークの公式サイトです。",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      { src: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
