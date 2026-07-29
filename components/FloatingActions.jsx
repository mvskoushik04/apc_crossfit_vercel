import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/data";

export default function FloatingActions() {
    return (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
            <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%20APC%20CrossFit%2C%20I%27d%20like%20to%20know%20more.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="h-12 w-12 rounded-full bg-[hsl(142_55%_40%)] hover:bg-[hsl(142_55%_45%)] text-white shadow-elevated flex items-center justify-center animate-pulse-gold transition-smooth"
            >
                <MessageCircle size={22} />
            </a>
            <a
                href={`tel:${SITE.phone}`}
                aria-label={`Call ${SITE.phone}`}
                className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated flex items-center justify-center transition-smooth"
            >
                <Phone size={22} />
            </a>
        </div>
    );
}
