import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Photonesto",
    short_name: "Photonesto",
    description: "Transform your daily routine for good",
    start_url: "/",
    display: "standalone",
    background_color: "#222222",
    theme_color: "#222222",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
