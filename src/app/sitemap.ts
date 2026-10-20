import type { MetadataRoute } from "next";
import { absoluteUrl, projectCommunities, workPhotos } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/process", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-area", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
] as const;

function imageUrls(paths: readonly string[]) {
  return paths.map((path) => absoluteUrl(path));
}

const communityImages = projectCommunities.map((community) => community.image);
const featuredCommunityImages = projectCommunities
  .filter((community) => community.featured)
  .map((community) => community.image);

const imagesByPath: Record<string, string[]> = {
  "/": imageUrls([
    "/logo.png",
    workPhotos.kitchen.src,
    workPhotos.rough.src,
    workPhotos.windows.src,
    ...featuredCommunityImages,
  ]),
  "/services": imageUrls([
    workPhotos.film.src,
    workPhotos.rough.src,
    workPhotos.kitchen.src,
    workPhotos.windows.src,
  ]),
  "/service-area": imageUrls([workPhotos.windows.src, ...communityImages]),
  "/about": imageUrls([workPhotos.entry.src, workPhotos.walkthrough.src]),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-10-20"),
    changeFrequency,
    priority,
    ...(imagesByPath[path] ? { images: imagesByPath[path] } : {}),
  }));
}

