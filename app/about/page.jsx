import Link from "next/link";
import Image from "next/image";
import { Compass, Target, Heart, ArrowRight, Users, Shield, Award, Star, CheckCircle2 } from "lucide-react";
import { CORE_PRINCIPLES, HERO_IMAGES, GALLERY_IMAGES, SITE } from "@/lib/data";

export const metadata = {
    title: "About APC CrossFit ",
    description:
        "APC CrossFit opened January in Gajularamaram, Coached by state-level cricket champions with a mission to build national athletes and healthier communities.",
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
                            A gym born from Championship discipline. Built for Men, Women and the Youngest Champions.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT MOTIVATED US */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-3 mb-5">
                                <span className="h-px w-10 bg-primary" />
                                <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">What Motivated Us</span>
                            </div>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                To establish <span className="italic text-gold-gradient">APC CrossFit</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground font-light italic">
                                "The Grind, The Grit and The Commitment behind building a Healthy and Competitive Community."
                            </p>
                            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
                                <p>
                                    I used to travel <span className="italic text-primary">4 hours and 60 kilometres every single day</span> to prepare myself for chasing my dream of becoming an Athlete at the Highest Level. Those long commutes taught me Discipline, Resilience, and what it truly takes to compete.
                                </p>
                                <p>
                                    Over the years, I gained deep knowledge about <span className="italic text-primary">Fitness, Athletic Strength, and Cricket</span>. But more than the Sport itself, I developed a passion for sharing what I learned with others.
                                </p>
                                <p>
                                    That's what drove me to establish APC CrossFit — to build a Community that is <span className="italic text-primary">Competitive, Fit, and Healthier</span>. A place where every Member gets the same Dedication and Coaching that I once pursued for myself.
                                </p>
                            </div>
                            <div className="mt-6 text-right">
                                <p className="text-sm text-gold-gradient font-display italic">— A. Premchand</p>
                                <p className="text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">Founder, APC CrossFit</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-elevated">
                                <Image src="/images/gym_opening.jpg" alt="APC CrossFit ribbon cutting by local MLA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-8 -left-4 sm:left-8 bg-card/95 backdrop-blur-xl border border-primary/30 rounded-lg p-6 shadow-elevated max-w-xs">
                                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-primary font-semibold">Opened</div>
                                <div className="font-display text-3xl text-foreground mt-2">January 26th 2026</div>
                            </div>
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
                            Coached by <span className="italic text-gold-gradient">State-Level Athletic Champions.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            Our Mentors have Played, Competed and Won at the State Level. That same Championship mindset now Powers every session at APC CrossFit.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { name: "A Premchand", role: "State-Level Athlete · Founder", bio: "A former state-level Athlete who brings the discipline of championship-grade training to every APC CrossFit Member. Passionate about building Young Talent and Sports-Performance alike.", image: "/images/Founder.jpeg", stats: ["State Champion · Athlete", "Certified Coach", "10+ years mentoring"] },
                            { name: "A Premcharan", role: "Health-Performance Lifestyle Coach · Co-Founder", bio: "A dedicated health and performance coach who brings deep practical knowledge in nutrition, personal training, and athletic development — guiding athletes and fitness seekers toward sustainable strength, balanced living, and a champion mindset.", image: "/images/Co-Founder.jpeg", stats: ["Nutritionist", "Personal Trainer", "3+ years mentoring"] },
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
                            { icon: Compass, title: "Our Vision", text: "To build a Competitive and Fit community — where every Member discovers their Strength, Pushes their Limits, and grows together." },
                            { icon: Target, title: "Our Mission", text: "To deliver High-Quality Coaching in a Supportive Environment, helping every Member — from age 8 to 60 — achieve goals they once thought out of reach." },
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
                                <Image src="/images/achievements/achievement-3.jpeg" alt="National level trophies won by APC CrossFit athletes" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Achievements</span>
                            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                National laurels. <span className="italic text-gold-gradient">Young champions.</span>
                            </h2>
                            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                A number of our Members have Won National-Level Honours — a testament to the standard of Coaching, Mentorship and Community here at APC CrossFit. Where the perfect fit exists, we highlight it: Young Athletes above 8yrs, Senior Lifters, Sport-Specific Competitors, and Women reclaiming Strength for the first time.
                            </p>
                            <ul className="mt-8 space-y-3">
                                {[
                                    "Multiple National-Level Athletes Trained at APC CrossFit",
                                    "Sub-Junior Kids (above 6yrs) mentored in Cricket & Athletics",
                                    "A safe, Empowering Strength Environment for Women",
                                    "Community of 100+ Members in the first 180 days",
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

        </>
    );
}
