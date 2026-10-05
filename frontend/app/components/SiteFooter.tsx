import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "../lib/data";

export default function SiteFooter() {
  return (
    <footer className="bg-white px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row">
        <Logo className="h-20" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/60 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Lanka Women e-Market. Made with care in Sri Lanka.
        </p>
      </div>
    </footer>
  );
}
