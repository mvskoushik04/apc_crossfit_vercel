"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setOpen(false); }, [pathname]);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-elevated" : "bg-transparent"}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Logo size="md" />

                    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
                        {NAV_LINKS.map((link) => {
                            const active = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative font-sans uppercase text-xs tracking-[0.25em] px-4 py-2 transition-smooth ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                                >
                                    {link.name}
                                    {active && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth">
                            <Phone size={16} /><span className="font-medium">{SITE.phone}</span>
                        </a>
                        <Link href="/contact" className="inline-flex items-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.25em] text-xs px-6 h-10 font-bold transition-smooth">
                            Join Now
                        </Link>
                    </div>

                    <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border">
                    <div className="px-4 py-6 space-y-1">
                        {NAV_LINKS.map((link) => {
                            const active = link.path === "/" ? pathname === "/" : pathname.startsWith(link.path);
                            return (
                                <Link key={link.path} href={link.path} className={`block font-sans uppercase tracking-[0.25em] text-xs py-3 px-4 rounded ${active ? "text-primary bg-primary/10 border-l-2 border-primary" : "text-muted-foreground hover:text-foreground hover:bg-card"}`}>
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-4 space-y-3">
                            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground px-4">
                                <Phone size={16} /> {SITE.phone}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
