import { SITE } from "@/lib/data";

export default function sitemap() {
    const base = SITE.url;
    const now = new Date();
    const routes = ["", "/about", "/achievements", "/programs", "/gallery", "/contact"];
    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "daily" : path === "/programs" || path === "/contact" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/programs" || path === "/contact" ? 0.9 : 0.8,
    }));
}
