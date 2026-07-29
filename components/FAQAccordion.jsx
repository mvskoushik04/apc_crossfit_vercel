"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({ items }) {
    const [openIdx, setOpenIdx] = useState(-1);
    return (
        <div className="space-y-3">
            {items.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                    <div key={i} className={`bg-card border rounded-lg px-6 transition-smooth ${isOpen ? "border-primary/60" : "border-border"}`}>
                        <button
                            type="button"
                            onClick={() => setOpenIdx(isOpen ? -1 : i)}
                            aria-expanded={isOpen}
                            className="w-full flex items-start justify-between text-left py-5 gap-4"
                        >
                            <span className="font-sans text-sm sm:text-base font-medium text-foreground">{f.q}</span>
                            <span className="shrink-0 mt-0.5 text-primary">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                        </button>
                        {isOpen && (
                            <div className="pb-5 text-muted-foreground leading-relaxed font-light">
                                {f.a}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
