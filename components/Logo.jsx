import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = "md" }) {
    const sizes = {
        sm: "h-8 w-auto",
        md: "h-10 w-auto",
        lg: "h-14 w-auto",
    };

    return (
        <Link href="/" className="flex items-center">
            <Image 
                src="/images/logo.png" 
                alt="APC CrossFit" 
                width={120} 
                height={40} 
                className={sizes[size]}
                priority
            />
        </Link>
    );
}
