import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "h-[76px]" }: { className?: string }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Lanka Women e-Market home">
      <Image
        src="/logo.png"
        alt="Lanka Women e-Market"
        width={388}
        height={360}
        preload
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
