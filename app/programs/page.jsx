import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, CheckCircle2, Flame, Dumbbell, Heart, Target, Trophy, User } from "lucide-react";
import { PROGRAMS, FACILITIES, SITE } from "@/lib/data";

export const metadata = {
    title: "APC Crossfit-Programs",
    description:
        "Three signature programs at APC CrossFit Gajularamaram: General Fitness, Sports Performance Training and Cricket Strength & Conditioning",
    alternates: { canonical: `${SITE.url}/programs` },
};

const programIcons = { crossfit: Flame, strength: Dumbbell, weightloss: Heart, athletic: Target, cricket: Trophy, personal: User };

export default function ProgramsPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl animate-fade-up">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Programs</span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                            Three Paths. <span className="italic text-gold-gradient">One goal.</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Whether you are chasing your First Pull-up, your First Medal, or your first 6-pack &mdash; we have built a program that meets you where you are.
                        </p>
                    </div>
                </div>
            </section>

            {/* DETAILED PROGRAMS */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
                    {PROGRAMS.map((p, i) => {
                        const reverse = i % 2 === 1;
                        return (
                            <div key={p.id} className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center`}>
                                <div className={reverse ? "lg:order-2" : ""}>
                                    <div className="relative rounded-lg overflow-hidden aspect-[4/5] group shadow-elevated">
                                        <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-smooth" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-background/70 backdrop-blur border border-border">
                                                <Clock size={12} className="text-primary" />
                                                <span className="font-sans uppercase tracking-[0.3em] text-[10px]">{p.duration}</span>
                                            </div>
                                            <div className="px-3 py-1.5 rounded bg-background/70 backdrop-blur border border-border">
                                                <span className="font-sans uppercase tracking-[0.3em] text-[10px]">{p.level}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={reverse ? "lg:order-1" : ""}>
                                    <div className="font-sans uppercase tracking-[0.3em] text-[11px] text-primary mb-3 font-semibold">{p.subtitle}</div>
                                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">{p.title}</h2>
                                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-light">{p.description}</p>
                                    <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                        {p.highlights.map((h) => (
                                            <div key={h} className="flex items-center gap-2 bg-card border border-border rounded p-3">
                                                <CheckCircle2 size={16} className="text-primary shrink-0" />
                                                <span className="text-sm text-foreground">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.3em] text-xs px-6 h-12 font-bold">
                                            Contact for Pricing <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* BUILT FOR EVERY BODY */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-3 mb-5 justify-center">
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Who Trains at APC</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Built for <span className="italic text-gold-gradient">every</span> body.
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            Men, women and young athletes &mdash; all welcome, all coached to championship standards.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { title: "Men", text: "From Weight Loss to Competitive Strength &mdash; Personalised Pathways for every Stage.", image: "/images/Men.jpeg" },
                            { title: "Women", text: "A Safe, Empowering Strength Environment. Ladies-First coaching wherever preferred.", image: "/images/Women.jpeg" },
                            { title: "Youth (above 8 Yrs)", text: "Age-appropriate Cricket, Athletic and Strength Foundations &mdash; the Champions of Tomorrow.", image: "/images/Kids.png" },
                        ].map((g) => (
                            <div key={g.title} className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/60 transition-smooth">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image src={g.image} alt={`Training for ${g.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-smooth" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="font-display text-4xl text-foreground">{g.title}</h3>
                                        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: g.text }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
