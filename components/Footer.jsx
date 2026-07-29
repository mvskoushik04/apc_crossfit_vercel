import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { SITE, NAV_LINKS, PROGRAMS } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-dark border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="space-y-5">
                        <Logo size="md" />
                        <p className="text-sm text-muted-foreground leading-relaxed font-light">
                            The strongest CrossFit box in Gajularamaram. Forging athletes since January.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { href: SITE.instagram, Icon: Instagram, label: "Instagram" },
                                { href: SITE.facebook, Icon: Facebook, label: "Facebook" },
                                { href: SITE.youtube, Icon: Youtube, label: "YouTube" },
                            ].map(({ href, Icon, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-smooth">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-sans uppercase tracking-[0.25em] text-xs text-foreground mb-5 font-semibold">Explore</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.path}><Link href={l.path} className="text-sm text-muted-foreground hover:text-primary transition-smooth">{l.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans uppercase tracking-[0.25em] text-xs text-foreground mb-5 font-semibold">Programs</h4>
                        <ul className="space-y-3">
                            {PROGRAMS.map((p) => (
                                <li key={p.id}><Link href="/programs" className="text-sm text-muted-foreground hover:text-primary transition-smooth">{p.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans uppercase tracking-[0.25em] text-xs text-foreground mb-5 font-semibold">Visit Us</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /><span>{SITE.address}</span></li>
                            <li className="flex gap-3"><Phone size={16} className="text-primary shrink-0 mt-0.5" /><a href={`tel:${SITE.phone}`} className="hover:text-primary transition-smooth">{SITE.phone}</a></li>
                            <li className="flex gap-3"><Mail size={16} className="text-primary shrink-0 mt-0.5" /><a href={`mailto:${SITE.email}`} className="hover:text-primary transition-smooth">{SITE.email}</a></li>
                            <li className="flex gap-3"><Clock size={16} className="text-primary shrink-0 mt-0.5" /><span>Mon–Sat: 5 AM – 10 PM<br />Sun: 6 AM – 12 PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} APC CrossFit. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-[0.35em]">
                        Forge · Grind · Rise
                    </p>
                </div>
            </div>
        </footer>
    );
}
