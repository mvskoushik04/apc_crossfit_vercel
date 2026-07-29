import { SITE } from "@/lib/data";

export default function sitemap() {
    const base = SITE.url;
    const now = new Date();
    const routes = ["", "/about", "/programs", "/gallery", "/contact"];
    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
    }));
}
