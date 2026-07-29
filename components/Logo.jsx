import Link from "next/link";
import { Dumbbell } from "lucide-react";

const SIZES = {
    sm: { badge: "h-9 w-9", icon: 14, text: "text-base", sub: "text-[9px]" },
    md: { badge: "h-12 w-12", icon: 18, text: "text-xl", sub: "text-[10px]" },
    lg: { badge: "h-16 w-16", icon: 26, text: "text-3xl", sub: "text-xs" },
};

export default function Logo({ size = "md", showText = true, href = "/" }) {
    const s = SIZES[size];
    const content = (
        <div className="flex items-center gap-3">
            <div className={`${s.badge} relative flex items-center justify-center rounded-full bg-background border-2 border-primary/70 shadow-gold overflow-hidden`}>
                <div className="absolute inset-0 diagonal-stripes opacity-40" />
                <div className="absolute inset-1 rounded-full border border-primary/40" />
                <Dumbbell size={s.icon} className="text-primary relative" strokeWidth={2.2} />
            </div>
            {showText && (
                <div className="flex flex-col leading-none">
                    <div className="flex items-baseline gap-1.5">
                        <span className={`font-sans font-bold ${s.text} tracking-widest text-foreground`}>APC</span>
                        <span className={`font-sans font-bold ${s.text} tracking-widest text-primary`}>CROSSFIT</span>
                    </div>
                    <span className={`font-sans ${s.sub} tracking-[0.28em] text-muted-foreground uppercase mt-1.5 font-medium`}>
                        Gajularamaram · Hyderabad
                    </span>
                </div>
            )}
        </div>
    );
    return href ? (
        <Link href={href} aria-label="APC CrossFit home">{content}</Link>
    ) : content;
}
