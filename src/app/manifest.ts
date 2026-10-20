import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: `${siteConfig.ownership} Construction cleaning across the ${siteConfig.region}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#102a2e",
  };
}

