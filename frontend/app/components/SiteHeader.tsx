"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "../lib/data";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-[32px] py-1 pl-6 pr-3">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active ? "bg-ink text-white" : "text-ink/75 hover:bg-white/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              href="/products"
              aria-label="Search products"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/80 transition hover:bg-white/70 sm:flex"
            >
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <button
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition hover:bg-white/70"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-magenta" />
            </button>
            <Link
              href="#"
              className="hidden px-3 text-sm font-medium text-ink/80 hover:text-ink md:block"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-magenta sm:block"
            >
              Become a Seller
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white lg:hidden"
            >
              {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-ink/10 pb-3 pt-3 lg:hidden">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active ? "bg-ink text-white" : "text-ink/80 hover:bg-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-magenta px-4 py-3 text-center text-sm font-semibold text-white sm:hidden"
            >
              Become a Seller
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
