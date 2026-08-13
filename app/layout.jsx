import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { SITE } from "@/lib/data";
import "./globals.css";

const display = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

const sans = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.name} — Best Gym in Gajularamaram, Hyderabad`,
        template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    keywords: SITE.keywords,
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    formatDetection: { email: false, address: false, telephone: false },
    alternates: { canonical: SITE.url },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: SITE.url,
        siteName: SITE.name,
        title: `${SITE.name} — Best Gym in Gajularamaram, Hyderabad`,
        description: SITE.description,
        images: [{ url: "/images/hero-1.jpg", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE.name} — Best Gym in Gajularamaram`,
        description: SITE.description,
        images: ["/images/hero-1.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    verification: {
        // Add your Google Search Console verification code here after registering apccrossfit.in.
        // google: "your-google-verification-code",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    category: "Health & Fitness",
};

export const viewport = {
    themeColor: "#0a0a0a",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

function StructuredData() {
    const local = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HealthClub", "SportsActivityLocation"],
        name: SITE.name,
        image: `${SITE.url}/images/hero-1.jpg`,
        "@id": SITE.url,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "\u20B9\u20B9",
        description: SITE.description,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Gajularamaram",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500055",
            addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 17.517, longitude: 78.416 },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "05:00",
                closes: "22:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "06:00",
                closes: "12:00",
            },
        ],
        sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
        areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "Place", name: "Gajularamaram" },
            { "@type": "Place", name: "Suraram" },
            { "@type": "Place", name: "Quthbullapur" },
        ],
        knowsAbout: [
            "CrossFit training", "Weight loss", "Strength training",
            "Athletic conditioning", "Cricket coaching", "Personal training",
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "50",
        },
    };

    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/images/logo.png`,
        sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: SITE.url,
        name: SITE.name,
        potentialAction: {
            "@type": "SearchAction",
            target: `${SITE.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(local) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
        </>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${display.variable} ${sans.variable}`}>
            <head>
                <link rel="canonical" href={SITE.url} />
                <meta name="geo.region" content="IN-TG" />
                <meta name="geo.placename" content="Gajularamaram, Hyderabad" />
                <meta name="geo.position" content="17.517;78.416" />
                <meta name="ICBM" content="17.517, 78.416" />
                <StructuredData />
            </head>
            <body className="min-h-screen bg-background text-foreground font-sans antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <FloatingActions />
            </body>
        </html>
    );
}
