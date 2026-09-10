import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  PhoneCall,
  Banknote,
  Truck,
  Clock,
  DollarSign,
  ArrowRight,
  Phone,
} from "lucide-react";
import { SITE } from "@/lib/constants";

import PhotoCarousel from "@/components/PhotoCarousel";

export const metadata: Metadata = {
  title: "Junk That Car — We Buy Junk Cars for Cash | Free Towing",
};

/*
 * NOTE (2026-09-10): fabricated testimonials removed — FTC compliance
 * (16 CFR Part 465). When REAL reviews exist, restore this section using
 * verbatim quotes with permission. See src/app/reviews/page.tsx header
 * note for the full checklist. Keeping the data shape as a comment:
 *
 * const testimonials: Review[] = [
 *   {
 *     id: "1",
 *     author: "<Real customer>",
 *     rating: 5,
 *     content: "<Verbatim quote, with written permission>",
 *     date: "<YYYY-MM-DD>",
 *     location: "<City, WA>",
 *   },
 * ];
 */


const servicePromises = [
  {
    title: "Same-day pickup",
    description:
      "Most cars are picked up within hours of accepting the offer.",
  },
  {
    title: "The quote is the price",
    description:
      "What we say on the phone is what you get paid at the curb.",
  },
  {
    title: "Any condition",
    description:
      "Missing parts, flat tires, no title in hand. We'll tell you straight if we can take it.",
  },
];

const howItWorks = [
  {
    icon: ClipboardList,
    title: "Get a Quote",
    description:
      "Tell us about your car — year, make, model, and condition. It takes less than two minutes.",
  },
  {
    icon: PhoneCall,
    title: "Accept Your Offer",
    description:
      "We call you back with a fair, no-obligation cash offer — usually within the hour. No haggling, no pressure.",
  },
  {
    icon: Banknote,
    title: "Get Paid",
    description:
      "We come to you with free towing and pay cash on the spot. Same-day pickup available.",
  },
];

const whyChooseUs = [
  {
    icon: DollarSign,
    title: "Strong Offers",
    description:
      "We pay competitively for cars in any condition — running, wrecked, or totaled — and we'll tell you honestly if another buyer can do better.",
  },
  {
    icon: Truck,
    title: "Free Towing",
    description:
      "No hidden fees. We pick up your car anywhere in the Seattle metro area at no cost to you.",
  },
  {
    icon: Clock,
    title: "Same-Day Pickup",
    description:
      "Need it gone today? We can have a tow truck at your door within hours of accepting your offer.",
  },
];

/*
 * StarRating — unused since testimonials removal (2026-09-10). Kept here
 * (commented) so the real-reviews restore is a pure uncomment:
 *
 * function StarRating({ rating }: { rating: number }) {
 *   return (
 *     <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
 *       {Array.from({ length: 5 }, (_, i) => (
 *         <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-brand-500 text-brand-500" : "text-jtc-border"}`} />
 *       ))}
 *     </div>
 *   );
 * }
 */

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Subtle radial gradient accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-jtc-charcoal leading-tight">
              Sell Your Junk Car for{" "}
              <span className="text-brand-800">Top Dollar</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-jtc-slate max-w-2xl leading-relaxed">
              Free towing, same-day pickup, and cash in your hand. We buy cars in
              any condition — running, wrecked, or missing parts — across the
              Seattle metro area.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-jtc-charcoal font-semibold text-lg hover:bg-brand-800 hover:text-white transition-colors shadow-lg shadow-brand-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-jtc-slate hover:text-jtc-charcoal transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-brand-800" />
                {SITE.phone}
              </a>
            </div>
            </div>

            {/* Side carousel — client photos */}
            <div className="lg:col-span-5">
              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-jtc-tint border-y border-jtc-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-jtc-charcoal tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-jtc-slate max-w-2xl mx-auto">
              Three simple steps from junk car to cash. Most customers go from
              quote to paid the same day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                {/* Step number connector */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-gradient-to-r from-brand-500 to-brand-700" />
                )}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/10 ring-1 ring-brand-500/20 mb-6">
                  <step.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-xl font-semibold text-jtc-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-jtc-slate leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-jtc-charcoal tracking-tight">
            Why Choose {SITE.name}
          </h2>
          <p className="mt-4 text-lg text-jtc-slate max-w-2xl mx-auto">
            We make selling your junk car fast, easy, and profitable. Here&apos;s what
            sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-jtc-border bg-white p-8 hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/5 transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 mb-5">
                <item.icon className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="text-lg font-semibold text-jtc-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-jtc-slate leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Service promise cards ───
          NOTE (2026-09-10): replaced fabricated testimonials (FTC compliance).
          These are service commitments, not customer quotes — no names, no
          ratings, no quotation marks. When REAL reviews exist, restore the
          testimonials section from git history (see top-of-file note). */}
      <section className="bg-jtc-tint border-y border-jtc-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-jtc-charcoal tracking-tight">
              Our Promises To You
            </h2>
            <p className="mt-4 text-lg text-jtc-slate max-w-2xl mx-auto">
              No invented testimonials here. Just the commitments we make on
              every single pickup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePromises.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-jtc-border bg-white p-6 sm:p-8 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-brand-800">{p.title}</h3>
                <p className="mt-4 text-jtc-charcoal leading-relaxed flex-1">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-jtc-charcoal tracking-tight">
            Ready to Get Cash for Your Car?
          </h2>
          <p className="mt-4 text-lg text-jtc-slate max-w-xl mx-auto">
            Get a free, no-obligation quote in minutes. We&apos;ll buy your car no
            matter the condition.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-jtc-charcoal font-semibold text-lg hover:bg-brand-800 hover:text-white transition-colors shadow-lg shadow-brand-500/25"
            >
              Get Your Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-jtc-slate hover:text-jtc-charcoal transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-brand-800" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
