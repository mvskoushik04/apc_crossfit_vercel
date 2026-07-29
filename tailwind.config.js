/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./lib/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["var(--font-display)", "Cormorant Garamond", "serif"],
                sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
                serif: ["var(--font-display)", "Cormorant Garamond", "serif"],
            },
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                foreground: "hsl(var(--foreground) / <alpha-value>)",
                card: "hsl(var(--card) / <alpha-value>)",
                primary: {
                    DEFAULT: "hsl(var(--primary) / <alpha-value>)",
                    foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent) / <alpha-value>)",
                    foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted) / <alpha-value>)",
                    foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
                },
                border: "hsl(var(--border) / <alpha-value>)",
            },
            animation: {
                ticker: "ticker 22s linear infinite",
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "pulse-gold": "pulseGold 2.5s infinite",
            },
            keyframes: {
                ticker: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                fadeUp: {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                pulseGold: {
                    "0%, 100%": { boxShadow: "0 0 0 0 hsl(42 55% 58% / 0.5)" },
                    "50%": { boxShadow: "0 0 0 12px hsl(42 55% 58% / 0)" },
                },
            },
        },
    },
    plugins: [],
};
