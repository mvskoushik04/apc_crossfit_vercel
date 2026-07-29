import Link from "next/link";
import Image from "next/image";
import { Compass, Target, Heart, ArrowRight, Users, Shield, Award, Star, CheckCircle2 } from "lucide-react";
import { CORE_PRINCIPLES, HERO_IMAGES, GALLERY_IMAGES, SITE } from "@/lib/data";

export const metadata = {
    title: "About APC CrossFit — The APC Standard | State-Level Cricket Coaches",
    description:
        "APC CrossFit opened January in Gajularamaram, inaugurated by the local MLA. Coached by state-level cricket champions with a mission to build national athletes and healthier communities.",
    alternates: { canonical: `${SITE.url}/about` },
};

const iconMap = { Target, Users, Shield, Award };

export default function AboutPage() {
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
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">About Us</span>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-foreground">
                            The <span className="italic text-gold-gradient">APC</span> Standard.
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            A gym born from championship discipline. Built for men, women and the youngest champions of Gajularamaram.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR STORY + JOURNEY TIMELINE */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                        <div>
                            <div className="inline-flex items-center gap-3 mb-5">
                                <span className="h-px w-10 bg-primary" />
                                <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Our Story</span>
                            </div>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                Ribbon-cut by our <span className="italic text-gold-gradient">local MLA</span>. Built by champions.
                            </h2>
                            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
                                <p>In January, APC CrossFit officially opened its doors when our local Member of the Legislative Assembly cut the inaugural ribbon &mdash; a moment that marked more than the start of a gym. It marked the arrival of a new standard for fitness in Gajularamaram.</p>
                                <p>What began as one facility with a big vision quickly became a community of <span className="italic text-primary">50+ committed members</span> within three months &mdash; office-goers, homemakers, students, and competing athletes, training side by side under one roof.</p>
                                <p>Today we are proud to call ourselves the finest gym in Gajularamaram &mdash; a place where discipline meets luxury, and where every rep is coached with the standards of a state-level champion.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-elevated">
                                <Image src="/images/ribbon-cutting.jpg" alt="APC CrossFit ribbon cutting by local MLA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-8 -left-4 sm:left-8 bg-card/95 backdrop-blur-xl border border-primary/30 rounded-lg p-6 shadow-elevated max-w-xs">
                                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary font-semibold">Opened</div>
                                <div className="font-display text-3xl text-foreground mt-2">January 2025</div>
                                <div className="text-xs text-muted-foreground mt-1">Inaugurated by local MLA</div>
                            </div>
                        </div>
                    </div>

                    {/* JOURNEY TIMELINE */}
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 transform -translate-x-1/2 hidden md:block" />
                        
                        <div className="space-y-12 md:space-y-16">
                            {[
                                { month: "January 2025", title: "Grand Opening", desc: "APC CrossFit inaugurated by local MLA. Ribbon-cutting ceremony with 50+ attendees.", icon: "🎯" },
                                { month: "February 2025", title: "First Members Join", desc: "Community grows to 25+ members. First transformation stories begin.", icon: "💪" },
                                { month: "March 2025", title: "50+ Members", desc: "CrossFit, cricket coaching & strength programs launch. 50+ members milestone achieved.", icon: "🏆" },
                                { month: "April 2025", title: "State-Level Champions", desc: "First national-level athletes emerge from APC. Youth cricket program expands.", icon: "⭐" },
                                { month: "May 2025", title: "Community Grows", desc: "Women's strength program launches. 75+ members now train at APC.", icon: "🔥" },
                                { month: "June 2025", title: "Luxury Facility", desc: "Full CrossFit rig installed. Dedicated cricket net & training area completed.", icon: "✨" },
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 relative`}>
                                    <div className={`flex-1 text-right hidden md:block ${index % 2 === 0 ? '' : 'order-2 text-left'}`}>
                                        {index % 2 === 0 ? (
                                            <div className="pr-8">
                                                <div className="font-display text-2xl text-foreground">{item.title}</div>
                                                <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                                                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary mt-2">{item.month}</div>
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 z-10 flex-shrink-0">
                                        <span className="text-xl">{item.icon}</span>
                                    </div>

                                    <div className={`flex-1 text-left hidden md:block ${index % 2 === 0 ? '' : 'order-1 text-right'}`}>
                                        {index % 2 === 1 ? (
                                            <div className="pl-8">
                                                <div className="font-display text-2xl text-foreground">{item.title}</div>
                                                <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                                                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary mt-2">{item.month}</div>
                                            </div>
                                        ) : null}
                                    </div>

                                    {/* Mobile View */}
                                    <div className="flex-1 text-center md:hidden">
                                        <div className="font-display text-xl text-foreground">{item.title}</div>
                                        <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                                        <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary mt-2">{item.month}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="py-24 lg:py-32 bg-gradient-dark border-y border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Leadership &amp; Mentors</span>
                        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Coached by <span className="italic text-gold-gradient">state-level cricket champions.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            Our mentors have played, competed and won at the state level. That same championship mindset now powers every session at APC CrossFit.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: "Head Mentor", role: "State-Level Cricket Champion · Founder", bio: "A former state-level cricketer who brings the discipline of championship-grade training to every APC athlete. Passionate about building young talent and adult transformation alike.", image: "/images/mentor-1.jpg", stats: ["State Champion · Cricket", "L2 Certified Coach", "12+ years mentoring"] },
                            { name: "Co-Mentor", role: "State-Level Cricket Champion · Athletic Coach", bio: "A decorated state cricket veteran who now leads our cricket coaching and athletic development pathway — the same pathway that has produced our national-level athletes.", image: "/images/mentor-2.jpg", stats: ["State Captain · Cricket", "Sport Science Cert.", "Youth Athlete Mentor"] },
                        ].map((m) => (
                            <div key={m.name} className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/60 transition-smooth flex flex-col">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image src={m.image} alt={`${m.name} — ${m.role}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-smooth" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                    <div className="absolute bottom-5 left-6 right-6">
                                        <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary font-semibold">{m.role}</div>
                                        <h3 className="font-display text-3xl text-foreground mt-2">{m.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8 flex flex-col flex-1">
                                    <p className="text-muted-foreground leading-relaxed font-light">{m.bio}</p>
                                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                                        {m.stats.map((s) => (
                                            <span key={s} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOUNDATIONS */}
            <section className="py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Foundations</span>
                        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Vision · Mission · <span className="italic text-gold-gradient">Values</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { icon: Compass, title: "Our Vision", text: "To become North Hyderabad's most respected strength & conditioning destination — producing champions and transforming lives at every age." },
                            { icon: Target, title: "Our Mission", text: "Deliver world-class coaching in an elegant environment, ensuring every member — from age 12 to 60 — achieves goals they once thought impossible." },
                            { icon: Heart, title: "Our Values", text: "Discipline. Community. Excellence. Integrity. We do the work when no one is watching, and we celebrate every win, big or small." },
                        ].map((v) => {
                            const Ic = v.icon;
                            return (
                                <div key={v.title} className="bg-card/50 border border-border hover:border-primary/60 transition-smooth rounded-lg p-8 flex flex-col">
                                    <Ic size={26} className="text-primary mb-6" strokeWidth={1.5} />
                                    <h3 className="font-display text-3xl text-foreground">{v.title}</h3>
                                    <p className="text-muted-foreground mt-4 leading-relaxed font-light">{v.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="py-24 lg:py-32 bg-gradient-dark border-y border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-elevated">
                                <Image src="/images/trophies.jpg" alt="National level trophies won by APC CrossFit athletes" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Achievements</span>
                            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                National laurels. <span className="italic text-gold-gradient">Young champions.</span>
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                A number of our members have won national-level honours — a testament to the standard of coaching, mentorship and community here at APC CrossFit. Where the perfect fit exists, we highlight it: young athletes under 15, senior lifters, sport-specific competitors, and women reclaiming strength for the first time.
                            </p>
                            <ul className="mt-8 space-y-3">
                                {[
                                    "Multiple national-level athletes trained at APC CrossFit",
                                    "Youth athletes (under 15) mentored in cricket & athletics",
                                    "A safe, empowering strength environment for women",
                                    "Community of 50+ transformations in the first 90 days",
                                ].map((it) => (
                                    <li key={it} className="flex items-start gap-3">
                                        <Star size={16} className="text-primary shrink-0 mt-1" strokeWidth={1.8} />
                                        <span className="text-foreground/90 font-light leading-relaxed">{it}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/programs" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs group">
                                See Our Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-dark border-t border-border">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                        Come see the box. <span className="italic text-gold-gradient">Meet the mentors.</span>
                    </h2>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 mt-8 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-sans uppercase tracking-[0.3em] text-xs px-10 h-13 py-3.5 font-bold">
                        Book Your Visit <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </>
    );
}
