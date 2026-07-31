// Central data source for APC CrossFit — edit copy here.

export const SITE = {
    name: "APC CrossFit",
    shortName: "APC CrossFit",
    tagline: "Where Discipline meets Luxury.",
    description:
        "APC CrossFit is the finest strength & conditioning gym in Gajularamaram, Hyderabad. CrossFit, cricket coaching, athletic power, weight loss, strength & personal coaching — coached by state-level champions.",
    location: "Mahakali Temple back side, 2-6/1, Gajularamaram, Hyderabad, Telangana 500117",
    phone: "+91 91107 61367",
    whatsapp: "919110761367",
    email: "info@apccrossfit.in",
    address: "Mahakali Temple back side, 2-6/1, Gajularamaram, Hyderabad, Telangana 500117",
    // Update to your live production URL before deploy.
    url: "https://apccrossfit.in",
    instagram: "https://www.instagram.com/apccrossfit",
    facebook: "https://www.facebook.com/apccrossfit",
    youtube: "https://www.youtube.com/@apccrossfit",
    googleFormEmbed:
        "https://docs.google.com/forms/d/e/1FAIpQLSfdeLIEhny3BcVhhOLubxZaOsLVZGpvHVPcLTwr5r-OPTuVwA/viewform?embedded=true",
    googleFormPublic:
        "https://docs.google.com/forms/d/e/1FAIpQLSfdeLIEhny3BcVhhOLubxZaOsLVZGpvHVPcLTwr5r-OPTuVwA/viewform?usp=header",
    mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.7609667518451!2d78.42097495709858!3d17.525721000856272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f00643dfb5f%3A0x45e38be29946ca1b!2sApc%20cross%20fit!5e0!3m2!1sen!2sin!4v1785220653651!5m2!1sen!2sin",
    keywords: [
        "APC CrossFit",
        "apc crossfit",
        "best gym in Gajularamaram",
        "best gym Gajularamaram",
        "gym in Gajularamaram",
        "CrossFit Gajularamaram",
        "CrossFit Hyderabad",
        "gym in Hyderabad",
        "cricket coaching Gajularamaram",
        "weight loss gym Gajularamaram",
        "strength training Hyderabad",
        "personal trainer Gajularamaram",
        "athletic training Hyderabad",
        "best fitness center Gajularamaram",
    ],
};

export const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];

export const PROGRAMS = [
    {
        id: "crossfit",
        title: "CrossFit Training",
        subtitle: "01 / Our signature. Our soul.",
        description: "Constantly varied, high-intensity functional movements coached by certified trainers.",
        highlights: ["Coach-led WODs", "Olympic lifts", "Gymnastics", "Metcon"],
        image: "/images/program-crossfit.jpg",
        duration: "60 min",
        level: "All Levels",
    },
    {
        id: "weightloss",
        title: "Weight Loss Program",
        subtitle: "02 / Transform. Sustain. Repeat.",
        description: "Data-driven fat loss with nutrition, resistance training & metabolic conditioning.",
        highlights: ["HIIT circuits", "Nutrition plan", "Body composition", "Weekly tracking"],
        image: "/images/program-weightloss.jpg",
        duration: "45 min",
        level: "All Levels",
    },
    {
        id: "strength",
        title: "Strength Training",
        subtitle: "03 / Barbell. Discipline. Power.",
        description: "Powerlifting fundamentals — squat, bench, deadlift and beyond.",
        highlights: ["Powerlifting", "Barbell club", "Progressive overload", "Form focused"],
        image: "/images/program-strength.jpg",
        duration: "75 min",
        level: "Beginner – Advanced",
    },
    {
        id: "athletic",
        title: "Athletic Power",
        subtitle: "04 / Perform like a champion.",
        description: "Sport-specific conditioning for speed, agility, explosive power and endurance.",
        highlights: ["Speed & agility", "Plyometrics", "Sport-specific drills", "Recovery"],
        image: "/images/program-athletic.jpg",
        duration: "90 min",
        level: "Athletes",
    },
    {
        id: "cricket",
        title: "Cricket Coaching",
        subtitle: "05 / Guided by state champions.",
        description: "Batting, bowling, fielding and cricket-specific strength coached by state-level champions.",
        highlights: ["Batting technique", "Bowling variations", "Match fitness", "Mental game"],
        image: "/images/program-cricket.jpg",
        duration: "120 min",
        level: "Youth & Adult",
    },
    {
        id: "personal",
        title: "Personal Coaching",
        subtitle: "06 / One coach. One goal. All in.",
        description: "One-on-one bespoke coaching — programming, nutrition and lifestyle designed only for you.",
        highlights: ["1:1 attention", "Custom programming", "Nutrition guidance", "Priority slots"],
        image: "/images/program-personal.jpg",
        duration: "60 min",
        level: "Bespoke",
    },
];

export const CORE_PRINCIPLES = [
    { title: "Discipline", desc: "Show up. Every rep counts. Consistency beats intensity.", icon: "Target" },
    { title: "Community", desc: "We rise together. Your PR is our PR.", icon: "Users" },
    { title: "Integrity", desc: "Honest coaching. Honest programming. No shortcuts.", icon: "Shield" },
    { title: "Excellence", desc: "Chase mastery, not perfection.", icon: "Award" },
];

export const STATS = [
    { value: "50+", label: "Members in 90 Days" },
    { value: "6", label: "Signature Programs" },
    { value: "5\u2605", label: "Community Rating" },
    { value: "12+", label: "Years Coaching" },
];

export const TESTIMONIALS = [
    {
        name: "Vikram T.",
        role: "Member since Feb 2025",
        quote: "Lost 14 kg in 5 months. But more than that, I found a family that shows up for me every single day.",
        rating: 5,
        image: "/images/testimonials/vikram.jpg"
    },
    {
        name: "Sneha R.",
        role: "CrossFit Athlete",
        quote: "The coaching quality is unreal for a neighbourhood box. Every WOD feels personal, every PR is celebrated.",
        rating: 5,
        image: "/images/testimonials/sneha.jpg"
    },
    {
        name: "Karthik P.",
        role: "Cricket Trainee",
        quote: "Coaches who have actually played at the state level. My game and my body have transformed together.",
        rating: 5,
        image: "/images/testimonials/karthik.jpg"
    },
    {
        name: "Priya M.",
        role: "Weight Loss Member",
        quote: "Dropped 8 kg in 3 months. The nutrition plan and HIIT workouts changed my entire lifestyle.",
        rating: 5,
        image: "/images/testimonials/priya.jpg"
    },
    {
        name: "Rahul S.",
        role: "Strength Training Athlete",
        quote: "My deadlift went from 80kg to 150kg in 6 months. The coaching and programming are world-class.",
        rating: 5,
        image: "/images/testimonials/rahul.jpg"
    },
    {
        name: "Ananya K.",
        role: "CrossFit Member",
        quote: "Went from never doing a pull-up to 5 unbroken. This box builds champions, mentally and physically.",
        rating: 5,
        image: "/images/testimonials/ananya.jpg"
    },
    {
        name: "Suresh N.",
        role: "Cricket Trainee",
        quote: "Batting technique improved drastically. My fitness and power hitting have never been better.",
        rating: 5,
        image: "/images/testimonials/suresh.jpg"
    },
    {
        name: "Divya P.",
        role: "Personal Coaching Client",
        quote: "The 1-on-1 coaching is life-changing. Customized programming that actually works for my body.",
        rating: 5,
        image: "/images/testimonials/divya.jpg"
    },
    {
        name: "Arjun R.",
        role: "Athletic Power Program",
        quote: "My sprint times dropped by 0.5 seconds in 2 months. This is where athletes are forged.",
        rating: 5,
        image: "/images/testimonials/arjun.jpg"
    },
    {
        name: "Meera J.",
        role: "Member since Jan 2025",
        quote: "Started with zero fitness. Now I can do handstands. This community believes in you even when you don't.",
        rating: 5,
        image: "/images/testimonials/meera.jpg"
    }
];

export const FACILITIES = [
    "Full CrossFit rig with multiple pull-up stations",
    "Olympic weightlifting platforms & bumper plates",
    "Full range of dumbbells, kettlebells and med balls",
    "Rowers, assault bikes and skierg conditioning",
    "Dedicated cricket coaching net & training area",
    "Clean, air-circulated space with showers & lockers",
];

export const FAQS = [
    { q: "Where is APC CrossFit located?", a: "We are located in Gajularamaram, Hyderabad. Our facility is easily accessible with ample parking for two-wheelers and cars right outside." },
    { q: "What are the timings?", a: "We are open Monday to Saturday from 5 AM to 10 PM, and Sunday from 6 AM to 12 PM. Multiple class slots are available throughout the day." },
    { q: "Do I need prior fitness experience?", a: "Not at all. Every workout is scalable and coach-led. We start with a foundations program to teach you movements safely, then integrate you into regular classes at your own pace." },
    { q: "Is the gym for both men and women?", a: "Absolutely. APC CrossFit is for men, women and young champions. Our community is diverse, welcoming, and coached with equal attention regardless of gender or age." },
    { q: "What should I bring for my first session?", a: "Just yourself, a water bottle, comfortable athletic wear, and training shoes. We provide all the equipment you will need." },
    { q: "Do you offer trial classes?", a: "Yes. Your first class is on us. Fill out the enquiry form and we will book you in for a complimentary intro session." },
    { q: "How many days a week should I train?", a: "Most members train 3\u20135 days a week. We recommend starting with 3 sessions and increasing as your recovery adapts." },
    { q: "Do you coach cricket athletes seriously?", a: "Very seriously. Our leadership includes state-level cricket champions. We have already sent athletes to BCCI zonal camps within our first year." },
    { q: "What are the membership options?", a: "We offer monthly, quarterly, half-yearly, and annual memberships. Drop-in classes and sport-specific packages are also available." },
];

export const INSTAGRAM_POSTS = [
    { url: "https://www.instagram.com/reel/DVBKj1kkuEs/", type: "reel" },
    { url: "https://www.instagram.com/reel/DXWbLTNjpkK/", type: "reel" },
    { url: "https://www.instagram.com/p/DZy7bdtnSAf/", type: "post" },
];

export const INSTAGRAM_GALLERY = [
    { url: "https://www.instagram.com/p/C8Uq5wPPZQx/", type: "post" },
    { url: "https://www.instagram.com/p/C7fk1t0Popo/", type: "post" },
    { url: "https://www.instagram.com/reel/C9m2Y_5oZQe/", type: "reel" },
    { url: "https://www.instagram.com/reel/C6xn8QqLpZk/", type: "reel" },
];

// Drop these image files into /public/images/ (see /public/images/README.md).
export const GALLERY_IMAGES = Array.from({ length: 16 }, (_, i) => `/images/gallery-${i + 1}.jpg`);
export const HERO_IMAGES = ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"];
export const CHAMPION_IMAGES = [
    "/images/champion-1.jpg",
    "/images/champion-2.jpg",
    "/images/champion-3.jpg",
    "/images/champion-4.jpg",
];

export const ACHIEVEMENTS = [
    {
        id: 1,
        image: "/images/achievements/achievement-1.jpg",
        title: "National Powerlifting Champion",
        description: "Our athlete won gold at the National Powerlifting Championships 2025, setting a new state record."
    },
    {
        id: 2,
        image: "/images/achievements/achievement-2.jpg",
        title: "BCCI Zonal Cricket Selection",
        description: "Young cricketer from APC CrossFit selected for BCCI Zonal Cricket Camp, coached by our state-level mentors."
    },
    {
        id: 3,
        image: "/images/achievements/achievement-3.jpg",
        title: "Weight Loss Transformation of the Year",
        description: "Member lost 18 kg in 6 months, recognized as the most inspiring transformation in Gajularamaram."
    },
    {
        id: 4,
        image: "/images/achievements/achievement-4.jpg",
        title: "State-Level Cricket Championship",
        description: "APC CrossFit cricket team won the District Cricket Championship, with 3 players scoring centuries."
    },
    {
        id: 5,
        image: "/images/achievements/achievement-5.jpg",
        title: "CrossFit Open Top 10 Finish",
        description: "Two APC athletes finished in the top 10 of the CrossFit Open 2025, representing Hyderabad."
    },
    {
        id: 6,
        image: "/images/achievements/achievement-6.jpg",
        title: "Youth Athlete of the Year",
        description: "14-year-old APC athlete awarded 'Youth Athlete of the Year' for outstanding performance in athletics."
    },
];
