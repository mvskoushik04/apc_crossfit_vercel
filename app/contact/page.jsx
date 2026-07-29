"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Facebook, Youtube, Loader2, ExternalLink } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE, FAQS } from "@/lib/data";

export default function ContactPage() {
    const [formLoaded, setFormLoaded] = useState(false);

    const info = [
        { icon: MapPin, title: "Location", value: SITE.address, action: "Get Directions", href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}` },
        { icon: Phone, title: "Call Us", value: SITE.phone, action: "Tap to call", href: `tel:${SITE.phone}` },
        { icon: MessageCircle, title: "WhatsApp", value: "Chat with a coach", action: "Open WhatsApp", href: `https://wa.me/${SITE.whatsapp}` },
        { icon: Clock, title: "Hours", value: "Mon–Sat: 5 AM – 10 PM\nSun: 6 AM – 12 PM", action: null, href: null },
    ];

    return (
        <>
            {/* HERO */}
            <section className="relative pt-32 pb-16 overflow-hidden border-b border-border">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl animate-fade-up">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Get In Touch</span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                            Ready to <span className="italic text-gold-gradient">begin?</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Fill the enquiry form, ping us on WhatsApp, or drop in. Your first class is on us &mdash; no strings, no pressure.
                        </p>
                    </div>
                </div>
            </section>

            {/* INFO CARDS */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {info.map(({ icon: Ic, title, value, action, href }) => {
                            const inner = (
                                <div className="bg-gradient-card border border-border hover:border-primary/60 transition-smooth h-full flex flex-col rounded-lg p-6">
                                    <div className="h-11 w-11 rounded bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                                        <Ic size={20} className="text-primary" />
                                    </div>
                                    <div className="font-sans uppercase tracking-[0.25em] text-[10px] text-muted-foreground font-semibold">{title}</div>
                                    <div className="font-medium text-foreground mt-1 whitespace-pre-line">{value}</div>
                                    {action && <div className="mt-auto pt-4 text-xs text-primary font-sans uppercase tracking-[0.25em]">{action} →</div>}
                                </div>
                            );
                            return href ? (
                                <a key={title} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                            ) : (
                                <div key={title}>{inner}</div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FORM + MAP */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Google Form */}
                        <div>
                            <div className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary mb-3 font-semibold">Enquiry Form</div>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Tell us about <span className="italic text-gold-gradient">your goals.</span>
                            </h2>
                            <p className="text-muted-foreground mt-3 mb-6 leading-relaxed font-light">
                                No login required. Just fill and submit &mdash; a coach will call you back within 24 hours.
                            </p>
                            <div className="bg-card border border-border rounded-lg overflow-hidden">
                                <div className="relative min-h-[860px]">
                                    {!formLoaded && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                                            <Loader2 className="animate-spin text-primary mb-3" size={28} />
                                            <p className="text-sm text-muted-foreground font-sans uppercase tracking-[0.3em]">Loading form</p>
                                        </div>
                                    )}
                                    <iframe
                                        title="APC CrossFit Enquiry Form"
                                        src={SITE.googleFormEmbed}
                                        width="100%"
                                        height="860"
                                        frameBorder="0"
                                        marginHeight="0"
                                        marginWidth="0"
                                        onLoad={() => setFormLoaded(true)}
                                        className="w-full bg-card block"
                                    >Loading&hellip;</iframe>
                                </div>
                            </div>
                            <a href={SITE.googleFormPublic} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-xs text-muted-foreground hover:text-primary transition-smooth">
                                Open form in new tab <ExternalLink size={12} />
                            </a>
                        </div>

                        {/* Map + CTAs */}
                        <div>
                            <div className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary mb-3 font-semibold">Find Us</div>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                The box in <span className="italic text-gold-gradient">Gajularamaram.</span>
                            </h2>
                            <p className="text-muted-foreground mt-3 mb-6 leading-relaxed font-light">
                                Right in the heart of Gajularamaram, easy to reach on two wheels or four.
                            </p>
                            <div className="bg-card border border-border rounded-lg overflow-hidden mb-6">
                                <div className="aspect-[4/3]">
                                    <iframe
                                        title="APC CrossFit Location"
                                        src={SITE.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: "grayscale(0.35) contrast(1.05)" }}
                                        loading="lazy"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[hsl(142_55%_40%)] hover:bg-[hsl(142_55%_45%)] text-white font-sans uppercase tracking-[0.3em] text-xs h-12 rounded-md transition-smooth">
                                    <MessageCircle size={16} /> Chat on WhatsApp
                                </a>
                                <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.3em] text-xs h-12 font-bold rounded-md transition-smooth">
                                    <Phone size={16} /> Call {SITE.phone}
                                </a>
                                <div className="flex items-center gap-3 pt-2">
                                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 h-11 rounded border border-border hover:border-primary hover:text-primary flex items-center justify-center gap-2 transition-smooth text-foreground">
                                        <Instagram size={16} /> <span className="font-sans uppercase tracking-[0.25em] text-xs">Instagram</span>
                                    </a>
                                    <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 h-11 rounded border border-border hover:border-primary hover:text-primary flex items-center justify-center gap-2 transition-smooth text-foreground">
                                        <Facebook size={16} /> <span className="font-sans uppercase tracking-[0.25em] text-xs">Facebook</span>
                                    </a>
                                    <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="flex-1 h-11 rounded border border-border hover:border-primary hover:text-primary flex items-center justify-center gap-2 transition-smooth text-foreground">
                                        <Youtube size={16} /> <span className="font-sans uppercase tracking-[0.25em] text-xs">YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gradient-dark border-t border-border">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-3 mb-5 justify-center">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Common Questions</span>
                            <span className="h-px w-10 bg-primary" />
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Everything you want to know, <span className="italic text-gold-gradient">before you walk in.</span>
                        </h2>
                    </div>
                    <FAQAccordion items={FAQS} />
                </div>
            </section>
        </>
    );
}

// SEO metadata for the contact page cannot live in a client component; add via layout if needed.
// If you want per-page metadata, split the client interactivity into a child component.
