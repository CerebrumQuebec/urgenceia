import { MetadataRoute } from "next";
import { actions } from "@/data/actions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://urgenceia.org";
  const locales = ["fr", "en"];

  // Generate URLs for each locale's homepage
  const homePages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  // Generate URLs for each action in each locale
  const actionPages = actions.flatMap((action) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/actions/${action.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...homePages, ...actionPages];
}
