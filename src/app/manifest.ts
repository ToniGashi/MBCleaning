import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MB Cleaning",
    short_name: "MB Cleaning",
    description: "Construction cleaning for Charleston and Summerville builders.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#102a2e",
  };
}

