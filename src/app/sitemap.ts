import type { MetadataRoute } from "next";

const BASE_URL = "https://mindwander.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, priority: 1 },
    { url: `${BASE_URL}/how-it-works`, priority: 0.8 },
    { url: `${BASE_URL}/install`, priority: 0.8 },
    { url: `${BASE_URL}/privacy`, priority: 0.3 },
    { url: `${BASE_URL}/terms`, priority: 0.3 },
  ];
}
