import Link from "next/link";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { ArrowRight, ChevronDown, Sparkles, Star, MapPin, Phone, Instagram, Trophy, Users, Award as AwardIcon } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";
import FAQAccordion from "@/components/FAQAccordion";
import { PROGRAMS, STATS, FAQS, INSTAGRAM_POSTS, SITE, HERO_IMAGES, CHAMPION_IMAGES } from "@/lib/data";

export const metadata = {
    title: "APC CrossFit",
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
            <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
                <div className="absolute inset-0">
                    <Image src={HERO_IMAGES[0]} alt="APC CrossFit athlete training" fill priority sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-hero" />
                    <div className="absolute inset-0 bg-background/65" />
                    <div className="absolute inset-0 grid-lines opacity-25" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 w-full text-center">
                    <div className="space-y-6 sm:space-y-8 flex flex-col items-center animate-fade-up">
                        <div className="inline-flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />
                            <span className="font-sans uppercase tracking-[0.4em] text-[11px] text-primary font-semibold">Gajularamaram · Hyderabad</span>
                            <span className="h-px w-10 bg-primary" />
                        </div>

                        <h1 className="font-display leading-[1.08] text-foreground max-w-4xl" style={{ fontSize: "clamp(32px, 6vw, 48px)" }}>
                            Where <span className="text-gold-gradient font-medium">The Real Fitness</span> <span className="text-foreground font-medium">Begins.</span>
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed font-light">
                            APC CrossFit is the finest strength &amp; conditioning facility in Gajularamaram &mdash; home of National-Level Athletes, coached by State-Champion mentors. Built for Men, Women &amp; Young Champions.
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
                            {["CrossFit", "Cardio", "Muscle Building", "Weight Loss", "Weight Gain", "Fat Loss","Strength", "Power", "Speed", "Mobility", "Flexibility"].map((w) => (
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
                                <video 
                                    src="/videos/our-journey.mp4" 
                                    autoPlay 
                                    muted 
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                            </div>
                        </div>
                        <div>
                            <Eyebrow>Our Journey</Eyebrow>
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                                    10 years of experience. <span className="italic text-gold-gradient">200 days of making it count.</span>
                                </h2>
                            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                Before APC CrossFit existed, our mentor spent over a decade coaching athletes across Hyderabad — at cricket academies and competitive training centres. That experience shaped everything that went into building this Crossfit gym.
                            </p>
                            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                                When we opened our CrossFit gym on January 26th 2026, we didn't just launch a crossfit gym. We created a space where 10 years of coaching knowledge could finally come together under one roof. In just 200 days, we've had 100+ members walk through those doors — each one becoming part of a community that trains hard, shows up for each other, and shares the same belief: real fitness is built together.
                            </p>
                            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { icon: AwardIcon, label: "10+ Years Mentoring" },
                                    { icon: Users, label: "100+ Members" },
                                    { icon: Trophy, label: "National Athletes" },
                                    { icon: Sparkles, label: "Community First" },
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
                <div className="absolute inset-0 grid-lines opacity-20" />
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Eyebrow center>Our Programs</Eyebrow>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Three paths. <span className="italic text-gold-gradient">One mission.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            Whether you're starting your fitness journey or chasing elite performance — we have a program built for you.
                        </p>
                    </div>
            
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* General Fitness */}
                        <div className="group relative bg-card border border-border hover:border-primary/60 rounded-2xl overflow-hidden transition-smooth shadow-elevated hover:shadow-gold">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image 
                                    src="/images/program-general-fitness.jpg" 
                                    alt="General Fitness Program" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                                        <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-primary font-semibold">Program 01</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-display text-3xl sm:text-4xl text-foreground drop-shadow-lg">General Fitness</h3>
                                    <p className="text-sm text-muted-foreground/90 mt-2 font-light">Build a strong foundation for life.</p>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    Designed for anyone looking to transform their body and health — from beginners to those getting back on track.
                                </p>
                                
                                <div className="mt-6 grid grid-cols-2 gap-2">
                                    {[ 
                                        "Health Performance",
                                        "Strength",
                                        "Cardio",
                                        "Weight Loss",
                                        "Weight Gain",
                                        "Fat Loss",
                                        "CrossFit",
                                        "High Intensity Interval Training",
                                        "Diet Guidance",
                                        "In-person Workout Guidance"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                            <span className="text-xs text-foreground/80 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs group">
                                    Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                                </Link>
                            </div>
                        </div>
            
                        {/* Cricket Strength & Conditioning */}
                        <div className="group relative bg-card border border-border hover:border-primary/60 rounded-2xl overflow-hidden transition-smooth shadow-elevated hover:shadow-gold">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image 
                                    src="/images/program-cricket.jpg" 
                                    alt="Cricket Strength & Conditioning Program" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                                        <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-primary font-semibold">Program 02</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-display text-3xl sm:text-4xl text-foreground drop-shadow-lg">Cricket Strength & Conditioning</h3>
                                    <p className="text-sm text-muted-foreground/90 mt-2 font-light">We don't just train cricketers. We build match-winners.</p>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    Sport-specific training designed for cricketers — from power-hitting to bowling speed, agility in the field, and match-day endurance.
                                </p>
                                
                                <div className="mt-6 grid grid-cols-2 gap-2">
                                    {[
                                        "Cricket Specific Strength",
                                        "Improved Speed",
                                        "Agility & Power",
                                        "Enhance Batting Performance ",
                                        "Enhance Bowling Performance",
                                        "Injury Prevention",
                                        "Improve Resilience",
                                        "Ground Fitness",
                                        "High Performance",
                                        "Recovery Protocols",
                                        "In-Person Coaching"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                            <span className="text-xs text-foreground/80 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs group">
                                    Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                                </Link>
                            </div>
                        </div>
            
                        {/* Sports Performance */}
                        <div className="group relative bg-card border border-border hover:border-primary/60 rounded-2xl overflow-hidden transition-smooth shadow-elevated hover:shadow-gold">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image 
                                    src="/images/program-sports-performance.jpg" 
                                    alt="Sports Performance Program" 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                                        <span className="font-sans uppercase tracking-[0.3em] text-[9px] text-primary font-semibold">Program 03</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-display text-3xl sm:text-4xl text-foreground drop-shadow-lg">Sports Performance</h3>
                                    <p className="text-sm text-muted-foreground/90 mt-2 font-light">Train like a champion. Perform like one.</p>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    Engineered for athletes who want to dominate their sport — whether you're a cricketer, runner, or ice skater.
                                </p>
                                
                                <div className="mt-6 grid grid-cols-2 gap-2">
                                    {[
                                        "Strength",
                                        "Conditioning",
                                        "Speed and Agility",
                                        "Power",
                                        "Force Development",
                                        "Mobility",
                                        "Flexibility",
                                        "CrossFit",
                                        "High Intensity Interval Training",
                                        "Ground Fitness",
                                        "Recovery Measures",
                                        "Injury Prevention",
                                        "High Performance"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                            <span className="text-xs text-foreground/80 font-light">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs group">
                                    Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-smooth" />
                                </Link>
                            </div>
                        </div>
                    </div>
            
                    <div className="text-center mt-12">
                        <Link href="/contact" className="inline-flex items-center gap-2 border border-primary/40 hover:border-primary hover:bg-primary/10 font-sans uppercase tracking-[0.3em] text-xs px-6 h-11 rounded-md transition-smooth">
                            Contact us <ArrowRight size={14} />
                        </Link>
                    </div>
            
                </div>
            </section>

            {/* CHAMPIONS */}
            <section className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <Eyebrow center>Our Champions</Eyebrow>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-foreground">
                            Home of <span className="italic text-gold-gradient">National-level</span> Athletes and  <span className="italic text-gold-gradient">Young Champions.</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
                            We are incredibly proud of our members who have achieved remarkable success at the national, state, and district levels — a testament to the quality of coaching and community at APC CrossFit.
                        </p>
                    </div>
            
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Sai Teja",
                                achievement: "National Level Skating Champion",
                                image: "/images/champions/sai-teja.jpg"
                            },
                            {
                                name: "Raja",
                                achievement: "District Level Athletics & Cricket",
                                image: "/images/champions/Raja.jpeg"
                            },
                            {
                                name: "Nakshatra",
                                achievement: "Selected - Guntur U-15 Girls Cricket",
                                image: "/images/champions/Nakshatra.jpeg"
                            },
                            {
                                name: "Pranav",
                                achievement: "Selected - U-14 Cricket Team USA",
                                image: "/images/champions/pranav.jpg"
                            },
                            {
                                name: "Manideep",
                                achievement: "C-Division & B-Division Cricket Leagues",
                                image: "/images/champions/Manideep.jpeg"
                            },
                            {
                                name: "Nandini & Gayatri",
                                achievement: "SGF Running - Podium Contenders",
                                image: "/images/champions/nandini-gayatri.jpg"
                            },
                        ].map((champion, index) => (
                            <div 
                                key={champion.name} 
                                className="group relative bg-card border border-border hover:border-primary/60 rounded-lg overflow-hidden transition-smooth shadow-elevated hover:shadow-gold"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image 
                                        src={champion.image} 
                                        alt={champion.name} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                                        className="object-cover group-hover:scale-105 transition-smooth duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                                    
                                    
                                    {/* Name and Achievement - Overlay on image */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                                        <h3 className="font-display text-xl text-foreground">{champion.name}</h3>
                                        <p className="text-xs text-primary font-sans uppercase tracking-[0.25em] mt-1">{champion.achievement}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                A few of the most common questions we get from our community.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 mt-8 text-primary hover:text-primary-glow font-sans uppercase tracking-[0.3em] text-xs">
                                See All FAQs <ArrowRight size={14} />
                            </Link>
                        </div>
                        <FAQAccordion items={FAQS.slice(0, 4)} />
                    </div>
                </div>
            </section>

        </>
    );
}
