"use client";

import { useEffect, useRef, useState } from "react";
import { Instagram, ExternalLink, PlayCircle, Loader2 } from "lucide-react";

export default function InstagramEmbed({ url, type = "post" }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const processEmbed = () => {
            if (typeof window !== "undefined" && window.instgrm) {
                try {
                    window.instgrm.Embeds.process();
                    setLoaded(true);
                } catch (e) {
                    setError(true);
                }
            }
        };

        const existing = document.getElementById("ig-embed-script");
        if (!existing) {
            const s = document.createElement("script");
            s.id = "ig-embed-script";
            s.async = true;
            s.src = "https://www.instagram.com/embed.js";
            s.onload = processEmbed;
            s.onerror = () => setError(true);
            document.body.appendChild(s);
        } else {
            processEmbed();
        }

        const t = setTimeout(() => {
            if (!loaded) setLoaded(true);
        }, 3000);
        
        return () => clearTimeout(t);
    }, [url, loaded]);

    return (
        <div ref={ref} className="relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/60 transition-smooth group">
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ 
                    background: "transparent", 
                    border: 0, 
                    margin: 0, 
                    minWidth: "100%", 
                    width: "100%",
                    padding: 0,
                    borderRadius: "8px",
                }}
            >
                {!loaded && !error && (
                    <div className="aspect-square flex flex-col items-center justify-center gap-3 p-6 text-center bg-card">
                        <Loader2 size={32} className="animate-spin text-primary" />
                        <p className="font-sans uppercase tracking-[0.25em] text-xs text-muted-foreground">Loading {type}</p>
                    </div>
                )}
                {error && (
                    <div className="aspect-square flex flex-col items-center justify-center gap-3 p-6 text-center bg-card">
                        {type === "reel" ? <PlayCircle size={44} className="text-primary" /> : <Instagram size={44} className="text-primary" />}
                        <p className="font-sans uppercase tracking-[0.25em] text-xs text-muted-foreground">Unable to load {type}</p>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-xs text-primary hover:text-primary-glow font-medium">
                            View on Instagram <ExternalLink size={12} />
                        </a>
                    </div>
                )}
                {loaded && !error && (
                    <div className="aspect-square">
                        <div id={`ig-embed-${url}`} />
                    </div>
                )}
            </blockquote>
            {loaded && !error && (
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Open on Instagram" className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth hover:bg-primary/20">
                    <ExternalLink size={14} className="text-foreground" />
                </a>
            )}
            {type === "reel" && (
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                    <PlayCircle size={12} className="text-white" />
                    <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-white font-semibold">Reel</span>
                </div>
            )}
        </div>
    );
}
