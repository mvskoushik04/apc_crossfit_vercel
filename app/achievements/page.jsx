import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Star, Award, Medal, Calendar, Users, ChevronRight } from "lucide-react";
import { ACHIEVEMENTS, SITE } from "@/lib/data";

export const metadata = {
    title: "Achievements — National-Level Athletes | APC CrossFit Gajularamaram",
    description:
        "APC CrossFit members have won national-level honours including powerlifting championships, BCCI zonal selections, CrossFit Open top 10 finishes, and youth athlete awards.",
    alternates: { canonical: `${SITE.url}/achievements` },
};

export default function AchievementsPage() {
    // Stats summary
    const stats = [
        { value: "6", label: "National Achievements" },
        { value: "4", label: "State-Level Champions" },
        { value: "3", label: "Youth Athletes" },
        { value: "2", label: "CrossFit Competitors" },
    ];

    return (
        <>
            {/* HERO */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
                <div className="absolute inset-0 grid-lines opacity-30" />
                <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-2xl" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl animate-fade-up">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Achievements</span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                            National laurels. <span className="italic text-gold-gradient">Young champions.</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Our members have won national-level honours — a testament to the standard of coaching, 
                            mentorship and community at APC CrossFit.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS BANNER */}
            <section className="py-12 bg-gradient-dark border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((s, i) => (
                            <div key={s.label} className="text-center">
                                <div className="font-display text-3xl sm:text-4xl text-primary">{s.value}</div>
                                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-muted-foreground mt-2">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS GRID */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-3 mb-5 justify-center">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Paper Mentions</span>
                            <span className="h-px w-10 bg-primary" />
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Celebrating our <span className="italic text-gold-gradient">champions.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            Every achievement mentioned here is a reflection of the discipline, coaching, and community at APC CrossFit.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ACHIEVEMENTS.map((achievement) => (
                            <div 
                                key={achievement.id} 
                                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/60 transition-smooth shadow-elevated hover:shadow-gold"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image 
                                        src={achievement.image} 
                                        alt={achievement.title} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                                        className="object-cover group-hover:scale-105 transition-smooth duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-primary-foreground font-semibold">Achievement {String(achievement.id).padStart(2, '0')}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="font-display text-xl text-white drop-shadow-lg">{achievement.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-muted-foreground leading-relaxed font-light text-sm">
                                        {achievement.description}
                                    </p>
                                    <div className="mt-4 flex items-center gap-2 text-xs text-primary font-sans uppercase tracking-[0.3em]">
                                        <span>Read more</span>
                                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL / QUOTE SECTION */}
            <section className="py-24 lg:py-32 bg-gradient-dark border-y border-border">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-3 mb-6 justify-center">
                        <span className="h-px w-10 bg-primary" />
                        <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">From Our Coaches</span>
                        <span className="h-px w-10 bg-primary" />
                    </div>
                    <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-foreground">
                        "Every trophy on this wall represents <span className="italic text-gold-gradient">a story</span> — 
                        a story of discipline, failure, recovery, and triumph. We don't just build athletes. 
                        We build <span className="italic text-primary">champions</span>."
                    </blockquote>
                    <p className="mt-6 text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase">
                        — Head Mentor, APC CrossFit
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                        Ready to be our <span className="italic text-gold-gradient">next achievement?</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        Join APC CrossFit and become part of a community that celebrates every win — big or small.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.3em] text-xs px-10 h-13 py-3.5 font-bold">
                            Book a Free Trial <ArrowRight size={14} />
                        </Link>
                        <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-10 h-13 py-3.5 text-foreground">
                            View Programs
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
