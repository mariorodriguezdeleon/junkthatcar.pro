"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-950/95 backdrop-blur border-b border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-brand-400 transition-colors">
            <Car className="w-6 h-6 text-brand-400" />
            <span>{SITE.name}</span>
            <span className="text-brand-400">.pro</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="ml-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
            >
              {SITE.phone}
            </a>
            <Link
              href="/get-quote"
              className="ml-1 px-4 py-2 rounded-lg text-sm font-semibold bg-brand-500 text-white hover:bg-brand-400 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-brand-800"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 border-t border-brand-800 mt-2 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-quote"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-center bg-brand-500 text-white hover:bg-brand-400 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}