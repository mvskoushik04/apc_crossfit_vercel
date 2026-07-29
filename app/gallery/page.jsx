"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Instagram } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";
import { GALLERY_IMAGES, INSTAGRAM_GALLERY, INSTAGRAM_POSTS, SITE } from "@/lib/data";

export default function GalleryPage() {
    const [tab, setTab] = useState("photos");
    const [lightbox, setLightbox] = useState(null);
    const allInstagram = [...INSTAGRAM_POSTS, ...INSTAGRAM_GALLERY];

    return (
        <>
            {/* HERO */}
            <section className="relative pt-32 pb-16 overflow-hidden border-b border-border">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl animate-fade-up">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Gallery</span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                            Moments from <span className="italic text-gold-gradient">the box.</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Every PR, every high-five, every early-morning grind &mdash; caught on camera.
                        </p>
                    </div>
                </div>
            </section>

            {/* TABS */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex bg-card border border-border p-1 rounded-md mb-10" role="tablist">
                        {[
                            { id: "photos", label: "Photos" },
                            { id: "instagram", label: "Instagram" },
                        ].map((t) => (
                            <button
                                key={t.id}
                                role="tab"
                                aria-selected={tab === t.id}
                                onClick={() => setTab(t.id)}
                                className={`font-sans uppercase tracking-[0.3em] text-[11px] px-6 py-2.5 rounded transition-smooth ${tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {tab === "photos" && (
                        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                            {GALLERY_IMAGES.map((src, i) => (
                                <button
                                    key={src}
                                    onClick={() => setLightbox(src)}
                                    className={`relative block w-full break-inside-avoid overflow-hidden rounded-lg border border-border hover:border-primary transition-smooth group ${i % 5 === 0 ? "row-span-2" : ""}`}
                                >
                                    <div className="relative w-full" style={{ aspectRatio: i % 5 === 0 ? "3/4" : "1/1" }}>
                                        <Image src={src} alt={`APC CrossFit gallery ${i + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-smooth" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                                </button>
                            ))}
                        </div>
                    )}

                    {tab === "instagram" && (
                        <>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allInstagram.map((p) => (
                                    <InstagramEmbed key={p.url} url={p.url} type={p.type} />
                                ))}
                            </div>
                            <div className="text-center mt-10">
                                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-5 h-11 rounded-md transition-smooth text-foreground">
                                    <Instagram size={14} /> Follow @apccrossfit
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {lightbox && (
                <div
                    className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="absolute top-5 right-5 h-11 w-11 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center text-foreground"
                        onClick={() => setLightbox(null)}
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <div className="relative max-h-[90vh] max-w-[95vw] w-full h-full" onClick={(e) => e.stopPropagation()}>
                        <Image src={lightbox} alt="Gallery item" fill sizes="90vw" className="object-contain" />
                    </div>
                </div>
            )}
        </>
    );
}
