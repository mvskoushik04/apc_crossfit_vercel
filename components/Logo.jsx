import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "md" }) {
    const sizes = {
        sm: "h-8 w-auto",
        md: "h-10 w-auto",
        lg: "h-14 w-auto",
    };

    const textSizes = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
    };

    return (
        <Link href="/" className="flex items-center gap-3">
            <Image 
                src="/images/APC_Logo.png" 
                alt="APC CrossFit" 
                width={120} 
                height={40} 
                className={sizes[size]}
                priority
            />
            <div className="flex flex-col">
                <span className={`font-display font-semibold text-foreground leading-tight ${textSizes[size]}`}>
                    APC CROSSFIT
                </span>
                <span className="text-[10px] text-muted-foreground font-sans uppercase tracking-[0.3em]">
                    GAJULARAMARAM, HYDERABAD
                </span>
            </div>
        </Link>
    );
}
