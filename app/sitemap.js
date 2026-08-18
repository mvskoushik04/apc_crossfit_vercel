import { SITE } from "@/lib/data";

export default function sitemap() {
    const baseUrl = "https://apccrossfit.in"; // Hardcode it to be absolutely sure
    const now = new Date();
    const routes = ["", "/about", "/achievements", "/programs", "/gallery", "/contact"];
    
    return routes.map((route) => {
        // Ensure there are no double slashes
        const path = route === "" ? "" : route;
        return {
            url: `${baseUrl}${path}`,
            lastModified: now,
            changeFrequency: route === "" ? "daily" : "weekly",
            priority: route === "" ? 1.0 : 0.8,
        };
    });
}
