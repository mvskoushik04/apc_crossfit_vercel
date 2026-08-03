import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { ArrowRight, ChevronDown, Sparkles, Star, MapPin, Phone, Instagram, Trophy, Users, Award as AwardIcon } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";
import FAQAccordion from "@/components/FAQAccordion";
import { PROGRAMS, STATS, FAQS, INSTAGRAM_POSTS, SITE, HERO_IMAGES, CHAMPION_IMAGES } from "@/lib/data";

export const metadata = {
    title: "APC CrossFit — Where Discipline meets Luxury | Best Gym in Gajularamaram",
    description:
        "Best gym in Gajularamaram, Hyderabad. APC CrossFit offers CrossFit, cricket coaching, athletic power, weight loss, strength & personal coaching — coached by state-level champions.",
    alternates: { canonical: `${SITE.url}/` },
};

function Eyebrow({ children, center }) {
    return (
        <div className={`inline-flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
            <span className="h-px w-10 bg-primary" />
            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">{children}</span>
            {center && <span className="h-px w-10 bg-primary" />}
        </div>
    );
}

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <Image src={HERO_IMAGES[0]} alt="APC CrossFit athlete training" fill priority sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-hero" />
                    <div className="absolute inset-0 bg-background/65" />
                    <div className="absolute inset-0 grid-lines opacity-25" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
                    <div className="space-y-8 flex flex-col items-center animate-fade-up">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Gajularamaram · Hyderabad</span>
                            <span className="h-px w-10 bg-primary" />
                        </div>

                        <h1 className="font-display leading-[1.08] text-foreground max-w-4xl" style={{ fontSize: "clamp(32px, 6vw, 48px)" }}>
                            Where <span className="text-gold-gradient font-medium">The Real Fitness</span> <span className="text-foreground font-medium">Begins.</span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            APC CrossFit is the finest strength &amp; conditioning facility in Gajularamaram &mdash; home of national-level athletes, coached by state-champion mentors. Built for men, women &amp; young champions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link href="/programs" className="inline-flex items-center justify-center rounded-md border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-8 h-13 py-3.5 bg-background/40 backdrop-blur text-foreground transition-smooth">
                                Explore Programs
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-8 h-13 py-3.5 bg-background/40 backdrop-blur text-foreground transition-smooth">
                                Contact Us
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 max-w-2xl gap-10 pt-10 mt-4 border-t border-border/50 w-full">
                            {STATS.slice(0, 3).map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="font-display text-3xl lg:text-4xl text-primary leading-none">{s.value}</div>
                                    <div className="font-sans uppercase tracking-[0.25em] text-[10px] text-muted-foreground mt-3 leading-tight">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
                    <span className="text-[10px] font-sans uppercase tracking-[0.4em]"></span>
                    <ChevronDown size={18} />
                </div>
            </section>

            {/* TICKER */}
            <section className="relative bg-background border-y border-primary/20 py-6 overflow-hidden">
                <div
                    className="flex whitespace-nowrap animate-ticker font-display italic"
                    style={{ fontSize: "48px", lineHeight: 1, color: "hsl(42 65% 62%)", willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                >
                    {[0, 1].map((r) => (
                        <div key={r} className="flex items-center shrink-0" aria-hidden={r === 1 ? "true" : undefined}>
                            {["CrossFit", "Cricket", "Athletic Power", "Weight Loss", "Personal Coaching", "Strength"].map((w) => (
                                <span key={w + r} className="flex items-center px-10">
                                    {w}
                                    <Sparkles className="ml-10 text-primary" size={18} />
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* JOURNEY */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-elevated">
                                <Image src={HERO_IMAGES[1]} alt="APC CrossFit training floor" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 hidden md:block h-32 w-32 border-2 border-primary/40 rounded-lg" />
                        </div>
                        <div>
                            <Eyebrow>Our Journey</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                From a ribbon-cut in <span className="italic text-gold-gradient">January</span> to <span className="italic text-gold-gradient">50+ athletes</span> in 90 days.
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                APC CrossFit opened its doors in January when our local MLA cut the ribbon &mdash; and within three short months we grew into a thriving community of 50+ members. From office-goers seeking transformation to national-level athletes chasing podiums, everyone found a home here.
                            </p>
                            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                We are not just another gym. We are a <span className="italic text-primary">standard</span> &mdash; built on state-level cricket championship discipline, coached with international CrossFit methodology, and designed with the polish of a luxury brand.
                            </p>
                            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { icon: AwardIcon, label: "Opened by MLA" },
                                    { icon: Users, label: "50+ Members" },
                                    { icon: Trophy, label: "National Athletes" },
                                    { icon: Sparkles, label: "Luxury Facility" },
                                ].map(({ icon: Ic, label }) => (
                                    <div key={label} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-smooth">
                                        <Ic size={20} className="text-primary mx-auto" />
                                        <div className="mt-2 font-sans uppercase tracking-[0.25em] text-[10px] text-muted-foreground leading-tight">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="relative py-24 lg:py-32 bg-gradient-dark border-y border-border overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                        <div>
                            <Eyebrow>Signature Programs</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Six paths.<br /><span className="italic text-gold-gradient">One elite standard.</span>
                            </h2>
                        </div>
                        <Link href="/programs" className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-5 h-11 rounded-md transition-smooth">
                            View All <ArrowRight size={14} />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROGRAMS.map((p) => (
                            <Link key={p.id} href="/programs" className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary transition-smooth shadow-elevated flex flex-col">
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-smooth" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                </div>
                                <div className="p-6 flex flex-col flex-1 -mt-16 relative">
                                    <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary mb-2">{p.subtitle}</div>
                                    <h3 className="font-display text-3xl text-foreground leading-tight">{p.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-light">{p.description}</p>
                                    <div className="mt-auto pt-5 flex items-center justify-between text-xs">
                                        <span className="text-muted-foreground">{p.duration} · {p.level}</span>
                                        <span className="text-primary group-hover:translate-x-1 transition-smooth flex items-center gap-1 font-sans uppercase tracking-[0.25em]">
                                            Explore <ArrowRight size={12} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHAMPIONS */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <Eyebrow>Our Champions</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Home of <span className="italic text-gold-gradient">national-level</span> athletes and young <span className="italic text-gold-gradient">champions under&nbsp;15.</span>
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                Several of our members have brought home national-level laurels &mdash; a direct reflection of the quality of coaching, discipline and community at APC CrossFit. We are equally proud of our youngest athletes, some as young as under 15, training alongside seasoned lifters.
                            </p>
                            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                Our leadership mentors are <span className="italic text-primary">state-level cricket champions</span> &mdash; people who have lived the podium and now build others up to reach it.
                            </p>
                            <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs group">
                                Meet the Mentors <ArrowRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {CHAMPION_IMAGES.map((src, i) => (
                                <div key={src} className={`relative rounded-lg overflow-hidden ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square"} ${i === 1 ? "translate-y-8" : ""} ${i === 3 ? "translate-y-8" : ""}`}>
                                    <Image src={src} alt="APC CrossFit champion" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTAGRAM */}
            <section className="relative py-24 lg:py-32 bg-gradient-dark border-y border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                        <div>
                            <Eyebrow>Follow the Grind</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Life inside <span className="italic text-gold-gradient">the box.</span>
                            </h2>
                        </div>
                        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-5 h-11 rounded-md transition-smooth">
                            <Instagram size={14} /> Follow @apccrossfit
                        </a>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {INSTAGRAM_POSTS.map((p, i) => (
                            <div key={p.url} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
                                <InstagramEmbed url={p.url} type={p.type} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/gallery" className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs">
                            More in the Gallery <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <Eyebrow center>Voices from the Box</Eyebrow>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            What our community <span className="italic text-gold-gradient">says.</span>
                        </h2>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-24 lg:py-32 bg-gradient-dark border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-14">
                        <div>
                            <Eyebrow>Common Questions</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Everything you want to know, <span className="italic text-gold-gradient">before you walk in.</span>
                            </h2>
                            <p className="mt-6 text-muted-foreground leading-relaxed font-light">
                                A few of the most common questions we get from our Gajularamaram community.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs">
                                See All FAQs <ArrowRight size={14} />
                            </Link>
                        </div>
                        <FAQAccordion items={FAQS.slice(0, 4)} />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={HERO_IMAGES[2]} alt="" fill sizes="100vw" className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-background/85" />
                </div>
                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <Eyebrow center>Your first class is on us</Eyebrow>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                        Ready to <span className="italic text-gold-gradient">rewrite your standard?</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        Walk into APC CrossFit as you are. Walk out stronger. Book your no-pressure trial in under a minute.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.3em] text-xs px-10 h-13 py-3.5 font-bold">
                            Book a Free Trial <ArrowRight size={14} />
                        </Link>
                        <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-10 h-13 py-3.5 text-foreground">
                            <Phone size={14} /> {SITE.phone}
                        </a>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={14} className="text-primary" /> {SITE.address}
                    </div>
                </div>
            </section>
        </>
    );
}
