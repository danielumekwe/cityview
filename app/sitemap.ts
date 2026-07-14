import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const routes = [
  "",
  "/about-us",
  "/bar-and-lodge",
  "/cityview-apartments",
  "/event-and-parties",
  "/gym-and-fitness",
  "/night-club",
  "/contact-us",
  "/get-fit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
