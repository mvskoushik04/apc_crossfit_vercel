"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const testimonial = TESTIMONIALS[currentIndex];

    return (
        <div className="relative">
            <div className="flex items-center gap-8">
                <button
                    onClick={prevSlide}
                    className="hidden lg:flex h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-smooth items-center justify-center text-muted-foreground hover:text-primary flex-shrink-0"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex-1 min-h-[300px]">
                    <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-10">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Image */}
                            <div className="flex-shrink-0">
                                <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/30">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex justify-center md:justify-start gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-lg md:text-xl font-light text-foreground leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="mt-4">
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-smooth ${
                                    i === currentIndex 
                                        ? "w-8 bg-primary" 
                                        : "w-2 bg-border hover:bg-primary/40"
                                }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    className="hidden lg:flex h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-smooth items-center justify-center text-muted-foreground hover:text-primary flex-shrink-0"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Mobile arrows */}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
                <button
                    onClick={prevSlide}
                    className="h-10 w-10 rounded-full border border-border hover:border-primary transition-smooth flex items-center justify-center text-muted-foreground hover:text-primary"
                >
                    <ChevronLeft size={18} />
                </button>
                <button
                    onClick={nextSlide}
                    className="h-10 w-10 rounded-full border border-border hover:border-primary transition-smooth flex items-center justify-center text-muted-foreground hover:text-primary"
                >
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
